---
title: "An Opinionated Approach to JavaScript & TypeScript Development"
description: "Why we favor OOP over purely functional code in JS/TS — and how inheritance, typing, and JSDoc make APIs and SDKs scalable, maintainable, and future-proof."
pubDate: 2025-09-01
image:
  url: https://images.unsplash.com/photo-1605902711622-cfb43c4437d3?q=80&w=2070&auto=format&fit=crop
  alt: JavaScript & TypeScript Craftsmanship
tags: [JavaScript, TypeScript, Software Architecture, SDKs, API Design]
author: "claudio"
---

# An Opinionated Approach to JavaScript & TypeScript Development

Welcome to Kmino — this time we talk code 🤓!

To share a bit of our internal culture and the way we approach software, we decided to pick a slightly polemic topic: **OOP vs Functional Programming**. Along the way, we’ll also touch on how to use **IntelliSense** in your favor, and why good typing matters so much for developers consuming your SDKs or working inside your codebase.

💡 Spoiler #1: never type objects as `any` — it’s 2025, we can do better.  
💡 Spoiler #2: if you can, always go TypeScript. If not, at least use **JSDoc + a solid linter pipeline**.

We’ve worked with multiple languages and frameworks, but since JS/TS dominates most modern stacks, that’s where we’ll focus here.

And for those of you in a hurry, here’s the TL;DR of what’s ahead:

1. **JS/TS offers multiple ways to structure code.**
2. **We’ve seen both functional-first and OOP-first codebases at scale.**
3. **A disciplined OOP approach creates APIs and SDKs that last — less refactor pain, easier onboarding, fewer bugs.**

## OOP vs Functional in JS/TS

I won’t go as far as saying the React team openly regrets the shift to functional components—but even React veterans admit the move brought some baggage. Hooks solved real problems, but they also introduced new ones: **memory leaks, stale closures, harder-to-read lifecycles, and business logic that’s less intuitive at first glance**.

A good example is a post titled [_7 Reasons to Outlaw React’s Functional Components_](https://medium.com/%40housecor/7-reasons-to-outlaw-reacts-functional-components-ff5b5ae09b7c), which argues that class components remain simpler and more predictable, especially for stateful logic and lifecycle control.

Now, don’t get me wrong—I love functional programming. Pure functions, static utilities, helpers you can reuse everywhere? Great. But when you’re building something complex—SDKs, APIs, or apps with a lot of moving parts—**OOP shines**. With encapsulation, inheritance, interfaces, and protected/private members, you keep logic clean, business concepts clear, and onboarding easier for new devs.

At Kmino, we’ve seen this play out in real projects. Take [Pali Wallet](https://paliwallet.com), one of our oldest products. Our first attempt leaned hard into React’s functional style. The result? Buggy code, constant state issues, and 10+ user complaints a week. After refactoring to class-based modules—`EVMManager`, `UTXOManager`, and so on—bugs dropped dramatically. Complaints went from weekly emails to one every few months. Encapsulation and clear business logic gave developers a map instead of a maze.

So, here’s our stance:

- Use **functional** for pure logic, stateless helpers, and utilities.
- Use **OOP** for long-lived, complex business logic where clarity and structure matter most.

In future posts we’ll dig deeper into things like `extends` vs `implements`, protected vs private, and how to mix OOP and functional styles when it actually makes sense.

Until then, if this resonated, drop us a line at **read@kmino.io** with what you’d like us to cover next.

---

### A Visual Note on Lifecycles

Here’s a simple diagram contrasting the “clean” lifecycle flow of a class component with the more complex tangle of multiple hooks in a functional setup:

![Good vs Bad Lifecycle](https://tse1.mm.bing.net/th/id/OIP.jAViMR_YHf5dMVmhrpVKLAHaGp?pid=Api)

---

### Further Reading

- [7 Reasons to Outlaw React’s Functional Components](https://medium.com/%40housecor/7-reasons-to-outlaw-reacts-functional-components-ff5b5ae09b7c)
- [React Hooks vs. Classes: The Ultimate Comparison](https://www.bitovi.com/blog/react-hooks-vs-classes-the-ultimate-comparison)
- [Everything You Thought You Knew About React Functional Components Is Wrong](https://medium.com/codex/everything-you-thought-you-knew-about-react-functional-components-is-wrong-baf2dfc4f6f)
