import { z } from "astro:schema";
import { defineAction } from "astro:actions";
import { contactRequestSchema } from "~/utils/contactRequestSchema";
import { addContactRequest } from "~/lib/sheets";
import { Resend } from "resend";

const projectTypeStrings: { [key in ContactRequest["projectType"]]: string } = {
  "idont-know": "I don't know",
  "mvp-in-a-box": "MVP in a Box",
  "web3-mvp-in-a-box": "Web3 MVP in a Box",
  "cto-as-a-service": "CTO as a Service",
};

export const server = {
  flowbarSupport: defineAction({
    accept: "form",
    input: z.object({
      name: z.string().min(1),
      email: z.string().email(),
      message: z.string().min(1),
    }),
    handler: async ({ name, email, message }) => {
      const resend = new Resend(import.meta.env.RESEND_API_KEY);
      const { error } = await resend.emails.send({
        from: "Flowbar Support <contact@kmino.io>",
        to: ["david@kmino.io"],
        replyTo: email,
        subject: `Flowbar support request from ${name}`,
        html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message.replace(/\n/g, "<br>")}</p>`,
      });
      if (error) throw new Error(error.message);
      return { success: true };
    },
  }),

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
