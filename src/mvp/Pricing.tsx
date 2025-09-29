import { Icon } from "@iconify/react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

// --- Data ---
const mvpItems = [
  "Requirements workshop (up to 2 hours)",
  "UI prototype in Figma (clickable, ready for user testing)",
  "Core backend + frontend MVP with pre-defined tech stack (React + Node.js)",
  "Deployment on the client's desired infrastructure",
  "Basic documentation & code handoff",
  "One feedback iteration (within scope)",
];

const mvpExcludes = [
  "Ongoing feature development after delivery",
  "Marketing website or branding design",
  "Complex integrations outside MVP scope (e.g., AI, blockchain, custom APIs)",
  "Ongoing support & hosting",
  "Native mobile app development for App Store / Play Store",
];

const web3Items = [
  "Requirements workshop (2 hours)",
  "UI prototype in Figma (clickable, ready for user testing)",
  "Smart contract + frontend integration with pre-defined stack",
  "Deployment on client's desired chain",
  "Basic documentation & code handoff",
  "One feedback iteration (within scope)",
];

const web3Excludes = [
  "Ongoing feature development after delivery",
  "Complex multi-chain integrations beyond core MVP",
  "Ongoing support & hosting",
  "Native mobile app development for App Store / Play Store",
];

type ExpandablePricingCardProps = {
  title: string;
  subtitle: string;
  price: string;
  oldPrice?: string;
  delivery: string;
  included: string[];
  excluded: string[];
  expanded: boolean;
  onExpand: () => void;
  description?: string;
};

