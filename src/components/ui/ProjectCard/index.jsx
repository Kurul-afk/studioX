import React from "react";

export default function ProjectCard({ cardItem }) {
  return (
    <div className="w-full h-full">
      <img
        src={cardItem.img}
        className="w-full h-full max-w-[240px] sm:max-w-[360px] md:max-w-[420px] 2xl:max-w-[900px] 2xl:max-h-[790px] rounded-4xl"
      />
      <div className="mt-2">
        <p className="text-xl">{cardItem.date}</p>
        <p className="mt-2 text-2xl font-bold">{cardItem.title}</p>
      </div>
    </div>
  );
}
