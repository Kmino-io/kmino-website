import type { ReactNode } from "react";
import type { MotionValue } from "framer-motion";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

type AnimatedStrokeCardProps = {
  children: ReactNode;
  className: string;
  progress: MotionValue<number>;
  drawTop?: boolean;
  drawRight?: boolean;
  drawBottom?: boolean;
  drawLeft?: boolean;
  leftRange?: [number, number];
  rightRange?: [number, number];
  leftProgress?: MotionValue<number>;
  rightProgress?: MotionValue<number>;
};

function AnimatedStrokeCard({
  children,
  className,
  progress,
  drawTop = true,
  drawRight = true,
  drawBottom = true,
  drawLeft = true,
  leftRange = [0.75, 1],
  rightRange = [0.25, 0.5],
  leftProgress,
  rightProgress,
}: AnimatedStrokeCardProps) {
  const smoothProgress = useSpring(progress, {
    stiffness: 140,
    damping: 26,
    mass: 0.35,
  });
  const smoothLeftProgress = useSpring(leftProgress ?? progress, {
    stiffness: 140,
    damping: 26,
    mass: 0.35,
  });
  const smoothRightProgress = useSpring(rightProgress ?? progress, {
    stiffness: 140,
    damping: 26,
    mass: 0.35,
  });
  const topWidth = useTransform(smoothProgress, [0, 0.25], ["0%", "100%"]);
  const rightHeight = useTransform(smoothRightProgress, rightRange, [
    "0%",
    "100%",
  ]);
  const bottomWidth = useTransform(smoothProgress, [0.5, 0.75], ["0%", "100%"]);
  const leftHeight = useTransform(smoothLeftProgress, leftRange, [
    "0%",
    "100%",
  ]);

  return (
    <div className={`${className} overflow-hidden`}>
      {drawTop ? (
        <motion.div
          className="bg-primary pointer-events-none absolute top-0 left-0 z-10 h-[2px]"
          style={{ width: topWidth }}
        />
      ) : null}

      {drawRight ? (
        <motion.div
          className="bg-primary pointer-events-none absolute top-0 right-0 z-10 w-[2px]"
          style={{ height: rightHeight }}
        />
      ) : null}

      {drawBottom ? (
        <motion.div
          className="bg-primary pointer-events-none absolute right-0 bottom-0 z-10 h-[2px]"
          style={{ width: bottomWidth }}
        />
      ) : null}

      {drawLeft ? (
        <motion.div
          className="bg-primary pointer-events-none absolute bottom-0 left-0 z-10 w-[2px]"
          style={{ height: leftHeight }}
        />
      ) : null}

      <div className="relative z-0">{children}</div>
    </div>
  );
}

export function WhatWeSee() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 78%", "end 30%"],
  });
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.12], [0, 1]);
  const card1Progress = useTransform(scrollYProgress, [0.06, 0.34], [0, 1], {
    clamp: true,
  });
  const card2Progress = useTransform(scrollYProgress, [0.22, 0.56], [0, 1], {
    clamp: true,
  });
  const card3Progress = useTransform(scrollYProgress, [0.34, 0.7], [0, 1], {
    clamp: true,
  });
  const lowerOuterEdgesProgress = useTransform(
    scrollYProgress,
    [0.42, 0.62],
    [0, 1],
    { clamp: true },
  );

  return (
    <motion.div
      ref={sectionRef}
      className="mx-auto flex max-w-[1240px] flex-col items-center gap-[100px] py-[100px] lg:py-[180px]"
      initial={{ opacity: 0 }}
      style={{ opacity: sectionOpacity }}
    >
      <h1 className="font-alt text-center text-[36px] tracking-tight lg:text-[43px]">
        Here's what we see <br />
        happening right now:
      </h1>

      <div id="cards" className="w-full px-4 lg:px-0">
        <AnimatedStrokeCard
          className="relative"
          progress={card1Progress}
          drawTop
          drawRight
          drawBottom
          drawLeft
        >
          <div
            id="card1"
            className="flex flex-col gap-8 px-6 pt-6 pb-6 lg:px-10 lg:pt-[52px] lg:pb-[50px]"
          >
            <span className="font-alt text-primary text-xl lg:text-3xl">
              Problem 1 — The false promise
            </span>
            <p className="leading-[130%] tracking-tight lg:text-[22px]">
              "We don't need developers anymore, we have AI agents."
              <br />
              <br />
              We've heard this from dozens of founders.
              <br />
              <br />
              And we've watched those same founders, six months later, sitting
              on a pile of code nobody understands, features that break each
              other, and a product that moves slower than when they started.
            </p>
          </div>
        </AnimatedStrokeCard>

        <div className="flex flex-col justify-between lg:flex-row">
          <AnimatedStrokeCard
            className="relative flex-1"
            progress={card2Progress}
            drawTop={false}
            drawRight
            drawBottom
            drawLeft
            leftRange={[0.25, 0.5]}
            leftProgress={lowerOuterEdgesProgress}
          >
            <div
              id="card2"
              className="flex flex-col gap-8 px-6 py-6 lg:px-10 lg:py-[52px]"
            >
              <span className="font-alt text-primary text-xl lg:text-3xl">
                Problem 2 — The speed trap
              </span>
              <p className="leading-[130%] tracking-tight lg:text-[22px]">
                AI doesn't create technical debt.
                <br />
                <br />
                Unsupervised AI does.{" "}
                <mark className="bg-[#F4F1D2]">
                  When there's no one asking why before how, you ship fast in
                  the wrong direction.
                </mark>
                <br />
                <br />
                Speed without judgment isn't velocity, it's drift.
              </p>
            </div>
          </AnimatedStrokeCard>

          <AnimatedStrokeCard
            className="relative flex-1"
            progress={card3Progress}
            drawTop={false}
            drawRight
            drawBottom
            drawLeft={false}
            rightRange={[0.25, 0.5]}
            rightProgress={lowerOuterEdgesProgress}
          >
            <div
              id="card3"
              className="flex flex-col gap-8 px-6 py-6 lg:px-10 lg:py-[52px]"
            >
              <div className="bg-primary pointer-events-none absolute top-0 bottom-0 left-0 z-10 w-[2px] lg:hidden" />
              <span className="font-alt text-primary text-xl lg:text-3xl">
                Problem 3 — The expertise gap
              </span>
              <p className="leading-[130%] tracking-tight lg:text-[22px]">
                You can find workout routines online. You can also hurt your
                back.
                <br />
                <br />
                The difference between following tutorials and having a coach
                isn't effort: it's knowing what your body actually needs.
                Building software is the same.{" "}
                <mark className="bg-[#F4F1D2]">
                  AI gives everyone access to tools. It doesn't give everyone
                  the judgment to use them well.
                </mark>
              </p>
            </div>
          </AnimatedStrokeCard>
        </div>
      </div>
    </motion.div>
  );
}
