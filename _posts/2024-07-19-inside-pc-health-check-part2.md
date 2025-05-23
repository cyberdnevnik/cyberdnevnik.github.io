---
title: 'Inside PC Health Check: Reversing Compatibility Checks - Part 2'
author: hrvoje
toc: true
toc_min_header: 1
date: 2024-07-19 16:00:00
categories: [Articles, Reverse Engineering]
tags: [Reverse Engineering]
image:
  path: /assets/img/posts/img_inside_pc_health_check/heading_image.png
---

### Processor Cores Check

Following all that, next on our list of checks is the check for how many logical processors we have. As the function is simple and not that long, let’s view the decompiled code in the Ghidra.

![Untitled](/assets/img/posts/img_inside_pc_health_check/Untitled%2027.png)

First part starts by calling `GetActiveProcessorCount()` with `ALL_PROCESSOR_GROUPS(0xFFFF)` symbolic constant. If that parameter is passed it will return the number of active processors in the system.

If I run this in the debugger I should retrieve the amount in the EAX register, so let’s test that out.

![Untitled](/assets/img/posts/img_inside_pc_health_check/Untitled%2028.png)

![Untitled](/assets/img/posts/img_inside_pc_health_check/Untitled%2029.png)

We can see that it returns the number `3`, and that is correct, my VM can use 3 processor cores, which we can confirm in the task manager as well.

![Untitled](/assets/img/posts/img_inside_pc_health_check/Untitled%2030.png)

Then, there is a check for the one-time initialization once again and after that there is more important check. It check whether the retrieved number of processors is less then 2, if true, the function fails the check. So looks like we need `2 or more cores` to run the Windows 11.

### Secure Boot Check

Looking through, seems to be quite big function, but no worries, it all makes sense if we keep going from top to bottom. We can already see that the first function being called is `LoadLibraryExW()`.

![Untitled](/assets/img/posts/img_inside_pc_health_check/Untitled%2031.png)

LoadLibraryExW() function will load the specified module into address space of the calling process. We can see the following arguments are needed for the function from the documentation.

![Untitled](/assets/img/posts/img_inside_pc_health_check/Untitled%2032.png)

`lpLibFileName` requires a string that specifies the file name of the module to be loaded, we can see from in the debugger that it is `ntdll.dll` library and is loaded in RCX register. This is a very known library in windows which exports native windows API functions that are essential for functioning of various processes and applications.

`hFile` is reserved and should be set to NULL, we can see that EDX register sets the NULL by xor-ing the register by itself.

Lastly, `dwFlags` specifies the action to be taken upon loading the module. In debugger we see the `0x800 (LOAD_LIBRARY_SEARCH_SYSTEM32)` being loaded into R8D register. This specifies that system32 will be searched for the DLL and it’s dependencies (%windows%\system32).

If the function succeeds, the return value will be a handle to the specified module. If w step over the function we can see the handle in the RAX register.

![Untitled](/assets/img/posts/img_inside_pc_health_check/Untitled%2033.png)

Our handle to the ntdll.dll library is `00007FFB8F830000`. If we follow this address in the dump, we can see that it start with `“MZ”`. MZ is the header (magic bytes) that specify that this is the start of a windows executable file.

![Untitled](/assets/img/posts/img_inside_pc_health_check/Untitled%2034.png)

Next function that is being called is `GetProcAddress()`. 

![Untitled](/assets/img/posts/img_inside_pc_health_check/Untitled%2035.png)

Let’s see what the documentation says about the arguments needed and more.

![Untitled](/assets/img/posts/img_inside_pc_health_check/Untitled%2036.png)

For `hModule` parameter a handle to the specified module needs to be provided. In our case this is handle to ntdll.dll found in EAX (returned by previous function) and then copied to RCX.

`lpProcName` requires function name which in debugger is `NtQuerySystemInformation()`. It’s address is loaded in the RDX register.

Return value of the function is the memory address of the specified exported function from the loaded module. In our case the function should return the address of NtQuerySystemInformation().

