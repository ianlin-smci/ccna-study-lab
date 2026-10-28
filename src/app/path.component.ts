import {Component,computed,inject,signal} from '@angular/core';
import {ActivatedRoute,RouterLink} from '@angular/router';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {DOMAINS,LESSONS,COMMAND_GUIDES} from './data';
import {BLUEPRINT,BLUEPRINT_SOURCE} from './blueprint.data';
import {ProgressService} from './progress.service';
import {IconComponent} from './ui';
import {GlossaryTextComponent} from './glossary-text.component';
@Component({standalone:true,imports:[RouterLink,IconComponent,GlossaryTextComponent],templateUrl:'./path.component.html'})
export class PathComponent {
 store=inject(ProgressService);domains=DOMAINS;guides=COMMAND_GUIDES;blueprint=BLUEPRINT;source=BLUEPRINT_SOURCE;
 domain=signal(0);saved=signal(false);showSubtopics=signal(true);
 filtered=computed(()=>LESSONS.filter(l=>(!this.domain()||l.d===this.domain())&&(!this.saved()||this.store.state().bookmarks.includes(l.id))));
 visibleDomains=computed(()=>DOMAINS.filter(d=>this.filtered().some(l=>l.d===d.id)));
 constructor(){inject(ActivatedRoute).paramMap.pipe(takeUntilDestroyed()).subscribe(p=>this.domain.set(+(p.get('domain')||0)));}
 forDomain(d:number){return this.filtered().filter(l=>l.d===d);}
 subtopicCount(d:number){return this.forDomain(d).reduce((count,l)=>count+this.blueprint[l.id].subtopics.length,0);}
}
