import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { twMerge } from "tailwind-merge";

import { Stamp } from "~/components/Stamp";

gsap.registerPlugin(ScrollTrigger);

const stages = [
  {
    number: "01",
    title: "Quick win",
    timeframe: "Week 1-2",
    heading: "Clarity before complexity",
    body: "Before a single line of code, you get a scoped plan: what to build, what to skip, and why. Most founders have never had someone pressure-test their roadmap. This is where we earn our keep before the work even starts.",
  },
  {
    number: "02",
    title: "Compound",
    timeframe: "Weeks 3-8",
    heading: "Velocity that doesn't break things",
    body: "You start seeing real progress. Features shipping, demos working, momentum building. Every merge is human-reviewed. Every sprint has a clear definition of done. The speed feels different when you trust what's being built.",
  },
  {
    number: "03",
    title: "Advantage",
    timeframe: "Month 3+",
    heading: "A codebase you can actually build on",
    body: "While competitors are rewriting their prototypes, you're shipping version two. Clean architecture, real documentation, and code you own outright. This means your next hire, your next feature, your next funding round all start from a better place.",
  },
  {
    number: "04",
    title: "10x (The compounding effect)",
    timeframe: "",
    heading: "You become the founder who built it right",
    body: "The real advantage is the position you're in, not the product you shipped. Users trust it. Investors can inspect it. Your team can extend it.",
  },
];

const withoutGuide = [
  "Building on assumptions",
  "Scope keeps expanding",
  "AI agrees with everything you say",
  "AI writes whatever you ask",
];

const withKmino = [
  "Plan validated in 48 hours",
  "Scope locked, risks surfaced",
  "Assumptions questioned",
  "AI used where it earns it",
];

const closingQuote =
  '"The founders we work with ship faster and stop dreading the next technical decision. Because they have a team that treats their product like it matters. Because it does."';

