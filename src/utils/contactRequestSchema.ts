import { z } from "astro:schema";

export const contactRequestSchema = z.object({
  name: z.string({ message: "Name is required" }),
  email: z
    .string({ message: "Email is required" })
    .email("Invalid email address"),
  projectDescription: z.string({
    message: "Project description is required",
  }),
  projectType: z.enum(["idont-know", "mvp-in-a-box", "web3-mvp-in-a-box"], {
    message: "Project type is required",
  }),
});
