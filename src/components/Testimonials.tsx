import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    quote: "KMINO didn’t just deliver code — they helped us shape our roadmap.",
    author: "Founder, SuperDapp",
  },
  {
    quote:
      "The KMINO team integrated seamlessly and delivered above expectations.",
    author: "CTO, FintechX",
  },
  {
    quote:
      "Their expertise accelerated our launch and improved our product quality.",
    author: "Product Lead, HealthApp",
  },
  {
    quote: "Professional, proactive, and highly skilled. Highly recommended.",
    author: "CEO, EduPlatform",
  },
];

export function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timer = useRef<NodeJS.Timeout | null>(null);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
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

  const goToSlide = (idx: number) => {
    instanceRef.current?.moveToIdx(idx);
  };

  return (
    <div className="flex w-full flex-col items-center">
      <div ref={sliderRef} className="keen-slider mx-auto w-full max-w-[771px]">
        {testimonials.map((t, idx) => (
          <div
            className="keen-slider__slide flex flex-col items-center justify-center"
            key={idx}
          >
            <blockquote className="font-alt mb-6 text-center text-[28px] font-medium tracking-tight text-black md:text-[43.63px]">
              “{t.quote}”
            </blockquote>
            <div className="text-primary text-lg font-semibold">{t.author}</div>
          </div>
        ))}
      </div>
      <div className="mt-9 flex gap-3">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Go to testimonial ${idx + 1}`}
            className={`h-3 w-3 rounded-full transition-colors hover:cursor-pointer ${
              currentSlide === idx ? "bg-primary" : "bg-gray-200"
            }`}
            onClick={() => goToSlide(idx)}
            style={{ outline: "none", border: "none" }}
          />
        ))}
      </div>
    </div>
  );
}
