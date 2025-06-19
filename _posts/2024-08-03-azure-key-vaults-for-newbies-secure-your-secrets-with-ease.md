---
title: "Azure Key Vaults for Newbies: Secure Your Secrets with Ease"
author: vedran
toc: true
toc_min_header: 1
date: 2024-08-03 12:00:00
categories: [Articles, Cybersecurity]
tags: [ Azure, Microsoft, Key Vault, Secrets, Keys, Certificates]
image:
  path: /assets/img/posts/img_azure_key_vaults_for_newbies_secure_your_secrets_with_ease/image.webp
  alt: Azure Key Vault logo
---

I’m sure that you’ve had situations where you have asked yourself “OK, I have some **certificates** that we are using for SSL/TLS, also a few of the **passwords** and **database connection** strings, and **encryption keys** to encrypt our data but where can I save them securely?”

This is where **Azure Key Vault** comes in.

## Azure Key Vault Overview

First and foremost its purpose is to solve the following problems:

* **Secrets management** — control access to passwords, tokens, certificates, API keys, etc.

* **Key management** — easy way to create and control encryption keys used to encrypt your data.
    
* **Certificate management** — provisioning, managing, and deploying public and private TLS/SSL certificates to use with Azure and internally connected resources.

It comes in two service tiers:

**Standard** — encrypts with a software key using industry-standard algorithms and key lengths.

**Premium** — also includes **hardware security modules (HSM)** protected keys which provide additional assurance.

Authentication to Azure Key Vault is done via **Microsoft Entra ID**. Authorization may be done via Azure role-based access control **(Azure RBAC)** or **Key Vault access policy**. Azure RBAC can be used for both management of the vaults and accessing data stored in a vault, while the key vault access policy can only be used when attempting to access data stored in a vault.

As a secure store in Azure, Key Vault has been used to simplify scenarios like:

