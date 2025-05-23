---
title: CrowdStrike — moving EDR/MDR/XDR boundaries and making it worth
author: martina
toc: true
toc_min_header: 1
date: 2024-02-14 12:00:00
categories: [Articles, Cybersecurity]
tags: [Cybersecurity, Endpoint Security, EDR]
image:
  path: /assets/img/posts/img_crowdstrike_moving_boundaries/crowdstrike-1.webp
  alt: CrowdStrike logo
---
For several years, CrowdStrike has been recognized as a Leader for EDR (Endpoint Detection and Response) and EPP (Endpoint Protection Platform) in [Gartner Magic Quadrant](https://www.crowdstrike.com/en-us/blog/crowdstrike-named-leader-2024-gartner-magic-quadrant-endpoint-protection/) and [The Forrester Wave](https://www.crowdstrike.com/en-us/resources/reports/forrester-wave-mdr-services-q1-2025/).


## What is CrowdStrike?

CrowdStrike Falcon is a fully cloud-based next-generation endpoint protection solution offering SaaS (Software as a Service) to its customers. Falcon provides advanced detection, prevention, monitoring, and search capabilities allowing security teams to proactively defend against sophisticated threats while managing risks and vulnerabilities detected in the environment.

The product is based on:

* **Unified platform** — simplifies enterprise telemetry management, leverages real-time IOAs and threat intelligence alongside vulnerability management to deliver accurate detection, protection and remediation;
* **Single-agent** — a light-weight agent that holds all Falcon’s services based on the license agreement with minimal impact on endpoint performance;
* **Threat graph** — the brain behind the Falcon platform. It continuously ingests and correlates trillions of daily security events across all customer endpoints, workloads, IT assets, and configurations. Graph database captures and connects gathered data elements into relationships for further investigation. Alongside threat intelligence data, the threat graph gives insight into customer's endpoints, links them, and identifies their role and the risk they pose to the environment.
* **Asset graph** — monitors and tracks all assets and their interactions, giving a comprehensive view of risks and vulnerabilities. As visibility is one of the main principles of cybersecurity, the asset graph helps eliminate blind spots when dealing with asset management.


## What services does CrowdStrike offer?

CrowdStrike focuses on an all-in-one security approach by implementing functionalities as today’s threat landscape demands it while reducing the impact on the endpoint performance.

![CrowdStrike architecture](/assets/img/posts/img_crowdstrike_moving_boundaries/CS_architecture.png)
_Figure 1: Falcon platform overview — Courtesy of crowdstrike.com/blog/_


Falcon’s built-in capabilities include (but are not limited to):

* **Next-Generation Antivirus (NGAV)** — a combination of AI, behavioral detection, and machine learning algorithms that anticipates, prevents and detects both known and unknown threats in real-time. It goes way beyond traditional antivirus solutions which are mostly signature-based. With its nature and time-to-value, NGAV quickly adapts to always-evolving and malicious threats. NGAV is part of CrowdStrike’s core module, `Falcon Prevent`, on which other modules and functionalities are built.
* **Device Control** - provides visibility and control over the safe utilization of removable devices across the organization. Key capabilities of device control in CrowdStrike are centered on the automatic discovery of new devices and strict policy enforcement. When a new USB device is discovered, Falcon automatically reports all its metadata with information on the manufacturer, product name and serial number. Defining policies for USB devices limits device usage by allowlisting or blocklisting them by class, vendor, specific device ID, and more.
* **Threat Intelligence** — knowledge source about adversaries, their intents, motivations and methods that can be used to make faster and more informed decisions when protecting and responding to malicious threats. It centers its database on collected, processed and analysed data which plays an important role in understanding and predicting the adversary’s behavior and mitigating potential attacks. The Falcon Intelligence module simplifies incident investigations and provides intelligence reports, threat monitoring and expert malware analysis to upload malware samples to CrowdStrike for deeper analysis.
* **Firewall Management** — simplifies enforcement and maintenance of firewall rules and policies with a centralized approach.
* **Threat Hunting** — as a proactive approach to searching and identifying non-remediated threats within the organization’s network, threat hunting uses the power of the threat graph to hunt, investigate and guide security teams on any malicious activities in the environment. As an essential part of cyber defense, threat hunting uses queries and automation to extract more specific data for possible hunting leads. Falcon provides a managed threat hunting service, `Falcon Overwatch` module with 24/7 human expertise, threat intelligence and real-time visibility into threat graph data.
* **IT Hygiene** — The `Falcon Discover` module provides full visibility into who, what and where entities inside the organization are accessed. Keeping track of all assets, accounts and applications in one place improves an organization’s ability to spot blind spots, that is, find out where it is least protected and close those gaps on time. CrowdStrike separates managed (having sensor installed) from unmanaged (not having sensor installed) devices and provides a list of all applications installed and accounts accessing those devices with information on successful and failed logins.
* **Vulnerability management** — a continuous process of identifying, prioritizing and remediating weaknesses in IT assets and configurations. The Falcon Spotlight module offers a real-time assessment of vulnerability exposure in the organization with vulnerability prioritization and remediation guidance. Alongside the standard scoring system, CVSS, Falcon uses its own ExPRT.AI (Expert Prediction Rating AI) model which is dynamically adjusted based on the change from the threat intelligence data and the likelihood of the exploitation.
> [!NOTE]
>recently Falcon merged the Discover and Spotlight modules into `Exposure Management module`

![Vulnerability Management cycle](/assets/img/posts/img_crowdstrike_moving_boundaries/vulnerability-management-cycle.png)
_Figure 2: Vulnerability Management cycle — courtesy of crowdstrike.com_

***Identity Protection** — integrates network traffic and user behavior monitoring to the complete overview of the security posture. Falcon’s Identity Protection enforces additional security measures on Domain Controllers and Microsoft Active Directory by providing visibility and detecting identity-related anomalies across the organizational landscape. Falcon IDP module sets up the baseline for all observed network traffic, user’s behavior, roles, system access and more, after which any action that deviates from the learned can be interpreted as an anomaly and is followed by an investigation. Identity Protection module can be integrated with the organization’s existing IAM tools and processes helping and complementing them with its threat detection and prevention capabilities.

### Platform bundles and licenses
Falcon bundles are divided based on the size of the company. It offers bundles (set of licenses) for enterprises and smaller businesses. Depending on the needs, CrowdStrike integrates the above modules and their dedicated functionalities into one or more licences offering to cover as much security landscape as one business needs. The whole list of available licenses is available CrowdStrike's official website.

## Falcon API and integrations
Developed as an “API first platform”, CrowdStrike provides great flexibility when it comes to integration with other IT tools. It is a set of REST-based endpoints that allow performing actions programmatically instead of using the console. The UI administrators can define multiple API clients along with the required scope, depending on which access point is needed (detections, hosts, policies, modules, etc). The customer or other security teams can query the created API using the given credentials. It is based on the OAuth2 authentication.

![CrowdStrike API](/assets/img/posts/img_crowdstrike_moving_boundaries/api_call.png)
_Figure 3: Understanding CrowdStrike API — courtesy of crowdstrike.com/blog/_

Depending on the needs and tools integrated via API, you can choose both read and write permissions for most of the scopes available, meaning that you can “remotely” manage the host’s network containment status, IOCs or IOAs, manage detection status and much more.

Some of the tools that security teams and clients integrate with CrowdStrike are SIEM, IBM’s QRadar, ServiceNow, Microsoft Sentinel, and many more. The complete list can be found on CrowdStrike’s [Marketplace](https://marketplace.crowdstrike.com/).


## In conclusion…
CrowdStrike Falcon is a complete cloud security solution that covers endpoint security with its NGAV and EDR capabilities. With its modules, Falcon provides capabilities for threat-hunting, visibility into threat intelligence data along with IT hygiene, protection against identity-based attacks and account misconfigurations. All functionalities are monitored in one central console and integrated into the Falcon sensor which functions by monitoring and sending all endpoint telemetry to the CrowdStrike cloud and applying policies configured in the console.

CrowdStrike learns independently and with its flexible nature, it provides easy access and integration with other IT and security applications.

For more information on the product see the links below:
https://www.crowdstrike.com
https://www.crowdstrike.com/blog/tech-center/