"use client";

import React from "react";
import dynamic from "next/dynamic";

// Dynamically import AnimatedNumbers for client-side only rendering
const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

interface Achievement {
  prefix?: string;
  metric: string;
  value: string;
  postfix?: string;
}

const achievementsList: Achievement[] = [
  {
    metric: "Projects",
    value: "50",
    postfix: "+",
  },
  {
    metric: "Certificates",
    value: "7",
  },
  {
    metric: "Years",
    value: "2",
  },
];

const AchievementsSection: React.FC = () => {
  return (
    <section className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-8 md:px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
          >
            <h2 className="text-white text-4xl font-bold flex items-center">
              {achievement.prefix && <span>{achievement.prefix}</span>}
              <AnimatedNumbers
                includeComma
                animateToNumber={parseInt(achievement.value.replace(/,/g, ""), 10)}
                locale="en-US"
                className="text-white text-4xl font-bold"
              />
              {achievement.postfix && <span>{achievement.postfix}</span>}
            </h2>
            <p className="text-[#ADB7BE] text-base mt-2">{achievement.metric}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AchievementsSection;

