import React from "react";
import AboutSignBoardLayout from "../../components/layouts/AboutLayout/AboutSignBoardLayout";
import AboutMissionLayout from "../../components/layouts/AboutLayout/AboutMissionLayout";
import AboutTeamLayout from "../../components/layouts/AboutLayout/AboutTeamLayout";
import AboutValuesLayout from "../../components/layouts/AboutLayout/AboutValuesLayout";
import AboutOurWayLayout from "../../components/layouts/AboutLayout/AboutOurWayLayout";
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
