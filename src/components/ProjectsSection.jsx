import React from 'react'
import { Github, ExternalLink } from "lucide-react";
import { motion } from 'framer-motion';
import utkarsh from "../assets/UtkarshCoverImg.jpg"

// https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop {E-commerce pic}
// https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop {Wether app pic}

const projects = [
  {
    title: "Utkarsh 2025",
    description:"Utkarsh2025 is Swarnandhra College's official fest website, featuring dynamic events, sleek design, and smooth navigation.",
    image: utkarsh, // replace with real path
    tech: ["React + vite", "TypeScript", "TailwindCSS", "Shadcn", "Lovable"],
    github: "https://github.com/sumanthreddy217/Utkarsh2025",
    demo: "https://utkarsh2k25.vercel.app/",
  },
  {
    title: "To-Do List App",
    description:"To-Do-List is a simple task management app built with React and Vite for fast, modern performance. It offers a clean interface to add, view, and manage daily tasks efficiently.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
    tech: ["React + Vite", "CSS", "JavaScript"],
    github: "https://github.com/sumanthreddy217/To-Do-List",
    demo: "https://to-do-list-six-virid.vercel.app/",
  },
  {
    title: "Fire Detection System",
    description:"Developed a Fire Detection System, featuring a fully responsive interface. Designed to detect and alert fire incidents efficiently with a clean, user-friendly UI.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop",
    tech: ["Html", "CSS", "JavaScript", "Flask", "YOLOv8"],
    github: "https://github.com/sumanthreddy217/Fire-Dectection",
    demo: "...",
  },
];

const ProjectsSection = () => {
  return (
    <section id='projects' className='min-h-screen bg-dark-bg px-5 py-16 sm:px-8 md:px-10'>
      <div className="container mx-auto">

        {/* -- Section Heading -- */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="bg-linear-to-r from-blue-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Some of the projects I've worked on recently
          </p>
        </motion.div>

        {/* -- Projects Cards -- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto ">
          {projects.map((project, index) => (
            <motion.article
              key={index}
              className="group bg-linear-to-b from-[#141420] to-[#0d0f17] rounded-2xl border border-gray-800 shadow-xl overflow-hidden hover:shadow-[0_0_20px_rgba(211,211,211,0.64)] h-full flex flex-col"
              aria-labelledby={`project-${index}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
            >
              {/* Image area (only image scales on hover) */}
              <div className="relative h-45 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-110"
                  draggable="false"
                />
                {/* gradient overlay to darken image bottom */}
                <div className="absolute inset-0 pointer-events-none bg-linear-to-t from-[#0b0f1a]/80 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6 bg-[#25253d] flex flex-col justify-between grow">
                <h3 id={`project-${index}`} className="text-xl font-semibold text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 text-xs font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Footer buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 border border-gray-700 text-gray-100 bg-transparent hover:bg-gray-800 transition-colors duration-200"
                  >
                    <Github className="w-4 h-4 text-white" />
                    <span className="text-sm font-medium text-white">Code</span>
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 bg-linear-to-r from-blue-500 to-violet-500 text-white hover:opacity-95 transition-opacity duration-200"
                  >
                    <ExternalLink className="w-4 h-4 text-white" />
                    <span className="text-sm font-medium text-white">Demo</span>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection;