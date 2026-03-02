import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import { useAnimation } from "../../../../hooks/useAnimation";

export default function SignBoardLayout() {
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
      className="flex flex-col items-center md:items-end md:justify-between w-[80%] mx-auto mt-48 md:flex-row md:gap-0"
    >
      <h1 className="fade-up-text mb-16 md:mb-0 text-3xl sm:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl 2xl:w-[80%] tracking-tight w-full text-center md:text-start  md:max-w-[340px] lg:max-w-[510px] xl:max-w-[660px] 2xl:max-w-[900px]">
        We Craft Human-Centric Digital Products.
      </h1>
      <p className="fade-up-text text-base lg:text-lg xl:text-xl w-full text-center md:text-start md:max-w-[260px] lg:max-w-[290px] xl:max-w-[320px] md:ml-10 tracking-wide ">
        Located in the United States, our studio is dedicated to crafting robust
        and renowned brands.
      </p>
    </section>
  );
}
