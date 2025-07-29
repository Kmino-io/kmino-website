import { motion } from "framer-motion";

export function HeroLine() {
  return (
    <motion.svg
      width="100%"
      height="517"
      preserveAspectRatio="none"
      viewBox="0 0 1440 517"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute bottom-[160px]"
    >
      <motion.path
        d="M-46.5 339L49.5 350.5L111.5 472H1009L1490.5 33"
        stroke="#E64A27"
        strokeWidth="89"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
    </motion.svg>
  );
}
