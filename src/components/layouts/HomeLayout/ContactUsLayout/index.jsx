import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ContactForm from "../../../ui/ContactForm";
import { useAnimation } from "../../../../hooks/useAnimation";

export default function ContactUsLayout() {
  const { fadeUp } = useAnimation();
  const containerRef = useRef(null);

  useGSAP(
    () => {
      fadeUp(".fade-up");
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef} className="w-full h-full">
      <div className="flex w-[80%] mx-auto py-20">
        <div className="w-full flex items-center justify-center">
          <div className="w-[60%] max-w-[990px]">
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold mb-8 fade-up">
              Contact us
            </h2>
            <p className="text-xl lg:text-2xl mb-12 fade-up">
              Our clients are more than just collaborators—they are visionaries
              who inspire us to push the boundaries of design and innovation.
            </p>
          </div>
        </div>
      </div>
      <ContactForm />
    </section>
  );
}
