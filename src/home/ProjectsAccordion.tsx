import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { getImage } from "astro:assets";
import type { GetImageResult } from "astro";
import CTA from "~/components/CTA";
import { KMINO_PROJECTS } from "~/constants";

export function ProjectsAccordion({
  hideProjectButton = false,
}: {
  hideProjectButton?: boolean;
}) {
  const [projectImg, setProjectImg] = useState<GetImageResult>();
  const [openIdx, setOpenIdx] = useState(0);

  useEffect(() => {
    getImage({
      src: KMINO_PROJECTS[openIdx].image,
      width: 342,
      height: 539,
      format: "png",
      loading: "lazy",
      alt: KMINO_PROJECTS[openIdx].title,
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
                alt={KMINO_PROJECTS[openIdx].title}
                loading="lazy"
                className="h-[539px]"
              />
            ) : null}
          </motion.picture>
        </AnimatePresence>
      </div>
      <div className="flex flex-1 flex-col justify-center">
        {KMINO_PROJECTS.map((project, idx) => (
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
                  <div className="mb-8 flex flex-row gap-4">
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
                  {!hideProjectButton && (
                    <CTA
                      href={project.cta.href}
                      color="inverted"
                      className="mx-auto mb-8"
                    >
                      {project.cta.label}
                    </CTA>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
