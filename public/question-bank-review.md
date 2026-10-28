# Question bank review and expansion

Reviewed October 28, 2026. Target: CCNA 200-301 v1.1.

## Sources and retrieval scope

The [Reddit post](https://www.reddit.com/r/ccna/comments/1pcl3xa/introducing_a_free_ccna_200301_practice_app_with/) links to the [CCNA Exam Simulator](https://ccna-exam-simulator.vercel.app/) and its [public repository](https://github.com/MrVardanyan777/CCNA-Exam-Simulator). The complete literal question array was retrieved from [src/data/questions.js at the reviewed revision](https://github.com/MrVardanyan777/CCNA-Exam-Simulator/blob/b3e2d9491c666674c3d2280f0167e5bae70522cd/src/data/questions.js), not sampled from a few randomized sessions.

- Reviewed revision: `b3e2d9491c666674c3d2280f0167e5bae70522cd`.
- Retrieved question-file Git blob: `ae595f606153ba814ae9c19da7ecfb5c95e988e1`.
- Retrieved records: **628**, with **625 distinct source IDs**. IDs 290, 291 and 292 each occur twice.
- Formats: **582 multiple-choice** and **46 drag-and-drop** records.
- **175** records have an image flag or image path. Exhibit-dependent records are flagged for further visual review; their complete exhibits were not individually inspected or imported.
- The repository reported no license. Its author also described copying material from books in the thread. The external wording, answer options, explanations and images were used as private review material and are not reproduced in this project or its downloads.

[Download the complete source audit](question-source-audit.csv): one row per retrieved record, with its source ID, original category, suggested v1.1 objective/topic, scope, representative record and quality flags. Source IDs are not unique, so the **record** column is the audit key. The file contains classification metadata, not the external question text.

## Categorization and duplicate policy

Every retrieved record has a suggested topic mapping. Mappings were reviewed from stems and available option/explanation context. They classify the topic being tested; they do not endorse the source answer or certify complete exam relevance. Original categories were retained in the audit because several differ from the current blueprint, including FHRP and SNMP placements.

**Scope matters:** 575 records map to explicit v1.1 topics, 28 are supporting/platform-specific detail, and 25 are extensions beyond the explicit outline. The latter include detailed EIGRP/BGP/OSPFv3 operations, VTP and IP SLA. Their nearest objective is a navigation aid, not a claim that those details are required by that objective. The reviewed source has no questions mapped to v1.1 objective 6.4 (AI/ML).

Exact duplicate detection compared normalized stem text, option text, answer keys, image paths and matching pairs, preserving punctuation significant to JSON and CLI syntax. Two repeated records were merged for review. Sixteen manually identified similar-concept families were also consolidated to one topic representative. Different exhibits or different reasoning tasks were not merged merely for mentioning the same protocol.

The audit retains every original record for traceability, but marks **2 exact merges**, **45 similar-concept merges** and **581 topic representatives**. These are review classifications; no external representative was copied into the live question pool. Similarity review is conservative and does not prove the remaining external records are semantically unique.

| Current v1.1 domain | Source records mapped here | Current original site questions |
| --- | --- | --- |
| 1.0 Network Fundamentals | 150 | 51 |
| 2.0 Network Access | 125 | 33 |
| 3.0 IP Connectivity | 126 | 22 |
| 4.0 IP Services | 89 | 35 |
| 5.0 Security Fundamentals | 76 | 38 |
| 6.0 Automation & Programmability | 62 | 27 |

## Concrete source quality findings

- Source ID **69** assigns DHCP to TCP in a protocol-matching item. DHCPv4 uses UDP server port 67 and client port 68; this error remains in the retrieved revision.
- Source ID **100** has the same option text four times, and that representation is not valid JSON. It cannot function as a meaningful single-answer item.
- Source ID **130** pairs process ID with a uniqueness requirement in a neighbor-parameter matching exercise. That wording is ambiguous: process IDs identify local processes, not a peer-to-peer uniqueness requirement. Neighboring routers need not use different or matching process IDs; router IDs must be unique in the OSPF domain.
- The first occurrence of source ID **292**, and source ID **625**, have incomplete stems.
- **175** records declare an image but have no image path, and **295** lack an explanation. These are data-level observations; they do not establish whether an exhibit is supplied elsewhere by the external application.

Source answer keys were not comprehensively validated. A public repository or a large advertised count is not evidence of correctness. The new site questions are independently written and reviewed against the references below; no claim is made that they are actual Cisco exam questions.

## Changes to this site's pool

- Before: **136** questions, including many numerical variants of the same task.
- Retired: **40** duplicates: 20 subnet-network variants, 16 longest-prefix variants, and four additional concept duplicates.
- Retained: **96** existing questions with their stable IDs.
- Added: **110** independently authored questions with distinct learning-goal keys, four options, one answer and a reasoning explanation.
- After: **206** questions across all **53** objectives, with at least **three per objective**. The bank supports each domain quota for a 60-question blueprint-weighted mock exam.

New coverage includes PoE budgets, IPS roles, campus/cloud architecture, optical compatibility, duplex diagnosis, DHCP transport, VLSM overlap, IPv6 RA/EUI-64/anycast/ULA, client OS commands, containers, VLAN policy, trunk changes, EtherChannel consistency, STP guards, AP/controller paths, static routes, OSPF adjacency/MTU, NAT perspectives, NTP state, SNMP permissions, relay roles, QoS, AAA fallback, WLAN validation, automation drift, AI model limitations, API headers/rate limits, Terraform state and JSON types.

The goal is additional reasoning coverage. Changing only addresses, numeric values or names does not earn a second question. Concept keys and normalized-prompt checks help catch accidental duplicates; a human still needs to assess meaning when adding questions.

Saved progress is preserved: retired question IDs map to retained IDs for missed-question practice and flashcard review. Raw answer history, notes, completion records and exported backups are not rewritten or deleted. A saved rating for the retained question takes precedence; if only retired copies have ratings, an `again` rating keeps that concept in review. Counts ignore inactive/unknown cards rather than counting duplicate copies.

[Download the current question catalog](question-bank-catalog.csv) for IDs, domains, objectives, concepts and original question prompts. It is regenerated by `npm run docs:sync` and checked in CI.

## Coverage by objective

| Objective | Topic | Source records mapped here | Site before | Site now |
| --- | --- | --- | --- | --- |
| 1.1 | Network component roles | 17 | 1 | 4 |
| 1.2 | Network topology architectures | 21 | 1 | 4 |
| 1.3 | Physical interfaces and cabling | 4 | 1 | 3 |
| 1.4 | Interface and cable faults | 10 | 1 | 3 |
| 1.5 | TCP and UDP | 11 | 2 | 4 |
| 1.6 | IPv4 addresses and subnetting | 10 | 25 | 7 |
| 1.7 | Private IPv4 address space | 10 | 1 | 3 |
| 1.8 | IPv6 addresses and prefixes | 7 | 1 | 3 |
| 1.9 | IPv6 address categories | 17 | 2 | 5 |
| 1.10 | Client operating-system IP settings | 5 | 2 | 4 |
| 1.11 | Wireless networking principles | 12 | 1 | 3 |
| 1.12 | Virtual machines, containers and VRFs | 8 | 1 | 3 |
| 1.13 | Ethernet switching behavior | 18 | 3 | 5 |
| 2.1 | Normal-range VLANs across switches | 18 | 1 | 3 |
| 2.2 | Links between switches | 21 | 2 | 4 |
| 2.3 | CDP and LLDP discovery | 13 | 1 | 3 |
| 2.4 | Layer 2 and Layer 3 LACP EtherChannels | 10 | 3 | 4 |
| 2.5 | Rapid PVST+ operation | 27 | 4 | 6 |
| 2.6 | Wireless architectures and AP modes | 14 | 1 | 3 |
| 2.7 | WLAN component connections | 8 | 1 | 3 |
| 2.8 | Network device management access | 5 | 1 | 3 |
| 2.9 | Wireless controller GUI settings | 9 | 2 | 4 |
| 3.1 | Routing-table entries | 9 | 1 | 3 |
| 3.2 | Default forwarding decisions | 43 | 18 | 4 |
| 3.3 | IPv4 and IPv6 static routes | 23 | 3 | 4 |
| 3.4 | Single-area OSPFv2 | 36 | 5 | 8 |
| 3.5 | First-hop redundancy concepts | 15 | 1 | 3 |
| 4.1 | Inside-source NAT: static mappings and pools | 10 | 3 | 5 |
| 4.2 | NTP clients and servers | 8 | 2 | 4 |
| 4.3 | DHCP and DNS roles | 20 | 2 | 4 |
| 4.4 | SNMP in network operations | 5 | 2 | 4 |
| 4.5 | Syslog facilities and severity | 7 | 3 | 4 |
| 4.6 | DHCP clients and relays | 12 | 1 | 3 |
| 4.7 | QoS per-hop forwarding behavior | 11 | 3 | 5 |
| 4.8 | SSH remote access | 10 | 1 | 3 |
| 4.9 | TFTP and FTP capabilities | 6 | 1 | 3 |
| 5.1 | Security threats, weaknesses and mitigation | 7 | 1 | 3 |
| 5.2 | Security awareness and physical controls | 7 | 1 | 3 |
| 5.3 | Local-password device access | 7 | 1 | 3 |
| 5.4 | Password policies and authentication alternatives | 4 | 1 | 3 |
| 5.5 | Remote-access and site-to-site IPsec VPNs | 4 | 1 | 3 |
| 5.6 | Access control lists | 9 | 4 | 6 |
| 5.7 | Layer 2 security controls | 16 | 4 | 6 |
| 5.8 | Authentication, authorization and accounting | 11 | 2 | 4 |
| 5.9 | WPA, WPA2 and WPA3 security | 7 | 2 | 4 |
| 5.10 | WPA2-PSK WLANs in a GUI | 4 | 1 | 3 |
| 6.1 | Automation and network management | 4 | 1 | 3 |
| 6.2 | Traditional and controller-based networks | 19 | 1 | 3 |
| 6.3 | Software-defined network architecture | 22 | 2 | 4 |
| 6.4 | Generative AI, predictive AI and ML in operations | 0 | 2 | 4 |
| 6.5 | REST API characteristics | 8 | 4 | 6 |
| 6.6 | Ansible and Terraform capabilities | 3 | 1 | 3 |
| 6.7 | JSON data components | 6 | 3 | 4 |

## Technical references used in review

- [Cisco CCNA 200-301 v1.1 blueprint](https://learningcontent.cisco.com/documents/marketing/exam-topics/200-301-CCNA-v1.1.pdf).
- [RFC 2131: DHCPv4](https://www.rfc-editor.org/rfc/rfc2131.html), [RFC 1918: private IPv4 space](https://www.rfc-editor.org/rfc/rfc1918.html).
- [RFC 4291: IPv6 addressing](https://www.rfc-editor.org/rfc/rfc4291.html), [RFC 4861: Neighbor Discovery](https://www.rfc-editor.org/rfc/rfc4861.html).
- [Cisco Rapid STP](https://www.cisco.com/c/en/us/support/docs/lan-switching/spanning-tree-protocol/24062-146.html), [root guard](https://www.cisco.com/c/en/us/support/docs/lan-switching/spanning-tree-protocol/10588-74.html), [loop guard](https://www.cisco.com/c/en/us/support/docs/lan-switching/spanning-tree-protocol-stp-8021d/218321-configure-stp-with-loop-guard-and-bpdu-s.html).
- [Cisco OSPF Exstart/Exchange troubleshooting](https://www.cisco.com/c/en/us/support/docs/ip/open-shortest-path-first-ospf/13684-12.html).
- [Cisco OSPF interface/process identifiers](https://www.cisco.com/c/en/us/support/docs/ip/open-shortest-path-first-ospf/13689-17.html), [NTP status verification](https://www.cisco.com/c/en/us/support/docs/technical-details/220303-verify-ntp-status-with-the-show-ntp-asso.html), [SNMP management security](https://www.cisco.com/c/en/us/support/docs/ip/simple-network-management-protocol-snmp/20370-snmpsecurity-20370.html).
- [Cisco IOS XE AAA authentication](https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/sec_usr_aaa/configuration/xe-16-12/sec-usr-aaa-xe-16-12-book/sec-cfg-authentifcn.html).
- [Cisco Catalyst 9300 port security](https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst9300/software/release/17-15/configuration_guide/sec/b_1715_sec_9300_cg/port_security.html).
- [Cisco WPA2 configuration](https://www.cisco.com/c/en/us/support/docs/wireless-mobility/wireless-lan-wlan/67134-wpa2-config.html) and the site's existing platform-labeled command references.
- [RFC 9110: HTTP semantics](https://www.rfc-editor.org/rfc/rfc9110.html), [RFC 6585: HTTP 429](https://www.rfc-editor.org/rfc/rfc6585.html), [RFC 8259: JSON](https://www.rfc-editor.org/rfc/rfc8259.html).
- [Ansible network playbooks](https://docs.ansible.com/projects/ansible/latest/network/getting_started/first_playbook.html), [Terraform planning](https://developer.hashicorp.com/terraform/cli/commands/plan), [Terraform state](https://developer.hashicorp.com/terraform/language/state/purpose).

The v1.1 outline is the scope reference. Older Cisco pages above support stable protocol semantics; they are not claims that their UI or CLI exactly matches every current IOS XE platform. Questions remain practice material rather than a replacement for hands-on labs or a guarantee of exam readiness.
