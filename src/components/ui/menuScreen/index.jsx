import gsap from "gsap";
import React, { useEffect, useRef } from "react";

export default function MenuScreen({ isOpen }) {
  const burgerScreenRef = useRef(null);
  useEffect(() => {
    if (isOpen) {
      gsap.to(burgerScreenRef.current, {
        x: "0%",
        duration: 0.5,
        ease: "power4.out",
      });
    } else {
      gsap.to(burgerScreenRef.current, {
        x: "100%",
        duration: 0.5,
        ease: "power4.in",
      });
    }
  }, [isOpen]);
  return (
    <>
      <div
        ref={burgerScreenRef}
        className="fixed bg-gradient-to-b top-0 left-0 from-red-800 to-orange-500 h-[100vh] w-full flex flex-col justify-center items-center translate-x-full z-center z-40"
      >
        <ul className="list-none">
          <li className="font-bold text-9xl hover:text-white transition-all cursor-pointer mb-4">
            Home
          </li>
          <li className="font-bold text-9xl hover:text-white transition-all cursor-pointer mb-4">
            Projects
          </li>
          <li className="font-bold text-9xl hover:text-white transition-all cursor-pointer mb-4">
            About
          </li>
          <li className="font-bold text-9xl hover:text-white transition-all cursor-pointer">
            Contact
          </li>
        </ul>
        <div className="flex justify-between items-center w-[80%]">
          <div className="cursor-pointer">Change theme</div>
          <p>HELLO@STUDIOX.COM</p>
        </div>
      </div>
    </>
  );
}
