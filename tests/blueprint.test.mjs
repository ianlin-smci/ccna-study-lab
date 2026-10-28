import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {BLUEPRINT,BLUEPRINT_SOURCE,BLUEPRINT_VERSION} from '../src/app/blueprint.data.ts';
const inventory=JSON.parse(fs.readFileSync(new URL('./fixtures/ccna-v1.1-identifiers.json',import.meta.url),'utf8'));
const data=fs.readFileSync(new URL('../src/app/data.ts',import.meta.url),'utf8');
const lessons=JSON.parse(data.match(/export const LESSONS: Lesson\[\] = (.*);/)[1]);
const domains=JSON.parse(data.match(/export const DOMAINS: Domain\[\] = (.*);/)[1]);
test('the learning hierarchy matches the published v1.1 identifier inventory',()=>{
 assert.equal(BLUEPRINT_VERSION,'v1.1');assert.equal(BLUEPRINT_SOURCE,inventory.source);
 assert.deepEqual(Object.keys(BLUEPRINT),inventory.domains.flatMap(d=>d.objectives));
 assert.deepEqual(Object.values(BLUEPRINT).flatMap(o=>o.subtopics.map(t=>t.id)),inventory.lettered);
 assert.equal(Object.keys(BLUEPRINT).length,53);assert.equal(inventory.lettered.length,58);
 assert.deepEqual(domains.map(d=>[d.id+'.0',d.weight]),inventory.domains.map(d=>[d.id,d.weight]));
});
test('objective IDs and teaching targets preserve existing progress and valid deep links',()=>{
 assert.deepEqual(lessons.map(l=>l.id),Object.keys(BLUEPRINT));
 for(const l of lessons){const o=BLUEPRINT[l.id];assert.equal(l.title,o.title);assert.ok(o.skill);for(const t of o.subtopics){assert.ok(t.id.startsWith(l.id+'.'));assert.ok(t.title&&t.body.length>80);}}
 assert.equal(BLUEPRINT['1.12'].subtopics.length,0,'inline scope is not invented as lettered objectives');
 assert.equal(BLUEPRINT['2.9'].skill,'Interpret');assert.equal(BLUEPRINT['4.8'].skill,'Configure');assert.equal(BLUEPRINT['5.10'].skill,'Configure and verify');assert.equal(BLUEPRINT['6.6'].skill,'Recognize');
});
