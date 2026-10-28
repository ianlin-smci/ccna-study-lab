import {readCoverage,coverageSummary} from './lib/assessment-coverage.mjs';
try{
 const data=readCoverage();
 for(const s of coverageSummary(data))console.log(`${s.pool}: ${s.total}/${s.total} have reviewed teaching evidence`);
 console.log(`PASS: ${data.items.length} assessments; ${Object.keys(data.manifest.materialDigests).length} cited teaching passages. Evidence excludes assessment answers.`);
}catch(error){console.error(error.message);process.exitCode=1;}
