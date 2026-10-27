import {Component,ElementRef,ViewChild,inject,signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ActivatedRoute,RouterLink} from '@angular/router';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {LABS} from './data';
import {ProgressService} from './progress.service';
import {IconComponent} from './ui';
import {subnetData,numIP,ipNum,ROUTES,bestRoute} from './network-utils';
@Component({standalone:true,imports:[FormsModule,RouterLink,IconComponent],templateUrl:'./labs.component.html'})
export class LabsComponent {
 store=inject(ProgressService);tool=signal('subnet');tabs=[['subnet','Subnetting playground'],['cli','Guided CLI'],['routing','Route explorer'],['journey','Packet journey']];ip='192.168.10.77';prefix=26;subnet=signal(subnetData(this.ip,this.prefix));subnetError='';numIP=numIP;drill={ip:'',prefix:26,network:''};drillAnswer='';drillFeedback='';drillOK=false;labs=LABS;labIndex=0;step=0;command='';log:string[]=[];hint='';routes=ROUTES;destination='10.1.2.55';routeDestination=signal(this.destination);best=signal(bestRoute(this.destination));routeError='';journeyIndex=0;
 @ViewChild('terminalLog')terminalLog?:ElementRef<HTMLDivElement>;
 journey=[['laptop','Your laptop','The application resolves a server name using DNS and constructs its transport data. IP source and destination identify the endpoints.'],['network','Local switch','The server is outside the client subnet. ARP resolves the default gateway’s MAC; the host sends the frame to that MAC while the packet’s destination IP remains the remote server. The switch forwards toward the gateway.'],['route','Default gateway','The router removes the incoming Layer 2 header, decrements IPv4 TTL, uses longest prefix match, and builds a frame for the next link. Layer 2 addresses change at routed hops.'],['shield','Internet edge','A firewall checks traffic policy and state. NAT/PAT may translate the private source address and port. Translation and firewall policy are separate functions.'],['server','Application server','The server receives the transport payload and delivers it to the application. Reply routing follows the server’s routing decisions and need not take an identical physical path.']];
 constructor(){inject(ActivatedRoute).paramMap.pipe(takeUntilDestroyed()).subscribe(p=>{const t=p.get('tool')||'subnet';this.tool.set(this.tabs.some(x=>x[0]===t)?t:'subnet');});this.newDrill();}
 calculate(){const d=subnetData(this.ip,+this.prefix);this.subnet.set(d);this.subnetError=d?'':'Enter a valid IPv4 address and an integer prefix from 0 to 32.';}
 subnetRows(){const d=this.subnet();return d?[['Subnet mask',numIP(d.mask)],['Wildcard mask',numIP((~d.mask)>>>0)],['Network address',numIP(d.network)],['Broadcast',d.prefix>=31?'Not used for this prefix':numIP(d.broadcast)],['Usable range',numIP(d.first)+' – '+numIP(d.last)],['Usable addresses',d.hosts.toLocaleString()],['Total addresses',d.count.toLocaleString()]]:[];}
 bits(){return this.subnet()?.n.toString(2).padStart(32,'0').split('')||[];}
 newDrill(){const prefix=[25,26,27,28,29][Math.floor(Math.random()*5)],ip=`192.168.${1+Math.floor(Math.random()*250)}.${1+Math.floor(Math.random()*253)}`;this.drill={ip,prefix,network:numIP(subnetData(ip,prefix)!.network)};this.drillAnswer='';this.drillFeedback='';}
 checkDrill(){this.drillOK=ipNum(this.drillAnswer)===ipNum(this.drill.network);this.drillFeedback=(this.drillOK?'Exactly right.':'The network address is '+this.drill.network+'.')+' The block size is '+2**(32-this.drill.prefix)+'.';this.store.activity();}
 get lab(){return this.labs[this.labIndex];}get labDone(){return this.step>=this.lab.steps.length;}
 resetLab(){this.step=0;this.command='';this.log=[];this.hint='';}
 normalize(s:string){return s.trim().toLowerCase().replace(/gigabitethernet/g,'g').replace(/\s+/g,' ').replace(/^conf t$/,'configure terminal').replace(/^en$/,'enable').replace(/^int /,'interface ').replace(/^sh /,'show ');}
 run(){if(!this.command.trim()||this.labDone)return;const raw=this.command.trim(),cmd=this.normalize(raw),step=this.lab.steps[this.step];this.log.push(`${this.lab.device}${this.step===0?'>':'#'} ${raw}`);this.command='';if(cmd==='clear')this.log=[];else if(cmd==='help'||cmd==='?')this.log.push('Try: '+step[0]);else if(cmd===this.normalize(step[0])){if(step[2])this.log.push(step[2]);this.step++;this.hint='';if(this.labDone){this.log.push('\n✓ Lab completed. Well connected!');this.store.lab(this.labIndex);this.store.notify('Lab completed and saved.');}}else this.log.push('% This guided step expects a different command.\nTask: '+step[1]+' Type help for a hint.');setTimeout(()=>{const el=this.terminalLog?.nativeElement;if(el)el.scrollTop=el.scrollHeight;},0);}
 routeLookup(){this.routeDestination.set(this.destination);this.best.set(bestRoute(this.destination));this.routeError=this.best()?'':'Enter a valid IPv4 address.';}
 matches(r:typeof ROUTES[number]){return !!this.best()&&subnetData(this.routeDestination(),r.prefix)?.network===ipNum(r.network);}
}
