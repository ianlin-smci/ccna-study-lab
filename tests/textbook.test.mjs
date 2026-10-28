import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {TEXTBOOK_REVIEWS} from '../src/app/textbook.data.ts';
const source=fs.readFileSync(new URL('../src/app/data.ts',import.meta.url),'utf8');
const lessons=JSON.parse(source.match(/export const LESSONS: Lesson\[\] = (.*);/)[1]);
const questions=JSON.parse(source.match(/export const QUESTIONS: Question\[\] = (.*);/)[1]);
test('all objectives have second-edition references and original explained checks',()=>{
 assert.deepEqual(Object.keys(TEXTBOOK_REVIEWS),lessons.map(l=>l.id));
 for(const l of lessons){const r=TEXTBOOK_REVIEWS[l.id];assert.ok(r.v1.length+r.v2.length);assert.ok(r.v1.every(c=>Number.isInteger(c)&&c>=1&&c<=29));assert.ok(r.v2.every(c=>Number.isInteger(c)&&c>=1&&c<=24));assert.equal(r.sections.length,2);assert.ok(r.sections.every(s=>s.heading&&s.body.length>100));assert.ok(r.exercise.prompt&&r.exercise.answer.length>40);}
});
test('question identifiers, objective references and answer structures remain valid',()=>{
 assert.equal(new Set(questions.map(q=>q.id)).size,questions.length);
 for(const q of questions){const l=lessons.find(l=>l.id===q.lesson);assert.ok(l);assert.equal(q.d,l.d);assert.equal(q.options.length,4);assert.equal(new Set(q.options).size,4);assert.ok(Number.isInteger(q.answer)&&q.answer>=0&&q.answer<4);assert.ok(q.why);}
 assert.equal(questions.filter(q=>q.id.startsWith('alignment-')).length,18);
});
