import type { SVGProps } from "react";
import { motion } from "framer-motion";

export const AnimatedDivider = (props: SVGProps<SVGSVGElement>) => {
  return (
    <div className="relative hidden w-full flex-col overflow-hidden md:flex">
      <motion.div
        className="bg-primary absolute top-0 right-0"
        style={{ width: "200px", height: 1 }}
        animate={{ right: [0, "95%", 0] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 10,
          ease: "easeInOut",
        }}
      />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        preserveAspectRatio="none"
        height={103}
        fill="none"
        viewBox="0 0 1440 103"
        {...props}
      >
        <g clipPath="url(#a)">
          <path
            stroke="#EDEEE8"
            strokeMiterlimit={10}
            strokeWidth={5}
            d="m-175.249 220.456 286.307-110.832 38.903-15.044L498.207-40.347l108.835 630.323-22.684 56.767-308.285-173.006-167.483-94.026-283.839-159.255Z"
          />
          <path
            stroke="#EDEEE8"
            strokeMiterlimit={10}
            strokeWidth={5}
            d="m108.59 379.711 2.468-270.088 50.069-19.392 94.848 316.395 20.097 67.11 92.498 51.832 211.557-91.087 3.291 19.275 222.957 8.58 285.015 103.663h151.5l18.1-106.249 106.25-73.81 14.22-203.33v-297.942l-70.87-143.272-62.53-126.229-106.13 86.856 90.26 89.677 124.7 123.996-128.93 145.27-86.03 96.963-13.05-42.782-77.69 9.168-19.39-38.903 189.11-141.156-150.32-186.523-54.3 25.857 71.22 103.663 11.64 10.343 195.57-148.913"
          />
          <path
            stroke="#EDEEE8"
            strokeMiterlimit={10}
            strokeWidth={5}
            d="m1016.29-216.409-120.473 95.906L1031.8 85.413m-511.967-.003 166.073-23.27-1.998-139.864m-99.55 724.468 62.88 46.307 110.715 81.567 76.513-98.256-116.944-75.103-20.568-135.749-61.822-219.667 50.774-183.702m217.081 191.224v-72.869H849.51V56.265h-39.138v34.319L915.68 98.81v95.083l225.07 10.461"
          />
          <path
            stroke="#EDEEE8"
            strokeMiterlimit={10}
            strokeWidth={5}
            d="M726.219 252.07v-85.68h9.05l3.526-87.444-52.889-3.643m74.515 179.12v-82.155h11.87v-27.62H793.8l2.468-59.236V56.265l-57.473 22.683m-464.25-28.092 54.77 24.447 178.06-61.94m712.945 42.901-121.17-158.667M1281.56.553 1210.1-65.5M1099.15 35.108l51.48 62.88 20.45-28.795 27.26 25.151"
          />
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h1440v103H0z" />
          </clipPath>
        </defs>
      </svg>

      <motion.div
        className="bg-primary absolute right-0 bottom-0"
        style={{ width: "200px", height: 1 }}
        animate={{ left: [0, "95%", 0] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 10,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};
