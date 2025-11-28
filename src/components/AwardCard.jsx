// components/AwardCard.jsx
import { useState, useRef, useEffect } from "react";

export default function AwardCard({ award }) {
  const { imgs, title, event, date, detail, link } = award; // <-- include link
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);

  const imgSize = 96; // increased image size from 64px to 96px

  // Get the card width to calculate spacing
  useEffect(() => {
    if (cardRef.current) {
      setCardWidth(cardRef.current.offsetWidth - 12); // subtract padding
    }
    const handleResize = () => {
      if (cardRef.current) {
        setCardWidth(cardRef.current.offsetWidth - 12);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const spacing =
    imgs && imgs.length > 1
      ? Math.min(imgSize + 8, (cardWidth - imgSize) / (imgs.length - 1))
      : 0;

  return (
    <a
      href={link || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <div
        ref={cardRef}
        className="p-6 text-center transition-transform duration-300 cursor-pointer glassmorphism rounded-2xl hover:scale-105"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {imgs && imgs.length > 0 && (
          <div className="relative w-full mx-auto mb-6 h-28">
            {imgs.map((img, idx) => {
              const stackedOffset = idx * 6;
              const transform = isHovered
                ? `translate(${idx * spacing}px, 0px)`
                : `translate(${stackedOffset}px, ${stackedOffset}px)`;
              return (
                <img
                  key={idx}
                  src={img}
                  alt={`${title} ${idx + 1}`}
                  className="absolute top-0 left-0 object-cover transition-transform duration-500 border-2 rounded border-cyber-blue"
                  style={{
                    width: imgSize,
                    height: imgSize,
                    zIndex: imgs.length - idx,
                    transform,
                  }}
                />
              );
            })}
          </div>
        )}

        <h3 className="mb-2 text-lg font-bold text-cyber-purple">{title}</h3>
        <p className="mb-1 text-sm text-gray-400">{event}</p>
        <p className="mb-2 text-sm text-gray-400">{date}</p>
        {detail && <p className="text-xs text-gray-500">{detail}</p>}
      </div>
    </a>
  );
}
