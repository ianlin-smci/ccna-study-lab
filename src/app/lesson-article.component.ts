import {Component,ElementRef,OnChanges,computed,inject,input,signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {DOMAINS,LESSONS} from './data';
import {ProgressService} from './progress.service';
import {IconComponent} from './ui';
import {CommandGuideComponent} from './commands.component';
import {GlossaryTextComponent} from './glossary-text.component';
import {BLUEPRINT} from './blueprint.data';
import {SupportingTopicComponent} from './supporting-topic.component';
import {supportingTopicsFor} from './supporting-topics.data';
import {BeginnerNoteComponent} from './beginner-note.component';
import {BEGINNER_GUIDES} from './beginner.data';
import {BlueprintTopicsComponent} from './blueprint-topics.component';
import {TextbookNoteComponent} from './textbook-note.component';

@Component({
  selector:'pw-lesson-article',standalone:true,
  imports:[FormsModule,RouterLink,IconComponent,CommandGuideComponent,GlossaryTextComponent,TextbookNoteComponent,BlueprintTopicsComponent,BeginnerNoteComponent,SupportingTopicComponent],
  host:{class:'lesson-anchor','[attr.id]':'"lesson-"+id()','[attr.data-lesson-id]':'id()'},
  templateUrl:'./lesson-article.component.html'
})
export class LessonArticleComponent implements OnChanges {
  readonly id=input.required<string>();
  readonly store=inject(ProgressService);
  readonly lesson=computed(()=>LESSONS.find(l=>l.id===this.id()));
  readonly domain=computed(()=>DOMAINS[(this.lesson()?.d||1)-1]);
  readonly next=computed(()=>LESSONS[LESSONS.findIndex(l=>l.id===this.id())+1]);
  readonly supporting=computed(()=>supportingTopicsFor(this.id()));
  readonly beginner=computed(()=>BEGINNER_GUIDES[this.id()]);
  readonly blueprint=computed(()=>BLUEPRINT[this.id()]);
  readonly answer=signal<number|null>(null);
  private readonly host=inject<ElementRef<HTMLElement>>(ElementRef);
  note='';

  ngOnChanges(){this.answer.set(null);this.note=this.store.state().notes[this.id()]||'';}
  choose(i:number){
    if(this.answer()!==null)return;
    this.answer.set(i);const l=this.lesson()!;
    this.store.answer({id:l.id+'-a',d:l.d,ok:i===l.answer});
  }
  jumpSupporting(event:MouseEvent,slug:string){
    if(event.button!==0||event.ctrlKey||event.metaKey||event.shiftKey||event.altKey)return;
    this.host.nativeElement.querySelector<HTMLElement>('[data-study-topic="'+slug+'"]')?.scrollIntoView({block:'start',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
  }
  saveNote(){this.store.note(this.id(),this.note);}
  jump(){this.host.nativeElement.querySelector('.command-guide')?.scrollIntoView({block:'start',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});}
}
