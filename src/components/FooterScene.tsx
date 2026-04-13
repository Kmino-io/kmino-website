import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import sunImage from "../assets/kmino-sun.webp";
import mountainImage from "../assets/mountain.webp";

gsap.registerPlugin(ScrollTrigger);

export function FooterScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sunRef = useRef<HTMLImageElement>(null);
  const mountainRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const sun = sunRef.current;
    const mountain = mountainRef.current;

    if (!container || !sun || !mountain) return;

    const mm = gsap.matchMedia();

    // Desktop (lg+)
    mm.add("(min-width: 1024px)", () => {
      gsap.fromTo(
        sun,
        { y: 150 },
        {
          y: -100,
          scrollTrigger: {
            trigger: container,
            start: "top bottom",
            end: "center center",
            scrub: 1.5,
          },
        },
      );

      gsap.fromTo(
        mountain,
        { y: 250 },
        {
          y: 0,
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
            end: "center center",
            scrub: 1,
          },
        },
      );
    });

    // Mobile / tablet
    mm.add("(max-width: 1023px)", () => {
      gsap.fromTo(
        sun,
        { y: 60 },
        {
          y: -60,
          scrollTrigger: {
            trigger: container,
            start: "top bottom",
            end: "bottom bottom",
            scrub: 1.5,
          },
        },
      );

      gsap.fromTo(
        mountain,
        { y: 100 },
        {
          y: 0,
          scrollTrigger: {
            trigger: container,
            start: "top bottom",
            end: "center bottom",
            scrub: 1,
          },
        },
      );
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Sun image */}
      <img
        ref={sunRef}
        src={sunImage.src}
        decoding="async"
        alt=""
        className="absolute -bottom-32 left-1/2 w-[600px] -translate-x-1/2 lg:-bottom-32 lg:h-[750px] lg:w-[780px]"
      />

      {/* Mountain image */}
      <img
        ref={mountainRef}
        src={mountainImage.src}
        alt=""
        decoding="async"
        className="absolute bottom-0 left-1/2 max-w-[850px] -translate-x-1/2 lg:max-w-[1920px]"
      />
    </div>
  );
}
