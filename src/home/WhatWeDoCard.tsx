type Props = {
  title: string;
  description: string;
  note?: string;
  color?: "primary" | "black";
};

export function WhatWeDoCard({ color, description, note, title }: Props) {
  return (
    <div
      className={`flex h-full min-h-[340px] flex-col border border-black p-7 text-white ${color === "primary" ? "bg-primary" : "bg-black"}`}
    >
      <h2 className="mb-6 text-[30px] leading-[1.1] font-semibold tracking-tight">
        {title}
      </h2>
      <p className="text-[18px] leading-[1.3] tracking-tight">{description}</p>

      {note ? (
        <div className="mt-auto flex items-start gap-3 pt-10 text-[18px] leading-[1.25] tracking-tight text-[#F4F1D2]">
          <span className="text-[24px] leading-none">✓</span>
          <span>{note}</span>
        </div>
      ) : null}
    </div>
  );
}
