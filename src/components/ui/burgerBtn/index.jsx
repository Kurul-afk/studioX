import gsap from "gsap";
import { use, useEffect, useRef, useState } from "react";

export default function BurgerBtn({ onClick, isOpen }) {
  const tl = useRef(gsap.timeline({ paused: true }));
  const linesRef = useRef([]);

  const handleToggle = () => {
    if (onClick) onClick();
  };
  useEffect(() => {
    if (linesRef.current.length === 0) return;

    gsap.set(linesRef.current, { transformOrigin: "center" });

    tl.current
      .to([linesRef.current[1], linesRef.current[2], linesRef.current[3]], {
        opacity: 0,
        scaleX: 0,
        duration: 0.2,
        ease: "power4.inOut",
      })
      .to(
        linesRef.current[0],
        {
          rotation: 45,
          x: 22,
          duration: 0.2,
          ease: "power4.inOut",
          backgroundColor: "#fff",
        },
        "<",
      )
      .to(
        linesRef.current[linesRef.current.length - 1],
        {
          rotation: -45,
          x: -22,
          duration: 0.2,
          ease: "power4.inOut",
          backgroundColor: "#fff",
        },
        "<",
      );
    return () => {
      tl.current.kill();
    };
  }, []);

  useEffect(() => {
    isOpen ? tl.current.play() : tl.current.reverse();
  }, [isOpen]);

  return (
    <>
      <button onClick={handleToggle}>
        <div className="w-15 h-20 cursor-pointer flex gap-2 items-center justify-center">
          {[0, 1, 2, 3, 4].map((idx) => (
            <div
              key={idx}
              ref={(el) => (linesRef.current[idx] = el)}
              className="w-[3px] h-[50%] bg-orange-500 rounded-sm"
            ></div>
          ))}
        </div>
      </button>
    </>
  );
}
