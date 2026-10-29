# Official Cert Guide alignment review

October 2026. Target: CCNA 200-301 v1.1; Official Cert Guide, Second Edition, Volumes 1 and 2.

## Scope and conclusion

The site contains lessons for all 53 top-level v1.1 objectives. Its original summaries were concise and several operational topics lacked textbook-style depth. This update adds independent chapter references, original teaching supplements and worked checks. Topic mapping is not publisher approval, proof of equal depth, or certification of exam readiness.

The full paid volumes were not supplied. The comparison uses public publisher contents, selected public OSPF/FHRP samples, published errata, the Cisco blueprint and selected Cisco technical documentation. A page-by-page comparison of the complete books and all companion exercises/updates was not performed. Configuration examples have not been executed on physical equipment; the site's CLI exercises are educational simulations.

## What the comparison establishes

This is a public-source chapter/topic crosswalk and a set of targeted teaching improvements. A matching chapter reference does not verify that every concept, illustration or exercise in that chapter is present or adequately introduced on the site. It must not be described as a complete audit of both books.

The answer-coverage check starts from existing assessments and asks whether their answers have supporting teaching. It cannot discover a subject absent from both the lessons and the question pool. Blueprint inventory, chapter mapping, answer support and beginner teaching depth are separate checks.

## OSI and VTP follow-up

The earlier layering notes named OSI/TCP-IP but did not provide a dedicated seven-layer introduction. VTP was missing. The current follow-up adds:

