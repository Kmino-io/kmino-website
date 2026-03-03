import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import CTA from "~/components/CTA";
import { KMINO_PROJECTS } from "~/constants";

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
        {KMINO_PROJECTS.map((project, idx) => (
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
        {KMINO_PROJECTS.map((_, idx) => (
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
