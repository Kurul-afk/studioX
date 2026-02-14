import React, { useRef } from "react";
import ProjectCarousel from "../../ui/ProjectCarousel";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsLayout() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.from(".animated-text", {
        scrollTrigger: ".animated-text",
        duration: 2.5,
        y: 300,
        opacity: 0,
        ease: "power4.out",
        stagger: 0.2,
      });
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="flex flex-col justify-between w-full mt-40"
    >
      <div className="flex justify-between items-center mb-12 mx-auto w-[80%]">
        <h2 className="animated-text text-[40px]">Projects</h2>
        <p className="animated-text text-xl">More +500</p>
      </div>
      <ProjectCarousel />
    </div>
  );
}
