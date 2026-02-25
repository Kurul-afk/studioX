import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const studioStat = [
  {
    label: "years of experience",
    value: 17,
  },
  {
    label: "team members",
    value: 254,
  },
  {
    label: "expert in tech",
    value: 17,
  },
  {
    label: "Customer Satisfaction",
    value: 99,
  },
];

export default function ExperienceLayout() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          once: true,
        },
      });

      tl.from(".experience-title", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        stagger: 0.4,
        force3D: true,
      });
      tl.from(
        ".stat-row",
        {
          y: 50,
          opacity: 0,
          duration: 1.5,
          ease: "power2.out",
          stagger: 0.4,
        },
        "-=0.5",
      );
      tl.from(
        ".stat-num",
        {
          textContent: 0,
          duration: 2.5,
          ease: "power2.out",
          snap: { textContent: 1 },
          stagger: 0.1,
        },
        "-=0.5",
      );
    },
    { scope: containerRef.current },
  );

  return (
    <section ref={containerRef} className="relative w-full h-full">
      <div className="w-[80%] mx-auto flex">
        <div className="w-full">
          <div className="w-[40%] max-w-[766px]">
            <h2 className="text-2xl text-orange-500 experience-title">
              //EXPERIENCE
            </h2>
            <p className="mt-4 text-5xl experience-title">
              Located in the United States, our studio is dedicated to crafting
              robust and renowned brands.
            </p>
            <p className="mt-8 text-2xl experience-title">
              We are a dedicated bunch of professionals with many years of
              experience within the creative industry.
            </p>
          </div>
          <div className="w-full">
            {studioStat.map((info, idx) => (
              <div className="stat-row flex flex-col mt-20" key={idx}>
                <div className="flex justify-between items-end w-full pb-4">
                  <p className="text-2xl text-orange-500 font-bold uppercase">
                    /{info.label}
                  </p>
                  <div className="text-[120px] md:text-[250px] lg:text-[300px] leading-[0.8] font-bold">
                    <span>+</span>
                    <span className="stat-num">{info.value}</span>
                  </div>
                </div>
                <div className="bg-zinc-200 h-[1px] w-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
