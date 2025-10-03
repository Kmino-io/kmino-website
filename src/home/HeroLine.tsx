import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export function HeroLine(props: { className?: string }) {
  return (
    <motion.svg
      width="100%"
      height="517"
      preserveAspectRatio="none"
      viewBox="0 0 1440 517"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={twMerge(
        "absolute bottom-[245px] hidden md:block",
        props.className,
      )}
    >
      <motion.path
        d="M-46.5 339L49.5 350.5L111.5 472H1009L1490.5 33"
        stroke="#E64A27"
        strokeWidth="89"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
    </motion.svg>
  );
}
