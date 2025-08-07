import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { WhatWeDoCard } from "~/home/WhatWeDoCard.tsx";

export function WhatWeDoSlider() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 1.15,
      origin: "center",
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: {
          perView: 2.1,
          spacing: 24,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 3.1,
          spacing: 32,
        },
      },
    },
  });

  return (
    <div className="-mx-4 min-[1414px]:hidden lg:mx-0">
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide">
          <WhatWeDoCard
            title="Fullstack Web & Mobile Development"
            description="TypeScript/Node, React/React Native, modern APIs. Predictable delivery, clean architecture, clear docs."
          />
        </div>

        <div className="keen-slider__slide">
          <WhatWeDoCard
            title="Staff Augmentation"
            description="Embedded engineers who ship from week one. Immediate velocity without micromanagement."
          />
        </div>

        <div className="keen-slider__slide">
          <WhatWeDoCard
            title="Web3 & Smart Contract Development"
            description="Auditable contracts, gas‑aware design, test‑first workflows. Security and upgrade paths you can trust."
            color="primary"
          />
        </div>

        <div className="keen-slider__slide">
          <WhatWeDoCard
            title="Product & Delivery Advisory"
            description="Beyond tech. We help you refine your product vision, sharpen your positioning, craft a compelling brand, and even connect with investors: everything you need to build with purpose and raise with confidence."
          />
        </div>

        <div className="keen-slider__slide">
          <WhatWeDoCard
            title="AI development"
            description="Custom LLMs, RAG systems, intelligent automation. AI that actually works in production, not just demos."
          />
        </div>
      </div>
    </div>
  );
}
