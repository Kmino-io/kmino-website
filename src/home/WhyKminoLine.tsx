import { motion } from "framer-motion";

export function WhyKminoLine() {
  return (
    <motion.svg
      width="100%"
      height="497"
      preserveAspectRatio="none"
      viewBox="0 0 1440 497"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-[75px] left-0 z-[-1] hidden lg:block"
    >
      <motion.path
        d="M-24 452.5H667L739 45H1461"
        stroke="#EDEEE8"
        strokeWidth="89"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
      />
    </motion.svg>
  );
}
