"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Threads Clone",
    description: "Threads Clone - Full Stack MERN Next.js 13 | React, Next JS, TypeScript, MongoDB",
    image: "/images/projects/threads_clone.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/DaniloDev/threads",
    previewUrl: "https://threads-omega.vercel.app/",
  },
  {
    id: 2,
    title: "Text Repeater Master",
    description: "Text Repeater Master repeats texts symbols and emojis, as many times as you want",
    image: "/images/projects/text_repeater_master.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://play.google.com/store/apps/details?id=com.developtecnologia.text_repeater_master",
    previewUrl: "https://play.google.com/store/apps/details?id=com.developtecnologia.text_repeater_master",
  },
  {
    id: 3,
    title: "Portfolio Danilo Nascimento",
    description: "My personal portofilo with my projects and a lote about me",
    image: "/images/projects/portfolio-danilo-nascimento-dev.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/DaniloDev/danilo-nascimento-dev-portfolio",
    previewUrl: "https://danilo-nascimento-dev-portfolio.vercel.app",
  },
  {
    id: 4,
    title: "Dropbox Clone",
    description: "Dropbox Clone - Full Stack Express.js | EJS, Firebase",
    image: "/images/projects/dropbox_clone.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/DaniloDev/dropbox_clone",
    previewUrl: "https://dropbox-clone-indol.vercel.app",
  }
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
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
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
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
