import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";
import { Tabs as HeroTab, Tab } from "@heroui/react";
import Hero from "../../hero";

type TabProps = {
  active: number;
  setActive: (index: number) => void;
  tabs: string[];
  variant?: "primary" | "default";
};

const tabsStyles = tv({
  slots: {
    base: "flex w-fit max-w-full items-center rounded-full p-1.5 overflow-x-auto whitespace-nowrap flex-nowrap scrollbar-hide",
    button:
      // Add min-w and shrink-0 so buttons don't shrink and stay horizontal
      "rounded-full px-8 py-2 text-lg font-medium transition-colors hover:cursor-pointer focus:outline-none min-w-[120px] shrink-0",
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
  primary: "bg-primary h-full text-white",
};

// Optional: Hide scrollbar for Chrome/Safari/Edge
const scrollbarHideStyle = `
  .scrollbar-hide::-webkit-scrollbar { display: none; }
  .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
`;

export function Tabs({
  active,
  setActive,
  tabs,
  variant = "default",
}: TabProps) {
  const { base, button } = tabsStyles({ color: variant });

  return (
    <>
      <HeroTab
        size="lg"
        radius="full"
        selectedKey={tabs[active]}
        onSelectionChange={(key) => {
          const index = tabs.indexOf(key as string);

          if (index !== -1) setActive(index);
        }}
        classNames={{
          base: "max-w-full",
          tabList:
            variant === "primary"
              ? "p-1.5 bg-[#F7532E1A]"
              : "bg-[#EDEEE8B2] p-1.5",
          tab: "text-lg px-8 py-2 font-medium h-fit",
          tabContent:
            variant === "primary"
              ? "group-data-[selected=true]:text-white"
              : "",
          cursor: variant === "primary" ? "bg-primary text-white" : "bg-black",
        }}
      >
        {tabs.map((label) => (
          <Tab key={label} title={label} />
        ))}
      </HeroTab>

      {/*<style>{scrollbarHideStyle}</style>
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
      </div>*/}
    </>
  );
}
