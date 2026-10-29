# Assessment answer coverage self-test

Reviewed 2026-10-28. Target: CCNA 200-301 v1.1. **312/312 assessment items have reviewed teaching evidence.**

## What was checked

The practice, mock-exam and flashcard modes share one question bank. Each bank question was checked once. The audit also includes every lesson knowledge check and worked review check. Lesson questions that repeat a bank item remain separate assessment occurrences; the evidence was reused only after comparing their question, options and answer.

Only material rendered as beginner guides and plain-language leads, lesson introductions, core explanations, blueprint subtopics, explanatory textbook sections and current platform-labeled command guides counts as evidence. Quiz answer explanations, lesson answer keys, worked solutions, this report, external links and book chapter references do not count. The private external bank reviewed previously is outside this test. For objectives with lettered subtopics, expand **Objective overview** to read the core explanations. The evidence labels identify the relevant paragraph, subtopic or command module.

| Pool | Items | Initially supported | Initially partial | Initially missing | Now supported |
| --- | --- | --- | --- | --- | --- |
| Practice / mock / flashcards | 206 | 191 | 9 | 6 | 206 |
| Lesson knowledge checks | 53 | 53 | 0 | 0 | 53 |
| Worked review checks | 53 | 50 | 2 | 1 | 53 |

**Direct** means the decisive fact is stated in teaching text or a command example. **Derived** means the learner applies a taught rule/calculation, adapts a command template, combines explanations or reasons about a scenario. Numerical examples need not use the question's exact addresses. Some valid references are in another objective; the complete audit links to the actual teaching location.

## Gaps and clarifications completed

| Assessment | Initial finding | Teaching detail added |
| --- | --- | --- |
| extra-2 | partial | Binary mask construction from octet bit weights, not merely a prefix/mask label. |
| expanded-1.2-cloud-responsibility | missing | IaaS guest-OS responsibility versus PaaS/SaaS service boundaries. |
| expanded-1.8-ipv6-default-router-ra | partial | The RA source is the link-local router identity; router lifetime controls default eligibility. |
| expanded-1.9-unique-local-scope | partial | Unique-local prefixes are routable internally without intended public Internet routing. |
| expanded-1.12-hypervisor-role | partial | A hypervisor allocates/schedules physical compute and I/O for VMs. |
| expanded-2.3-interface-discovery-control | missing | Interface no cdp enable differs from device-wide no cdp run. |
| expanded-3.2-same-protocol-metric | partial | For comparable OSPF paths, lower accumulated cost is preferred. |
| expanded-4.2-ntp-stratum | missing | A synchronized downstream device advertises its selected server stratum plus one. |
| expanded-4.3-dhcp-offer-versus-ack | partial | An OFFER proposes configuration; the ACK confirms assignment. |
| expanded-4.8-ssh-host-identity | missing | Verify an unexpected SSH host-key change through a trusted channel. |
| expanded-5.5-ipsec-protection-scope | partial | IPsec transit protection does not establish endpoint or application trust. |
| expanded-5.9-enterprise-server-validation | missing | Validate the EAP server certificate chain and expected identity to resist impersonation. |
| expanded-6.2-managed-device-software | partial | Controller management does not replace managed-device image maintenance. |
| expanded-6.5-http-media-headers | partial | application/json expresses the ordinary JSON media type; actual APIs can specify other types. |
| expanded-6.5-http-rate-limit | missing | Retry-After supplies a delay/date; honor it and reduce request pressure. |
| worked-check-1.5 | partial | HTTP/3 commonly uses UDP 443; a TCP-only rule excludes that transport. |
| worked-check-1.8 | partial | A usable IPv6 default router depends on Router Advertisement lifetime and required ICMPv6 reachability. |
| worked-check-5.4 | missing | MFA authenticates an event; session locking, authorization and revocation remain necessary. |

These findings led to 17 new teaching paragraphs in 16 objectives. Question IDs, options, correct answers and scoring were retained. The additions teach the underlying rules and operational distinctions rather than inserting a list of answer keys.

## Beginner-language editorial review

Beginner-language review of all 206 bank rationales, 53 lesson explanations and 53 worked answers. Prompts, choices, selected answer indexes, IDs and existing cited teaching passages were retained. Worked-answer wording was revised after checking its reasoning against the same teaching evidence.

The site now includes an everyday-language introduction, local word definitions, numbered walkthrough and reading caption for every objective, plus plain-language leads for every subtopic, depth section and command module. These help introduce the technical vocabulary; they do not replace the detailed exam terminology. Editorial checks are not a measurement of how every reader will understand a passage. Novice-user testing has not been performed.

## All items and evidence

[Download the complete question-by-question CSV](assessment-coverage.csv). It includes every prompt, correct answer, evidence basis, initial finding, current result, actual teaching excerpts and links to the relevant material.

| Domain | Bank questions | Lesson checks | Worked checks | Covered |
| --- | --- | --- | --- | --- |
| 1.0 Network Fundamentals | 51 | 13 | 13 | 77/77 |
| 2.0 Network Access | 33 | 9 | 9 | 51/51 |
| 3.0 IP Connectivity | 22 | 5 | 5 | 32/32 |
| 4.0 IP Services | 35 | 9 | 9 | 53/53 |
| 5.0 Security Fundamentals | 38 | 10 | 10 | 58/58 |
| 6.0 Automation & Programmability | 27 | 7 | 7 | 41/41 |

## Re-run and maintenance

Run `npm run coverage:check`. The same assertions run in `npm test`. Run `npm run docs:sync` after reviewed content changes to refresh this report and CSV, and `npm run docs:check` to verify them without writing files.

The curated mappings are in `tests/fixtures/assessment-coverage.json`. Fingerprints cover each assessment's prompt, options, answer and rationale, plus every cited teaching passage. A new/unreviewed item, missing passage or changed fingerprint fails the check and requires content review. Documentation sync does not approve evidence or update these review fingerprints.

This combines an AI-assisted item-by-item content review with automated reference/drift checks. Passing proves that the reviewed items still point to the reviewed teaching evidence. It does not independently prove semantic entailment, certify Cisco command behavior, predict an exam result or validate a learner's comprehension. Changes can require fresh editorial review even if a keyword remains present.

## References for clarified details

- [Cisco NTP hierarchy](https://www.cisco.com/c/en/us/support/docs/ip/network-time-protocol-ntp/108076-ntp-troubleshoot.html).
- [RFC 4861: IPv6 Router Advertisements](https://www.rfc-editor.org/rfc/rfc4861.html), [RFC 4193: unique-local scope](https://www.rfc-editor.org/rfc/rfc4193.html).
- [RFC 4251: SSH server authentication](https://www.rfc-editor.org/rfc/rfc4251.html), [RFC 5216: EAP-TLS certificate validation](https://www.rfc-editor.org/rfc/rfc5216.html).
- [RFC 9110: media headers and Retry-After](https://www.rfc-editor.org/rfc/rfc9110.html), [RFC 6585: HTTP 429](https://www.rfc-editor.org/rfc/rfc6585.html), [RFC 9114: HTTP/3](https://www.rfc-editor.org/rfc/rfc9114.html).
- The site's existing [curriculum and command references](question-bank-review.md) supply the remaining stable protocol and platform context.
