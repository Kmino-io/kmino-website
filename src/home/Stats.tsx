import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

import kminologo from "../assets/kmino-logo.svg";
import pegaysLogo from "../assets/pegays-logo.svg";
import superdappLogo from "../assets/superdapp-logo.svg";
import syscoinLogo from "../assets/syscoin-logo.svg";

const stats = [
  {
    value: 10,
    decimals: 0,
    prefix: "",
    suffix: " years",
    label: "Founders building",
    logo: kminologo.src,
    logoAlt: "Kmino",
  },
  {
    value: 750,
    decimals: 0,
    prefix: "$",
    suffix: "M+",
    label: "TVL shipped at ATH",
    logo: syscoinLogo.src,
    logoAlt: "Syscoin",
  },
  {
    value: 240,
    decimals: 0,
    prefix: "",
    suffix: "k",
    label: "Users onboarded",
    logo: superdappLogo.src,
    logoAlt: "Superdapp",
  },
  {
    value: 1.5,
    decimals: 1,
    prefix: "$",
    suffix: "M+",
    label: "traded in a single week",
    logo: pegaysLogo.src,
    logoAlt: "Pegays",
  },
];

function formatStatValue(
  value: number,
  decimals: number,
  prefix: string,
  suffix: string,
) {
  return `${prefix}${new Intl.NumberFormat("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value)}${suffix}`;
}

function CountUpStat(props: {
  value: number;
  decimals: number;
  prefix: string;
  suffix: string;
  isInView: boolean;
}) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!props.isInView) return;

    const duration = 1200;
    const start = performance.now();

    let frameId = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(props.value * eased);

      if (progress < 1) {
        frameId = window.requestAnimationFrame(tick);
      }
    };

    frameId = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [props.isInView, props.value]);

  const finalValue = props.isInView ? displayValue : 0;

  return (
    <span className="font-alt text-primary text-[34px] sm:text-[40px] lg:text-[48px]">
      {formatStatValue(finalValue, props.decimals, props.prefix, props.suffix)}
    </span>
  );
}

export function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.35 });

  return (
    <div ref={sectionRef} className="relative mt-[100px] lg:mt-[180px]">
      <svg
        className="block w-full translate-y-1"
        viewBox="0 0 1980 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{
          height: "clamp(80px, 10vw, 200px)",
        }}
      >
        <defs>
          <clipPath id="footerClip">
            <path d="M0 200V171.573C0 164.924 0 161.6 0.975 158.449C1.84 155.655 3.27 152.969 5.21 150.479C7.4 147.673 10.48 145.217 16.62 140.306L136.26 44.668C143.24 39.089 146.73 36.299 150.9 34.299C154.6 32.525 158.68 31.213 162.97 30.417C167.81 29.518 172.99 29.518 183.36 29.518H374.72C378.92 29.518 381.03 29.518 383.1 29.677C384.95 29.818 386.78 30.053 388.58 30.38C390.6 30.749 392.58 31.272 396.53 32.32L594.53 84.849C602.49 86.961 606.47 88.017 610.56 88.444C614.2 88.823 617.89 88.834 621.52 88.478C625.62 88.075 629.62 87.042 637.62 84.976L832.24 34.696C839.67 32.774 843.39 31.814 847.21 31.4C850.6 31.034 854.04 30.986 857.44 31.26C861.28 31.569 865.04 32.427 872.57 34.143L1036.31 71.47C1042.96 72.986 1046.29 73.743 1049.68 74.07C1052.69 74.361 1055.74 74.401 1058.77 74.187C1062.17 73.946 1065.53 73.273 1072.24 71.929L1422.93 1.662C1426.03 1.04 1427.59 0.729 1429.16 0.511C1430.56 0.317 1431.98 0.177 1433.4 0.094C1435 0 1436.6 0 1439.81 0H1796.52C1799.89 0 1801.57 0 1803.24 0.103C1804.72 0.194 1806.2 0.345 1807.66 0.557C1809.31 0.795 1810.92 1.134 1814.16 1.813L1934.87 27.14C1950.04 30.323 1957.63 31.914 1963.58 35.221C1968.71 38.074 1973.07 42.07 1975.72 46.357C1978.8 51.326 1979.2 56.887 1980 68.007V200H0Z"></path>
          </clipPath>
        </defs>
        <path
          d="M0 200V171.573C0 164.924 0 161.6 0.975 158.449C1.84 155.655 3.27 152.969 5.21 150.479C7.4 147.673 10.48 145.217 16.62 140.306L136.26 44.668C143.24 39.089 146.73 36.299 150.9 34.299C154.6 32.525 158.68 31.213 162.97 30.417C167.81 29.518 172.99 29.518 183.36 29.518H374.72C378.92 29.518 381.03 29.518 383.1 29.677C384.95 29.818 386.78 30.053 388.58 30.38C390.6 30.749 392.58 31.272 396.53 32.32L594.53 84.849C602.49 86.961 606.47 88.017 610.56 88.444C614.2 88.823 617.89 88.834 621.52 88.478C625.62 88.075 629.62 87.042 637.62 84.976L832.24 34.696C839.67 32.774 843.39 31.814 847.21 31.4C850.6 31.034 854.04 30.986 857.44 31.26C861.28 31.569 865.04 32.427 872.57 34.143L1036.31 71.47C1042.96 72.986 1046.29 73.743 1049.68 74.07C1052.69 74.361 1055.74 74.401 1058.77 74.187C1062.17 73.946 1065.53 73.273 1072.24 71.929L1422.93 1.662C1426.03 1.04 1427.59 0.729 1429.16 0.511C1430.56 0.317 1431.98 0.177 1433.4 0.094C1435 0 1436.6 0 1439.81 0H1796.52C1799.89 0 1801.57 0 1803.24 0.103C1804.72 0.194 1806.2 0.345 1807.66 0.557C1809.31 0.795 1810.92 1.134 1814.16 1.813L1934.87 27.14C1950.04 30.323 1957.63 31.914 1963.58 35.221C1968.71 38.074 1973.07 42.07 1975.72 46.357C1978.8 51.326 1979.2 56.887 1980 68.007V200H0Z"
          fill="#F4F1D2"
        ></path>
      </svg>

      <div className="relative bg-[#F4F1D2] py-10">
        <div className="-mt-4 grid grid-cols-1 gap-x-8 gap-y-12 px-6 pb-12 sm:px-10 md:-mt-6 md:grid-cols-4 md:gap-x-10 md:px-16 md:pb-16 lg:-mt-8 lg:px-[100px] lg:pb-[80px]">
          {stats.map((stat) => (
            <div
              key={`${stat.prefix}${stat.value}${stat.suffix}`}
              className="flex min-w-0 flex-col items-center gap-4 text-center md:gap-5 lg:min-w-[220px] lg:gap-6"
            >
              <CountUpStat {...stat} isInView={isInView} />
              <span className="text-[18px] leading-[1.2] sm:text-[20px] lg:text-[24px]">
                {stat.label}
              </span>
              <img
                src={stat.logo}
                alt={stat.logoAlt}
                width={36}
                height={36}
                className="h-8 w-8 lg:h-9 lg:w-9"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
