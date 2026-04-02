import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

import michielImage from "../assets/testimonials/michiel.webp";
import mickeyImage from "../assets/testimonials/mickey.png";
import adamImage from "../assets/testimonials/adam.png";

type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
  metrics: string[];
  image: string;
  tone: "primary" | "paper";
};

const testimonials: Testimonial[] = [
  {
    name: "Michiel Naring",
    role: "COO",
    company: "Syscoin",
    quote:
      "Kmino gives us the focus and dedication of an in-house team with the flexibility of a dev shop, without the HR baggage.",
    metrics: [
      "10+ year-old blockchain",
      "$750M+ TVL at ATH",
      "Trusted us with their full development",
    ],
    image: michielImage.src,
    tone: "primary",
  },
  {
    name: "Adam Czopp",
    role: "CEO",
    company: "Lunos",
    quote:
      "Working with Kmino's web3-savvy team was a great experience. Their project management kept everything on track and the process smooth and efficient.",
    metrics: ["$21M covered", "$700k paid in claims"],
    image: adamImage.src,
    tone: "paper",
  },
  {
    name: "Mickey Joe",
    role: "CEO",
    company: "SuperDapp",
    quote:
      "Kmino has been awesome to work with! Their development and project management make a huge difference for SuperDapp.",
    metrics: [
      "Senior team from day one",
      "Clear planning cadence",
      "Zero hand-holding required",
    ],
    image: mickeyImage.src,
    tone: "paper",
  },
];

export function Testimonials() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: false,
    slides: {
      perView: 1.1,
      spacing: 10,
      origin: "center",
    },
    breakpoints: {
      "(min-width: 1024px)": {
        slides: {
          perView: 2,
          spacing: 88,
          origin: "center",
        },
      },
    },
  });

  return (
    <div className="flex w-full flex-col items-center">
      <div ref={sliderRef} className="keen-slider w-full overflow-visible">
        {testimonials.map((testimonial) => {
          const isPrimary = testimonial.tone === "primary";

          return (
            <article
              key={`${testimonial.name}-${testimonial.company}`}
              className={`keen-slider__slide flex min-h-[520px] max-w-[811px] flex-col justify-between gap-8 p-6 lg:h-[249px] lg:min-h-0 lg:gap-0 lg:px-8 lg:py-9 ${
                isPrimary ? "bg-primary text-white" : "bg-[#EDEEE8] text-black"
              }`}
            >
              <div className="relative flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
                <div className="order-2 mx-auto flex items-center gap-4 text-left lg:order-1 lg:min-w-[230px] lg:flex-row lg:items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-[41px] w-[41px] rounded-full object-cover lg:h-[69px] lg:w-[69px]"
                  />

                  <div className="leading-[130%] tracking-tight">
                    <p
                      className={`font-semibold lg:text-[20px] ${
                        isPrimary ? "text-[#FFE7DB]" : "text-primary"
                      }`}
                    >
                      {testimonial.name}
                    </p>
                    <p
                      className={`lg:text-[20px] ${
                        isPrimary ? "text-[#FFE7DB]" : "text-primary"
                      }`}
                    >
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>

                <blockquote className="relative order-1 mx-auto max-w-[495px] text-center lg:order-2 lg:mx-0 lg:text-left">
                  <p
                    className={`absolute top-0 left-0 font-serif text-[36px] leading-none font-bold select-none lg:-top-3 lg:-left-2 lg:text-[54px] ${
                      isPrimary ? "text-[#FFE7DB]" : "text-primary"
                    }`}
                  >
                    &ldquo;
                  </p>
                  <p className="max-w-[640px] px-8 pt-5 text-center leading-[140%] tracking-tight lg:pt-0 lg:pr-0 lg:pl-10 lg:text-[20px]">
                    {testimonial.quote}
                  </p>
                  <p
                    className={`absolute right-0 bottom-0 font-serif text-[36px] leading-none font-bold select-none lg:right-8 lg:-bottom-10 lg:text-[54px] ${
                      isPrimary ? "text-[#FFE7DB]" : "text-primary"
                    }`}
                  >
                    &rdquo;
                  </p>
                </blockquote>
              </div>

              <div className="flex flex-wrap justify-center gap-2 lg:justify-start lg:gap-4">
                {testimonial.metrics.map((metric) => (
                  <span
                    key={metric}
                    className={`flex max-h-[27px] items-center px-3 py-2 text-[16px] leading-none tracking-tight ${
                      isPrimary
                        ? "border-[#F4F1D2] bg-[#F4F1D2] text-black"
                        : "border-white bg-white text-black"
                    }`}
                  >
                    {metric}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
