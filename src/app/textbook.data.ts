export interface TextbookReview {v1:number[];v2:number[];focus:string;sections:{heading:string;body:string}[];exercise:{prompt:string;answer:string}}
export const BOOKS={
1:{title:'Official Cert Guide, Volume 1, Second Edition',isbn:'9780138229634',url:'https://www.ciscopress.com/store/ccna-200-301-official-cert-guide-volume-1-9780138229634'},
2:{title:'Official Cert Guide, Volume 2, Second Edition',isbn:'9780138214951',url:'https://www.ciscopress.com/store/ccna-200-301-official-cert-guide-volume-2-9780138214951'}
} as const;
// Independent topic references, not a claim of full-text textbook equivalence.
export const TEXTBOOK_REVIEWS:Record<string,TextbookReview> = {
  "1.1": {
    "v1": [
      1,
      3
    ],
    "v2": [
      10,
      18
    ],
    "focus": "Layering, encapsulation and device roles",
    "sections": [
      {
        "heading": "Follow the protocol layers",
        "body": "The OSI layers are physical, data link, network, transport, session, presentation and application. TCP/IP groups these into link, internet, transport and application functions. Application data travels inside transport segments/datagrams, IP packets and link frames; each layer serves the layer above it."
      },
      {
        "heading": "Identify the forwarding boundary",
        "body": "A switch learns and forwards inside a VLAN. A router chooses an IP next hop and creates an outgoing frame. A firewall applies policy using state and context; an inline IPS can stop matching threats. PoE requires both adequate per-port capability and sufficient total switch power budget."
      }
    ],
    "exercise": {
      "prompt": "What destination MAC does a host use when sending IPv4 to a remote subnet?",
      "answer": "Its local gateway’s MAC, resolved with ARP. The destination IP still identifies the remote host. Switching the frame and routing the packet are different decisions."
    }
  },
  "1.2": {
    "v1": [
      3
    ],
    "v2": [
      18,
      19,
      20,
      21
    ],
    "focus": "Campus, WAN and cloud design trade-offs",
    "sections": [
      {
        "heading": "Compare paths and failure domains",
        "body": "Access connects endpoints, distribution aggregates and applies policy, and core supplies resilient transit. A collapsed core combines distribution/core. In spine–leaf, each leaf connects to every spine, giving consistent inter-leaf hop counts and possible equal-cost paths."
      },
      {
        "heading": "Distinguish service responsibility",
        "body": "Metro Ethernet may supply Layer 2 connectivity; an MPLS provider may supply a routed VPN. Neither service name promises encryption. IaaS, PaaS and SaaS describe service responsibilities, while Internet VPNs and private WANs describe ways to reach a service."
      }
    ],
    "exercise": {
      "prompt": "Does private addressing alone protect inter-site traffic over an Internet replacement for an MPLS WAN?",
      "answer": "No. Private addresses do not encrypt packets. Evaluate a suitable encrypted VPN, availability, routing and access policy for the Internet path."
    }
  },
  "1.3": {
    "v1": [
      2,
      7
    ],
    "v2": [
      18
    ],
    "focus": "Ethernet standards, framing and media",
    "sections": [
      {
        "heading": "Read the physical standard",
        "body": "Common 10BASE-T/100BASE-TX links use two twisted pairs; 1000BASE-T uses four. Auto-MDIX adapts transmit/receive pair arrangements on supported ports. Fiber choice also depends on wavelength, optical budget, distance, connectors and transceiver compatibility."
      },
      {
        "heading": "Read an Ethernet frame",
        "body": "A frame carries destination/source MACs, type/length, payload and FCS. MAC addresses are 48 bits. Common EtherTypes are 0x0800 for IPv4, 0x86DD for IPv6 and 0x0806 for ARP. FCS detects corruption; it does not repair the frame."
      }
    ],
    "exercise": {
      "prompt": "Why might a copper link work at 100 Mb/s but fail at 1 Gb/s?",
      "answer": "Inspect all four pairs and their terminations. A defect in a pair unused by a two-pair 100BASE-TX link can prevent a four-pair 1000BASE-T link."
    }
  },
  "1.4": {
    "v1": [
      7,
      16,
      20
    ],
    "v2": [],
    "focus": "Interface state and counter interpretation",
    "sections": [
      {
        "heading": "Read both interface states",
        "body": "Administratively down indicates a configured shutdown. Physical down points first to cable, power, optics or remote state. Physical-up/line-protocol-down requires checking the interface’s link-layer behavior. A clean link does not prove that an IP route exists."
      },
      {
        "heading": "Compare new counter growth",
        "body": "Record a baseline, generate controlled traffic and inspect new CRCs, collisions, input errors or output drops. Historical counters can describe an old fault. Compare both endpoints and negotiation; normal full-duplex switched Ethernet does not have collisions."
      }
    ],
    "exercise": {
      "prompt": "Output drops increase while CRCs and collisions stay stable. What should be investigated?",
      "answer": "Egress congestion or queue exhaustion is a stronger hypothesis than damaged media. Check offered load, interface speed and queue counters before replacing cables."
    }
  },
  "1.5": {
    "v1": [
      1
    ],
    "v2": [
      5
    ],
    "focus": "Transport multiplexing and well-known ports",
    "sections": [
      {
        "heading": "Identify a flow and its reliability",
        "body": "IP addresses, transport protocol and source/destination ports identify a transport flow. Clients often use ephemeral source ports. TCP sequence/acknowledgment numbers track bytes and its receive window supplies flow control. UDP itself supplies neither retransmission nor ordered delivery."
      },
      {
        "heading": "Learn behavior with port numbers",
        "body": "Recognize SSH TCP 22, HTTP TCP 80, HTTPS TCP 443, DNS TCP/UDP 53, DHCP UDP 67/68, NTP UDP 123, SNMP UDP 161/162, FTP TCP 21 and initial TFTP UDP 69. A port alone does not prove the application actually running."
      }
    ],
    "exercise": {
      "prompt": "Why can allowing only TCP 443 block a modern HTTPS client?",
      "answer": "HTTP/3 uses QUIC over UDP, commonly UDP 443. A TCP-only rule permits TCP-based HTTPS but does not permit that UDP transport."
    }
  },
  "1.6": {
    "v1": [
      11,
      12,
      13,
      14,
      15
    ],
    "v2": [],
    "focus": "Binary masks, subnet design and VLSM",
    "sections": [
      {
        "heading": "Plan from requirements",
        "body": "Calculate prefix, dotted mask, network, broadcast and host range. For ordinary LANs, choose host bits h so 2^h − 2 meets the requirement. Class A/B/C masks supply historical context; they do not override an explicit CIDR prefix. /31 and /32 require their special interpretations."
      },
      {
        "heading": "Work a VLSM allocation",
        "body": "Inside 192.168.50.0/24, allocate 100 hosts as 192.168.50.0/25, 50 as 192.168.50.128/26 and 20 as 192.168.50.192/27. Each subnet is aligned, inside its parent and nonoverlapping. 192.168.50.224/27 remains available."
      }
    ],
    "exercise": {
      "prompt": "What is the longest equal-subnet prefix for at least 500 traditional usable hosts per subnet of 172.16.0.0/16?",
      "answer": "/23: nine host bits give 510 usable addresses. Seven borrowed bits create 128 equal subnets. A /24 supplies only 254 usable hosts."
    }
  },
  "1.7": {
    "v1": [
      11,
      12
    ],
    "v2": [
      14
    ],
    "focus": "Private, public and special-use IPv4",
    "sections": [
      {
        "heading": "Avoid allocation shortcuts",
        "body": "RFC 1918 reserves specific blocks, not every address beginning with 172 or 192. Outside those blocks does not automatically mean usable public unicast: loopback, link-local, multicast and documentation allocations have other purposes. Site examples use documentation ranges such as 192.0.2.0/24."
      },
      {
        "heading": "Connect addressing to translation",
        "body": "Private hosts can reach public services with suitable routing and NAT, but translation is separate from filtering. Overlapping private prefixes complicate merged networks and may require renumbering or NAT. VRFs isolate routing contexts but do not automatically connect them."
      }
    ],
    "exercise": {
      "prompt": "Are 172.31.255.254 and 172.32.0.1 in the same RFC 1918 block?",
      "answer": "No. 172.31.255.254 is inside 172.16.0.0/12; 172.32.0.1 is outside. Do not infer its complete allocation status solely from that comparison."
    }
  },
  "1.8": {
    "v1": [
      25,
      26,
      27,
      28
    ],
    "v2": [],
    "focus": "IPv6 prefix math and router discovery",
    "sections": [
      {
        "heading": "Calculate IPv6 subnets",
        "body": "A hexadecimal digit represents four bits. A /48 contains 65,536 /64 subnets because 16 bits remain for the subnet ID. IPv6 has no broadcast subtraction. Compression removes leading zeros and replaces at most one contiguous zero run with ::."
      },
      {
        "heading": "Separate addresses and default routes",
        "body": "SLAAC uses RA prefix information; Duplicate Address Detection checks a candidate address. Stateful DHCPv6 can allocate addresses and stateless DHCPv6 supplies other settings. Hosts normally learn their default router from RAs, not DHCPv6."
      }
    ],
    "exercise": {
      "prompt": "A client has a DHCPv6 address and DNS but no default route. What should be checked?",
      "answer": "Router advertisements, their router lifetime and filtering of required ICMPv6 traffic. A DHCPv6 lease does not by itself install the default gateway."
    }
  },
  "1.9": {
    "v1": [
      25,
      27,
      28
    ],
    "v2": [],
    "focus": "Neighbor Discovery and address scope",
    "sections": [
      {
        "heading": "Replace broadcast assumptions",
        "body": "ICMPv6 Neighbor Solicitation/Advertisement support neighbor address resolution and reachability. Solicited-node multicast uses ff02::1:ff00:0/104. This narrows receivers compared with an IPv4 ARP broadcast; it is not a normal unicast destination."
      },
      {
        "heading": "Apply scope correctly",
        "body": "A link-local next hop needs interface context because identical fe80:: addresses can exist on different links. Anycast uses unicast-format addresses on multiple nodes, with routing choosing an instance. Modified EUI-64 inserts FFFE and flips the U/L bit; other interface-ID methods are common."
      }
    ],
    "exercise": {
      "prompt": "Why is ping fe80::1 ambiguous on a router with multiple Ethernet interfaces?",
      "answer": "The destination has link scope. Supply the outgoing interface or zone to identify which link contains the intended neighbor."
    }
  },
  "1.10": {
    "v1": [
      19,
      20,
      28
    ],
    "v2": [],
    "focus": "Host forwarding and return-path diagnosis",
    "sections": [
      {
        "heading": "Trace the host decision",
        "body": "A host compares the destination with its own prefix. It resolves a local destination directly, or resolves a selected gateway for a remote destination. A wrong mask can make it ARP for a remote host rather than use its gateway; inspect the selected route and neighbor table."
      },
      {
        "heading": "Test both directions",
        "body": "Ping needs a request and a returning reply. Extended ping with a client-facing source can expose a missing return route hidden by a WAN-sourced test. Traceroute uses TTL/Hop Limit expiration responses; absent replies may also reflect filtering."
      }
    ],
    "exercise": {
      "prompt": "Why can a router ping a server from its WAN IP but not its LAN IP?",
      "answer": "Check the remote route and policy back to the LAN prefix. The successful WAN-sourced test proves a different return path, not end-to-end client reachability."
    }
  },
  "1.11": {
    "v1": [],
    "v2": [
      1,
      3
    ],
    "focus": "Wireless topology, contention and RF",
    "sections": [
      {
        "heading": "Distinguish BSS and ESS",
        "body": "A BSS includes an AP radio and its associated clients; an ESS joins BSSs through a distribution system. Several BSSIDs can advertise the same SSID. An independent BSS is ad hoc rather than an infrastructure AP arrangement."
      },
      {
        "heading": "Understand shared airtime",
        "body": "802.11 uses collision avoidance, backoff and acknowledgments. Channel overlap, SNR, interference and airtime contention affect throughput. Wider channels consume more spectrum. Raising AP power does not increase a weak client transmitter’s power."
      }
    ],
    "exercise": {
      "prompt": "Why might adding APs on the same channel fail to increase throughput?",
      "answer": "Devices can contend for the same airtime. Revisit channel reuse, placement, power, client load and interference rather than assuming AP count adds independent capacity."
    }
  },
  "1.12": {
    "v1": [],
    "v2": [
      20
    ],
    "focus": "Virtual switching and cloud service responsibility",
    "sections": [
      {
        "heading": "Follow virtual networking",
        "body": "VM virtual NICs connect through virtual switches and possibly physical uplinks. VLAN policy in the hypervisor and physical trunk must agree. Containers share a host kernel; VMs have separate guest kernels, giving different overhead and isolation boundaries."
      },
      {
        "heading": "Compare logical isolation",
        "body": "IaaS supplies infrastructure resources, PaaS an application platform and SaaS the application. VRFs separate routing tables and can permit overlapping addresses; connecting VRFs needs a deliberate route-leaking or service design rather than shared hardware alone."
      }
    ],
    "exercise": {
      "prompt": "Does a shared physical uplink remove the boundary between two virtual VLANs?",
      "answer": "No. Correct trunking preserves VLAN separation. Communication between their subnets still requires the intended routing and security policy."
    }
  },
  "1.13": {
    "v1": [
      2,
      5
    ],
    "v2": [],
    "focus": "MAC-table decisions and per-hop encapsulation",
    "sections": [
      {
        "heading": "Apply the switching decision",
        "body": "Learn the source MAC, incoming port and VLAN; look up the destination within that VLAN. Known destinations use their learned port, same-ingress destinations are filtered, and unknown destinations flood eligible forwarding ports. A blocked STP port is not eligible merely because it belongs to the VLAN."
      },
      {
        "heading": "Distinguish router forwarding",
        "body": "A router removes the incoming frame, selects a route, decrements TTL/Hop Limit and creates outgoing encapsulation. On Ethernet it resolves the next-hop MAC. Without NAT or tunneling, endpoint IPs stay the same while MAC addresses change at routed hops."
      }
    ],
    "exercise": {
      "prompt": "A destination MAC is learned on the same port on which the frame arrived. What happens?",
      "answer": "The switch filters the frame rather than returning it to that ingress port or flooding it. The destination is already on the incoming segment."
    }
  },
  "2.1": {
    "v1": [
      8,
      18
    ],
    "v2": [],
    "focus": "VLAN membership versus routed policy",
    "sections": [
      {
        "heading": "Build the complete chain",
        "body": "Check source subnet/gateway, access VLAN, trunks, destination VLAN and return gateway. A data/voice port may carry untagged workstation data and tagged phone voice. The voice VLAN alone does not set the phone’s address, QoS trust or routed security policy."
      },
      {
        "heading": "Compare routing designs",
        "body": "An SVI supplies a VLAN gateway on a routing-capable switch; router-on-a-stick uses tagged router subinterfaces. Both need correct gateways and return paths. Intra-VLAN switching does not traverse a router SVI ACL; inter-VLAN routing does."
      }
    ],
    "exercise": {
      "prompt": "If VLAN 10 hosts reach each other but cannot reach VLAN 20, has routing already been proved?",
      "answer": "No. Local switching can work without routing. Check both gateways, ip routing or router subinterfaces, routed filters and return paths separately."
    }
  },
  "2.2": {
    "v1": [
      8
    ],
    "v2": [],
    "focus": "Trunk negotiation and operational VLAN checks",
    "sections": [
      {
        "heading": "Read operational state",
        "body": "An allowed list does not prove that a VLAN exists, is active or is forwarding across the trunk. Inspect trunk operation, allowed VLANs, active VLANs and STP forwarding together. Creating a VLAN and transporting it across a trunk are separate actions."
      },
      {
        "heading": "Avoid replacing the allowed list",
        "body": "switchport trunk allowed vlan 10,20 replaces the list; add/remove modify it incrementally. On DTP-capable ports desirable initiates while auto waits; auto/auto does not form a trunk. Explicit trunking with nonegotiate avoids relying on negotiation."
      }
    ],
    "exercise": {
      "prompt": "How do you add VLAN 30 to an existing allowed list without replacing VLANs 10 and 20?",
      "answer": "Use switchport trunk allowed vlan add 30. Verify VLAN existence and forwarding on both switches and every intervening trunk."
    }
  },
  "2.3": {
    "v1": [],
    "v2": [
      13
    ],
    "focus": "Interpret neighbor advertisements as evidence",
    "sections": [
      {
        "heading": "Read the advertised fields",
        "body": "Compare device ID, local interface, remote port ID, capabilities, platform and management address. An advertised management address does not prove that current VLANs, routes and filters permit reaching it."
      },
      {
        "heading": "Check scope and direction",
        "body": "LLDP transmit and receive can be controlled independently. CDP/LLDP discover directly connected Layer 2 neighbors; LLDP-MED adds endpoint information such as voice policy. Discovery neither authenticates a neighbor nor validates the entire topology."
      }
    ],
    "exercise": {
      "prompt": "LLDP sees a neighbor but its management IP cannot be pinged. Is discovery disproved?",
      "answer": "No. Layer 2 advertisements can work while management addressing, VLAN membership, routing or security policy prevents IP reachability."
    }
  },
  "2.4": {
    "v1": [
      10,
      18
    ],
    "v2": [],
    "focus": "Bundling compatibility and logical forwarding",
    "sections": [
      {
        "heading": "Troubleshoot members",
        "body": "Check compatible speed, duplex, negotiation, Layer 2/3 mode and VLAN settings. Individual or suspended members differ from bundled members. A port-channel can exist without every intended member participating; inspect the member flags and both endpoints."
      },
      {
        "heading": "Connect bundling to STP and routing",
        "body": "STP treats a Layer 2 port-channel as one logical link. A routed port-channel places the address on the logical interface and uses routed members. Hashing distributes flows; a single flow normally remains limited to one physical member’s bandwidth."
      }
    ],
    "exercise": {
      "prompt": "Both endpoints use LACP passive. Why does the bundle not negotiate?",
      "answer": "Neither peer initiates negotiation. Set at least one side to active, then verify compatible members and bundled state."
    }
  },
  "2.5": {
    "v1": [
      9,
      10
    ],
    "v2": [],
    "focus": "STP elections, roles and protection behavior",
    "sections": [
      {
        "heading": "Select the root path in order",
        "body": "Elect the lowest bridge ID per VLAN. A nonroot switch selects the lowest total cost toward the root; ties use sender bridge ID, sender port ID and, if needed, local port ID. Each segment elects a designated port; alternate and backup describe different redundant paths."
      },
      {
        "heading": "Distinguish protections",
        "body": "BPDU guard normally err-disables a protected edge port receiving a BPDU. Root guard can hold root-inconsistent on superior BPDUs; loop guard can hold loop-inconsistent when expected BPDUs vanish. BPDU filtering suppresses BPDUs according to its configuration form and can undermine loop prevention."
      }
    ],
    "exercise": {
      "prompt": "Does PortFast disable spanning tree or make switch-to-switch loops harmless?",
      "answer": "No. It speeds an edge transition while STP remains relevant. A temporary loop can occur when an edge port is misused; apply the appropriate edge design and BPDU protection."
    }
  },
  "2.6": {
    "v1": [],
    "v2": [
      2
    ],
    "focus": "Wireless management and data-path placement",
    "sections": [
      {
        "heading": "Understand split MAC",
        "body": "Lightweight APs perform time-sensitive radio work while controllers coordinate centralized functions. CAPWAP commonly uses UDP 5246 for control and 5247 for data. User traffic need not always traverse a controller: forwarding depends on architecture and switching policy."
      },
      {
        "heading": "Read AP mode first",
        "body": "Local mode normally serves centrally switched clients; FlexConnect can switch locally at a branch. Monitor and sniffer modes are for observation rather than ordinary client service. Autonomous and cloud-managed designs assign control and configuration responsibilities differently."
      }
    ],
    "exercise": {
      "prompt": "A monitor-mode AP has a reachable management IP. Should normal clients necessarily connect?",
      "answer": "No. Its mode can intentionally exclude ordinary WLAN service. Verify the selected mode and intended client/data-path design."
    }
  },
  "2.7": {
    "v1": [],
    "v2": [
      2,
      4
    ],
    "focus": "Physical links, LAG and WLAN-to-VLAN paths",
    "sections": [
      {
        "heading": "Put tags on the intended path",
        "body": "A centrally switched AP can use an access port for management/CAPWAP while the WLC uplink carries client VLANs. FlexConnect local switching may need a trunk at the AP. Port mode follows architecture rather than one universal AP rule."
      },
      {
        "heading": "Separate aggregation from mapping",
        "body": "A WLC LAG combines physical links, and the switch-side bundle must agree with supported settings. A trunk transports VLANs; it does not map an SSID to a policy. On 9800, the WLAN, policy profile, policy tag and AP assignment establish that relationship."
      }
    ],
    "exercise": {
      "prompt": "Only one centrally switched WLAN fails DHCP. Which path should be traced?",
      "answer": "The mapped client VLAN from the controller uplink to its DHCP service or relay. A healthy AP management VLAN does not validate that client path."
    }
  },
  "2.8": {
    "v1": [
      4,
      6,
      16
    ],
    "v2": [
      10
    ],
    "focus": "CLI modes, persistence and access transport",
    "sections": [
      {
        "heading": "Know the configuration lifecycle",
        "body": "User/privileged EXEC and global/interface/line configuration modes accept different commands. running-config is active; startup-config supplies saved boot configuration. end exits configuration mode but does not save changes. Save validated changes with copy running-config startup-config."
      },
      {
        "heading": "Separate transport and identity",
        "body": "SSH/HTTPS protects a session, while local accounts or AAA govern identity and permissions. Console access can offer an IP-independent recovery path. A Layer 2 management SVI needs an appropriate default gateway; a routing switch uses its routing table."
      }
    ],
    "exercise": {
      "prompt": "A change works until reboot. What step may be missing?",
      "answer": "Saving validated running-config to startup-config. Also confirm the save succeeded and the device booted the intended configuration."
    }
  },
  "2.9": {
    "v1": [],
    "v2": [
      4
    ],
    "focus": "Interpret controller GUI object relationships",
    "sections": [
      {
        "heading": "Read Catalyst 9800 objects",
        "body": "The WLAN profile defines SSID/security; the policy profile includes client VLAN/policy; a policy tag maps WLAN to policy; and an AP receives that tag. Enable the relevant objects. A correct unassigned WLAN does not establish the configuration actually used by an AP."
      },
      {
        "heading": "Recognize AireOS and QoS",
        "body": "AireOS uses dynamic interfaces and WLAN interface mappings rather than the identical 9800 tag model. Read the controller family before following menus. WMM distinguishes voice, video, best effort and background; switching and advanced authentication settings must suit the design."
      }
    ],
    "exercise": {
      "prompt": "The SSID/PSK works but clients enter the wrong subnet. What relationship matters?",
      "answer": "Inspect the WLAN-to-policy mapping, policy VLAN and AP policy tag on 9800; inspect the WLAN’s dynamic-interface mapping on AireOS."
    }
  },
  "3.1": {
    "v1": [
      17,
      24,
      29
    ],
    "v2": [],
    "focus": "Route entries and recursive next-hop resolution",
    "sections": [
      {
        "heading": "Read every field",
        "body": "C represents a connected prefix; L a local /32 or /128 on the router. S denotes static and O denotes OSPF. Prefix, source, administrative distance, metric, next hop and egress interface answer distinct questions rather than forming one universal preference number."
      },
      {
        "heading": "Resolve the next hop",
        "body": "A route may require a second lookup to find its outgoing interface. ARP/ND then supports next-hop delivery on Ethernet. A route in the table does not prove working neighbor resolution, a permissive security policy or a return path."
      }
    ],
    "exercise": {
      "prompt": "Why can a /32 local route appear beside a connected /24?",
      "answer": "The /32 identifies traffic addressed to the router itself. The /24 identifies the attached subnet used for forwarding to other hosts."
    }
  },
  "3.2": {
    "v1": [
      21,
      24
    ],
    "v2": [],
    "focus": "Route installation versus packet lookup",
    "sections": [
      {
        "heading": "Compare sources for one prefix",
        "body": "For competing identical prefixes, administrative distance ranks route sources and the selected protocol’s metric ranks paths. A static /24 AD 1 can displace an OSPF /24 AD 110. A /25 is a different route and may coexist with the /24."
      },
      {
        "heading": "Forward with the longest match",
        "body": "A matching installed /25 wins over an installed /24 even if its source has a higher AD. The packet lookup compares prefix specificity among matching routes. If no route, including a default, matches, the router drops rather than inventing a next hop."
      }
    ],
    "exercise": {
      "prompt": "Installed routes are 10.0.0.0/8, 10.4.0.0/16 and 10.4.8.0/24. What best matches 10.4.9.1?",
      "answer": "10.4.0.0/16. The /24 for 10.4.8.x does not match this destination at all."
    }
  },
  "3.3": {
    "v1": [
      17,
      29
    ],
    "v2": [],
    "focus": "Route types and real backup activation",
    "sections": [
      {
        "heading": "Choose a next-hop form",
        "body": "IPv4 host routes use /32; IPv6 host routes /128. A link-local IPv6 next hop needs an outgoing interface. On multiaccess Ethernet an exit-only route can create per-destination ARP/proxy-ARP behavior; a reachable next-hop address or fully specified form is usually clearer."
      },
      {
        "heading": "Understand backup limits",
        "body": "A floating route needs a higher AD than the preferred route to the same prefix. It activates when the primary is withdrawn or unresolved. A remote failure can leave the primary next hop reachable, requiring tracking in a real design. The backup path also needs a return route."
      }
    ],
    "exercise": {
      "prompt": "Will a static route AD 5 float behind OSPF AD 110 for the same prefix?",
      "answer": "No. AD 5 is preferred. A backup needs an AD above 110, such as 200, with a usable alternate path."
    }
  },
  "3.4": {
    "v1": [
      21,
      22,
      23,
      24
    ],
    "v2": [],
    "focus": "OSPF adjacency states and configuration meaning",
    "sections": [
      {
        "heading": "Interpret adjacency state",
        "body": "A typical progression is Down, Init, 2-Way, ExStart, Exchange, Loading and Full. Two DROthers on a broadcast network can normally remain 2-Way with each other and Full with DR/BDR. Persistent ExStart/Exchange calls for checks including MTU and network-type compatibility."
      },
      {
        "heading": "Know what configuration selects",
        "body": "The process ID is local and need not match neighbors. network statements select local interfaces by address/wildcard and assign an area; ip ospf 1 area 0 is an interface-based alternative. Router ID selection prefers explicit configuration, then highest eligible loopback IPv4, then nonloopback IPv4 at selection time. OSPFv2 uses IP protocol 89, not TCP port 89."
      }
    ],
    "exercise": {
      "prompt": "Must neighbors using OSPF process 1 and 10 change those numbers to match?",
      "answer": "No. Check actual neighbor requirements such as area, compatible addressing, timers and interface operation. The process ID is a local identifier."
    }
  },
  "3.5": {
    "v1": [],
    "v2": [
      16
    ],
    "focus": "Virtual gateways, tracking and load sharing",
    "sections": [
      {
        "heading": "Follow the virtual identity",
        "body": "A client resolves the virtual gateway IP to a virtual MAC. HSRP changes which router forwards for that identity. Preemption controls whether a recovered higher-priority router retakes the role. Tracking can reduce priority after an upstream failure while the client-facing link remains up."
      },
      {
        "heading": "Compare protocol families",
        "body": "VRRP elects an active/master role and backups. GLBP can give different virtual MACs to clients for load sharing. FHRP protects the first hop; it does not replace resilient routing and upstream connectivity. Conceptual comparison is useful even when full deployment is outside the blueprint verb."
      }
    ],
    "exercise": {
      "prompt": "Why can clients be blackholed after only the active gateway’s upstream fails?",
      "answer": "Without suitable tracking/failure detection, that router may retain the active role. A healthy client-facing interface alone does not prove upstream reachability."
    }
  },
  "4.1": {
    "v1": [],
    "v2": [
      14
    ],
    "focus": "NAT identities, capacity and policy",
    "sections": [
      {
        "heading": "Read local and global correctly",
        "body": "Inside local describes the inside host internally; inside global describes its translated external identity. A dynamic pool without overload needs an available global address for each simultaneously translated inside address. PAT distinguishes flows sharing a global address using transport information."
      },
      {
        "heading": "Validate both directions",
        "body": "Inspect inside/outside roles, classification, translations created by real test traffic and return routing. A NAT ACL selects translation; denying translation does not automatically drop a packet. Clearing stale translations can affect active sessions and needs appropriate lab scope."
      }
    ],
    "exercise": {
      "prompt": "A dynamic pool has ten global addresses without overload. Why might an eleventh active host fail?",
      "answer": "There may be no free one-to-one mapping. Check pool utilization and whether the intended design needs more addresses or suitable PAT."
    }
  },
  "4.2": {
    "v1": [],
    "v2": [
      13
    ],
    "focus": "NTP hierarchy, trust and synchronization",
    "sections": [
      {
        "heading": "Read association state",
        "body": "Inspect peer selection, reachability, offset and synchronized status. Strata 1–15 describe synchronized hierarchy levels; stratum 16 indicates an unsynchronized condition. An NTP server can itself be an upstream client, and a low stratum is not a trust guarantee."
      },
      {
        "heading": "Separate time display from reference",
        "body": "Timezone changes local display, not synchronization. A lab ntp master can distribute a wrong clock consistently if treated as an authoritative source. Match supported authentication and access policy at both endpoints and verify the reference itself."
      }
    ],
    "exercise": {
      "prompt": "Can devices agree on time and all be wrong?",
      "answer": "Yes. They may be synchronized to the same inaccurate source. Agreement among clients does not establish reference accuracy."
    }
  },
  "4.3": {
    "v1": [
      19,
      28
    ],
    "v2": [
      5
    ],
    "focus": "DHCP lease stages and DNS resolution",
    "sections": [
      {
        "heading": "Follow a lease beyond DORA",
        "body": "DORA describes a common initial IPv4 lease. During renewal a client can unicast to its server; rebinding can seek another server. Address, mask, gateway, DNS options and lease state all matter. Link-local assignment warrants investigation rather than assuming a valid routed enterprise lease."
      },
      {
        "heading": "Separate names from application access",
        "body": "A resolver may answer from cache until TTL expiry or obtain an answer from other servers. A/AAAA resolution does not prove that an application transport is reachable. PTR reverse lookup is separate from forward name-to-address resolution."
      }
    ],
    "exercise": {
      "prompt": "A hostname resolves but HTTPS times out. Is changing DNS necessarily the next step?",
      "answer": "No. Verify the returned address, then the route, security filters, transport and server. A name answer alone does not prove application reachability."
    }
  },
  "4.4": {
    "v1": [],
    "v2": [
      17
    ],
    "focus": "SNMP operations, views and security levels",
    "sections": [
      {
        "heading": "Compare polling and notifications",
        "body": "Get/GetNext/GetBulk retrieve managed values; Set changes writable objects. OIDs identify objects in the MIB. Traps lack acknowledgments while informs request them. Notifications complement polling rather than automatically forming a complete counter history."
      },
      {
        "heading": "Apply the actual protection level",
        "body": "SNMPv3 noAuthNoPriv, authNoPriv and authPriv provide different protection. Authentication does not imply encryption. Restrict manager sources, permitted views and write capability. Community-based v1/v2c is useful to recognize in older material; current secure designs need appropriate v3 protection."
      }
    ],
    "exercise": {
      "prompt": "Does authNoPriv hide monitored counters from traffic observers?",
      "answer": "No. It authenticates messages but does not supply payload privacy. Properly configured authPriv adds encryption."
    }
  },
  "4.5": {
    "v1": [],
    "v2": [
      13
    ],
    "focus": "Syslog fields, destinations and severity",
    "sections": [
      {
        "heading": "Read the message and destination",
        "body": "Cisco messages commonly use %FACILITY-SEVERITY-MNEMONIC. Console, buffered, remote and terminal-monitor logging are distinct destinations. A message facility/mnemonic and a remote syslog facility setting are not the numeric severity."
      },
      {
        "heading": "Apply numerical thresholds",
        "body": "Levels are 0 emergency, 1 alert, 2 critical, 3 error, 4 warning, 5 notification, 6 informational and 7 debugging. A threshold includes its number and lower numbers. Debugging can be expensive; scope it narrowly and stop after collecting the required evidence."
      }
    ],
    "exercise": {
      "prompt": "Which severities does logging trap notifications send?",
      "answer": "0 through 5 inclusive. Informational 6 and debugging 7 are excluded; other logging destinations can have separate thresholds."
    }
  },
  "4.6": {
    "v1": [
      6,
      19
    ],
    "v2": [],
    "focus": "Relay placement and DHCP client roles",
    "sections": [
      {
        "heading": "Trace a relayed request",
        "body": "A client broadcasts locally. A relay on the client-facing routed interface forwards to the server and supplies gateway information so the server selects a pool. The server needs a usable return path and a correctly scoped pool."
      },
      {
        "heading": "Keep client, relay and server distinct",
        "body": "ip address dhcp makes an interface a DHCP client; ip helper-address supplies relay behavior. Neither automatically configures a DHCP server. A Layer 2 switch management client may still need an appropriate default gateway for remote reachability."
      }
    ],
    "exercise": {
      "prompt": "Does a VLAN 20 access port normally receive the helper-address command?",
      "answer": "No. Configure the relay on VLAN 20’s Layer 3 gateway interface or SVI, which receives the client broadcasts and identifies the client subnet."
    }
  },
  "4.7": {
    "v1": [],
    "v2": [
      15
    ],
    "focus": "QoS marking fields and delay/loss trade-offs",
    "sections": [
      {
        "heading": "Keep markings distinct",
        "body": "DSCP is a six-bit IP marking; CoS/PCP is three bits in an 802.1Q tag. EF commonly uses DSCP 46, with AF/class-selector values for other behaviors. CoS 5 is not the same encoded field as DSCP 46, although a policy can map them."
      },
      {
        "heading": "Understand congestion behavior",
        "body": "Delay is transit time, jitter is delay variation, and loss is missing traffic. Bounded priority scheduling manages contention. Policing drops/remarks excess traffic; shaping buffers it for later transmission. Congestion avoidance can drop selectively before queues fill to influence responsive flows."
      }
    ],
    "exercise": {
      "prompt": "Why can shaping meet a WAN rate while increasing voice delay?",
      "answer": "Excess packets wait in a queue. The shaping rate, burst interval, queue design and priority policy must balance conformance with latency."
    }
  },
  "4.8": {
    "v1": [
      6
    ],
    "v2": [
      10
    ],
    "focus": "SSH prerequisites and management filtering",
    "sections": [
      {
        "heading": "Verify the access chain",
        "body": "SSH needs operational management addressing, routes, server keys, supported protocol settings, authentication and VTY policy. A password or key alone does not establish a reachable encrypted service. Configure the intended VTY range for the specific platform."
      },
      {
        "heading": "Distinguish control locations",
        "body": "A VTY access-class restricts login sources; ip access-group on an interface filters packets through that interface. These are different policy locations. Verify allowed sources and recovery access before changing remote authentication or filtering."
      }
    ],
    "exercise": {
      "prompt": "Old management clients use SSH successfully but a new subnet cannot. What should be inspected?",
      "answer": "The VTY access-class source matches, routing and any interface ACLs. Regenerating working server keys is not the first response to a source-specific policy problem."
    }
  },
  "4.9": {
    "v1": [],
    "v2": [
      17
    ],
    "focus": "Transfer data channels and image validation",
    "sections": [
      {
        "heading": "Know both transfer channels",
        "body": "FTP has a TCP control connection and a separate data connection. Active data commonly originates from server TCP 20; passive data uses a server-advertised port. TFTP starts at UDP 69 then uses negotiated transfer ports. These legacy protocols do not provide confidentiality."
      },
      {
        "heading": "Separate copying from upgrading",
        "body": "Verify platform/image compatibility, available storage, vendor-published integrity value, boot settings and installation procedure. Successful copying does not prove an image is appropriate or will boot. Prefer supported secure transfer methods for current deployments."
      }
    ],
    "exercise": {
      "prompt": "Why is allowing TCP 21 alone sometimes insufficient for FTP?",
      "answer": "It allows control, while the selected active/passive mode also needs a suitable data connection and compatible firewall/NAT handling."
    }
  },
  "5.1": {
    "v1": [],
    "v2": [
      9,
      10
    ],
    "focus": "Threat categories and control purpose",
    "sections": [
      {
        "heading": "Classify the event",
        "body": "Spoofing changes apparent identity, reconnaissance gathers information, denial of service targets availability and a man-in-the-middle can observe or alter traffic. Threat, vulnerability, exploit and business impact describe different parts of risk."
      },
      {
        "heading": "Place controls deliberately",
        "body": "Preventive controls reduce likelihood, detective controls identify events and corrective controls limit/repair damage. Patching, segmentation, identity controls, backups and monitoring address different failures. An inline IPS can prevent matching traffic; detection alone does not imply blocking."
      }
    ],
    "exercise": {
      "prompt": "Does an alert about failed logins establish that guessing was prevented?",
      "answer": "No. The alert is detective evidence. Check separate preventive controls, authentication outcomes and any successful sessions."
    }
  },
  "5.2": {
    "v1": [],
    "v2": [
      9
    ],
    "focus": "People, physical access and incident workflow",
    "sections": [
      {
        "heading": "Make policy operational",
        "body": "Awareness, onboarding, offboarding, least privilege and reporting must agree with actual account lifecycle actions. A policy document alone does not revoke an ex-employee’s sessions. Users need a trusted way to report incidents without exposing credentials."
      },
      {
        "heading": "Protect physical dependencies",
        "body": "Control access to racks, closets, consoles, removable media and power. Badges, visitor checks and anti-tailgating complement locks. Environmental and power failures can affect availability without a malicious actor."
      }
    ],
    "exercise": {
      "prompt": "What should offboarding include besides collecting a door badge?",
      "answer": "Revoke or expire relevant logical accounts, VPN access, keys and sessions; review shared credential ownership and the associated records."
    }
  },
  "5.3": {
    "v1": [
      4,
      6
    ],
    "v2": [
      10
    ],
    "focus": "Password storage versus transport protection",
    "sections": [
      {
        "heading": "Distinguish storage formats",
        "body": "One-way hashes permit secret verification without plaintext storage. Type 7 is reversible legacy obfuscation. Type 8/9 are stronger supported secret hashes; type 6 is reversible AES encryption for recoverable credentials. Storage protection does not encrypt a Telnet session."
      },
      {
        "heading": "Read version context",
        "body": "Recognize older line-password and service password-encryption examples for exam interpretation. Current IOS XE defaults and permitted syntax vary by release. Use supported strong secrets and platform-labeled guides; a textbook-era configuration is not a universal current-image template."
      }
    ],
    "exercise": {
      "prompt": "Does changing an enable password to a strong secret make Telnet confidential?",
      "answer": "No. Credential storage and the management transport are separate. Use an appropriate encrypted transport such as SSH for the session."
    }
  },
  "5.4": {
    "v1": [],
    "v2": [
      9,
      10
    ],
    "focus": "Authentication factors and credential lifecycle",
    "sections": [
      {
        "heading": "Identify independent proof",
        "body": "Knowledge, possession and inherence describe what is proven, not the number of prompts. Password plus PIN remains two knowledge secrets. A certificate-backed key can prove private-key possession; displaying a public certificate alone cannot."
      },
      {
        "heading": "Plan recovery and revocation",
        "body": "Unique long secrets, controlled resets, protected keys, validity checks and revocation all matter. Biometrics are difficult to replace after compromise, making enrollment and fallback important. Password managers improve unique-secret handling without removing access-control requirements."
      }
    ],
    "exercise": {
      "prompt": "Why is an unattended authenticated session risky even after an MFA login?",
      "answer": "MFA establishes identity at an event. Session protection, authorization, idle timeouts, endpoint security and revocation still govern subsequent access."
    }
  },
  "5.5": {
    "v1": [],
    "v2": [
      19
    ],
    "focus": "IPsec protection and two-way verification",
    "sections": [
      {
        "heading": "Separate outer and inner packets",
        "body": "Tunnel mode carries an inner packet inside an outer packet addressed between gateways. ESP protection depends on the negotiated suite. IKE negotiates keys and associations; successful negotiation does not prove that the intended client traffic matches the protection policy."
      },
      {
        "heading": "Verify the data path",
        "body": "Check security associations, both-direction counters, routes, selectors, ACLs and MTU. Remote-access protects an endpoint’s organizational access; site-to-site protects network traffic through gateways. An IPsec tunnel is not just any encrypted application session."
      }
    ],
    "exercise": {
      "prompt": "The tunnel is established but encrypted-packet counters stay zero during a client test. What next?",
      "answer": "Check whether the client route sends traffic to the gateway and whether its addresses match the VPN selectors/policy. Control-plane success does not demonstrate encrypted data forwarding."
    }
  },
  "5.6": {
    "v1": [],
    "v2": [
      6,
      7,
      8
    ],
    "focus": "ACL order, scope and infrastructure traffic",
    "sections": [
      {
        "heading": "Evaluate first-match order",
        "body": "Process entries from top to bottom and stop at the first match. Wildcard zero bits must match; one bits are ignored. A broad permit can shadow a later deny. Standard IPv4 ACLs match sources; extended ACLs add protocol, destination and supported ports."
      },
      {
        "heading": "Preserve required return traffic",
        "body": "A stateless ACL does not automatically allow return sessions. DNS may use UDP/TCP; OSPFv2 is IP protocol 89; DHCP has specific client/server behavior. TCP established checks ACK/RST rather than building full firewall state. VTY access-class protects login, not arbitrary transit traffic."
      }
    ],
    "exercise": {
      "prompt": "Will a TCP 22 deny below a broad permit for the same source subnet block SSH?",
      "answer": "No. The earlier permit already matches. Put the intended specific rule first, then verify attachment, direction and hit counters."
    }
  },
  "5.7": {
    "v1": [],
    "v2": [
      11,
      12
    ],
    "focus": "Independent trust settings and static-host bindings",
    "sections": [
      {
        "heading": "Keep trust controls separate",
        "body": "DHCP snooping trust permits legitimate server messages on a chosen interface; DAI trust bypasses incoming ARP inspection on its chosen interface. Neither automatically configures the other. Ordinary client ports should not be trusted merely to suppress symptoms."
      },
      {
        "heading": "Plan exceptions and recovery",
        "body": "DAI normally uses DHCP snooping bindings; static hosts need an appropriate validated design such as an ARP ACL. Port-security protect/restrict/shutdown have different notification and err-disable outcomes. Sticky entries persist across reboot only when the relevant configuration is saved."
      }
    ],
    "exercise": {
      "prompt": "After DAI is enabled, static hosts fail but DHCP hosts work. What may be missing?",
      "answer": "A validated IP-to-MAC binding or applicable ARP ACL for the static systems. Diagnose bindings and trust instead of trusting every access port."
    }
  },
  "5.8": {
    "v1": [
      6
    ],
    "v2": [
      9
    ],
    "focus": "AAA decisions and fallback semantics",
    "sections": [
      {
        "heading": "Follow three functions",
        "body": "Authentication verifies identity, authorization permits actions and accounting records activity. A successful login does not necessarily permit configuration commands. RADIUS commonly uses UDP 1812/1813; TACACS+ uses TCP 49 and separates AAA functions."
      },
      {
        "heading": "Distinguish rejection and error",
        "body": "A method list may try a later method after unavailability or an error. An explicit authentication rejection does not normally mean that a local password should bypass it. Test fallback behavior and an authorized recovery path rather than assuming every failure has the same meaning."
      }
    ],
    "exercise": {
      "prompt": "A reachable AAA server rejects a user. Should local fallback be assumed to override it?",
      "answer": "No. Rejection differs from an unavailable/error condition. Check the method list and documented platform behavior."
    }
  },
  "5.9": {
    "v1": [],
    "v2": [
      3
    ],
    "focus": "Wireless authentication versus data protection",
    "sections": [
      {
        "heading": "Keep mechanisms distinct",
        "body": "Enterprise authentication uses 802.1X/EAP and a server; EAP-TLS uses certificates. Personal security uses shared-credential mechanisms such as WPA2 PSK or WPA3 SAE. AES-CCMP protects data but does not alone identify the authentication method."
      },
      {
        "heading": "Read negotiated protection",
        "body": "WEP and TKIP have legacy weaknesses. Hiding an SSID is not encryption. WPA3 includes protected management-frame requirements; transition mode and client capability influence the actual result. Verify the client’s negotiation as well as configured policy."
      }
    ],
    "exercise": {
      "prompt": "Does disabling SSID broadcast replace WPA2/WPA3 security?",
      "answer": "No. Wireless exchanges can reveal the network name. Apply the intended authentication and encryption policy regardless of SSID visibility."
    }
  },
  "5.10": {
    "v1": [],
    "v2": [
      4
    ],
    "focus": "Complete WPA2-Personal GUI workflow",
    "sections": [
      {
        "heading": "Configure the object chain",
        "body": "On 9800, create/enable the WLAN profile with SSID, WPA2/AES-CCMP and PSK; create/enable the policy profile for the client VLAN; map them with a policy tag and apply it to the intended AP. AireOS has a different WLAN/dynamic-interface workflow."
      },
      {
        "heading": "Validate beyond association",
        "body": "Verify matching PSK, negotiated security, client VLAN, DHCP, gateway, DNS and application access. PSKs commonly use an 8–63-character passphrase or supported 64-hex raw-key format. Match the controller’s selected format rather than pasting a key into an arbitrary field."
      }
    ],
    "exercise": {
      "prompt": "A client authenticates but gets an address from the wrong subnet. Is retyping its PSK the direct fix?",
      "answer": "No. Trace the policy tag/profile or dynamic-interface mapping and the DHCP service for the selected VLAN; authentication already succeeded."
    }
  },
  "6.1": {
    "v1": [],
    "v2": [
      21,
      24
    ],
    "focus": "Intent, drift and safe automation workflow",
    "sections": [
      {
        "heading": "Compare intent and observation",
        "body": "Collect inventory/state, compare it with a versioned source of truth, create a controlled change and verify results. Drift may justify correction, an approved intent update or investigation rather than blindly overwriting actual configuration."
      },
      {
        "heading": "Limit the blast radius",
        "body": "Use validated templates, limited initial targets, appropriate privileges, reviewable diffs and rollback. Idempotent modules can converge, but arbitrary shell tasks are not automatically idempotent. A successful exit code does not prove end-to-end application health."
      }
    ],
    "exercise": {
      "prompt": "Why is a successful API response insufficient proof of user reachability?",
      "answer": "It can mean only that a request was accepted or an object changed. Verify actual device state and the application path, including routing, policy and dependencies."
    }
  },
  "6.2": {
    "v1": [],
    "v2": [
      21,
      22
    ],
    "focus": "Logical centralization and device autonomy",
    "sections": [
      {
        "heading": "Separate control and forwarding",
        "body": "Traditional devices can run distributed routing and expose local configuration. Controllers centralize abstractions/policy while devices forward packets. Logical centralization may use a resilient cluster; it does not require one physical server."
      },
      {
        "heading": "Compare failure behavior",
        "body": "Controller inventory, templates and assurance coordinate many devices. Compatibility and outage behavior depend on architecture: controller loss neither universally stops all forwarding nor universally leaves every service unaffected. Identify state and functions that remain local."
      }
    ],
    "exercise": {
      "prompt": "Does a northbound API imply that every user packet traverses the controller?",
      "answer": "No. It supports application/controller interactions. The data-plane design, devices and tunnels determine the user traffic path."
    }
  },
  "6.3": {
    "v1": [],
    "v2": [
      21,
      22
    ],
    "focus": "Planes, overlays and fabric mechanisms",
    "sections": [
      {
        "heading": "Relate functions and interfaces",
        "body": "The control plane learns/calculates reachability, the data plane forwards and the management plane configures/observes. Northbound APIs typically connect applications to controllers; southbound interfaces connect controller functions to infrastructure."
      },
      {
        "heading": "Use a concrete example",
        "body": "In SD-Access, underlay IP provides transport, VXLAN supplies overlay data encapsulation and LISP supports endpoint-location/control functions. Catalyst Center coordinates provisioning and assurance. These examples do not imply every SDN system uses the same protocols."
      }
    ],
    "exercise": {
      "prompt": "Overlay peers cannot reach one another through IP. What dependency comes first?",
      "answer": "Check underlay routes, reachability and the encapsulation transport path. Overlay policies depend on a working network beneath them."
    }
  },
  "6.4": {
    "v1": [],
    "v2": [
      22
    ],
    "focus": "Predictive, generative and validated operations",
    "sections": [
      {
        "heading": "Match technique to output",
        "body": "Predictive models estimate outcomes such as congestion or anomaly likelihood. Generative models produce explanations or configuration drafts. ML can classify and correlate data; a fluent generated answer is not independent evidence that its proposed cause is correct."
      },
      {
        "heading": "Control evidence and action",
        "body": "Check representative telemetry, time windows, false positives, sensitivity and platform/release support. Compare recommendations with observed state and policy before changes. Keep human accountability and independent verification for impactful actions."
      }
    ],
    "exercise": {
      "prompt": "An AI command is absent from the target image’s parser. What evidence takes precedence?",
      "answer": "The actual parser, supported release documentation and verified operational state. Treat the generated configuration as an unvalidated proposal."
    }
  },
  "6.5": {
    "v1": [],
    "v2": [
      23
    ],
    "focus": "REST resource semantics and authorization",
    "sections": [
      {
        "heading": "Connect CRUD to HTTP",
        "body": "GET reads, POST commonly creates/invokes, PUT generally replaces, PATCH partially updates and DELETE removes. Stateless requests contain needed context; statelessness does not forbid stored resources. Idempotence concerns repeated intended effect rather than identical timestamps or responses."
      },
      {
        "heading": "Read the whole exchange",
        "body": "Check URI, method, authentication, headers, encoding, status and body. Accept specifies desired response media; Content-Type describes the sent body. Basic authentication encodes rather than encrypts credentials; TLS supplies transport protection. Tokens still need authorization and careful handling."
      }
    ],
    "exercise": {
      "prompt": "A valid token receives 403. Is this identical to missing-token 401?",
      "answer": "No. 403 means access is forbidden under service policy; 401 indicates missing/invalid authentication. Inspect permissions, scope and the API’s documented behavior."
    }
  },
  "6.6": {
    "v1": [],
    "v2": [
      24
    ],
    "focus": "Inventory, declarative intent and sensitive state",
    "sections": [
      {
        "heading": "Compare mechanisms",
        "body": "Ansible inventories select targets, variables provide values and playbooks organize module tasks over SSH/APIs. Terraform uses providers and declarative resources: init prepares dependencies, plan previews and apply executes intended changes. Their uses can overlap without identical workflows."
      },
      {
        "heading": "Protect state and check convergence",
        "body": "Terraform state can contain sensitive resource values and requires controlled storage/access. Both tools need supported modules/providers, controlled secrets and independent verification. Repeating a properly designed intended-state operation should converge; repeating arbitrary commands is not automatically safe."
      }
    ],
    "exercise": {
      "prompt": "Why is Terraform state sensitive even when configuration uses variables?",
      "answer": "It may record resolved resource attributes, including secrets. Variable indirection alone does not ensure sensitive values are absent from state."
    }
  },
  "6.7": {
    "v1": [],
    "v2": [
      23
    ],
    "focus": "JSON nesting, types and serialization",
    "sections": [
      {
        "heading": "Trace each level",
        "body": "Objects map double-quoted string keys to values; arrays are ordered. 1500 differs from \"1500\", and false differs from \"false\". null is an explicit value rather than an absent key. Read nested structures before interpreting a resource field."
      },
      {
        "heading": "Recognize the encoding",
        "body": "JSON forbids comments, trailing commas, single-quoted strings and undefined. XML/YAML are alternative serializations; an Ansible YAML example is not JSON merely because both describe structured data. Use the API’s schema to interpret field meanings."
      }
    ],
    "exercise": {
      "prompt": "In {\"ports\":[{\"up\":false}],\"gateway\":null}, what are the types of ports, up and gateway?",
      "answer": "ports is an array containing an object; up is a boolean inside that object; gateway is null. These are distinct JSON types."
    }
  }
};
