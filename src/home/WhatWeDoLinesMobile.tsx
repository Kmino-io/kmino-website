import { motion } from "framer-motion";

const paths = [
  "M513.5 269.5L2.5 612.5H554.5M513.5 269.5L874.25 483.5M513.5 269.5L655.5 185.265",
  "M324 642L324 310",
  "M428 186L325 1.00027",
  "M70.5 185.5H663",
  "M72 351L1233 351",
];

export function WhatWeDoLinesMobile() {
  return (
    <svg
      width="1233"
      height="642"
      viewBox="0 0 1233 642"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="pointer-events-none absolute top-[500px] -left-28 -z-10 md:hidden"
    >
      {paths.map((d, i) => (
        <motion.path
          key={i}
          d={d}
          stroke="black"
          strokeOpacity="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: i * 0.2,
          }}
        />
      ))}
      {/*<path d= stroke="black" stroke-opacity="0.5" />*/}
    </svg>
  );
}
