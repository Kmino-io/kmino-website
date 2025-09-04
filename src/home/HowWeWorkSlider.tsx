import { ArrowLeft, ArrowRight } from "iconsax-reactjs";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";

type CardProps = {
  index: string;
  title: string;
  description: string;
  active: boolean;
  onClick: () => void;
};

const MOBILE_SLIDES = 1.15;
const DESKTOP_SLIDES = 3.5;

function Card({ title, description, index, active, onClick }: CardProps) {
  return (
    <div
      className={`keen-slider__slide flex cursor-pointer flex-col gap-8 transition-opacity duration-300 ${
        active ? "" : "opacity-40"
      }`}
      onClick={onClick}
    >
      <span className="font-alt text-3xl">{index.padStart(2, "0")}</span>
      <hr className="border-1" />
      <h2 className="font-alt pe-8 text-3xl leading-[1.3]">{title}</h2>
      {active ? (
        <p className="pe-8 text-xl leading-[1.3]">{description}</p>
      ) : null}
    </div>
  );
}

export function HowWeWorkSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    mode: "snap",
    drag: false,
    slides: {
      perView: MOBILE_SLIDES,
      origin: "center",
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: {
          perView: DESKTOP_SLIDES,
        },
      },
    },
    initial: 0,
  });

  const cards = [
    {
      title: "Discover",
      description: "Align on outcomes, constraints, and acceptance criteria.",
    },
    {
      title: "Design",
      description:
        "Architecture, and baseline tests (AI‑assisted, human‑approved).",
    },
    {
      title: "Build",
      description:
        "LLM‑assisted implementation behind style/coverage gates; pair on risky areas.",
    },
    {
      title: "Test",
      description:
        "Contract/property tests, fuzzing where relevant; security checks in CI.",
    },
    {
      title: "Deploy",
      description: "CI/CD with feature flags or canaries; rollback plans.",
    },
    {
      title: "Improve",
      description:
        "Track lead time, review latency, defect escape rate; update playbooks weekly.",
    },
    {
      title: "Definition of Done",
      description: "Tests, docs, and acceptance criteria met, no exceptions.",
    },
  ];

  return (
    <div className="-mx-6 sm:mx-0">
      <div ref={sliderRef} className="keen-slider min-h-[290px]">
        {cards.map((card, idx) => (
          <Card
            key={idx}
            title={card.title}
            description={card.description}
            index={(idx + 1).toString()}
            active={currentSlide === idx}
            onClick={() => {
              if (typeof instanceRef.current?.options.slides === "object") {
                if (
                  instanceRef.current?.options.slides?.perView === MOBILE_SLIDES
                ) {
                  instanceRef?.current?.moveToIdx(idx, true);
                  setCurrentSlide(idx);
                  return;
                }
              }

              if (idx > currentSlide && idx >= 2) {
                instanceRef?.current?.next();
              }

              if (idx < currentSlide && idx >= 1) {
                instanceRef?.current?.prev();
              }

              setCurrentSlide(idx);
            }}
          />
        ))}
      </div>

      <div className="mt-12 flex gap-8 ps-6 sm:ps-0">
        <button
          className="bg-primary rounded-full p-[11px] hover:not-disabled:cursor-pointer disabled:opacity-50"
          disabled={!sliderRef || currentSlide === 0}
          aria-label="Previous Slide"
          title="Previous Slide"
          type="button"
          onClick={() => {
            if (instanceRef) {
              if (typeof instanceRef.current?.options.slides === "object") {
                if (
                  instanceRef.current?.options.slides?.perView === MOBILE_SLIDES
                ) {
                  instanceRef?.current?.prev();
                  setCurrentSlide((prev) => Math.max(prev - 1, 0));
                  return;
                }
              }

              if (currentSlide >= 1) {
                instanceRef.current?.prev();
              }

              setCurrentSlide((prev) => Math.max(prev - 1, 0));
            }
          }}
        >
          <ArrowLeft size={22} />
        </button>

        <button
          className="bg-primary rounded-full p-[11px] hover:not-disabled:cursor-pointer disabled:opacity-50"
          disabled={!sliderRef || currentSlide === cards.length - 1}
          aria-label="Next Slide"
          title="Next Slide"
          type="button"
          onClick={() => {
            if (instanceRef) {
              if (typeof instanceRef.current?.options.slides === "object") {
                if (
                  instanceRef.current?.options.slides?.perView === MOBILE_SLIDES
                ) {
                  instanceRef?.current?.next();
                  setCurrentSlide((prev) => Math.max(prev + 1, 0));
                  return;
                }
              }

              if (currentSlide >= 2) {
                instanceRef.current?.next();
              }

              setCurrentSlide((prev) => Math.min(prev + 1, cards.length - 1));
            }
          }}
        >
          <ArrowRight size={22} />
        </button>
      </div>
    </div>
  );
}
