import {
  BusinessmanHittingComputer,
  LawyerExplaining,
  WomanWithSmartphone,
  FacebookLogo,
  LinkedinLogo,
  XLogo,
  Lamp,
  Star,
  PaintPaletteArtist,
  RenewableEnergyInnovation,
  // images for home cards
  Janan as JananImg,
  EHE as EHEImg,
  EverydayWeekend as EverydayWeekendImg,
  SweetPuffs as SweetPuffsImg,
  ZeroGravity as ZeroGravityImg,
} from "../assets";

// about variables
export const aboutCard = [
  { num: "500+", title: "Successful projects" },
  { num: "50+", title: "Satisfied clients" },
  { num: "17", title: "Years on the market" },
];

export const aboutTeamMembers = [
  {
    id: 1,
    name: "Alexey",
    job: "Creative Director",
    description: "10+ years of experience in design",
    icon: LawyerExplaining,
    bgColor: "orange",
    socials: [
      {
        id: "fb",
        icon: FacebookLogo,
        label: "Facebook",
        href: "*",
      },
      {
        id: "x",
        icon: XLogo,
        label: "X",
        href: "*",
      },
      {
        id: "Ld",
        icon: LinkedinLogo,
        label: "Linkedin",
        href: "*",
      },
    ],
  },
  {
    name: "Maria",
    job: "Lead Designer",
    description: "UX/UI specialist",
    icon: WomanWithSmartphone,
    bgColor: "indigo",
    socials: [
      {
        id: "fb",
        icon: FacebookLogo,
        label: "Facebook",
        href: "*",
      },
      {
        id: "x",
        icon: XLogo,
        label: "X",
        href: "*",
      },
      {
        id: "Ld",
        icon: LinkedinLogo,
        label: "Linkedin",
        href: "*",
      },
    ],
  },
  {
    name: "Ivan",
    job: "Senior Developer",
    description: "15+ years of experience in web project development",
    icon: BusinessmanHittingComputer,
    bgColor: "green",
    socials: [
      {
        id: "fb",
        icon: FacebookLogo,
        label: "Facebook",
        href: "*",
      },
      {
        id: "x",
        icon: XLogo,
        label: "X",
        href: "*",
      },
      {
        id: "Ld",
        icon: LinkedinLogo,
        label: "Linkedin",
        href: "*",
      },
    ],
  },
];

export const aboutValues = [
  {
    name: "Innovation",
    description: "We are constantly looking for new approaches and solutions",
    icon: Lamp,
  },
  {
    name: "Quality",
    description: "Perfection in everything we do",
    icon: Star,
  },
  {
    name: "Creation",
    description: "Creativity in every project",
    icon: PaintPaletteArtist,
  },
  {
    name: "Reliability",
    description: "Partners you can rely on",
    icon: RenewableEnergyInnovation,
  },
];

export const aboutStory = [
  {
    date: "2008",
    title: "Founding of the studio",
    description: "It all started with a small team of enthusiasts",
  },
  {
    date: "2015",
    title: "First major project",
    description: "Recognized for innovative approach",
  },
  {
    date: "2020",
    title: "Global expansion",
    description: "Started working with clients all over the world",
  },
  {
    date: "2026",
    title: "Industry leaders",
    description: "Became one of the most innovative studios",
  },
];

// home
export const cardItem = [
  {
    title: "Janan",
    date: "24 Jan 2024",
    img: JananImg,
  },
  {
    title: "EHE",
    date: "24 Jan 2024",
    img: EHEImg,
  },

  {
    title: "Everyday Weekend",
    date: "24 Feb 2024",
    img: EverydayWeekendImg,
  },

  {
    title: "Sweet Puffs",
    date: "22 Mar 2024",
    img: SweetPuffsImg,
  },

  {
    title: "Zero Gravity",
    date: "22 Mar 2024",
    img: ZeroGravityImg,
  },
];

export const servicesInfo = [
  {
    title: "UX Design",
    subtitle: "Elevate Your Style",
    description:
      "Transform your website into a user-friendly and visually appealing platform with our UX design expertise.",
  },
  {
    title: "Graphic",
    subtitle: "eye-catching",
    description:
      "Enhance your brand's visual appeal with our top-notch graphic design services.",
  },
  {
    title: "UI Design",
    subtitle: "Personal Style",
    description:
      "Revolutionize your website's design and make it more user-friendly and visually captivating with.",
  },
  {
    title: "Branding",
    subtitle: "Branding strategies",
    description:
      "We don’t just design logos; we build living identities. StudioX crafts cohesive visual languages and compelling stories that resonate with your audience and carve out a distinct space in a crowded digital landscape.",
  },
  {
    title: "Development",
    subtitle: "Engineering & Performance",
    description:
      "Turning ambitious concepts into high-performance digital reality. Our development team focuses on scalable architecture, seamless interactions, and clean code, delivering robust solutions that look stunning and function flawlessly.",
  },
  {
    title: "Research",
    subtitle: "Discovery & Insights",
    description:
      "We dive deep into market dynamics and user behavior to uncover the 'why' behind the data. By decoding complex ecosystems, we lay a bulletproof foundation for your product’s future, ensuring every move is backed by intelligence.",
  },
];

export const studioStat = [
  {
    label: "years of experience",
    value: 17,
  },
  {
    label: "team members",
    value: 254,
  },
  {
    label: "expert in tech",
    value: 17,
  },
  {
    label: "Customer Satisfaction",
    value: 99,
  },
];
