import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

export default function NotFoundPage() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.from(".slidein-left-number", { duration: 1.5, x: -100, opacity: 0 }, 0)
        .from(".slidein-right-number", { duration: 1.5, x: 100, opacity: 0 }, 0)
        .from(
          ".slidein-middle-number",
          { duration: 1.5, scale: 0.5, opacity: 0 },
          0.2,
        );
      tl.from(
        ".animated-text",
        {
          duration: 2,
          y: 100,
          opacity: 0,
          stagger: 0.2,
        },
        "-=1",
      );

      gsap.to(".animated-number", {
        y: -30,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          each: 0.2,
          from: "center",
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <div className="w-full h-full relative " ref={containerRef}>
      <div className="w-[80%] mx-auto mt-48 flex flex-col items-center justify-center gap-10">
        <div className="flex items-center justify-center gap-2">
          <span className="text-[200px] animated-number slidein-left-number">
            4
          </span>
          <span className="text-[200px] animated-number slidein-middle-number">
            0
          </span>
          <span className="text-[200px] animated-number slidein-right-number">
            4
          </span>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-5xl font-bold animated-text">Page not found</p>
          <p className="text-xl animated-text">
            Oops! Looks like you're lost in the digital space
          </p>
        </div>
      </div>
    </div>
  );
}
