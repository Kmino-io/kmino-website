import { motion } from "framer-motion";

export function HeroLineMobile() {
  return (
    <motion.svg
      width="100%"
      height="154"
      viewBox="0 0 497 154"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute bottom-[365px] -left-10 w-[497px] min-[497px]:left-0 min-[497px]:w-full md:hidden"
    >
      <motion.path
        d="M4.5 31.1958L70.4883 39.1006L113.106 122.617H496.5"
        stroke="#E64A27"
        strokeWidth="61.1766"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
    </motion.svg>
  );
}
