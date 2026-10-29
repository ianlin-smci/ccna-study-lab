export interface TextbookReview {v1:number[];v2:number[];focus:string;sections:{heading:string;body:string;plain:string}[];exercise:{prompt:string;answer:string}}
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
        "body": "The OSI layers are physical, data link, network, transport, session, presentation and application. TCP/IP groups these into link, internet, transport and application functions. Application data travels inside transport segments/datagrams, IP packets and link frames; each layer serves the layer above it.",
        "plain": "A network message is wrapped in several layers, like a letter inside envelopes. Each wrapper supplies information for a different job: local delivery, travel between networks or application delivery."
      },
      {
        "heading": "Identify the forwarding boundary",
        "body": "A switch learns and forwards inside a VLAN. A router chooses an IP next hop and creates an outgoing frame. A firewall applies policy using state and context; an inline IPS can stop matching threats. PoE requires both adequate per-port capability and sufficient total switch power budget.",
        "plain": "Ask which decision a device makes. A switch chooses a local port; a router chooses the next network; a firewall checks rules. Power over Ethernet is a separate electrical dependency."
      }
    ],
    "exercise": {
      "prompt": "What destination MAC does a host use when sending IPv4 to a remote subnet?",
      "answer": "The host uses its local gateway's MAC address, found with ARP, the local IPv4-to-MAC lookup protocol. The outer Ethernet frame is delivered to that gateway, while the IP packet inside still names the remote host as its final destination."
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
        "body": "Access connects endpoints, distribution aggregates and applies policy, and core supplies resilient transit. A collapsed core combines distribution/core. In spine–leaf, each leaf connects to every spine, giving consistent inter-leaf hop counts and possible equal-cost paths.",
        "plain": "Follow where a user connects, where connections gather and how large areas join. A failure boundary is the part of the network affected when one component breaks."
      },
      {
        "heading": "Distinguish service responsibility",
        "body": "Metro Ethernet may supply Layer 2 connectivity; an MPLS provider may supply a routed VPN. Neither service name promises encryption. IaaS, PaaS and SaaS describe service responsibilities, while Internet VPNs and private WANs describe ways to reach a service.",
        "plain": "A connection service and a cloud service model answer different questions. One describes how sites connect; the other describes who operates which parts of an application system."
      }
    ],
    "exercise": {
      "prompt": "Does private addressing alone protect inter-site traffic over an Internet replacement for an MPLS WAN?",
      "answer": "No. A private address is an addressing choice, not encrypted protection. For the Internet path, plan suitable VPN encryption, working routes in both directions, availability and rules deciding which traffic may cross."
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
        "body": "Common 10BASE-T/100BASE-TX links use two twisted pairs; 1000BASE-T uses four. Auto-MDIX adapts transmit/receive pair arrangements on supported ports. Fiber choice also depends on wavelength, optical budget, distance, connectors and transceiver compatibility.",
        "plain": "A copper cable contains wire pairs. Some Ethernet standards need two pairs, while gigabit copper needs four; a damaged extra pair can explain why only the lower speed works."
      },
      {
        "heading": "Read an Ethernet frame",
        "body": "A frame carries destination/source MACs, type/length, payload and FCS. MAC addresses are 48 bits. Common EtherTypes are 0x0800 for IPv4, 0x86DD for IPv6 and 0x0806 for ARP. FCS detects corruption; it does not repair the frame.",
        "plain": "An Ethernet frame has sender/receiver MAC labels, a type label, its content and a corruption check. The check can detect damage but cannot repair it."
      }
    ],
    "exercise": {
      "prompt": "Why might a copper link work at 100 Mb/s but fail at 1 Gb/s?",
      "answer": "100BASE-TX needs two wire pairs, while 1000BASE-T needs all four. A fault in one of the additional pairs can leave 100 Mb/s working but prevent gigabit operation. Inspect all pairs and their connector terminations before assuming an IP configuration problem."
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
        "body": "Administratively down indicates a configured shutdown. Physical down points first to cable, power, optics or remote state. Physical-up/line-protocol-down requires checking the interface’s link-layer behavior. A clean link does not prove that an IP route exists.",
        "plain": "First distinguish turned off by configuration from unable to detect a physical connection. A working cable still does not prove the next network or application is reachable."
      },
      {
        "heading": "Compare new counter growth",
        "body": "Record a baseline, generate controlled traffic and inspect new CRCs, collisions, input errors or output drops. Historical counters can describe an old fault. Compare both endpoints and negotiation; normal full-duplex switched Ethernet does not have collisions.",
        "plain": "Write down counters before a test, then compare afterward. Corrupted incoming frames suggest different causes from outgoing traffic dropped because too much was waiting."
      }
    ],
    "exercise": {
      "prompt": "Output drops increase while CRCs and collisions stay stable. What should be investigated?",
      "answer": "Investigate too much outgoing traffic for the available link or queue. Output drops mean packets could not be sent; stable CRC and collision counters provide less support for damaged media. Compare offered traffic, link speed and queue counters during a fresh test."
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
        "body": "IP addresses, transport protocol and source/destination ports identify a transport flow. Clients often use ephemeral source ports. TCP sequence/acknowledgment numbers track bytes and its receive window supplies flow control. UDP itself supplies neither retransmission nor ordered delivery.",
        "plain": "IP addresses identify the devices; transport port numbers identify application conversations. TCP tracks delivered bytes and controls how much the receiver must accept at once."
      },
      {
        "heading": "Learn behavior with port numbers",
        "body": "Recognize SSH TCP 22, HTTP TCP 80, HTTPS TCP 443, DNS TCP/UDP 53, DHCP UDP 67/68, NTP UDP 123, SNMP UDP 161/162, FTP TCP 21 and initial TFTP UDP 69. A port alone does not prove the application actually running.",
        "plain": "Learn common service numbers with their transport. TCP 53 and UDP 53 are different matching choices even though DNS can use both; a number alone does not prove the application identity."
      }
    ],
    "exercise": {
      "prompt": "Why can allowing only TCP 443 block a modern HTTPS client?",
      "answer": "Some modern HTTPS uses HTTP/3 over QUIC, carried by UDP, commonly port 443. A rule permitting only TCP 443 matches a different transport and does not allow that UDP path. Permit only the intended transports explicitly."
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
        "body": "Calculate prefix, dotted mask, network, broadcast and host range. For ordinary LANs, choose host bits h so 2^h − 2 meets the requirement. Class A/B/C masks supply historical context; they do not override an explicit CIDR prefix. /31 and /32 require their special interpretations.",
        "plain": "Start with the required number of devices. Keep enough host bits so the address block fits them, including the ordinary network and broadcast addresses that hosts cannot use."
      },
      {
        "heading": "Work a VLSM allocation",
        "body": "Inside 192.168.50.0/24, allocate 100 hosts as 192.168.50.0/25, 50 as 192.168.50.128/26 and 20 as 192.168.50.192/27. Each subnet is aligned, inside its parent and nonoverlapping. 192.168.50.224/27 remains available.",
        "plain": "Allocate the largest group first. In this example, blocks of 128, 64 and 32 addresses fit 100, 50 and 20 ordinary hosts without giving the same address to two groups."
      }
    ],
    "exercise": {
      "prompt": "What is the longest equal-subnet prefix for at least 500 traditional usable hosts per subnet of 172.16.0.0/16?",
      "answer": "1. Try nine host bits: 2^9 − 2 = 510 ordinary usable addresses, enough for 500. 2. Keep 32 − 9 = 23 network bits, giving /23. 3. The original /16 leaves 23 − 16 = 7 subnet bits, so there are 2^7 = 128 equal subnets. /24 would supply only 254 hosts."
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
        "body": "RFC 1918 reserves specific blocks, not every address beginning with 172 or 192. Outside those blocks does not automatically mean usable public unicast: loopback, link-local, multicast and documentation allocations have other purposes. Site examples use documentation ranges such as 192.0.2.0/24.",
        "plain": "Private ranges have exact boundaries. An address outside them is not automatically an ordinary public address: some ranges are reserved for testing, multicast or local-only use."
      },
      {
        "heading": "Connect addressing to translation",
        "body": "Private hosts can reach public services with suitable routing and NAT, but translation is separate from filtering. Overlapping private prefixes complicate merged networks and may require renumbering or NAT. VRFs isolate routing contexts but do not automatically connect them.",
        "plain": "Translation can connect private users to public services, but it does not decide all security policy. If two joined organizations reuse one range, routing needs a way to distinguish them."
      }
    ],
    "exercise": {
      "prompt": "Are 172.31.255.254 and 172.32.0.1 in the same RFC 1918 block?",
      "answer": "No. The private 172.16.0.0/12 range ends at 172.31.255.255. Therefore 172.31.255.254 is inside it and 172.32.0.1 is outside it. Outside this private block does not, by itself, establish every other allocation or usage property."
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
        "body": "A hexadecimal digit represents four bits. A /48 contains 65,536 /64 subnets because 16 bits remain for the subnet ID. IPv6 has no broadcast subtraction. Compression removes leading zeros and replaces at most one contiguous zero run with ::.",
        "plain": "Each hexadecimal digit represents four bits. Between /48 and /64 there are 16 subnet bits, giving 2 to the power of 16, or 65,536, possible /64 blocks."
      },
      {
        "heading": "Separate addresses and default routes",
        "body": "SLAAC uses RA prefix information; Duplicate Address Detection checks a candidate address. Stateful DHCPv6 can allocate addresses and stateless DHCPv6 supplies other settings. Hosts normally learn their default router from RAs, not DHCPv6.",
        "plain": "An IPv6 device needs an address and a route out. Address assignment, duplicate-address checking and discovering a default router are related but separate jobs."
      }
    ],
    "exercise": {
      "prompt": "A client has a DHCPv6 address and DNS but no default route. What should be checked?",
      "answer": "Check Router Advertisements, including a usable nonzero router lifetime, and whether required ICMPv6 messages are being blocked. DHCPv6 can supply the address and DNS settings without supplying the host's default-router discovery. Having an address therefore does not prove there is an exit to other networks."
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
        "body": "ICMPv6 Neighbor Solicitation/Advertisement support neighbor address resolution and reachability. Solicited-node multicast uses ff02::1:ff00:0/104. This narrows receivers compared with an IPv4 ARP broadcast; it is not a normal unicast destination.",
        "plain": "IPv6 asks selected local groups about neighbors instead of sending IPv4-style broadcasts to everyone. Solicited-node multicast narrows the group receiving an address-resolution request."
      },
      {
        "heading": "Apply scope correctly",
        "body": "A link-local next hop needs interface context because identical fe80:: addresses can exist on different links. Anycast uses unicast-format addresses on multiple nodes, with routing choosing an instance. Modified EUI-64 inserts FFFE and flips the U/L bit; other interface-ID methods are common.",
        "plain": "A local-link address needs a link as well as an address to identify its destination. Anycast selects one service instance; an interface identifier can be derived from a MAC or created another way."
      }
    ],
    "exercise": {
      "prompt": "Why is ping fe80::1 ambiguous on a router with multiple Ethernet interfaces?",
      "answer": "fe80::1 is local to a link, and the same written address can exist on another link. Give the outgoing interface or zone so the router knows which directly connected neighbor you mean."
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
        "body": "A host compares the destination with its own prefix. It resolves a local destination directly, or resolves a selected gateway for a remote destination. A wrong mask can make it ARP for a remote host rather than use its gateway; inspect the selected route and neighbor table.",
        "plain": "The computer first decides whether the receiver is local. It looks up a local receiver directly or sends toward a gateway for a remote destination; a wrong mask can make that choice wrong."
      },
      {
        "heading": "Test both directions",
        "body": "Ping needs a request and a returning reply. Extended ping with a client-facing source can expose a missing return route hidden by a WAN-sourced test. Traceroute uses TTL/Hop Limit expiration responses; absent replies may also reflect filtering.",
        "plain": "A reply needs a way back to the exact test source. A router testing from one address may succeed while a user behind it still lacks a valid return path."
      }
    ],
    "exercise": {
      "prompt": "Why can a router ping a server from its WAN IP but not its LAN IP?",
      "answer": "The server may have a route and permission back to the router's WAN address but not back to its LAN subnet. Check the return route and access rules for the exact LAN source. The first successful test proves a different source path."
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
        "body": "A BSS includes an AP radio and its associated clients; an ESS joins BSSs through a distribution system. Several BSSIDs can advertise the same SSID. An independent BSS is ad hoc rather than an infrastructure AP arrangement.",
        "plain": "A BSS is one access-point radio’s client group. Several such groups can share an SSID through the wider distribution network, forming an ESS for extended service."
      },
      {
        "heading": "Understand shared airtime",
        "body": "802.11 uses collision avoidance, backoff and acknowledgments. Channel overlap, SNR, interference and airtime contention affect throughput. Wider channels consume more spectrum. Raising AP power does not increase a weak client transmitter’s power.",
        "plain": "Wi-Fi devices wait and take turns using airtime. Wider channels can carry more under good conditions but leave fewer independent channels for nearby networks."
      }
    ],
    "exercise": {
      "prompt": "Why might adding APs on the same channel fail to increase throughput?",
      "answer": "Access points on the same channel can still compete for the same airtime rather than adding independent capacity. Review channel reuse, placement, power, clients and interference. More radios alone do not give each conversation its own channel."
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
        "body": "VM virtual NICs connect through virtual switches and possibly physical uplinks. VLAN policy in the hypervisor and physical trunk must agree. Containers share a host kernel; VMs have separate guest kernels, giving different overhead and isolation boundaries.",
        "plain": "A virtual machine’s software network adapter connects to a virtual switch and possibly an outside physical link. Virtual and physical VLAN settings must agree to preserve the intended separation."
      },
      {
        "heading": "Compare logical isolation",
        "body": "IaaS supplies infrastructure resources, PaaS an application platform and SaaS the application. VRFs separate routing tables and can permit overlapping addresses; connecting VRFs needs a deliberate route-leaking or service design rather than shared hardware alone.",
        "plain": "Virtual machines, cloud service models and separate routing tables solve different problems. Shared hardware can host independent route lists, but connecting those lists still requires a deliberate design."
      }
    ],
    "exercise": {
      "prompt": "Does a shared physical uplink remove the boundary between two virtual VLANs?",
      "answer": "No. Correct VLAN tagging can keep the groups separate over one shared physical link. Moving between their different IP subnets still needs the intended routing and access rules; sharing the cable does not remove that logical boundary."
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
        "body": "Learn the source MAC, incoming port and VLAN; look up the destination within that VLAN. Known destinations use their learned port, same-ingress destinations are filtered, and unknown destinations flood eligible forwarding ports. A blocked STP port is not eligible merely because it belongs to the VLAN.",
        "plain": "Learn where the sender was heard, then look for the receiver. A known receiver needs one eligible outgoing port; an unknown receiver needs limited copies within the VLAN."
      },
      {
        "heading": "Distinguish router forwarding",
        "body": "A router removes the incoming frame, selects a route, decrements TTL/Hop Limit and creates outgoing encapsulation. On Ethernet it resolves the next-hop MAC. Without NAT or tunneling, endpoint IPs stay the same while MAC addresses change at routed hops.",
        "plain": "A router replaces the local Ethernet wrapper at each routed step and reduces the packet’s lifetime counter. The end-to-end IP addresses normally stay the same unless translation or tunneling changes them."
      }
    ],
    "exercise": {
      "prompt": "A destination MAC is learned on the same port on which the frame arrived. What happens?",
      "answer": "The switch does not forward the frame back out its arrival port or flood it elsewhere. Its directory already says the receiver is on that incoming segment, so there is no need to copy it to another segment."
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
        "body": "Check source subnet/gateway, access VLAN, trunks, destination VLAN and return gateway. A data/voice port may carry untagged workstation data and tagged phone voice. The voice VLAN alone does not set the phone’s address, QoS trust or routed security policy.",
        "plain": "Trace the complete path, including the return. Correct local switching does not prove that gateways, trunks and routing work for a different VLAN."
      },
      {
        "heading": "Compare routing designs",
        "body": "An SVI supplies a VLAN gateway on a routing-capable switch; router-on-a-stick uses tagged router subinterfaces. Both need correct gateways and return paths. Intra-VLAN switching does not traverse a router SVI ACL; inter-VLAN routing does.",
        "plain": "A routing switch can provide one logical gateway interface per VLAN. A separate router can instead use tagged subinterfaces; either design still needs correct host gateways and access rules."
      }
    ],
    "exercise": {
      "prompt": "If VLAN 10 hosts reach each other but cannot reach VLAN 20, has routing already been proved?",
      "answer": "No. Hosts in VLAN 10 can communicate through local switching without using a router. For VLAN 20, separately check each host's gateway, the routing function or router subinterfaces, filters and the reply path. Local success proves only part of the design."
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
        "body": "An allowed list does not prove that a VLAN exists, is active or is forwarding across the trunk. Inspect trunk operation, allowed VLANs, active VLANs and STP forwarding together. Creating a VLAN and transporting it across a trunk are separate actions.",
        "plain": "A VLAN must exist, be allowed and have a forwarding path on the trunk. Seeing its number in an allowed list proves only one of those requirements."
      },
      {
        "heading": "Avoid replacing the allowed list",
        "body": "switchport trunk allowed vlan 10,20 replaces the list; add/remove modify it incrementally. On DTP-capable ports desirable initiates while auto waits; auto/auto does not form a trunk. Explicit trunking with nonegotiate avoids relying on negotiation.",
        "plain": "Changing an allowed list can replace it or modify it. Use add to extend it; automatic trunk negotiation also has modes that either initiate or wait."
      }
    ],
    "exercise": {
      "prompt": "How do you add VLAN 30 to an existing allowed list without replacing VLANs 10 and 20?",
      "answer": "Use switchport trunk allowed vlan add 30. The add keyword preserves the existing allowed entries. Also create VLAN 30 where needed and verify it is active and forwarding on both switches and every trunk along the intended path."
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
        "body": "Compare device ID, local interface, remote port ID, capabilities, platform and management address. An advertised management address does not prove that current VLANs, routes and filters permit reaching it.",
        "plain": "A neighbor report tells you which local port meets which remote port. Its advertised management address still needs separate IP routing and permission checks."
      },
      {
        "heading": "Check scope and direction",
        "body": "LLDP transmit and receive can be controlled independently. CDP/LLDP discover directly connected Layer 2 neighbors; LLDP-MED adds endpoint information such as voice policy. Discovery neither authenticates a neighbor nor validates the entire topology.",
        "plain": "Sending and receiving discovery messages can be controlled separately. Discovery identifies an adjacent device’s claims; it does not authenticate the device or prove a whole application path."
      }
    ],
    "exercise": {
      "prompt": "LLDP sees a neighbor but its management IP cannot be pinged. Is discovery disproved?",
      "answer": "No. LLDP messages work locally without proving the advertised management IP can be reached. Check that address's VLAN, subnet, route and security rules separately. A working neighbor advertisement and a failed IP test can both be valid observations."
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
        "body": "Check compatible speed, duplex, negotiation, Layer 2/3 mode and VLAN settings. Individual or suspended members differ from bundled members. A port-channel can exist without every intended member participating; inspect the member flags and both endpoints.",
        "plain": "A bundle only works with compatible members. Read each member’s state: a defined port-channel can still contain links that are suspended or not participating."
      },
      {
        "heading": "Connect bundling to STP and routing",
        "body": "STP treats a Layer 2 port-channel as one logical link. A routed port-channel places the address on the logical interface and uses routed members. Hashing distributes flows; a single flow normally remains limited to one physical member’s bandwidth.",
        "plain": "Spanning Tree sees a switched bundle as one logical link. A routed bundle holds its IP on the logical interface; one conversation normally uses one member even if many conversations share the bundle."
      }
    ],
    "exercise": {
      "prompt": "Both endpoints use LACP passive. Why does the bundle not negotiate?",
      "answer": "Both passive endpoints wait rather than start LACP negotiation. Make at least one side active, keep member settings compatible and verify that the intended links actually join the bundle."
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
        "body": "Elect the lowest bridge ID per VLAN. A nonroot switch selects the lowest total cost toward the root; ties use sender bridge ID, sender port ID and, if needed, local port ID. Each segment elects a designated port; alternate and backup describe different redundant paths.",
        "plain": "Choose the root first, then each switch’s best way toward it. Cost wins before later bridge/port tie-breakers; primary and secondary root configuration helps make the result predictable."
      },
      {
        "heading": "Distinguish protections",
        "body": "BPDU guard normally err-disables a protected edge port receiving a BPDU. Root guard can hold root-inconsistent on superior BPDUs; loop guard can hold loop-inconsistent when expected BPDUs vanish. BPDU filtering suppresses BPDUs according to its configuration form and can undermine loop prevention.",
        "plain": "The protections handle different failures: unexpected switch messages on an edge, an unwanted new root, or missing expected messages. Suppressing the messages can remove essential loop evidence."
      }
    ],
    "exercise": {
      "prompt": "Does PortFast disable spanning tree or make switch-to-switch loops harmless?",
      "answer": "No. PortFast speeds the transition for a genuine endpoint port; it does not disable Spanning Tree. Connecting switches in a loop through such ports can cause a temporary loop, so use the intended edge design and appropriate BPDU protection."
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
        "body": "Lightweight APs perform time-sensitive radio work while controllers coordinate centralized functions. CAPWAP commonly uses UDP 5246 for control and 5247 for data. User traffic need not always traverse a controller: forwarding depends on architecture and switching policy.",
        "plain": "The AP handles urgent radio work while a controller coordinates other functions. Their control messages and tunneled client data are different exchanges with different UDP ports."
      },
      {
        "heading": "Read AP mode first",
        "body": "Local mode normally serves centrally switched clients; FlexConnect can switch locally at a branch. Monitor and sniffer modes are for observation rather than ordinary client service. Autonomous and cloud-managed designs assign control and configuration responsibilities differently.",
        "plain": "Read the mode before diagnosing client service. FlexConnect can keep branch traffic local, while dedicated monitor and sniffer roles are for observation rather than ordinary access."
      }
    ],
    "exercise": {
      "prompt": "A monitor-mode AP has a reachable management IP. Should normal clients necessarily connect?",
      "answer": "No. A monitor-mode AP can be reachable for administration while intentionally not serving ordinary clients. Check its assigned mode and intended data path before treating lack of client service as an addressing failure."
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
        "body": "A centrally switched AP can use an access port for management/CAPWAP while the WLC uplink carries client VLANs. FlexConnect local switching may need a trunk at the AP. Port mode follows architecture rather than one universal AP rule.",
        "plain": "Follow where VLAN labels are needed. A centrally switched AP can carry tunneled client data through one management access VLAN; local switching may instead require a trunk at the AP."
      },
      {
        "heading": "Separate aggregation from mapping",
        "body": "A WLC LAG combines physical links, and the switch-side bundle must agree with supported settings. A trunk transports VLANs; it does not map an SSID to a policy. On 9800, the WLAN, policy profile, policy tag and AP assignment establish that relationship.",
        "plain": "Bundling cables, carrying VLANs and mapping a wireless name to a policy are separate actions. A correct trunk does not by itself select the right client VLAN."
      }
    ],
    "exercise": {
      "prompt": "Only one centrally switched WLAN fails DHCP. Which path should be traced?",
      "answer": "Trace that WLAN's client VLAN from the controller's wired uplink to the address server or relay. AP management uses a separate dependency path, so a healthy management VLAN does not prove this client VLAN's DHCP service works."
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
        "body": "User/privileged EXEC and global/interface/line configuration modes accept different commands. running-config is active; startup-config supplies saved boot configuration. end exits configuration mode but does not save changes. Save validated changes with copy running-config startup-config.",
        "plain": "The prompt shows which commands you can enter. Running configuration is active now; startup configuration is saved for boot. end changes the mode, while copy saves validated settings."
      },
      {
        "heading": "Separate transport and identity",
        "body": "SSH/HTTPS protects a session, while local accounts or AAA govern identity and permissions. Console access can offer an IP-independent recovery path. A Layer 2 management SVI needs an appropriate default gateway; a routing switch uses its routing table.",
        "plain": "Encrypting a session and checking who can use it are separate controls. A console can recover management without the normal IP path, but still needs authorized login."
      }
    ],
    "exercise": {
      "prompt": "A change works until reboot. What step may be missing?",
      "answer": "The active running configuration may not have been saved to startup configuration. After validating the change, save it, confirm the copy succeeds and confirm the device boots the intended configuration. Leaving configuration mode alone does not save it."
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
        "body": "The WLAN profile defines SSID/security; the policy profile includes client VLAN/policy; a policy tag maps WLAN to policy; and an AP receives that tag. Enable the relevant objects. A correct unassigned WLAN does not establish the configuration actually used by an AP.",
        "plain": "On a Catalyst 9800, the WLAN supplies name/security, the policy profile supplies client policy, and the AP’s policy tag connects them. Objects that exist but are not assigned do not serve that AP."
      },
      {
        "heading": "Recognize AireOS and QoS",
        "body": "AireOS uses dynamic interfaces and WLAN interface mappings rather than the identical 9800 tag model. Read the controller family before following menus. WMM distinguishes voice, video, best effort and background; switching and advanced authentication settings must suit the design.",
        "plain": "Controller generations use different menus and mapping objects. Wireless Multimedia, or WMM, distinguishes traffic such as voice and background data for suitable wireless queue treatment."
      }
    ],
    "exercise": {
      "prompt": "The SSID/PSK works but clients enter the wrong subnet. What relationship matters?",
      "answer": "Check which client network is actually assigned. On Catalyst 9800, follow the WLAN-to-policy mapping, policy VLAN and AP policy tag; on AireOS, inspect the WLAN's dynamic-interface mapping. The shared password does not select the subnet by itself."
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
        "body": "C represents a connected prefix; L a local /32 or /128 on the router. S denotes static and O denotes OSPF. Prefix, source, administrative distance, metric, next hop and egress interface answer distinct questions rather than forming one universal preference number.",
        "plain": "Each field answers a different question: what destination, learned how, preferred how, and sent where next. C is an attached subnet; L is an address belonging to the router itself."
      },
      {
        "heading": "Resolve the next hop",
        "body": "A route may require a second lookup to find its outgoing interface. ARP/ND then supports next-hop delivery on Ethernet. A route in the table does not prove working neighbor resolution, a permissive security policy or a return path.",
        "plain": "Finding a route can require another lookup to reach its next hop. Ethernet then needs the next-hop MAC; a complete outward route still does not prove a working return path."
      }
    ],
    "exercise": {
      "prompt": "Why can a /32 local route appear beside a connected /24?",
      "answer": "The local /32 is for packets addressed to the router itself. The connected /24 covers the whole attached subnet for delivery to other hosts. They serve different purposes; the host-route entry does not make every device on the link a /32 host."
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
        "body": "For competing identical prefixes, administrative distance ranks route sources and the selected protocol’s metric ranks paths. A static /24 AD 1 can displace an OSPF /24 AD 110. A /25 is a different route and may coexist with the /24.",
        "plain": "Compare source preference only for the same address block. A /24 and a /25 are different blocks and can both appear in the table."
      },
      {
        "heading": "Forward with the longest match",
        "body": "A matching installed /25 wins over an installed /24 even if its source has a higher AD. The packet lookup compares prefix specificity among matching routes. If no route, including a default, matches, the router drops rather than inventing a next hop.",
        "plain": "When forwarding, first test whether each block contains the destination, then choose the longest matching prefix. If nothing matches, including no default, the router cannot invent a path."
      }
    ],
    "exercise": {
      "prompt": "Installed routes are 10.0.0.0/8, 10.4.0.0/16 and 10.4.8.0/24. What best matches 10.4.9.1?",
      "answer": "First check which blocks contain 10.4.9.1. 10.4.8.0/24 covers only 10.4.8.x, so it does not match. The /8 and /16 do match; /16 is the more specific of those. Use 10.4.0.0/16."
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
        "body": "IPv4 host routes use /32; IPv6 host routes /128. A link-local IPv6 next hop needs an outgoing interface. On multiaccess Ethernet an exit-only route can create per-destination ARP/proxy-ARP behavior; a reachable next-hop address or fully specified form is usually clearer.",
        "plain": "One-host routes and wider network routes cover different destination sets. An IPv6 local-link next hop also needs an interface to identify which link you mean."
      },
      {
        "heading": "Understand backup limits",
        "body": "A floating route needs a higher AD than the preferred route to the same prefix. It activates when the primary is withdrawn or unresolved. A remote failure can leave the primary next hop reachable, requiring tracking in a real design. The backup path also needs a return route.",
        "plain": "A floating backup stays less preferred while the main route is available. A faraway outage may not remove the main route, so preference numbers alone cannot detect every failure."
      }
    ],
    "exercise": {
      "prompt": "Will a static route AD 5 float behind OSPF AD 110 for the same prefix?",
      "answer": "No. Lower AD is preferred, so the static route at 5 would beat OSPF at 110 for the same prefix. Choose a backup value above 110, such as 200, and verify the alternative next hop and reply path work."
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
        "body": "A typical progression is Down, Init, 2-Way, ExStart, Exchange, Loading and Full. Two DROthers on a broadcast network can normally remain 2-Way with each other and Full with DR/BDR. Persistent ExStart/Exchange calls for checks including MTU and network-type compatibility.",
        "plain": "Neighbor states describe progress toward exchanging the map. On a broadcast segment, ordinary routers need not fully synchronize directly with every other ordinary router because elected coordinators handle that relationship."
      },
      {
        "heading": "Know what configuration selects",
        "body": "The process ID is local and need not match neighbors. network statements select local interfaces by address/wildcard and assign an area; ip ospf 1 area 0 is an interface-based alternative. Router ID selection prefers explicit configuration, then highest eligible loopback IPv4, then nonloopback IPv4 at selection time. OSPFv2 uses IP protocol 89, not TCP port 89.",
        "plain": "The OSPF process number names a local configuration. A network statement selects matching local interfaces and their area; it is not a request to advertise any arbitrary remote network."
      }
    ],
    "exercise": {
      "prompt": "Must neighbors using OSPF process 1 and 10 change those numbers to match?",
      "answer": "No. The OSPF process number names each router's local configuration. Neighbors instead need compatible link operation, area, addressing where required, timers and other adjacency settings. Their router IDs should also be unique."
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
        "body": "A client resolves the virtual gateway IP to a virtual MAC. HSRP changes which router forwards for that identity. Preemption controls whether a recovered higher-priority router retakes the role. Tracking can reduce priority after an upstream failure while the client-facing link remains up.",
        "plain": "Clients keep using a virtual address while a different physical router can take over its role. Preemption governs whether a recovered preferred router takes the role back."
      },
      {
        "heading": "Compare protocol families",
        "body": "VRRP elects an active/master role and backups. GLBP can give different virtual MACs to clients for load sharing. FHRP protects the first hop; it does not replace resilient routing and upstream connectivity. Conceptual comparison is useful even when full deployment is outside the blueprint verb.",
        "plain": "HSRP, VRRP and GLBP implement gateway resilience with different role or sharing behavior. All still need healthy routes beyond that first gateway."
      }
    ],
    "exercise": {
      "prompt": "Why can clients be blackholed after only the active gateway’s upstream fails?",
      "answer": "The router may still hold the active virtual-gateway role because its client-facing link remains healthy. Without suitable tracking and upstream routing/failure detection, it can accept clients' traffic and have nowhere useful to send it. Gateway-role availability is only the first hop."
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
        "body": "Inside local describes the inside host internally; inside global describes its translated external identity. A dynamic pool without overload needs an available global address for each simultaneously translated inside address. PAT distinguishes flows sharing a global address using transport information.",
        "plain": "Local/global describe viewpoints of the same inside host. Without port sharing, a dynamic pool needs one free external mapping address for each active translated inside address."
      },
      {
        "heading": "Validate both directions",
        "body": "Inspect inside/outside roles, classification, translations created by real test traffic and return routing. A NAT ACL selects translation; denying translation does not automatically drop a packet. Clearing stale translations can affect active sessions and needs appropriate lab scope.",
        "plain": "Generate traffic from an actual inside client, then check mappings and return routing. A NAT-selection deny means not selected for that translation, not necessarily blocked by a security rule."
      }
    ],
    "exercise": {
      "prompt": "A dynamic pool has ten global addresses without overload. Why might an eleventh active host fail?",
      "answer": "Without overload, each active translated inside address uses one free global address. Ten pool addresses may therefore leave no mapping for the eleventh simultaneous host. Check actual use, then choose sufficient pool space or a suitable PAT design."
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
        "body": "Inspect peer selection, reachability, offset and synchronized status. Strata 1–15 describe synchronized hierarchy levels; stratum 16 indicates an unsynchronized condition. An NTP server can itself be an upstream client, and a low stratum is not a trust guarantee.",
        "plain": "Read which source was selected, whether it is reachable and whether synchronization occurred. Stratum is position in a hierarchy, not a certificate of clock trustworthiness."
      },
      {
        "heading": "Separate time display from reference",
        "body": "Timezone changes local display, not synchronization. A lab ntp master can distribute a wrong clock consistently if treated as an authoritative source. Match supported authentication and access policy at both endpoints and verify the reference itself.",
        "plain": "A time zone changes display rather than fixing the clock source. A local lab clock can make every client consistently wrong if it is treated as the reference."
      }
    ],
    "exercise": {
      "prompt": "Can devices agree on time and all be wrong?",
      "answer": "Yes. Devices following the same inaccurate source can agree with one another and all show the wrong time. Verify the reference source itself; synchronization is agreement with a source, not proof of that source's accuracy."
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
        "body": "DORA describes a common initial IPv4 lease. During renewal a client can unicast to its server; rebinding can seek another server. Address, mask, gateway, DNS options and lease state all matter. Link-local assignment warrants investigation rather than assuming a valid routed enterprise lease.",
        "plain": "A lease has a lifecycle after initial assignment. Clients renew it and may seek another server; the actual address, gateway, DNS options and expiration all affect operation."
      },
      {
        "heading": "Separate names from application access",
        "body": "A resolver may answer from cache until TTL expiry or obtain an answer from other servers. A/AAAA resolution does not prove that an application transport is reachable. PTR reverse lookup is separate from forward name-to-address resolution.",
        "plain": "DNS may reuse a cached answer until its time-to-live expires. That timer is separate from IP packet lifetime; a name answer still does not prove the application connection works."
      }
    ],
    "exercise": {
      "prompt": "A hostname resolves but HTTPS times out. Is changing DNS necessarily the next step?",
      "answer": "No. First verify that DNS returned the intended address, then inspect the network route, filtering rules, transport connection and application server. Name lookup and successful HTTPS are separate steps, so a timeout does not automatically call for changing DNS."
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
        "body": "Get/GetNext/GetBulk retrieve managed values; Set changes writable objects. OIDs identify objects in the MIB. Traps lack acknowledgments while informs request them. Notifications complement polling rather than automatically forming a complete counter history.",
        "plain": "A monitor can ask for values, change permitted values or receive events. A notification about one event is not a complete history of all counters."
      },
      {
        "heading": "Apply the actual protection level",
        "body": "SNMPv3 noAuthNoPriv, authNoPriv and authPriv provide different protection. Authentication does not imply encryption. Restrict manager sources, permitted views and write capability. Community-based v1/v2c is useful to recognize in older material; current secure designs need appropriate v3 protection.",
        "plain": "SNMPv3 can authenticate without encrypting, or provide both. Give a monitoring account only the objects and read/write permissions it needs."
      }
    ],
    "exercise": {
      "prompt": "Does authNoPriv hide monitored counters from traffic observers?",
      "answer": "No. authNoPriv authenticates messages without encrypting their content. Properly configured authPriv adds payload privacy. Reading auth as if it also meant encryption would combine two separate protections."
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
        "body": "Cisco messages commonly use %FACILITY-SEVERITY-MNEMONIC. Console, buffered, remote and terminal-monitor logging are distinct destinations. A message facility/mnemonic and a remote syslog facility setting are not the numeric severity.",
        "plain": "A Cisco message label identifies a subsystem, seriousness number and event shorthand. A message category is different from the address of its collector."
      },
      {
        "heading": "Apply numerical thresholds",
        "body": "Levels are 0 emergency, 1 alert, 2 critical, 3 error, 4 warning, 5 notification, 6 informational and 7 debugging. A threshold includes its number and lower numbers. Debugging can be expensive; scope it narrowly and stop after collecting the required evidence.",
        "plain": "Thresholds include their level and every more serious, lower-numbered level. Debug output can be expensive, so collect a narrow sample and stop it when finished."
      }
    ],
    "exercise": {
      "prompt": "Which severities does logging trap notifications send?",
      "answer": "Notifications is severity 5. A remote threshold at that level includes 0, 1, 2, 3, 4 and 5. It excludes informational 6 and debugging 7; other local or remote logging destinations can use different thresholds."
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
        "body": "A client broadcasts locally. A relay on the client-facing routed interface forwards to the server and supplies gateway information so the server selects a pool. The server needs a usable return path and a correctly scoped pool.",
        "plain": "The gateway relays a local request and identifies the client subnet so the remote server chooses the right address pool. The server must also be able to send its reply back."
      },
      {
        "heading": "Keep client, relay and server distinct",
        "body": "ip address dhcp makes an interface a DHCP client; ip helper-address supplies relay behavior. Neither automatically configures a DHCP server. A Layer 2 switch management client may still need an appropriate default gateway for remote reachability.",
        "plain": "A device can request its own address or relay someone else’s request. Neither role alone creates a DHCP server or an appropriate remote client pool."
      }
    ],
    "exercise": {
      "prompt": "Does a VLAN 20 access port normally receive the helper-address command?",
      "answer": "No. The helper belongs on VLAN 20's Layer 3 gateway interface or SVI. That is the point receiving local client broadcasts and forwarding them to the remote server with the client-subnet context. An ordinary access port only places its host into the VLAN."
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
        "body": "DSCP is a six-bit IP marking; CoS/PCP is three bits in an 802.1Q tag. EF commonly uses DSCP 46, with AF/class-selector values for other behaviors. CoS 5 is not the same encoded field as DSCP 46, although a policy can map them.",
        "plain": "Labels at different layers have different sizes: DSCP uses six IP-header bits and CoS/PCP uses three VLAN-tag bits. A policy can translate between labels without making them the same field."
      },
      {
        "heading": "Understand congestion behavior",
        "body": "Delay is transit time, jitter is delay variation, and loss is missing traffic. Bounded priority scheduling manages contention. Policing drops/remarks excess traffic; shaping buffers it for later transmission. Congestion avoidance can drop selectively before queues fill to influence responsive flows.",
        "plain": "Delay is waiting/travel time; jitter is variation in that time; loss means missing packets. Priority scheduling, early drops, policing and shaping affect these in different ways."
      }
    ],
    "exercise": {
      "prompt": "Why can shaping meet a WAN rate while increasing voice delay?",
      "answer": "Shaping makes excess packets wait before sending them, so a smoother rate can add delay. Choose the rate, burst behavior and queue/priority design so the waiting time still suits the intended application, especially voice."
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
        "body": "SSH needs operational management addressing, routes, server keys, supported protocol settings, authentication and VTY policy. A password or key alone does not establish a reachable encrypted service. Configure the intended VTY range for the specific platform.",
        "plain": "Test the full chain: network path, server keys, SSH settings, user authentication and remote-line policy. One working piece does not create the entire service."
      },
      {
        "heading": "Distinguish control locations",
        "body": "A VTY access-class restricts login sources; ip access-group on an interface filters packets through that interface. These are different policy locations. Verify allowed sources and recovery access before changing remote authentication or filtering.",
        "plain": "A VTY access-class controls sources allowed to log into the device. An interface access-group filters packets on that traffic path; they are different attachment points."
      }
    ],
    "exercise": {
      "prompt": "Old management clients use SSH successfully but a new subnet cannot. What should be inspected?",
      "answer": "Check which source subnets the VTY access-class allows, plus routes and interface filters. If existing clients already use SSH successfully, the server keys are not the first suspect for a failure limited to one new source subnet."
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
        "body": "FTP has a TCP control connection and a separate data connection. Active data commonly originates from server TCP 20; passive data uses a server-advertised port. TFTP starts at UDP 69 then uses negotiated transfer ports. These legacy protocols do not provide confidentiality.",
        "plain": "FTP sends commands and data on separate connections; firewall rules must support the selected mode. TFTP starts at a known request port and then uses transfer ports."
      },
      {
        "heading": "Separate copying from upgrading",
        "body": "Verify platform/image compatibility, available storage, vendor-published integrity value, boot settings and installation procedure. Successful copying does not prove an image is appropriate or will boot. Prefer supported secure transfer methods for current deployments.",
        "plain": "Before using copied software, check hardware compatibility, expected file integrity and the platform’s installation process. A completed copy is only one step."
      }
    ],
    "exercise": {
      "prompt": "Why is allowing TCP 21 alone sometimes insufficient for FTP?",
      "answer": "TCP 21 carries the FTP control conversation. Directory listings and file contents need a separate data connection, whose direction and port behavior depend on active/passive mode. The firewall and any translation must allow that intended data path too."
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
        "body": "Spoofing changes apparent identity, reconnaissance gathers information, denial of service targets availability and a man-in-the-middle can observe or alter traffic. Threat, vulnerability, exploit and business impact describe different parts of risk.",
        "plain": "First identify the kind of event: pretending to be someone else, gathering information, interrupting service or intercepting traffic. A weakness and evidence of a successful attack are different findings."
      },
      {
        "heading": "Place controls deliberately",
        "body": "Preventive controls reduce likelihood, detective controls identify events and corrective controls limit/repair damage. Patching, segmentation, identity controls, backups and monitoring address different failures. An inline IPS can prevent matching traffic; detection alone does not imply blocking.",
        "plain": "Preventive controls try to stop harm, detective controls reveal it, and corrective controls restore or limit damage. Combine them because one successful check does not eliminate every risk."
      }
    ],
    "exercise": {
      "prompt": "Does an alert about failed logins establish that guessing was prevented?",
      "answer": "No. The alert shows that suspicious attempts were noticed. To prove prevention, inspect actual login results, blocking/rate-limit behavior and any successful sessions. A detective control reporting an event is different from a preventive control stopping it."
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
        "body": "Awareness, onboarding, offboarding, least privilege and reporting must agree with actual account lifecycle actions. A policy document alone does not revoke an ex-employee’s sessions. Users need a trusted way to report incidents without exposing credentials.",
        "plain": "Account policies need real actions. When someone leaves, remove relevant accounts and sessions as well as physical badges, and make reporting suspicious activity straightforward."
      },
      {
        "heading": "Protect physical dependencies",
        "body": "Control access to racks, closets, consoles, removable media and power. Badges, visitor checks and anti-tailgating complement locks. Environmental and power failures can affect availability without a malicious actor.",
        "plain": "Protect cable ports, console ports, power and equipment access. Heat or power failure can interrupt service even when no attacker is involved."
      }
    ],
    "exercise": {
      "prompt": "What should offboarding include besides collecting a door badge?",
      "answer": "Remove or expire the relevant accounts, VPN access, keys and active sessions as well as collecting the badge. Review shared-secret ownership and access records. Physical and logical access need separate offboarding actions."
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
        "body": "One-way hashes permit secret verification without plaintext storage. Type 7 is reversible legacy obfuscation. Type 8/9 are stronger supported secret hashes; type 6 is reversible AES encryption for recoverable credentials. Storage protection does not encrypt a Telnet session.",
        "plain": "A one-way hash lets a system check a secret without storing its original text. Some older Cisco password formats are reversible disguises; storage format does not protect a network session."
      },
      {
        "heading": "Read version context",
        "body": "Recognize older line-password and service password-encryption examples for exam interpretation. Current IOS XE defaults and permitted syntax vary by release. Use supported strong secrets and platform-labeled guides; a textbook-era configuration is not a universal current-image template.",
        "plain": "Older textbook commands may remain useful to recognize on the exam while being inappropriate or unavailable for a current device. Use the supported strong-secret workflow for the actual release."
      }
    ],
    "exercise": {
      "prompt": "Does changing an enable password to a strong secret make Telnet confidential?",
      "answer": "No. A secret improves how the credential is stored or checked, but it does not encrypt the Telnet conversation. Use an appropriate encrypted transport such as SSH to protect the session in transit."
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
        "body": "Knowledge, possession and inherence describe what is proven, not the number of prompts. Password plus PIN remains two knowledge secrets. A certificate-backed key can prove private-key possession; displaying a public certificate alone cannot.",
        "plain": "Independent factors prove different things. Two knowledge secrets remain one category; a certificate exchange must prove the private key is held, not merely display a public certificate."
      },
      {
        "heading": "Plan recovery and revocation",
        "body": "Unique long secrets, controlled resets, protected keys, validity checks and revocation all matter. Biometrics are difficult to replace after compromise, making enrollment and fallback important. Password managers improve unique-secret handling without removing access-control requirements.",
        "plain": "Recovery can become the weak link. Protect enrollment, resets and keys, and remove credentials when they should no longer work; biometrics are especially difficult to replace after compromise."
      }
    ],
    "exercise": {
      "prompt": "Why is an unattended authenticated session risky even after an MFA login?",
      "answer": "MFA checked identity when the login happened. An unlocked session can remain usable by someone else afterward, without another immediate MFA prompt. Lock/end unused sessions and use suitable permissions, idle timeouts, endpoint protection and revocation."
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
        "body": "Tunnel mode carries an inner packet inside an outer packet addressed between gateways. ESP protection depends on the negotiated suite. IKE negotiates keys and associations; successful negotiation does not prove that the intended client traffic matches the protection policy.",
        "plain": "Tunnel mode places the original packet inside a new packet traveling between VPN gateways. Successful key negotiation does not prove the client’s route sends its data into that tunnel."
      },
      {
        "heading": "Verify the data path",
        "body": "Check security associations, both-direction counters, routes, selectors, ACLs and MTU. Remote-access protects an endpoint’s organizational access; site-to-site protects network traffic through gateways. An IPsec tunnel is not just any encrypted application session.",
        "plain": "Check both negotiation and protected traffic. Packet counters in both directions help distinguish an established agreement from a working client-data path."
      }
    ],
    "exercise": {
      "prompt": "The tunnel is established but encrypted-packet counters stay zero during a client test. What next?",
      "answer": "The peers agreed on a tunnel, but the tested client packets may not be using it. Check the client's route toward the VPN gateway and whether the source/destination match the VPN selectors or protection policy. Watch both-direction counters during the same test."
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
        "body": "Process entries from top to bottom and stop at the first match. Wildcard zero bits must match; one bits are ignored. A broad permit can shadow a later deny. Standard IPv4 ACLs match sources; extended ACLs add protocol, destination and supported ports.",
        "plain": "Walk down the rules and stop at the first match. A broad earlier allowance can make a later specific block unreachable; wildcard zero means compare that bit and one means ignore it."
      },
      {
        "heading": "Preserve required return traffic",
        "body": "A stateless ACL does not automatically allow return sessions. DNS may use UDP/TCP; OSPFv2 is IP protocol 89; DHCP has specific client/server behavior. TCP established checks ACK/RST rather than building full firewall state. VTY access-class protects login, not arbitrary transit traffic.",
        "plain": "A simple rule list does not automatically remember a whole connection. Plan required replies and services explicitly, and distinguish login-source rules from transit-traffic filters."
      }
    ],
    "exercise": {
      "prompt": "Will a TCP 22 deny below a broad permit for the same source subnet block SSH?",
      "answer": "No. The broad permit matches first, so processing stops before the TCP 22 deny. Put the intended specific restriction ahead of the broad allowance, then confirm the ACL's attachment, direction and test counters."
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
        "body": "DHCP snooping trust permits legitimate server messages on a chosen interface; DAI trust bypasses incoming ARP inspection on its chosen interface. Neither automatically configures the other. Ordinary client ports should not be trusted merely to suppress symptoms.",
        "plain": "Trust is specific to each check. Trusting DHCP server replies and bypassing ARP inspection are independent settings, even when placed on the same uplink."
      },
      {
        "heading": "Plan exceptions and recovery",
        "body": "DAI normally uses DHCP snooping bindings; static hosts need an appropriate validated design such as an ARP ACL. Port-security protect/restrict/shutdown have different notification and err-disable outcomes. Sticky entries persist across reboot only when the relevant configuration is saved.",
        "plain": "DHCP clients can have learned bindings while static hosts have none. Plan validated static-host handling; do not make every access port trusted just to hide a failure."
      }
    ],
    "exercise": {
      "prompt": "After DAI is enabled, static hosts fail but DHCP hosts work. What may be missing?",
      "answer": "The static hosts may have no DHCP-learned IP-to-MAC entries for DAI to validate. Add the appropriate verified binding or ARP ACL design for them. Do not solve the symptom by making every access port trusted."
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
        "body": "Authentication verifies identity, authorization permits actions and accounting records activity. A successful login does not necessarily permit configuration commands. RADIUS commonly uses UDP 1812/1813; TACACS+ uses TCP 49 and separates AAA functions.",
        "plain": "Login, permission and record keeping are three decisions. A user can pass identity checks yet lack permission for a configuration command."
      },
      {
        "heading": "Distinguish rejection and error",
        "body": "A method list may try a later method after unavailability or an error. An explicit authentication rejection does not normally mean that a local password should bypass it. Test fallback behavior and an authorized recovery path rather than assuming every failure has the same meaning.",
        "plain": "A server saying no is different from no server answering. A later local method is normally an availability fallback, not a way to bypass a valid remote rejection."
      }
    ],
    "exercise": {
      "prompt": "A reachable AAA server rejects a user. Should local fallback be assumed to override it?",
      "answer": "No. A reachable server explicitly rejecting credentials is not the same as the server failing to answer. Inspect the configured method list and documented platform behavior; local fallback is not assumed to override a valid rejection."
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
        "body": "Enterprise authentication uses 802.1X/EAP and a server; EAP-TLS uses certificates. Personal security uses shared-credential mechanisms such as WPA2 PSK or WPA3 SAE. AES-CCMP protects data but does not alone identify the authentication method.",
        "plain": "Enterprise describes an identity workflow using an authentication service. AES-CCMP describes data protection; knowing the cipher alone does not identify the login method."
      },
      {
        "heading": "Read negotiated protection",
        "body": "WEP and TKIP have legacy weaknesses. Hiding an SSID is not encryption. WPA3 includes protected management-frame requirements; transition mode and client capability influence the actual result. Verify the client’s negotiation as well as configured policy.",
        "plain": "Inspect the security actually negotiated by the client. Hiding the wireless name does not hide all evidence of the network or replace authentication and encryption."
      }
    ],
    "exercise": {
      "prompt": "Does disabling SSID broadcast replace WPA2/WPA3 security?",
      "answer": "No. Other wireless exchanges can reveal the network name, so suppressing its advertisement does not encrypt traffic or verify users. Use the intended WPA2/WPA3 authentication and encryption whether the SSID is visible or hidden."
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
        "body": "On 9800, create/enable the WLAN profile with SSID, WPA2/AES-CCMP and PSK; create/enable the policy profile for the client VLAN; map them with a policy tag and apply it to the intended AP. AireOS has a different WLAN/dynamic-interface workflow.",
        "plain": "Build the entire controller relationship: the wireless name/security, its client VLAN policy, the mapping between them and the AP receiving that mapping."
      },
      {
        "heading": "Validate beyond association",
        "body": "Verify matching PSK, negotiated security, client VLAN, DHCP, gateway, DNS and application access. PSKs commonly use an 8–63-character passphrase or supported 64-hex raw-key format. Match the controller’s selected format rather than pasting a key into an arbitrary field.",
        "plain": "After wireless login, test the assigned network and services. A wrong subnet is a mapping/address-service issue, not automatically a wrong passphrase."
      }
    ],
    "exercise": {
      "prompt": "A client authenticates but gets an address from the wrong subnet. Is retyping its PSK the direct fix?",
      "answer": "No. Authentication succeeded, while the wrong subnet points to the assigned client network. Trace the AP's policy tag/profile or AireOS interface mapping, then the DHCP service for that VLAN. Retyping a correct password does not repair that mapping."
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
        "body": "Collect inventory/state, compare it with a versioned source of truth, create a controlled change and verify results. Drift may justify correction, an approved intent update or investigation rather than blindly overwriting actual configuration.",
        "plain": "First compare approved intent with observed settings. A difference needs a decision: repair the live state, update the approved design or investigate before changing anything."
      },
      {
        "heading": "Limit the blast radius",
        "body": "Use validated templates, limited initial targets, appropriate privileges, reviewable diffs and rollback. Idempotent modules can converge, but arbitrary shell tasks are not automatically idempotent. A successful exit code does not prove end-to-end application health.",
        "plain": "Limit how widely a mistake can spread. Review differences, start small and keep recovery ready; a tool reporting success does not prove the user service is healthy."
      }
    ],
    "exercise": {
      "prompt": "Why is a successful API response insufficient proof of user reachability?",
      "answer": "An API success can mean a request was accepted or a setting changed. It does not test all dependencies needed by a user. Check the resulting device state and actual application path, including routes, filters and reply traffic."
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
        "body": "Traditional devices can run distributed routing and expose local configuration. Controllers centralize abstractions/policy while devices forward packets. Logical centralization may use a resilient cluster; it does not require one physical server.",
        "plain": "A controller can coordinate decisions while switches still forward packets locally. A logically centralized controller system can also be a resilient group of servers."
      },
      {
        "heading": "Compare failure behavior",
        "body": "Controller inventory, templates and assurance coordinate many devices. Compatibility and outage behavior depend on architecture: controller loss neither universally stops all forwarding nor universally leaves every service unaffected. Identify state and functions that remain local.",
        "plain": "Ask what happens to each function when control connectivity fails. Some forwarding can continue from installed state while policy changes or other services become unavailable."
      }
    ],
    "exercise": {
      "prompt": "Does a northbound API imply that every user packet traverses the controller?",
      "answer": "No. A northbound API connects an application with controller functions. User data follows the actual device and tunnel design, which need not pass through the controller. Configuration relationships and packet paths are different diagrams."
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
        "body": "The control plane learns/calculates reachability, the data plane forwards and the management plane configures/observes. Northbound APIs typically connect applications to controllers; southbound interfaces connect controller functions to infrastructure.",
        "plain": "Control decides where traffic should go; data forwarding moves it; management observes and configures. Northbound and southbound describe interfaces relative to the controller."
      },
      {
        "heading": "Use a concrete example",
        "body": "In SD-Access, underlay IP provides transport, VXLAN supplies overlay data encapsulation and LISP supports endpoint-location/control functions. Catalyst Center coordinates provisioning and assurance. These examples do not imply every SDN system uses the same protocols.",
        "plain": "In one Cisco fabric example, the underlay transports packets, VXLAN wraps overlay traffic, and LISP helps locate endpoints. These are an example architecture, not universal SDN requirements."
      }
    ],
    "exercise": {
      "prompt": "Overlay peers cannot reach one another through IP. What dependency comes first?",
      "answer": "First check the underlay: the IP routes, reachability and allowed transport between overlay endpoints. The logical tunnel rides over that network, so its policy cannot compensate for a broken basic path underneath it."
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
        "body": "Predictive models estimate outcomes such as congestion or anomaly likelihood. Generative models produce explanations or configuration drafts. ML can classify and correlate data; a fluent generated answer is not independent evidence that its proposed cause is correct.",
        "plain": "Forecasting a future condition is predictive. Writing a new summary or draft is generative. Pattern recognition helps investigate without proving a proposed cause is correct."
      },
      {
        "heading": "Control evidence and action",
        "body": "Check representative telemetry, time windows, false positives, sensitivity and platform/release support. Compare recommendations with observed state and policy before changes. Keep human accountability and independent verification for impactful actions.",
        "plain": "Compare AI output with representative measurements and the actual device. Wrong baseline data can create false alarms, and plausible commands may be unsupported."
      }
    ],
    "exercise": {
      "prompt": "An AI command is absent from the target image’s parser. What evidence takes precedence?",
      "answer": "Use the actual device's command help/parser, supported release documentation and verified operating state. The AI text is an unvalidated suggestion. A command absent from the target image does not become supported because the suggestion looks convincing."
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
        "body": "GET reads, POST commonly creates/invokes, PUT generally replaces, PATCH partially updates and DELETE removes. Stateless requests contain needed context; statelessness does not forbid stored resources. Idempotence concerns repeated intended effect rather than identical timestamps or responses.",
        "plain": "HTTP methods express different actions. Stateless means each request carries the needed context; it does not mean the server forgets all stored devices or other resources."
      },
      {
        "heading": "Read the whole exchange",
        "body": "Check URI, method, authentication, headers, encoding, status and body. Accept specifies desired response media; Content-Type describes the sent body. Basic authentication encodes rather than encrypts credentials; TLS supplies transport protection. Tokens still need authorization and careful handling.",
        "plain": "Read the complete message: destination, action, identity, format, status and content. Encoding credentials is not encryption; use protected transport and appropriate permissions."
      }
    ],
    "exercise": {
      "prompt": "A valid token receives 403. Is this identical to missing-token 401?",
      "answer": "No. A 403 normally means the requested access is forbidden under the service policy; a 401 concerns missing or invalid authentication. Check permissions, token scope and the API's specific documented response behavior."
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
        "body": "Ansible inventories select targets, variables provide values and playbooks organize module tasks over SSH/APIs. Terraform uses providers and declarative resources: init prepares dependencies, plan previews and apply executes intended changes. Their uses can overlap without identical workflows.",
        "plain": "Ansible organizes targets and tasks; Terraform organizes declared resources with service providers and a stored mapping to real objects. Their workflows can overlap without being identical."
      },
      {
        "heading": "Protect state and check convergence",
        "body": "Terraform state can contain sensitive resource values and requires controlled storage/access. Both tools need supported modules/providers, controlled secrets and independent verification. Repeating a properly designed intended-state operation should converge; repeating arbitrary commands is not automatically safe.",
        "plain": "A state file can contain resolved sensitive values even when the configuration uses variables. Protect it, keep credentials controlled and verify real results independently."
      }
    ],
    "exercise": {
      "prompt": "Why is Terraform state sensitive even when configuration uses variables?",
      "answer": "State can store resolved resource attributes, including secret values. Putting a secret behind a variable name in configuration does not ensure it stays out of state. Protect the state file and its storage/access controls accordingly."
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
        "body": "Objects map double-quoted string keys to values; arrays are ordered. 1500 differs from \"1500\", and false differs from \"false\". null is an explicit value rather than an absent key. Read nested structures before interpreting a resource field.",
        "plain": "Read from the outside inward: object, named field, list, then the item inside it. A number, a boolean and text containing the same characters remain different types."
      },
      {
        "heading": "Recognize the encoding",
        "body": "JSON forbids comments, trailing commas, single-quoted strings and undefined. XML/YAML are alternative serializations; an Ansible YAML example is not JSON merely because both describe structured data. Use the API’s schema to interpret field meanings.",
        "plain": "JSON has strict punctuation rules and no comments. YAML or XML examples use other formats; valid JSON still needs the API’s field definitions to have the intended meaning."
      }
    ],
    "exercise": {
      "prompt": "In {\"ports\":[{\"up\":false}],\"gateway\":null}, what are the types of ports, up and gateway?",
      "answer": "Read the outer object first. ports is an array, marked by square brackets, containing an object. Inside that object, up is the unquoted boolean false. gateway is present with the null value, which differs from an absent field or the text \"null\"."
    }
  }
};
