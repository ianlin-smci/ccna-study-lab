import {Injectable,signal,computed,inject,DestroyRef} from '@angular/core';
import {DOMAINS,QUESTIONS} from './data';
import {Question,Answer,Attempt} from './models';
import {ProgressService} from './progress.service';
import {canonicalQuestionId} from './question-aliases';
import {shuffle} from './ui';
export interface Session {mode:'exam'|'practice';questions:Question[];index:number;answers:(Answer|undefined)[];end:number;finished:boolean;result?:Attempt}
@Injectable({providedIn:'root'})
export class QuizService {
 store=inject(ProgressService);session=signal<Session|null>(null);now=signal(Date.now());remaining=computed(()=>{this.now();return Math.max(0,Math.ceil(((this.session()?.end||Date.now())-Date.now())/1000));});
 constructor(){const timer=setInterval(()=>{this.now.set(Date.now());const s=this.session();if(s?.mode==='exam'&&!s.finished&&this.remaining()===0){this.finish();this.store.notify('Time is up. Your mock exam has been scored.');}},1000);inject(DestroyRef).onDestroy(()=>clearInterval(timer));}
 start(mode:'exam'|'practice',domain:string,count:number){let pool:Question[]=[];if(mode==='exam'){for(const d of DOMAINS)pool.push(...shuffle(QUESTIONS.filter(q=>q.d===d.id)).slice(0,Math.round(60*d.weight/100)));pool=shuffle(pool);}else{const missed=new Set(this.store.state().answers.filter(a=>!a.ok).map(a=>canonicalQuestionId(a.id)));pool=shuffle(QUESTIONS.filter(q=>domain==='missed'?missed.has(q.id):domain==='0'||q.d===+domain)).slice(0,count);}if(!pool.length){this.store.notify('No missed questions yet. Try mixed practice first.');return;}const questions=pool.map(q=>{const options=shuffle(q.options.map((text,i)=>({text,i})));return {...q,options:options.map(o=>o.text),answer:options.findIndex(o=>o.i===q.answer)};});this.session.set({mode,questions,index:0,answers:[],end:Date.now()+7200000,finished:false});this.now.set(Date.now());}
 choose(i:number){const s=this.session();if(!s||s.finished||s.mode==='practice'&&s.answers[s.index])return;const q=s.questions[s.index],a={id:q.id,d:q.d,choice:i,ok:i===q.answer};const answers=[...s.answers];answers[s.index]=a;this.session.set({...s,answers});if(s.mode==='practice')this.store.answer(a);}
 next(){const s=this.session();if(!s||!s.answers[s.index])return;if(s.index===s.questions.length-1)this.finish();else this.session.set({...s,index:s.index+1});}
 previous(){const s=this.session();if(s&&s.index>0)this.session.set({...s,index:s.index-1});}
 finish(){const s=this.session();if(!s||s.finished)return;const result:Attempt={mode:s.mode,score:Math.round(s.answers.filter(a=>a?.ok).length/s.questions.length*100),answered:s.answers.filter(Boolean).length,total:s.questions.length,date:Date.now(),domains:DOMAINS.map(d=>({d:d.id,total:s.questions.filter(q=>q.d===d.id).length,correct:s.questions.filter((q,i)=>q.d===d.id&&s.answers[i]?.ok).length}))};if(s.mode==='exam')s.questions.forEach((q,i)=>this.store.answer({id:q.id,d:q.d,ok:!!s.answers[i]?.ok}));this.session.set({...s,finished:true,result});this.store.attempt(result);}
}
