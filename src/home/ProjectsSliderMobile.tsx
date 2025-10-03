import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import CTA from "~/components/CTA";

const projects = [
  {
    number: "01",
    title: "Luxy",
    image: "/images/luxy-preview.png",
    blocks: [
      {
        type: "description",
        content:
          "Luxy is an NFT Marketplace born to give creators no-code tools to launch collections.",
      },
      {
        type: "stat",
        content: "$60k+ trading volume",
      },
      {
        type: "detail",
        content: "More than 5k users and 700+ NFT collections launched",
      },
    ],
    cta: { href: "https://luxy.io", label: "Access the project" },
  },
  {
    number: "02",
    title: "Lunos",
    image: "/images/lunos-preview.png",
    blocks: [
      {
        type: "description",
        content:
          "Lunos provides an AI-powered, on-chain insurance platform for DeFi and real-world risks.",
      },
      {
        type: "stat",
        content: "$21M covered",
      },
      {
        type: "detail",
        content: "$700k paid in claims",
      },
    ],
    cta: { href: "https://lunos.xyz", label: "Access the project" },
  },
  {
    number: "03",
    title: "SuperDapp",
    image: "/images/superdapp-preview.png",
    blocks: [
      {
        type: "description",
        content:
          "An AI-powered super-app for secure communication, wallets, and vibrant communities.",
      },
      {
        type: "stat",
        content: "From 0 to 240k Sign Ups",
      },
      {
        type: "detail",
        content: "AI Agents in 700+ communities",
      },
    ],
    cta: { href: "https://superdapp.ai", label: "Access the project" },
  },
  {
    number: "04",
    title: "Pali Wallet",
    image: "/images/pali-preview.png",
    blocks: [
      {
        type: "description",
        content:
          "Pali Wallet combines secure, multichain asset management and dApp browsing, first to support UTXO and EVM chains.",
      },
      {
        type: "stat",
        content: "22.2k downloads from Google’s App Store",
      },
      {
        type: "detail",
        content: "Average 11k+ weekly active users",
      },
    ],
    cta: { href: "https://paliwallet.com", label: "Access the project" },
  },
  {
    number: "05",
    title: "Pegasys",
    image: "/images/pegasys.png",
    blocks: [
      {
        type: "description",
        content:
          "Pegasys is a Uniswap-based DEX for Syscoin NEVM and Rollux, powering DeFi with full ecosystem support.",
      },
      {
        type: "stat",
        content: "Over $1.5M traded within a week on ATH",
      },
      {
        type: "detail",
        content: "$1.6M ATH TVL",
      },
    ],
    cta: { href: "https://pegasys.finance", label: "Access the project" },
  },
  {
    number: "06",
    title: "Syscoin",
    image: "/images/syscoin.png",
    blocks: [
      {
        type: "description",
        content:
          "Syscoin merges Bitcoin-level security with scalable EVM smart contracts on a modular blockchain.",
      },
      {
        type: "stat",
        content: "$750M+ TVL on ATH",
      },
      {
        type: "detail",
        content: "Powered by Bitcoin merge-mine",
      },
    ],
    cta: { href: "https://syscoin.org", label: "Access the project" },
  },
];

export function ProjectsSliderMobile({
  hideProjectButton = false,
}: {
  hideProjectButton?: boolean;
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: { spacing: 16 },
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  return (
    <div className="flex w-full flex-col items-center min-[1079px]:hidden">
      <div ref={sliderRef} className="keen-slider h-fit w-full">
        {projects.map((project, idx) => (
          <div
            className="keen-slider__slide flex h-fit flex-col gap-4"
            key={idx}
          >
            <div className="font-alt flex items-baseline gap-3 text-[30px] text-black">
              <span className="text-primary text-[26px]">{project.number}</span>
              {project.title}
            </div>
            <div className="mt-2 flex flex-col gap-3">
              {project.blocks.map((block, i) => (
                <div
                  key={i}
                  className={twMerge(
                    "flex flex-1 items-center justify-center rounded px-4 py-8 text-center",
                    block.type === "stat" &&
                      "font-alt bg-[#E75B32] text-[24px]",
                    block.type !== "stat" &&
                      "bg-[#F8F7E3] text-[20px] leading-[28.6px] text-black",
                  )}
                >
                  {block.content}
                </div>
              ))}
            </div>
            {!hideProjectButton && (
              <CTA
                href={project.cta.href}
                color="inverted"
                className="mx-auto my-4"
              >
                {project.cta.label}
              </CTA>
            )}

            <img
              src={project.image}
              alt={project.title}
              className="mx-auto w-full max-w-[342px] rounded object-cover"
            />
          </div>
        ))}
      </div>
      <div className="mt-2 flex gap-2">
        {projects.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Go to project ${idx + 1}`}
            className={`h-3 w-3 rounded-full transition-colors ${
              currentSlide === idx ? "bg-primary" : "bg-gray-200"
            }`}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
          />
        ))}
      </div>
    </div>
  );
}
