import React, { useRef } from "react";
import { aboutTeamMembers } from "../../../../constants";
import AboutTeamMemberCard from "../../../ui/AboutTeamMemberCard";
import { useAnimation } from "../../../../hooks/useAnimation";
import { useGSAP } from "@gsap/react";

export default function AboutTeamLayout() {
  const { fadeUp } = useAnimation();
  const containerRef = useRef(null);

  useGSAP(
    () => {
      fadeUp(".fade-up");
    },
    { scope: containerRef },
  );
  return (
    <>
      <section className="w-full h-full" ref={containerRef}>
        <div>
          <h2 className="text-center text-5xl xl:text-7xl 2xl:text-8xl mb-16 fade-up">
            Our team
          </h2>
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {aboutTeamMembers.map((member) => (
              <AboutTeamMemberCard member={member} className={"fade-up"} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
