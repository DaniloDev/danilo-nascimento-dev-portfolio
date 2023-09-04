"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "skills",
    id: "skills",
    content: (
      <div className="flex flex-row list-disc pl-2">
        <div>
          <label>Frontend Development</label>
          <div>
            <br />
            <ul className="list-disc" style={{ listStyle: "none" }}>
              <li>
                <i class="ri-checkbox-circle-line"></i> NextJs
              </li>
              <li><i class="ri-checkbox-circle-line"></i> React</li>
              <li><i class="ri-checkbox-circle-line"></i> React Native</li>
              <li><i class="ri-checkbox-circle-line"></i> Angular</li>
              <li><i class="ri-checkbox-circle-line"></i> Ionic</li>
              <li><i class="ri-checkbox-circle-line"></i> VueJs</li>
              <li><i class="ri-checkbox-circle-line"></i> Figma</li>
              <li><i class="ri-checkbox-circle-line"></i> Android Studio</li>
            </ul>
          </div>
        </div>
<span className="flex flex-auto"></span>
        <div>
          <label>Backend Development</label>
          <div>
            <br />
            <ul className="list-disc" style={{ listStyle: "none" }}>
              <li>
                <i class="ri-checkbox-circle-line"></i> NodeJS
              </li>
              <li><i class="ri-checkbox-circle-line"></i> Spring Boot</li>
              <li><i class="ri-checkbox-circle-line"></i> MongoDB</li>
              <li><i class="ri-checkbox-circle-line"></i> Node.js</li>
              <li><i class="ri-checkbox-circle-line"></i> MERN</li>
              <li><i class="ri-checkbox-circle-line"></i> PostgreSQL</li>
              <li><i class="ri-checkbox-circle-line"></i> Sequelize</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2" style={{ listStyle: "none" }}>
        <li><i class="ri-checkbox-circle-line"></i> Computer Science</li>
        <li><i class="ri-checkbox-circle-line"></i> Unifacs - Salvador University</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2" style={{ listStyle: "none" }}>
        <li><i class="ri-checkbox-circle-line"></i> AWS Cloud Practitioner</li>
        <li><i class="ri-checkbox-circle-line"></i> Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/image-about-me.png"
          width={500}
          height={200}
          alt="Image About"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
