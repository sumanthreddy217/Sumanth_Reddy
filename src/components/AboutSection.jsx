import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const education = [
  {
    degree: "B.Tech in Computer Science Engineering and Data Science",
    institution: "Swarnandhra College of Engineering and Technology",
    period: "2022 – Present",
  },
  {
    degree: "Intermediate in MPC",
    institution: "Sri Chaitanya Junior College",
    period: "2020 – 2022",
  },
  {
    degree: "Secondary School",
    institution: "Medapati Surya Kumari Educational Academy",
    period: "2010 – 2020",
  },
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-dark-bg px-5 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-16"
    >
      {/* Heading */}
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
          About{" "}
          <span className="bg-linear-to-r from-blue-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
            Me
          </span>
        </h2>
        <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-2">
          Dedicated to crafting exceptional digital experiences through code
        </p>
      </motion.div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start text-left">
        {/* Left Side - Bio */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-5 text-blue-500">
            My Journey
          </h3>
          <motion.div
            className="space-y-4 text-gray-400 leading-relaxed text-[16px] sm:text-base"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p>
              Hello! I'm Karri Damodara Sai Sumanth Reddy, an aspiring Full Stack
              Developer with a passion for creating innovative and user-centric
              web applications. My journey in technology began with curiosity
              and has evolved into a dedicated pursuit of excellence in software
              development.
            </p>
            <p>
              I specialize in modern web technologies including HTML, CSS,
              JavaScript, and Bootstrap for frontend development, while actively
              expanding my expertise in backend technologies like React,
              Node.js, MongoDB, and Flask. My goal is to bridge the gap between
              beautiful design and robust functionality.
            </p>
            <p>
              What drives me is the ability to transform ideas into interactive,
              responsive applications that solve real-world problems. I believe
              in writing clean, maintainable code and staying updated with the
              latest industry trends and best practices.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or learning about the latest
              developments in AI and machine learning.
            </p>
          </motion.div>
        </motion.div>

        {/* Right Side - Education */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-5 text-blue-500">
            Education
          </h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="bg-[#0d1117] hover:bg-[#111827] transition-all p-6 rounded-xl shadow-[0_0_25px_#0096FF1A]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-linear-to-r from-blue-500 to-cyan-400 p-3 rounded-lg shrink-0">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white text-base sm:text-lg mb-2">
                      {edu.degree}
                    </h4>
                    <div className="flex flex-wrap items-center gap-3 text-gray-400 text-sm">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{edu.institution}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
