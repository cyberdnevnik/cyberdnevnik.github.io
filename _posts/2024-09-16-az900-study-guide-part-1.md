---
title: "The Beginner’s Path to Azure: A Complete AZ-900 Study Guide — Part 1"
author: vedran
toc: true
toc_min_header: 1
date: 2024-09-16 12:00:00
categories: [Articles, Cloud Security]
tags: [ Cloud Security, Azure, Microsoft, Fundamentals, AZ-900, Study, Guide, Certificate]
image:
  path: /assets/img/posts/img_az900_study_guide_part1/image.webp
  alt: Azure Fundamentals Certificate Logo
---

If you want to get into the Cloud (in this case, Azure Cloud specifically), this is your fundamental exam to get you started.

Before diving any deeper here is a link to the AZ-900 Study guide and what skills are required to pass it:

[Study Guide for Exam AZ-900: Microsoft Azure Fundamentals](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900?source=post_page-----095a9478e4b1---------------------------------------)

On this page, you have the latest updates related to exam, and percentages measured per specific skill.

## Introduction to Azure Cloud Infrastructure

By getting certified with this certificate, you demonstrate foundational knowledge of cloud concepts in general and Microsoft Azure in particular. This certification is a common starting point in a journey towards a career in Azure.

It helps you get familiarized with Azure architectural components and services such as:

* **Compute**

