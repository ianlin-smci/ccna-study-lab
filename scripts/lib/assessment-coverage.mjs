import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {DOMAINS,LESSONS,QUESTIONS,COMMAND_GUIDES} from '../../src/app/data.ts';
import {BEGINNER_GUIDES} from '../../src/app/beginner.data.ts';
import {supportingTopicsFor} from '../../src/app/supporting-topics.data.ts';
import {BLUEPRINT} from '../../src/app/blueprint.data.ts';
import {TEXTBOOK_REVIEWS} from '../../src/app/textbook.data.ts';

export const digest=value=>createHash('sha256').update(typeof value==='string'?value:JSON.stringify(value)).digest('hex');
export const manifestURL=new URL('../../tests/fixtures/assessment-coverage.json',import.meta.url);
const base='https://ianlin-smci.github.io/ccna-study-lab/';

/** Only rendered teaching fields belong here. Never add quiz/lesson answers,
 * worked solutions, question rationales or the generated coverage report. */
export function buildAssessmentCorpus(){
 const materials=[];
 for(const l of LESSONS){
  const add=(key,text,label,section='')=>materials.push({key,lesson:l.id,text,label,url:base+'#/lesson/'+l.id+(section?'/'+section:'')});
  add(`lesson:${l.id}:intro`,l.intro,'Lesson introduction');
  const beginner=BEGINNER_GUIDES[l.id];
  for(const field of ['idea','example','caption','remember','exampleCaption'])add(`beginner:${l.id}:${field}`,beginner[field],'Beginner guide · '+field);
  beginner.steps.forEach((step,i)=>add(`beginner:${l.id}:step:${i}`,step.body,'Beginner walkthrough · '+step.title));
  beginner.words.forEach((word,i)=>add(`beginner:${l.id}:word:${i}`,word.meaning,'Beginner word · '+word.term));
  for(const topic of supportingTopicsFor(l.id)){
   const section=topic.slug;
   add(`supporting:${l.id}:${section}:intro`,topic.intro,topic.title,section);
   topic.sections.forEach((s,i)=>{
    s.paragraphs.forEach((text,j)=>add(`supporting:${l.id}:${section}:section:${i}:paragraph:${j}`,text,s.heading,section));
    s.cards?.forEach((card,j)=>add(`supporting:${l.id}:${section}:section:${i}:card:${j}`,card.body+' '+card.detail,card.title,section));
    s.steps?.forEach((text,j)=>add(`supporting:${l.id}:${section}:section:${i}:step:${j}`,text,s.heading+' · step '+(j+1),section));
    if(s.table)add(`supporting:${l.id}:${section}:section:${i}:table`,s.table.rows.map(row=>row.join(' | ')).join('\n'),s.heading,section);
    if(s.caption)add(`supporting:${l.id}:${section}:section:${i}:caption`,s.caption,s.heading+' · reading note',section);
   });
   topic.commands.forEach((b,i)=>{for(const field of ['code','why','expected','plain'])add(`supporting:${l.id}:${section}:block:${i}:${field}`,b[field],b.title+' · '+field,section);});
  }
  l.points.forEach((p,i)=>add(`lesson:${l.id}:point:${i}`,p,`Core explanation ${i+1}`));
  for(const t of BLUEPRINT[l.id].subtopics){add('blueprint:'+t.id,t.body,t.id+' '+t.title,t.id);add('blueprint:'+t.id+':plain',t.plain,t.id+' · Plain-language lead',t.id);}
  TEXTBOOK_REVIEWS[l.id].sections.forEach((s,i)=>{add(`textbook:${l.id}:section:${i}`,s.body,s.heading);add(`textbook:${l.id}:section:${i}:plain`,s.plain,s.heading+' · Plain-language lead');});
  const g=COMMAND_GUIDES[l.id];
  add(`guide:${l.id}:scope`,g.scope,'Command guide scope','commands');
  g.blocks.forEach((b,i)=>{for(const field of ['code','why','expected','plain'])if(b[field])add(`guide:${l.id}:block:${i}:${field}`,b[field],b.title+' · '+field,'commands');});
  g.tips.forEach((p,i)=>add(`guide:${l.id}:tip:${i}`,p,`Command guide check ${i+1}`,'commands'));
 }
 const items=[
  ...QUESTIONS.map(q=>({pool:'practice',id:q.id,lesson:q.lesson,question:q.q,options:q.options,answer:q.options[q.answer],explanation:q.why})),
  ...LESSONS.map(l=>({pool:'lesson',id:'lesson-check-'+l.id,lesson:l.id,question:l.question,options:l.options,answer:l.options[l.answer],explanation:l.explanation})),
  ...LESSONS.map(l=>({pool:'worked',id:'worked-check-'+l.id,lesson:l.id,question:TEXTBOOK_REVIEWS[l.id].exercise.prompt,options:[],answer:TEXTBOOK_REVIEWS[l.id].exercise.answer,explanation:''}))
 ];
 return {materials,items};
}

