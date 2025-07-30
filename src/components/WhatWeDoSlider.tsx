import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { WhatWeDoCard } from "~/components/WhatWeDoCard.tsx";

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
          perView: 3.1,
          spacing: 24,
        },
      },
    },
  });

  return (
    <div className="-mx-4">
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide bg-red-500">
          <WhatWeDoCard
            title="Business Advisory"
            description="Lorem ipsum dolor sit amet consectetur. Quis id tincidunt amet sed. A nunc sollicitudin ultrices mollis."
          />
        </div>

        <div className="keen-slider__slide">
          <WhatWeDoCard
            title="Fullstack Web & Mobile Development"
            description="Lorem ipsum dolor sit amet consectetur. Quis id tincidunt amet sed. A nunc sollicitudin ultrices mollis."
          />
        </div>

        <div className="keen-slider__slide">
          <WhatWeDoCard
            title="Web3 & Smart Contract Development"
            color="primary"
            description="Lorem ipsum dolor sit amet consectetur. Quis id tincidunt amet sed. A nunc sollicitudin ultrices mollis."
          />
        </div>

        <div className="keen-slider__slide">
          <WhatWeDoCard
            title="Infrastructure and DevOps"
            description="Lorem ipsum dolor sit amet consectetur. Quis id tincidunt amet sed. A nunc sollicitudin ultrices mollis."
          />
        </div>

        <div className="keen-slider__slide">
          <WhatWeDoCard
            title="Staff Augmentation"
            description="Lorem ipsum dolor sit amet consectetur. Quis id tincidunt amet sed. A nunc sollicitudin ultrices mollis."
          />
        </div>
      </div>
    </div>
  );
}
