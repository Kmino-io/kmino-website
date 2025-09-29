import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useEffect, useRef, useState, type PropsWithChildren } from "react";
import { ArrowLeft, ArrowRight } from "iconsax-reactjs";
import { twMerge } from "tailwind-merge";
import shape1 from "~/assets/mvp/shape-1.png";
import shape2 from "~/assets/mvp/shape-2.png";
import shape3 from "~/assets/mvp/shape-3.png";
import shape4 from "~/assets/mvp/shape-4.png";
import shape5 from "~/assets/mvp/shape-5.png";
import shape6 from "~/assets/mvp/shape-6.png";

type CardProps = {
  color?: "primary" | "secondary";
  title: string;
  img: string;
} & PropsWithChildren;

function Card({ color = "primary", title, children, img }: CardProps) {
  return (
    <div
      className={twMerge(
        "h-full p-9",
        color === "primary" ? "bg-primary text-white" : "bg-[#F4F1D2]",
      )}
    >
      <div className="mb-6 flex flex-col items-center">
        <img
          src={img}
          loading="lazy"
          className="mb-6 max-h-[154px] w-fit"
          alt="Card icon"
        />
        <p className="text-xl leading-[33.6px] font-bold">{title}</p>
      </div>
      <p className="text-lg leading-[26px] font-normal">{children}</p>
    </div>
  );
}

const benefits = [
  {
    title: "Why choose Kmino instead of hiring an in-house developer?",
    img: shape1.src,
    color: "primary",
    content:
      "Hiring in-house takes time, overhead, and risk. With Kmino, you get a high-performance team from day one: engineers who already know how to work together, deliver clean code, and keep velocity without micromanagement. Plus, you own everything: code, infra, and documentation.",
  },
  {
    title: "How much visibility will I have over the development process?",
    img: shape2.src,
    color: "secondary",
    content:
      "Complete visibility. You’ll see progress in real time, have access to repos and infra, and stay in the loop through frequent updates and demos. We work as an embedded partner. You’ll have direct access to the team and regular check-ins.",
  },
  {
    title: "What happens if the project is delayed?",
    img: shape3.src,
    color: "primary",
    content:
      "If delivery slips, your price doesn’t increase. We continue working at no extra cost until the project is done.",
  },
  {
    title: "How do you guarantee code quality if developers change?",
    img: shape4.src,
    color: "secondary",
    content:
      "Our projects are delivered by KMINO, not just individual developers. Every engineer follows our standards and rulebook, meaning every MVP is built with the same quality, consistency, and care. Teams aren’t shuffled around, but even if developers change, the code remains clean, reviewed, tested, secure, and fully documented.",
  },
  {
    title: "Why not hire a big software house instead?",
    img: shape5.src,
    color: "primary",
    content:
      "Large software houses throw dozens of people at a project, often without shared culture or alignment. At Kmino, squads are small, focused, and fully aligned with your success. You won’t get lost in a corporate machine.",
  },
  {
    title: "What makes Kmino different from traditional outsourcing?",
    img: shape6.src,
    color: "secondary",
    content:
      "We’re not mercenaries. We look for long-term partnerships. If you succeed, we succeed. Our teams are motivated, accountable, and invested in your outcomes, not just billable hours.",
  },
];

export function KminoBenefits() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: false,
    slides: { perView: 3.2, spacing: 0 },
    breakpoints: {
      "(max-width: 1280px)": {
        slides: { perView: 2.2, spacing: 0 },
      },
      "(max-width: 768px)": {
        slides: { perView: 1.1, spacing: 24 },
      },
      "(max-width: 480px)": {
        slides: { perView: 1, spacing: 24 },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  const prev = () => {
    instanceRef.current?.prev();
  };

  const next = () => {
    instanceRef.current?.next();
  };

  return (
    <section className="my-[100px] px-4 lg:my-[200px]">
      <h1 className="heading mb-[60px]">
        Unlock faster launches, total control,
        <br /> and true partnership with Kmino
      </h1>

      <div className="mx-auto max-w-[1374px] gap-8 rounded-[30px] md:bg-[#EDEEE8]/50 md:py-10">
        <div ref={sliderRef} className="keen-slider mx-auto max-w-[1374px]">
          {benefits.map((b, idx) => (
            <div className="keen-slider__slide" key={idx}>
              <div
                className={twMerge(
                  "h-full md:ps-10",
                  idx === benefits.length - 1 && "md:pe-10",
                )}
              >
                <Card title={b.title} img={b.img} color={b.color as any}>
                  {b.content}
                </Card>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-9 flex justify-center gap-10">
          <button
            aria-label="Previous benefit"
            onClick={prev}
            className="bg-primary hover:bg-primary/80 flex cursor-pointer items-center justify-center rounded-full p-3 transition-colors disabled:opacity-50"
            disabled={currentSlide === 0}
          >
            <ArrowLeft size={24} />
          </button>

          <button
            aria-label="Next benefit"
            onClick={next}
            className="bg-primary hover:bg-primary/80 flex cursor-pointer items-center justify-center rounded-full p-3 transition-colors disabled:opacity-50"
            disabled={currentSlide === benefits.length - 3}
          >
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