![Untitled](/assets/img/posts/img_inside_pc_health_check/Untitled%2037.png)

Next up we have a call for `0x7FF6A5629DC8`. This is essentially our NtQuerySystemInformation() function. How it works internally, it makes a system call into `Windows Kernel` where multiple function are called. Without going too in depth, let’s go over the arguments passed so we know what we are supposed to look at and check returned values.

![Untitled](/assets/img/posts/img_inside_pc_health_check/Untitled%2038.png)

First argument is `SystemInformationClass` of type `SYSTEM_INFORMATION_CLASS`. This indicates which system information should be queried. This is where `0x91` is passed but on MSDN nothing is shown. Seems like we are up against one of those `undocumented windows internal structures`. While researching around, this website had all the necessary information ([https://www.geoffchappell.com/studies/windows/km/ntoskrnl/api/ex/sysinfo/query.htm](https://www.geoffchappell.com/studies/windows/km/ntoskrnl/api/ex/sysinfo/query.htm)). What 0x91 represents is `SystemSecureBootInformation` class.

Second argument is `SystemInformation` which is a pointer to a buffer that receives the requested information. So the requested information will be located at `[rsp+48]` and we should check it once the function call is done.

Third argument is pretty simple, it is `SystemInformationLength`. It is the size of the buffer pointed to by second argument.

Lastly, fourth argument is `ReturnLength` which is an optional pointer to the location where the function writes the actual size of requested information. In our case, the location is found at `[rsp+60]`.

This what the SYSTEM_SECUREBOOT_INFORMATION structure looks like:

![Untitled](/assets/img/posts/img_inside_pc_health_check/Untitled%2039.png)

It is two bool’s, so it makes sense that in assembly it would be `[rdi+2] = 2`, because it is 2 bytes on both x86 and x64 architectures.

If I step over the the function we can see that SystemInformation at `[rsp+48]` contains byte 00.

![Untitled](/assets/img/posts/img_inside_pc_health_check/Untitled%2040.png)

After the NtQuerySystemInforamtion is called, there is a check if the result is 0. If RAX is 0 then whole block that contains handling if function failed is jumped over. In our case function was called normally and we proceed.

Next there is two checks being performed, one at `[rsp+48]` and second one at `[rsp+49]`. These locations are two bytes from the structure we identified and are `SecureBootEnabled` and `SecureBootCapable`.

![Untitled](/assets/img/posts/img_inside_pc_health_check/Untitled%2041.png)

So based on the comparisons from our structure, if one of those fails we end up loading error following error messages:

- "UEFI check failed, need machine capable of SecureBoot"
- "UEFI check returned unknown eligibility"

As my VM doesn’t have Secure Boot enabled we fail both comparisons and that is why we get “This PC must support Secure Boot” message upon checking the requirements at the start.

![Untitled](/assets/img/posts/img_inside_pc_health_check/Untitled%2042.png)

#### Side Mission: Patching the Application

And what would happen if I were to patch this application and set both SecureBootEnabled and SecureBootCapable as true? Let’s try it.

Now I am at the instructions before the comparisons are made.

![Untitled](/assets/img/posts/img_inside_pc_health_check/Untitled%2043.png)

I will change them both to be 1, meaing that SecureBootEnabled and SecureBootCapable are true.

![Untitled](/assets/img/posts/img_inside_pc_health_check/Untitled%2044.png)

And if I make the program run normally, we pass the check and message is completely different than before.

![Untitled](/assets/img/posts/img_inside_pc_health_check/Untitled%2045.png)

Now only TPM 2.0 is missing 😄. Pretty cool, but this doesn’t make us capable of actually installing Windows 11 of course.

### Processor Family Check

One more huge function, but shouldn’t be a problem. First it will call a memset() function just like before and set allocated space to 0.

![Untitled](/assets/img/posts/img_inside_pc_health_check/Untitled%2046.png)

Following that, we have a call to `RegGetValueW()` function which retrieves the type and data for the specified registry value.

![Untitled](/assets/img/posts/img_inside_pc_health_check/Untitled%2047.png)

So first argument is `hkey` where handle to an open registry key is placed or a constant value. Here `0xFFFFFFFF80000002` value is being passed which after searching around equates to `HKEY_LOCAL_MACHINE` predefined key([http://www.dsource.org/projects/tango/ticket/820](http://www.dsource.org/projects/tango/ticket/820)).

Next argument is `lpSubKey` which takes path of the registry key. In our case this is the string `"Hardware\\Description\\System\\CentralProcessor\\0”`.

Third argument is `lpValue` which takes the name of the registry value. In our case this corresponds to `"Platform Specific Field 1”`.

Fourth argument is `dwFlags` which restricts the data type of value to be queried. In our case this is the `[r12+10]` value. r12 is 0 and if 10 is added we have 10 again. Looking through documentation 10 equates to `RRF_RT_REG_DWORD`, this restricts type to REG_DWORD.

5th argument is `pdwType` which is a pointer to a variable that receives the value’s data. In our case this is found at `[rsp+20]`.

6th and 7th arguments are both pointers, one points to a buffer that receives the value's data at `[rsp+28]` and other on to a variable that specifies the size of the buffer pointed to by the pvData parameter, in bytes found at `[rsp+30]`.

![Untitled](/assets/img/posts/img_inside_pc_health_check/Untitled%2048.png)

Return value is compared to 0. In my case, return value is 0 (ERROR_SUCCESS). Then based on the comparison it checks if the result is not signed, if it is signed value then we continue to the next function.

To get the general idea of what was queried from registry, following image describes the path and value that was queried.

![Untitled](/assets/img/posts/img_inside_pc_health_check/Untitled%2049.png)

What this `Platform Specific Field 1` is, it is actually a registry value in order to see the processor microarchitecture and which microcode revision is in use.

Since the query was successful we skip the error message block, and continue to our next function call which is `GetNativeSystemInfo()`.

![Untitled](/assets/img/posts/img_inside_pc_health_check/Untitled%2050.png)

This function retrieves information about the current system to an application running under `WOW64`. WOW64 is just a subsystem in windows capable of running 32-bit applications on 64-bit Windows systems.

![Untitled](/assets/img/posts/img_inside_pc_health_check/Untitled%2051.png)

We can see that as an argument it takes single parameter called `lpSystemInfo`. This is a pointer to a `SYSTEM_INFO` structure that receives the information. Additionally this function does not seem to have return values.

So, once this function finishes we should receive the gathered information in `[rbp-60]` location.

![Untitled](/assets/img/posts/img_inside_pc_health_check/Untitled%2052.png)

Luckily MSDN has all of this documented and we can easily gather the information.

![Untitled](/assets/img/posts/img_inside_pc_health_check/Untitled%2053.png)

Let’s further check what disassembly says:

![Untitled](/assets/img/posts/img_inside_pc_health_check/Untitled%2054.png)

So 2 Bytes (WORD) are moved from our structure into EAX register. Then it is tested if it is 0. Since in my case it is not, we continue. If we check what the first WORD is in the documentation, we can see that it is `wProcessorArchitecture` which is then compared to 9 (`PROCESSOR_ARCHITECTURE_AMD64`).

Since my process is actually AMD it will take the jump. Next up is actually one of the coolest instructions I have ever came across that I was not aware of before. It is the `CPUID` instruction.

![Untitled](/assets/img/posts/img_inside_pc_health_check/Untitled%2055.png)

This instruction is used to basically determine processor type and if some other features are implemented.

Once the instruction is executed, one of the important stuff it does is returns the CPU's manufacturer ID string which is a twelve-character ASCII string stored in EBX, EDX, ECX (in that exact order).

If I step over the function we can see the following values are set in those registers.

- EBX - 0x68747541
- EDX - 0x69746E65
- ECX - 0x444D4163

Since all of that is in little-endian format we need to convert them back, for example, let’s take the value from EBX which is 0x68747541. If you reverse it back you get 0x41757468. If we were to do it to all of them and connect them we end up with `41757468656E746963414D44`. Now change that to ASCII and we get `“AuthenticAMD”` string.

![Untitled](/assets/img/posts/img_inside_pc_health_check/Untitled%2056.png)

We can see that there is a call to `strncmp()` function that will compare our retrieved 12 character ASCII with a string “AuthenticAMD”. And we will pass the comparison as I do in fact have an AMD CPU.

You can also see below it, there is a comparison for Intel CPUs as well.

![Untitled](/assets/img/posts/img_inside_pc_health_check/Untitled%2057.png)

Once that is done and checked the following comparison is made:

![Untitled](/assets/img/posts/img_inside_pc_health_check/Untitled%2058.png)

As you can see register r14d is compared to 17. r14d essentially loads the value from `[rbp-34]`. After some time figuring out, seems like this is the `wProcessorLevel` member from SYSTEM_INFO structure.

This member contains architecture-dependent processor level. In my case r14d register has 0x19 (25 decimal) and it is compared to 0x17 (23 decimal). From some researching and asking around these two values represent 64-bit and 32-bit respectively.

From that information we can conclude that it then checks if processor “level” is less than 0x17 that would mean processors that are 32-bit and older types don’t pass, while processors over 0x17 which are 64-bit or more modern types do pass the check.

With that we have our check for processor family and type covered. We saw a lot of interesting techniques and methods and what is actually being compared to get the final result.

### TPM Check

And our final boss of all the check is the check to see if our computer supports TPM 2.0. Let’s dive in.

First function being called is `Tbsi_GetDeviceInfo()` which obtains the version of the TPM on the computer.

![Untitled](/assets/img/posts/img_inside_pc_health_check/Untitled%2059.png)

From the documentation we can see following function arguments

![Untitled](/assets/img/posts/img_inside_pc_health_check/Untitled%2060.png)

1st argument is `Size` of the memory location, for us this is 0x10 (16 dec). 2nd argument is Info which is a pointer to a `TPM_DEVICE_INFO` structure that has info regarding TPM which is at `[rsp+28].`

If the function succeeds, return value is 0x0 (`TBS_SUCCESS`). Let’s see what is returned for me. When I step over the function, my EAX register is set to `0x8028400F` (TBS_E_TPM_NOT_FOUND). With such error I fail other comparisons because my VM doesn’t have TPM enabled at all.

In case where the return value of 0x0 (TBS_SUCCESS) is returned, second 4 bytes from the TPM_DEVICE_INFO structure would be checked. This is `tpmVersion` member which hold TPM version from `[rsp+2C]`.

![Untitled](/assets/img/posts/img_inside_pc_health_check/Untitled%2061.png)

Later on, this is compared to value of 2 and then jump if the value is above or equal. So basically check for TPM 2.0 or above (seems like future proof, TPM 3.0????).

![Untitled](/assets/img/posts/img_inside_pc_health_check/Untitled%2062.png)

Cool, so this check was super simple, calls a function that fills all the necessary TPM information into a structure and then makes a simple check if `TPM 2.0` is enabled. Now, try and patch the application for yourself and see if you can pass the check :).

# Conclusion

Wasn’t that a wild rollercoaster?

If you imagined, this was a massive dump of information. As I like to reverse engineer stuff, this was one of the applications that I was interested in. Hopefully, you managed to learn something new, or at least get some experience and see how some methods of reversing are done. We have seen some interesting stuff such as the usage of undocumented Windows APIs and internal structures, cool instructions like CPUID, how some Win32 API functions are used by Microsoft, and more.

As you can see reverse engineering can be a daunting task and can be super confusing at times but trust me, the more you do it the more you are going to be used to it and seeing hex numbers, recognizing little-endian format, etc. It’s a very fun process if you like seeing how things work without having the source code.