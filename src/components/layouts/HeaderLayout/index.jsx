import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import MenuScreen from "../../ui/MenuScreen";
import BurgerBtn from "../../ui/BurgerBtn";

export default function HeaderLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const headerContainer = useRef(null);

  useGSAP(
    () => {
      gsap.to(headerContainer.current, {
        backgroundColor: "#26262608",
        backdropFilter: "blur(10px)",
        duration: 0.3,
        ease: "power1.out",
        paddingBlock: "10px",
        scrollTrigger: {
          trigger: headerContainer.current,
          start: "top top",
          end: "+=100",
          scrub: true,
        },
      });
    },
    { scope: headerContainer.current },
  );

  return (
    <>
      <MenuScreen onClick={() => setIsOpen((prev) => !prev)} isOpen={isOpen} />
      <header
        ref={headerContainer}
        className="fixed top-0 left-0 w-full h-[134px] flex justify-center z-50"
      >
        <div className="flex justify-between items-center w-[80%] py-4">
          <div
            className={`text-2xl ${isOpen ? "text-white" : "text-orange-500"} transition-colors duration-300 font-bold`}
          >
            STUDIO X
          </div>
          <BurgerBtn
            onClick={() => setIsOpen((prev) => !prev)}
            isOpen={isOpen}
          />
        </div>
      </header>
    </>
  );
}
