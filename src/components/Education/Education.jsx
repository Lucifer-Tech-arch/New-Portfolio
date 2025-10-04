import React from "react";
import { education } from "../../constants"; // Import the education data

const Education = () => {
  return (
    <section
      id="education"
      className="py-9 pb-24 px-4 sm:px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are
          the details of my academic background.
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative">
        {/* Vertical line - positioned slightly left for a better mobile layout */}
        <div className="absolute top-0 w-1 h-full bg-gray-400 left-5 sm:left-1/2 sm:transform sm:-translate-x-1/2"></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <div key={edu.id} className="relative w-full mb-12 flex">
            {/* Left side container for the circle, consistent alignment */}
            <div className="absolute z-10 w-10 h-10 sm:w-14 sm:h-14 bg-gray-900 border-4 border-[#8245ec] rounded-full left-5 sm:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Content Card Container - adjusted padding for all screen sizes */}
            <div
              className={`w-full pl-16 sm:w-1/2 ${
                index % 2 === 0
                  ? "sm:pl-0 sm:pr-8"
                  : "sm:pl-8 sm:ml-auto"
              }`}
            >
              <div className="p-4 sm:p-6 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-105">
                {/* Header with smaller logo and gap on mobile */}
                <div className="flex items-center gap-3 sm:gap-4 mb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-md overflow-hidden flex-shrink-0">
                    <img
                      src={edu.img}
                      alt={edu.school}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-sm text-gray-300">{edu.school}</p>
                    <p className="text-xs text-gray-500 mt-1">{edu.date}</p>
                  </div>
                </div>

                {/* Description and Grade */}
                <p className="text-sm text-gray-400">{edu.desc}</p>
                <p className="mt-3 text-sm font-semibold text-white">
                  Grade: {edu.grade}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;