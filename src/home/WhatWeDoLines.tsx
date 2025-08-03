import { motion } from "framer-motion";

const lines = [
  "M-37 34H1406L684.5 462M684.5 462L-37 890H1406L684.5 462Z",
  "M146 36V919.5",
  "M877.5 34L877 919.5",
  "M495.5 890V0.5",
  "M1226.5 890V0.5",
  "M145.5 38.5L-43 153.5",
  "M570.5 316L495.5 193",
  "M-35 378H1316",
  "M53.5 543H1404.5",
];

export function WhatWeDoLines() {
  return (
    <svg
      width="1440"
      height="920"
      className="absolute -bottom-[29px] left-[19px] max-[1414px]:hidden"
      viewBox="0 0 1440 920"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {lines.map((d, i) => (
        <motion.path
          key={i}
          d={d}
          stroke="black"
          strokeOpacity="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}

      <path d="M144.5 889V783L-33.5 889H144.5Z" fill="#EDEEE8" />
      <rect x="1227.5" y="379" width="213" height="163" fill="#EDEEE8" />
    </svg>
  );
}
