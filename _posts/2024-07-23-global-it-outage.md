---
title: Global IT outage - BSOD and CrowdStrike
author: martina
toc: true
toc_min_header: 1
date: 2024-07-23 12:00:00
categories: [Articles, Endpoint Security]
tags: [EDR/MDR/XDR, CrowdStrike, BSOD]
image:
  path: /assets/img/posts/img_global_it_outage/bsod.webp
  alt: Blue screen of death
---
Last week we witnessed one of the largest IT outages affecting the travel, banking, business, and health sectors worldwide in the form of BSOD (Blue screen of death) on Windows machines.

The (in)famous **Blue screen of death** (known as BSOD, fatal error or bugcheck) indicates the system reached a critical condition from where it cannot continue to operate normally and requires troubleshooting. Possible causes include hardware failures or unexpected termination of a crucial process or a thread.

## The cause
System, program and application updates are a common part of information security. They are continuously created, tested and pushed to endpoints. The massive IT outage was caused by one of them, **CrowdStrike’s channel file update**. The faulty update was pushed into the cloud throughout the night causing Windows machines with Falcon sensor installed to crash, showing the BSOD. That marked the starting point of thousands of machines going down and critical systems crashing.

Unlike policy updates triggered from the centralized console that affect the sensor’s version and prevention and detection capabilities, the channel file update is part of Falcon’s behavioral protection mechanism that influences the sensor’s logic. The channel configuration files are pushed to sensors frequently to stay ahead with discovered TTPs (Tactics, Techniques and Procedures).

In this case, the channel file C-00000291*.sys had faulty logic and disrupted the systems. It affected all Windows machines online on Friday, July 19, 2024, between 04:09 UTC and 05:27 UTC. Systems that were offline at the time were not impacted by the update as CrowdStrike immediately reverted the changes by pulling the file from the cloud. Linux and MacOS were not impacted.

## The fix
### Identifying impacted hosts
* Windows hosts showing BSOD
* New granular status dashboard in the CrowdStrike console.

### Remediation
CrowdStrike provided the workaround action to enter the safe mode and remove the specified channel file from C:\Windows\System32\drivers\CrowdStrike.

For more details on Microsoft’s recommendations on impacted endpoints see [here](https://support.microsoft.com/en-us/topic/kb5042421-crowdstrike-issue-impacting-windows-endpoints-causing-an-0x50-or-0x7e-error-message-on-a-blue-screen-b1c700e0-7317-4e95-aeee-5d67dd35b92f).<br>
For more details on Microsoft’s recommendations for impacted servers see [here](https://support.microsoft.com/en-us/topic/kb5042426-crowdstrike-issue-impacting-windows-servers-causing-an-0x50-or-0x7e-error-message-on-a-blue-screen-0d7741f7-aca1-4487-8a54-bd431cb49455).<br>
For more details on AWS’s recommendations for impacted resources see [here](https://repost.aws/en/knowledge-center/ec2-instance-crowdstrike-agent).<br>
For more details on Azure status see [here](https://azure.status.microsoft/en-gb/status).

## CrowdStrike
CrowdStrike is one of the leading EDR/MDR/XDR solutions on the market with thousands of clients, mostly targeting organizations. Its lightweight agent provides detection, prevention, and remediation capabilities while constantly monitoring and gathering data from end machines for further analysis in the cloud. It includes Endpoint Security, Cloud security (CNAPP), Threat intelligence and Hunting, Next-Gen SIEM, Workflow Automation, Exposure Management and Identity Protection.

More information on Windows crashes related to Falcon sensor can be found in [this post](https://www.crowdstrike.com/blog/falcon-update-for-windows-hosts-technical-details/).

## Conclusion
Although being one of the most chaotic Fridays (and weekends) in the IT history, most companies managed to recover critical systems throughout the day. It is expected the resolution will continue in the next weeks and possibly months. But a lot of questions arose and many are demanding answers on the process itself, change management, proper testing and what measures the company will take to address future changes and updates. The catastrophic event has shown how IT systems, in the end, are fragile and vulnerable and many are wondering how to prevent anything similar from happening again.