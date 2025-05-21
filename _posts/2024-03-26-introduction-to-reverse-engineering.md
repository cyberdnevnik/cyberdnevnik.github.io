---
title: Introduction to Reverse Engineering
author: hrvoje
toc: true
toc_min_header: 1
date: 2024-03-26 16:00:00
categories: [Articles, Reverse Engineering]
tags: [Reverse Engineering]
image:
  path: /assets/img/posts/img_introduction_to_reverse_engineering/heading_image.webp
  alt: Introduction to Reverse Engineering
---

# Definition of Reverse Engieering
> *“Reverse engineering (also known as backwards engineering or back engineering) is a process or method through which one attempts to understand through deductive reasoning how a previously made device, process, system, or piece of software accomplishes a task with very little (if any) insight into exactly how it does so.” — Wikipedia*

Strictly speaking of software, reverse engineering is a method where someone will try to analyze the inner workings of someone else’s program, software, etc. until full understanding is gained to the point where you can recreate it partially or sometimes even fully.

# Applying Reverse Engineering
Reverse engineering can be applied to numerous different cases. Some of the cases where it can be applied but not limited to are:
 - Understanding Legacy Code
 - Interoperability
 - Security Research

## Understanding Legacy Code
Place yourself in the position of a kid and imagine you are playing with your favorite toy. Eventually, you grow up and forget about that toy until the day comes when you see it on your shelf and would like to play with it again just to remind yourself of good times. But you come across a problem, you forget how to use it and the instructions manual is lost. So, you decide to take a closer look at it and understand how it is built and how it works so you can play with it again. This is essentially what applying reverse engineering to legacy code is for.

In the computing world, “legacy code” refers to very old software that is outdated or even not documented very well. It is like understanding how your toy works just applied to old software; you reverse engineer it to eventually understand how it works to be able to fix it or even update it by yourself.

## Interoperability
In the context of interoperability, reverse engineering is applied by trying to figure out the languages, formats, and structures that different programs use so they can work together smoothly without any issues.

Let’s say you have an application that you want to connect to some system. That system unfortunately uses a unique way of organizing and structuring data. Not the end of the world, through reversing for interoperability, you would learn how it works and eventually create your application to work and adapt to that system.

## Security Research
In the world of cyber security, reverse engineering is used to analyze some kind of application/software to understand how it is designed, how it works, and most importantly to find all kinds of vulnerabilities and issues there might be.

Finding these vulnerabilities plays a very important role as it can be of great help to remediate all the issues that are found and provide a patch for the vulnerable software before malicious actors can abuse the same vulnerability for malicious intentions.

Another awesome sub-branch is reverse engineering malware samples. Certain malicious actors or even groups tend to create their malicious software intended for gaining system access or sometimes just destroying the user's computer. Reverse engineering is applied here to understand how malicious software works and to find a way to detect it and prevent it from further so-called infestation.

![](/assets/img/posts/img_introduction_to_reverse_engineering/malware_meme.webp)

# Legal and Ethical Considerations
Now that you know where and how reverse engineering can be applied, you are certainly wondering if doing such stuff is illegal or unethical to do in the first place.

## Legality
Whether reverse engineering is legal or not mostly depends on various factors such as the purpose, methods used, and the laws of the specific countries. In most places, reverse engineering is legal if done for purposes like interoperability, security research, etc. However, if it involves breaking computer systems, bypassing security measures, or any other malicious act, it can be illegal.

## Ethicality
Ethics deals with what is considered morally right and wrong as we already know. The ethicality of reverse engineering can also vary based on the intentions someone has. For example, if you were given full permission to reverse engineer someone’s software to find vulnerabilities and patch them, that would very well be called ethical.

On the other hand, if you were to reverse engineer someone’s, let’s say, product software and break licensing feature to use paid software for free (also known as cracking), that would be considered unethical.

![](/assets/img/posts/img_introduction_to_reverse_engineering/reversing_meme.webp)

# Reverse Engineering Toolkit
There are way too many tools to cover in one simple blog, but I will lightly go over some of the mainstream ones that many different reverse engineers widely use just to get you a little bit familiar.

The following tools are very commonly used for many different purposes:
 - IDA Pro
 - Ghidra
 - x64dbg

## IDA Pro
The Interactive Disassembler (IDA) is a super popular disassembler as well as a debugger that generates assembly language from the compiled executable code. This tool has a wide range of processor and operating systems support. It can be used as a debugger for Windows Portable Executables (PE), Mac OS X, and Linux Executable and Linkable Format (ELF) files.

There are different IDA Pro versions, some paid ones come with a decompiler plug-in for different system architectures which will generate a high-level C source code representation from the disassembled binary. This plug-in is very useful as it can be very beneficial to reverse engineers to understand how binary works and save time on going through the assembly code.

The following image shows the first look at how IDA Pro looks (older version, but to get a good idea):

![](/assets/img/posts/img_introduction_to_reverse_engineering/ida_pro.png)
_Source: <https://hex-rays.com/products/ida/news/6_0/>_

