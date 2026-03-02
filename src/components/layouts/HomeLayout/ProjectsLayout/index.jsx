import React, { use, useRef } from "react";
import ProjectCarousel from "../../../ui/ProjectCarousel";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useAnimation } from "../../../../hooks/useAnimation";

export default function ProjectsLayout() {
  const containerRef = useRef(null);
  const { fadeUp } = useAnimation();

  useGSAP(
    () => {
      fadeUp(".fade-up-text");
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="flex flex-col justify-between w-full mt-40"
    >
      <div className="flex justify-between items-end md:items-center mb-12 mx-auto w-[80%]">
        <h2 className="fade-up-text text-[28px] md:text-[32px] lg:text-[40px]">
          Projects
        </h2>
        <p className="fade-up-text invisible sm:visible sm:text-sm lg:text-xl">
          More +500
        </p>
      </div>
      <ProjectCarousel />
    </section>
  );
}
