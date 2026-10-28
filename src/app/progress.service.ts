import {Injectable,signal,computed,DestroyRef,inject} from '@angular/core';
import {Progress,Answer,Attempt} from './models';
import {LESSONS,QUESTIONS} from './data';
import {mergeQuestionRatings} from './question-aliases';
const activeQuestionIDs=new Set(QUESTIONS.map(q=>q.id));
const fresh=():Progress=>({done:[],bookmarks:[],notes:{},answers:[],attempts:[],cards:{},days:[],date:'',labs:[]});
export const today=()=>new Date().toLocaleDateString('en-CA');
function valid(p:unknown):p is Progress{if(!p||typeof p!=='object')return false;const a=p as Progress;return Array.isArray(a.done)&&a.done.every(x=>typeof x==='string'&&LESSONS.some(l=>l.id===x))&&Array.isArray(a.answers)&&a.answers.every(x=>x&&typeof x.id==='string'&&Number.isInteger(x.d)&&x.d>=1&&x.d<=6&&typeof x.ok==='boolean')&&Array.isArray(a.attempts)&&a.attempts.every(x=>x&&['exam','practice'].includes(x.mode)&&Number.isFinite(x.score)&&Number.isFinite(x.total)&&Number.isFinite(x.date))&&(!a.bookmarks||Array.isArray(a.bookmarks)&&a.bookmarks.every(x=>typeof x==='string'))&&(!a.notes||typeof a.notes==='object'&&!Array.isArray(a.notes)&&Object.values(a.notes).every(x=>typeof x==='string'))&&(!a.cards||typeof a.cards==='object'&&!Array.isArray(a.cards)&&Object.values(a.cards).every(x=>x==='again'||x==='known'))&&(!a.days||Array.isArray(a.days)&&a.days.every(x=>typeof x==='string'))&&(!a.labs||Array.isArray(a.labs)&&a.labs.every(x=>Number.isInteger(x)&&x>=0&&x<5))&&(!a.date||/^\d{4}-\d{2}-\d{2}$/.test(a.date));}
@Injectable({providedIn:'root'})
export class ProgressService {
 readonly state=signal<Progress>(this.load());readonly toast=signal('');readonly dialog=signal<'search'|'plan'|null>(null);private timeout:ReturnType<typeof setTimeout>|undefined;
 readonly nextLesson=computed(()=>LESSONS.find(l=>!this.state().done.includes(l.id))||LESSONS[0]);
 readonly accuracy=computed(()=>this.state().answers.length?Math.round(this.state().answers.filter(a=>a.ok).length/this.state().answers.length*100):null);
 readonly currentCards=computed(()=>mergeQuestionRatings(this.state().cards,activeQuestionIDs));
 readonly reviewed=computed(()=>Object.keys(this.currentCards()).length);
 readonly streak=computed(()=>{const s=this.state(),d=new Date();let n=0;if(!s.days.includes(d.toLocaleDateString('en-CA')))d.setDate(d.getDate()-1);while(s.days.includes(d.toLocaleDateString('en-CA'))){n++;d.setDate(d.getDate()-1);}return n;});
 constructor(){inject(DestroyRef).onDestroy(()=>clearTimeout(this.timeout));}
 private load():Progress{try{const p=JSON.parse(localStorage.getItem('packetwise-v1')||'null');return valid(p)?{...fresh(),...p}:fresh();}catch{return fresh();}}
 update(fn:(p:Progress)=>Progress,active=false){let p=fn(this.state());if(active&&!p.days.includes(today()))p={...p,days:[...p.days,today()]};this.state.set(p);try{localStorage.setItem('packetwise-v1',JSON.stringify(p));}catch{this.notify('Browser storage is unavailable. Export a backup to keep your work.');}}
 notify(message:string){this.toast.set(message);clearTimeout(this.timeout);this.timeout=setTimeout(()=>this.toast.set(''),4000);}
 complete(id:string){const done=this.state().done.includes(id);this.update(p=>({...p,done:done?p.done.filter(x=>x!==id):[...p.done,id]}),true);this.notify(done?'Lesson marked incomplete.':'Lesson complete. Another connection made.');}
 bookmark(id:string){this.update(p=>({...p,bookmarks:p.bookmarks.includes(id)?p.bookmarks.filter(x=>x!==id):[...p.bookmarks,id]}));}
 note(id:string,text:string){this.update(p=>({...p,notes:{...p.notes,[id]:text}}));}
 answer(a:Answer){this.update(p=>({...p,answers:[...p.answers,{...a,time:Date.now()}]}),true);}
 attempt(a:Attempt){this.update(p=>({...p,attempts:[a,...p.attempts]}),true);}
 card(id:string,result:'again'|'known'){this.update(p=>({...p,cards:{...p.cards,[id]:result}}),true);}
 lab(id:number){if(!this.state().labs.includes(id))this.update(p=>({...p,labs:[...p.labs,id]}),true);}
 activity(){this.update(p=>p,true);}
 plan(date:string){this.update(p=>({...p,date}));this.dialog.set(null);this.notify('Study plan saved.');}
 planText(){const p=this.state(),days=Math.ceil((new Date(p.date+'T23:59:59').getTime()-Date.now())/86400000),remain=53-p.done.length;if(!p.date)return 'Set an exam date for a suggested lesson pace.';if(days<=0)return 'Your target date has arrived. Focus on review and rest.';if(!remain)return `${days} days for review and practice.`;return `${days} days remaining · aim for ${Math.max(1,Math.ceil(remain/days))} lesson(s) per day, plus labs and review.`;}
 export(){download(JSON.stringify({app:'packetwise',version:1,exported:new Date().toISOString(),progress:this.state()},null,2),'packetwise-progress-'+today()+'.json','application/json');this.notify('Progress backup exported.');}
 restore(text:string){const b=JSON.parse(text);if(b.app!=='packetwise'||b.version!==1||!valid(b.progress))throw Error('This is not a valid Packetwise v1 backup.');this.update(()=>({...fresh(),...b.progress}));this.notify('Your progress has been restored.');}
 reset(){this.update(()=>fresh());this.notify('Progress reset. A fresh start.');}
}
export function download(text:string,name:string,type:string){const u=URL.createObjectURL(new Blob([text],{type})),a=document.createElement('a');a.href=u;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(u),1000);}
