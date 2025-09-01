---
title: "Unlock the Power of Proactive Security: Why You Need Microsoft Sentinel"
author: vedran
toc: true
toc_min_header: 1
date: 2024-05-17 12:00:00
categories: [Articles, Cloud Security]
tags: [ Cloud Security, Azure, Microsoft, Sentinel, Cloud, SIEM, SOAR]
image:
  path: /assets/img/posts/img_why_you_need_microsoft_sentinel/image.webp
  alt: Microsoft Sentinel logo
---

If you have different data sources coming in from various types of machines, firewalls, log forwarders, network security groups, etc. wouldn’t it be great if there was a single location where you could store them all, set up a retention period for those logs and be able to respond based on suspicious activities? 

Well in that case look no further than **Microsoft Sentinel**.

## Microsoft Sentinel Overview

First and foremost what is Microsoft Sentinel?

Microsoft Sentinel is a cloud-native scalable solution that consists of **Security Information and Event Manager (SIEM)** and **Security Orchestration, Automation, and Response (SOAR)**.

![Cloud-native SIEM + SOAR - image courtesy by Microsoft](/assets/img/posts/img_why_you_need_microsoft_sentinel/siemsoar.png)
*Cloud-native SIEM + SOAR - image courtesy by Microsoft*

* Collects data at **cloud scale** across all users, devices, applications, and infrastructure, both on-premises and in multiple clouds.
    
* **Detects** previously undetected threats
    
* Uses **artificial intelligence** for investigation and threat-hunting
    
* **Responds to incidents** quickly with built-in orchestration and automation

## How to onboard Microsoft Sentinel in your environment?

First and foremost you have to create a **log analytics workspace** which is an environment for log data from **Azure Monitor** and other Azure services, such as **Microsoft Sentinel** and **Microsoft Defender for Cloud**. 

Each workspace has its own data repository and configuration but might combine data from multiple services.

![Log analytics workspace icon - image courtesy by Microsoft](/assets/img/posts/img_why_you_need_microsoft_sentinel/lawicon.png)
*Log analytics workspace icon - image courtesy by Microsoft*

### Steps

Steps:

* Search for **log analytics workspaces**

* If you have a **Log Analytics contributor** you can create it as a resource as shown in the picture below, and for the initial **Pricing tier**, you can put **Pay-as-you-go** until you have a better estimation of cost for the logs ingested into that workspace.

![Creation of log analytics workspace — image courtesy of Microsoft](/assets/img/posts/img_why_you_need_microsoft_sentinel/createlaw.png)
*Creation of log analytics workspace — image courtesy of Microsoft*

* After you have created in the same manner in the **search bar** -  search for **Microsoft Sentinel**

![Microsoft Sentinel search — image courtesy of Microsoft](/assets/img/posts/img_why_you_need_microsoft_sentinel/searchsentinel.png)
*Microsoft Sentinel search — image courtesy of Microsoft*

* Open it and select **create**, from there you should select the **previously created workspace** on top of which Microsoft Sentinel will be onboarded.

![Sentinel workspace creation — image courtesy of Microsoft](/assets/img/posts/img_why_you_need_microsoft_sentinel/sentinelworkspace.png)
*Sentinel workspace creation — image courtesy of Microsoft*

* Voila, now you have a log analytics workspace and Sentinel onboarded on your environment. Congrats :)

## Data Connectors

