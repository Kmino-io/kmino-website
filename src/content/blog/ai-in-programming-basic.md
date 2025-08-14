---
title: "AI in Programming: Practical Tips for Developers"
description: "Learn how to boost coding productivity with AI tools. Practical tips for developers on using AI for debugging, documentation, and faster software development."
pubDate: 2025-08-18
image:
  url: https://images.unsplash.com/photo-1633596683562-4a47eb4983c5?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
  alt: AI in Programming Cover
tags: [AI, Productivity, Software Engineering, Startup]
author: "bruno"
---

# AI in Programming: Practical Tips for Developers

Hello and welcome to the first Kmino blog post! 🎉

Kmino was born out of the desire to make Software Engineering right, ship real digital products that deliver tangible value to our customers, using the right tools, practices, and processes for each one.

We're just starting and, in the coming weeks, we have much to share related to Software Engineering, Product Management, AI, and entrepreneurship in general, so make sure to follow our [LinkedIn page](https://www.linkedin.com/company/kminotech/), where we'll share every time there is a new post out!

Today, for our inaugural post, I'll go over some basic tips on how to use AI to boost your coding productivity.

No need to have previous knowledge about it, we won't get into expensive deep-context models, just your average GPT model in the IDE of your choice, and focusing much more on the HOW than on the WHAT.

So without further ado, let's get to it!

# The Right Tool for the Right Job

While we don't get to AGI [Artificial General Intelligence](https://cloud.google.com/discover/what-is-artificial-general-intelligence), AI is just another tool in every developer's toolkit. A really powerful tool, yes. But a tool nonetheless.

That being the case, every developer, junior or not, should learn how to use it effectively, as they would with Gitflow, command line, or IDE shortcuts.

Now, being a way more flexible tool than the others I just mentioned, there are multiple ways to use it. Some will give you good results, some will give you great results. But some may end up giving us more headaches and a backlog of technical debt to solve.

And this is the first tip of the day: The best way to avoid this catastrophic result is to treat AI models as what they are nowadays: a tool, not a miraculous gift from the skies that will solve every single problem on your codebase at the snap of your fingers. Especially for basic models, don't expect it to rewrite your entire product in one go, but if you use it right, it can make all the difference in the world.

# Coding with AI 101: Self-Contained Tasks

If you're just starting now to include AI in your development workflow, the fastest way to extract value from it is to treat it as you would a less-experienced developer.

When onboarding a junior developer into an existing team, apart from the more institutional chores, the most common thing we do is to give them a set of self-contained tasks:

- Write unit tests for an API
- Solve a specific bug where we're missing simple data validation
- Add new API endpoints following examples
- Add some more boilerplate code

These are tasks that have a clear beginning and end, references on what to do in different places of the codebase, don't need extensive context of the business logic of your app, and are usually tasks that you could do yourself easily, if given enough time.

Even if we go back in time before the AI boom, IDEs that offered code completion already saved us a lot of time. You can think of using AI for repetitive tasks just like an autocompletion on steroids. It saves you time on repetitive tasks and also frees your brain's bandwidth for higher-value issues that need solving.

# Complex Problems with Your AI Buddy

Now that you're done with the 101, it's time to adventure further into what AI can do for you.

