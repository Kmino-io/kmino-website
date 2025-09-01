import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function HowItWorksList() {
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const items = listRef.current?.querySelectorAll("li");
    if (!items) return;

    gsap.set(items, { opacity: 0.1, y: 40, scale: 0.95 });

    const anim = gsap.to(items, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: listRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        scrub: true,
      },
    });

    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
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
