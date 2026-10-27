import type {GlossaryEntry} from './glossary-types';

export const GLOSSARY: readonly GlossaryEntry[] = [
  {
    "abbreviation": "802.1Q",
    "fullName": "IEEE 802.1Q VLAN Tagging",
    "explanation": "The IEEE bridging standard associated with VLAN-aware Ethernet networks and VLAN tagging on trunk links."
  },
  {
    "abbreviation": "802.1X",
    "fullName": "IEEE 802.1X Port-Based Network Access Control",
    "explanation": "An access-control framework involving a supplicant, authenticator, and authentication service. It is commonly used for Enterprise wireless and wired network admission."
  },
  {
    "abbreviation": "AAA",
    "fullName": "Authentication, Authorization, and Accounting",
    "explanation": "A framework that verifies identity, controls permitted actions, and records activity. Network devices commonly use RADIUS or TACACS+ to obtain AAA services."
  },
  {
    "abbreviation": "AAAA",
    "fullName": "IPv6 Address Record",
    "explanation": "A DNS resource record that maps a hostname to an IPv6 address. An A record serves the corresponding IPv4 role."
  },
  {
    "abbreviation": "ACK",
    "fullName": "Acknowledgment",
    "explanation": "A TCP flag and acknowledgment mechanism indicating reception of sequence-numbered data. It participates in connection establishment and reliable delivery."
  },
  {
    "abbreviation": "ACL",
    "fullName": "Access Control List",
    "explanation": "An ordered set of permit and deny rules. A packet uses the first matching rule, and unmatched traffic reaches an implicit deny. Applying the ACL to the correct interface and direction is a separate step.",
    "plural": true
  },
  {
    "abbreviation": "AD",
    "fullName": "Administrative Distance",
    "explanation": "A local preference used to compare different routing sources offering the same destination prefix. A lower value is preferred. AD does not override longest-prefix matching between installed routes.",
    "caseSensitive": true
  },
  {
    "abbreviation": "AES",
    "fullName": "Advanced Encryption Standard",
    "explanation": "A symmetric block cipher used by many modern security protocols. Examples include AES-based wireless encryption and IPsec encryption suites."
  },
  {
    "abbreviation": "AH",
    "fullName": "Authentication Header",
    "explanation": "An IPsec protocol that provides packet integrity and origin authentication, but not payload encryption. ESP is generally used when confidentiality is also required."
  },
  {
    "abbreviation": "AI",
    "fullName": "Artificial Intelligence",
    "explanation": "Systems that perform tasks such as pattern recognition, prediction, or content generation. Network operations can use AI to summarize incidents or identify likely anomalies."
  },
  {
    "abbreviation": "AKM",
    "fullName": "Authentication and Key Management",
    "explanation": "The wireless security mechanisms used to authenticate stations and establish keys. Examples include PSK, 802.1X-based methods, and SAE."
  },
  {
    "abbreviation": "AP",
    "fullName": "Access Point",
    "explanation": "A device that connects wireless clients to a network. A lightweight AP typically joins a wireless LAN controller for coordinated management.",
    "plural": true
  },
  {
    "abbreviation": "API",
    "fullName": "Application Programming Interface",
    "explanation": "An interface through which software requests data or operations from another system. Network APIs support tasks such as inventory retrieval and configuration changes.",
    "plural": true
  },
  {
    "abbreviation": "ARP",
    "fullName": "Address Resolution Protocol",
    "explanation": "An IPv4 mechanism for resolving a local next-hop IP address to a link-layer address, usually an Ethernet MAC address. IPv6 uses Neighbor Discovery instead."
  },
  {
    "abbreviation": "AS",
    "fullName": "Autonomous System",
    "explanation": "A group of IP networks operated under a common routing administration and policy. Autonomous systems are identified by AS numbers in interdomain routing.",
    "caseSensitive": true
  },
  {
    "abbreviation": "ASIC",
    "fullName": "Application-Specific Integrated Circuit",
    "explanation": "A chip built for a particular purpose. Network switches commonly use ASICs to forward and process packets at high rates.",
    "plural": true
  },
  {
    "abbreviation": "ASN",
    "fullName": "Autonomous System Number",
    "explanation": "A numeric identifier for an autonomous system. BGP uses AS numbers to identify routing domains and describe the AS path.",
    "plural": true
  },
  {
    "abbreviation": "BDR",
    "fullName": "Backup Designated Router",
    "explanation": "The OSPF router elected to take over if the designated router fails on a multiaccess segment that uses a DR/BDR election."
  },
  {
    "abbreviation": "BGP",
    "fullName": "Border Gateway Protocol",
    "explanation": "A path-vector routing protocol used to exchange reachability between autonomous systems and within large routing environments. BGP is beyond the core OSPF configuration focus of this CCNA path."
  },
  {
    "abbreviation": "BPDU",
    "fullName": "Bridge Protocol Data Unit",
    "explanation": "A spanning-tree message used to exchange bridge and path information. Controls such as BPDU guard act on the reception of these messages.",
    "plural": true
  },
  {
    "abbreviation": "BSS",
    "fullName": "Basic Service Set",
    "explanation": "A fundamental IEEE 802.11 wireless cell. In an infrastructure network, it normally consists of an AP radio and its associated stations.",
    "plural": true
  },
  {
    "abbreviation": "BSSID",
    "fullName": "Basic Service Set Identifier",
    "explanation": "The identifier for a particular wireless basic service set, commonly based on an AP radio MAC address. It differs from the human-readable SSID.",
    "plural": true
  },
  {
    "abbreviation": "CAPWAP",
    "fullName": "Control and Provisioning of Wireless Access Points",
    "explanation": "A protocol used between lightweight APs and a controller. Its control and data channels commonly use UDP ports 5246 and 5247."
  },
  {
    "abbreviation": "CCMP",
    "fullName": "Counter Mode with Cipher Block Chaining Message Authentication Code Protocol",
    "explanation": "An AES-based wireless security protocol providing confidentiality and integrity. It is commonly associated with WPA2."
  },
  {
    "abbreviation": "CCNA",
    "fullName": "Cisco Certified Network Associate",
    "explanation": "Cisco’s associate-level networking certification. This study site targets the 200-301 v1.1 exam curriculum."
  },
  {
    "abbreviation": "CDP",
    "fullName": "Cisco Discovery Protocol",
    "explanation": "A Cisco Layer 2 neighbor-discovery protocol that advertises information such as device identity, capabilities, and port details to directly connected neighbors."
  },
  {
    "abbreviation": "CEF",
    "fullName": "Cisco Express Forwarding",
    "explanation": "A Cisco forwarding architecture that uses a forwarding information base and adjacency information to move packets efficiently."
  },
  {
    "abbreviation": "CIDR",
    "fullName": "Classless Inter-Domain Routing",
    "explanation": "The use of explicit prefix lengths rather than historical address classes. CIDR supports flexible subnet sizes and route aggregation."
  },
  {
    "abbreviation": "CLI",
    "fullName": "Command-Line Interface",
    "explanation": "A text-based interface for operating and configuring a device. IOS XE separates user EXEC, privileged EXEC, and configuration contexts."
  },
  {
    "abbreviation": "CNAME",
    "fullName": "Canonical Name Record",
    "explanation": "A DNS record that aliases one domain name to another name. It does not directly contain an IP address."
  },
  {
    "abbreviation": "CoS",
    "fullName": "Class of Service",
    "explanation": "A traffic-priority classification. On 802.1Q Ethernet links, the priority code point field provides eight Layer 2 priority values."
  },
  {
    "abbreviation": "CPU",
    "fullName": "Central Processing Unit",
    "explanation": "The processor that executes system and control software. High CPU utilization can affect management and control-plane functions even when hardware forwarding continues.",
    "plural": true
  },
  {
    "abbreviation": "CRC",
    "fullName": "Cyclic Redundancy Check",
    "explanation": "An error-detection calculation used to detect corrupted data. Ethernet CRC errors indicate frames failed the integrity check and can point to a physical-link issue."
  },
  {
    "abbreviation": "CRUD",
    "fullName": "Create, Read, Update, and Delete",
    "explanation": "The basic data operations commonly mapped to API methods. For example, an HTTP GET normally reads a resource."
  },
  {
    "abbreviation": "CSMA/CA",
    "fullName": "Carrier Sense Multiple Access with Collision Avoidance",
    "explanation": "A shared-medium access approach used in Wi-Fi. Stations assess the channel and use coordination/backoff procedures to reduce collisions."
  },
  {
    "abbreviation": "CSMA/CD",
    "fullName": "Carrier Sense Multiple Access with Collision Detection",
    "explanation": "The historical Ethernet shared-medium access method for half-duplex collision domains. Modern full-duplex switched Ethernet does not use collision detection for access."
  },
  {
    "abbreviation": "DAD",
    "fullName": "Duplicate Address Detection",
    "explanation": "An IPv6 procedure that checks whether an address is already in use on a link before it is used normally."
  },
  {
    "abbreviation": "DAI",
    "fullName": "Dynamic ARP Inspection",
    "explanation": "A switch security feature that validates ARP messages using trusted bindings or configured ARP policies. It helps counter ARP spoofing."
  },
  {
    "abbreviation": "DHCP",
    "fullName": "Dynamic Host Configuration Protocol",
    "explanation": "A protocol that supplies host settings such as an IPv4 address, subnet mask, gateway, DNS servers, and lease duration. A relay can carry requests across a routed boundary."
  },
  {
    "abbreviation": "DHCPv6",
    "fullName": "Dynamic Host Configuration Protocol for IPv6",
    "explanation": "A protocol that can provide IPv6 addressing or other host settings. IPv6 router advertisements normally supply default-router information."
  },
  {
    "abbreviation": "DNS",
    "fullName": "Domain Name System",
    "explanation": "A distributed naming system that returns records such as A, AAAA, CNAME, MX, and PTR. DNS commonly uses both UDP and TCP port 53."
  },
  {
    "abbreviation": "DORA",
    "fullName": "Discover, Offer, Request, Acknowledge",
    "explanation": "The common four-message initial IPv4 DHCP exchange between a client and a server."
  },
  {
    "abbreviation": "DR",
    "fullName": "Designated Router",
    "explanation": "The OSPF router elected to coordinate certain link-state exchanges on a multiaccess segment. The election considers priority and router ID and is nonpreemptive.",
    "plural": true
  },
  {
    "abbreviation": "DROTHER",
    "fullName": "Designated Router Other",
    "explanation": "An OSPF router that is neither the DR nor the BDR on a broadcast segment. DROTHER routers can remain in 2-WAY state with each other as part of normal operation."
  },
  {
    "abbreviation": "DSCP",
    "fullName": "Differentiated Services Code Point",
    "explanation": "A six-bit value in an IP header used to identify a traffic class for per-hop quality-of-service treatment."
  },
  {
    "abbreviation": "DTLS",
    "fullName": "Datagram Transport Layer Security",
    "explanation": "A security protocol that provides TLS-like protections for datagram transport. CAPWAP uses DTLS for protected control communication."
  },
  {
    "abbreviation": "DTP",
    "fullName": "Dynamic Trunking Protocol",
    "explanation": "A Cisco protocol for negotiating Ethernet trunk behavior on supported switches. Explicit port modes and disabling negotiation where appropriate make the intended role predictable."
  },
  {
    "abbreviation": "EAP",
    "fullName": "Extensible Authentication Protocol",
    "explanation": "A framework that carries authentication methods. Enterprise wireless commonly transports EAP through 802.1X and a backend authentication service."
  },
  {
    "abbreviation": "ECMP",
    "fullName": "Equal-Cost Multipath",
    "explanation": "The use of multiple next hops with the same routing cost. Forwarding commonly distributes flows across the available paths."
  },
  {
    "abbreviation": "EF",
    "fullName": "Expedited Forwarding",
    "explanation": "A DiffServ per-hop behavior commonly used for delay-sensitive traffic such as voice. The conventional EF DSCP value is decimal 46."
  },
  {
    "abbreviation": "EIGRP",
    "fullName": "Enhanced Interior Gateway Routing Protocol",
    "explanation": "An interior routing protocol that uses the DUAL algorithm and a composite metric. Its administrative distance is often compared with OSPF and static routes in CCNA route-selection exercises."
  },
  {
    "abbreviation": "ESP",
    "fullName": "Encapsulating Security Payload",
    "explanation": "An IPsec protocol that can provide confidentiality, integrity, and origin authentication, depending on the selected transform."
  },
  {
    "abbreviation": "EUI-64",
    "fullName": "Extended Unique Identifier, 64-bit",
    "explanation": "An identifier format associated with some IPv6 interface IDs. Modified EUI-64 derived from a 48-bit MAC inserts FFFE and inverts the universal/local bit.",
    "aliases": [
      "EUI 64",
      "EUI64"
    ]
  },
  {
    "abbreviation": "FHRP",
    "fullName": "First-Hop Redundancy Protocol",
    "explanation": "A family of protocols that provides a stable virtual default gateway while the physical forwarding router can change. Examples include HSRP and VRRP.",
    "plural": true
  },
  {
    "abbreviation": "FIB",
    "fullName": "Forwarding Information Base",
    "explanation": "A forwarding-oriented table derived from routing information. It supports efficient destination lookups in the data plane."
  },
  {
    "abbreviation": "FIN",
    "fullName": "Finish",
    "explanation": "A TCP flag used during orderly connection termination. Each direction of a TCP byte stream can be closed independently."
  },
  {
    "abbreviation": "FIPS",
    "fullName": "Federal Information Processing Standards",
    "explanation": "A set of U.S. federal standards. Cryptographic FIPS modes can constrain algorithms and configuration choices on network products."
  },
  {
    "abbreviation": "FTP",
    "fullName": "File Transfer Protocol",
    "explanation": "A file-transfer protocol with a TCP control channel, normally port 21, and separate data connections. Standard FTP does not encrypt credentials or file content."
  },
  {
    "abbreviation": "Gbps",
    "fullName": "Gigabits per Second",
    "explanation": "A data-rate unit equal to one billion bits per second. Bits per second differ from bytes per second."
  },
  {
    "abbreviation": "GHz",
    "fullName": "Gigahertz",
    "explanation": "A frequency unit equal to one billion cycles per second. Wi-Fi bands are commonly described using GHz."
  },
  {
    "abbreviation": "GRE",
    "fullName": "Generic Routing Encapsulation",
    "explanation": "A tunneling protocol that encapsulates one network-layer packet inside another. GRE does not provide encryption by itself."
  },
  {
    "abbreviation": "GUI",
    "fullName": "Graphical User Interface",
    "explanation": "A visual interface with screens, forms, and controls. A wireless controller GUI exposes objects such as WLANs, policy profiles, and tags.",
    "plural": true
  },
  {
    "abbreviation": "HSRP",
    "fullName": "Hot Standby Router Protocol",
    "explanation": "A Cisco first-hop redundancy protocol with active and standby roles. Hosts use its shared virtual gateway address."
  },
  {
    "abbreviation": "HTTP",
    "fullName": "Hypertext Transfer Protocol",
    "explanation": "An application protocol used by the web and many APIs. Plain HTTP provides no transport encryption."
  },
  {
    "abbreviation": "HTTPS",
    "fullName": "Hypertext Transfer Protocol Secure",
    "explanation": "HTTP protected by TLS, commonly on TCP port 443. Certificate validation is part of establishing the server’s identity."
  },
  {
    "abbreviation": "ICMP",
    "fullName": "Internet Control Message Protocol",
    "explanation": "A protocol for IP control and error messages. IPv4 ping uses ICMP echo messages; ICMP is not TCP or UDP."
  },
  {
    "abbreviation": "ICMPv6",
    "fullName": "Internet Control Message Protocol for IPv6",
    "explanation": "The IPv6 control-message protocol. It supports IPv6 error reporting, echo tests, and essential functions used by Neighbor Discovery."
  },
  {
    "abbreviation": "ID",
    "fullName": "Identifier",
    "explanation": "A value that distinguishes an object, device, or session. Its exact meaning depends on context, such as an OSPF router ID or a VLAN ID.",
    "plural": true,
    "caseSensitive": true
  },
  {
    "abbreviation": "IEEE",
    "fullName": "Institute of Electrical and Electronics Engineers",
    "explanation": "A professional standards organization responsible for networking standards including Ethernet, Wi-Fi, and VLAN bridging specifications."
  },
  {
    "abbreviation": "IGMP",
    "fullName": "Internet Group Management Protocol",
    "explanation": "An IPv4 protocol used by hosts and routers to manage local multicast group membership. Switches can use IGMP snooping to constrain multicast forwarding."
  },
  {
    "abbreviation": "IGP",
    "fullName": "Interior Gateway Protocol",
    "explanation": "A routing protocol used within an autonomous system. OSPF and EIGRP are examples.",
    "plural": true
  },
  {
    "abbreviation": "IKE",
    "fullName": "Internet Key Exchange",
    "explanation": "The protocol family used to negotiate authentication, keys, and security associations for IPsec."
  },
  {
    "abbreviation": "IKEv2",
    "fullName": "Internet Key Exchange Version 2",
    "explanation": "A version of IKE that negotiates IPsec security associations and keying. Successful IKE negotiation alone does not prove application traffic is being encrypted."
  },
  {
    "abbreviation": "IOS",
    "fullName": "Internetwork Operating System",
    "explanation": "Cisco’s operating-system name used across generations of networking software. Available commands depend on the product and release."
  },
  {
    "abbreviation": "IOS XE",
    "fullName": "Cisco IOS XE — Internetwork Operating System",
    "explanation": "Cisco’s modular networking operating system used on many Catalyst switches, routers, and wireless controllers. XE is a product designation; commands are still platform and release dependent."
  },
  {
    "abbreviation": "IoT",
    "fullName": "Internet of Things",
    "explanation": "Network-connected devices such as sensors, appliances, and industrial endpoints. Their access and security requirements can differ from those of user computers."
  },
  {
    "abbreviation": "IP",
    "fullName": "Internet Protocol",
    "explanation": "The network-layer protocol family that identifies endpoints and supports packet forwarding between networks. IPv4 and IPv6 are distinct versions."
  },
  {
    "abbreviation": "IPS",
    "fullName": "Intrusion Prevention System",
    "explanation": "A security system that analyzes traffic and can block detected malicious activity, commonly operating inline."
  },
  {
    "abbreviation": "IPsec",
    "fullName": "Internet Protocol Security",
    "explanation": "A suite for protecting IP traffic using negotiated security associations. It can secure site-to-site or supported remote-access VPN designs."
  },
  {
    "abbreviation": "IPv4",
    "fullName": "Internet Protocol Version 4",
    "explanation": "An IP version with 32-bit addresses, commonly written in dotted decimal notation. Prefix lengths divide network and host portions."
  },
  {
    "abbreviation": "IPv6",
    "fullName": "Internet Protocol Version 6",
    "explanation": "An IP version with 128-bit addresses written in hexadecimal. It uses Neighbor Discovery and multicast instead of IPv4 ARP and broadcast behavior."
  },
  {
    "abbreviation": "IS-IS",
    "fullName": "Intermediate System to Intermediate System",
    "explanation": "A link-state interior routing protocol. It is common in some provider networks but is outside this path’s core single-area OSPF configuration focus."
  },
  {
    "abbreviation": "ISL",
    "fullName": "Inter-Switch Link",
    "explanation": "A legacy Cisco VLAN trunk encapsulation. Current Catalyst 9300 trunk examples use IEEE 802.1Q instead."
  },
  {
    "abbreviation": "JSON",
    "fullName": "JavaScript Object Notation",
    "explanation": "A text data format using objects, arrays, strings, numbers, booleans, and null. It requires double-quoted object keys and does not allow comments or trailing commas."
  },
  {
    "abbreviation": "L2",
    "fullName": "Layer 2 — Data Link Layer",
    "explanation": "The OSI layer associated with local frame delivery and functions such as Ethernet MAC forwarding and VLANs."
  },
  {
    "abbreviation": "L3",
    "fullName": "Layer 3 — Network Layer",
    "explanation": "The OSI layer associated with logical addressing and routing between networks. IP forwarding is a Layer 3 function."
  },
  {
    "abbreviation": "LACP",
    "fullName": "Link Aggregation Control Protocol",
    "explanation": "The IEEE link-aggregation negotiation protocol. Active initiates negotiation; passive responds. Passive/passive does not start a bundle."
  },
  {
    "abbreviation": "LAG",
    "fullName": "Link Aggregation Group",
    "explanation": "A logical bundle of compatible physical links. A LAG provides aggregate capacity and redundancy; an individual flow normally uses one member.",
    "plural": true
  },
  {
    "abbreviation": "LAN",
    "fullName": "Local Area Network",
    "explanation": "A network covering a limited local area, such as an office or campus. VLANs divide a switched LAN into separate Layer 2 broadcast domains.",
    "plural": true
  },
  {
    "abbreviation": "LLDP",
    "fullName": "Link Layer Discovery Protocol",
    "explanation": "An IEEE 802.1AB vendor-neutral neighbor-discovery protocol for directly connected devices."
  },
  {
    "abbreviation": "LLQ",
    "fullName": "Low Latency Queuing",
    "explanation": "A QoS mechanism that provides priority treatment to a bounded traffic class. It is often used for delay-sensitive voice traffic."
  },
  {
    "abbreviation": "LSA",
    "fullName": "Link-State Advertisement",
    "explanation": "An OSPF message element describing link-state information. Routers use advertisements to build the link-state database.",
    "plural": true
  },
  {
    "abbreviation": "LSDB",
    "fullName": "Link-State Database",
    "explanation": "The collection of link-state information used by a link-state routing protocol to calculate paths.",
    "plural": true
  },
  {
    "abbreviation": "MAC",
    "fullName": "Media Access Control",
    "explanation": "The data-link sublayer associated with access to a medium and link-layer addressing. Ethernet switches learn source MAC addresses and forward using destination MAC addresses.",
    "plural": true
  },
  {
    "abbreviation": "Mbps",
    "fullName": "Megabits per Second",
    "explanation": "A data-rate unit equal to one million bits per second. It measures a rate, not a total quantity of stored data."
  },
  {
    "abbreviation": "MD5",
    "fullName": "Message-Digest Algorithm 5",
    "explanation": "A legacy hash algorithm with known cryptographic weaknesses. Current network hardening guidance favors supported stronger alternatives."
  },
  {
    "abbreviation": "MFA",
    "fullName": "Multifactor Authentication",
    "explanation": "Authentication using different factor categories, such as a password and a security key. Two passwords are still two knowledge secrets, not two factor categories."
  },
  {
    "abbreviation": "MIB",
    "fullName": "Management Information Base",
    "explanation": "A structured collection of managed objects used by protocols such as SNMP. Object identifiers identify individual values in the hierarchy.",
    "plural": true
  },
  {
    "abbreviation": "ML",
    "fullName": "Machine Learning",
    "explanation": "Methods that identify patterns from data to support tasks such as prediction or anomaly detection. Useful results depend on representative, reliable data."
  },
  {
    "abbreviation": "MQC",
    "fullName": "Modular QoS Command-Line Interface",
    "explanation": "Cisco’s class-map, policy-map, and service-policy framework for defining and applying supported quality-of-service behavior."
  },
  {
    "abbreviation": "MTU",
    "fullName": "Maximum Transmission Unit",
    "explanation": "The maximum network-layer packet size a link or interface can carry without the relevant fragmentation behavior. MTU mismatches can affect applications and routing adjacencies."
  },
  {
    "abbreviation": "MX",
    "fullName": "Mail Exchange",
    "explanation": "A DNS record type that identifies mail exchangers for a domain and their preference values."
  },
  {
    "abbreviation": "NA",
    "fullName": "Neighbor Advertisement",
    "explanation": "An ICMPv6 Neighbor Discovery message that advertises neighbor address information or responds to a Neighbor Solicitation.",
    "caseSensitive": true
  },
  {
    "abbreviation": "NAT",
    "fullName": "Network Address Translation",
    "explanation": "A function that rewrites IP addresses at a network boundary. Static NAT, dynamic NAT, and PAT have different mapping behavior."
  },
  {
    "abbreviation": "NDP",
    "fullName": "Neighbor Discovery Protocol",
    "explanation": "An IPv6 mechanism using ICMPv6 messages for neighbor resolution, router discovery, and related local-link functions."
  },
  {
    "abbreviation": "NETCONF",
    "fullName": "Network Configuration Protocol",
    "explanation": "An IETF protocol for accessing and changing modeled network configuration. NETCONF commonly uses SSH transport on TCP port 830."
  },
  {
    "abbreviation": "NGFW",
    "fullName": "Next-Generation Firewall",
    "explanation": "A firewall that adds capabilities such as application-aware inspection and integrated threat controls beyond basic packet filtering.",
    "plural": true
  },
  {
    "abbreviation": "NMS",
    "fullName": "Network Management System",
    "explanation": "A management platform that monitors or operates devices, for example by polling SNMP objects and collecting notifications.",
    "plural": true
  },
  {
    "abbreviation": "NS",
    "fullName": "Neighbor Solicitation",
    "explanation": "An ICMPv6 Neighbor Discovery message used for tasks including neighbor address resolution and duplicate address detection.",
    "caseSensitive": true
  },
  {
    "abbreviation": "NTP",
    "fullName": "Network Time Protocol",
    "explanation": "A protocol that synchronizes device clocks, commonly using UDP port 123. Consistent time supports meaningful log correlation."
  },
  {
    "abbreviation": "OID",
    "fullName": "Object Identifier",
    "explanation": "A hierarchical identifier for a managed object, such as an SNMP MIB value.",
    "plural": true
  },
  {
    "abbreviation": "OS",
    "fullName": "Operating System",
    "explanation": "Software that manages a device’s hardware and provides services to applications and users. Network operating systems expose device-specific management features.",
    "caseSensitive": true,
    "aliases": [
      "OSes"
    ]
  },
  {
    "abbreviation": "OSI",
    "fullName": "Open Systems Interconnection",
    "explanation": "A seven-layer reference model: physical, data link, network, transport, session, presentation, and application."
  },
  {
    "abbreviation": "OSPF",
    "fullName": "Open Shortest Path First",
    "explanation": "A link-state interior routing protocol that discovers neighbors and calculates paths using interface costs. The CCNA configuration focus is single-area OSPFv2."
  },
  {
    "abbreviation": "OSPFv2",
    "fullName": "Open Shortest Path First Version 2",
    "explanation": "The OSPF version used for IPv4 in this curriculum. It supports area-based link-state routing and DR/BDR elections on applicable multiaccess segments."
  },
  {
    "abbreviation": "OSPFv3",
    "fullName": "Open Shortest Path First Version 3",
    "explanation": "An OSPF version originally designed for IPv6. Supported implementations can also use address-family extensions."
  },
  {
    "abbreviation": "PAgP",
    "fullName": "Port Aggregation Protocol",
    "explanation": "A Cisco-proprietary EtherChannel negotiation protocol. LACP is the standards-based alternative emphasized in this curriculum."
  },
  {
    "abbreviation": "PAT",
    "fullName": "Port Address Translation",
    "explanation": "A many-to-one NAT approach that distinguishes translated sessions using transport-port information. Cisco IOS commonly enables it with the overload keyword."
  },
  {
    "abbreviation": "PC",
    "fullName": "Personal Computer",
    "explanation": "A general-purpose endpoint computer. Its address, mask, gateway, DNS settings, and host firewall all affect network connectivity."
  },
  {
    "abbreviation": "PDU",
    "fullName": "Protocol Data Unit",
    "explanation": "A unit of information exchanged at a protocol layer, such as a frame at the data-link layer or a packet at the network layer.",
    "plural": true
  },
  {
    "abbreviation": "PKI",
    "fullName": "Public Key Infrastructure",
    "explanation": "A framework of certificates, keys, trust authorities, and associated procedures used to establish and manage cryptographic identity."
  },
  {
    "abbreviation": "PMF",
    "fullName": "Protected Management Frames",
    "explanation": "IEEE 802.11 protections for selected robust wireless management frames. PMF is required by WPA3."
  },
  {
    "abbreviation": "PoE",
    "fullName": "Power over Ethernet",
    "explanation": "A family of standards that carries power and data over supported Ethernet cabling. Port capability and the switch’s total power budget both matter."
  },
  {
    "abbreviation": "PPP",
    "fullName": "Point-to-Point Protocol",
    "explanation": "A data-link protocol for point-to-point connections. It supports link establishment and can carry multiple network-layer protocols."
  },
  {
    "abbreviation": "PPPoE",
    "fullName": "Point-to-Point Protocol over Ethernet",
    "explanation": "A way to carry PPP sessions over Ethernet, commonly used in some broadband access networks."
  },
  {
    "abbreviation": "PSK",
    "fullName": "Pre-Shared Key",
    "explanation": "A shared secret established before authentication or secure-session setup. WPA2-Personal uses a PSK-based model.",
    "plural": true
  },
  {
    "abbreviation": "PTR",
    "fullName": "Pointer Record",
    "explanation": "A DNS record type used for reverse lookups from an IP address to a domain name."
  },
  {
    "abbreviation": "PVST+",
    "fullName": "Per-VLAN Spanning Tree Plus",
    "explanation": "A Cisco spanning-tree implementation that maintains a spanning-tree instance per VLAN and works with 802.1Q trunks."
  },
  {
    "abbreviation": "QoS",
    "fullName": "Quality of Service",
    "explanation": "Methods for classifying and treating traffic under contention. Functions include marking, queuing, congestion avoidance, policing, and shaping."
  },
  {
    "abbreviation": "RA",
    "fullName": "Router Advertisement",
    "explanation": "An IPv6 Neighbor Discovery message that supplies information such as prefixes and default-router availability to a local link.",
    "plural": true,
    "caseSensitive": true
  },
  {
    "abbreviation": "RADIUS",
    "fullName": "Remote Authentication Dial-In User Service",
    "explanation": "An AAA protocol commonly used for network access. Typical UDP ports are 1812 for authentication and 1813 for accounting."
  },
  {
    "abbreviation": "RAM",
    "fullName": "Random Access Memory",
    "explanation": "Working memory used by a device while it runs. On IOS-style devices, the running configuration is distinct from the saved startup configuration."
  },
  {
    "abbreviation": "REST",
    "fullName": "Representational State Transfer",
    "explanation": "An architectural style used by many web APIs. REST-style APIs identify resources and use HTTP methods and representations to interact with them."
  },
  {
    "abbreviation": "RESTCONF",
    "fullName": "RESTCONF — REST-Based Network Configuration Protocol",
    "explanation": "An HTTP-based protocol for accessing YANG-modeled data. IOS XE commonly exposes RESTCONF through HTTPS."
  },
  {
    "abbreviation": "RF",
    "fullName": "Radio Frequency",
    "explanation": "The radio-frequency signals used by wireless networking. Attenuation, interference, antenna placement, and signal-to-noise ratio affect service."
  },
  {
    "abbreviation": "RFC",
    "fullName": "Request for Comments",
    "explanation": "A publication in the Internet technical document series. RFC 1918 specifies the familiar private IPv4 ranges.",
    "plural": true
  },
  {
    "abbreviation": "RIP",
    "fullName": "Routing Information Protocol",
    "explanation": "A distance-vector interior routing protocol that uses hop count. Its default administrative distance is often used in route-preference comparisons."
  },
  {
    "abbreviation": "RPVST+",
    "fullName": "Rapid Per-VLAN Spanning Tree Plus",
    "explanation": "Cisco’s per-VLAN rapid spanning-tree implementation. It applies rapid convergence behavior independently to VLAN spanning-tree instances.",
    "aliases": [
      "Rapid PVST+",
      "Rapid-PVST+"
    ]
  },
  {
    "abbreviation": "RRM",
    "fullName": "Radio Resource Management",
    "explanation": "Wireless functions that coordinate radio parameters such as channel and transmit power to support the RF design."
  },
  {
    "abbreviation": "RSA",
    "fullName": "Rivest–Shamir–Adleman",
    "explanation": "A public-key cryptographic algorithm named for its creators. Network devices can use RSA keys for functions such as SSH server identity."
  },
  {
    "abbreviation": "RST",
    "fullName": "Reset",
    "explanation": "A TCP flag used to reset or reject a connection. It differs from the orderly shutdown behavior associated with FIN."
  },
  {
    "abbreviation": "RSTP",
    "fullName": "Rapid Spanning Tree Protocol",
    "explanation": "IEEE spanning-tree behavior that provides faster convergence than classic STP. Its principal states are discarding, learning, and forwarding."
  },
  {
    "abbreviation": "RTT",
    "fullName": "Round-Trip Time",
    "explanation": "The elapsed time for traffic to travel to a destination and for a response to return. Ping commonly reports RTT."
  },
  {
    "abbreviation": "RX",
    "fullName": "Receive",
    "explanation": "A label for received traffic or the receive side of an interface or transceiver. It is commonly contrasted with TX."
  },
  {
    "abbreviation": "SA",
    "fullName": "Security Association",
    "explanation": "A negotiated set of security parameters used to protect traffic. IKE and IPsec maintain distinct types of security associations.",
    "plural": true,
    "caseSensitive": true
  },
  {
    "abbreviation": "SAE",
    "fullName": "Simultaneous Authentication of Equals",
    "explanation": "The password-authenticated key-establishment mechanism used by WPA3-Personal. It improves resistance to offline password guessing compared with traditional PSK exchange behavior."
  },
  {
    "abbreviation": "SCP",
    "fullName": "Secure Copy Protocol",
    "explanation": "A file-transfer protocol that uses SSH for protection. It is distinct from SFTP."
  },
  {
    "abbreviation": "SD-WAN",
    "fullName": "Software-Defined Wide Area Network",
    "explanation": "An approach that uses software-defined policy and orchestration to manage connectivity across WAN transports."
  },
  {
    "abbreviation": "SDN",
    "fullName": "Software-Defined Networking",
    "explanation": "An approach that separates or abstracts networking functions and exposes programmable control interfaces. Logical centralization need not mean a single physical controller."
  },
  {
    "abbreviation": "SFP",
    "fullName": "Small Form-Factor Pluggable",
    "explanation": "A family of modular network transceiver formats. The supported optical/electrical standard, wavelength, medium, and distance must match the link design.",
    "plural": true
  },
  {
    "abbreviation": "SFTP",
    "fullName": "SSH File Transfer Protocol",
    "explanation": "A file-transfer protocol carried over SSH. Despite their similar names, SFTP and SCP are different protocols."
  },
  {
    "abbreviation": "SLAAC",
    "fullName": "Stateless Address Autoconfiguration",
    "explanation": "An IPv6 mechanism through which a host forms addresses using information from router advertisements, without requiring stateful DHCPv6 address assignment."
  },
  {
    "abbreviation": "SNMP",
    "fullName": "Simple Network Management Protocol",
    "explanation": "A protocol for reading and sometimes changing managed device information. Polling typically uses UDP 161 and notifications typically use UDP 162."
  },
  {
    "abbreviation": "SNMPv1",
    "fullName": "Simple Network Management Protocol Version 1",
    "explanation": "An early SNMP version using community-based access. It lacks the modern authentication and privacy protections available in SNMPv3."
  },
  {
    "abbreviation": "SNMPv2c",
    "fullName": "Simple Network Management Protocol Version 2c",
    "explanation": "A community-based SNMP version with improvements such as bulk retrieval. Community strings do not provide encrypted transport protection."
  },
  {
    "abbreviation": "SNMPv3",
    "fullName": "Simple Network Management Protocol Version 3",
    "explanation": "An SNMP version supporting security models with authentication and privacy. The authPriv level provides authentication and encryption."
  },
  {
    "abbreviation": "SNR",
    "fullName": "Signal-to-Noise Ratio",
    "explanation": "A comparison between the desired signal level and background noise. Better SNR generally supports more reliable radio communication."
  },
  {
    "abbreviation": "SOHO",
    "fullName": "Small Office/Home Office",
    "explanation": "A network environment that commonly combines routing, switching, wireless access, and security functions into fewer devices."
  },
  {
    "abbreviation": "SSH",
    "fullName": "Secure Shell",
    "explanation": "A protocol for protected remote access, commonly using TCP port 22. IOS XE SSH access needs server keys, authentication, and an allowed management path."
  },
  {
    "abbreviation": "SSID",
    "fullName": "Service Set Identifier",
    "explanation": "The human-readable wireless network name. Multiple AP radios can advertise the same SSID while having different BSSIDs.",
    "plural": true
  },
  {
    "abbreviation": "SSL",
    "fullName": "Secure Sockets Layer",
    "explanation": "A predecessor to TLS. Older SSL protocol versions are obsolete; modern HTTPS and related protections use supported TLS versions."
  },
  {
    "abbreviation": "STP",
    "fullName": "Spanning Tree Protocol",
    "explanation": "A protocol family that prevents Layer 2 forwarding loops by establishing a loop-free active topology. In cabling contexts the same initials can also mean shielded twisted pair; this site normally uses the spanning-tree meaning."
  },
  {
    "abbreviation": "SVI",
    "fullName": "Switch Virtual Interface",
    "explanation": "A logical VLAN interface on a switch. It can provide an IP management endpoint or act as a Layer 3 gateway for its VLAN when routing is supported and enabled.",
    "plural": true
  },
  {
    "abbreviation": "SYN",
    "fullName": "Synchronize",
    "explanation": "A TCP flag used to synchronize sequence numbers during connection setup. The common handshake is SYN, SYN-ACK, ACK."
  },
  {
    "abbreviation": "TACACS+",
    "fullName": "Terminal Access Controller Access-Control System Plus",
    "explanation": "An AAA protocol commonly used for network-device administration and detailed command authorization. It normally uses TCP port 49.",
    "aliases": [
      "TACACS Plus"
    ]
  },
  {
    "abbreviation": "TCP",
    "fullName": "Transmission Control Protocol",
    "explanation": "A connection-oriented transport that provides reliable, ordered byte-stream delivery using sequence numbers, acknowledgments, flow control, and retransmission."
  },
  {
    "abbreviation": "TFTP",
    "fullName": "Trivial File Transfer Protocol",
    "explanation": "A simple UDP-based file-transfer protocol without native authentication or encryption. Its initial request normally uses UDP 69."
  },
  {
    "abbreviation": "TKIP",
    "fullName": "Temporal Key Integrity Protocol",
    "explanation": "A legacy wireless security protocol introduced with WPA. Modern WLANs should use supported stronger alternatives such as AES-based suites."
  },
  {
    "abbreviation": "TLS",
    "fullName": "Transport Layer Security",
    "explanation": "A protocol for protecting application communication using authenticated key establishment and encryption. It underpins modern HTTPS."
  },
  {
    "abbreviation": "TTL",
    "fullName": "Time to Live",
    "explanation": "An IPv4 header field decremented by routers to limit a packet’s lifetime in hops. DNS also uses the same abbreviation for a record’s cache lifetime, a different context."
  },
  {
    "abbreviation": "TX",
    "fullName": "Transmit",
    "explanation": "A label for transmitted traffic or the transmit side of an interface or transceiver. It is commonly contrasted with RX."
  },
  {
    "abbreviation": "UDP",
    "fullName": "User Datagram Protocol",
    "explanation": "A connectionless transport with no native guarantee of delivery, ordering, or retransmission. Applications can add their own reliability mechanisms."
  },
  {
    "abbreviation": "URI",
    "fullName": "Uniform Resource Identifier",
    "explanation": "A string that identifies a resource. A URL is a type of URI that also describes a location or access mechanism.",
    "plural": true
  },
  {
    "abbreviation": "URL",
    "fullName": "Uniform Resource Locator",
    "explanation": "An address identifying where and how a resource can be accessed, such as an HTTPS web address.",
    "plural": true
  },
  {
    "abbreviation": "USM",
    "fullName": "User-Based Security Model",
    "explanation": "An SNMPv3 security model that provides user-based authentication and privacy services."
  },
  {
    "abbreviation": "UTP",
    "fullName": "Unshielded Twisted Pair",
    "explanation": "Copper cabling using twisted conductor pairs without an overall shielding layer. Category and Ethernet standard determine supported link capabilities."
  },
  {
    "abbreviation": "VLAN",
    "fullName": "Virtual Local Area Network",
    "explanation": "A logical Layer 2 broadcast domain. Hosts in the same VLAN use switching; communication between VLAN IP subnets requires Layer 3 forwarding and any applicable policy permits.",
    "plural": true
  },
  {
    "abbreviation": "VLSM",
    "fullName": "Variable-Length Subnet Mask",
    "explanation": "The use of different prefix lengths within an address plan. Allocate aligned, nonoverlapping subnets sized for their requirements."
  },
  {
    "abbreviation": "VM",
    "fullName": "Virtual Machine",
    "explanation": "A virtualized computer that runs its own guest operating system under a hypervisor. Containers generally share a host kernel instead.",
    "plural": true
  },
  {
    "abbreviation": "VPN",
    "fullName": "Virtual Private Network",
    "explanation": "A protected logical connection across another network. Common models include site-to-site and remote-access VPNs.",
    "plural": true
  },
  {
    "abbreviation": "VRF",
    "fullName": "Virtual Routing and Forwarding",
    "explanation": "A separate routing/forwarding context on a shared device. VRFs can isolate routing tables and support overlapping addresses when the overall design allows it.",
    "plural": true
  },
  {
    "abbreviation": "VRRP",
    "fullName": "Virtual Router Redundancy Protocol",
    "explanation": "A standards-based first-hop redundancy protocol that preserves a virtual gateway identity while the active forwarding router can change."
  },
  {
    "abbreviation": "VTEP",
    "fullName": "VXLAN Tunnel Endpoint",
    "explanation": "A device or function that encapsulates and decapsulates VXLAN traffic at the edge of an overlay network.",
    "plural": true
  },
  {
    "abbreviation": "VTY",
    "fullName": "Virtual Teletype",
    "explanation": "An IOS-style logical terminal line used for remote CLI sessions. VTY settings control authentication, permitted transports, and related access policy."
  },
  {
    "abbreviation": "VXLAN",
    "fullName": "Virtual Extensible Local Area Network",
    "explanation": "An overlay encapsulation that carries Layer 2 segments across a routed underlay. It is distinct from ordinary 802.1Q VLAN tagging."
  },
  {
    "abbreviation": "WAN",
    "fullName": "Wide Area Network",
    "explanation": "A network that connects geographically separated locations using provider or Internet services.",
    "plural": true
  },
  {
    "abbreviation": "WEP",
    "fullName": "Wired Equivalent Privacy",
    "explanation": "An obsolete IEEE 802.11 security mechanism with serious weaknesses. It should not be used for a current wireless deployment."
  },
  {
    "abbreviation": "WLC",
    "fullName": "Wireless LAN Controller",
    "explanation": "A controller that coordinates compatible APs and wireless policies. Catalyst 9800 IOS XE and older AireOS products use different operating interfaces.",
    "plural": true
  },
  {
    "abbreviation": "WMM",
    "fullName": "Wi-Fi Multimedia",
    "explanation": "A Wi-Fi QoS mechanism that prioritizes traffic through access categories such as voice, video, best effort, and background."
  },
  {
    "abbreviation": "WPA",
    "fullName": "Wi-Fi Protected Access",
    "explanation": "A wireless security certification family introduced as an improvement over WEP. Original WPA commonly used the transitional TKIP protocol."
  },
  {
    "abbreviation": "WPA2",
    "fullName": "Wi-Fi Protected Access 2",
    "explanation": "A wireless security generation commonly using AES-CCMP. Personal mode uses a PSK; Enterprise mode uses 802.1X/EAP-based authentication."
  },
  {
    "abbreviation": "WPA3",
    "fullName": "Wi-Fi Protected Access 3",
    "explanation": "A newer wireless security generation. WPA3-Personal uses SAE, and WPA3 requires protected management frames."
  },
  {
    "abbreviation": "WRED",
    "fullName": "Weighted Random Early Detection",
    "explanation": "A congestion-avoidance mechanism that can probabilistically drop selected traffic before a queue becomes full, using supported traffic-class thresholds."
  },
  {
    "abbreviation": "XML",
    "fullName": "Extensible Markup Language",
    "explanation": "A structured markup format used by many systems, including NETCONF protocol messages and XML-encoded data models."
  },
  {
    "abbreviation": "YAML",
    "fullName": "YAML Ain’t Markup Language",
    "explanation": "A human-readable data-serialization language often used for Ansible playbooks and configuration files. Indentation is significant."
  },
  {
    "abbreviation": "YANG",
    "fullName": "Yet Another Next Generation",
    "explanation": "A data-modeling language used to describe network configuration and operational data exposed through protocols such as NETCONF and RESTCONF."
  },
  {
    "abbreviation": "ZTP",
    "fullName": "Zero-Touch Provisioning",
    "explanation": "Automated initial provisioning of a device with minimal manual configuration, using a supported bootstrap and management workflow."
  }
];
