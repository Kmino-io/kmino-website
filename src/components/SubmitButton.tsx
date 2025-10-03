import { useFormContext } from "~/lib/form";
import CtaButton from "~/mvp/CtaButton";

type Props = {
  label: string;
  mode?: "modal" | "self";
};

export function SubmitButton({ label, mode }: Props) {
  const form = useFormContext();

  return (
    <form.Subscribe selector={(state) => state.isSubmitting}>
      {(isSubmitting) => (
        <CtaButton
          type="submit"
          disabled={isSubmitting}
          className={mode === "modal" ? "w-full" : ""}
          color={mode === "modal" ? "inverted" : "default"}
        >
          {isSubmitting ? "Submitting..." : label}
        </CtaButton>
      )}
    </form.Subscribe>
  );
}
