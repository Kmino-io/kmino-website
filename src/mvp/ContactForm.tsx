import { addToast, Button, ToastProvider } from "@heroui/react";
import { useAppForm } from "~/lib/form.ts";
import { z } from "astro:schema";
import { actions } from "astro:actions";
import type { ContactRequest } from "~/actions";
import { useMemo } from "react";

type ContactFormProps = {
  onClose?: () => void;
  mode: "self" | "modal";
};

export function ContactForm({ onClose, mode = "modal" }: ContactFormProps) {
  const pathname = useMemo(() => window.location.pathname, []);

  const form = useAppForm({
    defaultValues: {
      name: "",
      email: "",
      description: "",
      product: pathname.startsWith("/cto") ? "cto-as-a-service" : "",
    },
    async onSubmit({ value, formApi }) {
      try {
        await actions.newContactRequest({
          name: value.name,
          email: value.email,
          projectDescription: value.description,
          projectType: value.product as ContactRequest["projectType"],
        });

        window.open("https://calendar.app.google/bptKpG7DXXLZve3r5", "_blank");

        addToast({
          title: "Success",
          description: "Your message has been sent successfully.",
          color: "success",
          shouldShowTimeoutProgress: true,
          hideCloseButton: true,
          timeout: 3000,
          classNames: {
            title: "text-left",
          },
        });

        formApi.reset();
      } catch (e) {
        addToast({
          title: "Error",
          description: "An error occurred while sending your message.",
          color: "danger",
        });
      }
    },
  });

  return (
    <form.AppForm>
      {mode === "self" && <ToastProvider />}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
        className="flex w-full flex-1 flex-col gap-8"
      >
        <form.AppField
          name="name"
          validators={{
            onChange: z.string().min(1, "Name is required"),
          }}
          children={(field) => (
            <field.TextField
              mode={mode}
              label="Name"
              name="name"
              isInvalid={!!field.state.meta.errors?.length}
              errorMessage={field.state.meta.errors?.[0]?.message}
            />
          )}
        />

        <form.AppField
          name="email"
          validators={{
            onChange: z
              .string()
              .min(1, "Email is required")
              .email("Invalid email"),
          }}
          children={(field) => (
            <field.TextField
              mode={mode}
              label="Email"
              name="email"
              type="email"
              isInvalid={!!field.state.meta.errors?.length}
              errorMessage={field.state.meta.errors?.[0]?.message}
            />
          )}
        />

        <form.AppField
          name="description"
          validators={{
            onChange: z.string().min(1, "Project description is required"),
          }}
          children={(field) => (
            <field.TextField
              mode={mode}
              label="What's your project about?"
              name="description"
              isInvalid={!!field.state.meta.errors?.length}
              errorMessage={field.state.meta.errors?.[0]?.message}
            />
          )}
        />

        {!pathname.startsWith("/cto") && (
          <form.AppField
            name="product"
            validators={{
              onChange: z.enum(
                [
                  "idont-know",
                  "mvp-in-a-box",
                  "web3-mvp-in-a-box",
                  "cto-as-a-service",
                ],
                {
                  message: "Project type is required",
                },
              ),
            }}
            children={(field) => (
              <field.RadioField
                mode={mode}
                name="product"
                label="Select the product you're interested in:"
                options={[
                  { label: "I don't know yet", value: "idont-know" },
                  { label: "MVP in a Box", value: "mvp-in-a-box" },
                  { label: "Web3 MVP in a Box", value: "web3-mvp-in-a-box" },
                  ...(pathname.startsWith("/mvpcto")
                    ? [{ label: "CTO as a Service", value: "cto-as-a-service" }]
                    : []),
                ]}
                isInvalid={!!field.state.meta.errors?.length}
                errorMessage={field.state.meta.errors?.[0]?.message}
              />
            )}
          />
        )}

        <div className="flex flex-wrap justify-between gap-4 lg:flex-nowrap lg:gap-6">
          {onClose && (
            <Button
              color="default"
              fullWidth
              className="rounded-full border-1 text-lg"
              variant="bordered"
              onPress={onClose}
            >
              Close
            </Button>
          )}

          <form.SubmitButton label="Book my free call" mode={mode} />
        </div>
      </form>
    </form.AppForm>
  );
}
