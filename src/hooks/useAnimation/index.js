import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export const useAnimation = () => {
  const fadeUp = (selector, vars = {}) => {
    gsap.from(selector, {
      y: 100,
      opacity: 0,
      duration: 1.5,
      ease: "power4.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: selector,
        start: "top 80%",
        end: "top 15%",
        toggleActions: "play none none reverse",
      },
      ...vars,
    });
  };

  //   До работать
  const counterAnimate = (selector, customVars = {}) => {
    const targets = gsap.utils.toArray(selector);

    targets.forEach((target) => {
      const endValue = parseInt(target.innerText, 10) || 0;

      gsap.fromTo(
        target,
        { textContent: 0 },
        {
          textContent: endValue,
          duration: 2.5,
          ease: "power2.out",
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: target,
            start: "top 90%",
          },
          ...customVars,
          onUpdate: function () {
            this.targets()[0].innerText = Math.ceil(
              this.targets()[0].textContent,
            );
          },
        },
      );
    });
  };
  return { fadeUp, counterAnimate };
};
