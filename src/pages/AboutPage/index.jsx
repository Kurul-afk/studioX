import React from "react";
import AboutSignBoardLayout from "../../components/layouts/aboutLayout/AboutSignBoardLayout";
import AboutMissionLayout from "../../components/layouts/aboutLayout/AboutMissionLayout";
import AboutTeamLayout from "../../components/layouts/aboutLayout/AboutTeamLayout";
import AboutValuesLayout from "../../components/layouts/aboutLayout/AboutValuesLayout";
import AboutOurWayLayout from "../../components/layouts/aboutLayout/AboutOurWayLayout";
export default function AboutPage() {
  return (
    <div className="w-full h-full relative">
      <div className="w-[80%] mx-auto flex flex-col items-center gap-44 mt-52">
        <AboutSignBoardLayout />
        <AboutMissionLayout />
        <AboutTeamLayout />
        <AboutValuesLayout />
        <AboutOurWayLayout />
      </div>
    </div>
  );
}
