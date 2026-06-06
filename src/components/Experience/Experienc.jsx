import React from "react";
import { motion } from "framer-motion";
import { experiences } from "../../constants";
import SectionHeading from "../motion/SectionHeading";
import Reveal from "../motion/Reveal";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-6 px-4 sm:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      <SectionHeading
        title="EXPERIENCE"
        subtitle="My professional journey and project experiences."
      />

      <div className="relative">
        <motion.div
          className="absolute top-0 w-1 bg-gradient-to-b from-[#8245ec] via-purple-700/50 to-transparent h-full left-5 sm:left-1/2 transform sm:-translate-x-1/2 origin-top"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />

        {experiences.map((experience, index) => (
          <div key={experience.id} className="relative mb-12">
            <Reveal direction="scale" delay={0.1}>
              <motion.div
                className={`absolute left-5 sm:left-1/2 transform -translate-x-1/2 border-4 border-[#8245ec] w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden z-10 ${experience.logoBg || "bg-white"} shadow-[0_0_16px_rgba(130,69,236,0.5)]`}
                whileHover={{ scale: 1.15 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <img
                  src={experience.img}
                  alt={experience.company}
                  className={`w-full h-full object-cover ${experience.imgClass || ""}`}
                />
              </motion.div>
            </Reveal>

            <div
              className={`w-full sm:w-1/2 ${
                index % 2 === 0
                  ? "pl-14 sm:pl-0 sm:pr-8"
                  : "pl-14 sm:pl-8 sm:ml-auto"
              }`}
            >
              <Reveal
                direction={index % 2 === 0 ? "left" : "right"}
                delay={index * 0.08}
              >
                <motion.div
                  className="p-4 sm:p-6 rounded-2xl border border-gray-700/80 bg-gray-900/90 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.25)] glass-card"
                  whileHover={{
                    scale: 1.02,
                    borderColor: "rgba(168, 85, 247, 0.4)",
                    boxShadow: "0 0 30px rgba(130, 69, 236, 0.35)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                >
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

                  <p className="mt-4 text-gray-400 leading-relaxed">
                    {experience.desc}
                  </p>

                  <div className="mt-4">
                    <ul className="flex flex-wrap gap-2">
                      {experience.skills.map((skill, i) => (
                        <li
                          key={i}
                          className="bg-purple-900/50 text-purple-300 px-3 py-1 text-xs sm:text-sm rounded-full border border-purple-600/60"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </Reveal>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
