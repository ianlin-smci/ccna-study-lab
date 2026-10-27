import {AfterViewInit,Component,DestroyRef,ElementRef,Renderer2,computed,effect,untracked,inject,input} from '@angular/core';
import {GlossaryService} from './glossary.service';
import type {GlossaryEntry} from './glossary-types';
/** Angular owns every text segment, so live bindings, selection and command content remain intact. */
@Component({selector:'pw-term-text',standalone:true,host:{class:'glossary-text'},template:`@for(segment of segments();track $index){@if(segment.term;as term){@if(interactive()){<span #anchor class="glossary-term glossary-term-embedded" [attr.data-term]="term.abbreviation" (pointerenter)="hover($event,term,anchor)" (pointerleave)="glossary.hide(anchor)" (click)="glossary.pin(term,anchor)">{{segment.text}}</span>}@else{<button #anchor type="button" class="glossary-term" [attr.data-term]="term.abbreviation" [attr.aria-label]="segment.text+', show definition'" (pointerenter)="hover($event,term,anchor)" (pointerleave)="glossary.hide(anchor)" (focus)="glossary.show(term,anchor,'focus')" (blur)="glossary.hide(anchor,true)" (click)="glossary.pin(term,anchor)">{{segment.text}}</button>}}@else{<ng-container>{{segment.text}}</ng-container>}}`})
export class GlossaryTextComponent implements AfterViewInit {
  text=input<string|number|null|undefined>('');interactive=input(false);glossary=inject(GlossaryService);private host=inject<ElementRef<HTMLElement>>(ElementRef);private renderer=inject(Renderer2);private destroy=inject(DestroyRef);
  segments=computed(()=>this.glossary.enabled()?this.glossary.matcher.split(this.text()):[{text:String(this.text()??'')}]);
  constructor(){effect(()=>{this.text();this.glossary.enabled();const active=untracked(()=>this.glossary.active());if(active&&this.host.nativeElement.contains(active.anchor))this.glossary.close();});this.destroy.onDestroy(()=>{const active=this.glossary.active();if(active&&this.host.nativeElement.contains(active.anchor))this.glossary.close();});}
  hover(event:PointerEvent,term:GlossaryEntry,anchor:HTMLElement){if(event.pointerType!=='touch')this.glossary.show(term,anchor);}
  ngAfterViewInit(){if(!this.interactive())return;const parent=this.host.nativeElement.closest<HTMLElement>('button,a,label,summary,[role="button"]');if(!parent)return;
    const focus=this.renderer.listen(parent,'focusin',()=>{const term=this.segments().find(s=>s.term)?.term,anchor=this.host.nativeElement.querySelector<HTMLElement>('.glossary-term');if(term&&anchor)this.glossary.show(term,anchor,'focus');});
    const blur=this.renderer.listen(parent,'focusout',()=>{const anchor=this.host.nativeElement.querySelector<HTMLElement>('.glossary-term');if(anchor)this.glossary.hide(anchor,true);});this.destroy.onDestroy(()=>{focus();blur();});
  }
}
