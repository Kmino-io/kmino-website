import { useState } from "react";
import { Card } from "./Card";

const cards = [
  {
    title: "Product Build",
    description: "Cross‑functional squad delivering outcomes end‑to‑end.",
    fullDescription:
      "When you want to outsource the entire product lifecycle, we take care of everything: research, design, development, deployment, and ongoing maintenance. Our cross-functional squads combine product, design, and engineering into a single streamlined unit, letting you focus on strategy and growth while we deliver a fully managed solution end-to-end.",
  },
  {
    title: "Senior Pod",
    description:
      "2–6 high-performance engineers integrated with your team and rituals.",
    fullDescription:
      "A Senior Pod is a small, high-performing squad of 2–6 engineers that plugs directly into your team. We adapt to your stack, tools, and rituals—daily standups, sprint planning, retros—so you get the benefits of staff augmentation without the overhead. Ideal for accelerating projects, unblocking pain points, or covering short-term capacity needs, with clarity and transparency from start to finish.",
  },
  {
    title: "Advisory Sprints",
    description: "Short, high‑leverage strategy and delivery tune‑ups.",
    fullDescription:
      "Sometimes the biggest gains come from sharper direction, not more hands. Advisory Sprints are focused, time-boxed engagements with our senior staff. We interview your team and customers, map pain points, and deliver clear, actionable recommendations. The result: fast, high-leverage guidance on product strategy, delivery, and process—similar in spirit to Google’s Design Sprint, but tailored to your unique challenges.",
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
