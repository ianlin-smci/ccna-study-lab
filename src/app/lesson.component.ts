import {Component,DestroyRef,ElementRef,afterRenderEffect,computed,inject,signal,viewChild,viewChildren} from '@angular/core';
import {ActivatedRoute,Router,RouterLink,Scroll as RouterScroll} from '@angular/router';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {DOMAINS,LESSONS} from './data';
import {ProgressService} from './progress.service';
import {IconComponent} from './ui';
import {GlossaryTextComponent} from './glossary-text.component';
import {LessonArticleComponent} from './lesson-article.component';
import {BLUEPRINT} from './blueprint.data';

@Component({
  standalone:true,imports:[RouterLink,IconComponent,GlossaryTextComponent,LessonArticleComponent],
  templateUrl:'./lesson.component.html'
})
export class LessonComponent {
  readonly store=inject(ProgressService);
  readonly id=signal('1.1');
  readonly activeId=signal('1.1');
  readonly activeTopic=signal('');
  readonly blueprint=BLUEPRINT;
  readonly lesson=computed(()=>LESSONS.find(l=>l.id===this.id()));
  readonly domain=computed(()=>DOMAINS[(this.lesson()?.d||1)-1]);
  readonly siblings=computed(()=>LESSONS.filter(l=>l.d===this.lesson()?.d));
  private readonly articles=viewChildren(LessonArticleComponent,{read:ElementRef<HTMLElement>});
  private readonly lessonNav=viewChild<ElementRef<HTMLElement>>('lessonNav');
  private frame=0;
  private navigationFrame=0;
  private section='';
  private readonly resizeObserver=new ResizeObserver(()=>this.scheduleMeasurement());

  constructor(){
    inject(ActivatedRoute).paramMap.pipe(takeUntilDestroyed()).subscribe(p=>{
      const raw=p.get('id')||'1.1',parent=raw.match(/^(\d+\.\d+)\.[a-z]$/)?.[1];
      const alias=parent&&BLUEPRINT[parent]?.subtopics.some(t=>t.id===raw);
      this.id.set(alias?parent!:raw);this.activeId.set(this.id());this.activeTopic.set('');
      this.section=alias?raw:p.get('section')||'';
    });
    // Run after the router's normal viewport restoration, once the domain is rendered.
    inject(Router).events.pipe(takeUntilDestroyed()).subscribe(e=>{
      if(e instanceof RouterScroll){
        cancelAnimationFrame(this.navigationFrame);
        this.navigationFrame=requestAnimationFrame(()=>{
          if(e.position)window.scrollTo({left:e.position[0],top:e.position[1],behavior:'instant'});
          else this.target()?.scrollIntoView({block:'start',behavior:'instant'});
          this.scheduleMeasurement();
        });
      }
    });
    afterRenderEffect(()=>{
      const articles=this.articles();
      this.resizeObserver.disconnect();
      for(const article of articles)this.resizeObserver.observe(article.nativeElement);
      this.scheduleMeasurement();
    });
    afterRenderEffect(()=>this.keepHighlightVisible(this.activeId(),this.activeTopic()));
    const onScroll=()=>this.scheduleMeasurement();
    window.addEventListener('scroll',onScroll,{passive:true});
    window.addEventListener('resize',onScroll,{passive:true});
    inject(DestroyRef).onDestroy(()=>{
      cancelAnimationFrame(this.frame);cancelAnimationFrame(this.navigationFrame);
      this.resizeObserver.disconnect();
      window.removeEventListener('scroll',onScroll);window.removeEventListener('resize',onScroll);
    });
  }

  jumpIfCurrent(event:MouseEvent,id:string,section=''){
    // RouterLink ignores a link to the current URL; it must still jump after manual scrolling.
    if(event.button!==0||event.ctrlKey||event.metaKey||event.shiftKey||event.altKey||id!==this.id()||this.section!==section)return;
    this.target(id,section)?.scrollIntoView({block:'start',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
  }

  private target(id=this.id(),section=this.section){
    const topic=BLUEPRINT[id]?.subtopics.some(t=>t.id===section);
    return document.getElementById((section==='commands'?'command-guide-':topic?'topic-':'lesson-')+(topic?section:id))||document.getElementById('lesson-'+id);
  }

  private scheduleMeasurement(){
    if(this.frame)return;
    this.frame=requestAnimationFrame(()=>{this.frame=0;this.updateActiveLesson();});
  }

  private updateActiveLesson(){
    const articles=this.articles().map(a=>a.nativeElement as HTMLElement);
    if(!articles.length)return;
    // Use a stable reading line near the top, including when a tall lesson fills the viewport.
    const readingLine=Math.min(140,innerHeight*.2);
    let active=articles[0];
    for(const article of articles){if(article.getBoundingClientRect().top<=readingLine)active=article;else break;}
    // Short final lessons must still activate when the reader reaches the page's end.
    const last=articles.at(-1)!;
    if(scrollY+innerHeight>=document.documentElement.scrollHeight-2&&last.getBoundingClientRect().top<innerHeight)active=last;
    const id=active.dataset['lessonId']!;
    this.activeId.set(id);
    const topic=Array.from(active.querySelectorAll<HTMLElement>('[data-blueprint-topic]')).find(t=>{
      const box=t.getBoundingClientRect();return box.top<=readingLine&&box.bottom>readingLine;
    });
    this.activeTopic.set(topic?.dataset['blueprintTopic']||'');
  }

  private keepHighlightVisible(id:string,topic:string){
    const nav=this.lessonNav()?.nativeElement;
    if(!nav?.clientHeight)return;
    const link=Array.from(nav.querySelectorAll<HTMLAnchorElement>('a')).find(a=>topic?a.dataset['subtopicId']===topic:a.dataset['lessonId']===id);
    if(!link)return;
    const box=nav.getBoundingClientRect(),item=link.getBoundingClientRect();
    if(item.top<box.top+8)nav.scrollTop+=item.top-box.top-8;
    else if(item.bottom>box.bottom-8)nav.scrollTop+=item.bottom-box.bottom+8;
  }
}