To learn more about IDA Pro, the following resources are recommended:
 - <https://hex-rays.com/products/ida/support/tutorials/> (Official Hex-Rays IDA Pro tutorial)
 - <https://hex-rays.com/documentation/> (Hex-Rays documentation)
 - <https://www.amazon.com/IDA-Pro-Book-Unofficial-Disassembler/dp/1593272898> (Unofficial guide for IDA Pro)

## Ghidra
Ghidra is yet another software reverse engineering framework created by the NSA (National Security Agency). This framework also includes a large set of features and analysis tools that enable users to debug, decompile, script, etc. programs for many different operating system platforms.

One of the main reasons for using such a tool is that it is completely free to use and it is constantly being developed and upgraded. Ghidra comes with a wide range of utilities and features just like IDA Pro and therefore is a great tool to have in the inventory.

The following image shows a first look at the Ghidra’s UI and its features:

![](/assets/img/posts/img_introduction_to_reverse_engineering/ghidra_image.png)
_Source: <https://en.wikipedia.org/wiki/Ghidra>_

To learn more about Ghidra, the following resources are recommended:
 - <https://github.com/NationalSecurityAgency/ghidra> (Ghidra’s GitHub repository)
 - <https://www.amazon.com/Ghidra-Book-Definitive-Guide/dp/1718501021> (Ghidra Book)

## x64dbg
x64dbg is an open-source user mode debugger for Windows. Its usage is aimed at malware analysis and reverse engineering of executables. It comes with many features including its comprehensive plugin system where you can even add your plugins and more.

Although its name says x64 debugger, it comes together with its x32dbg counterpart which can help you in debugging 32-bit executables just as you would do your 64-bit ones.

The following image shows a first look at the x64dbg and its features.

![](/assets/img/posts/img_introduction_to_reverse_engineering/x64dbg_image.png)
_Source: <https://x64dbg.com/>_

The best resources to learn x64dbg is its GitHub repository along with its awesome documentation:
 - <https://github.com/x64dbg/x64dbg> (x64dbg Github repository)
 - <https://help.x64dbg.com/en/latest/> (x64dbg help page/documentation)

## Tools Conclusion
This alone already shows that there is a vast majority of tools, plugins, frameworks, and other resources that are available for your day-to-day dissecting and understanding of software applications.

While it’s impractical to delve into exhaustive details of each tool and technology in a single introductory blog post, the goal here is to provide a broad overview of the rich landscape of resources available for reverse engineering.

# Cracking Simple License Key Program
> *Before starting, it should be noted that some of the code snippets from Ghidra were simplified (variable names have relevant names, etc.).*
{: .prompt-info}

In this final segment, we will delve into a simple “crackme” challenge called Crack The Key which is accessible on the <a href="https://crackmes.one/crackme/65ed01ee7b0f7ceced2c5afb" target="_blank">following page</a>.

Once the challenge is downloaded and extracted from the archive, we can see that we are dealing with a 64-bit Linux executable (ELF) that is not stripped, meaning, function names stay the same when reverse engineering.

```bash
┌──(kali㉿kali)-[~/Hacking/crackmes/crack_the_key]
└─$ file ctf_1 
ctf_1: ELF 64-bit LSB pie executable, x86-64, version 1 (SYSV), dynamically linked, interpreter /lib64/ld-linux-x86-64.so.2, BuildID[sha1]=f17bb18ab20a043f34c60c4506ea7d8c1b15256f, for GNU/Linux 3.2.0, not stripped
```

Running the binary, we can see a message stating that the file or directory trying to be opened does not exist.

```bash
┌──(kali㉿kali)-[~/Hacking/Crackmes/crack_the_key]
└─$ ./ctf_1     
Error opening file: No such file or directory
```

Opening the binary in Ghidra, we land immediately in the `main()` function of the program. Let’s review the decompiled code piece by piece, starting with the first part.

```c
  return_value = 0;
  strcpy(license_file,finh);
  lic_stream = fopen(license_file,"r");
  if (lic_stream == (FILE *)0x0) {
    perror("Error opening file");
    return_value = 0xffffffff;
  }
```

The first part copies the string from the global variable called `finh` to `license_file` and then opens a file with the copied name. If it fails it prints a message we saw earlier. Checking the `finh` global variable, we can see it holds the `secret_flag` string.

```c
                             finh                                            XREF[1]:     main:00101433(*)  
        00104070 73 65 63        ds         "secret_flag"
                 72 65 74 
                 5f 66 6c 
        0010407c 00              ??         00h
        0010407d 00              ??         00h
        0010407e 00              ??         00h
        0010407f 00              ??         00h
```

If the file with the name `secret_flag` is found, then the following part of the binary is executed next.

```c
  else {
    fseek(lic_stream,0,SEEK_END);
    content_length = ftell(lic_stream);
    rewind(lic_stream);
    ptr_memory = (char *)malloc(content_length + 1);
    if (ptr_memory == (char *)0x0) {
      perror("Error allocating memory");
      fclose(lic_stream);
      return_value = 0xffffffff;
    }
```

