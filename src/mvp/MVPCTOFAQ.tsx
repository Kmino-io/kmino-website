import { FAQ, type FAQType } from "~/components/FAQ.tsx";
import { useMemo, useState } from "react";
import { Tabs } from "~/components/Tabs";

// MVP FAQ
const mvpFaqs: FAQType[] = [
  {
    number: "01",
    question: "How long does it take to deliver the MVP?",
    answer:
      "Typically 4–6 weeks, depending on complexity and your availability for feedback.",
  },
  {
    number: "02",
    question: "What technologies do you use?",
    answer:
      "We use modern, scalable stacks like React, Next.js, Node.js, and for Web3 projects, Solidity/Foundry/Hardhat.",
  },
  {
    number: "03",
    question: "Do you include mobile apps?",
    answer:
      "We focus on web-first solutions. Your MVP will look great on mobile browsers, but native iOS/Android apps aren’t included.",
  },
  {
    number: "04",
    question: "Is design included?",
    answer:
      "Yes, we deliver a clean and functional UI/UX for the MVP scope. Extra branding or advanced design work can be discussed as add-ons.",
  },
  {
    number: "05",
    question: "What if I need more features after the MVP is done?",
    answer:
      "No problem — we offer post-MVP support and can discuss a roadmap for v2.0 or a custom solution.",
  },
];

// WEB3 MVP FAQ
const web3Faqs: FAQType[] = [
  {
    number: "01",
    question: "Do you handle deployment?",
    answer:
      "Yes, we deploy your MVP to the cloud (AWS, Vercel, or similar) so you can start testing immediately.",
  },
  {
    number: "02",
    question: "What chains do you support?",
    answer:
      "We support EVM-compatible chains like Ethereum, Polygon, BNB Chain, and Rollux, plus custom integrations upon request.",
  },
  {
    number: "03",
    question: "Do you help with smart contract audits?",
    answer:
      "We provide basic testing and security best practices. For full audits, we partner with third-party security firms.",
  },
  {
    number: "04",
    question: "Can you integrate wallets like MetaMask?",
    answer:
      "Yes, Web3 MVPs include wallet integrations for user onboarding and transactions.",
  },
  {
    number: "05",
    question: "Do you help launch tokens or NFTs?",
    answer:
      "We can implement smart contracts and minting features. Tokenomics or large-scale launches require separate discussions.",
  },
  {
    number: "06",
    question: "How do you handle gas fees and scalability?",
    answer:
      "We design smart contracts with efficiency in mind and can integrate Layer 2 solutions if needed.",
  },
];

// CTO AS A SERVICE FAQ
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

export function MVPCTOFAQ() {
  const [activeTab, setActiveTab] = useState(0);

  const faqs = useMemo(() => {
    if (activeTab === 1) {
      return web3Faqs;
    }
    if (activeTab === 2) {
      return ctoFaqs;
    }
    return mvpFaqs;
  }, [activeTab]);

  return (
    <section className="relative z-50 bg-white py-16 lg:py-[200px]">
      <div className="mx-auto flex max-w-[1080px] flex-col items-start gap-0 px-4 xl:px-0">
        <div className="mb-10 flex w-full items-center justify-between">
          <h1 className="heading">FAQ</h1>
          <Tabs
            active={activeTab}
            setActive={setActiveTab}
            tabs={["MVP", "Web3 MVP", "CTO as a Service"]}
            variant="primary"
          />
        </div>

        <FAQ faqs={faqs} />
      </div>
    </section>
  );
}
