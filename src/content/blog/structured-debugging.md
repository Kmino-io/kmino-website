---
title: "Real Use Cases of Copilot in Debugging — and Why Structure Still Rocks"
description: "Two real debugging stories with Copilot, showing where it succeeded, where it failed, and why structured debugging still matters."
pubDate: 2025-09-15
image:
  url: https://images.unsplash.com/photo-1481414981591-5732874c7193?q=80&w=1746&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
  alt: Structure Debugging cover
tags: [Software Engineering, Stories, Startup, AI]
author: "bruno"
---

# Real Use Cases of Copilot in Debugging — and Why Structure Still Rocks

Today, we'll revisit a topic discussed about a [month ago](https://www.kmino.io/blog/ai-in-programming-basic), regarding the effective use of AI to speed up development work. This time, however, instead of covering more basic use cases, we'll delve into specifics based on real examples we recently experienced at Kmino, and what lessons we can draw from them.

# Setting the Stage

Both problems I'll devise here are similar: performance bottlenecks on a web application that relies on a frontend, data served by a backend, a few microservices surrounding the app, such as services monitoring wallet activities on the blockchain, smart contract events, and so on, and a few smart contracts we interact with directly from the client-side. 

Nothing out of the ordinary architecture-wise for a Web3 application, except for [AppSync](https://aws.amazon.com/appsync/), an AWS-managed service we use as a 'data management' layer. In our case, it sits between the frontend and DynamoDB, exposing a GraphQL API to query and retrieve the data.

## Problem #1

The first issue was related to a noticeable delay when switching pages inside the app. These different features rely on different backend routes, and we couldn't enable the user to interact with the pages until they have loaded completely. These loading times were getting sometimes to 1 or 2 seconds, where we block the UI behind a loading modal. While each delay wasn't huge individually, repeated page switches in a single session made the app feel sluggish.

## Problem #2

The second issue was related to the loading times for specific data on a specific feature, a chat. Chat-related data from DynamoDB was especially slow to load, both when opening chat pages and when fetching message history, leaving users stuck for several seconds before they could continue.

# The Process

In both cases, the flow was the following:

- 1) The problem was described on a prompt to a local AI Agent responsible for creating a GitHub issue explaining the problem, the success criteria, and some more boilerplate info.
- 2) A second GitHub Copilot agent, having access to the GitHub issue, the entire codebase relevant for the problem, and our general instructions (see below), would go about solving the issue and opening a PR for evaluation.
- 3) A third Copilot agent would review the PR.
- 4) This PR would be assigned to a senior engineer on our team who assess the solution and drive it for completion if necessary.

```md
SYSTEM INSTRUCTION: Act as a fully autonomous, detail-oriented AI developer for <project_name>. Always fully complete assigned tasks, end-to-end.

Guidelines Complete the task: Implement all required logic, tests, docs, error handling, and edge cases.

No over-engineering: Do not build beyond the stated requirements.

Respect existing code: Analyze current code before coding. Only change or refactor if strictly required for the assigned task. Never rewrite, optimize, or clean up unrelated code—unless you are specifically told to.

Minimize code churn: Preserve APIs, structure, and UX. Do not modify unrelated files or logic.

Self-audit: Verify all changes are production-ready, well-integrated, and isolated to the task.

Comments: Add comments only where logic or decisions are non-obvious.

Clarifications: If requirements are unclear, ask for clarification.
```

Our GitHub Copilot System instructions.

## The Model

The AI model used was Anthropic's [Claude Sonnet 4](https://www.anthropic.com/claude/sonnet), a large context window reasoning model. It's a powerful one, evolving from Sonnet 3.7 and, according to Anthropic, "_It offers strong performance in both planning and solving for complex coding tasks, making it an ideal choice to power end-to-end software development processes._", which fit our case: we need a large context window as the codebase is huge, and the model needs to be able to _plan_ a solution, as we're using it also for better breaking down the problem on the GitHub issue, not only execute commands and generate code.

# The Results

