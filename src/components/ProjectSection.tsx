"use client"; 

import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTags";
import { motion, useInView } from "framer-motion";

interface Project {
  id: number;               // Unique identifier for the project
  title: string;            // Title of the project
  description: string;      // Description of the project
  Image: string;            // Image URL of the project
  tag: string[];            // Tags associated with the project
  gitUrl: string;           // GitHub URL for the project
  previewUrl: string;       // Preview URL for the project
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "NextJS Portfolio Website",
    description: "I have built my initial portfolio website using Next.js, showcasing a collection of my personal projects. To enhance efficiency and code readability, I have integrated numerous new libraries and developed custom components.",
    Image: "/images/projects/portfolio.PNG",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/fatimaRiaz531/Nextjs-Portfolio-Tailwind-withprojects.git",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "E-Commerce Website in NextJS",
    description: "This Figma-inspired e-commerce website, built with Next.js, features new functionalities, Shadcn, React Icons, and a clean, user-friendly design, showcasing simplicity and efficiency; explore more through my GitHub and Vercel links.",
    Image: "/images/projects/e-figma-web.PNG",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/fatimaRiaz531/hackathon2-figma-website.git",
    previewUrl: "https://hackathon2-figma-website-4pwhnbs3g-fatimariaz531s-projects.vercel.app/",
  },
  {
    id: 3,
    title: "E-commerce Web Application in NextJS ",
    description: "Project 3 description",
    Image: "/images/projects/e-web.PNG",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Count Down Timer",
    description:"This project, part of a Next.js collection, allows users to set a custom countdown time with features to start, pause, and stop the timer, offering a simple, intuitive, and user-friendly experience with clean functionality and interactive control.",
    Image: "/images/projects/timer.PNG",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/fatimaRiaz531/30-days-02-countdown-timer.git",
    previewUrl: "https://30-days-02-countdown-timer.vercel.app/",
  },
  {
    id: 5,
    title: "GitHub Repo",
    description:"checkout my GitHub repo",
    Image: "/images/projects/github.PNG",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/fatimaRiaz531",
    previewUrl: "/",
  },
  
];

const ProjectsSection: React.FC = () => {
  const [tag, setTag] = useState<string>("All"); // Type for state
  const ref = useRef<HTMLUListElement | null>(null); // Type for ref
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id} // Use project.id as the key
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.Image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