function ExpandablePricingCard({
  title,
  subtitle,
  price,
  oldPrice,
  delivery,
  included,
  excluded,
  expanded,
  onExpand,
  description,
}: ExpandablePricingCardProps) {
  return (
    <button
      type="button"
      aria-expanded={expanded}
      onClick={onExpand}
      className={twMerge(
        "hover:border-primary group flex h-fit w-full flex-col border border-black bg-white px-6 py-8 text-left leading-7 transition-colors duration-300 hover:cursor-pointer focus:outline-none",
        expanded && "border-primary bg-[#EDEEE8] text-black",
      )}
    >
      <span className="flex justify-between">
        <span>
          <h2 className="font-alt text-primary text-[28px] font-semibold">
            {title}
          </h2>
          <div className="text-md font-alt mt-2">{delivery}</div>
          {description && <div className="text-md">{description}</div>}
        </span>

        <span>
          <div className="bg-primary font-alt mb-2 flex items-center gap-2 rounded-lg p-4 text-white">
            {oldPrice && (
              <span className="text-2xl text-[#F4F1D2] line-through">
                {oldPrice}
              </span>
            )}
            <span className="rounded py-1 text-[32px] font-bold">{price}</span>
          </div>

          <div className="opacity-50">{subtitle}</div>
        </span>
      </span>

      <hr className="border-primary my-9 opacity-20" />

      {expanded && (
        <div>
          <h3 className="font-alt mb-2 text-xl">What's included</h3>
          <ul className="mb-16 space-y-6">
            {included.map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 text-lg">
                <span className="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      opacity="0.3"
                      d="M9.99983 0.199829C4.58744 0.199829 0.199829 4.58744 0.199829 9.99983C0.199829 15.4122 4.58744 19.7998 9.99983 19.7998C15.4122 19.7998 19.7998 15.4122 19.7998 9.99983C19.7998 4.58744 15.4122 0.199829 9.99983 0.199829Z"
                      fill="#12A01C"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.2359 6.38104C15.5484 6.69346 15.5484 7.19999 15.2359 7.51241L10.9266 11.8217C10.9156 11.8328 10.9045 11.8438 10.8935 11.8548C10.5888 12.1596 10.3061 12.4424 10.0444 12.6421C9.75483 12.863 9.39909 13.056 8.94674 13.056C8.49438 13.056 8.13864 12.863 7.84903 12.6421C7.58735 12.4424 7.30464 12.1596 6.99995 11.8548C6.98894 11.8438 6.9779 11.8328 6.96684 11.8217L5.43414 10.289C5.12172 9.97661 5.12172 9.47008 5.43414 9.15766C5.74656 8.84524 6.2531 8.84524 6.56551 9.15766L8.09821 10.6904C8.44753 11.0397 8.65382 11.2436 8.81956 11.37C8.88606 11.4208 8.92621 11.4432 8.94674 11.4526C8.96726 11.4432 9.00741 11.4208 9.07391 11.37C9.23965 11.2436 9.44594 11.0397 9.79526 10.6904L14.1046 6.38104C14.417 6.06862 14.9235 6.06862 15.2359 6.38104ZM8.92951 11.4586C8.92951 11.4586 8.93226 11.4573 8.93692 11.4567C8.9317 11.4586 8.92951 11.4586 8.92951 11.4586ZM8.95655 11.4567C8.96121 11.4573 8.96396 11.4586 8.96396 11.4586C8.96396 11.4586 8.96177 11.4586 8.95655 11.4567Z"
                      fill="#12A01C"
                    />
                  </svg>
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <h3 className="font-alt mb-4 text-xl">What's NOT included</h3>
          <ul className="space-y-6">
            {excluded.map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 text-lg">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      opacity="0.3"
                      d="M9.99983 0.199829C4.58744 0.199829 0.199829 4.58744 0.199829 9.99983C0.199829 15.4122 4.58744 19.7998 9.99983 19.7998C15.4122 19.7998 19.7998 15.4122 19.7998 9.99983C19.7998 4.58744 15.4122 0.199829 9.99983 0.199829Z"
                      fill="#F7532E"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.5653 6.4339C13.8777 6.74632 13.8777 7.25285 13.5653 7.56527L11.131 9.99958L13.5653 12.4339C13.8777 12.7463 13.8777 13.2529 13.5653 13.5653C13.2529 13.8777 12.7463 13.8777 12.4339 13.5653L9.99959 11.131L7.56527 13.5653C7.25285 13.8777 6.74632 13.8777 6.4339 13.5653C6.12148 13.2529 6.12148 12.7463 6.4339 12.4339L8.86821 9.99959L6.4339 7.56527C6.12148 7.25285 6.12148 6.74632 6.4339 6.4339C6.74632 6.12148 7.25285 6.12148 7.56527 6.4339L9.99959 8.86821L12.4339 6.4339C12.7463 6.12148 13.2529 6.12148 13.5653 6.4339Z"
                      fill="#F7532E"
                    />
                  </svg>
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex w-full items-center justify-end gap-4 hover:cursor-pointer">
        <span>{expanded ? "Close details" : "See details"}</span>
        <span
          className={twMerge(
            "group-hover:bg-primary flex h-[40px] w-[40px] items-center justify-center rounded-full bg-gray-100 transition-colors duration-300",
            expanded && "bg-black text-white group-hover:bg-black",
          )}
        >
          <Icon icon={expanded ? "ri:subtract-fill" : "ri:add-fill"} />
        </span>
      </div>
    </button>
  );
}

function PricingCards() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  const cards = [
    {
      title: "MVP in a Box",
      subtitle: "Fixed price",
      price: "$10k",
      oldPrice: "$15k",
      description: "Backend + Frontend.",
      delivery: "4-week delivery",
      included: mvpItems,
      excluded: mvpExcludes,
    },
    {
      title: "Web3 MVP in a Box",
      subtitle: "Fixed price",
      description: "Smart contracts + dApp frontend.",
      price: "$15k",
      oldPrice: "$20k",
      delivery: "6-week delivery",
      included: web3Items,
      excluded: web3Excludes,
    },
  ];

  return (
    <div className="flex w-full max-w-[1080px] flex-col items-center">
      <div className="mt-11 grid w-full items-start gap-8 md:grid-cols-2 lg:gap-[60px]">
        {cards.map((card, idx) => (
          <ExpandablePricingCard
            key={card.title}
            {...card}
            expanded={expandedIdx === idx}
            onExpand={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
          />
        ))}
      </div>
    </div>
  );
}

export function Pricing() {
  return (
    <div className="mb-[68px] flex w-full flex-col items-center">
      <PricingCards />
    </div>
  );
}