In the great book [The Pragmatic Programmer](https://www.amazon.com/Pragmatic-Programmer-journey-mastery-Anniversary/dp/0135957052), there is a story about a programmer who would carry a rubber duck around to help them debug their code. They would force themselves to explain the codebase out loud to the rubber duck, and this would help them better understand what was going on, what the issue was, and ultimately solve the problem.

This technique ended up being known as [Rubberducking](https://en.wikipedia.org/wiki/Rubber_duck_debugging), which is another way I personally like to use AI when coding. When faced with a difficult problem, I treat my AI companion almost as a pair programming buddy: exchanging ideas, asking it to explain code snippets to me, different functions, and how they interact with each other, and so on.

Leveraging its coding speed, I can ask it to create different testing scripts without breaking a sweat until we get to a solution that makes sense to the overall cohesiveness of the codebase, without adding any crazy overengineering to a solution that, most of the time, is simple to code but difficult to find.

![AI Pair Programming](https://images.unsplash.com/photo-1690946975156-ea10eb4aa051?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "AI Pair Programming")

## Notes on Advanced AI Models

Another powerful usage of AI is to do end-to-end changes of entire pieces of code. We may be talking about performance optimization, security improvements, or even legacy code refactoring.

AI can absolutely be used for that, and engineering teams extract a lot of value from it. However, depending on the codebase, you may hit a brick wall called the **context window**.

In short, the context window of an AI model, when we talk about software engineering, is the amount of code it can consider in its reasoning before suggesting a solution. Powerful models have longer context windows, but your average model does not. If you try to go down this route without a proper model, you'll see that the AI will provide solutions, but most of the time, they will *feel* right while going way over what you actually need.

We'll cover this in more detail in upcoming articles.

# Alternative Usages

There are two more basic applications I want to talk about before we call it a day.

The first one is something everyone working on an engineering team knows that delivers a lot of value, especially when we scale teams and products, but no one likes to do: **Documentation**.

Essential for maintainability, good documentation can make or break the speed of onboarding new team members and deliveries that rely on a legacy codebase and business logic knowledge.

This is something AI excels at, and with proper review (more on that later), can create a lot of value fast. A pro tip is to even use the AI-generated documentation to feed simpler AI models, thus not requiring a large context window: just a few files and good documentation.

The second is a less-talked-about topic: using AI as a **learning tool**. In the past, when you had a syntax doubt or weren't sure about how a language or framework dealt with a given problem, you would:

1. Check Stack Overflow
2. Talk to a more senior dev
3. Read the official documentation

All of these are great, but they meant leaving your coding environment, searching online, reading through multiple answers, finding the correct topic in the documentation, and so on. Once this was done, you were already out of the *zone*, and the momentum was lost.

Now you can do all of this without ever leaving your IDE. If you can reduce these small periods of looking stuff up online over a year, you will be miles in front of the competition, shipping faster, and becoming a better engineer.

# Closing Thoughts

## Prompting

As mentioned in the opening section, AI is a tool, and although I disagree that "prompting is an art", you do need to learn how to prompt correctly to extract the maximum value.

In the coding context, there are some simple instructions that you can add explicitly to your prompts that have made a lot of difference for me:

- *Don't overengineer any solutions*
- *Don't touch the files' structure without being explicitly asked to*
- *Don't change files outside of the requested scope*

If you're using coding agents, a more structured instruction file is even better. This will be used as a reference for the agent when doing whatever work is required. Here is [a great example of an instructions file](https://ampcode.com/AGENT.md) by Geoffrey Huntley from [Amp Code](https://ampcode.com).

## Reviewing

At the end of the day, AI models, especially the simpler ones, are great at predicting stuff. So the more complex the project is, for a simpler AI model, the greater the chance of it making mistakes.

Especially at these uncertain times, it's imperative that you have AI-generated code passing through proper and diligent code reviews.

[LinearB](https://linearb.io/) did a great [review of AI Code Reviewing Tools](https://linearb.io/resources/2025-ai-code-review-buyers-guide) (including their own) in 2025, including a solid framework definition that can be followed by anyone, and a benchmark on the most commonly used tools following this framework.

This is great if you're in a big corporation, but even if you're using tools to review AI and human-generated code, I strongly believe this should be just another extra step in your code reviewing process, and you still need a human engineer doing the final checks.

That is also true for whatever documentation you're creating with AI, as it may create topics and example instructions that *feel* right, but don't execute properly.

## Conclusion

And that's a wrap on today's article!

**tl;dr:**

- AI is a tool for the good software engineer, not an overpowered robot that can do it all. Use it with this in mind.
- If you're just starting to use AI in your coding workflow, consider the two most basic usages:
  - Give AI self-contained tasks to complete.
  - Treat AI as your pair programming buddy to help debug more complex issues.
- Pay attention to AI models' limitations, and use prompting wisely to work around them.
- Always review everything that is AI-generated to make sure not to be taken away by the hype of verbose and quickly generated code.

For more valuable insight, make sure to follow us on [LinkedIn](https://www.linkedin.com/company/kminotech/), and see you at the next one!