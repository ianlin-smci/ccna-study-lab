import {GlossaryTextComponent} from './glossary-text.component';
import {Component,computed,inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ActivatedRoute,RouterLink} from '@angular/router';
import {DOMAINS,QUESTIONS} from './data';
import {QuizService} from './quiz.service';
import {IconComponent} from './ui';
@Component({standalone:true,imports:[FormsModule,RouterLink,IconComponent,GlossaryTextComponent],templateUrl:'./quiz.component.html'})
export class QuizComponent {quiz=inject(QuizService);mode=inject(ActivatedRoute).snapshot.data['mode'] as 'exam'|'practice';domains=DOMAINS;questionCount=QUESTIONS.length;domain='0';count=10;session=computed(()=>this.quiz.session()?.mode===this.mode?this.quiz.session():null);current=computed(()=>{const s=this.session();return s?.questions[s.index];});answer=computed(()=>{const s=this.session();return s?.answers[s.index];});wrong=computed(()=>{const s=this.session();return s?.questions.filter((q,i)=>!s.answers[i]?.ok)||[];});correct=computed(()=>this.session()?.answers.filter(a=>a?.ok).length||0);clock(){const t=this.quiz.remaining();return String(Math.floor(t/60)).padStart(2,'0')+':'+String(t%60).padStart(2,'0');}percent(a:number,b:number){return b?Math.round(a/b*100):0;}end(){if(window.confirm('Finish this session? Unanswered questions count as incorrect.'))this.quiz.finish();}}
