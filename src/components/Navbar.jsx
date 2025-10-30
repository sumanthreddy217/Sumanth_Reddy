import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };
// [#050115]
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-lg shadow-[#282a3dea]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="shrink-0">
          <img
            src="https://i.postimg.cc/ydzJ5nJ8/SR-logo.png"
            alt="Sumanth Reddy Logo"
            className="w-9 h-9 object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navigation.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="text-white font-semibold hover:text-[#fa3715] transition-all duration-200 ml-5 cursor-pointer"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Right Side Controls */}
        <div className="flex items-center space-x-3">
          <button className="bg-[#6d6d6db8] text-gray-800 rounded-lg px-2 py-1 hidden lg:block">
            Soon
          </button>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`flex items-center justify-center p-2 rounded-xl border border-white/20 
                bg-white/5 backdrop-blur-lg shadow-md transition-all duration-300 
                hover:bg-white/10 hover:scale-105 hover:shadow-white/20 cursor-pointer`}
            >
              {isMobileMenuOpen ? ( <X className="h-4 w-4 text-white transition-transform duration-300 rotate-90" /> ) : ( <Menu className="h-4 w-4 text-white transition-transform duration-300" /> )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full md:hidden bg-[#1f2026e9] backdrop-blur-md shadow-lg  border-t border-white/10 rounded-b-2xl animate-slideDown z-40">
          {navigation.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="block w-full text-center py-4 text-[15px] font-semibold text-gray-200 
                   hover:text-white hover:bg-white/10 transition-all duration-300 cursor-pointer"
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
