import {DestroyRef,Injectable,computed,effect,inject,signal} from '@angular/core';
import {GLOSSARY} from './glossary.data';
import {GlossaryMatcher} from './glossary-matcher';
import type {GlossaryEntry} from './glossary-types';
interface OpenDefinition {term:GlossaryEntry;anchor:HTMLElement;described:HTMLElement;mode:'hover'|'focus'|'pinned'}
const PREFERENCE_KEY='packetwise-preferences-v1';
@Injectable({providedIn:'root'})
export class GlossaryService {
  readonly entries=GLOSSARY;
  readonly matcher=new GlossaryMatcher(GLOSSARY);
  readonly enabled=signal(this.loadPreference());
  readonly active=signal<OpenDefinition|null>(null);
  readonly position=signal({left:12,top:12});
  readonly label=computed(()=>this.enabled()?'Abbreviation hints on':'Abbreviation hints off');
  private hideTimer:ReturnType<typeof setTimeout>|undefined;
  private insidePopup=false;
  constructor(){
    effect(()=>{if(!this.enabled())this.close();});
    const outside=(e:Event)=>{if(!(e.target instanceof Element)||!e.target.closest('.glossary-term,.term-popover'))this.close();};
    const escape=(e:KeyboardEvent)=>{if(e.key==='Escape'&&this.active()){this.close();e.stopImmediatePropagation();}};
    const scroll=(e:Event)=>{if(!(e.target instanceof Element)||!e.target.closest('.term-popover'))this.close();};
    document.addEventListener('pointerdown',outside);document.addEventListener('keydown',escape);document.addEventListener('scroll',scroll,true);window.addEventListener('resize',scroll);
    inject(DestroyRef).onDestroy(()=>{this.close();document.removeEventListener('pointerdown',outside);document.removeEventListener('keydown',escape);document.removeEventListener('scroll',scroll,true);window.removeEventListener('resize',scroll);});
  }
  private loadPreference(){try{const p=JSON.parse(localStorage.getItem(PREFERENCE_KEY)||'{}');return typeof p.glossaryHints==='boolean'?p.glossaryHints:true;}catch{return true;}}
  toggle(){this.enabled.update(v=>!v);try{let p:Record<string,unknown>={};try{const value=JSON.parse(localStorage.getItem(PREFERENCE_KEY)||'{}');if(value&&typeof value==='object'&&!Array.isArray(value))p=value;}catch{}localStorage.setItem(PREFERENCE_KEY,JSON.stringify({...p,glossaryHints:this.enabled()}));}catch{/* The switch remains usable when browser storage is unavailable. */}this.close();}
  show(term:GlossaryEntry,anchor:HTMLElement,mode:'hover'|'focus'|'pinned'='hover'){
    if(!this.enabled()||!anchor.isConnected)return;
    if(mode==='hover'&&window.getSelection()?.isCollapsed===false)return;
    this.cancelHide();const current=this.active();
    if(current?.anchor===anchor&&current.term===term&&current.mode==='pinned'&&mode!=='pinned')return;
    this.removeDescription(current);
    const described=anchor.closest<HTMLElement>('button,a,input,select,textarea,summary,[role="button"]')||anchor;
    const ids=(described.getAttribute('aria-describedby')||'').split(/\s+/).filter(Boolean);if(!ids.includes('pw-glossary-popover'))ids.push('pw-glossary-popover');described.setAttribute('aria-describedby',ids.join(' '));
    const r=anchor.getBoundingClientRect();this.position.set({left:Math.max(12,Math.min(r.left,window.innerWidth-Math.min(360,window.innerWidth-24)-12)),top:Math.max(12,r.bottom+8)});
    this.active.set({term,anchor,described,mode});
  }
  pin(term:GlossaryEntry,anchor:HTMLElement){const current=this.active();if(current?.anchor===anchor&&current.mode==='pinned'){this.close();return;}if(window.getSelection()?.isCollapsed===false)return;this.show(term,anchor,'pinned');}
  hide(anchor?:HTMLElement,blur=false){const a=this.active();if(!a||anchor&&a.anchor!==anchor||this.insidePopup)return;if(!blur&&(a.mode==='pinned'||document.activeElement===a.described))return;this.cancelHide();this.hideTimer=setTimeout(()=>this.close(),160);}
  popupEnter(){this.insidePopup=true;this.cancelHide();}
  popupLeave(){this.insidePopup=false;this.hide();}
  cancelHide(){clearTimeout(this.hideTimer);}
  close(){this.cancelHide();this.removeDescription(this.active());this.active.set(null);this.insidePopup=false;}
  private removeDescription(a:OpenDefinition|null){if(!a)return;const ids=(a.described.getAttribute('aria-describedby')||'').split(/\s+/).filter(x=>x&&x!=='pw-glossary-popover');if(ids.length)a.described.setAttribute('aria-describedby',ids.join(' '));else a.described.removeAttribute('aria-describedby');}
  place(popup:HTMLElement){const a=this.active();if(!a)return;if(!a.anchor.isConnected){this.close();return;}const r=a.anchor.getBoundingClientRect(),w=popup.offsetWidth,h=popup.offsetHeight;const left=Math.max(12,Math.min(r.left,innerWidth-w-12));let top=r.bottom+8;if(top+h>innerHeight-12&&r.top-h-8>=12)top=r.top-h-8;top=Math.max(12,Math.min(top,innerHeight-h-12));const p=this.position();if(p.left!==left||p.top!==top)this.position.set({left,top});}
}
