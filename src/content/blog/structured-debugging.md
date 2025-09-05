---
title: "FIXME title"
description: "FIXMELearn how to boost coding productivity with AI tools. Practical tips for developers on using AI for debugging, documentation, and faster software development."
pubDate: 2025-09-15
image:
  url: FIXMEhttps://images.unsplash.com/photo-1633596683562-4a47eb4983c5?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
  alt: FIXME
tags: [FIXMEAI, Productivity, Software Engineering, Startup]
author: "bruno"
---

# FIXME title

Today we'll revisit a topic discussed about a month ago, regarding using AI to speed up development work effectively. This time, however, instead of covering more basic use-cases, we'll get into specifics on real examples we recently experienced on Kmino, and what lessons we can take out of it.

FIXME another paragraph to connect the narrative

# Setting the Stage

Both problems I'll divise here are similar, performance bottlenecks on a web application that rely on a frontend, data served by a PHP backend, a few microservices surrouding the app, such as services monitoring wallet activites on the blockchain, smart contract events, and so on, and a few smart contracts we interact directly from the client-side. 

Nothing out of the ordinary architecture-wise for a Web3 application, except for AppSync, an AWS managed service used as a 'data management' layer. It acts as the middle-man between the frontend and backend data sources (in this case, a NoSQL database, DynamoDB), exposing a GraphQL API to query and retrieve the data.

## Problem 1

The first issue was related to a noticeable delay when switching pages inside the app. These different features rely on different backend routes, and we couldn't enable the user to interact with the pages until they have loaded completely, and even across a single session, these loading times were getting sometimes to 1 or 2 seconds where we block the UI behind a loading modal. Although the time was not expressive isolated, as our typical user switches across these pages multiple times on the same session, these add up and become quite annoying.

## Problem 2

The second issue was related to the loading times on specific data on a specific feature, a chat. Both when accessing the chat pages as well as when we try to load a chat history, the messages' info, this time coming from DynamoDB were taking a long time to be received, thus leaving the user stuck for quite a while before they could proceed with their doing.

## The Process

On both cases, the flow was the following:

- 1) The problem was described on a prompt to a local AI Agent responsible for creating a GitHub issue explaining the problem, the success criteria, and some more boiler plate info
- 2) A second GitHub Copilot agent, having access to the GitHub issue, the entire codebase relevant for the problem, and our general instructions (see below) would go about solving the issue and opening a PR for evaluation
- 3) A third Copilot agent would review the PR
- 4) This PR would be assigned to a senior engineer on our team that would assess the solution and drive it for completion is necessary

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



- On both cases, the initial solution broke a few pages.
  - On the first case, we could iterate, the agent was able to fix and, after a few alterations on the code by a more senior developer, we were able to merge. The solution was simple: we started caching info in a same session. The initial solution was caching way too frequently, and that was braking everything. Once we fine-tuned this, it worked like a charm, and we reduced up to 7s loading times to ms marks.
  - On the second case, it was a disaster. Not only the PR broke stuff, but the solution was verbose and even after a few iterations, we decided to just close the PR, and assign the task to a human developer. with understanding of the problem, and using the solution proposed by the agent as a starting point, he was able to code a solution. From the PR's description, there were also massive performance improvements, but at the end those were mostly made up, and the improvement itself was not significant.

- Why different results where the problems were similar?
  - hard to say exactly, but most likely because of how common the problems were. caching information from standard api endpoints is a fairly common problem on web applications, reviewing implementation of appSync routes from the Amplify stack is a more rarer problem.
  - which one you think the model had more examples for training?

  - additionally, the former required more context, and more structured thinking. the model performs great, dont get the wrong, but giving the nature of the problem, perhaps we should have broken it down further, giving more context, better instructions and so on.

- finally, talk about importance of structured thinking when debugging performance problems, mention luxy's case for the images and close it out  about adapting this process but using ai. perhaps, if a problem is too complex, we should iterate with ai first? ask to test stuff, measure specific problems, add console logs everywhere. get human intervention early on, before delegating to an agent to do all the work.

interesting times for sure, using the tool the right way there is a lot of leverage, and this is what we are constantly learning to do better at kmino.




- call back to prompting ai agents
https://github.com/SuperDappAI/superdapp-web/blob/dev/.github/copilot-instructions.md
- closed pr, 70% faster loading https://github.com/SuperDappAI/superdapp-web/pull/2160, accepted pr instead https://github.com/SuperDappAI/superdapp-web/pull/2172
- accepted pr, caching info from routes https://github.com/SuperDappAI/superdapp-web/pull/2157
- 