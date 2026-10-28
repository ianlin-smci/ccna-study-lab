export interface BlueprintTopic {id:string;title:string;body:string}
export interface BlueprintObjective {id:string;skill:string;title:string;subtopics:BlueprintTopic[]}
export const BLUEPRINT_SOURCE='https://learningcontent.cisco.com/documents/marketing/exam-topics/200-301-CCNA-v1.1.pdf';
export const BLUEPRINT_VERSION='v1.1';
// Numbering follows Cisco's published v1.1 inventory. Labels and teaching text are independently worded.
// Inline scope items, such as those in 1.12, do not receive invented lettered identifiers.
export const BLUEPRINT:Record<string,BlueprintObjective> = {
  "1.1": {
    "id": "1.1",
    "skill": "Explain",
    "title": "Network component roles",
    "subtopics": [
      {
        "id": "1.1.a",
        "title": "IP routing devices",
        "body": "A router uses destination IP and the routing table to choose a next hop between networks. It replaces the incoming link-layer frame when forwarding onto another link; the endpoint IPs normally remain unchanged without NAT or tunneling."
      },
      {
        "id": "1.1.b",
        "title": "Switching at Layer 2 and Layer 3",
        "body": "Layer 2 switching learns source MAC addresses and forwards by destination MAC within a VLAN. A routing-capable Layer 3 switch can also forward between IP subnets when its interfaces, routing capability and platform support are correctly configured."
      },
      {
        "id": "1.1.c",
        "title": "Application-aware firewalls and intrusion prevention",
        "body": "A next-generation firewall can combine connection state, application identity and security policy. An inline IPS can detect and block matching malicious traffic. Detection or a device label alone does not prove the intended traffic is being prevented."
      },
      {
        "id": "1.1.d",
        "title": "Wireless access-point function",
        "body": "An AP provides the radio connection for wireless clients and connects their traffic to a distribution network. Authentication, association, radio settings and wired reachability must work together; a powered AP alone does not establish client service."
      },
      {
        "id": "1.1.e",
        "title": "Network and wireless controller roles",
        "body": "Controllers coordinate configuration, policy and monitoring across managed devices. A WLC manages wireless functions; Catalyst Center manages enterprise network workflows. Centralized management does not imply every user packet passes through the controller."
      },
      {
        "id": "1.1.f",
        "title": "User and other endpoint devices",
        "body": "An endpoint originates or consumes application traffic, such as a laptop, phone, camera or sensor. Its address, mask/prefix, selected gateway, DNS and local security policy affect connectivity before network-device configuration is considered."
      },
      {
        "id": "1.1.g",
        "title": "Application and infrastructure servers",
        "body": "Servers offer services such as web applications, DNS, DHCP and file storage. A working IP path does not prove the application is listening or authorized. Diagnose the specific service, transport and return path rather than assuming all server functions share one outcome."
      },
      {
        "id": "1.1.h",
        "title": "Delivering power over Ethernet",
        "body": "PoE power-sourcing equipment supplies compatible powered devices over Ethernet cabling. Verify the negotiated standard, cable, per-port capability and total power budget. A switch can have a working data path while insufficient power prevents an AP or phone from operating."
      }
    ]
  },
  "1.2": {
    "id": "1.2",
    "skill": "Describe",
    "title": "Network topology architectures",
    "subtopics": [
      {
        "id": "1.2.a",
        "title": "Collapsed-core campus layout",
        "body": "A two-tier campus combines distribution and core functions in a collapsed core while keeping access connectivity separate. Identify its aggregation paths and failure boundaries instead of counting every switch as a separate tier."
      },
      {
        "id": "1.2.b",
        "title": "Access, distribution and core tiers",
        "body": "A three-tier campus separates endpoint access, aggregation/policy and resilient core transit. The design supports scale and failure isolation; its tier names describe roles rather than mandatory switch models."
      },
      {
        "id": "1.2.c",
        "title": "Leaf-to-spine fabric layout",
        "body": "Each leaf connects to each spine, creating predictable paths between leaves and possible equal-cost forwarding. Server-to-server traffic between leaves normally crosses a spine; adding leaf-to-leaf links is not the defining topology."
      },
      {
        "id": "1.2.d",
        "title": "Connectivity between distant sites",
        "body": "A WAN joins geographically separated networks through provider or Internet services. Distinguish the delivered Layer 2/Layer 3 service, availability and routing responsibilities. A provider VPN does not automatically imply encryption."
      },
      {
        "id": "1.2.e",
        "title": "Small-office and home-office layout",
        "body": "SOHO equipment often combines routing, switching, wireless, NAT and security in one unit. The same logical roles still exist, even when the topology uses few physical devices."
      },
      {
        "id": "1.2.f",
        "title": "Local infrastructure and cloud services",
        "body": "On-premises and cloud describe deployment and operating responsibility. Consider ownership, provisioning, connectivity and shared responsibility. IaaS, PaaS and SaaS describe service boundaries rather than a universal physical topology."
      }
    ]
  },
  "1.3": {
    "id": "1.3",
    "skill": "Compare",
    "title": "Physical interfaces and cabling",
    "subtopics": [
      {
        "id": "1.3.a",
        "title": "Copper, multimode and single-mode media",
        "body": "Copper uses electrical signals and depends on category, pairs, length and interference. Multimode fiber commonly serves shorter optical links; single-mode supports longer reaches with suitable optics. Match wavelength, transceiver, fiber type and optical budget rather than connector appearance alone."
      },
      {
        "id": "1.3.b",
        "title": "Shared and point-to-point Ethernet links",
        "body": "Shared half-duplex Ethernet has collision behavior; modern switched full-duplex point-to-point links do not normally have collisions. Each switch port is a separate physical segment, while VLANs define broadcast scope."
      }
    ]
  },
  "1.4": {
    "id": "1.4",
    "skill": "Identify",
    "title": "Interface and cable faults",
    "subtopics": []
  },
  "1.5": {
    "id": "1.5",
    "skill": "Compare",
    "title": "TCP and UDP",
    "subtopics": []
  },
  "1.6": {
    "id": "1.6",
    "skill": "Configure and verify",
    "title": "IPv4 addresses and subnetting",
    "subtopics": []
  },
  "1.7": {
    "id": "1.7",
    "skill": "Describe",
    "title": "Private IPv4 address space",
    "subtopics": []
  },
  "1.8": {
    "id": "1.8",
    "skill": "Configure and verify",
    "title": "IPv6 addresses and prefixes",
    "subtopics": []
  },
  "1.9": {
    "id": "1.9",
    "skill": "Describe",
    "title": "IPv6 address categories",
    "subtopics": [
      {
        "id": "1.9.a",
        "title": "Global, unique-local and link-local unicast",
        "body": "Global unicast commonly uses 2000::/3; unique-local uses fc00::/7, commonly fd00::/8; link-local uses fe80::/10. A link-local next hop needs interface context and is not forwarded across other links. The scope and prefix determine how an address may be used."
      },
      {
        "id": "1.9.b",
        "title": "Routing to one of several anycast instances",
        "body": "Anycast uses a unicast-format address assigned to multiple nodes. Routing delivers to an instance according to the available path selection, often described as the nearest instance; it does not deliver a copy to every instance."
      },
      {
        "id": "1.9.c",
        "title": "IPv6 multicast delivery",
        "body": "Multicast addresses use ff00::/8. ff02::1 reaches all nodes on the link and ff02::2 all routers. ICMPv6 Neighbor Discovery uses multicast rather than IPv4-style broadcast, and multicast scope constrains where traffic can travel."
      },
      {
        "id": "1.9.d",
        "title": "Deriving an interface ID with modified EUI-64",
        "body": "For a 48-bit MAC, insert FFFE in the middle and flip the U/L bit to produce a 64-bit interface identifier. For example, 00:11:22:33:44:55 becomes 0211:22ff:fe33:4455. Privacy and stable identifiers are alternatives; a /64 does not guarantee EUI-64 use."
      }
    ]
  },
  "1.10": {
    "id": "1.10",
    "skill": "Verify",
    "title": "Client operating-system IP settings",
    "subtopics": []
  },
  "1.11": {
    "id": "1.11",
    "skill": "Describe",
    "title": "Wireless networking principles",
    "subtopics": [
      {
        "id": "1.11.a",
        "title": "Channel separation and reuse",
        "body": "For common 20 MHz 2.4 GHz deployments, 1, 6 and 11 form a nonoverlapping reuse plan in many regulatory domains. Wider channels consume more spectrum and reduce reuse choices. Band, country, interference and client density influence the design."
      },
      {
        "id": "1.11.b",
        "title": "Wireless network names and service sets",
        "body": "An SSID is the network name clients select. A BSSID identifies a specific basic service set, and several APs can advertise one SSID in an extended service set. A shared name alone does not establish the same security or client VLAN policy."
      },
      {
        "id": "1.11.c",
        "title": "Radio propagation and shared airtime",
        "body": "Signal attenuation, obstacles, reflection, noise, interference and antenna placement affect RF coverage and SNR. Clients share airtime using collision avoidance. Raising AP power does not strengthen a weak client transmitter or guarantee higher capacity."
      },
      {
        "id": "1.11.d",
        "title": "Protecting wireless data",
        "body": "Wireless encryption provides data protection separate from signal strength and SSID visibility. Client and WLAN must negotiate compatible security. Recognize the relationship to WPA/WPA2/WPA3 in objective 5.9 and the WPA2-PSK GUI workflow in 5.10."
      }
    ]
  },
  "1.12": {
    "id": "1.12",
    "skill": "Explain",
    "title": "Virtual machines, containers and VRFs",
    "subtopics": []
  },
  "1.13": {
    "id": "1.13",
    "skill": "Describe",
    "title": "Ethernet switching behavior",
    "subtopics": [
      {
        "id": "1.13.a",
        "title": "Source-MAC learning and entry aging",
        "body": "A switch records the source MAC, ingress interface and VLAN of received frames. Dynamic entries age out unless refreshed by traffic. A MAC table maps MACs to ports/VLANs, while ARP maps an IPv4 address to a neighboring MAC."
      },
      {
        "id": "1.13.b",
        "title": "Forwarding and filtering known destinations",
        "body": "The switch looks up the destination MAC within the frame’s VLAN. A known destination leaves its learned eligible port. If that destination is learned on the ingress port, the frame is filtered rather than sent back onto the same segment."
      },
      {
        "id": "1.13.c",
        "title": "Flooding within a VLAN",
        "body": "Broadcast and unknown-unicast traffic is flooded on eligible forwarding ports in the same VLAN, excluding ingress. VLAN boundaries and STP forwarding state restrict the flood; a switch does not send it across every VLAN or every physical port."
      },
      {
        "id": "1.13.d",
        "title": "Inspecting the switching table",
        "body": "Read the VLAN, MAC, entry type and interface in show mac address-table output. Distinguish static and dynamic entries, aging and learned locations. A learned MAC entry is not evidence of a host’s IP address or of a routed return path."
      }
    ]
  },
  "2.1": {
    "id": "2.1",
    "skill": "Configure and verify",
    "title": "Normal-range VLANs across switches",
    "subtopics": [
      {
        "id": "2.1.a",
        "title": "Endpoint data and phone voice access",
        "body": "Create the VLANs, assign each endpoint access port to its data VLAN and, when appropriate, configure a voice VLAN for a phone. Untagged workstation data and tagged phone voice can share the physical port without becoming one broadcast domain."
      },
      {
        "id": "2.1.b",
        "title": "Default VLAN membership",
        "body": "VLAN 1 is the default Ethernet VLAN on typical Cisco switches. Normal-range IDs are 1–1005, with 1002–1005 commonly reserved for legacy defaults. A default access VLAN and a trunk’s native VLAN are distinct configuration concepts."
      },
      {
        "id": "2.1.c",
        "title": "Communication between VLANs",
        "body": "Different VLANs need Layer 3 forwarding, such as SVIs on a routing switch or tagged router subinterfaces. Configure host gateways and validate both routes and filters. The walkthrough below permits Users and Servers to route while restricting Guests; same-VLAN switching does not traverse an SVI router ACL."
      }
    ]
  },
  "2.2": {
    "id": "2.2",
    "skill": "Configure and verify",
    "title": "Links between switches",
    "subtopics": [
      {
        "id": "2.2.a",
        "title": "Operational trunk links",
        "body": "A trunk transports multiple VLANs on one link. Verify trunk state, allowed VLANs, active VLANs and STP forwarding at both ends. Adding a VLAN to an allowed list does not create it; replacing the list differs from using the add form."
      },
      {
        "id": "2.2.b",
        "title": "IEEE VLAN tagging",
        "body": "802.1Q identifies VLAN membership in tagged Ethernet frames. Match VLAN design and supported trunk configuration on both endpoints. Tags separate Layer 2 traffic; they do not supply encryption or inter-VLAN routing."
      },
      {
        "id": "2.2.c",
        "title": "Untagged traffic and native-VLAN agreement",
        "body": "A typical Cisco 802.1Q trunk sends native-VLAN traffic untagged by default. Both ends must agree so they classify untagged frames consistently. Some platforms support native-VLAN tagging; read the actual configuration and platform behavior."
      }
    ]
  },
  "2.3": {
    "id": "2.3",
    "skill": "Configure and verify",
    "title": "CDP and LLDP discovery",
    "subtopics": []
  },
  "2.4": {
    "id": "2.4",
    "skill": "Configure and verify",
    "title": "Layer 2 and Layer 3 LACP EtherChannels",
    "subtopics": []
  },
  "2.5": {
    "id": "2.5",
    "skill": "Interpret",
    "title": "Rapid PVST+ operation",
    "subtopics": [
      {
        "id": "2.5.a",
        "title": "Root election and port selection",
        "body": "The lowest bridge ID wins root election. A nonroot switch selects a root port by total path cost, then tie-breakers such as sender bridge ID and port IDs. Identify designated, alternate and backup ports and use intended primary/secondary root placement rather than accidental MAC order."
      },
      {
        "id": "2.5.b",
        "title": "Rapid spanning-tree roles and states",
        "body": "RSTP uses discarding, learning and forwarding states. Root/designated ports normally forward while alternate paths provide redundancy. Learning can populate the MAC table without forwarding user frames; a role and a state describe different properties."
      },
      {
        "id": "2.5.c",
        "title": "Rapid forwarding on genuine edge ports",
        "body": "PortFast accelerates an edge port’s transition to forwarding but does not disable STP. Misusing it between switches can create a temporary loop. Apply it to the intended edge design and use suitable BPDU protection."
      },
      {
        "id": "2.5.d",
        "title": "Guard and filtering behavior",
        "body": "BPDU guard normally err-disables a protected edge port on BPDU receipt. Root guard can hold a port root-inconsistent after superior BPDUs; loop guard can hold loop-inconsistent if expected BPDUs vanish. BPDU filtering suppresses BPDUs according to its form and can defeat loop protection if misused."
      }
    ]
  },
  "2.6": {
    "id": "2.6",
    "skill": "Describe",
    "title": "Wireless architectures and AP modes",
    "subtopics": []
  },
  "2.7": {
    "id": "2.7",
    "skill": "Describe",
    "title": "WLAN component connections",
    "subtopics": []
  },
  "2.8": {
    "id": "2.8",
    "skill": "Describe",
    "title": "Network device management access",
    "subtopics": []
  },
  "2.9": {
    "id": "2.9",
    "skill": "Interpret",
    "title": "Wireless controller GUI settings",
    "subtopics": []
  },
  "3.1": {
    "id": "3.1",
    "skill": "Interpret",
    "title": "Routing-table entries",
    "subtopics": [
      {
        "id": "3.1.a",
        "title": "Recognizing the route source",
        "body": "Read codes such as C for connected, L for a local interface address, S for static and O for OSPF. The code tells you how the router learned the entry, not whether that entry matches the current packet best."
      },
      {
        "id": "3.1.b",
        "title": "Reading the destination prefix",
        "body": "The destination prefix identifies the address block covered by the entry. Use both the network value and prefix length; 10.4.8.0/24 does not match 10.4.9.1 simply because both begin with 10.4."
      },
      {
        "id": "3.1.c",
        "title": "Interpreting the network mask",
        "body": "A prefix length or subnet mask marks the significant network bits. A /24 has mask 255.255.255.0, while a /25 covers a smaller block. Do not infer a classful mask when the route provides an explicit CIDR prefix."
      },
      {
        "id": "3.1.d",
        "title": "Resolving the next hop",
        "body": "The next-hop address identifies where the packet should go next, possibly requiring a recursive route lookup and ARP/ND resolution. Read the outgoing interface too. A destination route can exist while next-hop resolution or the return path fails."
      },
      {
        "id": "3.1.e",
        "title": "Administrative-distance field",
        "body": "In IOS [110/20], 110 is administrative distance. AD ranks different sources competing for the same prefix; lower values are preferred. It does not override longest-prefix forwarding among already installed different prefixes."
      },
      {
        "id": "3.1.f",
        "title": "Protocol metric field",
        "body": "In [110/20], 20 is the route metric. Its meaning belongs to the source protocol, such as OSPF cost. Do not directly compare an OSPF metric to another protocol’s differently defined metric."
      },
      {
        "id": "3.1.g",
        "title": "Fallback route selection",
        "body": "The gateway of last resort is associated with a default route, 0.0.0.0/0 for IPv4 or ::/0 for IPv6. It is used when no more-specific installed route matches. Without any matching route, the router drops the packet rather than guessing."
      }
    ]
  },
  "3.2": {
    "id": "3.2",
    "skill": "Determine",
    "title": "Default forwarding decisions",
    "subtopics": [
      {
        "id": "3.2.a",
        "title": "Selecting the most-specific match",
        "body": "Forward a packet using the longest matching installed prefix. A matching /28 beats a /24 even if the /24 came from a source with lower AD. A default /0 is least specific."
      },
      {
        "id": "3.2.b",
        "title": "Comparing competing route sources",
        "body": "For the identical prefix, administrative distance chooses between sources. Static AD 1 normally outranks OSPF AD 110 for that prefix. A route with another prefix length can coexist and participate separately in packet lookup."
      },
      {
        "id": "3.2.c",
        "title": "Selecting paths within a protocol",
        "body": "The routing protocol’s metric selects its preferred path or equal-cost paths for a destination. For OSPF, compare accumulated costs. Separate this route-selection stage from the later longest-prefix decision for a packet."
      }
    ]
  },
  "3.3": {
    "id": "3.3",
    "skill": "Configure and verify",
    "title": "IPv4 and IPv6 static routes",
    "subtopics": [
      {
        "id": "3.3.a",
        "title": "Configuring a default path",
        "body": "Use an IPv4 0.0.0.0/0 or IPv6 ::/0 static destination for otherwise unmatched traffic. Verify next-hop resolution and the return path. A default does not supersede a matching installed more-specific route."
      },
      {
        "id": "3.3.b",
        "title": "Configuring a subnet or aggregate route",
        "body": "A network route covers an aligned prefix rather than one host. Configure the correct mask/prefix and a usable next hop. On Ethernet an IP next hop or fully specified route is clearer than relying on exit-only ARP/proxy-ARP behavior."
      },
      {
        "id": "3.3.c",
        "title": "Configuring a single-host route",
        "body": "Use /32 for one IPv4 host and /128 for one IPv6 host. These are more-specific than covering network routes for the same address. Check that the chosen host destination and next-hop reachability are actually correct."
      },
      {
        "id": "3.3.d",
        "title": "Configuring a floating backup",
        "body": "A backup static route needs an AD higher than the preferred route to the same prefix. For IPv6 link-local next hops include the outgoing interface. A remote failure that leaves the primary next hop resolvable may require tracking; AD alone is not failure detection."
      }
    ]
  },
  "3.4": {
    "id": "3.4",
    "skill": "Configure and verify",
    "title": "Single-area OSPFv2",
    "subtopics": [
      {
        "id": "3.4.a",
        "title": "Forming and verifying neighbors",
        "body": "Check compatible area, addressing where required, timers, authentication and network type. Router IDs must be unique. Read neighbor state: persistent ExStart/Exchange can indicate MTU problems, while two DROthers can legitimately be 2-Way with each other."
      },
      {
        "id": "3.4.b",
        "title": "OSPF on a point-to-point link",
        "body": "A point-to-point network type has no DR/BDR election and supports a full adjacency between its two routers. Configure the intended network type consistently and verify it in interface output. A /30 mask alone does not automatically select OSPF point-to-point behavior on Ethernet."
      },
      {
        "id": "3.4.c",
        "title": "Broadcast segments and DR/BDR elections",
        "body": "On a broadcast network, eligible routers compare interface priority and then router ID. Priority zero excludes an interface from election. An established election is nonpreemptive; a later higher-priority router does not automatically replace the existing DR."
      },
      {
        "id": "3.4.d",
        "title": "OSPF router identity",
        "body": "Prefer an explicit router-id. Otherwise selection normally uses the highest eligible loopback IPv4 address, then the highest eligible nonloopback address at selection time. A router ID is a 32-bit identifier; the local OSPF process number is a different value and need not match neighbors."
      }
    ]
  },
  "3.5": {
    "id": "3.5",
    "skill": "Describe",
    "title": "First-hop redundancy concepts",
    "subtopics": []
  },
  "4.1": {
    "id": "4.1",
    "skill": "Configure and verify",
    "title": "Inside-source NAT: static mappings and pools",
    "subtopics": []
  },
  "4.2": {
    "id": "4.2",
    "skill": "Configure and verify",
    "title": "NTP clients and servers",
    "subtopics": []
  },
  "4.3": {
    "id": "4.3",
    "skill": "Explain",
    "title": "DHCP and DNS roles",
    "subtopics": []
  },
  "4.4": {
    "id": "4.4",
    "skill": "Explain",
    "title": "SNMP in network operations",
    "subtopics": []
  },
  "4.5": {
    "id": "4.5",
    "skill": "Describe",
    "title": "Syslog facilities and severity",
    "subtopics": []
  },
  "4.6": {
    "id": "4.6",
    "skill": "Configure and verify",
    "title": "DHCP clients and relays",
    "subtopics": []
  },
  "4.7": {
    "id": "4.7",
    "skill": "Explain",
    "title": "QoS per-hop forwarding behavior",
    "subtopics": []
  },
  "4.8": {
    "id": "4.8",
    "skill": "Configure",
    "title": "SSH remote access",
    "subtopics": []
  },
  "4.9": {
    "id": "4.9",
    "skill": "Describe",
    "title": "TFTP and FTP capabilities",
    "subtopics": []
  },
  "5.1": {
    "id": "5.1",
    "skill": "Define",
    "title": "Security threats, weaknesses and mitigation",
    "subtopics": []
  },
  "5.2": {
    "id": "5.2",
    "skill": "Describe",
    "title": "Security awareness and physical controls",
    "subtopics": []
  },
  "5.3": {
    "id": "5.3",
    "skill": "Configure and verify",
    "title": "Local-password device access",
    "subtopics": []
  },
  "5.4": {
    "id": "5.4",
    "skill": "Describe",
    "title": "Password policies and authentication alternatives",
    "subtopics": []
  },
  "5.5": {
    "id": "5.5",
    "skill": "Describe",
    "title": "Remote-access and site-to-site IPsec VPNs",
    "subtopics": []
  },
  "5.6": {
    "id": "5.6",
    "skill": "Configure and verify",
    "title": "Access control lists",
    "subtopics": []
  },
  "5.7": {
    "id": "5.7",
    "skill": "Configure and verify",
    "title": "Layer 2 security controls",
    "subtopics": []
  },
  "5.8": {
    "id": "5.8",
    "skill": "Compare",
    "title": "Authentication, authorization and accounting",
    "subtopics": []
  },
  "5.9": {
    "id": "5.9",
    "skill": "Describe",
    "title": "WPA, WPA2 and WPA3 security",
    "subtopics": []
  },
  "5.10": {
    "id": "5.10",
    "skill": "Configure and verify",
    "title": "WPA2-PSK WLANs in a GUI",
    "subtopics": []
  },
  "6.1": {
    "id": "6.1",
    "skill": "Explain",
    "title": "Automation and network management",
    "subtopics": []
  },
  "6.2": {
    "id": "6.2",
    "skill": "Compare",
    "title": "Traditional and controller-based networks",
    "subtopics": []
  },
  "6.3": {
    "id": "6.3",
    "skill": "Describe",
    "title": "Software-defined network architecture",
    "subtopics": [
      {
        "id": "6.3.a",
        "title": "Control decisions versus packet forwarding",
        "body": "The control plane learns/calculates reachability while the data plane forwards using the resulting information. Management configures and observes these functions. Logical separation does not require every user packet to traverse a central controller."
      },
      {
        "id": "6.3.b",
        "title": "Application-facing and device-facing APIs",
        "body": "Northbound interfaces commonly connect applications to controllers; southbound interfaces connect controller functions to network infrastructure. Distinguish the API direction from the underlay transport and overlay data path, and read the actual architecture rather than assuming one protocol fits all controllers."
      }
    ]
  },
  "6.4": {
    "id": "6.4",
    "skill": "Explain",
    "title": "Generative AI, predictive AI and ML in operations",
    "subtopics": []
  },
  "6.5": {
    "id": "6.5",
    "skill": "Describe",
    "title": "REST API characteristics",
    "subtopics": []
  },
  "6.6": {
    "id": "6.6",
    "skill": "Recognize",
    "title": "Ansible and Terraform capabilities",
    "subtopics": []
  },
  "6.7": {
    "id": "6.7",
    "skill": "Recognize",
    "title": "JSON data components",
    "subtopics": []
  }
};
