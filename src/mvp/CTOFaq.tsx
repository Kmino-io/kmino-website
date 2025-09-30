import { useMemo, useState } from "react";
import { FAQ, type FAQType } from "~/components/FAQ";
import { Tabs } from "~/components/Tabs";

const ctoFaqs: FAQType[] = [
  {
    number: "01",
    question: "What does a CTO-as-a-Service package include?",
    answer:
      "We guide technology decisions, help define the roadmap, and ensure best practices for scalability and security.",
  },
  {
    number: "02",
    question: "Do you also handle hiring developers?",
    answer: "No. We can provide Kmino developers if needed.",
  },
  {
    number: "03",
    question: "Can you help with fundraising pitches?",
    answer:
      "Yes, we can prepare the tech side of your pitch deck and join investor calls if requested.",
  },
  {
    number: "04",
    question: "Is development work included?",
    answer:
      "Development hours are not included by default but can be arranged as a separate service.",
  },
  {
    number: "05",
    question: "Do you work with in-house dev teams?",
    answer:
      "Absolutely. We can lead, mentor, and align your internal team with your product goals.",
  },
];

export function CTOFaq() {
  return (
    <section className="relative z-50 bg-white py-16 lg:py-[200px]">
      <div className="mx-auto flex max-w-[1080px] flex-col items-start gap-0 px-4 xl:px-0">
        <h1 className="heading">FAQ</h1>
        <FAQ faqs={ctoFaqs} />
      </div>
    </section>
  );
}
