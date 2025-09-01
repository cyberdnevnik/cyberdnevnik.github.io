---
title: "The Beginner’s Path to Azure: A Complete AZ-900 Study Guide — Part 2"
author: vedran
toc: true
toc_min_header: 1
date: 2024-09-20 12:00:00
categories: [Articles, Cloud Security]
tags: [ Azure, Cloud Security, Microsoft, Fundamentals, AZ-900, Study, Guide, Certificate]
image:
  path: /assets/img/posts/img_az900_study_guide_part2/image.webp
  alt: Azure Fundamentals Certificate Logo
---

If you’ve come this far I can already tell you went through my Part 1 of the exam guide for Azure Fundamentals.

Going further on we will go through the following topics:

* Azure identity, access, and security

* Azure management and governance

Buckle up and let's get started.

**If you haven’t read the first part of the guide here is the link so that you can check that one before proceeding with part 2**:

[The Beginner’s Path to Azure: A Complete AZ-900 Study Guide — Part 1](https://cyberdnevnik.github.io/posts/az900-study-guide-part-1/)

# Azure identity, access and security

## Entra ID 

Formerly known as **Azure Active Directory**, Microsoft Entra ID is a directory service that **enables you to sign in and access both Microsoft Cloud applications and cloud applications that you develop**. Microsoft Entra ID can also help you maintain your on-premises Active Directory deployment.

![Microsoft Entra ID visualization — image courtesy of Microsoft](/assets/img/posts/img_az900_study_guide_part2/entraid.png)
*Microsoft Entra ID visualization — image courtesy of Microsoft*

Entra ID helps you with:

* **Authentication** — verifying identity to access your applications and resources. This also includes **self-service password reset (SSPR), multifactor authentication (MFA)**, smart lockout services, and a custom list of banned passwords

* **Single Sign-on (SSO)** — enables you to remember only one username and one password to access multiple applications. Single identity is tied to a user, which simplifies the security model. If a user changes roles or leaves an organization it's far easier to modify accesses associated with that identity
  
* **Device management** — Entra ID also supports the registration of devices. It can be managed through tools like **Microsoft Intune**, which allows device-based conditional access policies to restrict attempts to only those from known devices.
    
* **Application management** — you can manage your cloud and on-premises apps through Entra ID. **My Apps** portal and features like **Application proxy** and different **SaaS apps** can be managed with Entra ID.

You can also connect your **on-premise Active Directory (AD)** with your Entra ID using Microsoft Entra Connect which synchronizes changes between both identity systems, so you can use features like SSO, MFA, and SSPR for both systems.

### Authentication methods

* **Single Sign-on (SSO)** — Already mentioned in the paragraph above.

* **Multifactor authentication (MFA)** — After entering your username and password, have you ever needed to enter a code that was sent to your phone? If so, you’ve used multifactor authentication to sign in.

Multifactor authentication provides additional security for your identities by **requiring two or more elements** to authenticate fully. These elements fall into three categories:

**Something the user knows** — this might be a challenging question.

**Something the user has** — this might be a code that’s sent to the user’s mobile phone.

**Something the user is** — this is typically some biometric property, such as a fingerprint or face scan.

  * Passwordless authentication — Passwordless authentication methods are more convenient because the password is removed and replaced with something you have, plus something you are, or something you know.

Passwordless authentication **must be set up on a device** before it can work. For example, your computer is something you have. Once it’s been registered or enrolled, Azure will know that it’s associated with you. Now that the computer is known, once you provide something you know or are (such as a PIN or fingerprint), you can be authenticated without using a password.

Microsoft Global Azure and Azure Government offer the following three passwordless authentication options that integrate with Microsoft Entra ID:

* Windows Hello for Business

* Microsoft Authenticator app

* FIDO2 security keys

![Convenience and security diagram of authentication methods — image courtesy of Microsoft](/assets/img/posts/img_az900_study_guide_part2/securitydiagramauth.png)
*Convenience and security diagram of authentication methods — image courtesy of Microsoft*

## Azure external identities, Business-to-business (B2B) and Business- to-customer (B2C)

* **External identity** — a person, device, service, etc. that is outside of your organization. It can be defined how you want to share your access and resources with your external organizations, it is a great way to collaborate with partners, distributors, suppliers, or vendors.
    
* **Business-to-business (B2B) collaboration** — Collaborate with external users by letting them use their preferred identity to sign in to your Microsoft applications or other enterprise applications (SaaS apps, custom-developed apps, etc.). B2B collaboration users are represented in your directory, typically as guest users.
    
* **Microsoft Azure Active Directory business to customer (B2C)** — Publish modern SaaS apps or custom-developed apps (excluding Microsoft apps) to consumers and customers, while using Azure AD B2C for identity and access management.

![Visualization of external identities with both B2B and B2C scenarios — image courtesy of Microsoft](/assets/img/posts/img_az900_study_guide_part2/externalidentities.png)
*Visualization of external identities with both B2B and B2C scenarios — image courtesy of Microsoft*

## Azure conditional access

Conditional access is a tool that Microsoft Entra ID uses to **allow or deny** access to resources **based on identity signals**.

For example, a user might not be challenged for a second authentication factor if they’re at a **known location**. However, they might be challenged for a second authentication factor if their sign-in signals are **unusual** or they’re at an **unexpected location**.

During sign-in, Conditional Access collects signals from the user, makes decisions based on those signals, and then **enforces that decision** by allowing or denying the access request or challenging a multifactor authentication response.

![Conditional access visualization — image courtesy of Microsoft](/assets/img/posts/img_az900_study_guide_part2/conditionalaccess.png)
*Conditional access visualization — image courtesy of Microsoft*

## Azure Role-based access control (RBAC)

Azure provides built-in roles that describe common access rules for cloud resources. You can also define your own roles. Each role has an associated **set of access permissions** that relate to that role. When you assign individuals or groups to one or more roles, they receive all the associated access permissions.

So, if you hire a new engineer and add them to the Azure RBAC group for engineers, they **automatically get the same access** as the other engineers in the same Azure RBAC group. Similarly, add additional resources and point Azure RBAC at them. **Everyone in that Azure RBAC group** will now have **permission** to access the new resources as well as the existing resources.

RBAC is applied to a **scope**, which is a resource or set of resources that this access applies to.

Scopes include:

* A management group (a collection of multiple subscriptions).

* A single subscription.
    
* A resource group.

* A single resource.

![Relationship between roles and scopes — image courtesy of Microsoft](/assets/img/posts/img_az900_study_guide_part2/rolesscopes.png)
*Relationship between roles and scopes — image courtesy of Microsoft*

Observers, users managing resources, admins, and automated processes illustrate the kinds of users or accounts that would typically be assigned each of the various roles.

Azure RBAC is hierarchical, in that when you grant access at a parent scope, those permissions are **inherited by all child scopes**. 

For example:

* When you assign the **Owner role** to a user in the management group scope, that user can **manage everything in all subscriptions** within the management group.

* When you assign the **Reader role** to a group at the subscription scope, the members of that group **can view every resource group** and resource within the subscription.

Azure RBAC is enforced through **Azure Resource Manager (ARM)**.

## Zero Trust Model

Zero Trust is a security model that assumes the worst-case scenario and protects resources with that expectation. 

**Zero Trust assumes breach** at the outset and then **verifies each request** as though it originated from an uncontrolled network.

To address this new world of computing, Microsoft highly recommends the Zero Trust security model, which is based on these guiding principles:

* **Verify explicitly** — Always authenticate and authorize based on all available data points.

* **Use least privilege access** — Limit user access with Just-In-Time and Just-Enough-Access (JIT/JEA), risk-based adaptive policies, and data protection.

* **Assume breach** — Minimize blast radius and segment access. Verify end-to-end encryption. Use analytics to get visibility, drive threat detection, and improve defenses.

![Zero Trust model visualization — image courtesy of Microsoft](/assets/img/posts/img_az900_study_guide_part2/zerotrust.png)
*Zero Trust model visualization — image courtesy of Microsoft*

## Defense-in-depth-model

The objective of defense-in-depth is to protect information and prevent it from being stolen by those who aren’t authorized to access it.

You can visualize it as a set of layers, with data to be secured at the center and all the other layers functioning to protect that central data layer.

![Defense-in-depth layers — image courtesy of Microsoft](/assets/img/posts/img_az900_study_guide_part2/defenseindepth.png)
*Defense-in-depth layers — image courtesy of Microsoft*

Each layer protects so that if one layer is breached, a subsequent layer is already in place to prevent further exposure. **This approach removes reliance on any single layer of protection**. It slows down an attack and provides alert information that security teams can act upon, either automatically or manually.

Here’s a brief overview of the role of each layer:

* The **physical security layer** is the first line of defense to protect computing hardware in the data center.
    
* The **identity and access layer** controls access to infrastructure and change control.

* The **perimeter layer** uses distributed denial of service (DDoS) protection to filter large-scale attacks before they can cause a denial of service for users.

* The **network layer** limits communication between resources through segmentation and access controls.
  
* The **compute layer** secures access to virtual machines.

* The **application layer** helps ensure that applications are secure and free of security vulnerabilities.
    
* The **data layer** controls access to business and customer data that you need to protect.

## Microsoft Defender for Cloud

For this one I won't go much into details, I will just post here an article that I already wrote dedicated fully to Defender for Cloud and let you dig right into it ;)

[Defend your Azure environment with Microsoft Defender for Cloud](https://cyberdnevnik.github.io/posts/defend-your-azure-environment-with-mdfc/)

## Azure Management and Governance

Azure shifts development costs from the **capital expense (CapEx)** of building out and maintaining infrastructure and facilities to an **operational expense (OpEx)** of renting infrastructure as you need it, whether it’s computing, storage, networking, and so on.

That OpEx cost can be impacted by many factors. Some of the **impacting cost factors** are:

* Resource Type

* Consumption
  
* Maintenance
    
* Geography
    
* Subscription type
    
* Azure Marketplace

![CapEx vs OpEx visualization — Image courtesy of tutorialsdojo.com](/assets/img/posts/img_az900_study_guide_part2/capexopex.png)
*CapEx vs OpEx visualization — Image courtesy of [tutorialsdojo.com](https://tutorialsdojo.com/azure-capex-vs-opex/)*

### Pricing calculator & Total Cost of Ownership (TCO)

* **Pricing calculator** — designed to give you an estimated cost for provisioning resources in Azure. With a pricing calculator, you can estimate the cost of any provisioned resources, including compute, storage, network costs, etc.

![Pricing calculator — image courtesy of Microsoft](/assets/img/posts/img_az900_study_guide_part2/pricingcalculator.png)
*Pricing calculator — image courtesy of Microsoft*

* **Total cost of ownership (TCO)**- designed to help you **compare the costs of running an on-premises infrastructure compared to an Azure Cloud infrastructure**. You enter your current infrastructure configuration, including servers, databases, storage, and outbound network traffic then the TCO calculator compares the anticipated costs for your current environment with an Azure environment supporting the same infrastructure requirements.

![Total cost of ownership calculator (TCO) — image courtesy of Microsoft](/assets/img/posts/img_az900_study_guide_part2/tco.png)
*Total cost of ownership calculator (TCO) — image courtesy of Microsoft*

### Cost management tool

Provides you the ability to quickly check **Azure resource costs, create alerts** based on spending, and **create budgets** that can be used to automate management of resources.

**Cost analysis** is a subset of Cost Management that provides a quick visual for your Azure costs. Using cost analysis, you can quickly view the total cost in a variety of different ways, including by billing cycle, region, resource, etc.

![Cost management tool — image courtesy of Microsoft](/assets/img/posts/img_az900_study_guide_part2/costmanagament.png)
*Cost management tool — image courtesy of Microsoft*

* **Tags** — Metadata being used to provide extra information about the resources.

![Example of tags on Azure Resource Group for department and environment — image courtesy of Microsoft](/assets/img/posts/img_az900_study_guide_part2/tags.png)
*Example of tags on Azure Resource Group for department and environment — image courtesy of Microsoft*

## Tools and features for Azure governance and compliance

### Microsoft Purview

Microsoft Purview is a family of data governance, risk, and compliance solutions that helps you get a single, unified view of your data. Microsoft Purview brings insights about your on-premises, multi-cloud, and software-as-a-service data together.

With Microsoft Purview, you can stay up-to-date on your data landscape thanks to:

* **Automated data discovery**

* **Sensitive data classification**

* **End-to-end data lineage**

Two main solution areas comprise Microsoft Purview: **risk and compliance** and **unified data governance**.

![Microsoft Purview visualization — image courtesy of Microsoft](/assets/img/posts/img_az900_study_guide_part2/purview.png)
*Microsoft Purview visualization — image courtesy of Microsoft*

Microsoft Purview, by managing and monitoring your data, can help your organization:

* **Protect sensitive data** across clouds, apps, and devices.

* **Identify data risks** and **manage regulatory compliance** requirements.

* Get started with regulatory compliance.

Microsoft Purview’s unified data governance helps your organization:

* Create an up-to-date map of your entire data estate that includes **data classification** and end-to-end lineage.

* Identify where **sensitive data is stored** in your estate.

* Create a secure environment for data consumers to find valuable data.
    
* **Generate insights** about how your data is stored and used.
    
* Manage access to the data in your estate securely and at scale.

### Azure Policy

Azure Policy is a service in Azure that enables you to **create, assign, and manage policies that control or audit your resources**. These policies enforce different rules across your resource configurations so that those configurations stay compliant with corporate standards.

It enables you to define both individual policies and groups of related policies, known as **initiatives**. Azure Policy evaluates your resources and highlights resources that aren’t compliant with the policies you’ve created. Azure Policy can also prevent non-compliant resources from being created.

![Visualization of policy and initiative definitions, assignments, and compliance results — Image courtesy of Cellenza Blog](/assets/img/posts/img_az900_study_guide_part2/policies.png)
*Visualization of policy and initiative definitions, assignments, and compliance results — Image courtesy of [Cellenza Blog](https://blog.cellenza.com/cloud-2/azure-policy-gouvernance-de-plateforme/)*

### Resource locks

Resource locks prevent resources from being deleted or updated, depending on the type of lock. Resource locks can be applied to **individual resources, resource groups**, or even an entire **subscription**. Resource locks are inherited, meaning that if you place a resource lock on a resource group, all of the resources within the resource group will also have the resource lock applied.

Types of Resource locks:

* **Delete** — This means authorized users can still read and modify a resource, but they can’t delete the resource.
    
* **ReadOnly** — means authorized users can read a resource, but they can’t delete or update the resource. Applying this lock is similar to restricting all authorized users to the permissions granted by the Reader role.

![Resource lock management — Image courtesy of Microsoft](/assets/img/posts/img_az900_study_guide_part2/resourcelock.png)
*Resource lock management — Image courtesy of Microsoft*

You can manage resource locks from the Azure portal, PowerShell, the Azure CLI, or from an Azure Resource Manager template.

To view, add, or delete locks in the Azure portal, go to the Settings section of any resource **Settings** pane in the Azure portal as shown in the image above.

## Additional learning resources

* [John Savill AZ-900 Study Cram](https://www.youtube.com/watch?v=tQp1YkB2Tgs)

* [AZ-900 Microsoft learning course](https://learn.microsoft.com/en-us/training/courses/az-900t00#course-syllabus)

* [AZ-900 Official Study Guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900)


# Conclusion

In this part focus was on identity, access, and security, Azure management, and governance which I hope now is clearer. In part 3, you will learn all about Azure monitoring and management tools.

Also here is the link to part 3 of the study guide:

[The Beginner’s Path to Azure: A Complete AZ-900 Study Guide — Part 3](https://cyberdnevnik.github.io/posts/az900-study-guide-part-3/)


Cheers,  
Vedran
