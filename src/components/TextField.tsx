import { Input, type InputProps } from "@heroui/react";
import { twMerge } from "tailwind-merge";
import { useFieldContext } from "~/lib/form.ts";

type TextFieldProps = {
  mode: "self" | "modal";
} & InputProps;

export function TextField({ mode, ...props }: TextFieldProps) {
  const field = useFieldContext<string>();

  return (
    <Input
      labelPlacement="outside-top"
      size="lg"
      variant="faded"
      radius="sm"
      classNames={{
        inputWrapper: twMerge(
          "border-1",
          mode === "self" && "bg-black border-white/30",
        ),
        label: twMerge(
          "text-left font-semibold",
          mode === "self" && "text-white",
        ),
        errorMessage: "text-left",
      }}
      value={field.state.value ?? ""}
      onValueChange={(value) => field.setValue(value)}
      {...props}
    />
  );
}
