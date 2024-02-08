export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 0,
    name: "Bob The Builder",
    description:
      "Bob the Builder is my first web development project—a fun project that took three months to complete.",
    technologies: ["Tailwind Css", "HTML5", "CSS"],
    github: "",
    demo: "",
    image: require(".//../../public/projects/Bob-Builder.webp"),
    available: false,
  },
  {
    id: 1,
    name: "Press",
    description:
      "Frontend side project that took inspiration from therapist and community site. ",
    technologies: ["React", "CSS", "HTML"],
    github: "",
    demo: "",
    image: require(".//../../public/projects/PressCommunity.webp"),
    available: false,
  },
  {
    id: 2,
    name: "Alpaca Image Generator",
    description:
      "An image generator website that allows users to generate, combine, and download images.",
    technologies: ["React", "HTML/CSS", "JavaScript"],
    github: "https://github.com/xzaliff/alpaca-image-generator",
    demo: "http://alpaca-image-generator-beta.vercel.app",
    image: require(".//../../public/projects/alpaca-new.webp"),
    available: true,
  },
  //{
  //  id: 3,
  //  name: "Link Shortener",
  //  description:
  //    "A website that reduces the length of your URL using Bit.ly's API",
  //  technologies: ["JavaScript", "CSS", "Bit.ly's API"],
  //  github: "https://github.com/xzaliff/url-shortener",
  //  demo: "https://url-shortener-nine-delta.vercel.app",
  //  image: require(".//../../public/projects/shortener-new.webp"),
  //  available: false,
  //},

  {
    id: 4,
    name: "Cat Cooking Bar",
    description:
    "My responsibilities included refining AI functionalities, optimizing user interfaces, and enhancing player movement mechanics.",
    technologies: ["Unity", "C#", "Database"],
    github: "https://play.google.com/store/apps/details?id=com.idle.foodgame.catcookingbar",
    demo: "https://play.google.com/store/apps/details?id=com.idle.foodgame.catcookingbar",
    image: require(".//../../public/projects/catCookingBar.webp"),
    available: true,
  },
];
  export const designProjects = [
  {
    id: 1,
    name: "Hebron Statup Lab Website",
    description:
      "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fhsl.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 2,
    name: "RAGS Scrubs Website",
    description:
      "An image generator website that allows users to generate, combine, and download images.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Frags.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 3,
    name: "Crown Branding Agency Website",
    description:
      "A website that reduces the length of your URL using Bit.ly's API",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image:
      "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fcrown.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 4,
    name: "Titi Mobile App",
    description:
      "TMTM helps you find people who are headed to the same location as you, so you can share a ride and split the cost with them.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Ftiti.webp&w=1920&q=75",
    available: false,
  },
];


  