![Azure Compute resources — image courtesy of Analytics Vidhya](/assets/img/posts/img_az900_study_guide_part1/computeresources.png)
*Azure Compute resources — image courtesy of [Analytics Vidhya](https://www.analyticsvidhya.com/blog/2022/09/compute-services-available-on-microsoft-azure/)*

* **Networking**

![Example of Azure Private Link architecture — image courtesy of Microsoft](/assets/img/posts/img_az900_study_guide_part1/networking.png)
*Example of Azure Private Link architecture — image courtesy of Microsoft*

* **Storage** 

![Example of Azure Storage account as a storage and his components — image courtesy of Hacking the Cloud](/assets/img/posts/img_az900_study_guide_part1/storage.png)
*Example of Azure Storage account as a storage and his components — image courtesy of [Hacking the Cloud](https://hackingthe.cloud/azure/anonymous-blob-access/)*

You can also describe features and tools to secure, govern, and administer Azure.

* Infrastructure management
    
* Database management
    
* Software development

**Important: in this exam guide I won't be covering in detail all the resources specifically, I will just go through the stuff that I find among important stuff to remember for the exam**

## Public Cloud vs Private Cloud vs Hybrid Cloud vs Serverless

![On-premise (Private Cloud) vs Hybrid Cloud vs Public Cloud — image courtesy of Starwind Software](/assets/img/posts/img_az900_study_guide_part1/cloudtypes.png)
*On-premise (Private Cloud) vs Hybrid Cloud vs Public Cloud — image courtesy of [Starwind Software](https://www.starwindsoftware.com/blog/what-is-hybrid-cloud-infrastructure)*

Before proceeding any further, I want you to look at the image above and see if you can visualize each one of them.

### Private Cloud

A private cloud consists of cloud computing resources used exclusively by one business or organization. The private cloud can be physically located at **your organization’s on-site data center**, or a third-party service provider can host it. But in a private cloud, the **services and infrastructure are always maintained on a private network and the hardware and software are dedicated solely to your organization**.

**Advantages of a private cloud**:

* **More flexibility** — your organization can customize its cloud environment to meet specific business needs.
    
* **More control** — resources are not shared with others, so higher levels of control and privacy are possible.
    
* **More scalability** — private clouds often offer more scalability compared to on-premises infrastructure.

### Public Cloud

Public clouds are the most common type of cloud computing deployment. **Cloud resources (like servers and storage) are owned and operated by a third-party cloud service provider and are delivered over the Internet**. With a public cloud, all hardware, software, and other supporting infrastructure are owned and managed by the cloud provider. **Microsoft Azure, Amazon Web Services (AWS) and Google Cloud (GCP)** are examples of public cloud providers.

**Advantages of public clouds**:

* **Lower costs** — no need to purchase hardware or software, and you pay only for the service you use.
    
* **No maintenance** — your service provider provides the maintenance.
    
* **Near-unlimited scalability** — on-demand resources are available to meet your business needs.
    
* **High reliability** — a vast network of servers ensures against failure.

### Hybrid Cloud

A hybrid cloud is a type of [cloud computing](https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-is-cloud-computing/) that combines on-premises infrastructure — or a private cloud — with a public cloud. Hybrid clouds allow data and apps to move between the two environments. Many organizations choose a hybrid cloud approach due to business imperatives such as meeting regulatory and data sovereignty requirements, taking full advantage of on-premises technology investment, or addressing low latency issues.

**Advantages of hybrid cloud**:

* **Control** — your organization can maintain a private infrastructure for sensitive assets or workloads that require low latency.
    
* **Flexibility** — you can take advantage of additional resources in the public cloud when you need them.
    
* **Cost-effectiveness** — with the ability to scale to the public cloud, you pay for extra computing power only when needed.
    
* **Ease** — transitioning to the cloud doesn’t have to be overwhelming because you can migrate gradually — phasing in workloads over time.

### Serverless

Enables developers to build applications faster by eliminating the need for them to manage infrastructure. With serverless applications, the **cloud service provider automatically provisions, scales, and manages the infrastructure required to run the code**. 

In understanding the definition of serverless computing, it’s important to note that **servers are still running the code**. The serverless name comes from the fact that the tasks associated with infrastructure **provisioning and management are invisible to the developer**. This approach enables developers to increase their focus on the business logic and deliver more value to the core of the business. Serverless computing helps teams increase their productivity and bring products to market faster, and it allows organizations to better optimize resources and stay focused on innovation.

![Example of Serverless Web Application — Image courtesy of Microsoft](/assets/img/posts/img_az900_study_guide_part1/serverless.png)
*Example of Serverless Web Application — Image courtesy of Microsoft*

## Shared responsibility model in the Azure Cloud

As you consider and evaluate public cloud services, it’s critical to understand the shared responsibility model which security tasks the cloud provider handles, and which tasks you handle. 

The workload responsibilities vary depending on whether the workload is hosted on **Software as a Service (SaaS), Platform as a Service (PaaS), Infrastructure as a Service (IaaS)**, or in an on-premises data center.

![Image of shared responsibility model between Microsoft and the customer — image courtesy of EPC Group](/assets/img/posts/img_az900_study_guide_part1/sharedresponsibility.png)
*Image of shared responsibility model between Microsoft and the customer — image courtesy of [EPC Group](https://www.epcgroup.net/what-is-azure-shared-responsibility-model-tips-for-cloud-security-solutions/)*

First and foremost let us disclose what IaaS, PaaS and SaaS

* **Infrastructure as a Service (IaaS)** — Infrastructure as a service (IaaS) is a type of cloud computing service that offers essential compute, storage, and networking resources on demand, on a pay-as-you-go basis. It lets you bypass the cost and complexity of buying and managing physical servers and data center infrastructure. Each resource is offered as a separate service component, and you only pay for a particular resource for as long as you need it. 

A [cloud computing service provider](https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/choosing-a-cloud-service-provider/) like [Azure](https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-is-azure/azure-iaas/) **manages the infrastructure, while you purchase, install, configure, and manage your own software** — including operating systems, middleware, and applications.

* **Platform as a Service (PaaS)** — refers to cloud computing services that supply an on-demand environment for developing, testing, delivering, and managing software applications. PaaS is designed to make it easier for developers to quickly create web or mobile apps, **without worrying about setting up or managing the underlying infrastructure of servers, storage, network, and databases needed for development**.
    
* **Software as a Service (SaaS)** — Software as a service is a method for delivering software applications over the internet, on-demand, and typically on a subscription basis. 

**With SaaS, cloud providers host and manage the software application and underlying infrastructure. These providers also handle any maintenance, like software upgrades and security patching**. Users connect to the application over the internet, usually with a web browser on their phone, tablet, or PC.

![IaaS vs PaaS vs SaaS — image courtesy of Microsoft](/assets/img/posts/img_az900_study_guide_part1/iaassaaspaas.png)
*IaaS vs PaaS vs SaaS — Image courtesy of Microsoft*

## Core Azure Architectural Components

![Azure architectural components — Image courtesy of Microsoft](/assets/img/posts/img_az900_study_guide_part1/azurearchitecture.png)
*Azure architectural components — Image courtesy of Microsoft*

Azure architecture works **hierarchically** — you have your **Azure Tenant** with a single top-level management group called the **root management group**. 

This root management group is built into the hierarchy to have all management groups and subscriptions fold up to it. Below you have **management groups**, and below them are **subscriptions**, below the subscriptions, are **resource groups** and each resource group has its own **resources**.

* **Management groups** help you manage access, policy, and compliance for multiple subscriptions. **All subscriptions in a management group automatically inherit the conditions that are applied to the management group**.
    
* **Subscriptions** logically associate user accounts with the resources that they create. Each subscription has limits or quotas on the amount of resources that it can create and use. Organizations can use subscriptions to manage costs and the resources that are created by users, teams, and projects.
    
* **Resource groups** are logical containers where you can deploy and manage Azure resources like **virtual machines, web apps, databases, storage accounts...**
    
* **Resources** are **instances of services** that you can create in a resource group, such as virtual machines, storage, SQL databases...

## Azure regions, region pairs, availability zones and Azure data centers

![Regions, availability zones, and data centers — image courtesy of Microsoft](/assets/img/posts/img_az900_study_guide_part1/regions.png)
*Regions, availability zones, and data centers — image courtesy of Microsoft*

So in this next paragraph, I’m going to explain the image above a little better.

* **Azure Region** — is made up of multiple data centers located within a specific area, chosen for low-latency connections and linked through a specialized network. All Azure resources are created within an Azure region and subscription.

**Examples of regions in Azure**: Australia East, France Central, North Europe, West India, East US…

* **Region pair** — While Azure regions are designed to offer protection against local disasters with **availability zones**, they can also protect from regional or large geography disasters with disaster recovery by making use of another secondary region that uses cross-region replication. 

Both the primary and secondary regions together form a [**region pair**](https://learn.microsoft.com/en-us/azure/reliability/cross-region-replication-azure#azure-paired-regions).

Examples of Region pairs:

    Australia East — Australia Southeast
    
    China North — China East
    
    North Europe (Ireland) — West Europe (Netherlands) etc.

* **Availability zones** — separated groups of data centers within a region. Availability zones are close enough to have low-latency connections to other availability zones. They’re connected by a high-performance network with a round-trip latency of less than 2ms. However, availability zones are far enough apart to **reduce the likelihood that more than one will be affected by local outages or weather**. Availability zones have independent power, cooling, and networking infrastructure. **They’re designed so that if one zone experiences an outage, then regional services, capacity, and high availability are supported by the remaining zones**. They help your data stay synchronized and accessible when things go wrong.

![Visualization of Availability zones and cross-replication of data for disaster recovery protection — Image courtesy of Microsoft](/assets/img/posts/img_az900_study_guide_part1/disasterrecovery.png)
*Visualization of Availability zones and cross-replication of data for disaster recovery protection — Image courtesy of Microsoft*

* **Azure datacenters** — Azure datacenters are unique physical buildings — located all over the globe — that house a group of networked computer servers. Their locations are undisclosed to the public.

## Conclusion

So as I mentioned above, in my exam guide I won’t go through compute, network, and storage resources specifically but I will go through stuff I found important when I was learning for the exam.

In part 2 of this guide, I will provide information about Identity, access, and security and emphasize the Management and Governance inside Azure.

Part 2 can be found here:

[The Beginner’s Path to Azure: A Complete AZ-900 Study Guide — Part 2](https://cyberdnevnik.github.io/posts/az900-study-guide-part-2/)

For all the questions and all your feedback on the subject, you can find me  on [LinkedIn](https://www.linkedin.com/in/vedran-brodar/) and read the rest of our articles here on **CyberDnevnik**

Cheers,  
Vedran
