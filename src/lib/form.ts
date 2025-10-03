import { createFormHook, createFormHookContexts } from "@tanstack/react-form";
import { TextField } from "~/components/TextField.tsx";
import { RadioField } from "~/components/RadioField.tsx";
import { SubmitButton } from "~/components/SubmitButton";

export const { fieldContext, formContext, useFieldContext, useFormContext } =
  createFormHookContexts();

export const { useAppForm } = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: {
    TextField,
    RadioField,
  },
  formComponents: {
    SubmitButton,
  },
});
