import React from "react";
import { aboutTeamMembers } from "../../../../constants";
import AboutTeamMemberCard from "../../../ui/AboutTeamMemberCard";

export default function AboutTeamLayout() {
  return (
    <>
      <section className="w-full h-full">
        <h2 className="text-center text-9xl mb-16">Our team</h2>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {aboutTeamMembers.map((member) => (
            <AboutTeamMemberCard member={member} />
          ))}
        </div>
      </section>
    </>
  );
}
