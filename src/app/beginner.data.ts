/** Original beginner companions. Keep the detailed exam terminology and command text intact. */
export interface BeginnerGuide {
 idea:string; example:string; words:{term:string;meaning:string}[];
 steps:{title:string;body:string}[]; caption:string; remember:string; exampleCaption:string;
}
export const BEGINNER_GUIDES:Record<string,BeginnerGuide> = {
  "1.1": {
    "idea": "A network lets devices exchange information. Different devices do different jobs along the way.",
    "example": "Opening a company web page can involve your laptop, a Wi-Fi access point, a switch, a router and a server.",
    "words": [
      {
        "term": "Packet",
        "meaning": "A small addressed piece of information sent across a network."
      },
      {
        "term": "Frame",
        "meaning": "The wrapper used to carry a packet across one local connection."
      },
      {
        "term": "MAC address",
        "meaning": "An identifier used to deliver Ethernet frames on a local network."
      },
      {
        "term": "IP address",
        "meaning": "An address used to identify where packets should go across networks."
      }
    ],
    "steps": [
      {
        "title": "Laptop creates a request",
        "body": "The laptop is an endpoint: a device that sends or receives information."
      },
      {
        "title": "Switch delivers locally",
        "body": "A switch uses MAC addresses to choose a local connection. A VLAN is one logical local network."
      },
      {
        "title": "Router chooses the next network",
        "body": "A router uses IP addresses and a list of routes to move packets between networks."
      },
      {
        "title": "Server provides a service",
        "body": "A server runs the requested application. A firewall checks access rules along the path."
      }
    ],
    "caption": "This is a simplified request path. An access point adds the radio connection; real networks can combine roles in one device.",
    "remember": "A switch connects devices within a local network; a router connects networks.",
    "exampleCaption": "Follow each arrow as the request moves toward the server. PoE means the Ethernet cable can also supply power to a compatible device."
  },
  "1.2": {
    "idea": "A network design describes how devices connect and where responsibilities are placed.",
    "example": "A small office can combine several jobs in one box. A large campus often separates those jobs so a failure affects fewer people.",
    "words": [
      {
        "term": "Topology",
        "meaning": "The arrangement of devices and connections."
      },
      {
        "term": "Access layer",
        "meaning": "The part where user devices connect."
      },
      {
        "term": "Distribution layer",
        "meaning": "The part that gathers access connections and applies policy."
      },
      {
        "term": "Core",
        "meaning": "The fast, reliable connection between distribution areas."
      }
    ],
    "steps": [
      {
        "title": "Connect people",
        "body": "Access switches connect laptops, phones and other devices."
      },
      {
        "title": "Gather connections",
        "body": "Distribution connects groups of access switches. A two-tier design combines this role with the core."
      },
      {
        "title": "Join larger areas",
        "body": "A separate core connects distribution areas in a three-tier design."
      }
    ],
    "caption": "These are functional roles, not a requirement for exactly three physical switches. In a spine–leaf design, every leaf connects to every spine instead.",
    "remember": "Count roles rather than boxes. Cloud services also divide responsibilities between you and the provider.",
    "exampleCaption": "The arrows show example paths. In spine–leaf, a server on one leaf normally reaches another leaf through a spine; the picture is not a complete wiring plan."
  },
  "1.3": {
    "idea": "A network cable must carry the right kind of signal far enough for both connected devices.",
    "example": "A connector that fits is like a plug that fits a socket: it does not prove the equipment supports the same signal.",
    "words": [
      {
        "term": "Copper",
        "meaning": "Cable carrying electrical signals."
      },
      {
        "term": "Fiber",
        "meaning": "Cable carrying light signals."
      },
      {
        "term": "Transceiver",
        "meaning": "The plug-in part that sends and receives a particular cable signal."
      },
      {
        "term": "Duplex",
        "meaning": "Whether both ends can send at the same time or must take turns."
      }
    ],
    "steps": [
      {
        "title": "Check the distance",
        "body": "Cable and signal standards specify how far the link can reach."
      },
      {
        "title": "Match both ends",
        "body": "Choose compatible speed, fiber type, light wavelength and transceivers."
      },
      {
        "title": "Test the connection",
        "body": "Check link status and new errors, not just whether the connector fits."
      }
    ],
    "caption": "This is a cable-selection checklist. Copper can suffer electrical interference; fiber does not carry its data as electricity.",
    "remember": "Match the complete standard at both ends, including the cable.",
    "exampleCaption": "Tx means transmit and Rx means receive. Common two-strand fiber links connect the transmitter at one end to the receiver at the other."
  },
  "1.4": {
    "idea": "A connection can be switched off, physically broken or overloaded. Those need different fixes.",
    "example": "An empty power socket, a damaged cable and a crowded road all stop useful work for different reasons.",
    "words": [
      {
        "term": "Interface",
        "meaning": "A device connection, such as an Ethernet port."
      },
      {
        "term": "CRC error",
        "meaning": "A received frame failed its corruption check."
      },
      {
        "term": "Autonegotiation",
        "meaning": "Both ends agree on supported link settings."
      },
      {
        "term": "Discard",
        "meaning": "Traffic deliberately dropped, sometimes because a queue is full."
      }
    ],
    "steps": [
      {
        "title": "Check whether it is enabled",
        "body": "Administratively down means configuration has turned the interface off."
      },
      {
        "title": "Check both ends",
        "body": "Inspect power, cable and compatible speed/duplex settings."
      },
      {
        "title": "Compare new errors",
        "body": "Generate a controlled test and see which counters increase. Old totals can describe an earlier problem."
      }
    ],
    "caption": "Read the steps as a troubleshooting order. An up link proves only part of the path; it does not prove an application works.",
    "remember": "Check what changed during the test before choosing a repair.",
    "exampleCaption": "The show commands inspect status without configuring the port. Look for both interface states and newly increasing error or drop counters."
  },
  "1.5": {
    "idea": "Transport protocols help applications exchange data. TCP keeps track of delivery and order; UDP leaves those jobs to the application if needed.",
    "example": "A file download needs missing pieces resent. A live call may prefer a short gap over waiting for old audio.",
    "words": [
      {
        "term": "Port number",
        "meaning": "A number identifying an application conversation, not a physical cable socket."
      },
      {
        "term": "Acknowledgment",
        "meaning": "A message confirming receipt."
      },
      {
        "term": "Retransmission",
        "meaning": "Sending missing information again."
      },
      {
        "term": "Handshake",
        "meaning": "An opening exchange used to establish a connection."
      }
    ],
    "steps": [
      {
        "title": "Client sends SYN",
        "body": "The client asks to start a TCP connection."
      },
      {
        "title": "Server sends SYN-ACK",
        "body": "The server agrees and acknowledges the request."
      },
      {
        "title": "Client sends ACK",
        "body": "The client confirms. The connection can now carry its application exchange."
      }
    ],
    "caption": "The three steps describe TCP setup. UDP does not use this TCP handshake; an application using UDP can still add its own reliability.",
    "remember": "TCP and UDP describe delivery behavior, not a guarantee of speed or encryption.",
    "exampleCaption": "Read right-pointing arrows as client-to-server and left-pointing arrows as server-to-client. SYN starts synchronization; ACK acknowledges it."
  },
  "1.6": {
    "idea": "An IPv4 address has a network part and a device part. The /number tells you how many of its 32 binary digits belong to the network part.",
    "example": "Think of a subnet as one street and a device address as one house on that street. This analogy helps with grouping; real addresses use binary arithmetic.",
    "words": [
      {
        "term": "Bit",
        "meaning": "A single binary digit: 0 or 1."
      },
      {
        "term": "Prefix",
        "meaning": "The fixed network part, written as /26 for 26 network bits."
      },
      {
        "term": "Subnet mask",
        "meaning": "The same boundary written in dotted form."
      },
      {
        "term": "Broadcast address",
        "meaning": "An address representing all IPv4 hosts on an ordinary local subnet."
      }
    ],
    "steps": [
      {
        "title": "Count the remaining bits",
        "body": "For /26, 32 − 26 = 6 bits remain for addresses within the block."
      },
      {
        "title": "Find the block",
        "body": "2 to the power of 6 is 64. Last-octet blocks start at 0, 64, 128 and 192."
      },
      {
        "title": "Place the address",
        "body": "77 is between 64 and 127. The network is .64 and broadcast is .127."
      },
      {
        "title": "Find ordinary host addresses",
        "body": "Exclude those two endpoints: .65 through .126, giving 62 host addresses."
      }
    ],
    "caption": "Use the shared first three address numbers 192.168.10 for this example. The /31 point-to-point and /32 single-host exceptions are explained in the detailed material.",
    "remember": "First find the block; then separate its network, broadcast and ordinary host addresses.",
    "exampleCaption": "In 192.168.10.77/26, every shortened .number keeps 192.168.10 in front. The configuration gives the gateway .65; computers on this subnet can use that gateway for other networks."
  },
  "1.7": {
    "idea": "Private IPv4 addresses are reusable internal addresses. Different organizations can use the same private ranges independently.",
    "example": "Two apartment buildings can both have apartment 10. Connecting them requires identifying which building you mean.",
    "words": [
      {
        "term": "Private range",
        "meaning": "An address block reserved for internal use."
      },
      {
        "term": "NAT",
        "meaning": "Address translation, often used when private devices contact the Internet."
      },
      {
        "term": "Link-local",
        "meaning": "An address usable only on the local link."
      },
      {
        "term": "Loopback",
        "meaning": "An address a device uses to refer to itself."
      }
    ],
    "steps": [
      {
        "title": "Check the exact range",
        "body": "Private ranges are 10/8, 172.16/12 and 192.168/16; not all addresses beginning with 172 or 192 qualify."
      },
      {
        "title": "Plan outside access",
        "body": "A suitable gateway can translate internal addresses when reaching public services."
      },
      {
        "title": "Add separate security",
        "body": "Private addresses do not encrypt information or decide who may log in."
      }
    ],
    "caption": "This is a decision sequence, not a packet path. An address outside a private range may still be reserved for another purpose.",
    "remember": "Private means reusable internal addressing, not automatic protection.",
    "exampleCaption": "The examples contrast private ranges with other ranges. Not RFC 1918 means outside these three private blocks; it does not mean every listed address is an ordinary public host address."
  },
  "1.8": {
    "idea": "IPv6 is a newer addressing system with much larger addresses. A device can learn its address and its way out of the local network through different messages.",
    "example": "An address is like your location; a default router is the exit you use to reach other locations. Knowing one does not supply the other.",
    "words": [
      {
        "term": "Hextet",
        "meaning": "One group of up to four hexadecimal digits in an IPv6 address."
      },
      {
        "term": "Hexadecimal",
        "meaning": "Base-16 digits: 0–9 and a–f."
      },
      {
        "term": "Router Advertisement (RA)",
        "meaning": "A local router message advertising network and default-router information."
      },
      {
        "term": "SLAAC",
        "meaning": "A way for a host to form an address using advertised network information."
      }
    ],
    "steps": [
      {
        "title": "Router advertises",
        "body": "The router announces a prefix and whether it offers a usable default-router lifetime."
      },
      {
        "title": "Host forms or obtains an address",
        "body": "It can use SLAAC or DHCPv6 according to the network design."
      },
      {
        "title": "Host learns the exit",
        "body": "Suitable Router Advertisements identify the default router; DHCPv6 alone does not supply that default route."
      }
    ],
    "caption": "These are related functions, not a requirement for one fixed timing sequence. IPv6 uses multicast groups instead of IPv4-style broadcast.",
    "remember": "An IPv6 address can work locally while a missing default route prevents remote access.",
    "exampleCaption": "The commands turn on IPv6 routing, assign a sample /64 address and enable the interface. Double colon replaces one run of zero groups; it does not remove the /64 network boundary."
  },
  "1.9": {
    "idea": "IPv6 address types tell you who should receive a packet and how far it can travel.",
    "example": "A message to one colleague, an announcement to a group and a request to the nearest branch are different delivery patterns.",
    "words": [
      {
        "term": "Unicast",
        "meaning": "Delivery to one addressed interface."
      },
      {
        "term": "Multicast",
        "meaning": "Delivery to members of a group."
      },
      {
        "term": "Anycast",
        "meaning": "One shared service address at several locations; routing selects one instance."
      },
      {
        "term": "Scope",
        "meaning": "The area in which an address or message is valid."
      }
    ],
    "steps": [
      {
        "title": "Read the beginning",
        "body": "fe80::/10 is link-local; fc00::/7 is unique-local; ff00::/8 is multicast."
      },
      {
        "title": "Apply the scope",
        "body": "Link-local stays on one link. Unique-local can route internally but is not intended for public Internet routing."
      },
      {
        "title": "Choose the delivery meaning",
        "body": "A multicast group can reach several receivers; anycast normally reaches one selected service instance."
      }
    ],
    "caption": "This is an address-reading guide. Nearest anycast instance means according to routing, not necessarily geographic distance.",
    "remember": "Address type and scope matter as much as the written digits.",
    "exampleCaption": "The EUI-64 example derives an interface identifier from a MAC address: insert ff:fe in the middle and change the first byte from 00 to 02 by flipping the specified bit. Other identifier methods are common."
  },
  "1.10": {
    "idea": "Check a computer’s own settings before assuming the network equipment is wrong.",
    "example": "If a letter has the wrong return address or street, a perfectly working postal system still cannot deliver the conversation.",
    "words": [
      {
        "term": "Gateway",
        "meaning": "The next router used to reach destinations outside the local subnet."
      },
      {
        "term": "DNS",
        "meaning": "The service that looks up addresses for names."
      },
      {
        "term": "Ping",
        "meaning": "A request/reply test of IP reachability, subject to security rules."
      },
      {
        "term": "Return route",
        "meaning": "The path a reply uses to get back to the sender."
      }
    ],
    "steps": [
      {
        "title": "Inspect local settings",
        "body": "Read address, mask/prefix, gateway and DNS on the computer."
      },
      {
        "title": "Try nearby, then remote",
        "body": "Test the local gateway and then a known remote IP address where allowed."
      },
      {
        "title": "Try a name",
        "body": "If an IP works but its name does not, inspect DNS. A failed ping alone may also mean filtering."
      }
    ],
    "caption": "The order isolates different dependencies. Every successful request/reply test requires both an outward and a return path.",
    "remember": "A test from a router’s address is not always the same as a test from a user’s address.",
    "exampleCaption": "Each operating-system label starts a separate command list. These inspect the client; they are not commands to enter on a Cisco switch."
  },
  "1.11": {
    "idea": "Wi-Fi devices share radio airtime. A strong signal is only one part of a good connection.",
    "example": "People in one room must take turns speaking. A louder speaker does not give everyone more time to talk.",
    "words": [
      {
        "term": "SSID",
        "meaning": "The wireless network name shown to users."
      },
      {
        "term": "Channel",
        "meaning": "A portion of radio spectrum used for wireless communication."
      },
      {
        "term": "Interference",
        "meaning": "Other signals that make reception harder."
      },
      {
        "term": "Airtime",
        "meaning": "Time available for devices to use the shared radio channel."
      }
    ],
    "steps": [
      {
        "title": "Choose a network name",
        "body": "The client selects an SSID; the same name can be advertised by several access points."
      },
      {
        "title": "Share a channel",
        "body": "Nearby devices take turns. Overlapping channels and noise can reduce useful capacity."
      },
      {
        "title": "Check security separately",
        "body": "Encryption protects data. A strong signal or matching name does not prove secure settings."
      }
    ],
    "caption": "This is a wireless decision guide. Channels 1, 6 and 11 are a common 20 MHz 2.4 GHz plan in many countries; legal channels vary.",
    "remember": "More access points or more power do not automatically mean more usable capacity.",
    "exampleCaption": "The channel arrows show a reuse plan for neighboring access points, not a packet moving from channel 1 to 6 to 11. Measure signal quality and airtime use before changing power."
  },
  "1.12": {
    "idea": "One physical machine can provide several logical environments, but each kind of separation works differently.",
    "example": "A building can have separate apartments while sharing a foundation. Sharing hardware does not make every occupant part of the same private space.",
    "words": [
      {
        "term": "Virtual machine (VM)",
        "meaning": "A software-created computer with its own operating system."
      },
      {
        "term": "Hypervisor",
        "meaning": "Software that allocates physical computing resources to VMs."
      },
      {
        "term": "Container",
        "meaning": "An application environment sharing the host operating-system kernel."
      },
      {
        "term": "VRF",
        "meaning": "A separate routing table inside one routing device."
      }
    ],
    "steps": [
      {
        "title": "Share physical resources",
        "body": "A hypervisor divides processing time, memory and input/output resources among VMs."
      },
      {
        "title": "Keep the right boundary",
        "body": "VMs can have separate kernels; containers share the host kernel, the core of its operating system."
      },
      {
        "title": "Separate network decisions",
        "body": "A VRF gives its interfaces a separate routing table; connecting VRFs requires deliberate configuration."
      }
    ],
    "caption": "The steps compare kinds of virtualization; they do not say that a container must run inside a VM or a VRF.",
    "remember": "Compute isolation, VLAN separation and routing-table separation are different boundaries.",
    "exampleCaption": "BLUE and GREEN are two separate route lists on one device. They can reuse 10.1.0.0/16 because the device keeps their routing decisions separate."
  },
  "1.13": {
    "idea": "A switch keeps a local delivery directory. It learns where senders are, then uses that directory to deliver frames.",
    "example": "A receptionist learns which desk a person is using when that person calls in. The directory can become stale after a move.",
    "words": [
      {
        "term": "Source MAC",
        "meaning": "The local identifier of the sender of a frame."
      },
      {
        "term": "Destination MAC",
        "meaning": "The local identifier of its intended receiver."
      },
      {
        "term": "Flood",
        "meaning": "Send a copy to eligible ports in the same VLAN, except the arrival port."
      },
      {
        "term": "Aging",
        "meaning": "Removal of a learned entry after it has not been refreshed."
      }
    ],
    "steps": [
      {
        "title": "Learn the sender",
        "body": "Record the source MAC, incoming port and VLAN."
      },
      {
        "title": "Look up the receiver",
        "body": "Use the destination MAC in that VLAN’s directory."
      },
      {
        "title": "Forward or limit copies",
        "body": "Use the known outgoing port; flood if unknown; do not send back onto the same incoming segment."
      }
    ],
    "caption": "This shows a switch’s decision sequence. Flooding stays within the VLAN and only uses ports allowed to forward.",
    "remember": "Learn from the source; forward using the destination.",
    "exampleCaption": "The sample row says that MAC aaaa.bbbb.cccc was learned in VLAN 10 on port Gi0/1. It is a MAC-to-port directory, not a list of IP addresses."
  },
  "2.1": {
    "idea": "A VLAN separates one switch network into logical groups. Devices in one group can switch locally; different groups need a router function to communicate.",
    "example": "Users, servers and guests can use the same switches while belonging to different logical networks.",
    "words": [
      {
        "term": "Access port",
        "meaning": "A switch connection assigned to an endpoint’s data VLAN."
      },
      {
        "term": "Trunk",
        "meaning": "A link carrying several VLANs while keeping them identifiable."
      },
      {
        "term": "SVI",
        "meaning": "A switch’s logical interface for one VLAN, often used as its IP gateway."
      },
      {
        "term": "ACL",
        "meaning": "An ordered set of rules permitting or blocking selected traffic."
      }
    ],
    "steps": [
      {
        "title": "Create and assign groups",
        "body": "Create VLANs 10, 20 and 30 and assign the intended endpoint ports on each switch."
      },
      {
        "title": "Carry groups between switches",
        "body": "Use a trunk and allow the required VLANs on every link along the path."
      },
      {
        "title": "Route between groups",
        "body": "Give each group its gateway and enable the intended routing."
      },
      {
        "title": "Restrict selected traffic",
        "body": "Allow Users and Servers to communicate; apply rules blocking routed access to and from Guests."
      }
    ],
    "caption": "This is a setup sequence. Same-VLAN communication is intra-VLAN; communication between VLANs is inter-VLAN. The source-interface ACL example filters routed IPv4 traffic.",
    "remember": "A VLAN creates separation; routing creates a path; filtering controls which routed traffic may use it.",
    "exampleCaption": "The example first assigns an endpoint to VLAN 10. The later gateway interfaces require VLAN 10 and 20 to exist and have active member links. Their hosts use the matching gateway address."
  },
  "2.2": {
    "idea": "A trunk lets several VLANs share one physical connection without merging them.",
    "example": "Think of labeled parcels on one truck: sharing the truck does not remove their different destination labels.",
    "words": [
      {
        "term": "802.1Q tag",
        "meaning": "Information added to an Ethernet frame to identify its VLAN."
      },
      {
        "term": "Allowed list",
        "meaning": "The VLANs permitted to cross a trunk."
      },
      {
        "term": "Native VLAN",
        "meaning": "The VLAN assigned to untagged traffic on a typical Cisco trunk."
      },
      {
        "term": "Untagged",
        "meaning": "A frame without an 802.1Q VLAN tag."
      }
    ],
    "steps": [
      {
        "title": "Agree on trunk operation",
        "body": "Configure both ends for the intended trunk behavior."
      },
      {
        "title": "Agree on labels",
        "body": "Allow required VLANs and create them where needed."
      },
      {
        "title": "Agree on untagged traffic",
        "body": "Use the same native VLAN so both ends interpret frames without labels consistently."
      }
    ],
    "caption": "The sequence describes configuration checks. Tags identify VLAN membership; they do not encrypt frames or route between VLANs.",
    "remember": "Adding to a trunk list differs from replacing the list.",
    "exampleCaption": "The example uses native VLAN 99 and allows 10, 20 and 99. nonegotiate disables supported automatic trunk negotiation; verify actual operation with show interfaces trunk."
  },
  "2.3": {
    "idea": "Discovery protocols let directly connected devices introduce themselves and identify their connected ports.",
    "example": "Two neighbors can exchange names at the fence without proving that a journey across the whole city will succeed.",
    "words": [
      {
        "term": "CDP",
        "meaning": "Cisco’s local device-discovery protocol."
      },
      {
        "term": "LLDP",
        "meaning": "A standard discovery protocol supported by multiple vendors."
      },
      {
        "term": "Neighbor",
        "meaning": "A directly connected device in this discovery context."
      },
      {
        "term": "Management address",
        "meaning": "An address used to administer a device."
      }
    ],
    "steps": [
      {
        "title": "Send local advertisements",
        "body": "A device shares selected identity and port details on an enabled link."
      },
      {
        "title": "Read the neighboring port",
        "body": "Compare the local port and the remote port to document the cable."
      },
      {
        "title": "Test services separately",
        "body": "Discovery does not prove all VLANs, routes or applications work."
      }
    ],
    "caption": "These messages describe the adjacent device. They are not a complete map or proof that the advertised identity is trustworthy.",
    "remember": "For one excluded interface, use interface-level control instead of disabling discovery everywhere.",
    "exampleCaption": "The show commands inspect neighbors. lldp run enables LLDP globally, while the interface transmit/receive commands control that port’s advertisement directions."
  },
  "2.4": {
    "idea": "EtherChannel makes several compatible cable links act as one logical connection.",
    "example": "Several checkout lanes can serve more customers together, but one customer usually uses one lane.",
    "words": [
      {
        "term": "Port-channel",
        "meaning": "The logical interface representing the bundle."
      },
      {
        "term": "LACP",
        "meaning": "A protocol for negotiating compatible bundle members."
      },
      {
        "term": "Active",
        "meaning": "An LACP mode that starts negotiation."
      },
      {
        "term": "Passive",
        "meaning": "An LACP mode that responds but does not start negotiation."
      }
    ],
    "steps": [
      {
        "title": "Match member settings",
        "body": "Speed, switching/routing mode and VLAN settings must be compatible."
      },
      {
        "title": "Negotiate the bundle",
        "body": "At least one LACP endpoint must be active; two passive ends wait."
      },
      {
        "title": "Verify participating links",
        "body": "Inspect the summary. A logical interface can exist while a member is suspended or unused."
      }
    ],
    "caption": "This is a bundle-building sequence. Multiple flows may use different links; one flow normally stays on one member to preserve order.",
    "remember": "More bundle members increase aggregate capacity, not necessarily one transfer’s speed.",
    "exampleCaption": "The first block is a switched trunk bundle. The second is a separate routed-bundle example: its IP address belongs on Port-channel 2, not separately on each member."
  },
  "2.5": {
    "idea": "Spanning Tree keeps redundant switch links from endlessly circulating frames. It leaves a safe set of paths forwarding.",
    "example": "A road system can keep an extra route ready while closing one side of a loop to prevent traffic circulating without end.",
    "words": [
      {
        "term": "Root bridge",
        "meaning": "The switch chosen as the reference point for the tree."
      },
      {
        "term": "BPDU",
        "meaning": "A control message switches use for spanning-tree decisions."
      },
      {
        "term": "Discarding",
        "meaning": "An RSTP state that does not forward ordinary user frames."
      },
      {
        "term": "PortFast",
        "meaning": "An edge-port feature that starts forwarding quickly while spanning tree still exists."
      }
    ],
    "steps": [
      {
        "title": "Choose the root",
        "body": "The lowest bridge ID wins; priority is compared before the remaining identifying fields."
      },
      {
        "title": "Select safe paths",
        "body": "Other switches choose their best path toward the root and keep redundant paths from forming loops."
      },
      {
        "title": "Protect genuine edge ports",
        "body": "Use appropriate BPDU protections so an unexpected switch connection does not undermine the design."
      }
    ],
    "caption": "The steps simplify the decision process. Rapid PVST+ maintains a rapid spanning tree separately for each VLAN; detailed tie-breakers are below.",
    "remember": "A backup cable can be healthy yet intentionally not forward user traffic.",
    "exampleCaption": "The example chooses the intended root for VLAN 10 and treats g0/10 as an endpoint port. BPDU guard normally disables that protected port if it receives a switch control message."
  },
  "2.6": {
    "idea": "An access point’s mode determines its job and where wireless user traffic goes.",
    "example": "A security observer in a shop and a cashier may use similar equipment, but only one is assigned to serve customers.",
    "words": [
      {
        "term": "Controller",
        "meaning": "A system coordinating wireless configuration and operation."
      },
      {
        "term": "CAPWAP",
        "meaning": "The communication used between supported lightweight APs and controllers."
      },
      {
        "term": "Local switching",
        "meaning": "Sending client traffic onto the branch’s local wired network."
      },
      {
        "term": "Monitor mode",
        "meaning": "A dedicated observation role rather than ordinary client service."
      }
    ],
    "steps": [
      {
        "title": "Choose the intended role",
        "body": "Use a client-serving mode for access or a dedicated mode for monitoring/capture."
      },
      {
        "title": "Establish management",
        "body": "A lightweight AP joins its supported controller."
      },
      {
        "title": "Follow the data path",
        "body": "Local mode commonly sends client traffic to the controller; FlexConnect can switch it locally."
      }
    ],
    "caption": "This describes roles and dependencies. Controller management does not mean every design sends all client data through the controller.",
    "remember": "An AP visible in management can still be in a mode that does not serve users.",
    "exampleCaption": "5246 and 5247 are UDP application port numbers, not cable sockets. The branch path illustrates FlexConnect local switching to a VLAN and then its gateway."
  },
  "2.7": {
    "idea": "Wireless clients need a working wired path as well as a working radio connection.",
    "example": "A bus can pick you up successfully while the road beyond the station is blocked.",
    "words": [
      {
        "term": "AP management",
        "meaning": "The connection used to administer and control an access point."
      },
      {
        "term": "Client VLAN",
        "meaning": "The logical wired network assigned to wireless users."
      },
      {
        "term": "Uplink",
        "meaning": "A connection toward the rest of the network."
      },
      {
        "term": "PoE",
        "meaning": "Power delivered to compatible equipment through Ethernet cabling."
      }
    ],
    "steps": [
      {
        "title": "Power and connect the AP",
        "body": "Check compatible power, cable and management addressing."
      },
      {
        "title": "Match the architecture",
        "body": "Use the intended access or trunk port design for how client traffic is forwarded."
      },
      {
        "title": "Trace the client VLAN",
        "body": "Check controller mapping, trunks, address service and gateway for that particular WLAN."
      }
    ],
    "caption": "This is a dependency checklist. AP management can work while a client VLAN or controller data connection is broken.",
    "remember": "A joined AP proves management connectivity, not every user’s application path.",
    "exampleCaption": "The Staff SSID maps to client VLAN 20. AP management is shown separately on VLAN 99. Follow each path independently rather than treating one as proof of the other."
  },
  "2.8": {
    "idea": "You need a way to administer a network device, including a recovery path if its normal network connection breaks.",
    "example": "A building can have a normal entrance and a separately controlled maintenance entrance.",
    "words": [
      {
        "term": "Console",
        "meaning": "A local management connection that does not require the normal IP network."
      },
      {
        "term": "SSH",
        "meaning": "An encrypted remote command session."
      },
      {
        "term": "HTTPS",
        "meaning": "An encrypted browser connection with server identity checks."
      },
      {
        "term": "Running/startup configuration",
        "meaning": "The active settings versus the saved settings loaded at startup."
      }
    ],
    "steps": [
      {
        "title": "Choose a reachable path",
        "body": "Use a supported console locally or an intended network management connection."
      },
      {
        "title": "Protect the session and identity",
        "body": "Use SSH or HTTPS and the correct account/permissions."
      },
      {
        "title": "Save validated changes",
        "body": "Leaving configuration mode does not save. Copy active settings to startup settings when appropriate."
      }
    ],
    "caption": "The steps describe administration, not a bypass of login requirements. A console still needs authorized access and the correct terminal settings.",
    "remember": "Reachability, encrypted transport, identity and saved configuration are separate checks.",
    "exampleCaption": "The example creates server keys and a local account, then makes the remote VTY login lines use that account through SSH. Adapt sample secrets before any real lab use."
  },
  "2.9": {
    "idea": "A wireless controller’s screens connect a network name to security rules and a client network. Saving one screen may not complete the whole relationship.",
    "example": "A shop sign, its opening status and the room customers may enter are separate settings.",
    "words": [
      {
        "term": "WLAN profile",
        "meaning": "A controller configuration describing a wireless network and its security."
      },
      {
        "term": "SSID",
        "meaning": "The name clients normally select."
      },
      {
        "term": "Policy profile",
        "meaning": "On Catalyst 9800, settings such as client VLAN and policy."
      },
      {
        "term": "Policy tag",
        "meaning": "On Catalyst 9800, the mapping applied to an AP that connects a WLAN to its policy."
      }
    ],
    "steps": [
      {
        "title": "Define and enable the WLAN",
        "body": "Set the SSID and intended authentication/encryption."
      },
      {
        "title": "Attach the right policy",
        "body": "Map the WLAN to its client VLAN policy and apply the relationship to the intended AP."
      },
      {
        "title": "Test a real client",
        "body": "Check the network name, successful login, assigned address and permitted services."
      }
    ],
    "caption": "This is a conceptual controller workflow. Catalyst 9800 and AireOS use different objects and menu labels.",
    "remember": "Correct settings in an unused profile do not prove what an AP is actually using.",
    "exampleCaption": "Read the arrows as a checklist, not exact universal menu names. The enabled state, security choice, VLAN mapping and AP assignment all need to agree."
  },
  "3.1": {
    "idea": "A routing table is a list of destination networks and the next steps for reaching them.",
    "example": "A signpost can name a district, the next junction and the road you take; those are different pieces of information.",
    "words": [
      {
        "term": "Prefix",
        "meaning": "The address block a route covers."
      },
      {
        "term": "Next hop",
        "meaning": "The next forwarding target on the way to a destination."
      },
      {
        "term": "Administrative distance (AD)",
        "meaning": "Preference between different route sources for the same prefix; lower wins."
      },
      {
        "term": "Metric",
        "meaning": "A routing protocol’s own path score, such as OSPF cost."
      }
    ],
    "steps": [
      {
        "title": "Read the destination",
        "body": "Find the network and mask/prefix covered by the entry."
      },
      {
        "title": "Read its source and scores",
        "body": "The letter identifies how it was learned. Brackets show AD first and metric second."
      },
      {
        "title": "Read the next step",
        "body": "The next hop and outgoing interface tell this router where to send it next."
      }
    ],
    "caption": "These steps decode one entry; they do not choose a route by comparing every number as one score.",
    "remember": "In [110/20], 110 is source preference and 20 is the protocol’s metric.",
    "exampleCaption": "O means OSPF. The route covers 10.20.0.0/16 and sends toward 192.0.2.2 through the named local interface; that next hop is not necessarily the final server."
  },
  "3.2": {
    "idea": "A router first builds its route list, then uses the most specific matching installed route for each packet.",
    "example": "A delivery instruction for one street is more specific than an instruction for the whole city, provided the street actually matches.",
    "words": [
      {
        "term": "Installed route",
        "meaning": "A route currently present in the forwarding decision’s route table."
      },
      {
        "term": "Longest prefix match",
        "meaning": "Choose the matching route with the most fixed network bits."
      },
      {
        "term": "Default route",
        "meaning": "The least specific route, used if no more specific installed route matches."
      },
      {
        "term": "Cost",
        "meaning": "A protocol-defined path score; comparable OSPF paths favor lower cost."
      }
    ],
    "steps": [
      {
        "title": "Build routes for each prefix",
        "body": "Compare route sources for the same prefix using AD and the protocol’s own selection rules."
      },
      {
        "title": "Check the packet’s destination",
        "body": "Find the installed routes whose address blocks actually contain it."
      },
      {
        "title": "Choose the longest match",
        "body": "Use the largest matching /number. If none matches, including no default, drop the packet."
      }
    ],
    "caption": "The first step builds the table; the next two forward a packet. A longer prefix that does not contain the destination is not a candidate.",
    "remember": "AD does not override a more specific installed matching prefix.",
    "exampleCaption": "10.1.2.55 falls inside 10.1.2.48/28, so route C wins over the wider matching /24 and /8 routes."
  },
  "3.3": {
    "idea": "A static route is an instruction you configure manually: to reach this address block, use that next step.",
    "example": "You can write a main travel instruction and keep a less-preferred backup for when the main instruction is unavailable.",
    "words": [
      {
        "term": "Host route",
        "meaning": "A route for one address: /32 in IPv4 or /128 in IPv6."
      },
      {
        "term": "Network route",
        "meaning": "A route covering an address block."
      },
      {
        "term": "Floating static route",
        "meaning": "A less-preferred static route kept as a backup."
      },
      {
        "term": "Link-local next hop",
        "meaning": "An IPv6 neighbor address that also needs its link identified."
      }
    ],
    "steps": [
      {
        "title": "Specify the destination",
        "body": "Choose a host, network or default prefix."
      },
      {
        "title": "Specify a usable next step",
        "body": "Give a reachable next-hop address and, when required, its outgoing interface."
      },
      {
        "title": "Set backup preference",
        "body": "A floating backup needs a higher AD than the preferred route for that same prefix."
      }
    ],
    "caption": "These steps define routes, not automatic end-to-end failure detection. A reachable first hop can still have a failure farther away.",
    "remember": "A backup needs both the right preference and a working outward and return path.",
    "exampleCaption": "The lines are separate examples: a network route, IPv4 default, higher-AD backup, and IPv6 default. The final 200 sets the backup AD; the IPv6 interface identifies the link containing fe80::1."
  },
  "3.4": {
    "idea": "OSPF lets routers share a map of network links and calculate paths. Routers must agree on key settings before exchanging that map.",
    "example": "Two people comparing maps need to agree which region and roads they are discussing.",
    "words": [
      {
        "term": "Neighbor",
        "meaning": "A router heard on a shared OSPF link."
      },
      {
        "term": "Adjacency",
        "meaning": "An OSPF relationship that exchanges the needed link-state information."
      },
      {
        "term": "Area",
        "meaning": "An OSPF grouping of links; connected neighbors must agree on it."
      },
      {
        "term": "Router ID",
        "meaning": "A 32-bit identifier for a router in OSPF, separate from its local process number."
      }
    ],
    "steps": [
      {
        "title": "Discover compatible neighbors",
        "body": "Check area, addresses where required, timers, authentication and network type."
      },
      {
        "title": "Exchange the map",
        "body": "Read neighbor states; stalled database exchange can reflect mismatched maximum packet size, called MTU."
      },
      {
        "title": "Calculate routes",
        "body": "Use OSPF costs. Broadcast networks elect a DR and BDR to coordinate exchanges; point-to-point networks do not."
      }
    ],
    "caption": "This is a simplified OSPF workflow. Two ordinary broadcast-segment routers can correctly remain 2-Way with each other while being Full with the elected DR/BDR.",
    "remember": "OSPF process numbers are local; neighboring router IDs should be unique.",
    "exampleCaption": "The network statement selects matching local interfaces and assigns area 0. passive-interface keeps advertising that connected network without sending OSPF discovery messages on that interface."
  },
  "3.5": {
    "idea": "First-hop redundancy gives computers one stable gateway identity that more than one physical router can provide.",
    "example": "A help desk can keep one phone number while a different staff member answers after a shift change.",
    "words": [
      {
        "term": "Virtual gateway",
        "meaning": "The shared IP and MAC identity clients use as their gateway."
      },
      {
        "term": "Active router",
        "meaning": "The router currently forwarding for the shared identity in HSRP."
      },
      {
        "term": "Standby router",
        "meaning": "The router ready to take over in HSRP."
      },
      {
        "term": "Tracking",
        "meaning": "A configured way to change gateway preference when a monitored condition fails."
      }
    ],
    "steps": [
      {
        "title": "Client uses the shared identity",
        "body": "Its default gateway is the virtual address, not an individual router’s real address."
      },
      {
        "title": "One router forwards",
        "body": "The active router serves that identity while the standby is ready."
      },
      {
        "title": "Role can move",
        "body": "On a detected failure, another router takes over. Upstream failures need suitable routing and tracking design."
      }
    ],
    "caption": "This illustrates HSRP-style active/standby operation. Other first-hop protocols have different roles and load-sharing behavior.",
    "remember": "Keeping the gateway available does not by itself keep the entire route to a server healthy.",
    "exampleCaption": "10.10.10.1 is the client’s stable virtual gateway. .2 and .3 identify the two physical routers; clients do not need to switch their configured gateway between them."
  },
  "4.1": {
    "idea": "NAT changes address information as traffic crosses a boundary. It is a translation function, separate from security filtering.",
    "example": "A receptionist can give callers a public contact number representing an internal extension.",
    "words": [
      {
        "term": "Inside local",
        "meaning": "The internal address used by the inside device."
      },
      {
        "term": "Inside global",
        "meaning": "The translated address representing it outside."
      },
      {
        "term": "Pool",
        "meaning": "A set of addresses available for dynamic translation."
      },
      {
        "term": "PAT/overload",
        "meaning": "Translation that uses port information so several sessions can share an external address."
      }
    ],
    "steps": [
      {
        "title": "Choose the translation model",
        "body": "Static uses a fixed one-to-one mapping; dynamic draws from a pool."
      },
      {
        "title": "Identify the boundary and traffic",
        "body": "Mark inside/outside interfaces and select which sources are translated."
      },
      {
        "title": "Verify active mappings",
        "body": "Generate test traffic, inspect translations and check return routing. A full pool can prevent new one-to-one mappings."
      }
    ],
    "caption": "The steps describe translation. An ACL used to select NAT traffic is not automatically an interface security filter.",
    "remember": "For ten dynamic addresses without overload, an eleventh simultaneous inside mapping may have no free address.",
    "exampleCaption": "The static mapping pairs 10.0.0.10 with 203.0.113.10. The later pool is a separate dynamic example; its ACL selects sources for translation rather than defining complete access security."
  },
  "4.2": {
    "idea": "NTP lets devices adjust their clocks to a selected time source. Matching clocks make event records easier to compare.",
    "example": "If two security cameras disagree about time, their recordings can make the same incident look like two different events.",
    "words": [
      {
        "term": "Time server",
        "meaning": "A device providing time to clients."
      },
      {
        "term": "Stratum",
        "meaning": "The number of synchronization steps from a reference clock."
      },
      {
        "term": "Offset",
        "meaning": "The measured difference between clocks."
      },
      {
        "term": "Synchronized",
        "meaning": "The device has selected and is following a time source."
      }
    ],
    "steps": [
      {
        "title": "Choose a suitable source",
        "body": "Use an intended, reachable and appropriately protected time server."
      },
      {
        "title": "Verify actual selection",
        "body": "Check NTP associations and synchronized status; a saved server address alone is not proof."
      },
      {
        "title": "Interpret the hierarchy",
        "body": "A client normally advertises its selected server’s stratum plus one. Stratum 16 means unsynchronized."
      }
    ],
    "caption": "This is a time-checking sequence. A lower stratum is not a guarantee that the reference clock is accurate or trustworthy.",
    "remember": "Devices can agree with one another and still share the same wrong time.",
    "exampleCaption": "ntp server chooses an upstream source. The commented ntp master example is a lab fallback that can distribute an incorrect local clock; show commands check actual synchronization."
  },
  "4.3": {
    "idea": "DHCP supplies device settings; DNS looks up records such as the address belonging to a website name.",
    "example": "DHCP is like being assigned a room and exit instructions. DNS is like looking a person up in a directory.",
    "words": [
      {
        "term": "Lease",
        "meaning": "A time-limited DHCP assignment."
      },
      {
        "term": "Option",
        "meaning": "An extra DHCP setting, such as gateway or DNS server."
      },
      {
        "term": "DNS record",
        "meaning": "A typed directory entry, such as A for IPv4 or AAAA for IPv6."
      },
      {
        "term": "Cache",
        "meaning": "A stored answer reused for a limited time."
      }
    ],
    "steps": [
      {
        "title": "Discover and offer",
        "body": "The client looks for DHCP service; a server proposes settings."
      },
      {
        "title": "Request and acknowledge",
        "body": "The client requests a lease and the server confirms it. An offer alone is not a completed assignment."
      },
      {
        "title": "Look up names when needed",
        "body": "DNS returns records; a correct answer still does not prove the application is reachable."
      }
    ],
    "caption": "The first two steps describe a common initial DHCPv4 exchange. DNS is a separate service, not a fifth DHCP message.",
    "remember": "Correct address settings and correct name lookup are separate dependencies.",
    "exampleCaption": "DORA abbreviates Discover, Offer, Request, Acknowledge. The DNS arrow means the name has an IPv4 A record, not that the web service has already answered."
  },
  "4.4": {
    "idea": "SNMP lets a monitoring system ask a device for information such as traffic counts and errors.",
    "example": "A supervisor can read a machine’s dashboard without needing permission to change every machine setting.",
    "words": [
      {
        "term": "Manager",
        "meaning": "The monitoring system asking questions."
      },
      {
        "term": "Agent",
        "meaning": "The device process answering management requests."
      },
      {
        "term": "OID",
        "meaning": "An identifier for one managed value."
      },
      {
        "term": "authPriv",
        "meaning": "An SNMPv3 level providing message authentication and encrypted content."
      }
    ],
    "steps": [
      {
        "title": "Ask for a value",
        "body": "The manager queries an object exposed by the device agent."
      },
      {
        "title": "Read or notify",
        "body": "Polling retrieves values; traps send unacknowledged events and informs request acknowledgment."
      },
      {
        "title": "Limit access",
        "body": "Use suitable SNMPv3 protection and only the needed read/write permissions."
      }
    ],
    "caption": "These are monitoring roles and safeguards. Authentication checks the message; privacy encrypts its content. They are different protections.",
    "remember": "Read-only monitoring usually does not need configuration-writing permission.",
    "exampleCaption": "The protection names build from no authentication/no privacy to authentication only, then both. The arrows compare levels, not a required sequence of configuration steps."
  },
  "4.5": {
    "idea": "Syslog records device events. Severity numbers indicate urgency, with smaller numbers meaning more serious events.",
    "example": "A collector is a shared incident notebook; matching timestamps help you place related events in order.",
    "words": [
      {
        "term": "Severity",
        "meaning": "The seriousness level, numbered 0 through 7."
      },
      {
        "term": "Facility",
        "meaning": "The subsystem or category producing a message."
      },
      {
        "term": "Threshold",
        "meaning": "The least serious level included at a logging destination."
      },
      {
        "term": "Collector",
        "meaning": "A server receiving logs from devices."
      }
    ],
    "steps": [
      {
        "title": "Read the message",
        "body": "Identify its source category, numeric severity and event label."
      },
      {
        "title": "Apply the threshold",
        "body": "Warnings is level 4, so it includes levels 0, 1, 2, 3 and 4."
      },
      {
        "title": "Compare timestamps",
        "body": "Use synchronized clocks and understand time zones before inferring event order."
      }
    ],
    "caption": "This is a log-reading sequence. Each destination, such as a local buffer or remote collector, can have its own logging settings.",
    "remember": "Level 0 is most urgent; level 7 is debugging.",
    "exampleCaption": "logging trap warnings sends 0–4 to the remote destination. It excludes notification 5, informational 6 and debugging 7; trap here names the logging threshold, not an SNMP trap."
  },
  "4.6": {
    "idea": "A DHCP relay carries local clients’ address requests to a server on another network. A DHCP client asks for its own settings.",
    "example": "A receptionist forwarding someone else’s form has a different job from a person filling in their own form.",
    "words": [
      {
        "term": "Client",
        "meaning": "The device requesting its own address settings."
      },
      {
        "term": "Relay",
        "meaning": "A gateway forwarding client DHCP messages to a server."
      },
      {
        "term": "Server pool",
        "meaning": "Settings and available addresses for a particular subnet."
      },
      {
        "term": "giaddr",
        "meaning": "The relay-address field helping the server identify the client subnet."
      }
    ],
    "steps": [
      {
        "title": "Receive a local request",
        "body": "The client broadcasts on its own subnet."
      },
      {
        "title": "Relay from the gateway",
        "body": "The client-facing routed interface forwards the request to the configured server and identifies the subnet."
      },
      {
        "title": "Return suitable settings",
        "body": "The server selects the correct pool and replies over a working return path."
      }
    ],
    "caption": "This describes relaying across a routed boundary. A helper on the client’s Layer 3 gateway is different from an endpoint access-port assignment.",
    "remember": "ip address dhcp requests settings; ip helper-address forwards other clients’ requests.",
    "exampleCaption": "g0/0 is shown as a DHCP client. g0/1 is a separate relay-facing example with its own static gateway address and helper pointing to the DHCP server."
  },
  "4.7": {
    "idea": "QoS decides how shared network capacity is used when traffic competes. It cannot create extra cable capacity.",
    "example": "A queue can let urgent customers go first or ask a busy customer to wait, but it cannot make a single cashier serve infinitely fast.",
    "words": [
      {
        "term": "Classification",
        "meaning": "Deciding which traffic group a packet belongs to."
      },
      {
        "term": "Marking",
        "meaning": "Writing a label so other devices can recognize its intended treatment."
      },
      {
        "term": "Policing",
        "meaning": "Dropping or relabeling traffic exceeding a configured rate."
      },
      {
        "term": "Shaping",
        "meaning": "Holding traffic in a queue and sending it later to smooth the rate."
      }
    ],
    "steps": [
      {
        "title": "Identify and label",
        "body": "Classify traffic and apply intended markings such as DSCP."
      },
      {
        "title": "Choose who waits",
        "body": "Schedule queues so delay-sensitive traffic gets suitable treatment without starving everything else."
      },
      {
        "title": "Control excess",
        "body": "Police by dropping/remarking, or shape by buffering. Buffered packets wait longer."
      }
    ],
    "caption": "This compares traffic treatment. A label requests a policy behavior; each downstream device must implement the intended policy.",
    "remember": "Shaping trades extra waiting for a smoother sending rate.",
    "exampleCaption": "The first arrow chain is a processing pipeline. Police and shape are alternatives for excess traffic, not two words for the same action."
  },
  "4.8": {
    "idea": "SSH provides an encrypted remote command session, but the network path, device identity and login settings must all work.",
    "example": "A locked conversation is useful only if you know you are talking to the intended person.",
    "words": [
      {
        "term": "Host key",
        "meaning": "The server key used to help verify the device’s identity."
      },
      {
        "term": "VTY lines",
        "meaning": "The logical remote terminal connections on a Cisco device."
      },
      {
        "term": "Local login",
        "meaning": "Checking a username and secret in the device’s own account database."
      },
      {
        "term": "Access-class",
        "meaning": "A rule restricting which sources may use the remote login lines."
      }
    ],
    "steps": [
      {
        "title": "Reach and identify the device",
        "body": "Verify management addressing and the expected host key; investigate changed-key warnings through a trusted channel."
      },
      {
        "title": "Protect and authenticate",
        "body": "Enable supported SSH, server keys and the intended user authentication."
      },
      {
        "title": "Test permitted access",
        "body": "Check the allowed source path, login and permissions; retain an authorized recovery route."
      }
    ],
    "caption": "This is the SSH access chain. A working encrypted transport does not automatically select local accounts or allow every source subnet.",
    "remember": "transport input ssh selects the transport; login local selects the local user database in the non-AAA example.",
    "exampleCaption": "The sample creates keys and an account before configuring VTY access. The shown password is illustrative and must be replaced; console recovery helps prevent accidental lockout."
  },
  "4.9": {
    "idea": "A file-transfer protocol moves files, but reliability, encryption and permission checks are different features.",
    "example": "Delivering a package successfully does not prove it was sealed or that its contents belong on the receiving machine.",
    "words": [
      {
        "term": "TFTP",
        "meaning": "A simple UDP-based transfer protocol without built-in login or encryption."
      },
      {
        "term": "FTP",
        "meaning": "A transfer protocol using separate control and data connections; ordinary FTP is unencrypted."
      },
      {
        "term": "Control connection",
        "meaning": "The exchange of transfer commands."
      },
      {
        "term": "Integrity check",
        "meaning": "A check that a copied file matches the expected file."
      }
    ],
    "steps": [
      {
        "title": "Choose a suitable method",
        "body": "Recognize TFTP/FTP behavior; use supported secure alternatives when needed."
      },
      {
        "title": "Check all transfer paths",
        "body": "FTP needs its control connection and the appropriate active/passive data connection."
      },
      {
        "title": "Validate the file before use",
        "body": "Check compatibility, integrity, storage and the correct installation process."
      }
    ],
    "caption": "This is a transfer checklist, not an upgrade procedure. Copying a software file successfully does not prove it will boot on that device.",
    "remember": "TCP reliability does not encrypt ordinary FTP.",
    "exampleCaption": "tftp: asks IOS for transfer details interactively. flash: refers to device storage. Copying to flash does not by itself change or validate the boot software."
  },
  "5.1": {
    "idea": "Security separates what could go wrong, what weakness allows it, and how likely and damaging it would be.",
    "example": "An unlocked door is a weakness; theft is a possible threat; risk depends on the chance and consequences of theft.",
    "words": [
      {
        "term": "Threat",
        "meaning": "A potential cause of harm."
      },
      {
        "term": "Vulnerability",
        "meaning": "A weakness that can be exploited."
      },
      {
        "term": "Exploit",
        "meaning": "A method of taking advantage of a weakness."
      },
      {
        "term": "Mitigation",
        "meaning": "A control reducing exposure, likelihood or impact."
      }
    ],
    "steps": [
      {
        "title": "Identify the weakness",
        "body": "For example, unpatched software or a weak password."
      },
      {
        "title": "Assess likely harm",
        "body": "Consider who can reach it and the business impact of misuse."
      },
      {
        "title": "Use several controls",
        "body": "Patch, limit access, monitor and plan recovery. A warning message alone does not block an attack."
      }
    ],
    "caption": "The sequence explains risk assessment. A potential exploit is not evidence that someone has already successfully used it.",
    "remember": "Reducing exposure does not always remove the underlying vulnerability.",
    "exampleCaption": "The arrow connects a weak password and guessing activity to a possible harmful outcome. MFA, rate limits and monitoring address different parts of that risk."
  },
  "5.2": {
    "idea": "Security depends on people, physical access and account-handling procedures as well as software settings.",
    "example": "A locked equipment room offers little protection if an unknown visitor is waved through the door.",
    "words": [
      {
        "term": "Phishing",
        "meaning": "A deceptive message trying to obtain information or trigger an unsafe action."
      },
      {
        "term": "Tailgating",
        "meaning": "Entering a restricted area by following an authorized person without individual approval."
      },
      {
        "term": "Offboarding",
        "meaning": "Removing someone’s organizational access when they leave."
      },
      {
        "term": "Trusted channel",
        "meaning": "An independently verified way to contact the intended person or organization."
      }
    ],
    "steps": [
      {
        "title": "Pause and verify",
        "body": "Check suspicious requests through a known contact route rather than replying with credentials."
      },
      {
        "title": "Control physical access",
        "body": "Protect racks, ports, consoles and power; verify each entrant."
      },
      {
        "title": "Maintain accounts",
        "body": "Joiner/leaver procedures must actually grant or remove accounts, keys and sessions."
      }
    ],
    "caption": "This is a people-and-access checklist. A written policy only helps when the corresponding actions are performed.",
    "remember": "Collecting a badge does not revoke a person’s network sessions.",
    "exampleCaption": "The arrows show the safe response to a suspicious call. Use a known official contact, not a number supplied by the suspicious caller."
  },
  "5.3": {
    "idea": "A device can have separate controls for logging in, entering privileged mode and protecting stored passwords.",
    "example": "A front-door key, a locked control room and a protected key cabinet solve different problems.",
    "words": [
      {
        "term": "User EXEC",
        "meaning": "A basic command session, commonly shown with >."
      },
      {
        "term": "Privileged EXEC",
        "meaning": "A more powerful command mode, commonly shown with #."
      },
      {
        "term": "Secret hash",
        "meaning": "A one-way representation used to verify a secret without storing its plaintext."
      },
      {
        "term": "Obfuscation",
        "meaning": "A reversible disguise, weaker than strong secret protection."
      }
    ],
    "steps": [
      {
        "title": "Create intended accounts",
        "body": "Use supported strong local secrets for the people who should log in."
      },
      {
        "title": "Select login behavior",
        "body": "On a non-AAA lab line, login local chooses the local account database."
      },
      {
        "title": "Protect privileged access",
        "body": "Use the intended enable secret and encrypted session transport. Legacy password obfuscation does not secure Telnet."
      }
    ],
    "caption": "This describes separate access controls. Actual command availability and storage formats depend on device software.",
    "remember": "A safely stored secret does not make an unencrypted network session private.",
    "exampleCaption": "The console and VTY blocks select local login independently. exec-timeout 5 0 closes an idle console session after five minutes; SSH protects the remote transport."
  },
  "5.4": {
    "idea": "Authentication uses evidence to check identity. Using two independent kinds of evidence is stronger than asking for two similar secrets.",
    "example": "A password is something you know; a physical security key is something you have.",
    "words": [
      {
        "term": "MFA",
        "meaning": "Authentication combining different factor categories."
      },
      {
        "term": "Knowledge factor",
        "meaning": "A secret you know, such as a password or PIN."
      },
      {
        "term": "Possession factor",
        "meaning": "Something you hold, such as a security key or protected private key."
      },
      {
        "term": "Revocation",
        "meaning": "Withdrawing a credential’s or session’s permission to be used."
      }
    ],
    "steps": [
      {
        "title": "Check the factor categories",
        "body": "Two passwords still belong to the same knowledge category."
      },
      {
        "title": "Protect recovery and keys",
        "body": "Strong enrollment, unique secrets and controlled resets matter."
      },
      {
        "title": "Protect the resulting session",
        "body": "Lock unused sessions and revoke access when needed. MFA at login does not guard an unattended session forever."
      }
    ],
    "caption": "This is an identity-and-session checklist. Biometrics add an inherence category: something you are.",
    "remember": "Count independent proof categories, not the number of login prompts.",
    "exampleCaption": "The arrows compare factor combinations. Password plus PIN remains knowledge plus knowledge; password plus hardware key combines knowledge and possession."
  },
  "5.5": {
    "idea": "An IPsec VPN protects selected traffic while it travels between its VPN endpoints over another network.",
    "example": "A sealed courier bag protects its contents between depots; it does not prove every item placed in the bag was safe.",
    "words": [
      {
        "term": "Site-to-site",
        "meaning": "A VPN joining networks through gateways."
      },
      {
        "term": "Remote access",
        "meaning": "A VPN joining an individual client to an organization."
      },
      {
        "term": "Tunnel",
        "meaning": "A logical protected path carrying the original packet inside another packet."
      },
      {
        "term": "Selector",
        "meaning": "A rule identifying which traffic should use VPN protection."
      }
    ],
    "steps": [
      {
        "title": "Agree on protection",
        "body": "VPN peers negotiate compatible identities, algorithms and keys."
      },
      {
        "title": "Send matching traffic",
        "body": "Routes and selectors must direct the intended packets into the tunnel."
      },
      {
        "title": "Verify both directions",
        "body": "Check protected-packet counters and permitted application traffic, not just tunnel-up status."
      }
    ],
    "caption": "This is a tunnel workflow. IPsec protects traffic in transit; it does not repair an infected endpoint or replace application permissions.",
    "remember": "A tunnel can be up while the intended client traffic never enters it.",
    "exampleCaption": "The double line marks the protected segment between gateways. The branch and headquarters LANs are outside that segment’s endpoints; check their local access policies too."
  },
  "5.6": {
    "idea": "An access control list is an ordered rule list. The first rule matching a packet decides its treatment.",
    "example": "A doorman checks a list from top to bottom and stops at the first applicable instruction.",
    "words": [
      {
        "term": "Permit/deny",
        "meaning": "Allow or block traffic for the feature applying the ACL."
      },
      {
        "term": "Wildcard mask",
        "meaning": "Bits indicating which address bits must match and which are ignored."
      },
      {
        "term": "Inbound/outbound",
        "meaning": "Entering or leaving the selected device interface."
      },
      {
        "term": "Implicit deny",
        "meaning": "The final unstated blocking rule for unmatched traffic."
      }
    ],
    "steps": [
      {
        "title": "Describe the intended traffic",
        "body": "Use source-only matching in a standard IPv4 ACL, or extended fields for protocol, destination and ports."
      },
      {
        "title": "Order specific rules carefully",
        "body": "An early broad permit can prevent a later deny from ever being considered."
      },
      {
        "title": "Attach and test",
        "body": "Apply to the intended feature/interface and direction. Verify allowed, blocked and return traffic."
      }
    ],
    "caption": "This shows rule evaluation. A basic ACL does not remember complete connection state the way a stateful firewall can.",
    "remember": "Defining an ACL is not the same as applying it to the traffic path.",
    "exampleCaption": "The example permits matching HTTPS from the user subnet, denies other IP traffic from that subnet, then permits other sources. It takes effect inbound on g0/0 only after attachment."
  },
  "5.7": {
    "idea": "Local-network protections check which devices and address claims should be trusted on access links.",
    "example": "A reception desk can limit badge use, reject fake assignment forms and verify that someone’s claimed room matches the register.",
    "words": [
      {
        "term": "Port security",
        "meaning": "A limit/check on source MAC addresses using a switch port."
      },
      {
        "term": "DHCP snooping",
        "meaning": "Filtering of DHCP server messages plus a table of observed client assignments."
      },
      {
        "term": "DAI",
        "meaning": "Dynamic ARP Inspection: checking local IPv4-to-MAC claims."
      },
      {
        "term": "Binding",
        "meaning": "A validated association of address, MAC and other context."
      }
    ],
    "steps": [
      {
        "title": "Limit device identities",
        "body": "Port security can drop extra MAC sources or disable the port, depending on violation mode."
      },
      {
        "title": "Trust intended address services",
        "body": "DHCP snooping accepts legitimate server replies along deliberately trusted paths."
      },
      {
        "title": "Validate address claims",
        "body": "DAI checks ARP using bindings or an appropriate static-host design. Its trust setting is separate."
      }
    ],
    "caption": "This compares three protections. Trust means bypassing a particular check on that interface, not declaring every connected host safe.",
    "remember": "A statically addressed host may need a validated exception because it has no DHCP-learned binding.",
    "exampleCaption": "g0/24 is only an example of a verified server/gateway-facing path. Do not copy trust onto every client port. Sticky port-security learning also needs a saved configuration to persist."
  },
  "5.8": {
    "idea": "AAA separates proving identity, permitting actions and recording activity.",
    "example": "At a workplace, showing a badge, being allowed into a particular room and having an entry record are three separate functions.",
    "words": [
      {
        "term": "Authentication",
        "meaning": "Checking who the user is."
      },
      {
        "term": "Authorization",
        "meaning": "Deciding what that user may do."
      },
      {
        "term": "Accounting",
        "meaning": "Recording activity such as sessions or commands."
      },
      {
        "term": "Fallback",
        "meaning": "Trying a later configured method in the conditions the platform supports."
      }
    ],
    "steps": [
      {
        "title": "Authenticate",
        "body": "Validate the user’s identity."
      },
      {
        "title": "Authorize",
        "body": "Decide whether the requested command or resource is allowed."
      },
      {
        "title": "Account",
        "body": "Record the session or command as supported and configured."
      }
    ],
    "caption": "These are separate AAA functions, not a guarantee that every deployment records every command. A server rejection differs from a server being unavailable.",
    "remember": "Local fallback normally does not override an explicit remote rejection.",
    "exampleCaption": "The arrows pair each event with its AAA purpose. Login success alone does not authorize every command or prove an audit record was produced."
  },
  "5.9": {
    "idea": "Wireless security must establish the right identity and protect data. Similar network names do not prove either one.",
    "example": "A familiar shop sign does not prove the person asking for your password works for that shop.",
    "words": [
      {
        "term": "Personal mode",
        "meaning": "Wireless security using shared-credential methods such as WPA2 PSK or WPA3 SAE."
      },
      {
        "term": "Enterprise mode",
        "meaning": "Wireless authentication using 802.1X/EAP and an authentication server."
      },
      {
        "term": "Encryption",
        "meaning": "Making content unreadable without the appropriate keys."
      },
      {
        "term": "Certificate validation",
        "meaning": "Checking trusted issuers and the expected server identity."
      }
    ],
    "steps": [
      {
        "title": "Identify the security generation",
        "body": "WEP/TKIP are legacy. WPA2 commonly uses AES-CCMP; WPA3 adds newer requirements."
      },
      {
        "title": "Choose the identity method",
        "body": "Personal and Enterprise use different authentication workflows."
      },
      {
        "title": "Verify the negotiated result",
        "body": "Check client support and server identity. WPA3-Personal SAE improves resistance to offline password guessing."
      }
    ],
    "caption": "This is a security comparison, not a recommendation to configure every generation. Compatibility modes can affect the protection actually used.",
    "remember": "Hiding the SSID or increasing signal strength does not authenticate the server or encrypt traffic.",
    "exampleCaption": "The arrows associate generations with mechanisms. Enterprise is an authentication approach; AES-CCMP is data protection. They describe different parts of security."
  },
  "5.10": {
    "idea": "A WPA2-Personal network needs a shared passphrase, the correct encryption choice and the intended client network mapping.",
    "example": "Having the correct door code gets you through the door, but it does not ensure you were directed into the right room.",
    "words": [
      {
        "term": "PSK",
        "meaning": "Pre-shared key used for Personal security."
      },
      {
        "term": "AES-CCMP",
        "meaning": "The data-protection suite commonly selected with WPA2."
      },
      {
        "term": "Association",
        "meaning": "A client’s initial wireless connection relationship with an AP."
      },
      {
        "term": "Client subnet",
        "meaning": "The IP address block assigned to that client network."
      }
    ],
    "steps": [
      {
        "title": "Set Personal security",
        "body": "Choose WPA2, AES-CCMP and PSK rather than Enterprise 802.1X."
      },
      {
        "title": "Map and enable the WLAN",
        "body": "Attach it to the intended VLAN/policy and AP."
      },
      {
        "title": "Test beyond the password",
        "body": "Verify the client’s address, gateway, name lookup and allowed application access."
      }
    ],
    "caption": "These are conceptual steps; controller menus vary. Ordinary ASCII passphrases use 8–63 characters; supported 64-hex raw keys are a different input format.",
    "remember": "A successful password check can coexist with a wrong VLAN or missing DHCP service.",
    "exampleCaption": "The menu path is illustrative. After Apply, inspect a real client’s security and VLAN/address result rather than treating the saved screen as complete proof."
  },
  "6.1": {
    "idea": "Automation lets software repeat network tasks consistently. It can also repeat a mistake very quickly.",
    "example": "A spreadsheet formula saves work across many rows, but a wrong formula copies the same error everywhere.",
    "words": [
      {
        "term": "Intended state",
        "meaning": "What the approved design says settings should be."
      },
      {
        "term": "Drift",
        "meaning": "A difference between intended and actual state."
      },
      {
        "term": "Idempotent",
        "meaning": "Reapplying the same desired state does not create extra unwanted changes."
      },
      {
        "term": "Rollback",
        "meaning": "A way to restore an earlier working state."
      }
    ],
    "steps": [
      {
        "title": "Observe before changing",
        "body": "Collect current facts and compare them with the approved intended state."
      },
      {
        "title": "Review and limit the first change",
        "body": "Inspect the differences and test on a small representative group."
      },
      {
        "title": "Verify and expand",
        "body": "Check actual results, keep recovery available, then extend the change."
      }
    ],
    "caption": "This is an automation workflow. A successful command or API response can confirm a request without proving that users can reach their applications.",
    "remember": "Automate verification and recovery planning as well as configuration.",
    "exampleCaption": "Each arrow is a workflow stage. Idempotence means repeating the desired-state operation leaves the intended result stable; arbitrary repeated commands do not automatically have that property."
  },
  "6.2": {
    "idea": "A controller coordinates many devices, but those devices still have their own forwarding work and software.",
    "example": "A fleet office coordinates buses; it does not replace each bus’s engine or maintenance schedule.",
    "words": [
      {
        "term": "Controller-based",
        "meaning": "Management or control coordinated through a controller system."
      },
      {
        "term": "Traditional management",
        "meaning": "Administering devices through their individual interfaces."
      },
      {
        "term": "Forwarding state",
        "meaning": "The information a device currently uses to deliver traffic."
      },
      {
        "term": "Compatibility",
        "meaning": "Whether particular controller and device software versions support working together."
      }
    ],
    "steps": [
      {
        "title": "Coordinate policy",
        "body": "Use the controller’s supported inventory, templates and policy workflows."
      },
      {
        "title": "Keep devices healthy",
        "body": "Maintain compatible device software as well as controller software."
      },
      {
        "title": "Plan controller loss",
        "body": "Check which installed functions continue and which changes/services require the controller."
      }
    ],
    "caption": "These are responsibilities, not a requirement for user packets to pass through the controller. Failure behavior depends on the architecture.",
    "remember": "Centralized management does not remove device software maintenance.",
    "exampleCaption": "The arrows show who configures whom. They do not show the physical path taken by every user packet."
  },
  "6.3": {
    "idea": "Networking functions can be separated into deciding paths, forwarding packets and administering the system.",
    "example": "A traffic planner decides routes, a junction moves vehicles and an operator changes settings and reads counters.",
    "words": [
      {
        "term": "Control plane",
        "meaning": "The functions that learn or calculate forwarding information."
      },
      {
        "term": "Data plane",
        "meaning": "The functions that forward traffic using that information."
      },
      {
        "term": "Management plane",
        "meaning": "The functions for configuration and observation."
      },
      {
        "term": "Underlay/overlay",
        "meaning": "The transport network underneath, and logical connectivity built over it."
      }
    ],
    "steps": [
      {
        "title": "Applications express intent",
        "body": "A northbound API commonly connects applications to a controller."
      },
      {
        "title": "Controller coordinates infrastructure",
        "body": "A southbound interface commonly connects it to managed devices."
      },
      {
        "title": "Devices forward traffic",
        "body": "The data path uses the actual network, including underlay transport and any overlay tunnels."
      }
    ],
    "caption": "North and south are architecture labels, not compass directions. This management/control relationship is distinct from the user-data path.",
    "remember": "An overlay still depends on working connectivity beneath it.",
    "exampleCaption": "The vertical arrows show application/controller/device interfaces. The final forwarding arrow describes user traffic; it does not require a detour through the application or controller."
  },
  "6.4": {
    "idea": "AI can summarize information, predict conditions and highlight patterns, but its output needs checking against actual network evidence.",
    "example": "A weather forecast helps planning without proving it will rain at one exact location.",
    "words": [
      {
        "term": "Predictive AI",
        "meaning": "Estimating an outcome, such as future congestion."
      },
      {
        "term": "Generative AI",
        "meaning": "Producing new content, such as a summary or configuration draft."
      },
      {
        "term": "Telemetry",
        "meaning": "Measurements collected from devices and services."
      },
      {
        "term": "False positive",
        "meaning": "An alert that labels normal behavior as a problem."
      }
    ],
    "steps": [
      {
        "title": "Supply representative evidence",
        "body": "Include normal busy periods as well as quiet periods."
      },
      {
        "title": "Read the output as a proposal",
        "body": "A prediction or fluent explanation can still be wrong."
      },
      {
        "title": "Verify before acting",
        "body": "Check device support, observed state and policy, then use a controlled change."
      }
    ],
    "caption": "The steps show an evidence workflow. A model trained only on quiet nights may misclassify a normal daytime backup.",
    "remember": "The actual device parser and supported documentation take precedence over an unsupported generated command.",
    "exampleCaption": "The arrows show measurements leading to investigation and a checked change. An anomaly is a reason to investigate, not a final proof of an attack."
  },
  "6.5": {
    "idea": "An API lets software request information or changes from another system using defined messages. REST-style APIs often use web-style requests.",
    "example": "It resembles a service counter with defined request forms: reading a record and changing a record need different forms.",
    "words": [
      {
        "term": "Resource",
        "meaning": "The item represented by an API address, such as one device."
      },
      {
        "term": "Method",
        "meaning": "The requested action, such as GET or PATCH."
      },
      {
        "term": "Header",
        "meaning": "Extra message information, such as content type or credentials."
      },
      {
        "term": "Status code",
        "meaning": "A response number reporting success or a type of failure."
      }
    ],
    "steps": [
      {
        "title": "Build the request",
        "body": "Select the URL, action, authentication, headers and any body."
      },
      {
        "title": "Interpret the response",
        "body": "Read status and returned content: 401 concerns authentication, 403 forbidden access, 429 too many requests."
      },
      {
        "title": "Verify and respect limits",
        "body": "Check actual results and honor retry guidance instead of sending requests in a tight loop."
      }
    ],
    "caption": "This is a request/response workflow. HTTPS protects the transport; permission and method meaning still require their own checks.",
    "remember": "Content-Type describes what you send; Accept describes the response format you want.",
    "exampleCaption": "GET reads devices in this example. Authorization carries a placeholder token, Accept asks for JSON, 200 reports success, and the JSON body contains an items list."
  },
  "6.6": {
    "idea": "Ansible and Terraform help describe and apply intended changes, with different ways to organize and track their work.",
    "example": "A work list names tasks and targets; a building plan describes the desired result and tracks the objects built.",
    "words": [
      {
        "term": "Inventory",
        "meaning": "Ansible’s list of managed hosts and associated values."
      },
      {
        "term": "Playbook",
        "meaning": "Ansible’s organized tasks for selected hosts."
      },
      {
        "term": "Provider",
        "meaning": "Terraform’s integration for a particular service or platform."
      },
      {
        "term": "State",
        "meaning": "Terraform’s stored mapping between configured resources and real objects."
      }
    ],
    "steps": [
      {
        "title": "Describe targets and intent",
        "body": "Choose supported Ansible modules or Terraform providers for the actual platform."
      },
      {
        "title": "Preview or review the work",
        "body": "Inspect tasks or a Terraform plan before applying changes."
      },
      {
        "title": "Apply and verify",
        "body": "Check results and protect credentials and state, which may contain sensitive values."
      }
    ],
    "caption": "This compares workflows. The tools overlap in some uses but are not identical or universally interchangeable.",
    "remember": "A preview is not an applied change; a completed apply is not independent proof of user service health.",
    "exampleCaption": "The indented YAML is an Ansible task using a Cisco module to set a hostname. Terraform init, plan and apply are separate workstation commands, not IOS commands."
  },
  "6.7": {
    "idea": "JSON is a text format for structured data. Punctuation and quotation marks tell software what each value means.",
    "example": "A form distinguishes a checkbox from a text box even when the text box contains the word false.",
    "words": [
      {
        "term": "Object",
        "meaning": "Named key/value pairs enclosed in braces { }."
      },
      {
        "term": "Array",
        "meaning": "An ordered list enclosed in square brackets [ ]."
      },
      {
        "term": "String",
        "meaning": "Text enclosed in double quotation marks."
      },
      {
        "term": "Boolean/null",
        "meaning": "Unquoted true or false, and the explicit null value."
      }
    ],
    "steps": [
      {
        "title": "Locate the container",
        "body": "Braces mean an object; square brackets mean a list."
      },
      {
        "title": "Read each value’s type",
        "body": "1500 is a number; \"1500\" is text. false is a boolean; \"false\" is text."
      },
      {
        "title": "Follow nested levels",
        "body": "A list can contain objects. A present null field differs from a missing field."
      }
    ],
    "caption": "This is a reading sequence. JSON does not permit comments, trailing commas, single-quoted strings or undefined.",
    "remember": "Visible words alone are insufficient: quotation marks can change the type.",
    "exampleCaption": "hostname is text, enabled is a boolean and mtu is a number. interfaces is an array containing an object whose ip field is explicitly null."
  }
};

