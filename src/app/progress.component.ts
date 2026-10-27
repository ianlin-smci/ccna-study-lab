import {GlossaryTextComponent} from './glossary-text.component';
import {Component,computed,inject,signal} from '@angular/core';
import {DatePipe} from '@angular/common';
import {RouterLink} from '@angular/router';
import {DOMAINS,LESSONS} from './data';
import {ProgressService} from './progress.service';
import {IconComponent} from './ui';
@Component({standalone:true,imports:[RouterLink,DatePipe,IconComponent,GlossaryTextComponent],templateUrl:'./progress.component.html'})
export class ProgressComponent {store=inject(ProgressService);domains=DOMAINS;error=signal('');percent(a:number,b:number){return b?Math.round(a/b*100):0;}done(d:number){return LESSONS.filter(l=>l.d===d&&this.store.state().done.includes(l.id)).length;}total(d:number){return LESSONS.filter(l=>l.d===d).length;}best=computed(()=>{const a=this.store.state().attempts.filter(a=>a.mode==='exam');return a.length?Math.max(...a.map(x=>x.score))+'%':'—';});async restore(e:Event){const input=e.target as HTMLInputElement,file=input.files?.[0];if(!file)return;try{if(file.size>5e6)throw Error('Backup is too large.');const text=await file.text();const b=JSON.parse(text);if(b.app!=='packetwise')throw Error('Choose a Packetwise JSON backup.');if(window.confirm('Restore this backup? It replaces progress in this browser.')){this.store.restore(text);this.error.set('');}}catch(err){this.error.set(err instanceof Error?err.message:'Cannot read this backup.');}finally{input.value='';}}reset(){if(window.confirm('Reset all saved progress and notes? Export a backup first if you want to keep them.'))this.store.reset();}}
