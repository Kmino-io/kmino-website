import { motion } from "framer-motion";

type Props = {
  className?: string;
};

export function HowWeHelpLine({ className }: Props) {
  return (
    <motion.svg
      width="997"
      height="696"
      viewBox="0 0 997 696"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <motion.path
        d="M997 45H69.2147L456.104 396.5V651H-144"
        stroke="#EDEEE8"
        strokeWidth="89"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
    </motion.svg>
  );
}
