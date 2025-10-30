import React from "react";
import { motion } from "framer-motion";
import { Code2, Database, Layout, Server } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Layout,
      skills: ["HTML5", "CSS3", "JavaScript", "TypeScript",  "React", "Tailwind CSS", "Bootstrap"],
    },
    {
      title: "Backend",
      icon: Server,
      skills: ["Python", "Java", "Node.js", "Express", ],
    },
    {
      title: "Database",
      icon: Database,
      skills: ["MongoDB", "MySQL", ],
    },
    {
      title: "Tools & Others",
      icon: Code2,
      skills: ["Git", "AWS", "Figma", "VS Code", "Postman"],
    },
  ];

  return (
    <section id="skills" className="min-h-screen bg-dark2-bg px-5 py-16 sm:px-8 md:px-10">
      {/* Section Header */}
      <motion.div
        className="text-center mb-16 mt-10"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          My{" "}
          <span className="bg-linear-to-r from-blue-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
            Skills
          </span>
        </h1>
        <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
          Technologies and tools I use to bring ideas to life
        </p>
      </motion.div>

      {/* Skill Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            className="rounded-xl border border-gray-800 bg-linear-to-b from-[#0f172a] to-[#1e293b] shadow-lg hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all duration-300 p-6 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            {/* Icon */}
            <div className="w-14 h-14 flex items-center justify-center bg-linear-to-r from-blue-600 to-violet-400 p-3 rounded-xl mb-4">
              <category.icon className="w-8 h-8 text-white" />
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-white mb-3">{category.title}</h3>

            {/* Skills */}
            <div className="flex flex-wrap justify-center gap-2">
              {category.skills.map((skill, idx) => (
                <motion.span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium hover:bg-blue-500/20 transition"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + idx * 0.05 }}
                  viewport={{ once: true }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
