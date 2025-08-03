import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { getImage } from "astro:assets";
import type { GetImageResult } from "astro";

const projects = [
  {
    number: "01",
    title: "SuperDapp",
    description: "Social meets Web3 with a seamless super app",
    image: "/images/superdapp-preview.png",
  },
  {
    number: "02",
    title: "Pali Wallet & Pali Mobile",
    description: "Non-custodial wallet with multisig and mobile-ready UX",
    image: "/images/pali-preview.png",
  },
  {
    number: "03",
    title: "Syscoin Ecosystem",
    description: "Full-stack contributions to one of the most scalable L1s",
    image: "/images/pegasys-preview.png",
  },
  {
    number: "04",
    title: "Lunos",
    description: "Fintech meets design-driven development",
    image: "/images/lunos-preview.png",
  },
  {
    number: "05",
    title: "Luxy",
    description: "NFT marketplace, done right",
    image: "/images/luxy-preview.png",
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
                  className="overflow-hidden"
                  style={{ willChange: "height,opacity" }}
                >
                  <div className="pb-8 text-2xl text-black/80">
                    <div>{project.description}</div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
