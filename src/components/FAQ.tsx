import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { twMerge } from "tailwind-merge";

const faqs = [
  {
    number: "01",
    question: "Where are you based?",
    answer:
      "We’re distributed. You get dependable overlap with your core hours and a single point of contact.",
  },
  {
    number: "02",
    question: "How do you keep quality high if you move fast?",
    answer:
      "Gatekeeping via tests, static analysis, and reviews; strict Definition of Done; weekly retros and playbook updates.",
  },
  {
    number: "03",
    question: "Will we be locked in?",
    answer:
      "No. You own the repo, infra, CI, and docs. We train your team before exit if desired.",
  },
  {
    number: "04",
    question: "Do you work with regulated teams?",
    answer:
      "Yes. We align with SOC 2, GDPR, and security reviews. We avoid public model exposure without consent.",
  },
  {
    number: "05",
    question: "What’s the fastest way to start?",
    answer:
      "Share your roadmap. We’ll propose a pilot or 6‑week plan within 48 hours.",
  },
];

export function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <div className="mx-auto w-full">
      {faqs.map((faq, idx) => (
        <div
          key={faq.number}
          className={twMerge(
            "border-b px-4 py-[52px] transition-all duration-300 md:px-[60px]",
            openIdx === idx ? "border-black" : "border-gray-200",
          )}
        >
          <button
            className="group flex w-full items-center justify-between gap-4 text-left hover:cursor-pointer"
            onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
            aria-expanded={openIdx === idx}
          >
            <div className="flex w-full flex-col md:flex-row md:items-center md:gap-[52px]">
              <span
                className={twMerge(
                  "font-alt text-[32px] md:text-[48px]",
                  openIdx === idx ? "text-primary" : "text-gray-400",
                )}
              >
                {faq.number}
              </span>

              <span className="flex w-full items-center justify-between">
                <span className="font-alt text-[22px] tracking-tight transition md:text-[38px]">
                  {faq.question}
                </span>

                <span className="flex items-center">
                  {openIdx === idx ? (
                    <span
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-2xl text-white md:h-12 md:w-12 md:text-3xl"
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpenIdx(-1);
                      }}
                      aria-label="Close"
                    >
                      ×
                    </span>
                  ) : (
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-2xl md:h-12 md:w-12 md:text-3xl">
                      +
                    </span>
                  )}
                </span>
              </span>
            </div>
          </button>

          <AnimatePresence initial={false}>
            {openIdx === idx && (
              <motion.div
                key="content"
                className="flex gap-[52px]"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
              >
                <span className="font-alt hidden touch-none text-[48px] opacity-0 select-none md:block">
                  {faq.number}
                </span>

                <div className="text-lg text-black">{faq.answer}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
