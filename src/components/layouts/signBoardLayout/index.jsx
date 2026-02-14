import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function SignBoardLayout() {
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
      className="flex items-end justify-between w-[80%] mx-auto mt-48"
    >
      <h1 className="animated-text text-9xl w-[80%] tracking-tight max-w-[900px]">
        We Craft Human-Centric Digital Products.
      </h1>
      <p className="animated-text text-xl w-[20%] max-w-[320px] ml-10 tracking-wide">
        Located in the United States, our studio is dedicated to crafting robust
        and renowned brands.
      </p>
    </div>
  );
}
