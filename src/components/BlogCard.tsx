import type { InferEntrySchema, RenderedContent } from "astro:content";
import CTA from "./CTA";
import { format } from "date-fns";

interface Props {
  post: {
    id: string;
    body?: string;
    collection: "blog";
    data: InferEntrySchema<"blog">;
    rendered?: RenderedContent;
    filePath?: string;
  };
}

export default function BlogCard({ post }: Props) {
  return (
    <a href={`/blog/${post.id}`} className="group">
      <img
        src={post.data.image.url}
        alt={post.data.image.alt || "Blog post image"}
        className="h-52 w-full rounded-sm object-cover"
      />

      <div className="flex flex-col gap-3 py-6">
        <p>Posted on {format(post.data.pubDate, "MMMM dd, yyyy")}</p>

        <h2 className="max-lines-2 text-[25px] leading-[29px]">
          {post.data.title}
        </h2>

        <p className="max-lines-3 overflow-hidden text-[16px] leading-[1.6] font-normal text-ellipsis text-[#7A7A7A]">
          {post.data.description}
        </p>

        <CTA href={`/blog/${post.id}`} color="inverted" self>
          Read more
        </CTA>
      </div>
    </a>
  );
}
