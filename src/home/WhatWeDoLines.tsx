import { motion } from "framer-motion";

const lines = [
  "M6.2605 33.5H1449.26L727.76 461.5M727.76 461.5L6.2605 889.5H1449.26L727.76 461.5Z",
  "M221.26 35.5V919",
  "M953.76 33.5L953.26 919",
  "M570.76 889.5V0",
  "M1301.76 889.5V0",
  "M188.76 38L0.260498 153",
  "M613.76 315.5L538.761 192.5",
  "M8.2605 377.5H1359.26",
  "M96.7605 542.5H1447.76",
];

export function WhatWeDoLines() {
  return (
    <svg
      width="1485"
      height="919"
      className="absolute bottom-[70px] left-[19px] max-[1414px]:hidden"
      viewBox="0 0 1485 919"
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

      <path d="M221.76 888.5V762.5L9.2605 888.5H221.76Z" fill="#EDEEE8" />
      <rect x="1303.26" y="378.5" width="181" height="163" fill="#EDEEE8" />
    </svg>
  );
}
