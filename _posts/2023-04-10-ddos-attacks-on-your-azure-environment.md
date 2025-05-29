---
title: DDoS attacks on your Azure environment? Azure DDoS Protection got you covered
author: Vedran
toc: true
toc_min_header: 1
date: 2024-04-10 12:00:00
categories: [Articles, Cybersecurity]
tags: [Cybersecurity, Azure, Microsoft, DDoS, Cloud, Networking]
image:
  path: /assets/img/posts/img_ddos_attacks_on_your_azure_environment/image.webp
  alt: Azure DDoS protection plan — image courtesy of Microsoft
---
*“A distributed denial-of-service (DDoS) attack is a malicious attempt to disrupt the normal traffic of a targeted server, service, or network by overwhelming the target or its surrounding infrastructure with a flood of Internet traffic.”* — on the same note, it makes application unavailable for legitimate users.

Now you are wondering what can you do to mitigate attacks in your Azure environment — Use **Azure DDoS Protection**

## How it works?

Azure DDoS Protection protects you at layer 3 — the **network layer (packets)** and layer 4 — the **transport layer (TCP, UDP)*** of your network. For your web applications (layer 7) you need to add protection at the **application layer** using the **Web Application Firewall (WAF)** offering.

![Application (Layer 7) DDoS Protection — image courtesy of Microsoft](/assets/img/posts/img_ddos_attacks_on_your_azure_environment/ddosprotection.png)
*Application (Layer 7) DDoS Protection — image courtesy of Microsoft*

## What will I get by using Azure DDoS protection?

- 24/7 traffic monitoring

- Adaptive real-time tuning of your application’s traffic over time

- Analytics, metrics, and alerting for each public IP address of the protected resource, in the virtual network that has DDoS enabled

- Attack analytics with **Microsoft Sentinel** for near real-time monitoring during an attack

- Native platform integration through the **Azure portal**

- Global capacity mitigation scale meaning all **L3/L4** attack vectors can be mitigated to protect you against even the largest known DDoS attacks.

- **Azure DDoS Rapid Response (DRR)** — access to the assigned team that can help with the investigation during an attack and post-attack analysis. **(Available only if you are using the DDoS Standard plan!)**

## What are available plan types?

As I mentioned above there are some differences depending on which way you are planning to go with your DDoS protection.

There are 2 main ways to enable DDoS protection on your Azure environment, either through **Azure DDoS protection Standard plan** or **DDoS IP Protection**.

## DDoS network protection plan

Defines a set of virtual networks that have DDoS Network protection enabled, across subscriptions. You need to have a **network contributor** role assigned so that you can enable it!

![DDoS protection plan linked to virtual network — Image courtesy of Microsoft](/assets/img/posts/img_ddos_attacks_on_your_azure_environment/linkedplan.png)
*DDoS protection plan linked to virtual network — Image courtesy of Microsoft*

DDoS protection plan can protect up to 100 IP addresses and resources.

Resources that can be covered by DDoS protection plan:

- Virtual networks

- Azure Firewall

- Application gateways

- Bastion host

- Load balancers

- Network Interface (NIC)

- Virtual machine Scale Sets

- Virtual Network Gateways

## DDoS IP protection 

It works similarly to the DDoS Protection plan but here, you assign protection **per each specific IP address**.

![DDoS IP Protection — Image courtesy of Microsoft](/assets/img/posts/img_ddos_attacks_on_your_azure_environment/peripprotection.png)
*DDoS IP Protection — Image courtesy of Microsoft*

In the image below you can see when you open a Public IP address as a resource, the current state of your IP, whether is it **protected** or not.

![Unprotected Public IP address — Image courtesy of Microsoft](/assets/img/posts/img_ddos_attacks_on_your_azure_environment/protectionproperties.png)
*Unprotected Public IP address — Image courtesy of Microsoft*

If you click on **Unprotected** under **DDoS Protection** status you will get a new pop-up window where you can change the Protection type to **IP**:

![Protection type setup to IP — Image courtesy of Microsoft](/assets/img/posts/img_ddos_attacks_on_your_azure_environment/protectiontype.png)
*Protection type setup to IP — Image courtesy of Microsoft*

Once you click on **Save**, the changed status will also be changed under the properties of the IP address to **Protected**:

![IP protection status set to Protected — Image courtesy of Microsoft](/assets/img/posts/img_ddos_attacks_on_your_azure_environment/protectionstatus.png)
*IP protection status set to Protected — Image courtesy of Microsoft*

**Fun fact**: if you are using the Azure DDoS Standard plan you will be compliant with the **Microsoft Defender for Cloud** “[Azure DDoS Protection Standard should be enabled](https://portal.azure.com/#blade/Microsoft_Azure_Security/RecommendationsBlade/assessmentKey/e3de1cc0-f4dd-3b34-e496-8b5381ba2d70)” recommendation, **BUT** if you are using per IP plan, you will need to **exempt** that recommendation because during the moment of writing it **only checks if Standard plan is enabled or not**.

For more information about **Microsoft Defender for Cloud**, you can refer to my previous article below:

[Defend your Azure environment with Microsoft Defender for Cloud](https://cyberdnevnik.github.io/posts/defend-your-azure-environment-with-mdfc/)

## Azure DDoS Protection Pricing and SKU Comparison

The Standard Network protection plan has a fixed monthly fee of **2726 € / per 100 public IP resources + 27.3€ for each additional Public IP over those 100 IPs**.

**IP protection** comes with a fixed monthly charge of **185€/per-public-IP/month**.

Besides the pricing differences **Standard Network protection plan** comes with a few additional benefits that are not part of the **IP protection plan**:

* **DDoS rapid response support** — gives you the possibility of opening support requests with service type **DDoS Protection**.

* **Cost protection** — DDoS protection is active for the entire month, and you as the user are charged a monthly fee regardless of usage.

* **WAF discount** — This plan offers a **20% discount** on the base price of **Azure Application Gateway WAF and WAF_v2 SKUs**. This means you pay the standard Application Gateway price instead of the higher-tier Application Gateway WAF price

## Metrics, alerting, and Microsoft Sentinel

To see if you are under a DDoS attack or not you can create **alerts** and **action groups** that are related to your Public IP addresses so that you get notified when a DDoS attack is happening:

[Configure Azure DDoS Protection metric alerts through portal](https://learn.microsoft.com/en-us/azure/ddos-protection/alerts?source=post_page-----4847fb9eb600---------------------------------------)

Similarly, you can create **analytics rules** on your **Microsoft Sentinel** if you install “**Azure DDoS protection for Sentinel**” from the **Content hub**.

For reference use this blog post from [Microsoft Tech Community - "Azure DDoS Solution for Microsoft Sentinel](https://techcommunity.microsoft.com/blog/azurenetworksecurityblog/azure-ddos-solution-for-microsoft-sentinel/3732013)

## Conclusion

Thank you for reading the article, I hope it was useful and comprehensive. If you’ve liked it -  share it around. It would mean a lot. On the same note, check out the articles written by **[Martina](https://hr.linkedin.com/in/lenicmartina99)**
on **CrowdStrike** and different **EDR/MDR/XDR** topics and also you can check out **[Hrvoje’](https://hr.linkedin.com/in/hrvoje-filakovi%C4%87)** articles related to **Penetration testing, red teaming, and offensive security**

For all the questions and all your feedback on the subject, you can find me  on [LinkedIn](https://www.linkedin.com/in/vedran-brodar/) and read the rest of our articles here on **CyberDnevnik**

Cheers,  
Vedran