import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const authors = defineCollection({
  loader: glob({ pattern: "**/[^_]*.json", base: "./src/content/authors" }),
  schema: z.object({
    name: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    jobDescription: z.string(),
    socials: z.array(
      z.object({
        title: z.string(),
        url: z.string(),
        icon: z.string(),
      }),
    ),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    tags: z.array(z.string()),
    author: z.string(),
  }),
});

export const collections = { blog, authors };
