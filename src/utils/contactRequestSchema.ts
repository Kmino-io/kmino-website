import { z } from "astro/zod";

export const contactRequestSchema = z.object({
  name: z.string({ message: "Name is required" }),
  email: z.email("Invalid email address"),
  projectDescription: z.string({
    message: "Project description is required",
  }),
  projectType: z.enum(
    ["idont-know", "mvp-in-a-box", "web3-mvp-in-a-box", "cto-as-a-service"],
    {
      message: "Project type is required",
    },
  ),
});
