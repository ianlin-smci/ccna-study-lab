import {Component,computed,inject,signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {GlossaryService} from './glossary.service';
import {GlossaryTextComponent} from './glossary-text.component';
@Component({standalone:true,imports:[FormsModule,GlossaryTextComponent],templateUrl:'./glossary.component.html'})
export class GlossaryComponent {
  glossary=inject(GlossaryService);query=signal('');
  results=computed(()=>{const q=this.query().trim().toLocaleLowerCase();return this.glossary.entries.filter(t=>(t.abbreviation+' '+t.fullName+' '+t.explanation+' '+(t.aliases||[]).join(' ')).toLocaleLowerCase().includes(q));});
  constructor(){inject(ActivatedRoute).queryParamMap.pipe(takeUntilDestroyed()).subscribe(p=>this.query.set(p.get('term')||''));}
}
