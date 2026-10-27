// One-time/idempotent template migration: Angular retains ownership of every live text binding.
import fs from 'node:fs';import path from 'node:path';import ts from 'typescript';
import {parseTemplate,TmplAstText,TmplAstBoundText,TmplAstElement} from '@angular/compiler';
import {GlossaryMatcher} from '../src/app/glossary-matcher.ts';
import {GLOSSARY} from '../src/app/glossary.data.ts';
const matcher=new GlossaryMatcher(GLOSSARY),dir=path.resolve('src/app');
const skip=new Set(['glossary-text.component.ts','glossary-popover.component.ts','glossary.component.ts']);
const excludedTags=new Set(['pw-term-text','pw-glossary-popover','textarea','input','option','select','script','style','svg']);
const interactiveTags=new Set(['button','a','label','summary']);
function escapeAttribute(s){return s.replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
function apply(text,edits){for(const e of edits.sort((a,b)=>b.start-a.start))text=text.slice(0,e.start)+e.text+text.slice(e.end);return text;}
let total=0;
function migrate(html,url){const parsed=parseTemplate(html,url,{preserveWhitespaces:true});if(parsed.errors?.length)throw Error(parsed.errors.map(e=>e.toString()).join('\n'));const edits=[];
 function walk(nodes,parents=[]){for(const n of nodes||[]){if(n instanceof TmplAstText||n instanceof TmplAstBoundText){const bound=n instanceof TmplAstBoundText,text=bound?n.value.source:n.value;if(!text?.trim()||!bound&&!matcher.split(text).some(x=>x.term))continue;edits.push({start:n.sourceSpan.start.offset,end:n.sourceSpan.end.offset,text:`<pw-term-text text="${escapeAttribute(text)}"${parents.some(p=>interactiveTags.has(p))?' [interactive]="true"':''}/>`});}
 else if(n instanceof TmplAstElement){if(!excludedTags.has(n.name)&&!n.name.startsWith(':svg:'))walk(n.children,[...parents,n.name]);}
 else{walk(n.children,parents);for(const b of n.branches||[])walk(b.children,parents);for(const c of n.cases||[])walk(c.children,parents);for(const g of n.groups||[])walk(g.children,parents);if(n.empty)walk(n.empty.children,parents);}}
 }
 walk(parsed.nodes);total+=edits.length;return {text:apply(html,edits),changed:!!edits.length};
}
for(const file of fs.readdirSync(dir).filter(f=>f.endsWith('.ts')&&!skip.has(f))){const full=path.join(dir,file),source=fs.readFileSync(full,'utf8'),ast=ts.createSourceFile(file,source,ts.ScriptTarget.Latest,true),edits=[];let changed=false;
 function visit(node){if(ts.isClassDeclaration(node)){for(const d of ts.getDecorators(node)||[]){if(!ts.isCallExpression(d.expression)||d.expression.expression.getText(ast)!=='Component')continue;const obj=d.expression.arguments[0];if(!obj||!ts.isObjectLiteralExpression(obj))continue;const props=new Map(obj.properties.filter(ts.isPropertyAssignment).map(p=>[p.name.getText(ast).replace(/['"]/g,''),p]));let result=null;const template=props.get('template'),url=props.get('templateUrl');
 if(template&&ts.isNoSubstitutionTemplateLiteral(template.initializer)){const start=template.initializer.getStart(ast)+1,end=template.initializer.end-1;result=migrate(source.slice(start,end),file);if(result.changed)edits.push({start,end,text:result.text});}
 else if(url&&ts.isStringLiteral(url.initializer)){const htmlFile=path.resolve(dir,url.initializer.text);result=migrate(fs.readFileSync(htmlFile,'utf8'),htmlFile);if(result.changed)fs.writeFileSync(htmlFile,result.text);}
 if(result?.changed){changed=true;const imports=props.get('imports');if(!imports||!ts.isArrayLiteralExpression(imports.initializer))throw Error('Expected standalone imports: '+file);if(!imports.initializer.elements.some(e=>e.getText(ast)==='GlossaryTextComponent'))edits.push({start:imports.initializer.end-1,end:imports.initializer.end-1,text:imports.initializer.elements.length?',GlossaryTextComponent':'GlossaryTextComponent'});}
 }}ts.forEachChild(node,visit);}
 visit(ast);if(changed){let next=apply(source,edits);if(!/import\s*\{[^}]*GlossaryTextComponent/.test(next))next="import {GlossaryTextComponent} from './glossary-text.component';\n"+next;fs.writeFileSync(full,next);}
}
console.log('Migrated',total,'display-text bindings and abbreviation-bearing text nodes.');
