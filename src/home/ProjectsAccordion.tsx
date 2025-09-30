import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { getImage } from "astro:assets";
import type { GetImageResult } from "astro";
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
        content: "21M USD covered",
      },
      {
        type: "detail",
        content: "700k USD paid in claims",
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
        content: "Over 1.5M USD traded within a week on ATH",
      },
      {
        type: "detail",
        content: "1.6M ATH TVL",
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
        content: "750M+ USD TVL on ATH",
      },
      {
        type: "detail",
        content: "Powered by Bitcoin merge-mine",
      },
    ],
    cta: { href: "https://syscoin.org", label: "Access the project" },
  },
];

export function ProjectsAccordion() {
  const [projectImg, setProjectImg] = useState<GetImageResult>();
  const [openIdx, setOpenIdx] = useState(0);

  useEffect(() => {
    getImage({
      src: projects[openIdx].image,
      width: 342,
      height: 539,
      format: "png",
      loading: "lazy",
      alt: projects[openIdx].title,
    }).then((img) => {
      setProjectImg(img);
    });
  }, [openIdx]);

  return (
    <div className="mx-auto -mr-4 flex w-full gap-15 max-[1080px]:hidden">
      <div className="flex h-full">
        <AnimatePresence mode="wait">
          <motion.picture
            key={projectImg?.src}
            initial={{ opacity: 0, x: -40, width: 342 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.4 }}
          >
            {projectImg ? (
              <img
                src={projectImg?.src}
                alt={projects[openIdx].title}
                loading="lazy"
                className="h-[539px]"
              />
            ) : null}
          </motion.picture>
        </AnimatePresence>
      </div>
      <div className="flex flex-1 flex-col justify-center">
        {projects.map((project, idx) => (
          <div
            key={project.number}
            className={twMerge(
              "overflow-hidden transition-all duration-300",
              openIdx === idx
                ? "border-b-1 border-black"
                : "border-b border-transparent",
            )}
            style={{
              transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
            }}
          >
            <button
              className={twMerge(
                "flex w-full items-center gap-4 border-b border-black py-6 transition-all duration-300 hover:cursor-pointer",
                openIdx === idx && "border-transparent",
              )}
              onClick={() => setOpenIdx(idx)}
              aria-expanded={openIdx === idx}
              style={{ textAlign: "left" }}
            >
              <span className="text-primary font-alt text-[26px]">
                {project.number}
              </span>
              <span className="font-alt text-[43px] transition">
                {project.title}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {openIdx === idx && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="overflow-hidden pe-2 xl:pe-0"
                  style={{ willChange: "height,opacity" }}
                >
                  <div className="flex flex-row gap-4">
                    {project.blocks.map((block, i) => (
                      <div
                        key={i}
                        className={twMerge(
                          "flex flex-1 items-center justify-center rounded px-4 py-8 text-center",
                          block.type === "stat" &&
                            "font-alt bg-[#E75B32] text-[30px]",
                          block.type !== "stat" &&
                            "bg-[#F8F7E3] text-[22px] leading-[28.6px] text-black",
                        )}
                      >
                        {block.content}
                      </div>
                    ))}
                  </div>

                  <CTA
                    href={project.cta.href}
                    color="inverted"
                    className="mx-auto my-8"
                  >
                    {project.cta.label}
                  </CTA>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
