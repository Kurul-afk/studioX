import React from "react";
import { aboutValues } from "../../../../constants";

export default function AboutValuesLayout() {
  return (
    <>
      <section className="w-full h-full">
        <h3 className="text-center text-9xl mb-16">Our values</h3>
        <div className="w-full h-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-4 gap-8">
          {aboutValues.map((value) => (
            <>
              <div className="p-8 rounded-2xl border-2 border-gray-400 bg-gray-300/50 hover:border-purple-500 flex flex-col items-center h-full shadow-sm hover:shadow-md transition-all">
                <div className="w-24 h-24 flex items-center bg-purple-500/20 hover:bg-purple-500/40 transition-colors rounded-2xl">
                  <img
                    className="w-full h-full p-6 object-contain"
                    src={value.icon}
                    alt=""
                  />
                </div>
                <h4 className="text-center text-2xl font-bold mb-2">
                  {value.name}
                </h4>
                <p className="text-center text-gray-700">{value.description}</p>
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  );
}
