import React from "react";
import { Link } from "react-router-dom";

export default function AboutTeamMemberCard({ member }) {
  const theme = {
    orange: "bg-orange-500",
    orangeLight: "bg-orange-500/40 hover:bg-orange-500/60",
    orangeText: "text-orange-500",
    indigo: "bg-indigo-500",
    indigoLight: "bg-indigo-500/40 hover:bg-indigo-500/60",
    indigoText: "text-indigo-500",
    green: "bg-green-500",
    greenLight: "bg-green-500/40 hover:bg-green-500/60",
    greenText: "text-green-500",
  };

  return (
    <>
      <div className="p-8 rounded-2xl border-2 border-gray-400 bg-gray-300/50 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
        <div
          className={`w-24 h-24 flex items-center justify-center ${theme[member.bgColor]} mx-auto mb-5 rounded-full`}
        >
          <img
            src={member.icon}
            alt={member.name}
            className="w-full h-full p-6 object-contain"
          />
        </div>

        <h4 className="text-center text-3xl mb-2 font-bold">{member.name}</h4>

        <p
          className={`text-center ${theme[member.bgColor + "Text"]} text-xl mb-4 font-medium`}
        >
          {member.job}
        </p>

        <p className="text-center text-md mb-6 flex-grow text-gray-700">
          {member.description}
        </p>

        <div className="flex justify-center gap-4">
          {member.socials?.map((social) => (
            <Link
              to={social.href}
              key={social.id}
              className={`w-10 h-10 flex items-center justify-center rounded-full transition-all hover:scale-110 ${theme[member.bgColor + "Light"]}`}
            >
              <img
                src={social.icon}
                alt={social.label}
                className="w-5 h-5 object-contain invert"
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