/** A structural/drift check of curated evidence, not a semantic-answer oracle. */
export function validateCoverage(corpus,manifest){
 const errors=[],materialMap=new Map(corpus.materials.map(m=>[m.key,m]));
 const items=new Map(corpus.items.map(i=>[i.id,i]));
 const seen=new Set();
 if(manifest.schemaVersion!==1)errors.push('Unsupported coverage manifest version.');
 for(const r of manifest.items??[]){
  if(seen.has(r.id))errors.push(`${r.id}: duplicate review.`);seen.add(r.id);
  const item=items.get(r.id);
  if(!item){errors.push(`${r.id}: review refers to an inactive assessment.`);continue;}
  if(r.pool!==item.pool||r.lesson!==item.lesson)errors.push(`${r.id}: pool/objective changed; review required.`);
  if(r.itemDigest!==digest(item))errors.push(`${r.id}: question, options, answer or rationale changed; review required.`);
  if(!['direct','derived'].includes(r.basis))errors.push(`${r.id}: invalid evidence basis.`);
  if(!['supported','partial','missing'].includes(r.baseline))errors.push(`${r.id}: missing initial review result.`);
  if(!Array.isArray(r.sources)||!r.sources.length){errors.push(`${r.id}: no teaching evidence.`);continue;}
  for(const key of r.sources){
   const m=materialMap.get(key);
   if(!m){errors.push(`${r.id}: teaching passage missing: ${key}`);continue;}
   if(manifest.materialDigests?.[key]!==digest(m.text))errors.push(`${r.id}: teaching passage changed; review required: ${key}`);
  }
 }
 for(const i of corpus.items)if(!seen.has(i.id))errors.push(`${i.id}: no reviewed teaching evidence.`);
 return errors;
}

export function readCoverage(){
 const corpus=buildAssessmentCorpus(),manifest=JSON.parse(fs.readFileSync(manifestURL,'utf8'));
 const errors=validateCoverage(corpus,manifest);
 if(errors.length)throw Error('Assessment coverage check failed:\n'+errors.join('\n'));
 return {...corpus,manifest};
}

export function coverageSummary(data){
 return ['practice','lesson','worked'].map(pool=>{
  const rows=data.manifest.items.filter(i=>i.pool===pool);
  return {pool,total:rows.length,initiallySupported:rows.filter(i=>i.baseline==='supported').length,initiallyPartial:rows.filter(i=>i.baseline==='partial').length,initiallyMissing:rows.filter(i=>i.baseline==='missing').length};
 });
}

