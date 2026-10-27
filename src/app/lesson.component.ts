import {Component,computed,inject,signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ActivatedRoute,RouterLink} from '@angular/router';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {DOMAINS,LESSONS} from './data';
import {ProgressService} from './progress.service';
import {IconComponent} from './ui';
import {CommandGuideComponent} from './commands.component';
@Component({standalone:true,imports:[FormsModule,RouterLink,IconComponent,CommandGuideComponent],templateUrl:'./lesson.component.html'})
export class LessonComponent {store=inject(ProgressService);id=signal('1.1');lesson=computed(()=>LESSONS.find(l=>l.id===this.id()));domain=computed(()=>DOMAINS[(this.lesson()?.d||1)-1]);siblings=computed(()=>LESSONS.filter(l=>l.d===this.lesson()?.d));next=computed(()=>LESSONS[LESSONS.findIndex(l=>l.id===this.id())+1]);answer=signal<number|null>(null);note='';constructor(){inject(ActivatedRoute).paramMap.pipe(takeUntilDestroyed()).subscribe(p=>{this.id.set(p.get('id')||'1.1');this.answer.set(null);this.note=this.store.state().notes[this.id()]||'';if(p.get('section')==='commands')setTimeout(()=>this.jump(),100);});}choose(i:number){if(this.answer()!==null)return;this.answer.set(i);const l=this.lesson()!;this.store.answer({id:l.id+'-a',d:l.d,ok:i===l.answer});}saveNote(){this.store.note(this.id(),this.note);}jump(){document.getElementById('command-guide')?.scrollIntoView({block:'start',behavior:'smooth'});}}
