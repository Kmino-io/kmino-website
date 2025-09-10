import { FAQ, type FAQType } from "~/components/FAQ.tsx";
import { twMerge } from "tailwind-merge";
import { useMemo, useState } from "react";

type MVPTabProps = {
  active: number;
  setActive: (idx: number) => void;
};

const tabs = ["MVP", "Web3 MVP"];

export function MVPTab({ active, setActive }: MVPTabProps) {
  return (
    <div className="flex w-fit items-center rounded-full bg-[#F7532E1A] p-1.5">
      {tabs.map((label, idx) => (
        <button
          key={label}
          onClick={() => setActive(idx)}
          className={twMerge(
            "rounded-full px-8 py-2 text-lg font-medium transition-colors hover:cursor-pointer focus:outline-none",
            active === idx
              ? "bg-primary text-white shadow-sm"
              : "text-primary bg-transparent",
          )}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

const mvpFaqs: FAQType[] = [
  {
    number: "01",
    question: "What is a Web3 MVP?",
    answer:
      "A Web3 MVP is a minimum viable product that leverages blockchain technology to provide a basic functionality or feature that can be tested and validated by users.",
  },
  {
    number: "02",
    question: "Why should I build a Web3 MVP?",
    answer:
      "Building a Web3 MVP allows you to quickly test and validate your idea, gather feedback from users, and build a strong foundation for your Web3 project.",
  },
];

const web3Faqs: FAQType[] = [
  {
    number: "01",
    question: "What is Web3?",
    answer:
      "Web3 is the next generation of the internet that is built on blockchain technology, decentralized applications, and smart contracts.",
  },
  {
    number: "02",
    question: "What are the benefits of Web3?",
    answer:
      "Web3 offers greater transparency, security, and control over data, as well as the potential for new business models and revenue streams.",
  },
];

export function MVPFAQ() {
  const [activeTab, setActiveTab] = useState(0);

  const faqs = useMemo(() => {
    if (activeTab === 1) {
      return web3Faqs;
    }

    return mvpFaqs;
  }, [activeTab]);

  return (
    <section className="relative z-50 bg-white py-16 lg:py-[200px]">
      <div className="mx-auto flex max-w-[1080px] flex-col items-start gap-0 px-4 xl:px-0">
        <div className="mb-10 flex w-full items-center justify-between">
          <h1 className="heading">FAQ</h1>
          <MVPTab active={activeTab} setActive={setActiveTab} />
        </div>

        <FAQ faqs={faqs} />
      </div>
    </section>
  );
}
