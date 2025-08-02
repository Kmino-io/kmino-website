import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function HeroLine() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 408);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile ? (
    <motion.svg
      width="497"
      height="154"
      viewBox="0 0 497 154"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute bottom-24 -left-20"
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
  ) : (
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
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
    </motion.svg>
  );
}
