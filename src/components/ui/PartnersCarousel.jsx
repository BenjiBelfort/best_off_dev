import { useState, useEffect, useRef } from "react";
import partnersData from "../../data/partners.json";

const shuffle = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const PartnersCarousel = () => {
  const [logos, setLogos] = useState([]);
  const [hoveredId, setHoveredId] = useState(null);
  const wrapperRef = useRef(null);
  const pausedRef = useRef(false);

  // Shuffle + duplication (only partners of rank "partenaire")
  useEffect(() => {
    // Filtrer les partenaires de rang "partenaire"
    const filtered = partnersData.filter((p) => p.rank === "partenaire");
    const base = shuffle(filtered);
    setLogos([...base, ...base]);
  }, []);

  // Animation JS
  useEffect(() => {
    if (!logos.length) return;
    const wrapper = wrapperRef.current;
    const totalScroll = wrapper.scrollWidth / 2;
    const speed = 20; // px/s
    let offset = 0;
    let lastTime = performance.now();
    let raf;

    // Position initiale au milieu pour boucler en douceur
    wrapper.style.transform = `translateX(${-totalScroll}px)`;

    const step = (now) => {
      const dt = now - lastTime;
      lastTime = now;
      if (!pausedRef.current) {
        offset += (speed * dt) / 1000;
        if (offset >= totalScroll) offset -= totalScroll;
        wrapper.style.transform = `translateX(${-totalScroll + offset}px)`;
      }
      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [logos]);

  if (!logos.length) return null;

  return (
    <div className="relative overflow-hidden w-full h-24">
      <div
        ref={wrapperRef}
        className="absolute left-0 top-0 flex items-center space-x-8"
        style={{ width: "200%" }}
      >
        {logos.map((p, idx) => {
          const isHovered = hoveredId === p.id;

          const boxClasses = [
            "group",
            "w-32 h-24 flex items-center justify-center flex-shrink-0",
            p.background === "white" && "bg-white p-1",
            "transition-transform duration-300",
            isHovered ? "scale-105" : "scale-100",
          ]
            .filter(Boolean)
            .join(" ");

          const Wrapper = p.website ? "a" : "div";
          const wrapperProps = p.website
            ? { href: p.website, target: "_blank", rel: "noopener noreferrer" }
            : {};

          return (
            <Wrapper
              key={`${p.id}-${idx}`}
              className={boxClasses}
              {...wrapperProps}
              onMouseEnter={() => {
                pausedRef.current = true;
                setHoveredId(p.id);
              }}
              onMouseLeave={() => {
                pausedRef.current = false;
                setHoveredId(null);
              }}
            >
              <img
                src={p.logo}
                alt={p.name}
                className="
                  w-24 h-22 object-contain
                  filter grayscale group-hover:grayscale-0
                "
              />
            </Wrapper>
          );
        })}
      </div>

      {/* Dégradés aux extrémités */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-stone-900 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-stone-900 to-transparent" />
    </div>
  );
};

export default PartnersCarousel;