export const FOUNDATION_WORDS = [
 ['Network','Connected devices exchanging information.'],['Protocol','An agreed set of rules for exchanging messages.'],
 ['Packet','A small addressed piece of information traveling through a network.'],['Frame','A local-delivery wrapper carrying information over one link.'],
 ['IP address','An address used when delivering packets within and between networks.'],['MAC address','An identifier used for local Ethernet delivery.'],
 ['Subnet and prefix','An IP address group and the boundary describing that group, such as /24.'],['Gateway','A router used to reach another network.'],
 ['Interface and port','An interface is a connection. An Ethernet port is a physical socket; a TCP/UDP port number identifies an application conversation.'],
 ['Bit and byte','A bit is 0 or 1. Eight bits make one byte.'],['Traffic','The messages moving through a network.'],
 ['Client and server','A client requests a service; a server provides it.']
] as const;

export const CLI_PRIMER = [
 'The CLI is a text-based control panel. Type one command per line on the device named in the block. A show command normally reads information; configuration commands change active settings.',
 'A prompt ending in > is basic user EXEC access, # is privileged EXEC access, and (config…)# identifies a configuration mode. Do not type the prompt itself. enable enters privileged EXEC; configure terminal enters global configuration. interface … enters interface context; exit moves back one level; end returns to privileged EXEC.',
 'Run show, ping and copy from privileged EXEC unless a block says otherwise. Replace every <PLACEHOLDER>, interface and address with your lab values. Lines starting with ! are comments. Apply blocks on the named devices in order; alternatives are separate labs.',
 'Configuration changes take effect immediately. First verify the intended result, then use copy running-config startup-config when you want those settings retained after reboot. Leaving configuration mode alone does not save them.'
] as const;

export const VLAN_DIAGRAM_READING = [
 'Read the picture as two switches joined by one shared cable. SW2 connects local devices; SW1 also supplies the gateways that route between groups. The trunk carries VLAN labels over the cable so the groups stay distinct. Gi1/0/24 is the port name at each cable end.',
 'Each address-plan row is one VLAN, normally with its own IP subnet. A /24 here means the last address number varies within that group. Hosts use the gateway in their own row to reach another group. Access ports connect hosts; the trunk joins the switches.'
] as const;
