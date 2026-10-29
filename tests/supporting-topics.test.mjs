import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {SUPPORTING_TOPICS,supportingTopicsFor,supportingTopicAnchor,matchingSupportingTopic,supportingSearchText} from '../src/app/supporting-topics.data.ts';
import {BLUEPRINT} from '../src/app/blueprint.data.ts';

test('supporting deep links resolve only under their parent objective and preserve the blueprint',()=>{
 const slugs=new Set();
 for(const t of SUPPORTING_TOPICS){
  assert.ok(BLUEPRINT[t.lesson],t.slug+' parent objective');assert.ok(!slugs.has(t.slug));slugs.add(t.slug);
  assert.match(t.slug,/^[a-z][a-z0-9-]*$/);assert.ok(!BLUEPRINT[t.slug]);
  assert.ok(supportingTopicsFor(t.lesson).includes(t));
  assert.equal(supportingTopicAnchor(t.lesson,t.slug),'study-'+t.lesson+'-'+t.slug);
 }
 assert.equal(supportingTopicAnchor('1.1','vtp'),null);
 assert.equal(supportingTopicAnchor('2.1','osi-model'),null);
 assert.equal(supportingTopicAnchor('2.1','__proto__'),null);
 assert.equal(supportingTopicsFor('3.4').length,0);
 assert.equal(Object.keys(BLUEPRINT).length,53);
});

test('search finds named concepts without redirecting a broad VLAN search to the VTP extension',()=>{
 assert.equal(matchingSupportingTopic('1.1','Open Systems Interconnection')?.slug,'osi-model');
 assert.equal(matchingSupportingTopic('1.1',' OSI layers ')?.slug,'osi-model');
 assert.equal(matchingSupportingTopic('2.1','VTP client mode')?.slug,'vtp');
 assert.equal(matchingSupportingTopic('2.1','vtp primary')?.slug,'vtp');
 assert.equal(matchingSupportingTopic('2.1','VLAN'),undefined);
 assert.equal(matchingSupportingTopic('2.1','vtpassword'),undefined);
 assert.equal(matchingSupportingTopic('1.1','VTP'),undefined);
 assert.ok(supportingSearchText('1.1').includes('Presentation'));
 assert.ok(supportingSearchText('2.1').includes('vtp primary vlan'));
});

test('the learning shadow retains every supporting section, reference and original command string',()=>{
 const markdown=fs.readFileSync(new URL('../LEARNING_PATH.md',import.meta.url),'utf8');
 const rendered=s=>s.replaceAll('<','&lt;').replaceAll('>','&gt;');
 for(const t of SUPPORTING_TOPICS){
  assert.ok(markdown.includes(`<a id="${t.slug}"></a>`));assert.ok(markdown.includes('#/lesson/'+t.lesson+'/'+t.slug));
  for(const s of t.sections){
   assert.ok(markdown.includes(rendered(s.heading)));
   for(const p of s.paragraphs)assert.ok(markdown.includes(rendered(p)));
   for(const card of s.cards??[])assert.ok(markdown.includes(rendered(card.body)));
  }
  for(const b of t.commands)assert.ok(markdown.includes(b.code),'Missing or altered command block: '+b.title);
  for(const source of t.sources)assert.ok(markdown.includes(source.url));
 }
});
