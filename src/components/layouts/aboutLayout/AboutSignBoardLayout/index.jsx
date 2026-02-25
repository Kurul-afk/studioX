import React from "react";

export default function AboutSignBoardLayout() {
  const aboutCard = [
    { num: "500+", title: "Successful projects" },
    { num: "50+", title: "Satisfied clients" },
    { num: "17", title: "Years on the market" },
  ];
  return (
    <>
      <section className="w-full h-full">
        <h2 className="text-8xl mb-5">About us</h2>
        <p className="text-2xl mb-5">
          We create innovative digital solutions that change industries and
          inspire people around the world
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aboutCard.map((card) => (
            <>
              <div className="w-full max-w-[660px] flex  flex-col items-center px-5 py-10 rounded-2xl border-gray-400 border-2 bg-gray-300/50">
                <h3 className="text-6xl font-bold mb-5 bg-gradient-to-r from-orange-500 to-purple-500 text-transparent bg-clip-text">
                  {card.num}
                </h3>
                <p className="text-black/80">{card.title}</p>
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  );
}