At first, both solutions looked promising. Both PRs had a really good description of what was made, and a comparison table showing the improvements, such as the one below.

> 🎯 Measured Results
>
> | Metric | Before | After | Improvement |
> |--------|---------|-------|-------------|
> | Initial Sync Data | All user data | Last 7 days + active rooms | **60%+ reduction** |
> | Chat List Load | 4-6 seconds | <2 seconds | **70% faster** |
> | First Messages | 3-4 seconds | <2 seconds | **50% faster** |
> | Active Subscriptions | 15-20 | <10 | **50% reduction** |

However, after the final iteration with an agent that reviewed the code, when the PRs were assigned to one of our (human) senior engineers, problems started to appear.

## The Results - Problem #1

The first thing we noticed was that the updates the Copilot agent did broke two features entirely. In one case, the `callsArray` computation inside a `useMemo` was incorrectly triggering route optimization hooks during render. Since hooks must only be called at the top level of React components (never inside lists, loops, or memoized computations), this violated the [Rules of Hooks](https://react.dev/reference/rules/rules-of-hooks) and caused runtime errors. In the other case, some hooks were also misused inside `useEffect`, which broke the component.

Both of these we were able to fix with iterations with the agent itself: we left comments specifying the issues on the PR, and prompted Copilot to address them. Those comments can include even screenshots from console logs, which made our lives much easier.

The solution proposed was straightforward: we introduced per-session caching for feature data. This caching was initially being too frequent, but after a few commits from our developer solving this and standardizing some other portions of the code, the PR was accepted and merged into our codebase, and we were able to reduce loading times from seconds to the milliseconds mark.

## The Results - Problem #2

The second PR, however, had deeper issues. In addition to breaking stuff, the solution was highly verbose. After a few iterations with Copilot, we ended up closing the PR and opening a separate one instead, getting only the relevant stuff out.

The original PR introduced several new features, among them a "Progressive Message Loader", a "Subscription Manager", an "Enhanced Auth Token Provider", and a "Performance Monitor". It also updated how we were handling `MessageEvent` synchronization across the board. It touched **10 files** and updated **3,307 lines of code**.

After reviewing the proposed solution and understanding the problem better, our engineer opened a new PR. It touched **2 files** and updated **41 lines of code**. The only thing we kept was a few filters added to the `MessageEvent` synchronization methods. For all the other features added, the performance improvements were not relevant. This was later accepted and merged, and we measured relevant performance improvements.

In both cases, it appears the model generated benchmark-like numbers for illustration, but they didn’t align with our actual measurements.

# The Aftermath

Why did two similar problems, solved with the same process, yield such different results?

It's hard to say exactly. When reviewing everything, one theory is that it is due to the nature of both problems. LLMs are trained with an immense amount of data (coding-wise, from Stack Overflow and other community-driven sources). Which of the problems described here do you think the model had more examples of during training? 

Problem #1 aligned well with common web performance fixes (caching), which the model likely had abundant training examples of. Problem #2 involved deeper architectural reasoning around AppSync and data flow, which seemed harder for the model to handle. Additionally, Problem #2 required more context and more structured thinking. 

The model performed great, don't get me wrong. And even if the solution was not merge-ready, it gave us an amazing starting point to get to the final version that went to production. Perhaps, if we had fed it more structured info, we could have gotten a better result, who knows?

Back in the day, performance bottlenecks were analyzed meticulously: multiple `console.log()` everywhere, hours spent going over the data pipeline, understanding how the functions behaved and what delay they could add, understanding multiple data sources and what the "typical" object looked like, and a lot of measurements everywhere. All of this before we could even get started thinking about a solution. Perhaps this structured debugging is something the current models lack for more complex applications. 

I'm sure we'll get there at some point, though.

These are interesting times for sure. Understanding how to better use these tools to solve the problems at hand gives the developer a lot of leverage on their day-to-day work, and it's something we are constantly learning to do better here at **Kmino** ;)

If you want to learn more, make sure to follow us on [LinkedIn](https://www.linkedin.com/company/kminotech/)!