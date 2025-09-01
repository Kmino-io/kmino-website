import type { InferEntrySchema, RenderedContent } from "astro:content";
import { twMerge } from "tailwind-merge";
import BlogCard from "./BlogCard";
import { Icon } from "@iconify/react";
import { useMemo, useState } from "react";

interface Props {
  posts: {
    id: string;
    body?: string;
    collection: "blog";
    data: InferEntrySchema<"blog">;
    rendered?: RenderedContent;
    filePath?: string;
  }[];
}

export function BlogExplorer({ posts }: Props) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = useMemo(() => {
    return posts.filter((post) =>
      post.data.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [posts, searchTerm]);

  return (
    <>
      <div className="container my-[60px] flex max-w-[1240px] flex-col items-center justify-between gap-6 lg:my-[100px] lg:flex-row">
        <h2 className="font-alt max-w-[500px] text-[22px] lg:text-[32px] xl:max-w-[733px]">
          Keep up with the latest trends, insights, and strategies for digital
          products.
        </h2>

        <form className="relative w-full flex-1">
          <span className="hidden">Search input</span>

          <label htmlFor="search-input" className="sr-only">
            Search blog posts
          </label>

          <input
            id="search-input"
            type="text"
            name="search"
            placeholder="Search for your interests"
            className="font-alt w-full rounded-full border-[1.5px] border-black/30 bg-black/5 px-6 py-3 text-sm outline-black hover:border-black/50"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            autoComplete="off"
          />

          <Icon
            icon="ri:search-2-line"
            className="absolute top-1/2 right-6 -translate-y-1/2"
          />
        </form>
      </div>

      <div
        className={twMerge(
          "container grid max-w-[1240px] gap-8 xl:gap-[100px]",
          posts.length > 2 && "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
        )}
      >
        {filteredPosts
          .sort((a, b) => {
            return (
              new Date(b.data.pubDate).getTime() -
              new Date(a.data.pubDate).getTime()
            );
          })
          .map((post) => {
            return <BlogCard key={post.id} post={post} />;
          })}

        {filteredPosts.length === 0 && (
          <div className="col-span-full text-center text-gray-500">
            No posts found matching your search.
          </div>
        )}
      </div>
    </>
  );
}
