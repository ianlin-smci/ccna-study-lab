import {Component,computed,input} from '@angular/core';
import {BLUEPRINT} from './blueprint.data';
import {GlossaryTextComponent} from './glossary-text.component';
@Component({selector:'pw-blueprint-topics',standalone:true,imports:[GlossaryTextComponent],template:`@if(objective();as o){<div class="blueprint-topics"><h2>Blueprint subtopics</h2>@for(t of o.subtopics;track t.id){<section class="blueprint-topic" [id]="'topic-'+t.id" [attr.data-blueprint-topic]="t.id" [attr.aria-labelledby]="'topic-title-'+t.id"><h3 [id]="'topic-title-'+t.id"><span class="blueprint-topic-number"><pw-term-text text="{{t.id}}"/></span><pw-term-text [text]="t.title"/></h3><p><pw-term-text [text]="t.body"/></p></section>}</div>}`})
export class BlueprintTopicsComponent {id=input.required<string>();objective=computed(()=>BLUEPRINT[this.id()]);}
