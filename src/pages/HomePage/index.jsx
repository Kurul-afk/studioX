import React, { use, useEffect, useRef } from "react";
import SignBoardLayout from "../../components/layouts/homeLayout/SignBoardLayout";
import ServicesLayout from "../../components/layouts/homeLayout/ServicesLayout";
import ExperienceLayout from "../../components/layouts/homeLayout/ExperienceLayout";
import ClientsAndPartnerLayout from "../../components/layouts/homeLayout/ClientsAndPartnerLayout";
import ContactUsLayout from "../../components/layouts/homeLayout/ContactUsLayout";
import ProjectsLayout from "../../components/layouts/homeLayout/ProjectsLayout";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";

gsap.registerPlugin(ScrollToPlugin);

export default function HomePage() {
  return (
    <>
      <SignBoardLayout id="home" />
      <ProjectsLayout id="projects" />
      <ServicesLayout id="services" />
      <ExperienceLayout id="experience" />
      <ClientsAndPartnerLayout id="clientsAndPartner" />
      <ContactUsLayout id="contactUs" />
    </>
  );
}
