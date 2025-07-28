
import { useEffect, useRef } from "react";

export default function KundenlogoSlider() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;

    const autoScroll = () => {
      if (slider) {
        scrollAmount += 1;
        if (scrollAmount >= slider.scrollWidth / 2) {
          scrollAmount = 0;
        }
        slider.scrollLeft = scrollAmount;
      }
    };

    const interval = setInterval(autoScroll, 20);
    return () => clearInterval(interval);
  }, []);

  const logos = [
    {
      alt: "Vulkan",
      src: "https://github.com/stone1971grey/projekt-bilder/blob/main/Vulkan.png?raw=true"
    },
    {
      alt: "Conect Chem",
      src: "https://github.com/stone1971grey/projekt-bilder/blob/main/conect_chem.png?raw=true"
    },
    {
      alt: "FH Kärnten",
      src: "https://github.com/stone1971grey/projekt-bilder/blob/main/fh_kaernten.png?raw=true"
    },
    {
      alt: "Universität Osnabrück",
      src: "https://github.com/stone1971grey/projekt-bilder/blob/main/uni_osna.png?raw=true"
    },
    {
      alt: "Minibea",
      src: "https://github.com/stone1971grey/projekt-bilder/blob/main/minibea.png?raw=true"
    },
    {
      alt: "IHK Leipzig",
      src: "https://github.com/stone1971grey/projekt-bilder/blob/main/ihk_leip.png?raw=true"
    },
    {
      alt: "Feintool",
      src: "https://github.com/stone1971grey/projekt-bilder/blob/main/feintool.png?raw=true"
    },
    {
      alt: "DOSB",
      src: "https://github.com/stone1971grey/projekt-bilder/blob/main/dosb.png?raw=true"
    },
    {
      alt: "Charité Berlin",
      src: "https://github.com/stone1971grey/projekt-bilder/blob/main/charite.png?raw=true"
    },
    {
      alt: "VetMed Wien",
      src: "https://github.com/stone1971grey/projekt-bilder/blob/main/vetmed_wien.png?raw=true"
    }
  ];

  return (
    <div className="bg-gray-100 py-8 w-full overflow-hidden">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">SPTools im Einsatz bei Unternehmen und Bildungseinrichtungen</h2>
      <div
        ref={sliderRef}
        className="flex w-max animate-slide whitespace-nowrap overflow-x-scroll no-scrollbar"
      >
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-64 h-32 flex items-center justify-center mx-4 bg-white rounded-xl shadow-lg transition-transform duration-500 hover:scale-105"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="max-h-20 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
