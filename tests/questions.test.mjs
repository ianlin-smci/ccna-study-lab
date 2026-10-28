import test from 'node:test';
import assert from 'node:assert/strict';
import {DOMAINS,LESSONS,QUESTIONS} from '../src/app/data.ts';
import {RETIRED_QUESTION_IDS,canonicalQuestionId,mergeQuestionRatings} from '../src/app/question-aliases.ts';
import {ipNum,subnetData} from '../src/app/network-utils.ts';
const ids=new Set(QUESTIONS.map(q=>q.id));
const answer=id=>{const q=QUESTIONS.find(q=>q.id===id);assert.ok(q,id);return q.options[q.answer];};

test('practice pool covers every objective and can fill each weighted mock quota',()=>{
 for(const l of LESSONS)assert.ok(QUESTIONS.filter(q=>q.lesson===l.id).length>=3,l.id);
 const quotas=DOMAINS.map(d=>Math.round(60*d.weight/100));
 assert.equal(quotas.reduce((a,b)=>a+b,0),60);
 for(const [i,d] of DOMAINS.entries())assert.ok(QUESTIONS.filter(q=>q.d===d.id).length>=quotas[i],d.name);
});

test('learning goals and prompts do not repeat through numeric-only variants',()=>{
 const concepts=new Set(),prompts=new Map();
 for(const q of QUESTIONS){
  assert.ok(q.concept.startsWith(q.lesson+'/'),q.id);
  assert.ok(!concepts.has(q.concept),'Repeated learning goal '+q.concept);concepts.add(q.concept);
  const prompt=q.q.toLowerCase().replace(/\b\d+(?:\.\d+)*(?:\/\d+)?\b/g,'#').replace(/\s+/g,' ').trim();
  assert.ok(!prompts.has(prompt),`${q.id} repeats ${prompts.get(prompt)}`);prompts.set(prompt,q.id);
  const opts=q.options.map(o=>o.toLowerCase().replace(/\s+/g,' ').trim());
  assert.equal(new Set(opts).size,opts.length,q.id+' has repeated options');
 }
});

test('retired IDs resolve directly to active questions without changing unrelated IDs',()=>{
 for(const [old,retained] of Object.entries(RETIRED_QUESTION_IDS)){
  assert.ok(!ids.has(old),old);assert.ok(ids.has(retained),retained);
  assert.ok(!Object.hasOwn(RETIRED_QUESTION_IDS,retained),'Alias chain');
  assert.equal(canonicalQuestionId(old),retained);
 }
 assert.equal(canonicalQuestionId('subnet-19'),'1.6-a');
 assert.equal(canonicalQuestionId('route-15'),'3.2-a');
 assert.equal(canonicalQuestionId('alignment-18'),'6.7-a');
 assert.equal(canonicalQuestionId('unrelated-future-id'),'unrelated-future-id');
 assert.equal(canonicalQuestionId('__proto__'),'__proto__');
 assert.equal(canonicalQuestionId('constructor'),'constructor');
 const historicalMisses=['subnet-2','subnet-8','route-9','alignment-18'];
 assert.deepEqual([...new Set(historicalMisses.map(canonicalQuestionId))],['1.6-a','3.2-a','6.7-a']);
});

test('legacy flashcard ratings merge conservatively and explicit current ratings take precedence',()=>{
 const input={'subnet-0':'known','subnet-1':'again','route-0':'again','route-1':'known','3.2-a':'known','unknown-removed-id':'again'};
 const before=JSON.stringify(input);
 assert.deepEqual(mergeQuestionRatings(input,ids),{'1.6-a':'again','3.2-a':'known'});
 assert.equal(JSON.stringify(input),before,'Historical storage must not be mutated');
 assert.deepEqual(mergeQuestionRatings({...input,'1.6-a':'known'},ids),{'1.6-a':'known','3.2-a':'known'});
 assert.deepEqual(mergeQuestionRatings({},ids),{});
 assert.deepEqual(mergeQuestionRatings({'subnet-0':'known'},ids),{'1.6-a':'known'});
 assert.deepEqual(mergeQuestionRatings({'1.6-a':'again','subnet-0':'known'},ids),{'1.6-a':'again'});
});

test('new addressing, EUI-64 and DHCP answers agree with protocol calculations',()=>{
 const q=QUESTIONS.find(q=>q.id==='expanded-1.6-gateway-same-subnet');
 const subnet=subnetData('192.0.2.70',27);
 for(const [i,option] of q.options.entries()){
  const ip=ipNum(option.replace(/\.$/,''));
  assert.equal(ip>subnet.network&&ip<subnet.broadcast,i===q.answer,option);
 }
 const vlsm=QUESTIONS.find(q=>q.id==='expanded-1.6-vlsm-nonoverlap');
 const allocated=[subnetData('10.20.0.0',25),subnetData('10.20.0.128',26)];
 for(const [i,option] of vlsm.options.entries()){
  const [ip,prefix]=option.replace(/\.$/,'').split('/');const candidate=subnetData(ip,+prefix);
  const overlaps=allocated.some(s=>candidate.network<=s.broadcast&&candidate.broadcast>=s.network);
  assert.equal(!overlaps,i===vlsm.answer,option);
 }
 const mac=[0x00,0x11,0x22,0x33,0x44,0x55];mac[0]^=2;mac.splice(3,0,0xff,0xfe);
 const hex=mac.map(n=>n.toString(16).padStart(2,'0')).join('');
 assert.equal(answer('expanded-1.9-modified-eui64').replace(/\.$/,''),hex.match(/.{4}/g).join(':'));
 assert.match(answer('expanded-1.5-dhcp-udp'),/^UDP.*68.*67/);
});
