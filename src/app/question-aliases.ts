/** Retired numerical variants/concept duplicates map to the retained question.
 * Keep saved answers and exports intact; normalize only the active review view. */
export const RETIRED_QUESTION_IDS:Readonly<Record<string,string>> = {"subnet-0":"1.6-a","subnet-1":"1.6-a","subnet-2":"1.6-a","subnet-3":"1.6-a","subnet-4":"1.6-a","subnet-5":"1.6-a","subnet-6":"1.6-a","subnet-7":"1.6-a","subnet-8":"1.6-a","subnet-9":"1.6-a","subnet-10":"1.6-a","subnet-11":"1.6-a","subnet-12":"1.6-a","subnet-13":"1.6-a","subnet-14":"1.6-a","subnet-15":"1.6-a","subnet-16":"1.6-a","subnet-17":"1.6-a","subnet-18":"1.6-a","subnet-19":"1.6-a","route-0":"3.2-a","route-1":"3.2-a","route-2":"3.2-a","route-3":"3.2-a","route-4":"3.2-a","route-5":"3.2-a","route-6":"3.2-a","route-7":"3.2-a","route-8":"3.2-a","route-9":"3.2-a","route-10":"3.2-a","route-11":"3.2-a","route-12":"3.2-a","route-13":"3.2-a","route-14":"3.2-a","route-15":"3.2-a","alignment-4":"2.4-a","alignment-7":"extra-10","alignment-11":"4.5-a","alignment-18":"6.7-a"};
export const canonicalQuestionId=(id:string):string=>Object.hasOwn(RETIRED_QUESTION_IDS,id)?RETIRED_QUESTION_IDS[id]:id;
export function mergeQuestionRatings(cards:Record<string,'again'|'known'>,activeIDs:ReadonlySet<string>):Record<string,'again'|'known'>{
 const merged:Record<string,'again'|'known'>={};
 for(const [id,rating] of Object.entries(cards)){
  const key=canonicalQuestionId(id);
  if(!activeIDs.has(key))continue;
  if(Object.hasOwn(cards,key))merged[key]=cards[key];
  else if(!Object.hasOwn(merged,key)||rating==='again')merged[key]=rating;
 }
 return merged;
}
