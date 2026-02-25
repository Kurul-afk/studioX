import React, { use, useEffect, useRef } from "react";
import SignBoardLayout from "../../components/layouts/homeLayout/signBoardLayout";
import ProjectsLayout from "../../components/layouts/homeLayout/projectsLayout";
import ServicesLayout from "../../components/layouts/homeLayout/servicesLayout";
import ExperienceLayout from "../../components/layouts/homeLayout/experienceLayout";
import ClientsAndPartnerLayout from "../../components/layouts/homeLayout/clientsAndPartnerLayout";
import ContactUsLayout from "../../components/layouts/homeLayout/contactUsLayout";
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
