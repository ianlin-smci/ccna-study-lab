import {Component,computed,input} from '@angular/core';
import {BEGINNER_GUIDES,FOUNDATION_WORDS} from './beginner.data';
import {GlossaryTextComponent} from './glossary-text.component';

@Component({selector:'pw-beginner-note',standalone:true,imports:[GlossaryTextComponent],template:`
@if(guide();as g){<section class="beginner-note" [attr.aria-labelledby]="'beginner-title-'+id()">
 <div class="eyebrow">START WITH THE IDEA</div><h2 [id]="'beginner-title-'+id()">In everyday language</h2>
 <p class="beginner-idea"><pw-term-text [text]="g.idea"/></p><p><strong>A familiar example: </strong><pw-term-text [text]="g.example"/></p>
 <details class="foundation-words" [open]="id()==='1.1'"><summary>New to networks? Start with these words</summary><dl>
 @for(w of foundations;track w[0]){<div><dt><pw-term-text [text]="w[0]"/></dt><dd><pw-term-text [text]="w[1]"/></dd></div>}
 </dl></details>
 <h3>Words used here</h3><dl class="beginner-words">@for(w of g.words;track w.term){<div><dt><pw-term-text [text]="w.term"/></dt><dd><pw-term-text [text]="w.meaning"/></dd></div>}</dl>
 <figure class="beginner-walkthrough"><h3>Walk through the idea</h3><p class="mini-note">Read the numbered cards in order. These explain a process or comparison; the caption says what the diagram represents.</p>
 <ol class="beginner-steps">@for(s of g.steps;track $index){<li><strong><pw-term-text [text]="s.title"/></strong><p><pw-term-text [text]="s.body"/></p></li>}</ol>
 <figcaption><strong>How to read this: </strong><pw-term-text [text]="g.caption"/></figcaption></figure>
 <p class="beginner-takeaway"><strong>Keep this in mind: </strong><pw-term-text [text]="g.remember"/></p>
 </section>}`})
export class BeginnerNoteComponent {
 readonly id=input.required<string>();readonly guide=computed(()=>BEGINNER_GUIDES[this.id()]);
 readonly foundations=FOUNDATION_WORDS;
}
