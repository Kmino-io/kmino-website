---
title: "An Opinionated Approach to JavaScript & TypeScript Development"
description: "Why we favor OOP over purely functional code in JS/TS — and how inheritance, typing, and JSDoc make APIs and SDKs scalable, maintainable, and future-proof."
pubDate: 2025-09-01
image:
  url: https://images.unsplash.com/photo-1644035656974-9f979761e6a1?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
  alt: JavaScript & TypeScript Craftsmanship
tags: [JavaScript, TypeScript, Software Architecture, SDKs, API Design]
author: "claudio"
---

# An Opinionated Approach to JavaScript & TypeScript Development

Welcome to Kmino: this time we talk code 🤓!

To share a bit of our internal culture and the way we approach software, we decided to pick a slightly polemic topic: **OOP vs Functional Programming**. Along the way, we’ll also touch on how to use **IntelliSense** in your favor, and why good typing matters so much for developers consuming your SDKs or working inside your codebase.

- Spoiler #1: never type objects as `any`. It’s 2025, we can do better.  
- Spoiler #2: if you can, always go TypeScript. If not, at least use **JSDoc + a solid linter pipeline**.

We’ve worked with multiple languages and frameworks, but since JS/TS dominates most modern stacks, that’s where we’ll focus here.

And for those of you in a hurry, here’s the TL;DR of what’s ahead:

1. **JS/TS offers multiple ways to structure code.**
2. **We’ve seen both functional-first and OOP-first codebases at scale.**
3. **A disciplined OOP approach creates APIs and SDKs that last. You'll have less refactor pain, easier onboarding, fewer bugs.**

---

## OOP vs Functional in JS/TS

I won’t go as far as saying the React team openly regrets the shift to functional components, but even React veterans admit the move brought some baggage. Hooks solved real problems, but they also introduced new ones: **memory leaks, stale closures, harder-to-read lifecycles, and business logic that’s less intuitive at first glance**.

