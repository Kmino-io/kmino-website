import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  from: "left" | "right" | "bottom" | "top";
}

const OFFSET_MAP = {
  left: { x: -200, y: 0 },
  right: { x: 200, y: 0 },
  top: { x: 0, y: -100 },
  bottom: { x: 0, y: 100 },
};

export function Slide({ from, children }: Props) {
  const offset = OFFSET_MAP[from];

  return (
    <motion.div
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ position: "relative" }}
    >
      {children}
    </motion.div>
  );
}
