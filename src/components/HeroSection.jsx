import React from "react";
import { Download, Mail } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex justify-center items-center bg-dark-bg mt-3">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
          {/* Left - Profile Image */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative">
              <div className="absolute inset-0 gradient-primary rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-85 md:h-85 rounded-full overflow-hidden border-4 border-primary/20 shadow-glow">
                <img
                  src="https://i.postimg.cc/1RBKPZ51/Sumanth-Reddy.jpg"
                  alt="Sumanth Reddy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Right - Text Content */}
          <motion.div
            className="space-y-6 text-center md:text-left px-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >  
            <div className="inline-block px-4 py-2 rounded-full bg-blue-500/10 text-blue-500 text-sm font-medium">
              👋 Welcome to my portfolio
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl text-white font-bold leading-tight">
              Hi, I'm <br />
              <span
                className="whitespace-nowrap text-5xl sm:text-4xl md:text-5xl lg:text-[3.8rem]"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(217, 91%, 60%), hsl(270, 75%, 65%), hsl(180, 85%, 55%))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Sumanth Reddy
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-400">
              Aspiring Full Stack Developer passionate about building
              user-friendly and responsive web applications
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3">
              <button
                className="flex justify-center items-center px-4 py-2 rounded-lg bg-linear-to-r from-blue-500 to-purple-500 text-white hover:scale-105 transition-transform duration-200 cursor-pointer"
                onClick={scrollToContact}
              >
                <Mail className="mr-2 h-5 w-5" />
                Get in Touch
              </button>

              <button className="flex justify-center items-center px-4 py-2 rounded-lg border border-gray-500 text-white hover:bg-gray-800 transition-colors duration-200 cursor-pointer">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
