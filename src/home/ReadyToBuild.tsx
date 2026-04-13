import clientPics from "../assets/client-pics.webp";
import { Stamp } from "../components/Stamp";
import CTA from "../components/CTA";

export function ReadyToBuild() {
  return (
    <section className="sticky top-0 z-10 h-screen lg:-top-14">
      {/* Curved top edge SVG — same shape as footer, filled with primary */}
      <svg
        className="relative z-10 block w-full translate-y-1"
        viewBox="0 0 1980 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ height: "clamp(80px, 10vw, 200px)" }}
      >
        <path
          d="M0 200V171.573C0 164.924 0 161.6 0.975 158.449C1.84 155.655 3.27 152.969 5.21 150.479C7.4 147.673 10.48 145.217 16.62 140.306L136.26 44.668C143.24 39.089 146.73 36.299 150.9 34.299C154.6 32.525 158.68 31.213 162.97 30.417C167.81 29.518 172.99 29.518 183.36 29.518H374.72C378.92 29.518 381.03 29.518 383.1 29.677C384.95 29.818 386.78 30.053 388.58 30.38C390.6 30.749 392.58 31.272 396.53 32.32L594.53 84.849C602.49 86.961 606.47 88.017 610.56 88.444C614.2 88.823 617.89 88.834 621.52 88.478C625.62 88.075 629.62 87.042 637.62 84.976L832.24 34.696C839.67 32.774 843.39 31.814 847.21 31.4C850.6 31.034 854.04 30.986 857.44 31.26C861.28 31.569 865.04 32.427 872.57 34.143L1036.31 71.47C1042.96 72.986 1046.29 73.743 1049.68 74.07C1052.69 74.361 1055.74 74.401 1058.77 74.187C1062.17 73.946 1065.53 73.273 1072.24 71.929L1422.93 1.662C1426.03 1.04 1427.59 0.729 1429.16 0.511C1430.56 0.317 1431.98 0.177 1433.4 0.094C1435 0 1436.6 0 1439.81 0H1796.52C1799.89 0 1801.57 0 1803.24 0.103C1804.72 0.194 1806.2 0.345 1807.66 0.557C1809.31 0.795 1810.92 1.134 1814.16 1.813L1934.87 27.14C1950.04 30.323 1957.63 31.914 1963.58 35.221C1968.71 38.074 1973.07 42.07 1975.72 46.357C1978.8 51.326 1979.2 56.887 1980 68.007V200H0Z"
          fill="currentColor"
          className="text-primary"
        />
      </svg>

      {/* Main content */}
      <div className="bg-primary relative h-full pt-8 pb-20 lg:pt-16 lg:pb-28">
        {/* Stamp — top right */}
        <div className="absolute -top-6 right-6 z-20 lg:right-16 xl:right-24">
          <Stamp className="rotating h-20 w-20 text-black lg:h-24 lg:w-24" />
        </div>

        <div className="container mx-auto flex flex-col items-center text-center">
          {/* Client pics */}
          <div className="mb-4 flex items-center gap-3">
            <img src={clientPics.src} alt="Our team" className="h-10 w-auto" />
            <span className="text-sm font-medium text-white/90">
              We're taking new clients
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-alt mb-4 max-w-[700px] text-[32px] leading-[1.15] tracking-tight text-white lg:text-[52px]">
            Ready to build something worth keeping?
          </h2>

          {/* Subtext */}
          <p className="mb-10 max-w-[640px] text-lg leading-[1.4] text-white/80 lg:text-xl">
            30 minutes. No pitch deck. Just an honest conversation about what
            you're building and whether we're the right fit.
          </p>

          {/* CTAs */}
          <div className="mb-10 flex flex-wrap items-center justify-center gap-4">
            <CTA href="https://calendar.app.google/bptKpG7DXXLZve3r5">
              Yes, book my fit call
            </CTA>

            <a
              href="mailto:contact@kmino.io"
              className="rounded-full border border-white px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white hover:text-black"
            >
              Or email us directly
            </a>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/80 lg:gap-10">
            <span className="flex items-center gap-2">
              <svg
                className="h-4 w-4"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.3 4.3L6 11.6L2.7 8.3"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              No commitment
            </span>
            <span className="flex items-center gap-2">
              <svg
                className="h-4 w-4"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.3 4.3L6 11.6L2.7 8.3"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Scoped plan in 48 hours
            </span>
            <span className="flex items-center gap-2">
              <svg
                className="h-4 w-4"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.3 4.3L6 11.6L2.7 8.3"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              You own all code &amp; IP
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
