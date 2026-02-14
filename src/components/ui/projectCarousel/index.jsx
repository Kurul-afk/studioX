import React, { useRef } from "react";
import SweetPuffsImg from "../../../assets/SweetPuffs.jpg";
import JananImg from "../../../assets/Janan.jpg";
import EHEImg from "../../../assets/EHE.jpg";
import EverydayWeekendImg from "../../../assets/EverydayWeekend.jpg";
import ZeroGravityImg from "../../../assets/ZeroGravity.jpg";
import ProjectCard from "../ProjectCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const cardItem = [
  {
    title: "Janan",
    date: "24 Jan 2024",
    img: JananImg,
  },

  {
    title: "EHE",
    date: "24 Jan 2024",
    img: EHEImg,
  },

  {
    title: "EverydayWeekend",
    date: "24 Feb 2024",
    img: EverydayWeekendImg,
  },

  {
    title: "SweetPuffs",
    date: "22 Mar 2024",
    img: SweetPuffsImg,
  },

  {
    title: "ZeroGravity",
    date: "22 Mar 2024",
    img: ZeroGravityImg,
  },
];

export default function ProjectCarousel() {
  const container = useRef(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".project-card-wrapper");

      // Анимация мягкого появления всей ленты
      gsap.from(cards, {
        scrollTrigger: {
          trigger: container.current,
          start: "top 85%", // Начинаем, когда контейнер почти вошел в экран
          toggleActions: "play none none none",
        },
        y: 300, // Небольшой подъем (вместо 300) для плавности
        opacity: 0,
        duration: 1, // Быстрая и отзывчивая анимация
        stagger: 0.2, // Очередность появления карточек
        ease: "power2.out",
        force3D: true, // Ускорение через видеокарту
      });
    },
    { scope: container },
  );

  return (
    <div
      ref={container}
      className="flex gap-6 py-20 px-10 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth"
    >
      {cardItem.map((card, idx) => (
        <div
          className="project-card-wrapper flex-shrink-0 snap-center"
          key={idx}
        >
          <ProjectCard cardItem={card} />
        </div>
      ))}
    </div>
  );
}
