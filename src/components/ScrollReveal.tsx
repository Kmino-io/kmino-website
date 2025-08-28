import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

type Props = {
  delay?: number;
} & PropsWithChildren;

export function ScrollReveal({ children, delay = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      viewport={{ once: false, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
