import { motion, useScroll, useTransform } from "framer-motion";
import type { PropsWithChildren } from "react";
import { useRef } from "react";

interface Props extends PropsWithChildren {
  from: "left" | "right" | "bottom" | "top";
}

const OFFSET_MAP = {
  left: { x: [-200, 0], y: [0, 0] },
  right: { x: [200, 0], y: [0, 0] },
  top: { x: [0, 0], y: [-100, 0] },
  bottom: { x: [0, 0], y: [100, 0] },
};

export function Slide({ from, children }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "start 60%"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const x = useTransform(scrollYProgress, [0, 1], OFFSET_MAP[from].x);
  const y = useTransform(scrollYProgress, [0, 1], OFFSET_MAP[from].y);

  return (
    <motion.div
      ref={ref}
      style={{
        opacity,
        x,
        y,
      }}
    >
      {children}
    </motion.div>
  );
}
