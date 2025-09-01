import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

type Props = {
  title: string;
  description: string;
  fullDescription: string;
  isExpanded: boolean;
  onExpand: () => void;
};

export function Card({
  description,
  title,
  fullDescription,
  isExpanded,
  onExpand,
}: Props) {
  return (
    <motion.button
      onClick={onExpand}
      aria-expanded={isExpanded}
      tabIndex={0}
      type="button"
      className={twMerge(
        "hover:border-primary group flex h-fit w-full flex-col border border-black bg-white px-6 py-8 text-left leading-7 transition-colors duration-300 hover:cursor-pointer focus:outline-none",
        isExpanded && "bg-primary border-transparent text-white",
      )}
      layout
      transition={{ layout: { duration: 0.4, ease: "easeInOut" } }}
    >
      <h3 className="mb-6 text-[22px] font-semibold">{title}</h3>

      <p className="text-secondary text-[22px]">{description}</p>

      <motion.div
        style={{ overflow: "hidden" }}
        animate={{
          height: isExpanded ? "auto" : 0,
          opacity: isExpanded ? 1 : 0,
          marginTop: isExpanded ? 24 : 0,
        }}
        initial={false}
        transition={{
          height: { duration: 0.4, ease: "easeInOut" },
          opacity: { duration: 0.3, ease: "easeInOut" },
        }}
        layout
      >
        <div
          className="text-secondary text-[22px]"
          style={{
            paddingTop: isExpanded ? 0 : 0,
            paddingBottom: isExpanded ? 0 : 0,
          }}
        >
          {fullDescription}
        </div>
      </motion.div>

      <div className="mt-4 flex w-full items-center justify-between text-[22px] underline hover:cursor-pointer">
        <span className={isExpanded ? "opacity-0" : ""}>Learn more</span>
        <span
          className={twMerge(
            "group-hover:bg-primary flex h-[48px] w-[48px] items-center justify-center rounded-full bg-gray-100 transition-colors duration-300",
            isExpanded && "text-black group-hover:bg-white",
          )}
        >
          <Icon icon={isExpanded ? "ri:subtract-fill" : "ri:add-fill"} />
        </span>
      </div>
    </motion.button>
  );
}
