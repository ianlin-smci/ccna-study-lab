import type {CommandBlock,Source} from './models';

export interface StudySection {
 heading:string; paragraphs:string[];
 cards?:{title:string;body:string;detail:string}[];
 table?:{headers:string[];rows:string[][]};
 steps?:string[]; caption?:string;
}
export interface SupportingTopic {
 slug:string;lesson:string;title:string;label:string;scope:string;intro:string;
 keywords:string[];sections:StudySection[];commands:CommandBlock[];sources:Source[];
}

/** Supporting foundations stay under existing objectives, without invented blueprint IDs. */
export const SUPPORTING_TOPICS:SupportingTopic[] = [
 {
  slug:'osi-model',lesson:'1.1',title:'OSI model: seven jobs behind one network conversation',label:'Foundation',
  scope:'A foundation for device roles, troubleshooting and later lessons. The seven layer numbers are model layers, not additional CCNA objective numbers.',
  intro:'OSI means Open Systems Interconnection. It is a reference model: a way to divide network communication into seven understandable jobs. Think of sending a parcel: choosing its contents, packaging it, addressing it and physically carrying it are different jobs in one delivery.',
  keywords:['OSI','OSI model','Open Systems Interconnection','encapsulation','TCP/IP model'],
  sections:[
   {heading:'Meet the seven layers',paragraphs:[
    'Read from Layer 7 down to Layer 1 for the sender. The receiving host works upward to deliver the content to its application. A layer is a responsibility, not necessarily a separate box or program.',
    'The lower layers provide delivery services to the higher layers. TCP/IP software does not implement seven neatly separate OSI programs; some real protocols span these conceptual boundaries.'
   ],cards:[
    {title:'7 · Application',body:'Provides network services used by applications: asking for a web page, looking up a name or transferring a file.',detail:'Examples: HTTP and DNS. Clue: a server address responds but its web service is stopped. The browser interface itself is not the entire definition of this layer.'},
    {title:'6 · Presentation',body:'Describes how information is represented so the receiver can interpret it, including encoding, compression and encryption-related functions.',detail:'Example: agreeing how text is encoded. TLS is often discussed here for teaching, but real TLS does not fit exclusively into one OSI box.'},
    {title:'5 · Session',body:'Describes establishing, maintaining and ending an application dialogue, including coordinating ongoing exchanges.',detail:'Think of managing the conversation rather than carrying each individual packet. A web login session is not automatically proof of a distinct Layer 5 protocol.'},
    {title:'4 · Transport',body:'Delivers data to the right application conversation using transport port numbers. TCP adds reliable ordering and retransmission; UDP does not add those guarantees itself.',detail:'Names: TCP segment or UDP datagram. Examples: TCP 443 and UDP 53. A port number here is different from a physical switch socket.'},
    {title:'3 · Network',body:'Addresses packets and chooses paths between IP networks.',detail:'Name: packet; identifiers: source and destination IP addresses. A router normally makes its forwarding decision here. A missing route is a Layer 3 clue.'},
    {title:'2 · Data link',body:'Carries information over a local link in frames. Ethernet uses MAC addresses; switching and VLANs keep local delivery organized.',detail:'Name: frame; identifiers on Ethernet: MAC addresses. A wrong access VLAN or corrupted Ethernet frame is a useful Layer 2 clue.'},
    {title:'1 · Physical',body:'Carries binary information as electrical, optical or radio signals across a medium.',detail:'Think bits and signals, cables, optics and radio. A disconnected cable or incompatible transceiver is a Layer 1 clue.'}
   ],caption:'The cards describe seven kinds of work. A firewall or multilayer switch can inspect several layers; the model does not restrict one device to one layer.'},
   {heading:'How a web request gets its wrappers',paragraphs:[
    'Encapsulation means adding delivery information around the data. De-encapsulation means removing the relevant wrappers at the receiver. A header is information placed before a payload; an Ethernet trailer follows the payload and includes a corruption check.',
    'Use this simplified IPv4/TCP example: a laptop at 192.0.2.10/24 requests a server at 198.51.100.20. Its gateway is 192.0.2.1. Assume routes work and there is no NAT or tunnel.'
   ],steps:[
    'Application data: the browser prepares a request. For HTTPS, security processing protects application content before it is carried by TCP in this example.',
    'Transport: TCP adds source and destination port numbers and delivery information. The server port is commonly 443; the client normally chooses a temporary source port.',
    'Network: IPv4 adds source 192.0.2.10 and destination 198.51.100.20, producing an IP packet.',
    'Data link: the laptop uses ARP to find the gateway MAC because the server is remote. Its Ethernet frame names the laptop MAC as source and the gateway MAC as destination. The packet inside still names the server IP.',
    'Physical: the local link carries signals. A Layer 2 switch forwards the frame within its VLAN toward the gateway.',
    'At the router: remove the incoming Ethernet wrapper, reduce IPv4 TTL, select the most specific matching route and build the outgoing link wrapper. MAC addresses change at routed Ethernet hops; the endpoint IPs stay the same under these assumptions.',
    'At the server: process the received link, IP and transport information and deliver the content upward to the application. The reply needs its own working route back.'
   ],caption:'Read the steps in order. The nested idea is Ethernet frame [ IP packet [ TCP segment [ application data ] ] ]. These are wrappers, not four separate copies of the message. A new wrapper may be needed on each routed link.'},
   {heading:'Relate OSI to the TCP/IP model',paragraphs:['A common TCP/IP teaching model uses four layers. Some books split its link layer into data link and physical, giving five. This is a grouping difference rather than an extra network feature.'],table:{headers:['Common TCP/IP layer','Related OSI responsibilities'],rows:[['Application','OSI 7, 6 and 5: application services and representation/dialogue functions'],['Transport','OSI 4: TCP or UDP application delivery'],['Internet','OSI 3: IP addressing and routing'],['Link / network access','OSI 2 and 1: local frames and physical transmission']]},caption:'The mapping is approximate. Learn what each function does instead of assigning every modern protocol to exactly one OSI box.'},
   {heading:'Troubleshoot one dependency at a time',paragraphs:[
    'Start with a concrete symptom. Check the link, local VLAN and address, route, transport policy and application. A failure higher up can depend on something lower down; a passing lower-layer check does not prove the rest works.',
    'For example, ping uses ICMP to test an IP request/reply path. A successful ping does not prove TCP 443 is permitted, the web server is listening or a certificate is valid. A failed ping can also reflect filtering, so do not identify a layer from one symptom alone.',
    'There is no command to enable the OSI model. Configure the actual feature—an interface, VLAN, address, route or service—and use the model to explain what that feature does.'
   ]}
  ],
  commands:[{title:'Inspect links, switching, routing and filter evidence',kind:'verify',where:'IOS/IOS XE switch or routing-capable switch · start in user EXEC; adapt the interface name',plain:'These read-only checks gather evidence for different jobs. They do not test every layer or configure an OSI feature.',why:'Read interface state/errors for the physical/link condition, MAC entries for switching and routes for network forwarding. ACL output can describe Layer 3/4 matching policy and counters; it is not a packet capture or proof that a remote application works.',code:'enable\nshow interfaces GigabitEthernet1/0/24\nshow mac address-table dynamic\nshow ip route\nshow ip access-lists',expected:'Interpret each output on the actual platform. A Layer 2-only device may not provide the same routing view; empty MAC or ACL output needs context and test traffic.',covers:'Foundation supporting 1.1; related 1.4, 1.5, 1.13 and 3.1'}],
  sources:[
   {title:'Oracle system administration guide: OSI reference model',url:'https://docs.oracle.com/cd/E19455-01/806-0916/ipov-8/index.html'},
   {title:'RFC 1122: Internet protocol-suite layers',url:'https://www.rfc-editor.org/rfc/rfc1122.html'},
   {title:'Cisco: encapsulation and the OSI model',url:'https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/interface/configuration/15-mt/ir-15-mt-book/ir-impl-tun.html'}
  ]
 },
 {
  slug:'vtp',lesson:'2.1',title:'VTP: share the VLAN directory between switches',label:'Supporting topic',
  scope:'VTP supports VLAN study but is not an explicitly named configuration objective in the CCNA 200-301 v1.1 blueprint. This separate lab extends the VLAN lesson; it is not a new numbered objective or a required step in the earlier inter-VLAN lab.',
  intro:'VTP means VLAN Trunking Protocol, a Cisco protocol for sharing VLAN definitions between participating switches. Think of distributing the same room directory to several reception desks: creating or renaming a VLAN centrally can update the other directories without separately typing that VLAN definition on every switch.',
  keywords:['VTP','VLAN Trunking Protocol','vtp primary','vtp mode','VTP version 3'],
  sections:[
   {heading:'What VTP does—and what you still configure',paragraphs:[
    'A VTP domain is the group sharing a VLAN database, identified by a domain name. Advertisements are the update messages carried across working switch trunks. A revision identifies database changes; it is not a clock or a measure of security.',
    'VTP shares VLAN definitions, such as IDs and names. It does not create the trunk, assign every access port, choose host IP settings or configure gateways and routing. It also does not encrypt user traffic. DTP negotiates trunks on supported ports; 802.1Q labels VLAN frames. Those are different jobs.'
   ]},
   {heading:'Choose the role and understand the version',paragraphs:['The following roles describe the VLAN database. The lab uses VTP version 3 on both switches; do not assume that a mixed-version design has the same behavior.'],table:{headers:['Mode / role','Plain-language behavior'],rows:[
    ['Server · VTP v1/v2','Can change the VLAN database and share it. A same-domain device carrying an unwanted higher revision can spread the wrong database.'],
    ['Server · VTP v3','Server mode alone is not the editing authority. Take the primary role for the VLAN database before making shared changes; secondary servers retain learned data.'],
    ['Client','Learns the shared database and cannot locally create/change/delete its VLAN definitions. Access-port membership is still configured locally.'],
    ['Transparent','Keeps its own local VLAN definitions rather than learning or publishing the shared database. Version 2/3 transparent switches can relay received advertisements on trunks.'],
    ['Off','Keeps local VLAN management and does not relay VTP advertisements.']
   ]},caption:'Version 3 adds a controlled primary editing role and support for extended-range VLAN propagation. The primary role is operational: it can be lost after reload or domain changes even when settings were saved.'},
   {heading:'Build a separate two-switch lab',paragraphs:[
    'Use two isolated Catalyst 9300 switches, or a simulator/image that supports the shown VTPv3 commands. The reference is Cisco’s IOS XE 26.x documentation; many supported 17.x images have similar syntax. Commands were reviewed against documentation, not run on physical equipment. Check show version and command help on your image.',
    'Start with fresh disposable lab switches and their Gi1/0/24 uplinks disconnected or shut down. The example deliberately uses native VLAN 1 on both ends and allows VLANs 1, 10 and 20. It is independent of the earlier native-VLAN-999 lab. Replace <VTP_SECRET> with the same suitable secret on both devices; it is a placeholder, not literal text to paste.',
    'Connect PC-A to Gi1/0/1 on VTP-SW1 and PC-B to Gi1/0/1 on VTP-SW2. Later assign 192.0.2.10/24 and 192.0.2.11/24. No default gateway is needed for this same-subnet test; no inter-VLAN routing is configured.'
   ],steps:[
    'Inspect both isolated switches and verify their existing databases and software before allowing updates.',
    'Prepare matching domain, version and secret with SW1 as server and SW2 as client; keep the trunk shut while preparing.',
    'Connect the intended cable, enable both trunk ends and verify the intended domain participants.',
    'On SW1, take the VTPv3 primary VLAN role, read the prompts, then create VLANs 10 and 20 there.',
    'Verify SW2 learned the definitions, assign the host ports locally, test same-VLAN traffic and save the intended settings.'
   ],caption:'The connection is PC-A — access VLAN 10 — VTP-SW1 ⇄ 802.1Q trunk ⇄ VTP-SW2 — access VLAN 10 — PC-B. Update messages flow over the trunk; host-port membership is not copied by VTP.'},
   {heading:'Check the result before changing anything else',paragraphs:[
    'On SW2, show vlan brief should list VLAN 10 USERS and VLAN 20 SERVERS even though the create commands ran only on SW1. That proves database learning, not that every VLAN carries traffic. Only after the local port assignments and endpoint settings should the two VLAN-10 hosts be able to ping.',
    'If learning fails, compare domain name, operating version, mode, secret, primary identity, trunk state and whether VTP is enabled on that trunk. Use show vtp counters and show vtp devices in the supported v3 context. Do not treat a configured trunk command as proof of an operational trunk.',
    'For v1/v2 especially, inspect a reused switch’s revision and database before joining a real domain. Do not paste deletion/reset commands or a forced primary takeover into an existing network. This lab avoids both. For backups, include the VLAN database as required by the platform; saving running-config alone is not a promise that all VLAN-database state or the primary role is preserved.',
    'VTP pruning is optional optimization of unnecessary flooded traffic on eligible trunks, not a VLAN access-control policy. It is not needed here. Version 3 requires pruning enabled individually where intended; plan it separately from the trunk allowed list.'
   ]}
  ],
  commands:[
   {title:'1. Inspect both isolated lab switches',kind:'verify',where:'Run on each switch · user EXEC → privileged EXEC; uplinks remain disconnected/shut',plain:'Find out what the switches already contain before letting either one exchange VLAN updates.',why:'Check software support, domain, version, mode, revision and existing VLANs. Continue only with the intended disposable lab state. These commands inspect rather than erase a database.',code:'enable\nshow version\nshow vtp status\nshow vlan brief\nshow interfaces trunk',expected:'Both devices support VTP version 3 and contain no unrelated configuration that this lab should preserve.',covers:'Supporting VLAN study'},
   {title:'2. Prepare VTP-SW1 as the v3 server',kind:'configure',where:'VTP-SW1 only · start in user EXEC; Gi1/0/24 remains shut',plain:'Choose the shared directory name and secret, then prepare a trunk that is not yet passing updates.',why:'The domain, version and secret must match SW2. hidden stores a derived key instead of displaying the entered password plainly; it is not user-data encryption. Server mode is not yet the primary editing role.',code:'enable\nconfigure terminal\nhostname VTP-SW1\nvtp domain CCNA-LAB\nvtp version 3\nvtp password <VTP_SECRET> hidden\nvtp mode server vlan\ninterface GigabitEthernet1/0/24\n description VTP_lab_to_SW2\n shutdown\n switchport mode trunk\n switchport trunk native vlan 1\n switchport trunk allowed vlan 1,10,20\n switchport nonegotiate\n vtp\nend',expected:'show vtp status reports domain CCNA-LAB, operating version 3 and server mode. The uplink is still administratively down.',covers:'Supporting VTPv3 setup'},
   {title:'3. Prepare VTP-SW2 as the v3 client',kind:'configure',where:'VTP-SW2 only · start in user EXEC; Gi1/0/24 remains shut',plain:'Tell this switch to learn the shared VLAN directory, while matching the intended trunk settings.',why:'Use the same domain and entered secret as SW1. The client learns VLAN definitions; this does not automatically assign its workstation ports.',code:'enable\nconfigure terminal\nhostname VTP-SW2\nvtp domain CCNA-LAB\nvtp version 3\nvtp password <VTP_SECRET> hidden\nvtp mode client vlan\ninterface GigabitEthernet1/0/24\n description VTP_lab_to_SW1\n shutdown\n switchport mode trunk\n switchport trunk native vlan 1\n switchport trunk allowed vlan 1,10,20\n switchport nonegotiate\n vtp\nend',expected:'show vtp status reports CCNA-LAB, operating version 3 and client mode. No VLAN-create command has been run on SW2.',covers:'Supporting VTPv3 setup'},
   {title:'4. Enable and inspect the prepared trunk',kind:'configure',where:'Run on BOTH switches after connecting only the intended Gi1/0/24 cable',plain:'Open the prepared connection and check which switch is on the other end before making shared changes.',why:'A live trunk is required for advertisements. Read the discovered v3 devices and status before the primary takeover; all participants in this lab must be the ones you intended.',code:'enable\nconfigure terminal\ninterface GigabitEthernet1/0/24\n no shutdown\nend\nshow interfaces trunk\nshow vtp devices\nshow vtp status',expected:'The link is an operational trunk with matching native/allowed VLAN settings; the intended v3 domain participants are visible.',covers:'Supporting VTP transport'},
   {title:'5. Take the primary VLAN role on SW1',kind:'configure',where:'VTP-SW1 only · privileged EXEC (#), NOT global configuration; run interactively',plain:'Make this server the authorized editor for the shared VLAN database.',why:'Run this single command, read the takeover confirmation and enter the configured secret if prompted because hidden was used. Confirm only the intended isolated lab takeover before proceeding to step 6. The example deliberately omits force. This operational role can be lost after reload or domain changes.',code:'vtp primary vlan',expected:'After the interactive checks succeed, show vtp status identifies SW1 as the primary for the VLAN database. Merely saving configuration does not make that role permanent.',covers:'Supporting VTPv3 primary role'},
   {title:'6. Create shared VLANs on SW1 only',kind:'configure',where:'VTP-SW1 only · primary role from step 5 must already be established',plain:'Write two entries in the shared directory, then look for them on the client.',why:'Create VLANs only on the primary server in this example. Inspect SW2 separately with show vlan brief and show vtp status; do not repeat the create commands on the client.',code:'enable\nconfigure terminal\nvlan 10\n name USERS\nexit\nvlan 20\n name SERVERS\nexit\nend\nshow vlan brief\nshow vtp status',expected:'SW1 and SW2 list VLAN 10 USERS and VLAN 20 SERVERS after successful synchronization. SW2 can still have no access ports assigned to those VLANs.',covers:'Supporting VLAN database synchronization'},
   {title:'7. Assign host ports locally, test, then save',kind:'configure',where:'Run interface/show/copy commands on BOTH switches; run the commented ping on PC-A',plain:'A copied room directory does not connect a desk to a room. Assign each host port yourself, then test actual traffic.',why:'Give PC-A 192.0.2.10/24 and PC-B 192.0.2.11/24. Both use VLAN 10, so no router or default gateway is needed for this peer test. Endpoint firewalls must permit the intended ICMP test. Save validated settings and preserve the platform VLAN database when taking backups.',code:'enable\nconfigure terminal\ninterface GigabitEthernet1/0/1\n switchport mode access\n switchport access vlan 10\n spanning-tree portfast\n no shutdown\nend\nshow interfaces GigabitEthernet1/0/1 switchport\nshow vlan brief\nshow interfaces trunk\nshow vtp status\nshow vtp counters\n! On PC-A: ping 192.0.2.11\n! Save on each switch after successful verification:\ncopy running-config startup-config',expected:'Both local access ports belong to VLAN 10. PC-A and PC-B can exchange allowed same-subnet traffic across the trunk. This proves no inter-VLAN routing.',covers:'2.1 access membership with supporting VTP learning'},
   {title:'Optional alternative: keep SW2 VLANs local with transparent mode',kind:'configure',where:'VTP-SW2 only · use after the shared-database lab, as a separate mode experiment',plain:'Stop learning the shared database and create a local-only VLAN entry.',why:'Transparent mode permits local VLAN management. In version 3 it can still relay advertisements, but it does not publish this local VLAN 30 change to SW1. It does not remove all existing VLANs or turn off the physical trunk.',code:'enable\nconfigure terminal\nvtp mode transparent vlan\nvlan 30\n name LOCAL_ONLY\nexit\nend\nshow vtp status\nshow vlan brief',expected:'SW2 reports transparent mode and local VLAN 30. Creating that VLAN here does not create it on SW1.',covers:'Supporting VTP mode comparison'},
   {title:'Optional alternative: stop relaying VTP with off mode',kind:'configure',where:'VTP-SW2 only · alternative mode experiment; not part of the client synchronization path',plain:'Keep VLAN administration local and stop forwarding VTP advertisements through this switch.',why:'Off differs from transparent in advertisement relay behavior. It does not itself disable the trunk or erase the local VLAN database. Future shared updates should not be expected while SW2 is off.',code:'enable\nconfigure terminal\nvtp mode off vlan\nend\nshow vtp status',expected:'SW2 reports off mode for the VLAN database. Its user-data link and VLAN settings are separate features.',covers:'Supporting VTP mode comparison'}
  ],
  sources:[
   {title:'Cisco: understand VTP and configuration revisions',url:'https://www.cisco.com/c/en/us/support/docs/lan-switching/vtp/10558-21.html'},
   {title:'Catalyst 9300 IOS XE 26.x: configure VTP',url:'https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst9300/software/release/26-x/configuration_guide/vlan/b_26x_vlan_9300_cg/configuring_vtp.html'},
   {title:'Catalyst 9300 IOS XE 26.x: VTP command contexts',url:'https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst9300/software/release/26-x/command_reference/b_26x_9300_cr/vlan_commands.html'},
   {title:'Catalyst 9300 IOS XE 17.17: VTP modes and persistence',url:'https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst9300/software/release/17-17/configuration_guide/vlan/b_1717_vlan_9300_cg/configuring_vtp.html'}
  ]
 }
];

export const supportingTopicsFor=(lesson:string)=>SUPPORTING_TOPICS.filter(t=>t.lesson===lesson);
export const supportingTopicAnchor=(lesson:string,slug:string)=>SUPPORTING_TOPICS.some(t=>t.lesson===lesson&&t.slug===slug)?'study-'+lesson+'-'+slug:null;
export const matchingSupportingTopic=(lesson:string,query:string)=>{
 const q=query.trim().toLowerCase();
 return supportingTopicsFor(lesson).find(t=>t.keywords.some(k=>q===k.toLowerCase()||q.startsWith(k.toLowerCase()+' ')));
};
export const supportingSearchText=(lesson:string)=>supportingTopicsFor(lesson).map(t=>JSON.stringify(t)).join(' ');
