---
title: Defend your Azure environment with Microsoft Defender for Cloud
author: Vedran
toc: true
toc_min_header: 1
date: 2024-01-24 12:00:00
categories: [Articles, Cybersecurity]
tags: [Cybersecurity, Azure, Microsoft, Defender for Cloud, Cloud Security, CNAPP, CWPP, CSPM, Regulatory Compliance]
image:
  path: /assets/img/posts/img_defend_azure_environment_with_mdfc/image.webp
  alt: Microsoft Defender for Cloud logo — Image courtesy of Microsoft
---
You have your Azure environment set up and now you are wondering what you can do to protect your deployed resources. Well, I’m here to help you answer that question.



## Defender for Cloud Overview

**Microsoft Defender for Cloud** is a cloud-native application protection platform **(CNAPP)** that is made up of security measures and practices that are designed to protect cloud-based applications from various cyber threats and vulnerabilities.

It combines the capabilities of:

* **DevSecOps** — development security operations that unify **security management at the code level** across cloud, multicloud, and multiple-pipeline environments.

* **Cloud Security Posture Management (CSPM)** — a solution that surfaces actions that you can take to **prevent breaches**.

* **Cloud Workload Protection Platform (CWPP)** — specific protections for servers, containers, databases, storages, and other **workloads**

![Microsoft Defender for Cloud Overview — image courtesy of Microsoft](/assets/img/posts/img_defend_azure_environment_with_mdfc/mdfc.png)
*Microsoft Defender for Cloud Overview — image courtesy of Microsoft*

## Key benefits of Microsoft Defender for Cloud

### Planning multi-cloud security

Defender for Cloud helps you to protect your multicloud environment by strengthening your security posture and protecting your workloads. Defender for Cloud provides a **single dashboard to manage protection across all environments**.

![Multicloud Defender for Cloud Overview — Image courtesy of Microsoft](/assets/img/posts/img_defend_azure_environment_with_mdfc/multicloud.png)
*Multicloud Defender for Cloud Overview — Image courtesy of Microsoft*

You can connect **Amazon Web Services (AWS)**, and **Google Cloud Platform (GCP)** to your Defender for Cloud by selecting **Environment settings** and clicking on **Add Environment**.

![Connecting multiple environments with Defender for Cloud — image courtesy of Microsoft](/assets/img/posts/img_defend_azure_environment_with_mdfc/connecting.png)
*Connecting multiple environments with Defender for Cloud — image courtesy of Microsoft*

Similarly, you can also connect **GitHub** and **GitLab** environments to benefit from the **DevOps security** tab which is part of the Defender for Cloud. DevOps security tab also provides you with vulnerability findings by **severity, exposed secrets, code scanning vulnerabilities, OSS vulnerabilities, and recommendations** on how you can remediate them.

![DevOps security overview — Image courtesy of Microsoft](/assets/img/posts/img_defend_azure_environment_with_mdfc/devops.png)
*DevOps security overview — Image courtesy of Microsoft*

### Improving security posture through Cloud Security Posture Management (CSPM)

CSPM comes in 2 variations:

* **Foundational CSPM** — Defender for Cloud offers foundational multicloud CSPM capabilities for free. These capabilities are automatically enabled by default for subscriptions and accounts that onboard to Defender for Cloud.

* **Defender Cloud Security Posture Management (CSPM) plan** — The optional, paid Defender for Cloud Secure Posture Management plan provides more, advanced security posture features.

Differences between the plans can be found on the Microsoft [CSPM Plan availability page](https://learn.microsoft.com/en-us/azure/defender-for-cloud/concept-cloud-security-posture-management#plan-availability).

### Security policies and standards

Security standards and recommendations that help to improve your cloud security posture. They come from these sources:

- **Microsoft Cloud security benchmark (MCSB)** — The MCSB standard is applied by default when you onboard Defender for Cloud to a management group or subscription. Your [secure score](https://learn.microsoft.com/en-us/azure/defender-for-cloud/secure-score-security-controls) is based on an assessment against some MCSB recommendations.

![Microsoft Cloud Security Benchmark score calculation overview — image courtesy of Microsoft](/assets/img/posts/img_defend_azure_environment_with_mdfc/mcsbscore.png)
*Microsoft Cloud Security Benchmark score calculation overview — image courtesy of Microsoft*

### Additional useful links:

* [Azure Training + Certification guide](https://query.prod.cms.rt.microsoft.com/cms/api/am/binary/RE4J5ea)

* [John Savill’s Technical Training](https://www.youtube.com/channel/UCpIn7ox7j7bH_OFj7tYouOQ)

* [Microsoft Learn](https://learn.microsoft.com/en-us/training/)

* [Microsoft Tech Community Blog](https://techcommunity.microsoft.com/t5/custom/page/page-id/Blogs)

* [Microsoft Security Community Webinars](https://techcommunity.microsoft.com/t5/security-compliance-and-identity/join-our-security-community/ba-p/927888)

* [Become Microsoft Certified](https://query.prod.cms.rt.microsoft.com/cms/api/am/binary/RE2PjDI)

* [Microsoft Applied Skills](https://learn.microsoft.com/en-us/credentials/browse/?credential_types=applied+skills)


## Conclusion

As always, thank you for sticking with me until the end of the article. I know this was a longer one, but I hope that it will provide you with some useful insights on how to get started with Azure Cloud.

Also, if you’ve liked the article -  share it around, it would mean a lot. On the same note, check out the new article that **Martina** wrote on the **EDR/MDR/XDR** topic and also **pen testing** and **ethical hacking** articles from **Herc**

For all the questions and all the feedback on the subject, you can find me on LinkedIn and read the rest of our articles here on Cyberdnevnik.

Cheers,

Vedran.