export function coverageDocuments(data=readCoverage()){
 const sources=new Map(data.materials.map(m=>[m.key,m]));
 const reviews=new Map(data.manifest.items.map(r=>[r.id,r]));
 const cell=s=>'"'+String(s??'').replaceAll('"','""')+'"';
 const csvRows=[['pool','question_id','objective','question','correct_answer','basis','initial_review','current_review','gap_note','teaching_references','evidence']];
 for(const item of data.items){const r=reviews.get(item.id),evidence=r.sources.map(k=>sources.get(k));csvRows.push([item.pool,item.id,item.lesson,item.question,item.answer,r.basis,r.baseline,'supported',r.gapNote??'',evidence.map(m=>m.key+' | '+m.label+' | '+m.url).join('\n'),evidence.map(m=>m.text).join('\n\n')]);}
 const csv=csvRows.map(r=>r.map(cell).join(',')).join('\n')+'\n';
 const table=(headers,rows)=>['| '+headers.join(' | ')+' |','| '+headers.map(()=>'---').join(' | ')+' |',...rows.map(r=>'| '+r.join(' | ')+' |')].join('\n');
 const gaps=data.manifest.items.filter(r=>r.baseline!=='supported');
 const names={practice:'Practice / mock / flashcards',lesson:'Lesson knowledge checks',worked:'Worked review checks'};
 const markdown=`# Assessment answer coverage self-test

Reviewed ${data.manifest.reviewedAt}. Target: CCNA 200-301 v1.1. **${data.items.length}/${data.items.length} assessment items have reviewed teaching evidence.**

## What was checked

The practice, mock-exam and flashcard modes share one question bank. Each bank question was checked once. The audit also includes every lesson knowledge check and worked review check. Lesson questions that repeat a bank item remain separate assessment occurrences; the evidence was reused only after comparing their question, options and answer.

Only material rendered as named supporting guides, beginner guides and plain-language leads, lesson introductions, core explanations, blueprint subtopics, explanatory textbook sections and current platform-labeled command guides counts as evidence. Quiz answer explanations, lesson answer keys, worked solutions, this report, external links and book chapter references do not count. The private external bank reviewed previously is outside this test. For objectives with lettered subtopics, expand **Objective overview** to read the core explanations. The evidence labels identify the relevant paragraph, subtopic or command module.

${table(['Pool','Items','Initially supported','Initially partial','Initially missing','Now supported'],coverageSummary(data).map(s=>[names[s.pool],s.total,s.initiallySupported,s.initiallyPartial,s.initiallyMissing,s.total]))}

**Direct** means the decisive fact is stated in teaching text or a command example. **Derived** means the learner applies a taught rule/calculation, adapts a command template, combines explanations or reasons about a scenario. Numerical examples need not use the question's exact addresses. Some valid references are in another objective; the complete audit links to the actual teaching location.

## Gaps and clarifications completed

${table(['Assessment','Initial finding','Teaching detail added'],gaps.map(r=>[r.id,r.baseline,r.gapNote]))}

These findings led to 17 new teaching paragraphs in 16 objectives. Question IDs, options, correct answers and scoring were retained. The additions teach the underlying rules and operational distinctions rather than inserting a list of answer keys.

## Beginner-language editorial review

${data.manifest.editorialReview?.scope??'No later language review recorded.'}

The site now includes an everyday-language introduction, local word definitions, numbered walkthrough and reading caption for every objective, plus plain-language leads for every subtopic, depth section and command module. These help introduce the technical vocabulary; they do not replace the detailed exam terminology. Editorial checks are not a measurement of how every reader will understand a passage. Novice-user testing has not been performed.

## All items and evidence

[Download the complete question-by-question CSV](assessment-coverage.csv). It includes every prompt, correct answer, evidence basis, initial finding, current result, actual teaching excerpts and links to the relevant material.

${table(['Domain','Bank questions','Lesson checks','Worked checks','Covered'],DOMAINS.map(d=>{const relevant=data.items.filter(i=>+i.lesson.split('.')[0]===d.id);return [d.id+'.0 '+d.name,...['practice','lesson','worked'].map(p=>relevant.filter(i=>i.pool===p).length),relevant.length+'/'+relevant.length];}))}

## Re-run and maintenance

Run \`npm run coverage:check\`. The same assertions run in \`npm test\`. Run \`npm run docs:sync\` after reviewed content changes to refresh this report and CSV, and \`npm run docs:check\` to verify them without writing files.

The curated mappings are in \`tests/fixtures/assessment-coverage.json\`. Fingerprints cover each assessment's prompt, options, answer and rationale, plus every cited teaching passage. A new/unreviewed item, missing passage or changed fingerprint fails the check and requires content review. Documentation sync does not approve evidence or update these review fingerprints.

This combines an AI-assisted item-by-item content review with automated reference/drift checks. Passing proves that the reviewed items still point to the reviewed teaching evidence. It does not independently prove semantic entailment, certify Cisco command behavior, predict an exam result or validate a learner's comprehension. Changes can require fresh editorial review even if a keyword remains present.

## References for clarified details

- [Cisco NTP hierarchy](https://www.cisco.com/c/en/us/support/docs/ip/network-time-protocol-ntp/108076-ntp-troubleshoot.html).
- [RFC 4861: IPv6 Router Advertisements](https://www.rfc-editor.org/rfc/rfc4861.html), [RFC 4193: unique-local scope](https://www.rfc-editor.org/rfc/rfc4193.html).
- [RFC 4251: SSH server authentication](https://www.rfc-editor.org/rfc/rfc4251.html), [RFC 5216: EAP-TLS certificate validation](https://www.rfc-editor.org/rfc/rfc5216.html).
- [RFC 9110: media headers and Retry-After](https://www.rfc-editor.org/rfc/rfc9110.html), [RFC 6585: HTTP 429](https://www.rfc-editor.org/rfc/rfc6585.html), [RFC 9114: HTTP/3](https://www.rfc-editor.org/rfc/rfc9114.html).
- The site's existing [curriculum and command references](question-bank-review.md) supply the remaining stable protocol and platform context.
`;
 return {markdown,csv};
}
