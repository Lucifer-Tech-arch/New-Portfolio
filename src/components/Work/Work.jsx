import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../../constants";
import SectionHeading from "../motion/SectionHeading";
import Reveal from "../motion/Reveal";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "";
  };

  return (
    <section
      id="work"
      className="py-9 px-[12vw] md:px-[7vw] lg:px-[17vw] font-sans relative"
    >
      <SectionHeading
        title="PROJECTS"
        subtitle="A showcase of the projects I have worked on, highlighting my skills and experience in various technologies"
      />

      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.id} direction="up" delay={index * 0.1}>
            <motion.div
              onClick={() => handleOpenModal(project)}
              className="group flex flex-col h-[28rem] border border-gray-700/80 bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer glass-card"
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
            >
              <div className="p-4 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-xl"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
              <div className="p-6 pt-0 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-3 line-clamp-2">
                  {project.description}
                </p>
                <div className="mt-auto pt-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-block bg-[#251f38] text-xs font-semibold text-purple-400 rounded-full px-3 py-1 mr-2 mb-2 border border-purple-900/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            <motion.div
              className="bg-gray-900 border border-purple-500/60 rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden"
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ type: "spring", stiffness: 320, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-4 border-b border-gray-700 flex-shrink-0">
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  {selectedProject.title}
                </h3>
                <button
                  onClick={handleCloseModal}
                  className="text-gray-400 text-3xl font-bold hover:text-white transition-colors w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-800"
                >
                  &times;
                </button>
              </div>
              <div className="modal-scrollbar overflow-y-auto p-6 pr-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-auto object-contain rounded-xl shadow-lg mb-6"
                />
                <p className="text-gray-300 mb-6 text-base leading-relaxed">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#251f38] text-xs font-semibold text-purple-400 rounded-full px-3 py-1 border border-purple-900/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center bg-gray-800 hover:bg-purple-800 text-white px-6 py-2 rounded-lg text-lg font-semibold transition-colors"
                  >
                    View Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg text-lg font-semibold transition-colors"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Work;
