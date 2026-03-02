import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { servicesInfo } from "../../../../constants";
import { useAnimation } from "../../../../hooks/useAnimation";

export default function ServicesLayout() {
  const { fadeUp } = useAnimation();
  const containerRef = useRef(null);

  useGSAP(
    () => {
      fadeUp(".fade-up");
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef} className="relative w-full h-full flex mt-24">
      <div className="w-[80%] flex mx-auto">
        <div className="w-full">
          <div className="w-[40%] max-w-[680px] w-full lg:max-w-[720px] xl:max-w-[766px]">
            <h2 className="text-2xl text-orange-500 fade-up">//SERVICES</h2>
            <p className="mt-4 text-3xl xl:text-4xl 2xl:text-5xl fade-up">
              By harnessing both creativity and technical know-how, we turn
              visions into actuality!
            </p>
          </div>
          <div className="w-full 2xl:max-w-[1200px] 2xl:ml-auto flex justify-center 2xl:justify-start flex-wrap gap-10 mt-40">
            {servicesInfo.map((service, idx) => (
              <>
                <div
                  className="fade-up w-[320px] 2xl:w-[350px] h-[410px]"
                  key={idx}
                >
                  <p className="text-2xl text-zinc-700 font-bold">/{idx + 1}</p>
                  <h3 className="text-3xl xl:text-4xl 2xl:text-5xl mt-2 font-bold">
                    {service.title}
                  </h3>
                  <h4 className="text-xl mt-4 text-zinc-600">
                    {service.subtitle}
                  </h4>
                  <p className="mt-4 text-zinc-700">{service.description}</p>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
