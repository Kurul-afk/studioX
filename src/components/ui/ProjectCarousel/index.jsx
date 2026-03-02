import React, { useRef } from "react";
import ProjectCard from "../ProjectCard";
import { Navigation, Pagination, Mousewheel, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useAnimation } from "../../../hooks/useAnimation";
import { cardItem } from "../../../constants";

export default function ProjectCarousel() {
  const { fadeUp } = useAnimation();

  const containerRef = useRef(null);

  useGSAP(
    () => {
      fadeUp(".fade-up-card", {
        clearProps: "all",
        force3D: true,
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
            <div className="fade-up-card">
              <ProjectCard cardItem={card} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
