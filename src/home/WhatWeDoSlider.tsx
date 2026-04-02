import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { WhatWeDoCard } from "~/home/WhatWeDoCard.tsx";

const cards = [
  {
    title: "Senior engineering, delivered",
    description:
      "Fullstack, Web3, mobile, AI systems: production-grade code written by engineers who've shipped at scale. Clean architecture, real docs, you own everything.",
    note: "The product gets built correctly",
  },
  {
    title: "AI that works in production",
    description:
      "Not just demos. We integrate AI where it genuinely moves the needle, with audit trails, zero sensitive data sent to public models without approval, and human sign-off on every change.",
    note: "Speed without the exposure",
  },
  {
    title: "Yes, we use AI to write code. Here's the difference:",
    description:
      "Every AI-assisted change goes through human review, automated tests, and architectural oversight. We use AI as a force multiplier, not a replacement for engineering judgment. You get the speed without the liability.",
    color: "primary" as const,
  },
  {
    title: "Strategy before the first line of code",
    description:
      "We don't start building until we understand what you're building toward. Product vision, technical strategy, positioning: we pressure-test the plan so you're not paying to undo it later.",
    note: "Avoids the mistake hiding in your roadmap",
  },
  {
    title: "A team aligned to outcomes, not tickets",
    description:
      "Playbooks, mentorship, and a culture of ownership mean you're not managing us, we're managing ourselves toward your goals. One point of contact. Full transparency. No surprises.",
    note: "The rarest thing in outsourced dev",
  },
];

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
        {cards.map((card) => (
          <div key={card.title} className="keen-slider__slide">
            <WhatWeDoCard {...card} />
          </div>
        ))}
      </div>
    </div>
  );
}
