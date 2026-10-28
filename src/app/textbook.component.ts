import {Component,computed,inject,signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ActivatedRoute,RouterLink} from '@angular/router';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {DOMAINS,LESSONS} from './data';
import {BOOKS,TEXTBOOK_REVIEWS} from './textbook.data';
import {GlossaryTextComponent} from './glossary-text.component';
@Component({standalone:true,imports:[FormsModule,RouterLink,GlossaryTextComponent],templateUrl:'./textbook.component.html'})
export class TextbookComponent {
 books=BOOKS;domains=DOMAINS;query=signal('');domain=signal(0);volume=signal(0);
 rows=LESSONS.map(l=>({...l,review:TEXTBOOK_REVIEWS[l.id]}));
 results=computed(()=>{const q=this.query().trim().toLowerCase(),d=+this.domain(),v=+this.volume();return this.rows.filter(l=>(!d||l.d===d)&&(!v||(v===1?l.review.v1:l.review.v2).length>0)&&(!q||[l.id,l.title,l.review.focus,...l.review.sections.map(s=>s.heading+' '+s.body)].join(' ').toLowerCase().includes(q)));});
 findings=[
 {topic:'Foundations and subnet design',before:'Layering and packet encapsulation were mostly implicit, and subnet planning practice was limited.',after:'Added OSI/TCP-IP roles, frame changes, binary mask planning, VLSM allocation, IPv6 prefix reasoning and worked checks.',lessons:['1.1','1.3','1.6','1.8','1.13']},
 {topic:'Routing and OSPF',before:'Core concepts were present but adjacency interpretation and backup-route behavior needed depth.',after:'Added neighbor states, normal DROther 2-Way, process-ID scope, router-ID selection, return-path reasoning and an IPv6 floating-static example.',lessons:['1.10','3.1','3.2','3.3','3.4']},
 {topic:'ACLs and Layer 2 security',before:'The guide emphasized extended ACLs; the short DAI example mixed contexts and omitted DAI uplink trust.',after:'Corrected the DAI example; added a standard ACL/VTY module and explained trust boundaries, static-host bindings, rule order and stateless return traffic.',lessons:['4.8','5.6','5.7','5.8']},
 {topic:'Wireless controller interpretation',before:'GUI summaries did not fully trace how the AP receives its WLAN/VLAN mapping.',after:'Added the 9800 profile/tag/AP chain, AireOS interface differences, WMM categories and validation beyond association.',lessons:['2.6','2.7','2.9','5.9','5.10']},
 {topic:'Services, security and automation',before:'Several summaries named features without enough operational interpretation.',after:'Added QoS bit fields, NTP trust, SNMP protection, FTP channels, AAA fallback, REST semantics, AI validation and Terraform state cases.',lessons:['4.1','4.2','4.4','4.7','4.9','5.3','6.4','6.5','6.6','6.7']},
 {topic:'Reading references and assessment depth',before:'There was no book crosswalk; many extra questions repeated subnet and prefix patterns.',after:'Added reading references, two original explanations and a worked check per lesson, plus 18 original scenario questions in the practice bank.',lessons:[]}
 ];
 sources=[
 {title:'Cisco v1.1 exam objectives',url:'https://learningcontent.cisco.com/documents/marketing/exam-topics/200-301-CCNA-v1.1.pdf',detail:'Exam scope and objective verbs remain the exam authority.'},
 {title:BOOKS[1].title,url:BOOKS[1].url,detail:'Public contents and sample links; ISBN '+BOOKS[1].isbn+'.'},
 {title:BOOKS[2].title,url:BOOKS[2].url,detail:'Public contents and sample links; ISBN '+BOOKS[2].isbn+'.'},
 {title:'Volume 1 publisher errata',url:'https://www.ciscopress.com/content/images/9780138229634/errata/CCNA-200-301-Vol1-Errata-2025-09-10.docx',detail:'Checked September 10, 2025 errata; apply by the printing of your copy. Distinguish global PortFast default syntax from interface configuration.'},
 {title:'Volume 2 publisher errata',url:'https://www.ciscopress.com/content/images/9780138214951/errata/CCNA-200-301-Vol2-Errata-2025-09-10.docx',detail:'Includes a type-9/Scrypt correction; current secret examples use scrypt.'},
 {title:'Public OSPF sample chapter',url:'https://www.ciscopress.com/articles/article.asp?p=3197438&seqNum=3',detail:'Checked interface selection, process ID scope, router ID and related verification.'},
 {title:'Public FHRP sample chapter',url:'https://www.ciscopress.com/articles/article.asp?p=3197440&seqNum=3',detail:'Checked virtual gateway roles; related sample sections compare HSRP, VRRP and GLBP.'},
 {title:'Cisco Dynamic ARP Inspection',url:'https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/sec-crypto/fhs-sisf/fhs-and-sisf-configuration-guide/dynamic-arp-inspection.html',detail:'Independent trust configuration and binding behavior.'},
 {title:'Cisco IPv6 static routing',url:'https://www.cisco.com/c/en/us/td/docs/routers/ios-xe/ip-routing/b-ip-routing/m_ip6-route-static-xe.html',detail:'Route forms, link-local interface scope and floating-route preference.'},
 {title:'Cisco Catalyst 9800 configuration model',url:'https://www.cisco.com/c/en/us/support/docs/wireless/catalyst-9800-series-wireless-controllers/213911-understand-catalyst-9800-wireless-contro.html',detail:'Relationships between WLAN profiles, policy profiles, tags and APs.'},
 {title:'Cisco IOS XE security changes',url:'https://www.cisco.com/c/en/us/products/collateral/networking/switches/catalyst-9000-switches/c9000-ios-xe-resilient-infra-pb.html',detail:'Current-platform context for older textbook commands and secure alternatives.'}
 ];
 constructor(){inject(ActivatedRoute).queryParamMap.pipe(takeUntilDestroyed()).subscribe(p=>this.query.set(p.get('lesson')||''));}
 reset(){this.query.set('');this.domain.set(0);this.volume.set(0);}
}
