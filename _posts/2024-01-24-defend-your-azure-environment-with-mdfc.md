---
title: Defend your Azure environment with Microsoft Defender for Cloud
author: vedran
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

- **Regulatory compliance standards** - When you enable one or more [Defender for Cloud plans](https://learn.microsoft.com/en-us/azure/defender-for-cloud/defender-for-cloud-introduction), you can add standards from a wide range of predefined regulatory compliance programs.

![Example of Regulatory compliance standards — image courtesy of Microsoft](/assets/img/posts/img_defend_azure_environment_with_mdfc/regcompliance.png)
*Example of Regulatory compliance standards — image courtesy of Microsoft*

- **Custom standards** - You can create custom security standards in Defender for Cloud, and then add built-in and custom recommendations to those custom standards as needed.

### Secure score

The secure score in Microsoft Defender for Cloud can help you improve your cloud security posture. The secure score aggregates security findings into a single score so that you can assess, at a glance, your current security situation. **The higher the score, the lower the identified risk level is**.

When you turn on Defender for Cloud in a subscription, the [Microsoft Cloud security benchmark (MCSB)](https://learn.microsoft.com/en-us/security/benchmark/azure/introduction) standard is applied by default in the subscription. Assessment of resources in scope against the MCSB standard begins.

The MCSB issues **recommendations based on assessment findings**. Only built-in recommendations from the MCSB affect the secure score. Currently, risk prioritization doesn’t affect the secure score.

![Secure score example — image courtesy of Microsoft](/assets/img/posts/img_defend_azure_environment_with_mdfc/securescore.png)
*Secure score example — image courtesy of Microsoft*

When you view the **Defender for Cloud Overview dashboard**, you can view the secure score for all of your environments. The dashboard shows the secure score as a percentage value and includes the underlying values.

### Defender External Attack Surface Management (EASM)

Continuously **discovers and maps** your digital attack surface to provide an **external view of your online infrastructure**. This visibility enables security and IT teams to **identify unknowns, prioritize risk, eliminate threats, and extend vulnerability and exposure control** beyond the firewall.

## Protecting your workloads - CWPP

Defender for Cloud collects data from your Azure virtual machines (**VMs**), Virtual Machine Scale Sets, IaaS containers, and non-Azure (including on-premises) machines to monitor for security vulnerabilities and threats. **Some Defender plans require monitoring components to collect data from your workloads**.

Data collection is required to provide visibility into missing updates, misconfigured OS security settings, endpoint protection status, and health and threat protection. Data collection is **only needed** for compute resources such as VMs, Virtual Machine Scale Sets, IaaS containers, and non-Azure computers.

Data is collected using:

- [Azure Monitor Agent (AMA)](https://learn.microsoft.com/en-us/azure/defender-for-cloud/auto-deploy-azure-monitoring-agent)

- [Microsoft Defender for Endpoint (MDE)](https://learn.microsoft.com/en-us/azure/defender-for-cloud/integration-defender-for-endpoint)

- [Log Analytics agent](https://learn.microsoft.com/en-us/azure/defender-for-cloud/working-with-log-analytics-agent)

- Security components, such as the [Azure Policy for Kubernetes](https://learn.microsoft.com/en-us/azure/governance/policy/concepts/policy-for-kubernetes)

### Defender Plans

As mentioned above there are plans that you need to enable to have your workloads secure. I won’t go into details here because there are a lot of them and they could be an article on their own so I will just list them and put references below.

* Defender for [Servers](https://learn.microsoft.com/en-us/azure/defender-for-cloud/plan-defender-for-servers)

* Defender for [Containers](https://learn.microsoft.com/en-us/azure/defender-for-cloud/defender-for-containers-introduction)

* Defender for [Databases](https://learn.microsoft.com/en-us/azure/defender-for-cloud/tutorial-enable-databases-plan)

* Defender for [Storage](https://learn.microsoft.com/en-us/azure/defender-for-cloud/defender-for-storage-introduction)

* Defender for [App Service](https://learn.microsoft.com/en-us/azure/defender-for-cloud/defender-for-app-service-introduction)

* Defender for [Key Vault](https://learn.microsoft.com/en-us/azure/defender-for-cloud/defender-for-key-vault-introduction)

* Defender for [Resource Manager](https://learn.microsoft.com/en-us/azure/defender-for-cloud/defender-for-resource-manager-introduction)

* Defender for [APIs](https://learn.microsoft.com/en-us/azure/defender-for-cloud/defender-for-apis-introduction)

## Investigation and remediation of security posture

A proactive approach to tackle vulnerabilities, security scores, and alert/incident investigation can be done in multiple ways. The best approach would be to do all those things in parallel to make the vulnerability gap as low as possible.

### Security recommendations

Resources and workloads protected by Microsoft Defender for Cloud are assessed against built-in and custom security standards enabled in your Azure subscriptions, AWS accounts, and GCP projects. Based on those assessments, security recommendations.

![Microsoft Defender for Cloud Recommendations Overview — Image courtesy of Microsoft](/assets/img/posts/img_defend_azure_environment_with_mdfc/recommendations.png)
*Microsoft Defender for Cloud Recommendations Overview — Image courtesy of Microsoft*

**Microsoft Defender Recommendations** can be accessible as shown on the screenshot above.

### Identify and remediate attack paths

Attack path analysis helps you to address the **security issues that pose immediate threats with the greatest potential of being exploited** in your environment. It also highlights the security recommendations that need to be resolved to mitigate it.

![Example of Attack path analysis related to Azure Blob Storage container — image courtesy of Microsoft](/assets/img/posts/img_defend_azure_environment_with_mdfc/attackpath.png)
*Example of Attack path analysis related to Azure Blob Storage container — image courtesy of Microsoft*

### Investigate and respond to security alerts and incidents

Defender for Cloud collects, analyzes, and integrates log data from your Azure, hybrid, and multicloud resources, the network, and connected partner solutions, such as firewalls and endpoint agents. Defender for Cloud uses the log data to **detect real threats and reduce false positives**. A list of prioritized security alerts is shown in Defender for Cloud along with the information you need to quickly **investigate** the problem and the steps to take to **remediate** an attack.

**Best practice**: Prioritize alerts based on alert severity, addressing **higher severity alerts first**

![Microsoft Defender for Cloud Security Alerts Overview page — Image courtesy of Microsoft](/assets/img/posts/img_defend_azure_environment_with_mdfc/securityalerts.png)
*Microsoft Defender for Cloud Security Alerts Overview page — Image courtesy of Microsoft*

From the **Security Alerts** tab, you can check all the alerts on your environment, and if you **filter** them and click on **View full details** you can get a lot of information that can help you investigate the issue

![Example of Security alert — Image courtesy of Microsoft](/assets/img/posts/img_defend_azure_environment_with_mdfc/samplesecurityalert.png)
*Example of Security alert — Image courtesy of Microsoft*

If you have alerts for a resource that aligns with kill chain (progression of a cyberattack from reconnaissance to data exfiltration) patterns, you will have them all aggregated in a **single incident**

![Security incident showing all connected alerts — Image courtesy of Microsoft](/assets/img/posts/img_defend_azure_environment_with_mdfc/securityincident.png)
*Security incident showing all connected alerts — Image courtesy of Microsoft*

The way to respond to those incidents is shown in the **Take Action** tab on top of the Security incident alert. From there, steps are shown to **Mitigate the threat, prevent future attacks, and automatically respond through Logic Apps**

![Take action tab on Security Incident alert — Image courtesy of Microsoft](/assets/img/posts/img_defend_azure_environment_with_mdfc/takeaction.png)
*Take action tab on Security Incident alert — Image courtesy of Microsoft*

## Additional useful links:

* [John Savill's Technical Training](https://www.youtube.com/watch?v=PT3dQ6lCOyY)

* [Microsoft Learn](https://learn.microsoft.com/en-us/training/)

* [Microsoft Tech Community Blog](https://techcommunity.microsoft.com/t5/custom/page/page-id/Blogs)

* [Defender for Cloud Blog](https://techcommunity.microsoft.com/t5/microsoft-defender-for-cloud/bg-p/MicrosoftDefenderCloudBlog)

* [Microsoft Security Community Webinars](https://techcommunity.microsoft.com/t5/security-compliance-and-identity/join-our-security-community/ba-p/927888)

* [Become Microsoft Certified](https://query.prod.cms.rt.microsoft.com/cms/api/am/binary/RE2PjDI)

* [Microsoft Applied Skills](https://learn.microsoft.com/en-us/credentials/browse/?credential_types=applied+skills)

## Conclusion

If you are looking for a comprehensive cloud security solution that can help you **protect your organization** from a wide range of threats, Microsoft Defender for Cloud is a great option. With its ability to **reduce your attack surface, stop threats in their tracks, gain visibility into your cloud security posture, and simplify your security operations**, Defender for Cloud can help you achieve a more secure and compliant cloud environment.

In conclusion, Microsoft Defender for Cloud is a powerful cloud security solution that can help organizations of all sizes protect their cloud environments from a wide range of threats. With its comprehensive set of features and its integration with other security solutions, Defender for Cloud is a valuable asset for any organization that is looking to improve its cloud security posture. If you are not already using Defender for Cloud, I encourage you to learn more about it and consider implementing it in your organization.

For all the questions and all the feedback on the subject, you can find me on LinkedIn and read the rest of our articles on Cyberdnevnik.

Cheers,

Vedran.


