import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { useAnimation } from "../../../../hooks/useAnimation";
import { studioStat } from "../../../../constants";

export default function ExperienceLayout() {
  const { counterAnimate, fadeUp } = useAnimation();
  const containerRef = useRef(null);

  useGSAP(
    () => {
      fadeUp(".fade-up");
      counterAnimate(".counter-animate");
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef} className="relative w-full h-full">
      <div className="w-[80%] mx-auto flex">
        <div className="w-full">
          <div className="w-[40%] max-w-[680px] w-full lg:max-w-[720px] xl:max-w-[766px]">
            <h2 className="text-2xl text-orange-500 fade-up">//EXPERIENCE</h2>
            <p className="mt-4 text-3xl xl:text-4xl 2xl:text-5xl fade-up">
              Located in the United States, our studio is dedicated to crafting
              robust and renowned brands.
            </p>
            <p className="mt-8 text-2xl fade-up">
              We are a dedicated bunch of professionals with many years of
              experience within the creative industry.
            </p>
          </div>
          <div className="w-full">
            {studioStat.map((info, idx) => (
              <div className="fade-up flex flex-col mt-20" key={idx}>
                <div className="flex justify-between items-end w-full pb-4">
                  <p className="texl-xl lg:text-2xl fade-up text-orange-500 font-bold uppercase">
                    /{info.label}
                  </p>
                  <div className="text-[80px] sm:text-[120px] fade-up xl:text-[250px] 2xl:text-[300px] leading-[0.8] font-bold">
                    <span>+</span>
                    <span className="counter-animate">{info.value}</span>
                  </div>
                </div>
                <div className="bg-zinc-200 h-[1px] w-full fade-up"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