In this part, the binary simply reads in the contents of the file, and with the returned content size (in bytes) it will allocate memory on the heap using the `malloc()` function which returns a pointer to the allocated memory.

Next up is the main functionality of the program which checks whether the key found in the `license_file` license file is valid by performing a XOR operation.

```c
    else {
      element_num = fread(ptr_memory,1,content_length,lic_stream);
      if (element_num == content_length) {
        fclose(lic_stream);
        ptr_memory[content_length] = '\0';
        content_strlen = strlen(ptr_memory);
        if (content_strlen == 8) {
          local_50 = 8;
          uStack_4c = 0x20;
          local_48 = 0x30;
          iterator = 0;
          success = 1;
          strcpy((char *)buffer,ptr_memory);
          for (i = 0; i < 8; i = i + 1) {
            iterator = iterator + 1;
            fkey[i] = fkey[i] ^ buffer[i];
            buffer[i] = buffer[i] ^ key[i + 1];
            if (buffer[i] != (&skey)[i]) {
              success = 0;
              break;
            }
          }
          if (success == 1) {
            local_60 = CONCAT44(uStack_4c,local_50);
            local_58 = local_48;
            giveFlag(iterator,local_60,local_48);
          }
        }
        free(ptr_memory);
        return_value = 0;
      }
```

We can see that a major check is performed where the size of the contents from the file is checked if it is 8. If so, license file contents are eventually copied to the byte array called `buffer`. Additionally, `iterator` and `fkey` variables are part of the `giveFlag()` function but are irrelevant for passing the challenge.

Moving on, we see a for loop that iterates over every byte in the file (now buffer) and `XORs` the bytes with every byte from the global variable named key. Checking the key global variable we can see the following 8 bytes.

```c
                             key                                             XREF[2]:     main:001015c2(*), 
                                                                                          main:001015c9(*)  
        00102070 00 05 54        undefine
                 10 36 f6 
                 f1 03 17
           00102070 00              undefined1 00h                     [0]                               XREF[2]:     main:001015c2(*), 
                                                                                                                     main:001015c9(*)  
           00102071 05              undefined1 05h                     [1]
           00102072 54              undefined1 54h                     [2]
           00102073 10              undefined1 10h                     [3]
           00102074 36              undefined1 36h                     [4]
           00102075 f6              undefined1 F6h                     [5]
           00102076 f1              undefined1 F1h                     [6]
           00102077 03              undefined1 03h                     [7]
           00102078 17              undefined1 17h                     [8]
```

It should be noted that the first byte is a null byte (0x00) which is skipped as indicated in the `key[i + 1]` part of the code. Then once the XOR operation is performed, it checks if the resulting byte is equal to the first byte of the skey global variable. Further inspection shows that skey contains the following 8 bytes

```c
                             skey                                            XREF[2]:     main:001015e4(*), 
                                                                                          main:001015eb(*)  
        00102079 76              db         76h
        0010207a 21              ??         21h    !
        0010207b 60              ??         60h    `
        0010207c 53              ??         53h    S
        0010207d 84              ??         84h
        0010207e 9c              ??         9Ch
        0010207f 62              ??         62h    b
        00102080 79              ??         79h    y
```

From all of this information, we can conclude that if the resulting bytes from the initial XOR operations `(buffer ^ key)` are equal to the bytes found in the `skey`, the `success` variable is kept a 1, meaning the binary will continue its execution to the `giveFlag()` function.

To get the correct license key, all we need to do is perform the `reverse XOR`, where we XOR bytes from `skey` with bytes from `key` and end up with bytes that are needed in the license file. We can do that using the following Python script.

```python
key = [ 0x05, 0x54, 0x10, 0x36, 0xf6, 0xf1, 0x03, 0x17 ]
skey = [ 0x76, 0x21, 0x60, 0x53, 0x84, 0x9c, 0x62, 0x79 ]

license_key = ''
for i in range(8):
    license_key += chr(skey[i] ^ key[i])

print(license_key)
```

Once we run it, we can see the corresponding license key is `superman`.

```bash
┌──(kali㉿kali)-[~/Hacking/Crackmes/crack_the_key]
└─$ python3 xor.py 
superman
```

Now that we know the correct license key, we can issue the following command which will create a file called `secret_flag` and insert the `superman` license key in it.

> Also notice the `-n` flag in the echo command. This is so the newline is ommited because these are extra bytes we don’t need and will mess up the correct key.
{: .prompt-tip}

```bash
┌──(kali㉿kali)-[~/Hacking/Crackmes/crack_the_key]
└─$ echo -n 'superman' > secret_flag
```

With all that done, we can just run the program again and see that we pass all the checks and retrieve the correct flag.

```bash
┌──(kali㉿kali)-[~/Hacking/Crackmes/crack_the_key]
└─$ ./ctf_1 
flag{this is your fight song}
```