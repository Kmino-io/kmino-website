import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { twMerge } from "tailwind-merge";

export type FAQType = {
  number: string;
  question: string;
  answer: string;
};

type Props = {
  faqs: FAQType[];
};

export function FAQ({ faqs }: Props) {
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
