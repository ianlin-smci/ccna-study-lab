import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {LESSONS,QUESTIONS,COMMAND_GUIDES} from '../src/app/data.ts';
import {BLUEPRINT} from '../src/app/blueprint.data.ts';
import {TEXTBOOK_REVIEWS} from '../src/app/textbook.data.ts';
import {BEGINNER_GUIDES} from '../src/app/beginner.data.ts';
import {questionSnapshot} from '../scripts/lib/question-snapshot.mjs';

test('structured question snapshot preserves every active record, answer and pool identity',()=>{
 const docs=questionSnapshot(),parsed=JSON.parse(docs.json);
 assert.deepEqual(parsed.practice,QUESTIONS,'Do not reduce the complete bank to a prompt catalog');
 assert.equal(parsed.answerIndexBase,0);
 assert.deepEqual(parsed.lessonChecks,LESSONS.map(l=>({id:'lesson-check-'+l.id,lesson:l.id,domain:l.d,question:l.question,options:l.options,answer:l.answer,explanation:l.explanation})));
 assert.deepEqual(parsed.workedChecks,LESSONS.map(l=>({id:'worked-check-'+l.id,lesson:l.id,domain:l.d,...TEXTBOOK_REVIEWS[l.id].exercise})));
 assert.equal(new Set([...parsed.practice,...parsed.lessonChecks,...parsed.workedChecks].map(q=>q.id)).size,QUESTIONS.length+2*LESSONS.length);
 assert.equal(questionSnapshot().json,docs.json,'Regeneration must be deterministic');
 assert.equal(questionSnapshot().markdown,docs.markdown);
 assert.deepEqual(Object.keys(parsed).sort(),['schemaVersion','exam','examVersion','sourceDigest','answerIndexBase','counts','practice','lessonChecks','workedChecks'].sort(),'No browser study records belong in public content');
});

test('readable question copy contains all choices, reasoning and valid local learning links',()=>{
 const {markdown}=questionSnapshot();const learning=fs.readFileSync(new URL('../LEARNING_PATH.md',import.meta.url),'utf8');
 const rendered=s=>s.replaceAll('<','&lt;').replaceAll('>','&gt;');
 for(const q of QUESTIONS){
  const start=markdown.indexOf(`<a id="question-${q.id.replaceAll('.','-')}"></a>`);assert.ok(start>=0,q.id);
  const stop=markdown.indexOf('<a id=',start+1);const section=markdown.slice(start,stop<0?undefined:stop);
  for(const option of q.options)assert.ok(section.includes(rendered(option)),q.id+' omitted an option');
  assert.ok(section.includes(`**${String.fromCharCode(65+q.answer)}. ${rendered(q.options[q.answer])}**`),q.id+' wrong displayed answer');
  assert.ok(section.includes(rendered(q.why)),q.id+' missing reasoning');
 }
 for(const match of markdown.matchAll(/\]\(LEARNING_PATH\.md#([^)]*)\)/g))assert.ok(learning.includes(`id="${match[1]}"`),'Broken learning link '+match[1]);
});

test('every objective and technical section has authored beginner support and a reading caption',()=>{
 assert.deepEqual(Object.keys(BEGINNER_GUIDES),LESSONS.map(l=>l.id));
 const nonempty=(value,label)=>assert.ok(typeof value==='string'&&value.trim().length>15,label);
 for(const l of LESSONS){
  const g=BEGINNER_GUIDES[l.id];for(const key of ['idea','example','caption','remember','exampleCaption'])nonempty(g[key],l.id+' '+key);
  assert.ok(g.words.length>=3,l.id+' local vocabulary');assert.ok(g.steps.length>=3,l.id+' walkthrough');
  for(const w of g.words){assert.ok(w.term.trim());nonempty(w.meaning,l.id+' '+w.term);}
  for(const step of g.steps){assert.ok(step.title.trim());nonempty(step.body,l.id+' step');}
  for(const t of BLUEPRINT[l.id].subtopics)nonempty(t.plain,t.id+' subtopic lead');
  for(const s of TEXTBOOK_REVIEWS[l.id].sections)nonempty(s.plain,l.id+' '+s.heading);
  for(const b of COMMAND_GUIDES[l.id].blocks)nonempty(b.plain,l.id+' '+b.title);
 }
});
