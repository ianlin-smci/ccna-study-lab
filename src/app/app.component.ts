import {GlossaryTextComponent} from './glossary-text.component';
import {Component,HostListener,computed,effect,inject,signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router,NavigationEnd,RouterLink,RouterLinkActive,RouterOutlet} from '@angular/router';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {DOMAINS,LESSONS,COMMAND_GUIDES} from './data';
import {IconComponent} from './ui';
import {BLUEPRINT} from './blueprint.data';
import {TEXTBOOK_REVIEWS} from './textbook.data';
import {GlossaryService} from './glossary.service';
import {GlossaryPopoverComponent} from './glossary-popover.component';
import {ProgressService,today} from './progress.service';
@Component({selector:'app-root',standalone:true,imports:[RouterOutlet,RouterLink,RouterLinkActive,FormsModule,IconComponent,GlossaryPopoverComponent,GlossaryTextComponent],templateUrl:'./app.component.html'})
export class AppComponent {
 glossary=inject(GlossaryService);store=inject(ProgressService);router=inject(Router);menu=signal(false);mobile=signal(window.matchMedia('(max-width:740px)').matches);crumb=signal('Overview');query=signal('');date='';minDate=today();private previousFocus:HTMLElement|null=null;
 nav=[['overview','grid','Overview'],['path','book','Learning path'],['practice','check','Practice questions'],['flashcards','layers','Flashcards'],['commands','code','Command reference'],['glossary','book','Glossary'],['textbook','book','Textbook alignment'],['labs','terminal','Practice lab'],['exam','clock','Mock exam'],['progress','chart','My progress'],['resources','link','Study resources']];
 results=computed(()=>{const q=this.query().toLowerCase().trim();return LESSONS.filter(l=>(l.id+' '+l.title+' '+l.intro+' '+l.points.join(' ')+' '+BLUEPRINT[l.id].subtopics.map(t=>t.id+' '+t.title+' '+t.body).join(' ')+' '+TEXTBOOK_REVIEWS[l.id].sections.map(s=>s.heading+' '+s.body).join(' ')+' '+COMMAND_GUIDES[l.id].blocks.map(b=>b.title+' '+b.code).join(' ')).toLowerCase().includes(q)).slice(0,q?25:7);});domains=DOMAINS;
 constructor(){this.router.events.pipe(takeUntilDestroyed()).subscribe(e=>{if(e instanceof NavigationEnd){const part=e.urlAfterRedirects.split('/')[1]?.split('?')[0]||'overview';this.crumb.set(part==='lesson'?'Learning path':this.nav.find(n=>n[0]===part)?.[2]||'Overview');this.menu.set(false);this.closeDialog();this.glossary.close();document.title='Packetwise — '+this.crumb();}});effect(()=>{const d=this.store.dialog();if(d){this.previousFocus=document.activeElement as HTMLElement;if(d==='plan')this.date=this.store.state().date;setTimeout(()=>document.querySelector<HTMLInputElement>('.overlay input')?.focus(),0);}});}
 searchLink(id:string){const topic=BLUEPRINT[id].subtopics.find(t=>t.id.toLowerCase()===this.query().trim().toLowerCase());return topic?['/lesson',id,topic.id]:['/lesson',id];}
 openSearch(){this.query.set('');this.store.dialog.set('search');}
 closeDialog(){if(this.store.dialog()){this.store.dialog.set(null);this.previousFocus?.focus();}}
 @HostListener('window:resize') resize(){this.mobile.set(window.matchMedia('(max-width:740px)').matches);}
 @HostListener('document:keydown',['$event']) key(e:KeyboardEvent){if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();this.openSearch();}if(e.key==='Escape'){this.closeDialog();this.menu.set(false);}if(e.key==='Tab'&&this.store.dialog()){const fs=[...document.querySelectorAll<HTMLElement>('.overlay button,.overlay input,.overlay a')].filter(x=>!x.hasAttribute('disabled'));const first=fs[0],last=fs[fs.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last?.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first?.focus();}}}
}
