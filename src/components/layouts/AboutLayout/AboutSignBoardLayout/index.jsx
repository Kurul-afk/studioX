import React, { useRef } from "react";
import { aboutCard } from "../../../../constants";
import { useAnimation } from "../../../../hooks/useAnimation";
import { useGSAP } from "@gsap/react";

export default function AboutSignBoardLayout() {
  const { fadeUp } = useAnimation();
  const containerRef = useRef(null);

  useGSAP(
    () => {
      fadeUp(".fade-up");
    },
    { scope: containerRef },
  );

  return (
    <>
      <section ref={containerRef} className="w-full h-full">
        <h2 className="text-5xl xl:text-7xl 2xl:text-8xl mb-5  fade-up">
          About us
        </h2>
        <p className="text-xl lg:text-2xl mb-5 fade-up">
          We create innovative digital solutions that change industries and
          inspire people around the world
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 fade-up">
          {aboutCard.map((card) => (
            <>
              <div className="w-full max-w-[660px] flex  flex-col items-center px-5 py-10 rounded-2xl border-gray-400 border-2 bg-gray-300/50">
                <h3 className="text-6xl font-bold mb-5 bg-gradient-to-r from-orange-500 to-purple-500 text-transparent bg-clip-text">
                  {card.num}
                </h3>
                <p className="text-black/80">{card.title}</p>
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  );
}
