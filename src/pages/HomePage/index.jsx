import React, { use, useEffect, useRef } from "react";
import SignBoardLayout from "../../components/layouts/HomeLayout/SignBoardLayout";
import ServicesLayout from "../../components/layouts/HomeLayout/ServicesLayout";
import ExperienceLayout from "../../components/layouts/HomeLayout/ExperienceLayout";
import ClientsAndPartnerLayout from "../../components/layouts/HomeLayout/ClientsAndPartnerLayout";
import ContactUsLayout from "../../components/layouts/HomeLayout/ContactUsLayout";
import ProjectsLayout from "../../components/layouts/HomeLayout/ProjectsLayout";
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
