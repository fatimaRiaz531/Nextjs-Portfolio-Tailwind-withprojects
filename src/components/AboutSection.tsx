"use client";
import React, { useState } from "react";
import Image from "next/image";
import TabButton from "../components/TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: [
      "Node.js",
      "Next.js",
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
    ],
  },
  {
    title: "Education",
    id: "education",
    content: [
      "Fullstack Developer",
      "Graduated from Karachi University",
    ],
  },
  {
    title: "Certifications",
    id: "certifications",
    content: [
      "DigiSkills: Freelancing & Communication Skills",
      "Great Learning: LinkedIn Marketing",
      "Great Learning: AI Fundamentals",
    ],
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/projects/about-image.png"
          width={500}
          height={500}
          alt="About Image"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            As a Full Stack Web Developer, I build interactive web applications
            with JavaScript, React, Node.js, HTML, CSS, Next.js, and Tailwind
            CSS. I am a quick learner and team player, excited to collaborate on
            innovative projects and create responsive websites.
          </p>
          <div className="flex flex-row mt-8">
            {TAB_DATA.map(({ id, title }) => (
              <TabButton
                key={id}
                selectTab={() => setTab(id)}
                active={tab === id}
              >
                {title}
              </TabButton>
            ))}
          </div>
          <div className="mt-8">
            <ul className="list-disc pl-2">
              {TAB_DATA.find((t) => t.id === tab)?.content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
