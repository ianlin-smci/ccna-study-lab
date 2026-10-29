import type {GlossaryEntry} from './glossary-types';

export const GLOSSARY: readonly GlossaryEntry[] = [
  {
    "abbreviation": "802.1Q",
    "fullName": "IEEE 802.1Q VLAN Tagging",
    "explanation": "The Ethernet standard that lets a link carry several VLANs while keeping their frames labeled by group. The label identifies the VLAN; it does not encrypt the data or route between groups."
  },
  {
    "abbreviation": "802.1X",
    "fullName": "IEEE 802.1X Port-Based Network Access Control",
    "explanation": "A framework for checking a user or device before granting network access. The client asks to join, a switch or AP controls entry, and an authentication service checks the supplied identity evidence."
  },
  {
    "abbreviation": "AAA",
    "fullName": "Authentication, Authorization, and Accounting",
    "explanation": "Three security jobs: check who someone is, decide what they may do, and record their activity. A successful login does not automatically permit every command or produce every needed audit record."
  },
  {
    "abbreviation": "AAAA",
    "fullName": "IPv6 Address Record",
    "explanation": "A DNS directory entry containing an IPv6 address for a name. An A record supplies the corresponding IPv4 address type."
  },
  {
    "abbreviation": "ACK",
    "fullName": "Acknowledgment",
    "explanation": "An acknowledgment confirms receipt. In TCP, the ACK flag and acknowledgment number help track received bytes and participate in connection setup and reliable delivery."
  },
  {
    "abbreviation": "ACL",
    "fullName": "Access Control List",
    "explanation": "An ordered allow/block rule list. The first matching rule wins; traffic matching none reaches an unstated final deny. The list must be attached to the intended interface or feature to have an effect there.",
    "plural": true
  },
  {
    "abbreviation": "AD",
    "fullName": "Administrative Distance",
    "explanation": "A router's preference between different sources offering a route to the same address block. Lower is preferred. This does not override choosing a more specific matching installed route for a packet.",
    "caseSensitive": true
  },
  {
    "abbreviation": "AES",
    "fullName": "Advanced Encryption Standard",
    "explanation": "An encryption algorithm used to make data unreadable without the appropriate key. It is used inside protection systems such as wireless security and IPsec; selecting a cipher alone does not complete those systems."
  },
  {
    "abbreviation": "AH",
    "fullName": "Authentication Header",
    "explanation": "An IPsec protection that checks packet integrity and sender origin but does not hide the packet content with encryption. ESP is normally used when encrypted confidentiality is required too."
  },
  {
    "abbreviation": "AI",
    "fullName": "Artificial Intelligence",
    "explanation": "Software performing tasks such as spotting patterns, predicting events or writing new content. In network operations it can help investigate, but its recommendations still need checking against evidence."
  },
  {
    "abbreviation": "AKM",
    "fullName": "Authentication and Key Management",
    "explanation": "The wireless security choices controlling how a client proves identity and how keys are established. Shared-key, Enterprise login and SAE are examples with different authentication workflows."
  },
  {
    "abbreviation": "AP",
    "fullName": "Access Point",
    "explanation": "A device providing a Wi-Fi radio connection to a network. Some APs are configured individually; others join a controller that coordinates their settings and policy.",
    "plural": true
  },
  {
    "abbreviation": "API",
    "fullName": "Application Programming Interface",
    "explanation": "A defined way for software to ask another system for information or actions. For example, a management program can request a device list or a configuration change.",
    "plural": true
  },
  {
    "abbreviation": "ARP",
    "fullName": "Address Resolution Protocol",
    "explanation": "The local IPv4 lookup asking which MAC address corresponds to a next-hop IP address. The answer helps build the Ethernet delivery frame. IPv6 uses Neighbor Discovery instead."
  },
  {
    "abbreviation": "AS",
    "fullName": "Autonomous System",
    "explanation": "A collection of IP networks operated under a common routing administration and policy. It has an identifying number when participating in routing between autonomous systems.",
    "caseSensitive": true
  },
  {
    "abbreviation": "ASIC",
    "fullName": "Application-Specific Integrated Circuit",
    "explanation": "A chip designed for a particular job rather than general computing. A switch can use one to forward large amounts of traffic without making its main processor handle every packet.",
    "plural": true
  },
  {
    "abbreviation": "ASN",
    "fullName": "Autonomous System Number",
    "explanation": "The number identifying an autonomous system, a group of networks with common routing administration. BGP uses these numbers to describe which routing organizations a path crosses.",
    "plural": true
  },
  {
    "abbreviation": "BDR",
    "fullName": "Backup Designated Router",
    "explanation": "The OSPF backup coordinator elected on a segment that uses DR/BDR roles. It is ready to become the designated router if that coordinator fails."
  },
  {
    "abbreviation": "BGP",
    "fullName": "Border Gateway Protocol",
    "explanation": "A routing protocol used between network organizations and in some large networks. It exchanges destination information and path attributes. Detailed BGP configuration is outside this path's main single-area OSPF focus."
  },
  {
    "abbreviation": "BPDU",
    "fullName": "Bridge Protocol Data Unit",
    "explanation": "A switch control message used to build and maintain a loop-free Spanning Tree. Receiving or losing these messages can trigger different guard protections.",
    "plural": true
  },
  {
    "abbreviation": "BSS",
    "fullName": "Basic Service Set",
    "explanation": "One basic wireless service group. In an ordinary infrastructure Wi-Fi network, it consists of an access-point radio and the clients associated with it.",
    "plural": true
  },
  {
    "abbreviation": "BSSID",
    "fullName": "Basic Service Set Identifier",
    "explanation": "The identifier distinguishing a particular wireless service set, commonly using an AP radio's MAC-based identity. It differs from the network name a user selects, called the SSID.",
    "plural": true
  },
  {
    "abbreviation": "CAPWAP",
    "fullName": "Control and Provisioning of Wireless Access Points",
    "explanation": "The communication used between supported lightweight access points and a wireless controller. Control commonly uses UDP 5246; tunneled data commonly uses UDP 5247."
  },
  {
    "abbreviation": "CCMP",
    "fullName": "Counter Mode with Cipher Block Chaining Message Authentication Code Protocol",
    "explanation": "AES-based wireless protection that hides data and checks it for unauthorized changes. It is commonly associated with WPA2 and is separate from deciding how users authenticate."
  },
  {
    "abbreviation": "CCNA",
    "fullName": "Cisco Certified Network Associate",
    "explanation": "Cisco's associate-level networking certification. This website teaches the CCNA 200-301 v1.1 objectives and uses original study questions rather than actual exam questions."
  },
  {
    "abbreviation": "CDP",
    "fullName": "Cisco Discovery Protocol",
    "explanation": "Cisco's discovery messages for directly connected neighbors. They can describe the device and cable ports, but do not prove a whole route or application works."
  },
  {
    "abbreviation": "CEF",
    "fullName": "Cisco Express Forwarding",
    "explanation": "Cisco's efficient packet-forwarding system. It uses a forwarding table and next-link delivery information prepared from routing and neighbor information."
  },
  {
    "abbreviation": "CIDR",
    "fullName": "Classless Inter-Domain Routing",
    "explanation": "Using an explicit /prefix length to describe an address block instead of assuming old address-class boundaries. This permits different subnet sizes and combining suitable routes into larger blocks."
  },
  {
    "abbreviation": "CLI",
    "fullName": "Command-Line Interface",
    "explanation": "A text-based control panel where you type commands. Cisco devices accept different commands in basic, privileged and configuration modes; the prompt helps identify the current mode."
  },
  {
    "abbreviation": "CNAME",
    "fullName": "Canonical Name Record",
    "explanation": "A DNS entry making one name an alias of another name. It points to a name rather than directly storing an IPv4 or IPv6 address."
  },
  {
    "abbreviation": "CoS",
    "fullName": "Class of Service",
    "explanation": "A traffic-priority classification. On an 802.1Q trunk, a three-bit field can label eight priority values. This is different from the six-bit DSCP field inside an IP packet."
  },
  {
    "abbreviation": "CPU",
    "fullName": "Central Processing Unit",
    "explanation": "The main processor executing system software. Heavy processor use can slow administration or routing decisions even when dedicated forwarding hardware continues carrying traffic.",
    "plural": true
  },
  {
    "abbreviation": "CRC",
    "fullName": "Cyclic Redundancy Check",
    "explanation": "A calculation for detecting corrupted information. An Ethernet CRC error means a received frame failed its check; it suggests investigating the physical link and compatible settings, not automatic repair of the data."
  },
  {
    "abbreviation": "CRUD",
    "fullName": "Create, Read, Update, and Delete",
    "explanation": "Four common data actions: create something, read it, update it or delete it. APIs express these through supported requests; HTTP GET normally performs the read role."
  },
  {
    "abbreviation": "CSMA/CA",
    "fullName": "Carrier Sense Multiple Access with Collision Avoidance",
    "explanation": "Wi-Fi's approach to sharing a channel: devices listen, wait and use coordination to reduce simultaneous transmissions. They still compete for the same airtime, so more devices can reduce each one's available capacity."
  },
  {
    "abbreviation": "CSMA/CD",
    "fullName": "Carrier Sense Multiple Access with Collision Detection",
    "explanation": "The older half-duplex Ethernet method that detects competing transmissions on a shared medium. Modern switched full-duplex links let both ends send simultaneously and do not use it to take turns."
  },
  {
    "abbreviation": "DAD",
    "fullName": "Duplicate Address Detection",
    "explanation": "An IPv6 check asking whether a proposed address is already in use on the local link. It helps detect a conflict before the device uses that address normally."
  },
  {
    "abbreviation": "DAI",
    "fullName": "Dynamic ARP Inspection",
    "explanation": "A switch check on ARP messages, which claim which MAC belongs to an IPv4 address. It compares claims with trusted bindings or configured policy to help stop false local-address claims."
  },
  {
    "abbreviation": "DHCP",
    "fullName": "Dynamic Host Configuration Protocol",
    "explanation": "A service assigning device settings, such as an IPv4 address, subnet mask, gateway and DNS server, for a lease period. A relay can forward requests when the server is on another network."
  },
  {
    "abbreviation": "DHCPv6",
    "fullName": "Dynamic Host Configuration Protocol for IPv6",
    "explanation": "A service providing IPv6 addresses or other host settings. Default-router discovery normally comes from Router Advertisements instead, so an address assignment alone does not prove a route out exists."
  },
  {
    "abbreviation": "DNS",
    "fullName": "Domain Name System",
    "explanation": "The network's name directory. It returns records such as the IPv4 or IPv6 address for a website name. It commonly uses UDP and TCP 53; resolving a name does not itself establish the application connection."
  },
  {
    "abbreviation": "DORA",
    "fullName": "Discover, Offer, Request, Acknowledge",
    "explanation": "Four common initial DHCPv4 stages: the client discovers service, the server offers settings, the client requests a lease and the server acknowledges it. An offer alone is not the completed assignment."
  },
  {
    "abbreviation": "DR",
    "fullName": "Designated Router",
    "explanation": "The OSPF coordinator elected for certain shared network segments. It reduces how many full database relationships are needed. An established DR is not automatically replaced by a later higher-priority candidate.",
    "plural": true
  },
  {
    "abbreviation": "DROTHER",
    "fullName": "Designated Router Other",
    "explanation": "An OSPF router on a broadcast segment that is neither its designated nor backup designated router. Two such ordinary routers can normally remain 2-Way with each other while being Full with the coordinators."
  },
  {
    "abbreviation": "DSCP",
    "fullName": "Differentiated Services Code Point",
    "explanation": "A six-bit label in an IP packet used to identify its intended traffic treatment. The label does not create bandwidth; devices must implement the policy that interprets it."
  },
  {
    "abbreviation": "DTLS",
    "fullName": "Datagram Transport Layer Security",
    "explanation": "Security similar to TLS adapted to message/datagram transport. Supported wireless-controller systems use it to protect CAPWAP control communication."
  },
  {
    "abbreviation": "DTP",
    "fullName": "Dynamic Trunking Protocol",
    "explanation": "Cisco's automatic trunk-negotiation protocol on supported switch ports. Explicitly configuring the intended access/trunk role can avoid depending on that negotiation."
  },
  {
    "abbreviation": "EAP",
    "fullName": "Extensible Authentication Protocol",
    "explanation": "A framework carrying different ways to prove identity. Enterprise Wi-Fi commonly uses it between the client, network access device and authentication service rather than one shared Personal-mode passphrase."
  },
  {
    "abbreviation": "ECMP",
    "fullName": "Equal-Cost Multipath",
    "explanation": "Keeping several eligible next steps with the same route cost. A device can distribute conversations over them; one conversation need not use every path simultaneously."
  },
  {
    "abbreviation": "EF",
    "fullName": "Expedited Forwarding",
    "explanation": "A traffic treatment intended for suitable delay-sensitive traffic such as voice. Its conventional DSCP label is 46, but actual queue behavior still depends on the device policy."
  },
  {
    "abbreviation": "EIGRP",
    "fullName": "Enhanced Interior Gateway Routing Protocol",
    "explanation": "A routing protocol used within a routing organization. It has its own path-calculation method and score, so its metric is not directly the same unit as OSPF cost."
  },
  {
    "abbreviation": "ESP",
    "fullName": "Encapsulating Security Payload",
    "explanation": "An IPsec protection carrying selected traffic with services such as encryption and integrity checking, according to the negotiated settings. The chosen protection suite determines which services are supplied."
  },
  {
    "abbreviation": "EUI-64",
    "fullName": "Extended Unique Identifier, 64-bit",
    "explanation": "A 64-bit identifier format. Modified EUI-64 can derive an IPv6 interface identifier from a 48-bit MAC by inserting FFFE and flipping one specified bit. Many devices use other identifier methods.",
    "aliases": [
      "EUI 64",
      "EUI64"
    ]
  },
  {
    "abbreviation": "FHRP",
    "fullName": "First-Hop Redundancy Protocol",
    "explanation": "Protocols providing a shared gateway identity that another physical router can take over. Clients keep one configured gateway while the forwarding device changes after a detected failure.",
    "plural": true
  },
  {
    "abbreviation": "FIB",
    "fullName": "Forwarding Information Base",
    "explanation": "A table optimized for forwarding packets, built from selected routing information. It helps the device look up which direction to use for a destination efficiently."
  },
  {
    "abbreviation": "FIN",
    "fullName": "Finish",
    "explanation": "A TCP flag used to close a connection direction in an orderly way. Each sending direction can finish independently; a reset is a different, abrupt action."
  },
  {
    "abbreviation": "FIPS",
    "fullName": "Federal Information Processing Standards",
    "explanation": "U.S. federal standards, including standards affecting cryptographic products. A device's FIPS mode can limit which algorithms or commands are permitted."
  },
  {
    "abbreviation": "FTP",
    "fullName": "File Transfer Protocol",
    "explanation": "A file-transfer protocol with separate command and data connections. Commands commonly use TCP 21; ordinary FTP does not hide credentials or file contents with encryption."
  },
  {
    "abbreviation": "Gbps",
    "fullName": "Gigabits per Second",
    "explanation": "One billion bits per second, a data rate. Eight bits make one byte, so a gigabit per second is not a gigabyte per second."
  },
  {
    "abbreviation": "GHz",
    "fullName": "Gigahertz",
    "explanation": "One billion cycles per second, a frequency measurement. A Wi-Fi band labeled in GHz describes radio frequency rather than download speed."
  },
  {
    "abbreviation": "GRE",
    "fullName": "Generic Routing Encapsulation",
    "explanation": "A tunneling method wrapping one network packet inside another. The wrapper can carry traffic over another network, but GRE by itself does not encrypt the content."
  },
  {
    "abbreviation": "GUI",
    "fullName": "Graphical User Interface",
    "explanation": "A control panel using screens, forms and buttons instead of only typed commands. A controller GUI exposes configuration objects whose names and menus depend on the product.",
    "plural": true
  },
  {
    "abbreviation": "HSRP",
    "fullName": "Hot Standby Router Protocol",
    "explanation": "Cisco's shared-gateway protocol using active and standby routers. Computers use the virtual gateway address while a physical router supplies the active forwarding role."
  },
  {
    "abbreviation": "HTTP",
    "fullName": "Hypertext Transfer Protocol",
    "explanation": "The web-style request/response protocol also used by many APIs. Plain HTTP does not encrypt the session; HTTPS adds supported security protection."
  },
  {
    "abbreviation": "HTTPS",
    "fullName": "Hypertext Transfer Protocol Secure",
    "explanation": "HTTP protected by TLS, with validation of the server's identity. It commonly uses TCP 443; HTTP/3 uses QUIC over UDP, commonly UDP 443. Encryption and user permissions are separate checks."
  },
  {
    "abbreviation": "ICMP",
    "fullName": "Internet Control Message Protocol",
    "explanation": "IP control and error messages, including the echo request/reply used by IPv4 ping. It is separate from TCP and UDP, so a rule allowing those transports does not automatically allow it."
  },
  {
    "abbreviation": "ICMPv6",
    "fullName": "Internet Control Message Protocol for IPv6",
    "explanation": "IPv6 control and error messages. It supports ping and essential local-neighbor/router discovery, so indiscriminately blocking it can break normal IPv6 operation."
  },
  {
    "abbreviation": "ID",
    "fullName": "Identifier",
    "explanation": "A value used to distinguish one thing from another. A VLAN ID labels a logical group; an OSPF router ID identifies a router. The surrounding context determines which object is meant.",
    "plural": true,
    "caseSensitive": true
  },
  {
    "abbreviation": "IEEE",
    "fullName": "Institute of Electrical and Electronics Engineers",
    "explanation": "The standards organization responsible for important networking specifications such as Ethernet, Wi-Fi and VLAN tagging. Its numbered standards describe particular functions, not product model numbers."
  },
  {
    "abbreviation": "IGMP",
    "fullName": "Internet Group Management Protocol",
    "explanation": "IPv4 messages telling local routers which multicast groups hosts want to receive. A switch can observe those messages to avoid sending group traffic to unnecessary ports."
  },
  {
    "abbreviation": "IGP",
    "fullName": "Interior Gateway Protocol",
    "explanation": "A routing protocol used within one routing administration rather than between independent organizations. OSPF and EIGRP are examples.",
    "plural": true
  },
  {
    "abbreviation": "IKE",
    "fullName": "Internet Key Exchange",
    "explanation": "The negotiation used by IPsec peers to agree on identity, keys and protection settings. Successful negotiation is not proof that the intended user packets are entering the VPN."
  },
  {
    "abbreviation": "IKEv2",
    "fullName": "Internet Key Exchange Version 2",
    "explanation": "A version of the IPsec key-and-identity negotiation protocol. After it succeeds, routes, traffic selection and packet counters still need checking to prove the intended data is protected."
  },
  {
    "abbreviation": "IOS",
    "fullName": "Internetwork Operating System",
    "explanation": "Cisco's operating-system name used across several generations of network software. The exact command set depends on the device model and installed release."
  },
  {
    "abbreviation": "IOS XE",
    "fullName": "Cisco IOS XE — Internetwork Operating System",
    "explanation": "Cisco's modular operating system on many switches, routers and wireless controllers. XE is a product designation; commands and features still depend on hardware, software release and licensing."
  },
  {
    "abbreviation": "IoT",
    "fullName": "Internet of Things",
    "explanation": "Network-connected equipment such as cameras, sensors and industrial devices. These endpoints can need different access limits and maintenance from ordinary user computers."
  },
  {
    "abbreviation": "IP",
    "fullName": "Internet Protocol",
    "explanation": "Addressing and packet-delivery rules used across networks. IPv4 and IPv6 are separate versions with different address sizes and local-neighbor mechanisms."
  },
  {
    "abbreviation": "IPS",
    "fullName": "Intrusion Prevention System",
    "explanation": "A security system that analyzes traffic and can stop matching attacks when placed in the traffic path. Detecting an event without an enforcement path is not the same as blocking it."
  },
  {
    "abbreviation": "IPsec",
    "fullName": "Internet Protocol Security",
    "explanation": "A family of protections for selected IP traffic, often used by VPNs. Peers negotiate security settings; routes and traffic-selection rules decide which packets receive that protection."
  },
  {
    "abbreviation": "IPv4",
    "fullName": "Internet Protocol Version 4",
    "explanation": "The IP version using 32-bit addresses, normally written as four decimal numbers. A mask or /prefix separates the network group from the address positions within it."
  },
  {
    "abbreviation": "IPv6",
    "fullName": "Internet Protocol Version 6",
    "explanation": "The IP version using 128-bit addresses written with hexadecimal digits and colons. It uses local Neighbor Discovery and multicast groups rather than IPv4's ARP/broadcast behavior."
  },
  {
    "abbreviation": "IS-IS",
    "fullName": "Intermediate System to Intermediate System",
    "explanation": "A routing protocol that builds a map of links to calculate paths inside an organization. It is used in some provider networks; detailed configuration is outside this path's OSPF-focused practice."
  },
  {
    "abbreviation": "ISL",
    "fullName": "Inter-Switch Link",
    "explanation": "An older Cisco way to carry VLAN information over trunks. The current Catalyst examples use standard 802.1Q tagging instead; do not assume legacy syntax applies to new switches."
  },
  {
    "abbreviation": "JSON",
    "fullName": "JavaScript Object Notation",
    "explanation": "A text format for structured data. Braces hold named fields; square brackets hold lists. Quoted text, numbers, true/false and null are distinct types. Comments and trailing commas are not allowed."
  },
  {
    "abbreviation": "L2",
    "fullName": "Layer 2 — Data Link Layer",
    "explanation": "The local-delivery layer, including Ethernet frames, MAC addresses and VLAN switching. Delivering across different IP networks requires the separate routing function at Layer 3."
  },
  {
    "abbreviation": "L3",
    "fullName": "Layer 3 — Network Layer",
    "explanation": "The addressing-and-routing layer used to move packets between IP networks. A routing-capable switch can perform this job as well as local Layer 2 switching."
  },
  {
    "abbreviation": "LACP",
    "fullName": "Link Aggregation Control Protocol",
    "explanation": "A standard protocol negotiating a bundle of compatible links. Active starts the conversation and passive responds; two passive ends both wait. Other member settings must also agree."
  },
  {
    "abbreviation": "LAG",
    "fullName": "Link Aggregation Group",
    "explanation": "Several compatible physical connections acting as one logical bundle. Total capacity and resilience can improve, but one conversation normally uses one member connection.",
    "plural": true
  },
  {
    "abbreviation": "LAN",
    "fullName": "Local Area Network",
    "explanation": "A network in a local area such as an office. VLANs can divide its switches into separate logical local groups, each with its own broadcast scope.",
    "plural": true
  },
  {
    "abbreviation": "LLDP",
    "fullName": "Link Layer Discovery Protocol",
    "explanation": "A multi-vendor standard for directly connected devices to advertise identities and port information. It helps document a cable connection without proving a whole routed path works."
  },
  {
    "abbreviation": "LLQ",
    "fullName": "Low Latency Queuing",
    "explanation": "A queueing method giving bounded priority to suitable time-sensitive traffic, often voice. Limiting that priority class helps keep other traffic from being starved."
  },
  {
    "abbreviation": "LSA",
    "fullName": "Link-State Advertisement",
    "explanation": "An OSPF item describing part of the network's link information. Routers collect these items to build the map used for path calculations.",
    "plural": true
  },
  {
    "abbreviation": "LSDB",
    "fullName": "Link-State Database",
    "explanation": "The collected link-state map used by a routing protocol such as OSPF. It is information for calculating paths, not just the final list of selected routes.",
    "plural": true
  },
  {
    "abbreviation": "MAC",
    "fullName": "Media Access Control",
    "explanation": "Media Access Control is part of local-link networking. An Ethernet MAC address identifies a local sender or receiver; switches learn senders and use receiver addresses for delivery within a VLAN.",
    "plural": true
  },
  {
    "abbreviation": "Mbps",
    "fullName": "Megabits per Second",
    "explanation": "One million bits per second, a data rate. It measures how fast information moves rather than how much a file contains; eight bits make one byte."
  },
  {
    "abbreviation": "MD5",
    "fullName": "Message-Digest Algorithm 5",
    "explanation": "An older hashing algorithm with known weaknesses. Recognize it in legacy material, but use supported stronger alternatives where current platform policy requires them."
  },
  {
    "abbreviation": "MFA",
    "fullName": "Multifactor Authentication",
    "explanation": "Identity checking using different kinds of evidence, such as a password you know and a security key you possess. Two passwords or a password plus PIN remain the same knowledge category."
  },
  {
    "abbreviation": "MIB",
    "fullName": "Management Information Base",
    "explanation": "The organized set of values a management agent can expose, such as interface counters. Each value has an identifier so a monitoring system can request the right one.",
    "plural": true
  },
  {
    "abbreviation": "ML",
    "fullName": "Machine Learning",
    "explanation": "Methods learning patterns from data to make classifications or predictions. A baseline that omits normal busy periods can produce false alarms; results need context and verification."
  },
  {
    "abbreviation": "MQC",
    "fullName": "Modular QoS Command-Line Interface",
    "explanation": "Cisco's framework for grouping traffic, defining its treatment and attaching the policy to a supported interface. A policy definition alone does not make traffic pass through it."
  },
  {
    "abbreviation": "MTU",
    "fullName": "Maximum Transmission Unit",
    "explanation": "The maximum IP packet size a link can carry without fragmentation. Incompatible sizes can break application traffic or routing database exchanges even while small messages get through."
  },
  {
    "abbreviation": "MX",
    "fullName": "Mail Exchange",
    "explanation": "A DNS entry identifying the mail servers for a domain and their preference values. It is different from directly storing a host's IPv4 or IPv6 address."
  },
  {
    "abbreviation": "NA",
    "fullName": "Neighbor Advertisement",
    "explanation": "An IPv6 message providing neighbor address information, often answering a Neighbor Solicitation. It helps identify the local delivery address for an IPv6 neighbor.",
    "caseSensitive": true
  },
  {
    "abbreviation": "NAT",
    "fullName": "Network Address Translation",
    "explanation": "Rewriting IP addresses as traffic crosses a boundary. Fixed mappings, address pools and port sharing work differently; translation by itself is neither encryption nor a complete access-control policy."
  },
  {
    "abbreviation": "NDP",
    "fullName": "Neighbor Discovery Protocol",
    "explanation": "IPv6's local discovery functions using ICMPv6 messages. They help find neighbors, learn router information and perform other checks on a local link."
  },
  {
    "abbreviation": "NETCONF",
    "fullName": "Network Configuration Protocol",
    "explanation": "A protocol for software to read or change modeled network settings. It commonly uses SSH on TCP 830 and needs appropriate identity, permissions and management reachability."
  },
  {
    "abbreviation": "NGFW",
    "fullName": "Next-Generation Firewall",
    "explanation": "A firewall adding checks such as application identity and threat inspection to basic packet filtering. Its actual policy and placement determine what traffic is allowed or stopped.",
    "plural": true
  },
  {
    "abbreviation": "NMS",
    "fullName": "Network Management System",
    "explanation": "A platform used to monitor or administer network devices, for example by asking for SNMP counters and collecting events. It is the management system, not a forwarding route.",
    "plural": true
  },
  {
    "abbreviation": "NS",
    "fullName": "Neighbor Solicitation",
    "explanation": "An IPv6 local-neighbor request, used for jobs such as finding a neighbor's delivery information and checking whether an address is already in use.",
    "caseSensitive": true
  },
  {
    "abbreviation": "NTP",
    "fullName": "Network Time Protocol",
    "explanation": "A protocol for synchronizing clocks, commonly over UDP 123. Matching timestamps help relate events across devices, but all clients can still follow an inaccurate reference source."
  },
  {
    "abbreviation": "OID",
    "fullName": "Object Identifier",
    "explanation": "The structured name of one managed value, such as an interface counter exposed through SNMP. It tells the agent which value is requested; it is not a packet's destination address.",
    "plural": true
  },
  {
    "abbreviation": "OS",
    "fullName": "Operating System",
    "explanation": "The software managing hardware and supporting applications. A network operating system also supplies device-specific configuration and monitoring functions.",
    "caseSensitive": true,
    "aliases": [
      "OSes"
    ]
  },
  {
    "abbreviation": "OSI",
    "fullName": "Open Systems Interconnection",
    "explanation": "A seven-layer reference model for networking jobs, from physical signals up to applications. The layers are physical, data link, network, transport, session, presentation and application."
  },
  {
    "abbreviation": "OSPF",
    "fullName": "Open Shortest Path First",
    "explanation": "A routing protocol in which routers share link information and calculate paths using costs. This path's configuration work focuses on IPv4 OSPFv2 within one area."
  },
  {
    "abbreviation": "OSPFv2",
    "fullName": "Open Shortest Path First Version 2",
    "explanation": "The OSPF version used here for IPv4. Neighbors exchange a link map, calculate costs and, on applicable shared segments, elect designated and backup coordinator routers."
  },
  {
    "abbreviation": "OSPFv3",
    "fullName": "Open Shortest Path First Version 3",
    "explanation": "An OSPF version originally designed for IPv6. Some supported implementations also carry other address families; exact configuration depends on the platform."
  },
  {
    "abbreviation": "PAgP",
    "fullName": "Port Aggregation Protocol",
    "explanation": "Cisco's proprietary protocol for negotiating EtherChannel bundles. LACP is the multi-vendor standard emphasized in this Learning Path, and uses different negotiation modes."
  },
  {
    "abbreviation": "PAT",
    "fullName": "Port Address Translation",
    "explanation": "Translation allowing many inside conversations to share an outside IPv4 address by tracking transport-port information. Cisco's overload keyword commonly enables this behavior."
  },
  {
    "abbreviation": "PC",
    "fullName": "Personal Computer",
    "explanation": "A general-purpose user computer. Its own address, subnet boundary, gateway, DNS and firewall settings can prevent access even when network equipment is working."
  },
  {
    "abbreviation": "PDU",
    "fullName": "Protocol Data Unit",
    "explanation": "The name for a piece of information at a particular protocol layer. An Ethernet frame and an IP packet are examples at different layers, rather than interchangeable names for the same wrapper.",
    "plural": true
  },
  {
    "abbreviation": "PKI",
    "fullName": "Public Key Infrastructure",
    "explanation": "The system of certificates, keys, trusted issuers and procedures used to establish digital identity. Certificates must be checked against the expected identity, not merely accepted because one was presented."
  },
  {
    "abbreviation": "PMF",
    "fullName": "Protected Management Frames",
    "explanation": "Protection for selected important Wi-Fi management messages, helping prevent certain forged management actions. WPA3 requires it; it is separate from ordinary user-data encryption."
  },
  {
    "abbreviation": "PoE",
    "fullName": "Power over Ethernet",
    "explanation": "Power supplied to compatible equipment over Ethernet cabling. Both the individual port capability and the switch's total available watts must meet demand."
  },
  {
    "abbreviation": "PPP",
    "fullName": "Point-to-Point Protocol",
    "explanation": "A protocol for a connection between two endpoints, providing link setup and carrying network-layer traffic. It is a link-level function, not an IP routing protocol."
  },
  {
    "abbreviation": "PPPoE",
    "fullName": "Point-to-Point Protocol over Ethernet",
    "explanation": "Carrying PPP sessions inside Ethernet, used by some broadband access services. It adds a session mechanism over the Ethernet connection."
  },
  {
    "abbreviation": "PSK",
    "fullName": "Pre-Shared Key",
    "explanation": "A secret shared in advance by the participants. WPA2-Personal uses this model; the ordinary passphrase input and a raw hexadecimal key are different formats.",
    "plural": true
  },
  {
    "abbreviation": "PTR",
    "fullName": "Pointer Record",
    "explanation": "A DNS entry for reverse lookup, from an IP address toward a name. A successful reverse answer is separate from forward A/AAAA lookup and application reachability."
  },
  {
    "abbreviation": "PVST+",
    "fullName": "Per-VLAN Spanning Tree Plus",
    "explanation": "Cisco Spanning Tree running a separate loop-prevention instance for each VLAN. Different VLANs can therefore have different chosen root switches and active paths."
  },
  {
    "abbreviation": "QoS",
    "fullName": "Quality of Service",
    "explanation": "Rules for treating traffic when it competes for limited capacity. They can identify, label, prioritize, drop or delay packets, but cannot create extra physical bandwidth."
  },
  {
    "abbreviation": "RA",
    "fullName": "Router Advertisement",
    "explanation": "An IPv6 router message announcing information such as local prefixes and whether the router offers a default exit. A host normally learns its default router from suitable RAs rather than DHCPv6.",
    "plural": true,
    "caseSensitive": true
  },
  {
    "abbreviation": "RADIUS",
    "fullName": "Remote Authentication Dial-In User Service",
    "explanation": "An identity-service protocol commonly used for network admission. Typical ports are UDP 1812 for authentication and 1813 for activity accounting."
  },
  {
    "abbreviation": "RAM",
    "fullName": "Random Access Memory",
    "explanation": "A device's working memory while it runs. Active settings and saved startup settings are separate; saving validated configuration is needed when it should survive reboot."
  },
  {
    "abbreviation": "REST",
    "fullName": "Representational State Transfer",
    "explanation": "An architectural style often used for APIs. Requests identify resources and use actions such as HTTP GET to read them, with defined representations and response codes."
  },
  {
    "abbreviation": "RESTCONF",
    "fullName": "RESTCONF — REST-Based Network Configuration Protocol",
    "explanation": "A web-style protocol for reading and changing network data described by YANG models. IOS XE commonly provides it through HTTPS; it is different from a generic arbitrary JSON endpoint."
  },
  {
    "abbreviation": "RF",
    "fullName": "Radio Frequency",
    "explanation": "Radio signals used for wireless communication. Walls, noise, competing transmitters and antenna placement affect whether devices can hear one another reliably."
  },
  {
    "abbreviation": "RFC",
    "fullName": "Request for Comments",
    "explanation": "A publication in the Internet technical document series. For example, RFC 1918 defines the three familiar private IPv4 address blocks.",
    "plural": true
  },
  {
    "abbreviation": "RIP",
    "fullName": "Routing Information Protocol",
    "explanation": "A routing protocol that scores paths by hop count. Its default administrative distance can appear in route-source comparisons; detailed configuration is outside this path's OSPF focus."
  },
  {
    "abbreviation": "RPVST+",
    "fullName": "Rapid Per-VLAN Spanning Tree Plus",
    "explanation": "Cisco's rapid loop-prevention process running separately for each VLAN. Rapid refers to how quickly it can adapt; a redundant link can still intentionally be kept from forwarding.",
    "aliases": [
      "Rapid PVST+",
      "Rapid-PVST+"
    ]
  },
  {
    "abbreviation": "RRM",
    "fullName": "Radio Resource Management",
    "explanation": "Wireless functions coordinating settings such as channel choice and transmit power. Their operation supports a radio design rather than guaranteeing every client has unlimited capacity."
  },
  {
    "abbreviation": "RSA",
    "fullName": "Rivest–Shamir–Adleman",
    "explanation": "A public-key cryptographic algorithm. A device can use an RSA key pair for functions such as SSH server identity; the public and private keys have different roles."
  },
  {
    "abbreviation": "RST",
    "fullName": "Reset",
    "explanation": "A TCP flag abruptly resetting or rejecting a connection. It differs from the orderly finish signaled with FIN."
  },
  {
    "abbreviation": "RSTP",
    "fullName": "Rapid Spanning Tree Protocol",
    "explanation": "A faster form of Spanning Tree that prevents local switching loops. Its main states are discarding, learning and forwarding, describing whether frames are held or allowed through."
  },
  {
    "abbreviation": "RTT",
    "fullName": "Round-Trip Time",
    "explanation": "The time for a message to reach a destination and for its reply to come back. A ping result therefore measures the round trip, not just one direction."
  },
  {
    "abbreviation": "RX",
    "fullName": "Receive",
    "explanation": "Receive: traffic arriving at an interface or the receive side of a transceiver. TX is the corresponding send/transmit direction."
  },
  {
    "abbreviation": "SA",
    "fullName": "Security Association",
    "explanation": "A set of agreed security settings for protected communication. IKE negotiation and IPsec traffic protection maintain distinct associations, so negotiated status and actual protected counters are different checks.",
    "plural": true,
    "caseSensitive": true
  },
  {
    "abbreviation": "SAE",
    "fullName": "Simultaneous Authentication of Equals",
    "explanation": "The password-based key exchange used by WPA3-Personal. It is designed to improve resistance to guessing passwords offline from a captured exchange, while strong secrets and correct implementations remain important."
  },
  {
    "abbreviation": "SCP",
    "fullName": "Secure Copy Protocol",
    "explanation": "A file-transfer protocol using SSH protection. Check the server's identity and permissions; SCP and SFTP are different protocols despite both using SSH."
  },
  {
    "abbreviation": "SD-WAN",
    "fullName": "Software-Defined Wide Area Network",
    "explanation": "Software-coordinated policy and management for connections between distant sites over supported transports. The real underlying links still provide the capacity and reachability."
  },
  {
    "abbreviation": "SDN",
    "fullName": "Software-Defined Networking",
    "explanation": "Separating or abstracting network decisions and exposing software interfaces for control. A logically centralized design can use multiple controller servers, and user packets need not all cross one controller."
  },
  {
    "abbreviation": "SFP",
    "fullName": "Small Form-Factor Pluggable",
    "explanation": "A modular transceiver form used by network equipment. The actual supported signal standard, cable type, wavelength and distance matter; two plugs fitting does not prove a compatible link.",
    "plural": true
  },
  {
    "abbreviation": "SFTP",
    "fullName": "SSH File Transfer Protocol",
    "explanation": "A file-transfer protocol carried through SSH. It is distinct from SCP and from ordinary FTP with or without added TLS protection."
  },
  {
    "abbreviation": "SLAAC",
    "fullName": "Stateless Address Autoconfiguration",
    "explanation": "A way for an IPv6 host to form its own address from router-advertised prefix information. It does not require a DHCPv6 server to assign that address; other host settings still follow the design."
  },
  {
    "abbreviation": "SNMP",
    "fullName": "Simple Network Management Protocol",
    "explanation": "A monitoring protocol for asking devices for managed values and, when permitted, changing some of them. Polling commonly uses UDP 161; event notifications commonly use UDP 162."
  },
  {
    "abbreviation": "SNMPv1",
    "fullName": "Simple Network Management Protocol Version 1",
    "explanation": "An early monitoring-protocol version using a shared community value for access. It lacks the modern identity and encrypted-content protections available in properly configured SNMPv3."
  },
  {
    "abbreviation": "SNMPv2c",
    "fullName": "Simple Network Management Protocol Version 2c",
    "explanation": "A community-based SNMP version supporting functions such as retrieving batches of values. Its community string does not encrypt the exchange or provide SNMPv3-style privacy."
  },
  {
    "abbreviation": "SNMPv3",
    "fullName": "Simple Network Management Protocol Version 3",
    "explanation": "An SNMP version with selectable authentication and privacy protection. authPriv provides both authenticated messages and encrypted content; choosing v3 alone does not specify that full protection level."
  },
  {
    "abbreviation": "SNR",
    "fullName": "Signal-to-Noise Ratio",
    "explanation": "How strong the desired signal is compared with background noise. A clearer signal relative to noise generally supports more reliable wireless communication, separately from security settings."
  },
  {
    "abbreviation": "SOHO",
    "fullName": "Small Office/Home Office",
    "explanation": "A small-office/home-office environment, often using one box for routing, switching, Wi-Fi and security. Those logical jobs still exist even when they share hardware."
  },
  {
    "abbreviation": "SSH",
    "fullName": "Secure Shell",
    "explanation": "An encrypted remote-access protocol, commonly TCP 22. A Cisco SSH service needs reachable management addressing, server keys, user authentication and the intended remote-login rules."
  },
  {
    "abbreviation": "SSID",
    "fullName": "Service Set Identifier",
    "explanation": "The wireless network name people select. Several access-point radios can advertise the same name without proving that their encryption, VLAN or authentication policies match.",
    "plural": true
  },
  {
    "abbreviation": "SSL",
    "fullName": "Secure Sockets Layer",
    "explanation": "An older predecessor to TLS. Obsolete SSL versions should not be treated as modern secure HTTPS; supported TLS versions provide current protection."
  },
  {
    "abbreviation": "STP",
    "fullName": "Spanning Tree Protocol",
    "explanation": "Switch loop prevention that keeps a safe set of links forwarding while redundant paths remain available. In cable descriptions the initials can also mean shielded twisted pair; this site usually means Spanning Tree."
  },
  {
    "abbreviation": "SVI",
    "fullName": "Switch Virtual Interface",
    "explanation": "A switch's logical IP interface for a VLAN. It can manage the switch or act as that VLAN's gateway when routing is supported and enabled; the VLAN also needs a suitable active forwarding connection.",
    "plural": true
  },
  {
    "abbreviation": "SYN",
    "fullName": "Synchronize",
    "explanation": "A TCP flag starting sequence-number synchronization during connection setup. The familiar opening exchange is SYN, SYN-ACK, ACK."
  },
  {
    "abbreviation": "TACACS+",
    "fullName": "Terminal Access Controller Access-Control System Plus",
    "explanation": "An identity/permission/accounting protocol often used to administer network devices and authorize commands. It normally uses TCP 49 and can separate those AAA functions.",
    "aliases": [
      "TACACS Plus"
    ]
  },
  {
    "abbreviation": "TCP",
    "fullName": "Transmission Control Protocol",
    "explanation": "A transport protocol that sets up a connection, numbers bytes, confirms receipt and resends missing data for reliable ordered delivery. Reliability by itself does not encrypt the content."
  },
  {
    "abbreviation": "TFTP",
    "fullName": "Trivial File Transfer Protocol",
    "explanation": "A simple file-transfer protocol with no built-in login authentication or encryption. Its initial request normally uses UDP 69, followed by the transfer's own UDP ports."
  },
  {
    "abbreviation": "TKIP",
    "fullName": "Temporal Key Integrity Protocol",
    "explanation": "An older wireless protection introduced with WPA as a transition from WEP. Recognize it in legacy material; use supported stronger modern wireless protection for current deployments."
  },
  {
    "abbreviation": "TLS",
    "fullName": "Transport Layer Security",
    "explanation": "Protection for an application conversation, including encryption and supported identity checking. It underpins modern HTTPS; clients still need to validate the intended server and their permissions."
  },
  {
    "abbreviation": "TTL",
    "fullName": "Time to Live",
    "explanation": "For IPv4, a counter reduced by routers to stop a packet circulating forever. In DNS, the same initials mean how long a record may be cached; those are different timers in different contexts."
  },
  {
    "abbreviation": "TX",
    "fullName": "Transmit",
    "explanation": "Transmit: traffic sent by an interface or the sending side of a transceiver. RX is the corresponding receive direction."
  },
  {
    "abbreviation": "UDP",
    "fullName": "User Datagram Protocol",
    "explanation": "A transport protocol sending datagrams without TCP's built-in connection, delivery confirmation or ordering guarantees. An application can add its own checks and retries when needed."
  },
  {
    "abbreviation": "URI",
    "fullName": "Uniform Resource Identifier",
    "explanation": "A string identifying a resource. A URL is a kind of URI that also indicates where or how to access it, such as a web address.",
    "plural": true
  },
  {
    "abbreviation": "URL",
    "fullName": "Uniform Resource Locator",
    "explanation": "An access address such as an HTTPS web link. In an API it commonly identifies the resource to read or change; the method and permissions determine the action.",
    "plural": true
  },
  {
    "abbreviation": "USM",
    "fullName": "User-Based Security Model",
    "explanation": "An SNMPv3 security model using users and keys to supply the selected authentication and privacy services. The configured protection level determines whether content is encrypted."
  },
  {
    "abbreviation": "UTP",
    "fullName": "Unshielded Twisted Pair",
    "explanation": "Copper cable made from twisted wire pairs without an overall shield. Its cable category and Ethernet standard determine suitable speeds and reach."
  },
  {
    "abbreviation": "VLAN",
    "fullName": "Virtual Local Area Network",
    "explanation": "A logical local Ethernet group kept separate from other groups. Devices in the same VLAN can switch locally; different VLAN subnets need routing and permission for the intended traffic.",
    "plural": true
  },
  {
    "abbreviation": "VLSM",
    "fullName": "Variable-Length Subnet Mask",
    "explanation": "Using differently sized IP subnets in one address plan. Fit larger requirements first, align each block correctly and avoid assigning any address range to two groups."
  },
  {
    "abbreviation": "VM",
    "fullName": "Virtual Machine",
    "explanation": "A software-created computer running its own guest operating system under a hypervisor. Containers normally share a host kernel instead, giving a different kind of isolation.",
    "plural": true
  },
  {
    "abbreviation": "VPN",
    "fullName": "Virtual Private Network",
    "explanation": "A logical connection between users or sites over another network. Whether it is encrypted depends on the technology; this path's IPsec VPN examples protect selected traffic between their VPN endpoints.",
    "plural": true
  },
  {
    "abbreviation": "VRF",
    "fullName": "Virtual Routing and Forwarding",
    "explanation": "A separate route list and forwarding context inside one shared device. Groups can reuse addresses when the design keeps their route decisions separate; communication between them needs deliberate configuration.",
    "plural": true
  },
  {
    "abbreviation": "VRRP",
    "fullName": "Virtual Router Redundancy Protocol",
    "explanation": "A standard shared-gateway protocol allowing a different physical router to take over the virtual identity. Clients keep their gateway setting while the active forwarding role changes."
  },
  {
    "abbreviation": "VTEP",
    "fullName": "VXLAN Tunnel Endpoint",
    "explanation": "The edge point that adds or removes VXLAN tunnel wrapping. The transport network still needs to carry the resulting packets between those endpoints.",
    "plural": true
  },
  {
    "abbreviation": "VTP",
    "fullName": "VLAN Trunking Protocol",
    "explanation": "A Cisco protocol sharing VLAN definitions, such as IDs and names, between participating switches over trunks. It does not create the trunk, assign host ports or route between VLANs. Version 3 uses a primary editing role for shared database changes."
  },
  {
    "abbreviation": "VTY",
    "fullName": "Virtual Teletype",
    "explanation": "A logical remote-terminal connection on an IOS-style device. Its settings choose login behavior and allowed transports such as SSH; it is not a physical cable socket."
  },
  {
    "abbreviation": "VXLAN",
    "fullName": "Virtual Extensible Local Area Network",
    "explanation": "Wrapping that carries logical Ethernet segments across a routed IP transport network. It is an overlay tunnel mechanism, different from an ordinary 802.1Q VLAN tag on a local trunk."
  },
  {
    "abbreviation": "WAN",
    "fullName": "Wide Area Network",
    "explanation": "Connections joining geographically separated sites using provider or Internet services. Its capacity, routing responsibility and encryption depend on the selected service and design.",
    "plural": true
  },
  {
    "abbreviation": "WEP",
    "fullName": "Wired Equivalent Privacy",
    "explanation": "An obsolete wireless security mechanism with serious weaknesses. It is useful to recognize historically but should not protect a current wireless deployment."
  },
  {
    "abbreviation": "WLC",
    "fullName": "Wireless LAN Controller",
    "explanation": "A controller coordinating compatible access points and wireless policy. Catalyst 9800 and older AireOS families use different configuration objects and menus.",
    "plural": true
  },
  {
    "abbreviation": "WMM",
    "fullName": "Wi-Fi Multimedia",
    "explanation": "Wi-Fi traffic treatment using categories such as voice, video, best effort and background. It helps devices prioritize access to shared airtime rather than creating extra radio capacity."
  },
  {
    "abbreviation": "WPA",
    "fullName": "Wi-Fi Protected Access",
    "explanation": "A wireless security family introduced after WEP. Original WPA commonly used the transitional TKIP protection; it should not be confused with newer WPA2/WPA3 mechanisms."
  },
  {
    "abbreviation": "WPA2",
    "fullName": "Wi-Fi Protected Access 2",
    "explanation": "A wireless security generation commonly using AES-CCMP data protection. Personal uses a pre-shared key; Enterprise uses an authentication framework and service instead of one shared Personal passphrase."
  },
  {
    "abbreviation": "WPA3",
    "fullName": "Wi-Fi Protected Access 3",
    "explanation": "A newer wireless security generation. WPA3-Personal uses SAE and WPA3 requires protected management frames; client compatibility and transition settings affect the protection actually negotiated."
  },
  {
    "abbreviation": "WRED",
    "fullName": "Weighted Random Early Detection",
    "explanation": "A queue-management method that can drop selected packets before the queue fills, using supported traffic-class thresholds. Early drops can encourage responsive senders to slow down."
  },
  {
    "abbreviation": "XML",
    "fullName": "Extensible Markup Language",
    "explanation": "A structured text format using markup tags. NETCONF uses XML messages; it is a different representation from JSON objects or YAML indentation."
  },
  {
    "abbreviation": "YAML",
    "fullName": "YAML Ain’t Markup Language",
    "explanation": "A human-readable structured-data format often used for Ansible tasks and configuration files. Indentation groups related information and must be kept correct; YAML is not JSON."
  },
  {
    "abbreviation": "YANG",
    "fullName": "Yet Another Next Generation",
    "explanation": "A language defining the names, structure and types of network settings and state. Protocols such as NETCONF and RESTCONF use those models to describe what data may be read or changed."
  },
  {
    "abbreviation": "ZTP",
    "fullName": "Zero-Touch Provisioning",
    "explanation": "Initial device setup automated through a supported bootstrap process. It reduces manual work but still needs suitable network services, trusted inputs and verification of the resulting configuration."
  }
];
