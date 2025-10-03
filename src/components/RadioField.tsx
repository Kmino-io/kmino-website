import { twMerge } from "tailwind-merge";
import { Radio, RadioGroup, type RadioGroupProps } from "@heroui/react";
import { useFieldContext } from "~/lib/form.ts";

type RadioFieldProps = {
  mode: "self" | "modal";
  options?: { label: string; value: string }[];
} & RadioGroupProps;

export function RadioField({ mode, options, ...props }: RadioFieldProps) {
  const field = useFieldContext<string>();

  return (
    <RadioGroup
      classNames={{
        label: twMerge(
          "text-black mb-2 text-left font-semibold",
          mode === "self" && "text-white",
        ),
        errorMessage: "text-left",
      }}
      value={field.state.value}
      onValueChange={(value) => field.setValue(value)}
      {...props}
    >
      {options?.map((option) => (
        <Radio
          key={option.value}
          value={option.value}
          classNames={{
            base: "gap-2",
            label: mode === "self" ? "text-white" : "text-black",
          }}
        >
          {option.label}
        </Radio>
      ))}
    </RadioGroup>
  );
}