To start utilizing log sources with Microsoft Sentinel, you first need to [connect to your data sources](https://learn.microsoft.com/en-us/azure/sentinel/configure-data-connector).

Microsoft Sentinel comes with many connectors for Microsoft solutions that are available out of the box and provide real-time integration. Some of these connectors include:

* **Microsoft sources:** Microsoft Defender XDR, Microsoft Defender for Cloud, Office 365, Microsoft Defender for IoT, and more.

* **Azure service sources:** Microsoft Entra ID, Azure Activity, Azure Storage, Azure Key Vault, Azure Kubernetes service, and more.

Microsoft Sentinel has built-in connectors to the broader security and applications ecosystems for non-Microsoft solutions. You can also use a **Common Event Format (CEF)**, **Syslog**, or **REST-API** to connect your data sources with Microsoft Sentinel.

To install any of the **data connectors** you need to use the **Content Hub** tab on Microsoft Sentinel on the left side under **Content management**

![Example of installing Azure Activity Data Connector from Content Hub — Image courtesy of Microsoft](/assets/img/posts/img_why_you_need_microsoft_sentinel/contenthub.png)
*Example of installing Azure Activity Data Connector from Content Hub — Image courtesy of Microsoft*

In this example installing of Azure activity solution gives you the installation of a **data connector**, **workbooks**, **queries**, and **analytics rules** related to the logs ingested from the Azure Activity data connector.

![Azure Activity data connector overview — image courtesy of Microsoft](/assets/img/posts/img_why_you_need_microsoft_sentinel/azureactivity.png)
*Azure Activity data connector overview — image courtesy of Microsoft*

As mentioned in the previous paragraph, once you have installed and configured your desired data connector you can utilize additional cool features that give you additional overview and functionality for threat hunting, monitoring, and better visualization of data ingested through that connector. So let's start with Workbooks.

## Workbooks

Workbooks provide a rich set of capabilities for **visualizing your data**. Each data source and result set supports visualizations that are most useful for that data.

Workbooks support these kinds of visual components:

* [Text parameters](https://learn.microsoft.com/en-us/azure/azure-monitor/visualize/workbooks-visualizations#text-parameters)

* [Charts](https://learn.microsoft.com/en-us/azure/azure-monitor/visualize/workbooks-visualizations#charts)

* [Grids](https://learn.microsoft.com/en-us/azure/azure-monitor/visualize/workbooks-visualizations#grids)

* [Tiles](https://learn.microsoft.com/en-us/azure/azure-monitor/visualize/workbooks-visualizations#tiles)

* [Trees](https://learn.microsoft.com/en-us/azure/azure-monitor/visualize/workbooks-visualizations#trees)

* [Honeycomb](https://learn.microsoft.com/en-us/azure/azure-monitor/visualize/workbooks-visualizations#honeycomb)

* [Graphs](https://learn.microsoft.com/en-us/azure/azure-monitor/visualize/workbooks-visualizations#graphs)

* [Maps](https://learn.microsoft.com/en-us/azure/azure-monitor/visualize/workbooks-visualizations#maps)

* [Text visualization](https://learn.microsoft.com/en-us/azure/azure-monitor/visualize/workbooks-visualizations#text-visualizations)

![Workbooks visualizations example — image courtesy of Microsoft](/assets/img/posts/img_why_you_need_microsoft_sentinel/workbooks.png)
*Workbooks visualizations example — image courtesy of Microsoft*

They are pretty useful if you need to do some **reporting** for greater visualization of attacks, number of assets, cost management, maps for different attack sources, etc.

## Analytics rules

After you have set up your Microsoft Sentinel and Data connectors it also provides **templates** to help you create threat detection rules to do all that work for you. 
These rules are known as **analytics rules**.

![Microsoft Sentinel Analytics tab with active rules and rule templates — image courtesy of Microsoft](/assets/img/posts/img_why_you_need_microsoft_sentinel/analyticsrules.png)
*Microsoft Sentinel Analytics tab with active rules and rule templates — image courtesy of Microsoft*

Detections that are included are categorized into a few different types:

* **Microsoft Security** — Microsoft security templates automatically **create Microsoft Sentinel incidents from the alerts** generated in other Microsoft security solutions, in real-time

* **Fusion** — Microsoft Sentinel uses the Fusion correlation engine, with its **scalable machine learning algorithms**, to detect advanced multistage attacks by correlating many low-fidelity alerts and events across multiple products into high-fidelity and actionable incidents

* **Machine learning (ML) behavioral analytics** — ML behavioral analytics templates are based on proprietary Microsoft machine learning algorithms, so you can’t see the internal logic of how they work and when they run.

Because the logic is hidden and therefore not customizable, you can only create one rule with each template of this type.

* **Threat Intelligence** — This unique rule isn’t customizable, but when enabled, it automatically matches Common Event Format (CEF) logs, Syslog data, or Windows DNS events with domain, IP, and URL threat indicators from Microsoft Threat Intelligence. **Certain indicators contain more context information through MDTI (Microsoft Defender Threat Intelligence)**.

* **Anomaly** — Anomaly rule templates use machine learning to detect specific types of anomalous behavior. Each rule has its own unique parameters and thresholds, appropriate to the behavior being analyzed.

* **Scheduled** — Scheduled analytics rules are based on queries **written by Microsoft security experts**. You can see the query logic and make changes to it. You can use the scheduled rules template and customize the query logic and scheduling settings to create new rules.

Several new scheduled analytics rule templates produce alerts that are correlated by the Fusion engine with alerts from other systems to produce high-fidelity incidents

* **Near real-time (NRT)** — NRT rules are a limited set of scheduled rules, **designed to run once every minute**, in order to supply you with information as up-to-the-minute as possible.

![Example of analytics rule creation from template — image courtesy of Microsoft](/assets/img/posts/img_why_you_need_microsoft_sentinel/analyticsrulesample.png)
*Example of analytics rule creation from template — image courtesy of Microsoft*

## Threat Hunting

Use Microsoft Sentinel’s powerful [hunting search-and-query tools](https://learn.microsoft.com/en-us/azure/sentinel/hunting), based on the **[MITRE framework](https://attack.mitre.org/)**, which enable you to proactively hunt for security threats across your organization’s data sources, before an alert is triggered.

You can also create custom detection rules based on your hunting query. Then, you can use those insights as alerts to your security incident responders.

While hunting, create bookmarks to return to interesting events later. Use a bookmark to share an event with others. Or, group events with other correlating events to create a compelling incident for investigation.

![Threat hunting based on Microsoft Sentinel analytics rules queries — image courtesy of Microsoft](/assets/img/posts/img_why_you_need_microsoft_sentinel/threathunting.png)
*Threat hunting based on Microsoft Sentinel analytics rules queries — image courtesy of Microsoft*

## Playbooks - automation and orchestration

Microsoft Sentinel’s automation and orchestration solution provides a highly extensible architecture that enables scalable automation as new technologies and threats emerge. 

**To build playbooks with Azure Logic Apps**, you can choose from a constantly expanding gallery with [hundreds of connectors](https://learn.microsoft.com/en-us/connectors/connector-reference/connector-reference-logicapps-connectors) for various services and systems. These connectors allow you to apply any custom logic in your workflow, for example:

* ServiceNow

* Jira

* Zendesk

* HTTP requests

* Microsoft Teams

* Slack

* Microsoft Entra ID

* Microsoft Defender for Endpoint

* Microsoft Defender for Cloud Apps

The list goes on...

![Automate incident response for Deny-list/Allow-list Playbook example — Image courtesy by Lior Tamir on Microsoft Tech Community](/assets/img/posts/img_why_you_need_microsoft_sentinel/logicapp.png)
*Automate incident response for Deny-list/Allow-list Playbook example — Image courtesy by [Lior Tamir](https://techcommunity.microsoft.com/t5/microsoft-sentinel-blog/playbooks-amp-watchlists-part-2-automate-incident-response-for/ba-p/1771676) on Microsoft Tech Community*

The best part of playbooks is that you can run them on demand or serve as an automated response based on a specific trigger (e.g. alert or incident).

## Useful links 

* [John Savill’s Technical Training](https://www.youtube.com/watch?v=xaqiPXL6tz0)

* [Microsoft Learn](https://learn.microsoft.com/en-us/training/)

* [Microsoft Tech Community Blog](https://techcommunity.microsoft.com/t5/custom/page/page-id/Blogs)

* [Microsoft Sentinel Blog](https://techcommunity.microsoft.com/t5/microsoft-sentinel-blog/bg-p/MicrosoftSentinelBlog)

* [Microsoft Security Community Webinars](https://techcommunity.microsoft.com/t5/security-compliance-and-identity/join-our-security-community/ba-p/927888)

* [Become Microsoft Certified](https://query.prod.cms.rt.microsoft.com/cms/api/am/binary/RE2PjDI)

* [Microsoft Applied Skills](https://learn.microsoft.com/en-us/credentials/browse/?credential_types=applied+skills)

## Conclusion

Thank you for reading the article, I hope it was useful and comprehensive. If you’ve liked it -  share it around. It would mean a lot. On the same note, check out the articles written by **[Martina](https://hr.linkedin.com/in/lenicmartina99)**
on **CrowdStrike** and different **EDR/MDR/XDR** topics and also you can check out **[Hrvoje’s](https://hr.linkedin.com/in/hrvoje-filakovi%C4%87)** articles related to **Penetration testing, red teaming, and offensive security**

For all the questions and all your feedback on the subject, you can find me  on [LinkedIn](https://www.linkedin.com/in/vedran-brodar/) and read the rest of our articles here on **CyberDnevnik**

Cheers,  
Vedran