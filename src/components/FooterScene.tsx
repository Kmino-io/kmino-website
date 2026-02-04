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

    gsap.set(sun, { y: 150 });
    gsap.set(mountain, { y: 250 });

    // Sun rises as footer enters viewport
    const sunAnim = gsap.to(sun, {
      y: -100,
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
        end: "center center",
        scrub: 1.5,
      },
    });

    // Mountain rises slightly after sun, lands at bottom
    const mountainAnim = gsap.to(mountain, {
      y: 0,
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        end: "center center",
        scrub: 1,
      },
    });

    return () => {
      sunAnim.scrollTrigger?.kill();
      sunAnim.kill();
      mountainAnim.scrollTrigger?.kill();
      mountainAnim.kill();
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
        loading="lazy"
        decoding="async"
        alt=""
        className="absolute -bottom-52 left-1/2 w-[300px] -translate-x-1/2 lg:-bottom-32 lg:h-[750px] lg:w-[780px]"
      />

      {/* Mountain image */}
      <img
        ref={mountainRef}
        src={mountainImage.src}
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute bottom-0 left-1/2 -translate-x-1/2"
      />
    </div>
  );
}
