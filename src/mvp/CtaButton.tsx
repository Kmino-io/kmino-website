import type { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { tv } from "tailwind-variants";
import { ArrowRight } from "iconsax-reactjs";

interface Props
  extends PropsWithChildren,
    ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "default" | "inverted" | "outline";
  className?: string;
}

const cta = tv({
  slots: {
    base: "group hover:cursor-pointer relative flex w-fit items-center gap-3 rounded-full p-1 pe-3 transition-colors duration-300",
    bg: "rounded-full p-2 after:absolute after:top-1/2 after:left-2.5 after:z-10 after:h-[32px] after:w-0 after:-translate-y-1/2 after:rounded-full after:transition-all after:duration-300 after:content-[''] group-hover:after:w-[calc(100%-14px)]",
  },
  variants: {
    color: {
      default: {
        base: "bg-white text-black hover:text-white",
        bg: "bg-primary after:bg-primary",
      },
      inverted: {
        base: "bg-primary text-black hover:text-black",
        bg: "bg-white after:bg-white",
      },
      outline: {
        base: "border border-white text-white",
        bg: "bg-primary",
      },
    },
  },
});

export default function CtaButton({
  color = "default",
  children,
  className,
  ...props
}: Props) {
  const { base, bg } = cta({ color });

  return (
    <button className={base({ className })} {...props}>
      <span className={bg()}>
        <ArrowRight size={16} className="relative z-50" />
      </span>
      <div className="z-20 transition-all duration-300">{children}</div>
    </button>
  );
}
