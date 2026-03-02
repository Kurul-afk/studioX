import React, { useRef } from "react";
import { aboutStory } from "../../../../constants";
import { useAnimation } from "../../../../hooks/useAnimation";
import { useGSAP } from "@gsap/react";

export default function AboutOurWayLayout() {
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
      <section ref={containerRef} className="max-w-4xl w-full h-full">
        <h2 className="text-center text-5xl xl:text-7xl 2xl:text-8xl mb-16 fade-up">
          Our way
        </h2>
        <div className="flex flex-col gap-8 fade-up">
          {aboutStory.map((value, idx) => (
            <div
              key={idx}
              className="w-full p-8 rounded-2xl border-2 border-gray-200 h-full shadow-sm hover:shadow-md transition-all"
            >
              <div className="text-orange-500 text-2xl font-bold mb-2.5">
                {value.date}
              </div>
              <h4 className="text-2xl font-bold mb-0.5">{value.title}</h4>
              <p className="text-gray-700">{value.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
