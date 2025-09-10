import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

type TabProps = {
  active: number;
  setActive: (index: number) => void;
  tabs: string[];
  variant?: "primary" | "default";
};

const tabsStyles = tv({
  slots: {
    base: "flex w-fit items-center rounded-full p-1.5",
    button:
      "rounded-full px-8 py-2 text-lg font-medium transition-colors hover:cursor-pointer focus:outline-none",
  },
  variants: {
    color: {
      primary: {
        base: "bg-[#F7532E1A]",
      },
      default: {
        base: "bg-[#EDEEE8B2]",
      },
    },
  },
});

const activeButtonStyles = {
  default: "bg-black text-white",
  primary: "bg-primary text-white",
};

export function Tabs({
  active,
  setActive,
  tabs,
  variant = "default",
}: TabProps) {
  const { base, button } = tabsStyles({ color: variant });

  return (
    <div className={base()}>
      {tabs.map((label, idx) => (
        <button
          key={label}
          onClick={() => setActive(idx)}
          className={twMerge(
            button(),
            active === idx && activeButtonStyles[variant],
          )}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
