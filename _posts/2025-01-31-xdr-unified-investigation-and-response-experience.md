---
title: "Microsoft Defender Extended Detection and Response (XDR) — Unified investigation and response experience"
author: vedran
toc: true
toc_min_header: 1
date: 2025-01-31 12:00:00
categories: [Articles, Cloud Security]
tags: [ Azure, Cloud Security, Microsoft, XDR,Unified, SOC]
image:
  path: /assets/img/posts/img_xdr_unified_investigation_and_response_experience/image.webp
  alt: Microsoft Defender XDR architecture
---

If you work in a corporation, there is always a question of security. Maybe your CISO sent an email with bullet points asking how different types of data and resources are protected from potential attacks, incidents, and vulnerabilities.

While you are scratching your head — Microsoft came up with a solution that got you covered with one unified pane of glass.

Ranging from different **endpoints, emails sent, on-prem and hybrid identities, Microsoft Teams, and SharePoint** — all can be covered by **Microsoft Defender XDR**

## Defender XDR Overview & suite

As I mentioned before Defender XDR is a unified defense suite that automatically coordinates detection, prevention, investigation, and response across different workloads, identities, and native and 3rd party SaaS/PaaS solutions.

![Microsoft Defender XDR architecture — image courtesy of Microsoft](/assets/img/posts/img_xdr_unified_investigation_and_response_experience/xdrarchitecture.png)
*Microsoft Defender XDR architecture — image courtesy of Microsoft*

As seen in the picture above Defender XDR is comprised of multiple Defender suites:

* **Defender for Office 365**
    
* **Defender for Identity**

* **Defender for Endpoint**

* **Defender for Cloud Apps**

* **Entra ID protection**

Each service covers a specific part of security problems and has its own set of Role-Based Access Control (RBAC), and license prerequisites, which I will cover in more detail in the next subchapter.

