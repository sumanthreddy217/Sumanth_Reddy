import React from "react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-border bg-dark-bg">
      <div className="container mx-auto">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href="https://github.com/sumanthreddy217"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              <Github className="w-5 h-5 text-white" />
            </a>

            <a
              href="https://www.linkedin.com/in/k-sumanth-reddy"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full  bg-gray-800 hover:bg-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              <Linkedin className="w-5 h-5 text-white" />
            </a>

            <a
              href="mailto:karri.sumanthreddy.21@gmail.com"
              className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              <Mail className="w-5 h-5 text-white" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center space-y-2">
            <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
              Made with{" "}
              <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />{" "}
              by
            </p>
            <p className="text-gray-400 text-md flex items-center justify-center" >Karri Damodara Sai Sumanth Reddy</p>
            <p className="text-gray-400 text-sm">
              © {currentYear} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
