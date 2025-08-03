type Props = {
  title: string;
  description: string;
  color?: "primary" | "black";
};

export function WhatWeDoCard({ color, description, title }: Props) {
  return (
    <div
      className={`h-full border border-black p-7 text-white ${color === "primary" ? "bg-primary" : "bg-black"}`}
    >
      <h2 className="mb-6 text-xl leading-[1.3] font-semibold">{title}</h2>
      <p className="leading-[1.3]">{description}</p>
    </div>
  );
}