* [Azure Disk Encryption](https://learn.microsoft.com/en-us/azure/security/fundamentals/encryption-overview)
    
* The [always encrypted](https://learn.microsoft.com/en-us/sql/relational-databases/security/encryption/always-encrypted-database-engine) and [Transparent Data Encryption](https://learn.microsoft.com/en-us/sql/relational-databases/security/encryption/transparent-data-encryption) functionality in SQL Server and Azure SQL Database
    
* [Azure App Service](https://learn.microsoft.com/en-us/azure/app-service/configure-ssl-certificate)

Key Vault itself can integrate with **storage accounts**, **event hubs**, and **log analytics**.

## Keys inside Azure Key Vault

![Azure Key management sample — image courtesy of Microsoft](/assets/img/posts/img_azure_key_vaults_for_newbies_secure_your_secrets_with_ease/keymanagamentsample.png)
*Azure Key management sample — image courtesy of Microsoft*

Key Vault supports **Rivest–Shamir–Adleman (RSA)** and **Eliptic Curve (EC)** keys, while **Managed HSM** supports **RSA**, **EC**, and **symmetric keys**.

![HSM — Protected keys — Image courtesy of Microsoft](/assets/img/posts/img_azure_key_vaults_for_newbies_secure_your_secrets_with_ease/hsmprotectedkeys.png)
*HSM — Protected keys — Image courtesy of Microsoft*

![Software Protected keys — Image courtesy of Microsoft](/assets/img/posts/img_azure_key_vaults_for_newbies_secure_your_secrets_with_ease/softwareprotectedkeys.png)
*Software Protected keys — Image courtesy of Microsoft*

Most typical usage scenarios for keys are Azure server-side data encryption with **customer-managed keys**, client-side data encryption (**blobs** for example), and Keyless TLS (using client libraries for programming)


## Tell me your Secrets...

Key Vault provides secure storage of generic secrets, such as passwords and database connection strings as mentioned above.

From a developer’s perspective, Key Vault APIs accept and return secret values as **strings**. Internally, Key Vault stores and manages secrets as sequences of octets (8-bit bytes), with a maximum size of 25k bytes each. The Key Vault service doesn’t provide semantics for secrets. It merely accepts the data, encrypts it, stores it, and returns a secret identifier (`id`). The **identifier can be used to retrieve the secret at a later time**.

For highly sensitive data, clients should consider extra layers of protection for data. Encrypting data **using a separate protection key** prior to storage in Key Vault is one example.

![Example of secret created inside Azure Key Vault — image courtesy of Microsoft](/assets/img/posts/img_azure_key_vaults_for_newbies_secure_your_secrets_with_ease/secretexample.png)
*Example of secret created inside Azure Key Vault — image courtesy of Microsoft*

All secrets in your Key Vault are **stored encrypted**. Key Vault encrypts secrets at rest with a hierarchy of encryption keys, with all keys in that hierarchy protected by modules that are **FIPS 140–2 compliant**. This encryption is transparent and requires no action from the user. The Azure Key Vault service **encrypts your secrets when you add them**, and **decrypts them automatically when you read them**.

Key Vault also provides you access to secrets through **access control**:

![Secrets access control in Azure Key Vault](/assets/img/posts/img_azure_key_vaults_for_newbies_secure_your_secrets_with_ease/secretsaccesscontrol.png)
*Secrets access control in Azure Key Vault*

For more information on working with secrets, see [Secret operations in the Key Vault REST API reference](https://learn.microsoft.com/en-us/rest/api/keyvault). For information on establishing permissions, see [Vaults — Create or Update](https://learn.microsoft.com/en-us/rest/api/keyvault/keyvault/vaults/create-or-update) and [Vaults — Update Access Policy](https://learn.microsoft.com/en-us/rest/api/keyvault/keyvault/vaults/update-access-policy).

## Verify your ownership with Certificates

* Azure Key Vault certificate support provides for the management of your X.509 certificates and also certain behaviors:

* Allows a certificate owner to create a certificate through Azure Key Vault or import existing certificates which can be both self-signed and generated from certificate authority (CA)

* Allows a certificate owner to create a policy that directs Key Vault to manage the lifecycle of a certificate

* Allows a certificate owner to provide contact information for notifications about the lifecycle events of expiration and renewal

* Supports automatic renewal with selected issuers — Key Vault partner X.509 certificate providers and CAs

![Key Vault certificate as object visualization — image courtesy of Microsoft](/assets/img/posts/img_azure_key_vaults_for_newbies_secure_your_secrets_with_ease/certificateobjectvisualization.png)
*Key Vault certificate as object visualization — image courtesy of Microsoft*

When a certificate is created, an addressable key and secret are also created with the same name. Key Vault allows key operations, and the Key Vault secrete allows retrieval of the certificate value as a secret. Key Vault certificate also contains public X.509 certificate metadata.


### Creation of self-signed certificate on Azure Key Vault

To add a certificate to the vault, you just need to take a couple of additional steps. In this case, we add a self-signed certificate that could be used by an application. The certificate is called **ExampleCertificate**.

1. On the Key Vault properties pages, select Certificates.
    
2. Click on Generate/Import.
    
3. On the Create a Certificate screen choose the following values:

    Method of Certificate Creation: Generate.
    
    Certificate Name: ExampleCertificate.
    
    Subject: CN=ExampleDomain

Leave the other values to their defaults. (By default, if you don’t specify anything special in Advanced policy, it’ll be usable as a client auth certificate.)

4. Click **Create**

![Example of created self-signed certificate — image courtesy of Microsoft](/assets/img/posts/img_azure_key_vaults_for_newbies_secure_your_secrets_with_ease/selfsignedcertificate.png)
*Example of created self-signed certificate — image courtesy of Microsoft*

### Export of selfsogmed certificate

By clicking the **“Download in CER format”** or **“Download in PFX/PEM format”** button, you can download the certificate.

![Downloading of Certificate from Azure Key Vault — image courtesy of Microsoft](/assets/img/posts/img_azure_key_vaults_for_newbies_secure_your_secrets_with_ease/downloadingcertificate.png)
*Downloading of Certificate from Azure Key Vault — image courtesy of Microsoft*

There is also a whole procedure of how you can do the same with Certificates signed by CA like **DigiCert** or **GlobalSign** but I won't get into much detail with that besides leaving a link to the steps.


## Best practices with Azure Key Vault

* **Seperate Key Vaults** -  the recommendation is to use a vault per application per environment (development, preproduction, and production), per region. Granular isolation helps you not share secrets across applications, environments, and regions, and it also reduces the threat if there is a breach.

* **Control access to your Key Vault**:

    Lock down access to your subscription, resource group, and key vaults using the role-based access control **(RBAC) permission model for the data plane**.
    
    **Assign RBAC roles** at Key Vault scope for applications, services, and workloads requiring persistent access to Key Vault


* Assign just-in-time eligible RBAC roles for operators, administrators, and other user accounts requiring privileged access to Key Vault using [Privileged Identity Management (PIM)](https://learn.microsoft.com/en-us/azure/active-directory/privileged-identity-management/pim-configure)

* Require at **least one approver**

* Enforce **multi-factor authentication**

* Restrict network access with [Private Link, Firewall and Virtual Networks](https://learn.microsoft.com/en-us/azure/key-vault/general/private-link-service)

* **Turn on data protection for your vault** — Turn on purge protection to guard against malicious or accidental deletion of the secrets and key vault even after soft-delete is turned on.
    
* **Turn on logging** — Turn on logging for your vault. Also, set up alerts.
    
* **Backup** — Purge protection prevents malicious and accidental deletion of vault objects for up to **90 days**. In scenarios, when purge protection is not a possible option, it is recommended to backup vault objects, which can’t be recreated from other sources like encryption keys generated within the vault.

### Useful documentation

* [Azure Key Vault documentation](https://learn.microsoft.com/en-us/azure/key-vault/general/)
    
* [John Savill’s Azure Key Vault Deep dive](https://www.youtube.com/watch?v=kP7KpfToMkg)

* [Azure Key Vault pricing](https://azure.microsoft.com/en-us/pricing/details/key-vault/)

## Conclusion

As always thank you for reading the article, I hope it was useful and comprehensive. If you’ve liked it -  share it around. It would mean a lot. On the same note, check out the articles written by **[Martina](https://hr.linkedin.com/in/lenicmartina99)**
on **CrowdStrike** and different **EDR/MDR/XDR** topics and also you can check out **[Hrvoje’s](https://hr.linkedin.com/in/hrvoje-filakovi%C4%87)** articles related to **Penetration testing, red teaming, and offensive security**

For all the questions and all your feedback on the subject, you can find me  on [LinkedIn](https://www.linkedin.com/in/vedran-brodar/) and read the rest of our articles here on **CyberDnevnik**

Cheers,  
Vedran
