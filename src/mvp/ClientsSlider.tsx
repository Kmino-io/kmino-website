import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import superdapp from "~/assets/clients/superdapp.webp";
import luxy from "~/assets/clients/luxy.webp";
import lunos from "~/assets/clients/lunos.webp";
import pali from "~/assets/clients/pali.webp";
import syscoin from "~/assets/clients/syscoin.webp";

const clients = [
  { src: superdapp.src, alt: "SuperDapp Logo" },
  { src: pali.src, alt: "Pali Logo" },
  { src: syscoin.src, alt: "Syscoin Logo" },
  { src: lunos.src, alt: "Lunos Logo" },
  { src: luxy.src, alt: "Luxy Logo" },
];

const animation = { duration: 10000, easing: (t: number) => t };

export function ClientsSlider() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "performance",
    drag: false,
    slides: {
      perView: 5,
      spacing: 24,
      number: 6,
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
        <div className="keen-slider__slide flex items-center" key={idx}>
          <img src={client.src} alt={client.alt} loading="lazy" />
        </div>
      ))}
    </div>
  );
}