- [OSI foundation under objective 1.1](https://ianlin-smci.github.io/ccna-study-lab/#/lesson/1.1/osi-model): seven layer roles, transport units/addresses, an encapsulation walkthrough, TCP/IP mapping and troubleshooting limits.
- [VTP supporting guide under objective 2.1](https://ianlin-smci.github.io/ccna-study-lab/#/lesson/2.1/vtp): modes, versions, a separate VTPv3 server/client lab, primary takeover, verification and transparent/off alternatives, sourced to Cisco documentation. VTP is supporting study; it is not an explicitly named configuration objective in v1.1. This addition does not claim a full-text VTP comparison with the paid volumes.

Both guides have named links in the Learning Path, lesson navigation, site search and command library. They are included in the generated Markdown shadow copy. Their commands are documented examples, not physical-device validation.

## Findings and changes

| Area | Finding | Implemented change |
| --- | --- | --- |
| Book navigation | No topic-to-book mapping | References for all 53 lessons; domain/volume/search filters |
| Foundations | Layering was implicit and later notes still lacked a dedicated OSI introduction | Named seven-layer OSI foundation plus Ethernet framing, ARP/ND and per-hop explanations |
| Addressing | Limited subnet-design practice | Added VLSM allocation, mask design and IPv6 /48-to-/64 reasoning |
| OSPF/routing | Limited adjacency and next-hop interpretation | Added states, normal DROther 2-Way, local process IDs, router-ID selection and return-path cases |
| IPv6 static routes | No explicit IPv6 floating example in the guide | Added a separate AD 200 backup and limits of untracked failover |
| ACLs | Configuration emphasized extended filters | Added a standard ACL/VTY module, rule-shadowing and stateless infrastructure-traffic explanations |
| DAI | Short concept example mixed contexts and omitted separate DAI uplink trust | Corrected the short example; the existing full guide already configured both trusts |
| Wireless GUI | Object relationships and platform differences abbreviated | Added 9800 profile/tag/AP mapping, AireOS differences, WMM and client verification |
| Services/automation | Several summaries needed operational reasoning | Added DSCP/CoS, NTP trust, SNMP levels, FTP channels, AAA fallback, REST, AI and Terraform state cases |
| Practice variety | Repeated generated subnet/lookup patterns | Initial review added scenarios; the later [question-bank review](question-bank-review.md) consolidated variants and expanded the active bank to 206 original questions |

Every lesson now has two additional original explanations and one worked check: 106 explanation sections and 53 review checks. The core objective command guides contain 136 modules; the OSI/VTP supporting guides add 10 separate documented command steps. Existing progress IDs remain valid. Questions and teaching paragraphs are independently authored, not copies of Pearson's bank.

## Errata and platform context

Reviewed the publisher's public September 10, 2025 errata documents. Apply corrections according to your printing. Relevant distinctions include global PortFast-related default syntax versus interface commands, the loop risk of misused edge ports, and Scrypt for type-9 secrets. Current site examples use interface PortFast syntax and scrypt. The site's independent questions do not inherit the publisher's corrected quiz answer keys.

Older textbook commands remain useful for recognition. Current IOS XE support depends on release, hardware and license; use platform-labeled examples and supported secure alternatives.

## Blueprint structure update

The Learning Path now exposes 53 objectives and the 58 explicit lettered subtopics using Cisco v1.1 numbering and skill targets. Concise study labels are independently worded. Book references remain supplemental to the exam structure.

## Lesson-to-book crosswalk

Website order follows the blueprint; book order differs. Chapters refer only to the Second Edition. These are suggested reading relationships; a chapter can support several objectives.

| Objective | Website lesson | Suggested chapters | Added focus |
| --- | --- | --- | --- |
| 1.1 | Network component roles | Vol. 1: 1, 3; Vol. 2: 10, 18 | Layering, encapsulation and device roles |
| 1.2 | Network topology architectures | Vol. 1: 3; Vol. 2: 18, 19, 20, 21 | Campus, WAN and cloud design trade-offs |
| 1.3 | Physical interfaces and cabling | Vol. 1: 2, 7; Vol. 2: 18 | Ethernet standards, framing and media |
| 1.4 | Interface and cable faults | Vol. 1: 7, 16, 20 | Interface state and counter interpretation |
| 1.5 | TCP and UDP | Vol. 1: 1; Vol. 2: 5 | Transport multiplexing and well-known ports |
| 1.6 | IPv4 addresses and subnetting | Vol. 1: 11, 12, 13, 14, 15 | Binary masks, subnet design and VLSM |
| 1.7 | Private IPv4 address space | Vol. 1: 11, 12; Vol. 2: 14 | Private, public and special-use IPv4 |
| 1.8 | IPv6 addresses and prefixes | Vol. 1: 25, 26, 27, 28 | IPv6 prefix math and router discovery |
| 1.9 | IPv6 address categories | Vol. 1: 25, 27, 28 | Neighbor Discovery and address scope |
| 1.10 | Client operating-system IP settings | Vol. 1: 19, 20, 28 | Host forwarding and return-path diagnosis |
| 1.11 | Wireless networking principles | Vol. 2: 1, 3 | Wireless topology, contention and RF |
| 1.12 | Virtual machines, containers and VRFs | Vol. 2: 20 | Virtual switching and cloud service responsibility |
| 1.13 | Ethernet switching behavior | Vol. 1: 2, 5 | MAC-table decisions and per-hop encapsulation |
| 2.1 | Normal-range VLANs across switches | Vol. 1: 8, 18 | VLAN membership versus routed policy |
| 2.2 | Links between switches | Vol. 1: 8 | Trunk negotiation and operational VLAN checks |
| 2.3 | CDP and LLDP discovery | Vol. 2: 13 | Interpret neighbor advertisements as evidence |
| 2.4 | Layer 2 and Layer 3 LACP EtherChannels | Vol. 1: 10, 18 | Bundling compatibility and logical forwarding |
| 2.5 | Rapid PVST+ operation | Vol. 1: 9, 10 | STP elections, roles and protection behavior |
| 2.6 | Wireless architectures and AP modes | Vol. 2: 2 | Wireless management and data-path placement |
| 2.7 | WLAN component connections | Vol. 2: 2, 4 | Physical links, LAG and WLAN-to-VLAN paths |
| 2.8 | Network device management access | Vol. 1: 4, 6, 16; Vol. 2: 10 | CLI modes, persistence and access transport |
| 2.9 | Wireless controller GUI settings | Vol. 2: 4 | Interpret controller GUI object relationships |
| 3.1 | Routing-table entries | Vol. 1: 17, 24, 29 | Route entries and recursive next-hop resolution |
| 3.2 | Default forwarding decisions | Vol. 1: 21, 24 | Route installation versus packet lookup |
| 3.3 | IPv4 and IPv6 static routes | Vol. 1: 17, 29 | Route types and real backup activation |
| 3.4 | Single-area OSPFv2 | Vol. 1: 21, 22, 23, 24 | OSPF adjacency states and configuration meaning |
| 3.5 | First-hop redundancy concepts | Vol. 2: 16 | Virtual gateways, tracking and load sharing |
| 4.1 | Inside-source NAT: static mappings and pools | Vol. 2: 14 | NAT identities, capacity and policy |
| 4.2 | NTP clients and servers | Vol. 2: 13 | NTP hierarchy, trust and synchronization |
| 4.3 | DHCP and DNS roles | Vol. 1: 19, 28; Vol. 2: 5 | DHCP lease stages and DNS resolution |
| 4.4 | SNMP in network operations | Vol. 2: 17 | SNMP operations, views and security levels |
| 4.5 | Syslog facilities and severity | Vol. 2: 13 | Syslog fields, destinations and severity |
| 4.6 | DHCP clients and relays | Vol. 1: 6, 19 | Relay placement and DHCP client roles |
| 4.7 | QoS per-hop forwarding behavior | Vol. 2: 15 | QoS marking fields and delay/loss trade-offs |
| 4.8 | SSH remote access | Vol. 1: 6; Vol. 2: 10 | SSH prerequisites and management filtering |
| 4.9 | TFTP and FTP capabilities | Vol. 2: 17 | Transfer data channels and image validation |
| 5.1 | Security threats, weaknesses and mitigation | Vol. 2: 9, 10 | Threat categories and control purpose |
| 5.2 | Security awareness and physical controls | Vol. 2: 9 | People, physical access and incident workflow |
| 5.3 | Local-password device access | Vol. 1: 4, 6; Vol. 2: 10 | Password storage versus transport protection |
| 5.4 | Password policies and authentication alternatives | Vol. 2: 9, 10 | Authentication factors and credential lifecycle |
| 5.5 | Remote-access and site-to-site IPsec VPNs | Vol. 2: 19 | IPsec protection and two-way verification |
| 5.6 | Access control lists | Vol. 2: 6, 7, 8 | ACL order, scope and infrastructure traffic |
| 5.7 | Layer 2 security controls | Vol. 2: 11, 12 | Independent trust settings and static-host bindings |
| 5.8 | Authentication, authorization and accounting | Vol. 1: 6; Vol. 2: 9 | AAA decisions and fallback semantics |
| 5.9 | WPA, WPA2 and WPA3 security | Vol. 2: 3 | Wireless authentication versus data protection |
| 5.10 | WPA2-PSK WLANs in a GUI | Vol. 2: 4 | Complete WPA2-Personal GUI workflow |
| 6.1 | Automation and network management | Vol. 2: 21, 24 | Intent, drift and safe automation workflow |
| 6.2 | Traditional and controller-based networks | Vol. 2: 21, 22 | Logical centralization and device autonomy |
| 6.3 | Software-defined network architecture | Vol. 2: 21, 22 | Planes, overlays and fabric mechanisms |
| 6.4 | Generative AI, predictive AI and ML in operations | Vol. 2: 22 | Predictive, generative and validated operations |
| 6.5 | REST API characteristics | Vol. 2: 23 | REST resource semantics and authorization |
| 6.6 | Ansible and Terraform capabilities | Vol. 2: 24 | Inventory, declarative intent and sensitive state |
| 6.7 | JSON data components | Vol. 2: 23 | JSON nesting, types and serialization |

## Remaining study requirements

- Read the full referenced chapters and complete their review tasks, subnet exercises and companion practice. The site supplies less practice volume and depth.
- Build and troubleshoot multi-device labs in a suitable simulator or on supported equipment. Topic mapping does not validate a physical configuration.
- Use Volume 2 Chapter 26 for final review. Check companion updates associated with Volume 1 Chapter 30 and Volume 2 Chapter 25. This site remains on v1.1 for the planned exam before February 3, 2027.
- Distinguish book background from blueprint verbs. The core configuration target remains single-area OSPFv2; broader multiarea/provider deployments are not treated as added v1.1 configuration requirements.

## Primary sources

- [Cisco v1.1 exam objectives](https://learningcontent.cisco.com/documents/marketing/exam-topics/200-301-CCNA-v1.1.pdf)
- [Volume 1 Second Edition, ISBN 9780138229634: public contents and samples](https://www.ciscopress.com/store/ccna-200-301-official-cert-guide-volume-1-9780138229634)
- [Volume 2 Second Edition, ISBN 9780138214951: public contents and samples](https://www.ciscopress.com/store/ccna-200-301-official-cert-guide-volume-2-9780138214951)
- [Volume 1 errata](https://www.ciscopress.com/content/images/9780138229634/errata/CCNA-200-301-Vol1-Errata-2025-09-10.docx)
- [Volume 2 errata](https://www.ciscopress.com/content/images/9780138214951/errata/CCNA-200-301-Vol2-Errata-2025-09-10.docx)
- [Public OSPF sample: network configuration](https://www.ciscopress.com/articles/article.asp?p=3197438&seqNum=3)
- [Public OSPF sample: interface configuration](https://www.ciscopress.com/articles/article.asp?p=3197438&seqNum=4)
- [Public FHRP sample](https://www.ciscopress.com/articles/article.asp?p=3197440&seqNum=3)
- [Public VRRP/GLBP sample](https://www.ciscopress.com/articles/article.asp?p=3197440&seqNum=5)
- [Cisco DAI configuration reference](https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/sec-crypto/fhs-sisf/fhs-and-sisf-configuration-guide/dynamic-arp-inspection.html)
- [Cisco IPv6 static routing reference](https://www.cisco.com/c/en/us/td/docs/routers/ios-xe/ip-routing/b-ip-routing/m_ip6-route-static-xe.html)
- [Cisco 9800 profile/tag model](https://www.cisco.com/c/en/us/support/docs/wireless/catalyst-9800-series-wireless-controllers/213911-understand-catalyst-9800-wireless-contro.html)
- [Current IOS XE security context](https://www.cisco.com/c/en/us/products/collateral/networking/switches/catalyst-9000-switches/c9000-ios-xe-resilient-infra-pb.html)
