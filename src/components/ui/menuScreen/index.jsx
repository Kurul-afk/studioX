import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function MenuScreen({ onClick, isOpen }) {
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
            <Link to="/">Home</Link>
          </li>
          <li className="font-bold text-9xl hover:text-white transition-all cursor-pointer mb-4">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="font-bold text-9xl hover:text-white transition-all cursor-pointer mb-4">
            <Link to="/about">About</Link>
          </li>
          <li className="font-bold text-9xl hover:text-white transition-all cursor-pointer mb-4">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
