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
