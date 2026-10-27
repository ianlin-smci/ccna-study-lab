import {Component,inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {DOMAINS,QUESTIONS} from './data';
import {ProgressService} from './progress.service';
import {IconComponent,DomainCardComponent} from './ui';
@Component({standalone:true,imports:[RouterLink,IconComponent,DomainCardComponent],templateUrl:'./overview.component.html'})
export class OverviewComponent {store=inject(ProgressService);domains=DOMAINS;questionCount=QUESTIONS.length;}
