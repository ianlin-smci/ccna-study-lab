import {Component,computed,inject,input,signal} from '@angular/core';
import {GlossaryTextComponent} from './glossary-text.component';
import {supportingTopicsFor,supportingTopicAnchor} from './supporting-topics.data';
import {ProgressService} from './progress.service';

@Component({selector:'pw-supporting-topics',standalone:true,imports:[GlossaryTextComponent],templateUrl:'./supporting-topic.component.html'})
export class SupportingTopicComponent {
 readonly lesson=input.required<string>();readonly topics=computed(()=>supportingTopicsFor(this.lesson()));
 readonly anchor=supportingTopicAnchor;readonly expanded=signal(false);readonly copied=signal('');
 private readonly store=inject(ProgressService);
 async copy(key:string,code:string,element:HTMLElement){
  try{await navigator.clipboard.writeText(code);this.copied.set(key);setTimeout(()=>this.copied.set(''),1800);}
  catch{const range=document.createRange();range.selectNodeContents(element);const selection=window.getSelection();selection?.removeAllRanges();selection?.addRange(range);this.store.notify('Commands selected. Press Ctrl+C or Command+C to copy.');}
 }
}
