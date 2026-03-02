import React, { useRef } from "react";
import { useAnimation } from "../../../../hooks/useAnimation";
import { useGSAP } from "@gsap/react";

export default function AboutMissionLayout() {
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
      <section ref={containerRef} className="w-full">
        <div className="bg-gradient-to-r from bg-orange-400 via-indigo-400 to-purple-400 px-10 py-12 rounded-2xl fade-up">
          <h3 className=" text-white text-4xl lg:text-6xl font-bold mb-5">
            Our mission
          </h3>
          <p className="text-white text-xl lg:text-2xl">
            Create products that make people's lives better through technology
            and design
          </p>
        </div>
      </section>
    </>
  );
}
