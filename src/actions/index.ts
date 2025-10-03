import { z } from "astro:schema";
import { defineAction } from "astro:actions";
import { contactRequestSchema } from "~/utils/contactRequestSchema";

export const server = {
  newContactRequest: defineAction({
    accept: "form",
    input: contactRequestSchema,
    handler: async (data) => {
      return data;
    },
  }),
};

export type ContactRequest = z.infer<typeof contactRequestSchema>;
