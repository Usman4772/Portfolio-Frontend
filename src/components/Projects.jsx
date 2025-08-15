import React from "react";
import Project from "./Project";
import Heading from "./Heading";

function Projects() {
  const projects = [
    {
      title: "Link2Gether – Community Based Web App",
      description:
        "Link2Gether is a community-driven platform where users can create or join communities, post content, and engage in discussions. It features real-time AI-assisted chat (@ai) for instant help and integrates media sharing, live updates, and moderation tools — solving the problem of scattered online communities by centralizing engagement in one platform.",
      technologies: [
        "TypeScript",
        "Pusher",
        "Cloudinary",
        "Next.js",
        "Tailwind CSS",
        "Ant Design",
        "Node.js",
        "MongoDB",
      ],
      activeTechnology: 0,
      liveLink: "https://link2gether-webapp.vercel.app/",
      githubLink: "https://github.com/Usman4772/link2gether-webapp",
      previewImage: "/linktogether.png",
    },
    {
      title: "AI Interview Platform",
      description:
        "An AI-powered platform that helps job seekers practice interviews in real time. Users can schedule mock interviews, receive AI-generated questions, and get instant feedback. It addresses the problem of interview anxiety and lack of preparation by simulating real-world interview scenarios anytime, anywhere.",
      technologies: [
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "Ant Design",
        "Shad-CN",
        "Socket.io",
        "JWT",
      ],
      activeTechnology: 1,
      liveLink: "https://mockmaster-inky.vercel.app/",
      githubLink: null,
      previewImage: "/mockmaster.png",
    },
    {
      title: "Vyafac – Custom Payment Gateway",
      description:
        "Vyafac is a secure payment gateway platform designed for businesses to handle both one-time and recurring payments with ease. It solves the problem of region-based tax compliance by integrating automated tax calculations, invoice generation, and subscription management — all from a single, user-friendly dashboard.",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Ant Design",
        "Redux",
        "Chart.js",
      ],
      activeTechnology: 4,
      liveLink: "https://app.vyafac.com/",
      githubLink: null,
      previewImage: "/vyafac.png",
    },
    {
      title: "Admin Dashboard – Analytics & Management (Static UI)",
      description:
        "A visually engaging admin dashboard UI showcasing analytics, performance metrics, and data visualization components. Developed as a static prototype to highlight responsive design, chart integration, and polished frontend architecture, making it ideal for future backend integration.",
      technologies: ["Next.js", "Tailwind CSS", "Ant Design", "Chart.js"],
      activeTechnology: 2,
      liveLink: "https://dashboard-lyart-mu.vercel.app/",
      githubLink: null,
      previewImage: "/dashboard.png",
    },
    {
      title: "Gym Store – Online Fitness Equipment Shop (Static UI)",
      description:
        "A fully responsive e-commerce store interface designed for a fitness and supplements brand. Built as a static UI prototype to demonstrate product listing layouts, category navigation, and modern design aesthetics — optimized for speed, responsiveness, and clean code.",
      technologies: ["React", "JavaScript", "CSS", "Netlify"],
      activeTechnology: 0,
      liveLink: "https://onlinegymstore.netlify.app/",
      githubLink: null,
      previewImage: "/gymstore.png",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-4">
      <Heading text="My Projects" />
      <div className="flex flex-col items-center">
        {projects?.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
