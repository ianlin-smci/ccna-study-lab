import type {GlossaryEntry,GlossarySegment} from './glossary-types';
const escapeRegex=(text:string)=>text.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
const normalize=(text:string)=>text.replace(/\s+/g,' ').toUpperCase();
const wordCharacter=(char:string|undefined)=>!!char&&/[\p{L}\p{N}_]/u.test(char);
/** Match complete terms, prefer longer aliases, and preserve every original character. */
export class GlossaryMatcher {
  private readonly forms=new Map<string,{term:GlossaryEntry;spellings:Set<string>}>();
  private readonly pattern:RegExp;
  constructor(entries:readonly GlossaryEntry[]){
    for(const term of entries){
      const forms=[term.abbreviation,...(term.aliases||[]),...(term.plural?[term.abbreviation+'s']:[])];
      for(const form of forms){const key=normalize(form),existing=this.forms.get(key);if(existing&&existing.term!==term)throw Error('Ambiguous glossary alias: '+form);if(existing)existing.spellings.add(form);else this.forms.set(key,{term,spellings:new Set([form])});}
    }
    const alternatives=[...this.forms.keys()].sort((a,b)=>b.length-a.length).map(s=>escapeRegex(s).replace(/ /g,'\\s+'));
    this.pattern=new RegExp(alternatives.join('|')||'(?!)','giu');
  }
  split(value:string|number|null|undefined):GlossarySegment[]{
    const text=String(value??''),segments:GlossarySegment[]=[];let offset=0;
    // Each invocation has its own regex cursor; rendering two components cannot interfere.
    const regex=new RegExp(this.pattern.source,this.pattern.flags);
    for(const match of text.matchAll(regex)){
      const start=match.index!,end=start+match[0].length,entry=this.forms.get(normalize(match[0]));
      if(!entry||wordCharacter(text[start-1])||wordCharacter(text[end]))continue;
      if(entry.term.caseSensitive&&!entry.spellings.has(match[0].replace(/\s+/g,' ')))continue;
      if(start>offset)segments.push({text:text.slice(offset,start)});
      segments.push({text:match[0],term:entry.term});offset=end;
    }
    if(offset<text.length||!segments.length)segments.push({text:text.slice(offset)});
    return segments;
  }
}
