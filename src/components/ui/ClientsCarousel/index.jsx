import React from "react";
import {
  Airwallex,
  Brage,
  DocuSign,
  Drips,
  Intercom,
  Loom,
  Maze,
} from "../../../assets/logo";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
const clients = [
  { logo: Airwallex, name: "Airwallex" },
  { logo: Brage, name: "Brage" },
  { logo: DocuSign, name: "DocuSign" },
  { logo: Drips, name: "Drips" },
  { logo: Intercom, name: "Intercom" },
  { logo: Loom, name: "Loom" },
  { logo: Maze, name: "Maze" },
];

export default function ClientsCarousel() {
  return (
    <>
      <div>
        <Swiper
          modules={[Autoplay, FreeMode]}
          spaceBetween={30}
          freeMode={true}
          slidesPerView={2}
          speed={5000}
          loop={true}
          allowTouchMove={false} // Отключает свайп на мобильных и перетаскивание мышкой
          simulateTouch={false} // Отключает симуляцию касания
          touchStartPreventDefault={false}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
            1280: { slidesPerView: 6 },
          }}
          className="ticker-swiper"
        >
          {clients.map((client, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex items-center justify-center">
                <img src={client.logo} className="w-40 h-16 object-contain" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <style jsx global>{`
        .ticker-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
    </>
  );
}
