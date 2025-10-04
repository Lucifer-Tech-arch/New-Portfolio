import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skill = () => (
  <section
    id="skills"
    className="py-10 pb-24 px-[7vw] md:px-[7vw] lg:px-[15vw] font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
      <p className="text-gray-400 mt-4 text-lg font-semibold max-w-2xl mx-auto">
        A collection of my technical skills and expertise honed through various
        projects and experiences.
      </p>
    </div>

    {/* Skill Categories Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {SkillsInfo.map((category) => (
        <Tilt
          key={category.title}
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          perspective={1000}
          scale={1.02}
          transitionSpeed={1000}
          gyroscope={true}
          className="h-full"
        >
          <div
            className="bg-gray-900/50 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-gray-700 
                       shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] h-full"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-300 mb-6 text-center">
              {category.title}
            </h3>

            {/* Skill Items */}
            <div className="flex flex-wrap justify-center gap-4">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-center gap-2 bg-gray-800/60 border border-gray-700 rounded-lg py-2 px-4"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-6 h-6"
                  />
                  <span className="text-sm text-gray-300 font-medium">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Tilt>
      ))}
    </div>
  </section>
);

export default Skill;