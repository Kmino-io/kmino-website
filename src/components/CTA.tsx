import { ArrowRight } from "iconsax-reactjs";
import type { PropsWithChildren } from "react";
import { tv } from "tailwind-variants";

interface Props extends PropsWithChildren {
  href: string;
  color?: "default" | "inverted" | "outline";
  self?: boolean;
  className?: string;
}

const cta = tv({
  slots: {
    base: "group relative flex w-fit items-center gap-3 rounded-full p-1 pe-6 transition-colors duration-300",
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

export default function CTA({
  href,
  color = "default",
  self,
  children,
  className,
}: Props) {
  const { base, bg } = cta({ color });

  return (
    <a
      className={base({ className })}
      href={href}
      target={self ? "_self" : "_blank"}
      rel="noopener noreferrer"
    >
      <span className={bg()}>
        <ArrowRight size={16} className="relative z-50" />
      </span>

      <div className="z-20 transition-all duration-300">{children}</div>
    </a>
  );
}
