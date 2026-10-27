import {Component,computed,inject,input} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {RouterLink} from '@angular/router';
import {ICONS} from './icons';
import {Domain} from './models';
import {ProgressService} from './progress.service';
import {LESSONS} from './data';
@Component({selector:'pw-icon',standalone:true,template:`<span [innerHTML]="svg()"></span>`})
export class IconComponent {name=input('book');private sanitizer=inject(DomSanitizer);svg=computed(()=>this.sanitizer.bypassSecurityTrustHtml(`<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${ICONS[this.name()]||ICONS['book']}</svg>`));}
@Component({selector:'pw-domain-card',standalone:true,imports:[RouterLink,IconComponent],template:`<a [routerLink]="['/path',domain().id]" class="domain-card" [style.--domain]="domain().color"><div class="domain-top"><span class="domain-symbol"><pw-icon [name]="domain().icon"/></span><span class="weight">{{domain().weight}}% of exam</span></div><div class="domain-num">DOMAIN 0{{domain().id}}</div><h3>{{domain().name}}</h3><p>{{domain().desc}}</p><div class="progress-line"><span [style.width.%]="percent()"></span></div><div class="domain-meta"><span>{{complete()}} / {{total()}} lessons completed</span><pw-icon name="arrow"/></div></a>`})
export class DomainCardComponent {domain=input.required<Domain>();store=inject(ProgressService);total=computed(()=>LESSONS.filter(l=>l.d===this.domain().id).length);complete=computed(()=>LESSONS.filter(l=>l.d===this.domain().id&&this.store.state().done.includes(l.id)).length);percent=computed(()=>Math.round(this.complete()/this.total()*100));}
export function shuffle<T>(list:readonly T[]):T[]{const a=[...list];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
