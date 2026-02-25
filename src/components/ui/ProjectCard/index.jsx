import React from "react";

export default function ProjectCard({ cardItem }) {
  return (
    <div className="w-full h-full">
      <img
        src={cardItem.img}
        className="w-full h-full max-w-[1000px] max-h-[990px] rounded-4xl"
      />
      <div className="mt-2">
        <p className="text-xl">{cardItem.date}</p>
        <p className="mt-2 text-2xl font-bold">{cardItem.title}</p>
      </div>
    </div>
  );
}
