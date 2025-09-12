import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import superdapp from "~/assets/clients/superdapp.webp";
import luxy from "~/assets/clients/luxy.webp";
import lunos from "~/assets/clients/lunos.webp";
import pali from "~/assets/clients/pali.webp";
import syscoin from "~/assets/clients/syscoin.webp";
import pegasys from "~/assets/clients/pegasys.webp";

const clients = [
  { src: superdapp.src, alt: "SuperDapp Logo", width: 127 },
  { src: pali.src, alt: "Pali Logo", width: 172 },
  { src: syscoin.src, alt: "Syscoin Logo", width: 225 },
  { src: lunos.src, alt: "Lunos Logo", width: 237 },
  { src: luxy.src, alt: "Luxy Logo", width: 156 },
  { src: pegasys.src, alt: "Pegasys Logo", width: 190 },
];

const animation = { duration: 20000, easing: (t: number) => t };

export function ClientsSlider() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "performance",
    drag: false,
    slides: {
      perView: 5,
      spacing: 24,
    },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 2, spacing: 24 },
      },
      "(max-width: 480px)": {
        slides: { perView: 1.5, spacing: 16 },
      },
    },
  });

  return (
    <div ref={sliderRef} className="keen-slider">
      {clients.map((client, idx) => (
        <div
          className="keen-slider__slide flex items-center justify-center"
          key={idx}
        >
          <img
            src={client.src}
            alt={client.alt}
            width={client.width}
            loading="lazy"
            className="max-h-[67px]"
          />
        </div>
      ))}
    </div>
  );
}
