import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {buildAssessmentCorpus,validateCoverage,manifestURL} from '../scripts/lib/assessment-coverage.mjs';
const corpus=buildAssessmentCorpus(),manifest=JSON.parse(fs.readFileSync(manifestURL,'utf8'));

test('every bank, lesson and worked assessment has reviewed independent teaching evidence',()=>{
 assert.deepEqual(validateCoverage(corpus,manifest),[]);
 assert.deepEqual([...new Set(corpus.items.map(i=>i.pool))],['practice','lesson','worked']);
 assert.equal(new Set(manifest.items.map(r=>r.id)).size,corpus.items.length);
 assert.ok(!corpus.materials.some(m=>/question|answer|exercise|explanation|solution/.test(m.key)));
});

test('a new assessment or changed correct answer requires a fresh coverage review',()=>{
 const changed=structuredClone(corpus);changed.items[0].answer='An unsupported replacement answer';
 assert.ok(validateCoverage(changed,manifest).some(e=>e.includes('answer or rationale changed')));
 const added=structuredClone(corpus);added.items.push({...added.items[0],id:'new-unreviewed-question'});
 assert.ok(validateCoverage(added,manifest).some(e=>e.includes('new-unreviewed-question: no reviewed')));
});

test('removing or changing cited teaching text is detected',()=>{
 const key=manifest.items[0].sources[0];
 const removed={...corpus,materials:corpus.materials.filter(m=>m.key!==key)};
 assert.ok(validateCoverage(removed,manifest).some(e=>e.includes('teaching passage missing: '+key)));
 const edited=structuredClone(corpus);edited.materials.find(m=>m.key===key).text='A different, insufficient explanation.';
 assert.ok(validateCoverage(edited,manifest).some(e=>e.includes('teaching passage changed; review required: '+key)));
});

test('an answer key cannot substitute for teaching evidence and empty or duplicate reviews fail',()=>{
 const circular=structuredClone(manifest);circular.items[0].sources=['assessment:'+circular.items[0].id+':answer'];
 assert.ok(validateCoverage(corpus,circular).some(e=>e.includes('teaching passage missing: assessment:')));
 const empty=structuredClone(manifest);empty.items[0].sources=[];
 assert.ok(validateCoverage(corpus,empty).some(e=>e.includes('no teaching evidence')));
 const repeated=structuredClone(manifest);repeated.items.push(repeated.items[0]);
 assert.ok(validateCoverage(corpus,repeated).some(e=>e.includes('duplicate review')));
});
