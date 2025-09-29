import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useEffect, useRef, useState } from "react";
import adam from "~/assets/testimonials/adam.png";
import mickey from "~/assets/testimonials/mickey.png";
import michiel from "~/assets/testimonials/michiel.png";

const testimonials = [
  {
    name: "Adam Czopp",
    title: "CEO at Lunos",
    testimonial: `Working with Kmino’s web3-savvy engineers has been a great experience and their Project Manager ensured everything stayed on track. The whole process was smooth and efficient.`,
    image: adam,
  },
  {
    name: "Mickey Joe",
    title: "Co-CEO at SuperDapp",
    testimonial: `Kmino has been awesome to work with! Their development and project management make a huge difference for SuperDapp.`,
    image: mickey,
  },
  {
    name: "Michiel Näring",
    title: "COO at Syscoin",
    testimonial: `Kmino has been awesome to work with! Their development and project management make a huge difference for SuperDapp.`,
    image: michiel,
  },
];

export function Testimonials() {
  const timer = useRef<NodeJS.Timeout | null>(null);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 2,
      spacing: 24,
    },
    breakpoints: {
      "(max-width: 1650px)": {
        slides: { perView: 1.5, spacing: 88 },
      },
      "(max-width: 1440px)": {
        slides: { perView: 1.5, spacing: 88 },
      },
      "(max-width: 1024px)": {
        slides: { perView: 1.1, spacing: 48 },
      },
      "(max-width: 640px)": {
        slides: { perView: 1.1, spacing: 24 },
      },
    },
  });

  useEffect(() => {
    if (instanceRef.current) {
      timer.current = setInterval(() => {
        instanceRef.current?.next();
      }, 5000);
    }
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [instanceRef]);

  return (
    <section className="mx-auto flex w-full max-w-[1900px] flex-col items-center ps-4 xl:ps-0">
      <div
        ref={sliderRef}
        className="keen-slider w-full py-[68px] lg:py-[100px]"
      >
        {testimonials.map(({ name, image, title, testimonial }) => (
          <div
            className="keen-slider__slide flex flex-col items-center justify-start"
            key={name}
          >
            <blockquote className="relative mb-8 flex max-w-[811px] flex-col items-center bg-[#EDEEE8] px-8 py-9 xl:min-w-[811px]">
              <span className="absolute top-3 left-2 font-serif text-[48px] leading-none font-bold text-[#EA6A3E] select-none">
                &ldquo;
              </span>
              <span className="absolute top-20 right-2 font-serif text-[48px] leading-none font-bold text-[#EA6A3E] select-none">
                &rdquo;
              </span>
              <p className="mb-8 text-center text-xl leading-[33.6px] font-normal tracking-[-0.48px] md:text-2xl">
                {testimonial}
              </p>
              <div className="flex items-center">
                <img
                  src={image?.src}
                  alt={name}
                  width={44}
                  height={44}
                  loading="lazy"
                />
                <div className="ml-4 flex-1">
                  <p className="text-primary text-xl font-semibold md:text-2xl">
                    {name}
                  </p>
                  <p className="text-primary text-xl md:text-2xl">{title}</p>
                </div>
              </div>
            </blockquote>
          </div>
        ))}
      </div>
    </section>
  );
}
