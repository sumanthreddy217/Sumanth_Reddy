import { Mail, Send, Linkedin, Github, Twitter } from 'lucide-react';
import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from 'framer-motion';

const ContactSection = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    emailjs
      .sendForm(
        "service_iumyn1q",
        "template_robvazm",
        form.current,
        "6wVkcE2vFBtbWfa8c"
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        () => toast.error("Failed to send message. Please try again.")
      )
      .finally(() => setIsSubmitting(false));
  };

  const contactInfo = [

    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/k-sumanth-reddy",
      link: "https://www.linkedin.com/in/k-sumanth-reddy",
    },
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/sumanthreddy217",
      link: "https://github.com/sumanthreddy217",
    },
    {
      icon: Twitter,
      title: "Twitter",
      value: "x.com/SumanthReddy210",
      link: "https://x.com/SumanthReddy210",
    },
  ];
// [#0B1120]
  return (
    <section
      id="contact"
      className="min-h-screen bg-dark2-bg px-6 sm:px-8 md:px-12 lg:px-20 py-16 text-gray-200"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In{" "}
            <span className="bg-linear-to-r from-blue-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Let's discuss opportunities and collaborate on exciting projects
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-blue-400 text-left">
                Let's Connect
              </h3>
              <p className="text-gray-400 leading-relaxed text-left">
                I’m always open to discussing new opportunities, interesting
                projects, or just having a conversation about technology and
                development. Feel free to reach out through any of the channels
                below.
              </p>
            </div>

            <div className="space-y-5 ">
              {contactInfo.map((contact, index) => (
                <a
                  key={contact.title}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 rounded-xl border border-[#1e293b] hover:border-blue-500 transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.1)] bg-[#0f172a]/70 hover:bg-[#0f172a]/90 backdrop-blur-sm"
                >
                  <div className="bg-linear-to-r from-blue-500 to-purple-500 p-3 rounded-lg">
                    <contact.icon className="h-5 w-5 text-white " />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-100 text-left">
                      {contact.title}
                    </p>
                    <p className="text-sm text-gray-400">{contact.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <div
            className="p-8 rounded-2xl border w-full max-w-lg mx-auto border-[#1e293b] bg-[#0f172a]/80 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] backdrop-blur-lg transition-all duration-500"
          >
            <h3 className="text-2xl font-bold mb-6 text-blue-400 text-left">
              Send a Message
            </h3>

            <form
              ref={form}
              onSubmit={handleSubmit}
              className="space-y-6 text-gray-100 text-sm"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full h-10 px-3 bg-[#0f172a] border border-[#1e293b] rounded-lg text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full h-10 px-3 bg-[#0f172a] border border-[#1e293b] rounded-lg text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-3 py-2 bg-[#0f172a] border border-[#1e293b] rounded-lg text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none transition-all"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center items-center gap-2 h-10 bg-linear-to-r from-blue-500 to-sky-400 text-white font-medium rounded-lg hover:opacity-90 active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-right" />
    </section>
  );
};

export default ContactSection;
