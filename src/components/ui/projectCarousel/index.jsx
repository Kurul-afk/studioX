import React, { useRef } from "react";
import SweetPuffsImg from "../../../assets/SweetPuffs.jpg";
import JananImg from "../../../assets/Janan.jpg";
import EHEImg from "../../../assets/EHE.jpg";
import EverydayWeekendImg from "../../../assets/EverydayWeekend.jpg";
import ZeroGravityImg from "../../../assets/ZeroGravity.jpg";
import ProjectCard from "../ProjectCard";
import { Navigation, Pagination, Mousewheel, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

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
    title: "Everyday Weekend",
    date: "24 Feb 2024",
    img: EverydayWeekendImg,
  },

  {
    title: "Sweet Puffs",
    date: "22 Mar 2024",
    img: SweetPuffsImg,
  },

  {
    title: "Zero Gravity",
    date: "22 Mar 2024",
    img: ZeroGravityImg,
  },
];

export default function ProjectCarousel() {
  const containerRef = useRef(null);
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          once: true,
        },
      });
      tl.from(".project-card-wrapper", {
        duration: 1.5,
        y: 300,
        opacity: 0,
        stagger: 0.2,
        force3D: true,
        clearProps: "all",
      });
    },
    { scope: containerRef },
  );

  return (
    <div className="relative w-full overflow-hidden" ref={containerRef}>
      <Swiper
        modules={[Navigation, Pagination, Mousewheel, FreeMode]}
        spaceBetween={24}
        slidesPerView={"auto"}
        centeredSlides={false}
        freeMode={true}
        grabCursor={true}
        className="px-10"
      >
        {cardItem.map((card, idx) => (
          <SwiperSlide key={idx} className="max-w-max">
            <div className="project-card-wrapper">
              <ProjectCard cardItem={card} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