You can access the Defender XDR portal here by searching [security.microsoft.com](https://security.microsoft.com/?source=post_page-----62943a346070---------------------------------------)

## Defender for Office 365 (MDO)

Defender for Office 365 is a cloud-based **email filtering service** that helps protect against threats from advanced email and collaboration tools, such as **phishing, business email compromise**, and **malware attacks**. It also provides investigation, hunting, and remediation capabilities to help security teams identify, prioritize, investigate, and respond to threats efficiently.

![Defender for Office 365 architecture — image courtesy of Microsoft](/assets/img/posts/img_xdr_unified_investigation_and_response_experience/mdo.png)
*Defender for Office 365 architecture — image courtesy of Microsoft*

The following diagram illustrates the baseline architecture for Office 365, which can also include **3rd party SMTP gateway or on-premise integration**

## Defender for Identity (MDI)

A cloud-based security solution that helps secure your identity monitoring across your organization be it **on-prem** or **hybrid identities**

![Defender for Identity architecture — image courtesy of Microsoft](/assets/img/posts/img_xdr_unified_investigation_and_response_experience/mdi.png)
*Defender for Identity architecture — image courtesy of Microsoft*

It monitors **domain controllers** by capturing and parsing network traffic, leveraging Windows events directly from domain controllers.

**Installed directly on your domain controller**, Active Directory Federation Services (AD FS), or Active Directory Certificate Services (AD CS) servers, the **Defender for Identity sensor** accesses the event logs it requires directly from the servers.

## Defender for Endpoint (MDE)

It is an enterprise endpoint security platform designed to secure endpoints and prevent, detect, investigate, and respond to threats.

![Defender for Endpoint architecture — image courtesy of Microsoft](/assets/img/posts/img_xdr_unified_investigation_and_response_experience/mde.png)
*Defender for Endpoint architecture — image courtesy of Microsoft*

Examples of endpoints protected by Defender for Endpoint include — **laptops, phones, PCs, tablets, access points, routers, and firewalls**

Devices can be onboarded with MDE by multiple deployment methods:

* Local script (up to 10 devices)

* Group Policy

* Microsoft Endpoint Configuration Manager

* System Center Configuration Manager

* Mobile Device Management (MDM) or Microsoft Intune
    
* VDI onboarding scripts for non-persistent devices

The preferred method of deployment can be selected from the Defender portal (security.microsoft.com) under **Settings — Device Management — Onboarding**

![Defender for Endpoint sample architecture & integration — image courtesy of Microsoft](/assets/img/posts/img_xdr_unified_investigation_and_response_experience/mdeintegration.png)
*Defender for Endpoint sample architecture & integration — image courtesy of Microsoft*

## Defender for Cloud Apps (MDA)

![Defender for Cloud Apps Overview  — image courtesy of Microsoft](/assets/img/posts/img_xdr_unified_investigation_and_response_experience/mda.png)
*Defender for Cloud Apps Overview  — image courtesy of Microsoft*

Helps monitor and protect cloud app data across the following feature areas:

* **Fundamental cloud access security broker (CASB)** — functionality, such as **Shadow IT** discovery, visibility into cloud app usage, **protection against app-based threats** from anywhere in the cloud, and information protection and compliance assessments.

* **SaaS Security Posture Management (SSPM)** — features that enable security teams to improve the organization’s security posture

* **Advanced threat protection** — enables powerful correlation of signal and visibility across the full kill chain of advanced attacks

* **App-to-app protection** — extending the core threat scenarios to **OAuth-enabled apps** that have permissions and privileges to critical data and resources.

![Discovery of Cloud Apps inside organization — image courtesy of Microsoft](/assets/img/posts/img_xdr_unified_investigation_and_response_experience/mdadiscovery.png)
*Discovery of Cloud Apps inside organization — image courtesy of Microsoft*

Many MDA-related configurations can be done from the Defender portal, **Settings — Cloud Apps** . They range from the App connector's default behavior to user monitoring and MDE integration.

## Entra ID protection

It helps organizations detect, investigate, and remediate **Azure cloud identity-based risks**. These identity-based risks can be fed into tools like **Conditional Access** to make access decisions or fed back to a security information and event management (SIEM) tool for further investigation and correlation.

![Entra ID protection architecture - image courtesy of Microsoft](/assets/img/posts/img_xdr_unified_investigation_and_response_experience/entraidprotection.png)
*Entra ID protection architecture  — image courtesy of Microsoft*

Entra ID protection emphasizes using **Conditional access, User risk, Sign-in risk**, and **Multifactor authentication registration policies** for detection and response to threats to the users and organization.

Remediations for those risks can be either **automatic** (Conditional access policies) or **manual remediations** (by manually reviewing user reports in the portal)

![Entra Identity Protection (ID) Sign-in risk policy setup](/assets/img/posts/img_xdr_unified_investigation_and_response_experience/signin.png)
*Entra Identity Protection (ID) Sign-in risk policy setup*

## Licenses & RBAC prerequisites

Related to licensing — any Defenders on Defender XDR can be used separately (you don’t need all the licenses if you don’t plan to use Defender for Identity for example). Nevertheless here is the list of all the licenses that give you proper access across the Defender suite:

* Microsoft 365 E5 or A5

* Microsoft 365 E3 with the Microsoft 365 E5 Security add-on

* Microsoft 365 E3 with the Enterprise Mobility + Security E5 add-on

* Microsoft 365 A3 with the Microsoft 365 A5 Security add-on

* Windows 10 Enterprise E5 or A5
    
* Windows 11 Enterprise E5 or A5
    
* Enterprise Mobility + Security (EMS) E5 or A5
    
* Office 365 E5 or A5
    
* Microsoft Defender for Endpoint
    
* Microsoft Defender for Identity
    
* Microsoft Defender for Cloud Apps or Cloud App Discovery

* Microsoft Defender for Office 365 (Plan 2)

* Microsoft 365 Business Premium
    
* Microsoft Defender for Business

Related to RBAC roles **Security Administrator** role is required in **Microsoft Entra ID** to turn on **Microsoft Defender XDR**!

There are two ways to manage access to Microsoft Defender XDR:

* **Global Microsoft Entra Roles** (Global Administrator, Security Administrator, Security Operator, Global Reader, Security Reader)

* **Custom Role Access** — offers more control than global Microsoft Entra roles, providing users only with the access they need with the least permissive roles.

## Microsoft Defender XDR pilot deployment & best practices

Microsoft recommends deployment of Defender XDR components based on the easiest configuration and quick wins (but it should be adapted to organizational needs)

![Proposed Microsoft Defender XDR deployment of components — image courtesy of Microsoft](/assets/img/posts/img_xdr_unified_investigation_and_response_experience/xdrpilot.png)
*Proposed Microsoft Defender XDR deployment of components — image courtesy of Microsoft*

For example, Defender for Identity deployment takes less time to deploy than Defender for Endpoint.

If you wish to stick to the Microsoft proposal of Pilot Deployment here is the link to the documentation and steps - [How do I pilot and deploy Microsoft Defender XDR?](https://learn.microsoft.com/en-us/defender-xdr/pilot-deploy-overview?source=post_page-----62943a346070---------------------------------------#the-pilot-and-deploy-process-for-microsoft-defender-xdr)

## Useful stuff

Here is the list of useful docs and training that I would highly recommend:

* [Become Microsoft Defender XDR Ninja](https://techcommunity.microsoft.com/blog/microsoftthreatprotectionblog/become-a-microsoft-defender-xdr-ninja/1789376)

* [Microsoft Applied Skills: Defend against cyberthreats with Microsoft Defender XDR](https://learn.microsoft.com/en-us/credentials/applied-skills/defend-against-cyberthreats-with-microsoft-defender-xdr/)

* [Microsoft Defender XDR Blog](https://techcommunity.microsoft.com/category/microsoft-defender-xdr/blog/microsoftthreatprotectionblog)

## Conclusion

In this article, we’ve talked about Defender components, licensing, roles required, and also some pilot deployment recommendations.

In the next one, I will be writing about Defender XDR integration with **Microsoft Sentinel, Defender for Cloud** and **Copilot for Security**

As well as here in our [Cyberdnevnik publication](https://medium.com/cyberdnevnik).

All the best in this New Year,

Vedran.