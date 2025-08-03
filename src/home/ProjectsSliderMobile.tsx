import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";

const projects = [
  {
    title: "SuperDapp",
    subtitle: "Social meets Web3 with a seamless super app",
    description: "Social meets Web3 with a seamless super app",
    image: "/images/superdapp-preview.png", // Replace with your image path
    number: "01",
  },
  {
    title: "Pali Wallet & Pali Mobile",
    subtitle: "Non-custodial wallet with multisig and mobile-ready UX",
    description: "Non-custodial wallet with multisig and mobile-ready UX",
    image: "/images/pali-preview.png", // Replace with your image path
    number: "02",
  },
  {
    title: "Syscoin Ecosystem",
    subtitle: "Full-stack contributions to one of the most scalable L1s",
    image: "/images/pegasys-preview.png", // Replace with your image path
    number: "03",
  },
  {
    title: "Lunos",
    subtitle: "Fintech meets design-driven development",
    image: "/images/lunos-preview.png", // Replace with your image path
    number: "04",
  },
  {
    title: "Luxy",
    subtitle: "NFT marketplace, done right",
    image: "/images/luxy-preview.png", // Replace with your image path
    number: "05",
  },
];

export function ProjectsSliderMobile() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      spacing: 16,
    },
    loop: true,
    breakpoints: {
      "(min-width: 640px)": {
        slides: {
          perView: 2,
          spacing: 24,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 3,
          spacing: 32,
        },
      },
      "(min-width: 1280px)": {
        slides: {
          perView: 3.7,
          spacing: 40,
        },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  return (
    <div className="flex w-full flex-col items-center">
      <div ref={sliderRef} className="keen-slider h-fit w-full">
        {projects.map((project, idx) => (
          <div
            className="keen-slider__slide flex h-fit flex-col gap-6"
            key={idx}
          >
            <div className="font-alt flex items-baseline gap-3 text-[30px] text-black">
              <span className="text-primary text-[26px]">{project.number}</span>
              {project.title}
            </div>

            <div className="text-xl">{project.subtitle}</div>

            <img
              src={project.image}
              alt={project.title}
              className="h-[539px]"
            />
          </div>
        ))}
      </div>
      <div className="mt-11 flex gap-2">
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