A good example is a post titled [_7 Reasons to Outlaw React’s Functional Components_](https://medium.com/%40housecor/7-reasons-to-outlaw-reacts-functional-components-ff5b5ae09b7c), which argues that class components remain simpler and more predictable, especially for stateful logic and lifecycle control.

Now, don’t get me wrong. I love functional programming. Pure functions, static utilities, helpers you can reuse everywhere? Great. But when you’re building something complex—SDKs, APIs, or apps with a lot of moving parts—**OOP shines**. With encapsulation, inheritance, interfaces, and protected/private members, you keep logic clean, business concepts clear, and onboarding easier for new devs.

At Kmino, we’ve seen this play out in real projects. Take [Pali Wallet](https://paliwallet.com), one of our oldest products. Our first attempt leaned hard into React’s functional style. The result? Buggy code, constant state issues, and several user complaints a week. After refactoring to class-based modules the `EVMManager`, `UTXOManager`, and so on—bugs dropped dramatically. Complaints went from weekly emails to one every few months. Encapsulation and clear business logic gave developers a map instead of a maze.

So, here’s our stance:

- Use **functional** for pure logic, stateless helpers, and utilities.
- Use **OOP** for long-lived, complex business logic where clarity and structure matter most.

In future posts we’ll dig deeper into things like `extends` vs `implements`, protected vs private, and how to mix OOP and functional styles when it actually makes sense.

Until then, if this resonated, drop us a line at our [LinkedIn](https://www.linkedin.com/company/kminotech/) with what you’d like us to cover next.

---

### A Visual Note on Lifecycles

Here’s a simple diagram contrasting the “clean” lifecycle flow of a class component with the more complex tangle of multiple hooks in a functional setup:

![Good vs Bad Lifecycle](https://tse1.mm.bing.net/th/id/OIP.jAViMR_YHf5dMVmhrpVKLAHaGp?pid=Api)

---

### Further Reading

- [7 Reasons to Outlaw React’s Functional Components](https://medium.com/%40housecor/7-reasons-to-outlaw-reacts-functional-components-ff5b5ae09b7c)
- [React Hooks vs. Classes: The Ultimate Comparison](https://www.bitovi.com/blog/react-hooks-vs-classes-the-ultimate-comparison)
- [Everything You Thought You Knew About React Functional Components Is Wrong](https://medium.com/codex/everything-you-thought-you-knew-about-react-functional-components-is-wrong-baf2dfc4f6f)

## JSDoc & TypeScript: Scaling APIs & SDKs

So we can forget to talk about the typing system which can really empower your class usage. At Kmino, we believe that **syntax sugar and IntelliSense aren’t just “nice-to-haves.”** They create a **navigation system** you can trust making your methods, classes, and objects easier to reuse with purpose, and reducing the need to repeatedly check docs or guess what things do.

Think of it this way: in the complex world of databases, a simple piece of metadata like an index can transform performance. Similarly, **TypeScript and JSDoc function as metadata for your code**. They don’t change runtime behavior, but they significantly enhance how you, your automation, and even AI tools understand, navigate, and build robust systems.

### Practical Benefits

- **Autocomplete:** Write code faster and more accurately.
- **Inline docs:** Your IDE becomes the documentation.
- **SDK usability:** Your users don’t guess, they get guardrails and clarity.

### Generics & Templates in Action

With **generics**, you create abstractions that are both reusable and type-safe:

```ts
class Dog<TBreed> {
  constructor(public breed: TBreed) {}

  bark(): void {
    console.log("Woof!");
  }
  eat(food: string): void {
    console.log(`${this.breed} eats ${food}`);
  }
}

// Usage
const yorkie = new Dog<"Yorkshire">("Yorkshire");
const rottweiler = new Dog<"Rottweiler">("Rottweiler");
```

Each instance shares behavior (`bark`, `eat`) but carries breed-specific data like `furType`, `diseases`, or `energyLevel`, all handled safely thanks to typing.

### Real-World Impact

We’ve used these patterns in production SDKs and APIs, yielding:

- Cleaner code
- Easier onboarding
- Fewer refactors
- A more cost-effective future for our customers

In short: **clear typing = happy future developers.**

---

### Meta Easter Egg

![MetaMetalGreymon](https://tse3.mm.bing.net/th/id/OIP.lDe069Q6vjWxUDFO0wOCrgHaGl?pid=Api)
_MetaMetalGreymon, from the Japanese Carton Digimon (Digital Monsters), our favorite metaphor for metadata 🦖_

---

### Further Reading

- [TypeScript Handbook: Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html) the Official docs on building reusable abstractions
- [JSDoc Official Guide](https://jsdoc.app/about-getting-started.html)the basics of documenting JS projects properly
- [TypeScript vs JSDoc: Which One Should You Use?](https://blog.logrocket.com/typescript-vs-jsdoc/) the great breakdown of trade-offs

## Closing Thoughts

That’s all for today, folks! We hope this gave you a glimpse into how we think and build at Kmino, from the paradigms of **OOP vs FP (Functional Programming)** to the “little extras” like **JSDoc and TypeScript** that turn code into a more reliable, business-aligned system.

Our main takeaway is simple: **both paradigms have value**, but when dealing with real-world complexity we tend to stick with classes. Even if they add a bit of overhead or feel less reusable at the method level, the payoff in lifecycle clarity, memory management, abstraction, and alignment with business logic is worth it every single time.

And remember: You can supercharge those foundations with metadata like **JSDoc or TypeScript**, which improve navigation, usability, and developer happiness. We didn’t even dive into **TDD/BDD methodologies**, but that’s a rabbit hole we’ll leave for another day. 

If you’re still hungry for more, here’s a teaser: **we’re cooking a new open-source repo for blockchain data indexing.** This has been battle-tested in an NFT marketplace project, and we’ll share how these concepts helped us design a fast, robust, and elegant codebase. Outperforming general-purpose indexers and subgraph solutions. Stay tuned for that post!

Thanks for reading this far and see you next week! 🚀
