---
title: "Microsoft Defender XDR, Microsoft Defender for Cloud and Microsoft Sentinel: A Single Pane of Glass for Unified Security Management"
author: vedran
toc: true
toc_min_header: 1
date: 2025-03-13 12:00:00
categories: [Articles, Cybersecurity]
tags: [ Azure, Microsoft, XDR, Unified, Defender for Cloud, Sentinel]
image:
  path: /assets/img/posts/img_xdr_unified_security_management/image.webp
  alt: Microsoft Unified Security Operations platform
---

In a previous article, I discussed the **Microsoft Defender XDR suite**, its benefits, coverage, and different aspects. In this article, I will explain how you can have one pane of glass consisting of SIEM/SOAR, CNAPP, and the XDR suite.

![Microsoft Unified Security Operations platform — image courtesy of Marcus Burnap](/assets/img/posts/img_unified_security_management/secops.png)
*Microsoft Unified Security Operations platform — image courtesy of [Marcus Burnap](https://mbcloudteck.substack.com/p/navigating-the-new-unified-world)*

## Short overview of services

### Microsoft Defender XDR — One portal to rule them all

Is a comprehensive security solution designed to provide unified threat protection across different endpoints, identities, emails, and cloud applications to respond to advanced cyber threats.

![Defender XDR architecture — image courtesy of Microsoft](/assets/img/posts/img_unified_security_management/xdrarchitecture.png)
*Defender XDR architecture — image courtesy of Microsoft*

If you want to read in more detail, check my article:

[Microsoft Defender Extended Detection and Response (XDR) — Unified investigation and response experience](https://cyberdnevnik.github.io/posts/xdr-unified-investigation-and-response-experience/)

### Microsoft Sentinel — Big brother watching over your log sources

Microsoft Sentinel, the cloud-native Security Information and Event Management (SIEM) platform, plays a pivotal role in the XDR integration. As a comprehensive SIEM solution, Sentinel collects data from all your security resources — whether they’re on-premises, hybrid, or in the cloud — and provides actionable insights to enhance detection, investigation, and response.

![Microsoft Sentinel data ingestion architecture — image courtesy of My Faber Security](/assets/img/posts/img_unified_security_management/dataingestion.png)
*Microsoft Sentinel data ingestion architecture — image courtesy of [My Faber Security](https://myfabersecurity.com/2023/03/31/sentinel-poc-architecture-and-recommendations-for-mssps-part-2/)*

More in depth about Microsoft Sentinel:

[Unlock the Power of Proactive Security: Why You Need Microsoft Sentinel](https://cyberdnevnik.github.io/posts/why-you-need-microsoft-sentinel/)

And if you are interested in learning the language of Microsoft Sentinel — **Kusto Query Language (KQL)**, this one is for you:

[Stop Drowning in Data: Tame Your Azure Logs with KQL](https://cyberdnevnik.github.io/posts/stop-drowning-in-data-tame-your-azure-logs-with-kql/)

### Microsoft Defender for Cloud — Shield for your cloud workloads

**Microsoft Defender for Cloud** is a cloud-native application protection platform **(CNAPP)** that is made up of security measures and practices that are designed to protect cloud-based applications from various cyber threats and vulnerabilities across your tenant and multi-cloud environments.

![Multicloud Defender for Cloud Overview — image courtesy of Microsoft](/assets/img/posts/img_unified_security_management/multicloud.png)
*Multicloud Defender for Cloud Overview — image courtesy of Microsoft*

For more in-depth information about **Microsoft Defender for Cloud**, check the article below:

[Defend your Azure environment with Microsoft Defender for Cloud](https://cyberdnevnik.github.io/posts/defend-your-azure-environment-with-mdfc/)

## The ultimate synergy: Defender XDR + Microsoft Sentinel + Microsoft Defender for Cloud

![Defender XDR, Microsoft Sentinel and Microsoft Defender for Cloud integration architecture — image courtesy of Microsoft](/assets/img/posts/img_unified_security_management/synergy.png)
*Defender XDR, Microsoft Sentinel and Microsoft Defender for Cloud integration architecture — image courtesy of Microsoft*

### Microsoft Defender for Cloud enrollment in Defender XDR

If you already have Defender for Cloud enabled on one of your **Subscriptions** in your tenant — it is **automatically enrolled** into the integration with Microsoft Defender XDR.

![Defender for Cloud alert inside Defender XDR Portal](/assets/img/posts/img_unified_security_management/dfcalerts.png)
*Defender for Cloud alert inside Defender XDR Portal*

Alerts and incidents are visible and can be filtered by Product Name “Microsoft Defender for Cloud” as shown on the image above.

If you want to change the alert settings from Defender for Cloud inside Defender XDR go to:

1. Open **security.microsoft.com** and login

2. **System** and click on **Settings**
    
3. Select **Microsoft Defender XDR**
    
4. Select **Alert Service Settings**
   
5. Choose **“All alerts (default)”** or select **“No alerts”** if you don't want them

![Microsoft Defender XDR — Defender for Cloud alert settings](/assets/img/posts/img_unified_security_management/xdralert.png)
*Microsoft Defender XDR — Defender for Cloud alert settings*

### Microsoft Sentinel integration with Defender XDR

If you have **Global Administrator/Security Administrator** (Entra ID roles) + Subscription **Owner** — or both **Microsoft Sentinel Contributor** and a **User Access Administrator** (Azure resource roles) — you can integrate Microsoft Sentinel with your Defender XDR portal following the next steps:

1. Open **security.microsoft.com**

2. Click on **System** and open the **Settings** menu
    
3. Select **Microsoft Sentinel** and **Workspaces**

4. Choose the workspace you want to connect and select **Next**.

5. Read and understand the product changes associated with connecting your workspace.

6. Select **Connect**

![Microsoft Sentinel Data connectors tab on Microsoft Defender portal](/assets/img/posts/img_unified_security_management/dataconnectors.png)
*Microsoft Sentinel Data connectors tab on Microsoft Defender portal*

Voila, once connected, you have most of the Microsoft Sentinel functionalities on the Microsoft Defender portal (Data connectors, analytics, watchlist, automation, etc.)

## Useful documentation & links

[What is Microsoft Defender XDR?](https://learn.microsoft.com/en-us/defender-xdr/microsoft-365-defender)

[Microsoft Defender for Cloud in Microsoft Defender portal](https://learn.microsoft.com/en-us/defender-xdr/microsoft-365-security-center-defender-cloud)

[Microsoft Defender XDR integration with Microsoft Sentinel](https://learn.microsoft.com/en-us/azure/sentinel/microsoft-365-defender-sentinel-integration?tabs=azure-portal)

[Microsoft Applied Skills: Defend against cyberthreats with Microsoft Defender XDR](https://learn.microsoft.com/en-us/credentials/applied-skills/defend-against-cyberthreats-with-microsoft-defender-xdr/)

[Become a Microsoft Defender XDR Ninja](https://techcommunity.microsoft.com/blog/microsoftthreatprotectionblog/become-a-microsoft-defender-xdr-ninja/1789376)

[Microsoft Defender XDR Blog](https://techcommunity.microsoft.com/category/microsoft-defender-xdr/blog/microsoftthreatprotectionblog)

## Conclusion

Combining the **Microsoft Defender for Cloud** CNAPP workload protection with the **Microsoft Sentinel** SIEM/SOAR capabilities and the **Defender XDR** portal gives you and your SOC teams one unified pane of glass to monitor everything across your organization seamlessly, with far more enriched data and context.

If you want to read more, please follow me and my colleagues on our Cyberdnevnik [website](https://cyberdnevnik.github.io/) and [publication](https://medium.com/cyberdnevnik).

Thank you for reading, please leave us your thoughts and comments.

We appreciate all your feedback.

Cheers,

Vedran.