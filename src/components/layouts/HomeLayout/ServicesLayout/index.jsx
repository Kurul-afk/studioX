import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const servicesInfo = [
  {
    title: "UX Design",
    subtitle: "Elevate Your Style",
    description:
      "Transform your website into a user-friendly and visually appealing platform with our UX design expertise.",
  },
  {
    title: "Graphic",
    subtitle: "eye-catching",
    description:
      "Enhance your brand's visual appeal with our top-notch graphic design services.",
  },
  {
    title: "UI Design",
    subtitle: "Personal Style",
    description:
      "Revolutionize your website's design and make it more user-friendly and visually captivating with.",
  },
  {
    title: "Branding",
    subtitle: "Branding strategies",
    description:
      "We don’t just design logos; we build living identities. StudioX crafts cohesive visual languages and compelling stories that resonate with your audience and carve out a distinct space in a crowded digital landscape.",
  },
  {
    title: "Development",
    subtitle: "Engineering & Performance",
    description:
      "Turning ambitious concepts into high-performance digital reality. Our development team focuses on scalable architecture, seamless interactions, and clean code, delivering robust solutions that look stunning and function flawlessly.",
  },
  {
    title: "Research",
    subtitle: "Discovery & Insights",
    description:
      "We dive deep into market dynamics and user behavior to uncover the 'why' behind the data. By decoding complex ecosystems, we lay a bulletproof foundation for your product’s future, ensuring every move is backed by intelligence.",
  },
];

export default function ServicesLayout() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".service-card", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        stagger: 0.4,
        force3D: true,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          once: true,
        },
      });

      gsap.from(".service-title", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        stagger: 0.4,
        force3D: true,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          once: true,
        },
      });
    },
    { scope: containerRef.current },
  );

  return (
    <section ref={containerRef} className="relative w-full h-full flex mt-24">
      <div className="w-[80%] flex mx-auto">
        <div className="w-full">
          <div className="w-[40%] max-w-[766px]">
            <h2 className="text-2xl text-orange-500 service-title">
              //SERVICES
            </h2>
            <p className="mt-4 text-5xl service-title">
              By harnessing both creativity and technical know-how, we turn
              visions into actuality!
            </p>
          </div>
          <div className="w-[80%] max-w-[1200px] ml-auto flex flex-wrap gap-10 mt-40">
            {servicesInfo.map((service, idx) => (
              <>
                <div className="service-card w-[350px] h-[410px]" key={idx}>
                  <p className="text-2xl text-zinc-700 font-bold">/{idx + 1}</p>
                  <h3 className="text-5xl mt-2 font-bold">{service.title}</h3>
                  <h4 className="text-xl mt-4 text-zinc-600">
                    {service.subtitle}
                  </h4>
                  <p className="mt-4 text-zinc-700">{service.description}</p>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
