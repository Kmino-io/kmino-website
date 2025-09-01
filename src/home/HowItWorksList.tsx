import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function HowItWorksList() {
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const items = listRef.current?.querySelectorAll("li");
    if (!items) return;

    items.forEach((item, i) => {
      gsap.fromTo(
        item,
        { opacity: 0.3, y: 40 },
        {
          opacity: 1,
          y: 0,
          delay: i * 0.15,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top center+=100",
            end: "bottom center+=100",
            scrub: 0.5,
            onEnter: () => {
              gsap.to(item, { opacity: 1, duration: 0.3 });
            },
            onLeaveBack: () => {
              gsap.to(item, { opacity: 0.3, duration: 1 });
            },
            onLeave: () => {
              gsap.to(item, { opacity: 0.1, duration: 1 });
            },
            onEnterBack: () => {
              gsap.to(item, { opacity: 1, duration: 0.3 });
            },
          },
        },
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <ul
      ref={listRef}
      className="flex w-full flex-col items-end gap-8 text-xl tracking-tight lg:w-fit lg:text-[28px]"
    >
      <li>Dependable daily overlap,</li>
      <li>Clear comunications,</li>
      <li>Enterprise-friendly contracts,</li>
      <li>6‑week initial runway or 2‑sprint pilot,</li>
      <li>High-performance staffing.</li>
    </ul>
  );
}
