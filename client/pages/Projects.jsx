

import { Link } from "react-router-dom";

export default function Projects() {

  const projects = [
    {
      title: "StudyNotion",
      desc: "A full-stack ed-tech platform built with MERN stack.",
      tech: "React • Node • MongoDB",
      live:"#",
      git:"https://github.com/aksinghdev/study-notion-tech.git"
    },
    {
      title: "Portfolio Website",
      desc: "A mobile responsive personal portfolio built with React, Tailwind CSS and Mongodb.",
      tech: "React • Tailwind",
      live: "https://my-portfolio-two-iota-99.vercel.app/",
      git: "https://github.com/aksinghdev/My-Portfolio.git"
    },
    {
      title: "Tic Tac Clash Game",
      desc: "A two-player Tic Tac Toe game 🎮",
      tech: "HTML5 • CSS3 • Java Script (ES6)",
      live: "#",
      git: "https://github.com/aksinghdev/tic-tac-clash-gmae.git"
    }
  ];

  return (
    <section id="projects" className="bg-[#081b29] text-white py-5 px-5 md:py-20 md:px-20">

      <h2 className="text-4xl font-bold text-center mb-16">
        My Projects
      </h2>

      <div className=" grid md:grid-cols-3 gap-8">

        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#0a1f2f] p-6 rounded-xl flex flex-col justify-between  shadow-lg hover:border-2 border-cyan-300 hover:scale-105 transition"
          >
            <h3 className="text-2xl font-semibold mb-4">
              {project.title}
            </h3>

            <p className="text-gray-400 mb-4">
              {project.desc}
            </p>

            <p className="text-cyan-400 text-sm mb-6">
              {project.tech}
            </p>

            <div className="flex gap-4">
              <button className="bg-cyan-500 px-4 py-2 rounded">
                <a
                  href={project.live}
                  target="blank"
                >
                  Live
                </a>
              </button>

              
              <button className="border border-cyan-400 px-4 py-2 rounded hover:border-cyan-300 text-richblack-50 transition-all duration-150">
                <a href={project.git}
                   target="_blank">
                    GitHub
                </a>
              </button>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}