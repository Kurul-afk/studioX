import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ContactForm from "../../../ui/ContactForm";

export default function ContactUsLayout() {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.from(".animated-text", {
        y: 100,
        duration: 2.5,
        stagger: 0.2,
        opacity: 0,
      });
    },
    { scope: container },
  );

  return (
    <section ref={container} className="w-full h-full">
      <div className="flex w-[80%] mx-auto py-20">
        <div className="w-full flex items-center justify-center">
          <div className="w-[60%] max-w-[990px]">
            <h2 className="text-9xl font-bold mb-8 animated-text">
              Contact us
            </h2>
            <p className="text-2xl mb-12 animated-text">
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
