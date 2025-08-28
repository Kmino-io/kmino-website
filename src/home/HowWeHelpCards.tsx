import { useState } from "react";
import { Card } from "./Card";

const cards = [
  {
    title: "Product Build",
    description: "Cross‑functional squad delivering outcomes end‑to‑end.",
    fullDescription: "Full description for card 1.",
  },
  {
    title: "Card 2",
    description:
      "2–6 high-performance engineers integrated with your team and rituals.",
    fullDescription: "Full description for card 2.",
  },
  {
    title: "Card 3",
    description: "Short, high‑leverage strategy and delivery tune‑ups.",
    fullDescription: "Full description for card 3.",
  },
];

export function HowWeHelpCards() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="grid gap-9 md:grid-cols-2 lg:grid-cols-3">
      {cards.map((card, idx) => (
        <Card
          key={card.title}
          title={card.title}
          description={card.description}
          fullDescription={card.fullDescription}
          isExpanded={expandedIndex === idx}
          onExpand={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
        />
      ))}
    </div>
  );
}
