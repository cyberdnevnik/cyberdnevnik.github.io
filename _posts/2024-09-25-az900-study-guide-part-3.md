---
title: "The Beginner’s Path to Azure: A Complete AZ-900 Study Guide — Part 3"
author: vedran
toc: true
toc_min_header: 1
date: 2024-09-25 12:00:00
categories: [Articles, Cybersecurity]
tags: [ Azure, Microsoft, Fundamentals, AZ-900, Study, Guide]
image:
  path: /assets/img/posts/img_az900_study_guide_part3/image.webp
  alt: Azure Fundamentals Certificate Logo
---

This is part 3 and the last part of the exam guide for Azure Fundamentals.

For the last topic, we will cover all the Tools for managing and deploying Azure resources along with Azure monitoring tools.

If you haven't read part 2 here is the link - [The Beginner's Path to Azure: A Complete AZ-900 Study Guide - Part 2](https://cyberdnevnik.github.io/posts/az900-study-guide-part-2/)

## Tools for managing and deploying Azure resources

To get the most out of Azure, you need a way to interact with the Azure environment, the management groups, subscriptions, resource groups, resources, and so on. Azure provides multiple tools for managing your environment, including the following:

* **Azure portal** — a web-based, unified console that provides an alternative to command-line tools. With the Azure portal, you can manage your Azure subscription by using a graphical user interface
 
* **Azure Cloud Shell** — browser-based shell tool that allows you to create, configure, and manage Azure resources using a shell. Azure Cloud Shell supports both Azure PowerShell and the Azure Command Line Interface (CLI), which is a Bash shell.

![Azure Cloud Shell icon on Azure portal — image courtesy of Microsoft](/assets/img/posts/img_az900_study_guide_part3/cloudshell.png)
*Azure Cloud Shell icon on Azure portal — image courtesy of Microsoft*

* **Azure PowerShell** — Azure PowerShell is a shell that allows developers, DevOps, and IT professionals to run commands called command-lets (cmdlets). These commands call the Azure REST API to perform management tasks in Azure. Capturing the commands in a script makes the process repeatable and automatable.

In addition to being available via Azure Cloud Shell, you can install and configure Azure PowerShell on Windows, Linux, and Mac platforms.

* **Azure Command Line Interface (CLI)** — The Azure CLI is functionally equivalent to Azure PowerShell, with the primary difference being the syntax of commands. While Azure PowerShell uses PowerShell commands, the Azure CLI uses Bash commands. The Azure CLI provides the same benefits of handling discrete tasks or orchestrating complex operations through code. It’s also installable on Windows, Linux, and Mac platforms, as well as through Azure Cloud Shell. Due to the similarities in capabilities and access between Azure PowerShell and the Bash-based Azure CLI, it mainly comes down to which language you’re most familiar with.

* **Azure Arc** — utilizing Azure Resource Manager (ARM), Arc lets you extend your Azure compliance and monitoring to your hybrid and multi-cloud configurations. Azure Arc simplifies governance and management by delivering a consistent multi-cloud and on-premises management platform.

![Azure Arc visualization — image courtesy of Microsoft](/assets/img/posts/img_az900_study_guide_part3/azurearc.png)
*Azure Arc visualization — image courtesy of Microsoft*

* **Azure Resource Manager (ARM) and ARM templates** — deployment and management service for Azure. It provides a management layer that enables you to create, update, and delete resources in your Azure account. Anytime you do anything with your Azure resources, ARM is involved. 

By using **ARM templates**, you can describe the resources you want to use in a declarative **JSON format**. With an ARM template, the deployment code is verified before any code is run. This ensures that the resources will be created and connected correctly. The template then orchestrates the creation of those resources in parallel. That is, if you need 50 instances of the same resource, all 50 instances are created at the same time.

![Azure Resource Manager (ARM) overview — image courtesy of Microsoft](/assets/img/posts/img_az900_study_guide_part3/arm.png)
*Azure Resource Manager (ARM) overview — image courtesy of Microsoft*

* **Infrastructure as Code (IAC)** — Infrastructure as code is a concept where you manage your infrastructure as lines of code. At an introductory level, it’s things like using Azure Cloud Shell, Azure PowerShell, or the Azure CLI to manage and configure your resources. As you get more comfortable in the cloud, you can use the infrastructure as code concept to manage entire deployments using repeatable templates and configurations. **ARM templates, Bicep** and **Terraform** are examples of using infrastructure as code with the Azure Resource Manager to maintain your environment

## Monitoring tools in Azure

### Azure Advisor

Azure Advisor evaluates your Azure resources and makes recommendations to help improve reliability, security, and performance, achieve operational excellence, and reduce costs. Azure Advisor is designed to help you save time on cloud optimization.

Advisor dashboard displays personalized recommendations for all your subscriptions. You can use filters to select recommendations for specific subscriptions, resource groups, or services. The recommendations are divided into five categories:

* **Reliability** is used to ensure and improve the continuity of your business-critical applications.

* **Security** is used to detect threats and vulnerabilities that might lead to security breaches.

* **Performance** is used to improve the speed of your applications.

* **Operational Excellence** is used to help you achieve process and workflow efficiency, resource manageability, and deployment best practices.

* **Cost** is used to optimize and reduce your overall Azure spending.

![Azure Advisor dashboard — image courtesy of Microsoft](/assets/img/posts/img_az900_study_guide_part3/advisor.png)
*Azure Advisor dashboard — image courtesy of Microsoft*

### Azure Service Health

Azure Service Health helps you keep track of Azure resources, both your specifically deployed resources and the overall status of Azure. Azure service health does this by combining three different Azure services:

* **Azure Status** is a broad picture of the status of Azure globally. Azure status informs you of service outages in Azure on the Azure Status page. The page is a global view of the health of all Azure services across all Azure regions. It’s a good reference for incidents with widespread impact.

* **Service Health** provides a narrower view of Azure services and regions. It focuses on the Azure services and regions you’re using. This is the best place to look for service-impacting communications about outages, planned maintenance activities, and other health advisories because the authenticated Service Health experience knows which services and resources you currently use. You can even set up Service Health alerts to notify you when service issues, planned maintenance, or other changes may affect the Azure services and regions you use.

* **Resource Health** is a tailored view of your actual Azure resources. It provides information about the health of your individual cloud resources, such as a specific virtual machine instance. Using Azure Monitor, you can also configure alerts to notify you of availability changes to your cloud resources.

![Azure Service Health dashboard — image courtesy of Turbo360](/assets/img/posts/img_az900_study_guide_part3/servicehealth.png)
*Azure Service Health dashboard — image courtesy of [Turbo360](https://turbo360.com/blog/azure-health-monitoring)*

### Azure Monitor

Azure Monitor is a platform for collecting data on your resources, analyzing that data, visualizing the information, and even acting on the results. Azure Monitor can monitor Azure resources, your on-premises resources, and even multi-cloud resources like virtual machines hosted with a different cloud provider.

![Azure Monitor dashboard — image courtesy of Microsoft](/assets/img/posts/img_az900_study_guide_part3/monitor.png)
*Azure Monitor dashboard — image courtesy of Microsoft*

* **Log analytics** — tool in the Azure portal where you’ll write and run log queries on the data gathered by Azure Monitor. Log Analytics is a robust tool that supports both simple and complex queries and data analysis. You can write a simple query that returns a set of records and then use features of Log Analytics to sort, filter, and analyze the records. You can write an advanced query to perform statistical analysis and visualize the results in a chart to identify a particular trend

* **Azure Monitor alerts** — an automated way to stay informed when Azure Monitor detects a threshold being crossed. You set the alert conditions, and the notification actions, and then Azure Monitor Alerts notifies you when an alert is triggered

* **Application Insights** — monitors your web applications. Application Insights is capable of monitoring applications that are running in Azure, on-premises, or in a different cloud environment.

## Conclusion

Here you go all 3 parts are here and in those articles I also put some documentations and videos I found useful, hopefully, you will feel the same.

Thank you for reading, leave us a comment and follow us on Cyberdnevnik publication for more articles.

Cheers,

Vedran
