import React from "react";
import { aboutStory } from "../../../../constants";

export default function AboutOurWayLayout() {
  return (
    <>
      <section className="max-w-4xl w-full h-full">
        <h2 className="text-center text-9xl mb-16">Our way</h2>
        <div className="flex flex-col gap-8">
          {aboutStory.map((value) => (
            <div className="w-full p-8 rounded-2xl border-2 border-gray-200 h-full shadow-sm hover:shadow-md transition-all">
              <div className="text-orange-500 text-2xl font-bold mb-2.5">
                {value.date}
              </div>
              <h4 className="text-2xl font-bold mb-0.5">{value.title}</h4>
              <p className="text-gray-700">{value.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
