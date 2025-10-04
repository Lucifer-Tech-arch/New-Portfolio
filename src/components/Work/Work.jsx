import React, { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="work"
      className="py-9 px-[12vw] md:px-[7vw] lg:px-[17vw]  font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            // Added h-[28rem] to enforce a fixed height for each card
            className="flex flex-col h-[28rem] border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
            <div className="p-6 pt-0 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-white mb-1">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-3 line-clamp-2">
                {project.description}
              </p>
              <div className="mt-auto pt-3">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-3 py-1 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Container (No changes needed here) */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm p-4">
          <div className="bg-gray-900 border border-purple-500 rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b border-gray-700 flex-shrink-0">
              <h3 className="text-xl md:text-2xl font-bold text-white">
                {selectedProject.title}
              </h3>
              <button
                onClick={handleCloseModal}
                className="text-gray-400 text-3xl font-bold hover:text-white transition-colors"
              >
                &times;
              </button>
            </div>
            <div className="overflow-y-auto p-6">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-auto object-contain rounded-xl shadow-lg mb-6"
              />
              <p className="text-gray-300 mb-6 text-base">
                {selectedProject.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-3 py-1"
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
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;