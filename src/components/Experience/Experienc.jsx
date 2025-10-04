import React from "react";
import { experiences } from "../../constants"; // Make sure this path is correct

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-6 px-4 sm:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg">
          My professional journey and project experiences.
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative">
        {/* Vertical line that connects the timeline entries */}
        <div className="absolute top-0 w-1 bg-gray-700 h-full left-5 sm:left-1/2 transform sm:-translate-x-1/2"></div>

        {/* Experience Entries */}
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className="relative mb-12"
          >
            {/* Timeline Circle */}
            <div className="absolute left-5 sm:left-1/2 transform -translate-x-1/2 bg-gray-800 border-4 border-[#8245ec] w-10 h-10 sm:w-12 sm:h-12 rounded-full flex justify-center items-center z-10">
              <img
                src={experience.img}
                alt={experience.company}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Content Card Wrapper for layout */}
            <div
              className={`w-full sm:w-1/2
                          ${
                            index % 2 === 0
                              ? "pl-14 sm:pl-0 sm:pr-8" // Left Card: Mobile padding, Desktop padding
                              : "pl-14 sm:pl-8 sm:ml-auto" // Right Card: Mobile padding, Desktop padding
                          }`}
            >
              {/* Actual Content Card */}
              <div
                className="p-4 sm:p-6 rounded-2xl border border-gray-700 bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-105"
              >
                {/* Card Header: Role, Company, Date */}
                <div className="flex flex-col">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white">
                    {experience.role}
                  </h3>
                  <h4 className="text-md text-gray-300">
                    {experience.company}
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">
                    {experience.date}
                  </p>
                </div>

                {/* Description */}
                <p className="mt-4 text-gray-400">{experience.desc}</p>

                {/* Skills Section */}
                <div className="mt-4">
                  <ul className="flex flex-wrap gap-2">
                    {experience.skills.map((skill, i) => (
                      <li
                        key={i}
                        className="bg-purple-900/50 text-purple-300 px-3 py-1 text-xs sm:text-sm rounded-full border border-purple-600"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;