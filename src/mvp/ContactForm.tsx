import { Button, Input, Radio, RadioGroup } from "@heroui/react";
import CtaButton from "./CtaButton";
import { twMerge } from "tailwind-merge";

type ContactFormProps = {
  onClose?: () => void;
  mode: "self" | "modal";
};

export function ContactForm({ onClose, mode = "modal" }: ContactFormProps) {
  return (
    <form className="flex w-full flex-1 flex-col gap-8">
      <Input
        label="Name"
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
        }}
      />

      <Input
        label="Email"
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
        }}
      />

      <Input
        label="What's your project about?"
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
        }}
      />

      <RadioGroup
        label="Select the product you're interested in:"
        classNames={{
          label: twMerge(
            "text-black mb-2 text-left font-semibold",
            mode === "self" && "text-white",
          ),
        }}
      >
        <Radio
          value="buenos-aires"
          classNames={{
            base: "gap-2",
            label: mode === "self" ? "text-white" : "text-black",
          }}
        >
          I don't know what I'm looking for yet
        </Radio>

        <Radio
          value="sydney"
          classNames={{
            base: "gap-2",
            label: mode === "self" ? "text-white" : "text-black",
          }}
        >
          MVP in a Box
        </Radio>

        <Radio
          value="san-francisco"
          classNames={{
            base: "gap-2",
            label: mode === "self" ? "text-white" : "text-black",
          }}
        >
          Web3 MVP in a Box
        </Radio>
      </RadioGroup>

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

        <CtaButton
          color="inverted"
          className={mode === "modal" ? "w-full" : ""}
        >
          Book my free call
        </CtaButton>
      </div>
    </form>
  );
}
