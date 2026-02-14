import React, { useState } from "react";
import "./App.css";
import gsap from "gsap";
import { useRef } from "react";
import { useEffect } from "react";
import BurgerBtn from "./components/ui/burgerBtn";
import MenuScreen from "./components/ui/menuScreen";
import SignBoardLayout from "./components/layouts/signBoardLayout";
import ProjectsLayout from "./components/layouts/projects";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="overflow-hidden relative">
      <MenuScreen isOpen={isOpen} />
      <header className="fixed top-0 left-0  w-full flex justify-center z-50">
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
      <SignBoardLayout />
      <ProjectsLayout />
    </div>
  );
}
