import fs from 'node:fs';import path from 'node:path';import {deflateRawSync} from 'node:zlib';
const root=process.cwd(),build=path.join(root,'build');
fs.writeFileSync(path.join(build,'.nojekyll'),'');
for(const file of ['README.md','LEARNING_PATH.md'])fs.copyFileSync(path.join(root,file),path.join(build,file));
let html=fs.readFileSync(path.join(build,'index.html'),'utf8').replace(/<base href="[^"]*">/,'<base href="./">');
html=html.replace(/<link rel="stylesheet" href="([^"]+)"[^>]*>/g,(_,file)=>'<style>'+fs.readFileSync(path.join(build,file),'utf8')+'</style>');
const heroImage='data:image/png;base64,'+fs.readFileSync(path.join(build,'network-hero.png')).toString('base64');
html=html.replace(/<script src="([^"]+)" type="module"><\/script>/g,(_,file)=>{let js=fs.readFileSync(path.join(build,file),'utf8').replaceAll('network-hero.png',heroImage);if(/(?:from\s*|import\s*\()"\.\//.test(js))throw Error('Offline packaging requires a single eager-loaded application bundle.');return '<script type="module">'+js.replace(/<\/script/gi,'<\\/script')+'</script>';});
html=html.replace(/<link rel="modulepreload"[^>]*>/g,'').replace(/<link rel="stylesheet" href="([^"]+)"[^>]*>/g,(_,file)=>'<style>'+fs.readFileSync(path.join(build,file),'utf8')+'</style>');
fs.writeFileSync(path.join(build,'packetwise-offline.html'),html);

// Small ZIP writer for these bounded static artifacts; avoids an OS-specific archiver.
const table=new Uint32Array(256);for(let n=0;n<256;n++){let c=n;for(let i=0;i<8;i++)c=c&1?0xedb88320^(c>>>1):c>>>1;table[n]=c>>>0;}
function crc32(b){let c=0xffffffff;for(const x of b)c=table[(c^x)&255]^(c>>>8);return (c^0xffffffff)>>>0;}
function zip(entries,target){const chunks=[],central=[];let offset=0;const d=new Date(),date=((d.getFullYear()-1980)<<9)|((d.getMonth()+1)<<5)|d.getDate(),time=(d.getHours()<<11)|(d.getMinutes()<<5)|(d.getSeconds()>>1);for(const [name,data] of entries){const n=Buffer.from(name),b=Buffer.isBuffer(data)?data:Buffer.from(data),packed=deflateRawSync(b),crc=crc32(b);const h=Buffer.alloc(30);h.writeUInt32LE(0x04034b50,0);h.writeUInt16LE(20,4);h.writeUInt16LE(0x800,6);h.writeUInt16LE(8,8);h.writeUInt16LE(time,10);h.writeUInt16LE(date,12);h.writeUInt32LE(crc,14);h.writeUInt32LE(packed.length,18);h.writeUInt32LE(b.length,22);h.writeUInt16LE(n.length,26);chunks.push(h,n,packed);const c=Buffer.alloc(46);c.writeUInt32LE(0x02014b50,0);c.writeUInt16LE(20,4);c.writeUInt16LE(20,6);c.writeUInt16LE(0x800,8);c.writeUInt16LE(8,10);c.writeUInt16LE(time,12);c.writeUInt16LE(date,14);c.writeUInt32LE(crc,16);c.writeUInt32LE(packed.length,20);c.writeUInt32LE(b.length,24);c.writeUInt16LE(n.length,28);c.writeUInt32LE(offset,42);central.push(c,n);offset+=h.length+n.length+packed.length;}const cb=Buffer.concat(central),end=Buffer.alloc(22);end.writeUInt32LE(0x06054b50,0);end.writeUInt16LE(entries.length,8);end.writeUInt16LE(entries.length,10);end.writeUInt32LE(cb.length,12);end.writeUInt32LE(offset,16);fs.writeFileSync(target,Buffer.concat([...chunks,cb,end]));}
const excluded=new Set(['node_modules','.angular','.git','build','out-tsc','__pycache__']);
function walk(dir){return fs.readdirSync(dir,{withFileTypes:true}).sort((a,b)=>a.name.localeCompare(b.name)).flatMap(e=>{if(excluded.has(e.name)||e.name.endsWith('.log'))return [];const p=path.join(dir,e.name);return e.isDirectory()?walk(p):e.isFile()?[[`packetwise-angular/${path.relative(root,p).split(path.sep).join('/')}`,fs.readFileSync(p)]]:[];});}
zip(walk(root),path.join(build,'packetwise-angular-source.zip'));
const files=fs.readdirSync(build).filter(f=>!f.endsWith('.zip')&&fs.statSync(path.join(build,f)).isFile()).map(f=>['packetwise/'+f,fs.readFileSync(path.join(build,f))]);
files.push(['packetwise/README.txt','Open packetwise-offline.html directly in a browser, or serve this folder with python -m http.server 8000.\nAngular source and GitHub Pages instructions are in packetwise-angular-source.zip.\nExport a progress backup before changing website addresses.\n']);
zip(files,path.join(build,'ccna-study-site.zip'));console.log('Packaged offline HTML, static ZIP and Angular source ZIP.');
