import { FAQ, type FAQType } from "~/components/FAQ.tsx";
import { useMemo, useState } from "react";
import { Tabs } from "~/components/Tabs";

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
  {
    number: "06",
    question: "Do you handle deployment?",
    answer:
      "Yes, we deploy your MVP to the cloud (AWS, Vercel, or similar) so you can start testing immediately.",
  },
];

const web3Faqs: FAQType[] = [
  {
    number: "01",
    question: "What chains do you support?",
    answer:
      "We support EVM-compatible chains like Ethereum, Polygon, BNB Chain, and Rollux, plus custom integrations upon request.",
  },
  {
    number: "02",
    question: "Do you help with smart contract audits?",
    answer:
      "We provide basic testing and security best practices. For full audits, we partner with third-party security firms.",
  },
  {
    number: "03",
    question: "Can you integrate wallets like MetaMask?",
    answer:
      "Yes, Web3 MVPs include wallet integrations for user onboarding and transactions.",
  },
  {
    number: "04",
    question: "Do you help launch tokens or NFTs?",
    answer:
      "We can implement smart contracts and minting features. Tokenomics or large-scale launches require separate discussions.",
  },
  {
    number: "05",
    question: "How do you handle gas fees and scalability?",
    answer:
      "We design smart contracts with efficiency in mind and can integrate Layer 2 solutions if needed.",
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
          <Tabs
            active={activeTab}
            setActive={setActiveTab}
            tabs={["MVP", "Web3 MVP"]}
            variant="primary"
          />
        </div>

        <FAQ faqs={faqs} />
      </div>
    </section>
  );
}
