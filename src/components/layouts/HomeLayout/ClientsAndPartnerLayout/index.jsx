import React, { useRef } from "react";
import ClientsCarousel from "../../../ui/ClientsCarousel";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useAnimation } from "../../../../hooks/useAnimation";

export default function ClientsAndPartnerLayout() {
  const { fadeUp } = useAnimation();
  const containerRef = useRef(null);

  useGSAP(
    () => {
      fadeUp(".fade-up");
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="w-full py-20  relative overflow-hidden"
    >
      <div className="max-w-[680px] w-[40%] lg:max-w-[720px] xl:max-w-[766px] mx-auto flex flex-col items-center justify-center mb-20">
        <h2 className="text-2xl text-orange-500 CandP-title fade-up">
          //CLIENTS & PARTNER
        </h2>
        <p className="mt-4 text-3xl xl:text-4xl 2xl:text-5xl fade-up">
          Empowering Visionaries: Stories of Collaboration and Transformation
        </p>
        <p className="mt-8 text-2xl fade-up">
          Our clients are more than just collaborators—they are visionaries who
          inspire us to push the boundaries of design and innovation.
        </p>
      </div>
      <ClientsCarousel />
    </section>
  );
}
