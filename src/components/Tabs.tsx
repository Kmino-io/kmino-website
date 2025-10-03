import { Tabs as HeroTab, Tab } from "@heroui/react";

type TabProps = {
  active: number;
  setActive: (index: number) => void;
  tabs: string[];
  variant?: "primary" | "default";
};

export function Tabs({
  active,
  setActive,
  tabs,
  variant = "default",
}: TabProps) {
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
