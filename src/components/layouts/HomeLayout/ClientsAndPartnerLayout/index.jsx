import React, { useRef } from "react";
import ClientsCarousel from "../../../ui/ClientsCarousel";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function ClientsAndPartnerLayout() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".CandP-title", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        stagger: 0.4,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
      });
    },
    { scope: containerRef.current },
  );

  return (
    <section
      ref={containerRef}
      className="w-full py-20  relative overflow-hidden"
    >
      <div className="max-w-[680px] w-[40%] mx-auto flex flex-col items-center justify-center mb-20">
        <h2 className="text-2xl text-orange-500 CandP-title">
          //CLIENTS & PARTNER
        </h2>
        <p className="mt-4 text-5xl CandP-title">
          Empowering Visionaries: Stories of Collaboration and Transformation
        </p>
        <p className="mt-8 text-2xl CandP-title">
          Our clients are more than just collaborators—they are visionaries who
          inspire us to push the boundaries of design and innovation.
        </p>
      </div>
      <ClientsCarousel />
    </section>
  );
}
