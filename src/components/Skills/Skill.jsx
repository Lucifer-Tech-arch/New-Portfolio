import React from "react";
import { motion } from "framer-motion";
import { SkillsInfo } from "../../constants";
import SectionHeading from "../motion/SectionHeading";
import Reveal from "../motion/Reveal";

const cardVariants = {
  hidden: { opacity: 0, y: 40, rotateX: 8 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.65, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Skill = () => (
  <section
    id="skills"
    className="py-10 pb-24 px-[7vw] md:px-[7vw] lg:px-[15vw] font-sans bg-skills-gradient clip-path-custom"
  >
    <SectionHeading
      title="SKILLS"
      subtitle="A collection of my technical skills and expertise honed through various projects and experiences."
    />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 perspective-[1200px]">
      {SkillsInfo.map((category, index) => (
        <motion.div
          key={category.title}
          custom={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={cardVariants}
          whileHover={{ y: -6, transition: { duration: 0.25 } }}
          className="h-full"
        >
          <div className="glass-card bg-gray-900/50 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-gray-700/80 shadow-[0_0_20px_1px_rgba(130,69,236,0.25)] h-full hover:border-purple-500/40 transition-colors duration-300">
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-300 mb-6 text-center">
              {category.title}
            </h3>

            <div className="flex flex-wrap justify-center gap-3">
              {category.skills.map((skill, skillIndex) => (
                <Reveal
                  key={skill.name}
                  direction="scale"
                  delay={skillIndex * 0.04}
                  amount={0.1}
                >
                  <motion.div
                    className="flex items-center justify-center gap-2 bg-gray-800/70 border border-gray-700/80 rounded-lg py-2 px-4 hover:border-purple-500/50 hover:bg-purple-950/30 transition-colors cursor-default"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="w-6 h-6 object-contain"
                    />
                    <span className="text-sm text-gray-300 font-medium">
                      {skill.name}
                    </span>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Skill;