export function Stages() {
  const stageRefs = useRef<Array<HTMLDivElement | null>>([]);
  const quoteRef = useRef<HTMLParagraphElement | null>(null);
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    const triggers = stageRefs.current.map((element, index) => {
      if (!element) return null;

      return ScrollTrigger.create({
        trigger: element,
        start: "top 80%",
        onEnter: () => setActiveStage(index),
        onLeaveBack: () => {
          if (index > 0) setActiveStage(index - 1);
        },
      });
    });

    return () => {
      triggers.forEach((trigger) => trigger?.kill());
    };
  }, []);

  useEffect(() => {
    if (!quoteRef.current) return;

    const characters = quoteRef.current.querySelectorAll("span");
    gsap.set(characters, { opacity: 0 });

    const trigger = ScrollTrigger.create({
      trigger: quoteRef.current,
      start: "top 80%",
      once: true,
      onEnter: () => {
        gsap.to(characters, {
          opacity: 1,
          duration: 0.09,
          stagger: 0.02,
          ease: "none",
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <section
      className="mx-auto flex w-full max-w-[1240px] flex-col gap-16 px-6 py-[100px] lg:px-10 lg:py-[180px]"
      id="how-we-work"
    >
      <div className="max-w-[980px]">
        <h2 className="font-alt mb-4 text-[36px] leading-[130%] tracking-tight lg:text-[43px]">
          What changes when you build with the right guide.
        </h2>
        <p className="text-primary font-alt max-w-[980px] text-[20px] leading-[130%] tracking-tight lg:text-[26px]">
          This is the journey every founder we work with goes through, from
          uncertainty to a product that's built to last.
        </p>
      </div>

      <div className="flex flex-col gap-[100px]">
        {stages.map((stage, index) => (
          <div
            key={stage.number}
            ref={(element) => {
              stageRefs.current[index] = element;
            }}
            className="relative grid grid-cols-1 gap-6 lg:grid-cols-[44px_minmax(0,1fr)_220px] lg:gap-0"
          >
            <div className="mt-1 hidden lg:flex lg:flex-col lg:items-center">
              <span
                className={twMerge(
                  "min-h-6 w-6 rounded-full border-[5px]",
                  index <= activeStage ? "border-primary" : "border-[#E5E5E5]",
                )}
              />
            </div>

            {index < stages.length - 1 ? (
              <span
                className={twMerge(
                  "absolute top-11 left-[11px] w-0.5 lg:top-[44px] lg:left-[21px]",
                  index < activeStage ? "bg-primary" : "bg-[#E5E5E5]",
                )}
                style={{
                  height: "calc(100% + 44px)",
                }}
              />
            ) : null}

            <div className="lg:pl-0">
              <div className="mb-4 flex items-start gap-4 lg:hidden">
                <span
                  className={twMerge(
                    "h-6 min-w-6 rounded-full border-[5px]",
                    index <= activeStage
                      ? "border-primary"
                      : "border-[#E5E5E5]",
                  )}
                />
                <div className="flex flex-col gap-3">
                  <h3 className="font-alt text-[28px] leading-[1.1] tracking-tight lg:text-[32px]">
                    {`Stage ${stage.number} - ${stage.title}`}
                  </h3>
                  <span
                    className={twMerge(
                      "text-[26px] leading-[1.15] tracking-tight",
                      index <= activeStage ? "text-primary" : "text-[#D9D9D9]",
                    )}
                  >
                    {stage.timeframe || "Long-term"}
                  </span>
                </div>
              </div>

              <div className="pl-11 lg:pl-0">
                <h3 className="font-alt mb-4 hidden leading-[1.1] tracking-tight lg:block lg:text-[32px]">
                  {`Stage ${stage.number} - ${stage.title}`}
                </h3>

                <p className="font-alt mb-6 text-[24px] leading-[1.15] tracking-tight lg:text-[28px]">
                  {stage.heading}
                </p>

                <p className="max-w-[1120px] text-[18px] leading-[1.35] tracking-tight lg:text-[22px]">
                  {stage.body}
                </p>

                {index === 0 ? (
                  <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[344px_344px]">
                    <div className="border border-black p-4 lg:px-8 lg:py-10">
                      <h4 className="font-alt mb-4 text-[20px] leading-[1.1] tracking-tight lg:mb-8 lg:text-[24px]">
                        Without a Guide
                      </h4>

                      <ul className="flex flex-col gap-6">
                        {withoutGuide.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-4 leading-[1.25] tracking-tight lg:text-[18px]"
                          >
                            <span className="text-primary inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#FFD9CF] text-[14px]">
                              ×
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="relative border border-black p-4 lg:px-8 lg:py-10">
                      <Stamp className="text-primary rotating absolute -top-2 -right-2 hidden lg:block" />

                      <h4 className="font-alt mb-4 text-[20px] leading-[1.1] tracking-tight lg:mb-8 lg:text-[24px]">
                        With Kmino
                      </h4>

                      <ul className="flex flex-col gap-6">
                        {withKmino.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-4 leading-[1.25] tracking-tight lg:text-[18px]"
                          >
                            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#B8E2B2] text-[14px] text-[#2B7A2F]">
                              ✓
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>

            <div className="hidden items-start justify-end lg:flex">
              <span
                className={twMerge(
                  "font-alt text-[32px] leading-[1.1] tracking-tight",
                  index <= activeStage ? "text-primary" : "text-[#E1E1E1]",
                )}
              >
                {stage.timeframe || "Long-term"}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="font-alt text-primary relative ml-auto max-w-[724px] text-right text-[30px] leading-[130%] lg:mt-[54px] lg:text-[38px]">
        <p className="invisible">{closingQuote}</p>
        <p
          ref={quoteRef}
          aria-label={closingQuote}
          className="absolute inset-0 whitespace-pre-wrap"
        >
          {closingQuote.split("").map((char, index) => (
            <span key={`${char}-${index}`}>{char}</span>
          ))}
        </p>
      </div>
    </section>
  );
}
