import { z } from "astro:schema";
import { defineAction } from "astro:actions";
import { contactRequestSchema } from "~/utils/contactRequestSchema";
import { addContactRequest } from "~/lib/sheets";

const projectTypeStrings: { [key in ContactRequest["projectType"]]: string } = {
  "idont-know": "I don't know",
  "mvp-in-a-box": "MVP in a Box",
  "web3-mvp-in-a-box": "Web3 MVP in a Box",
  "cto-as-a-service": "CTO as a Service",
};

export const server = {
  newContactRequest: defineAction({
    accept: "json",
    input: contactRequestSchema,
    handler: async (data) => {
      await addContactRequest({
        Name: data.name,
        Email: data.email,
        "Project Description": data.projectDescription,
        "Project Type": projectTypeStrings[data.projectType],
      });

      return data;
    },
  }),
};

export type ContactRequest = z.infer<typeof contactRequestSchema>;
