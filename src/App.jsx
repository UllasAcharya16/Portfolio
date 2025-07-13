import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaCode, FaRocket, FaTrophy, FaGraduationCap, FaEnvelope, FaPhone, FaMapMarkerAlt, FaChevronDown, FaEye, FaExternalLinkAlt } from "react-icons/fa";
import "./App.css";
const Portfolio = () => {
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    document.title = "Ullas Acharya | Software Engineer";
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const projects = [
    {
      id: 1,
      title: "Zero Day Attack Detection",
      desc: "Advanced cybersecurity system using ML algorithms to detect unknown threats by forming boundaries around anomalies using nearest-neighbor logic.",
      tech: ["Python", "Machine Learning", "Cybersecurity", "OpenCV"],
      icon: "🛡️",
    },
    {
      id: 2,
      title: "Shoplifting Detection Model",
      desc: "Real-time video analysis using deep learning for theft prevention in retail environments with 95% accuracy.",
      tech: ["Deep Learning", "Computer Vision", "Python", "TensorFlow"],
      icon: "👁️",
    },
    {
      id: 3,
      title: "Face Detection Software",
      desc: "Trained 500+ facial images with LBPH and OpenCV for personalized detection with real-time processing capabilities.",
      tech: ["OpenCV", "Python", "LBPH", "Computer Vision"],
      icon: "🎭",
    },
    {
      id: 4,
      title: "College Management System",
      desc: "Comprehensive platform streamlining student, event, and bus information management with intuitive dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Express.js"],
      icon: "🏫",
    },
    {
      id: 5,
      title: "Study Mart",
      desc: "E-commerce platform enabling students to buy, sell, or bid on second-hand educational materials with secure payment.",
      tech: ["React", "Node.js", "MongoDB", "Payment Gateway"],
      icon: "📚",
    },
  ];

  const skills = [
    { 
      name: "Python", 
      category: "Programming Languages",
      icon: "🐍",
    },
    { 
      name: "React", 
      category: "Frontend Development",
      icon: "⚛️",
    },
    { 
      name: "Node.js", 
      category: "Backend Development",
      icon: "🟢",
    },
    { 
      name: "Machine Learning", 
      category: "AI & Data Science",
      icon: "🤖",
    },
    { 
      name: "MongoDB", 
      category: "Database",
      icon: "🍃",
    },
    { 
      name: "Data Structures & Algorithms", 
      category: "Computer Science",
      icon: "🧮",
    },
    { 
      name: "OpenCV", 
      category: "Computer Vision",
      icon: "👁️",
    },
    { 
      name: "Cybersecurity", 
      category: "Security",
      icon: "🔒",
    },
  ];

  const achievements = [
    { title: "Top 10 in COMEDKARS Hackathon", icon: "🏆" },
    { title: "Top 76 in Manthana National Level Hackathon", icon: "🥇" },
    { title: "Best React Project Award", icon: "⚛️" },
    { title: "Best Project in Technical Ideathon", icon: "💡" },
  ];

  return (
    <div className="bg-black text-white min-h-screen w-full overflow-x-hidden scroll-smooth">
      {/* Hero Section */}
      <section className="min-h-screen w-full flex flex-col items-center justify-center px-4 border-b border-gray-800">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center w-full"
        >
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto bg-gray-800 rounded-full flex items-center justify-center text-3xl sm:text-4xl mb-6 border border-gray-700">
              💻
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white"
          >
            Ullas Acharya
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Software Engineer | Full-Stack Developer | AI Enthusiast
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-gray-400 mb-12 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed px-4"
          >
            Transforming ideas into reality through code. Passionate about creating
            innovative solutions that make a real-world impact.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 sm:gap-6 justify-center mb-12"
          >
            <motion.a
              href="https://github.com/UllasAcharya16"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-800 hover:bg-gray-700 p-3 sm:p-4 rounded-lg border border-gray-700 transition-all duration-300"
            >
              <FaGithub className="text-xl sm:text-2xl" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/ullas-acharya-29208b280/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-800 hover:bg-gray-700 p-3 sm:p-4 rounded-lg border border-gray-700 transition-all duration-300"
            >
              <FaLinkedin className="text-xl sm:text-2xl" />
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black hover:bg-gray-100 px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Download Resume
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about-section" className="py-16 sm:py-20 px-4 border-b border-gray-800">
        <div className="w-full px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
                About Me
              </h2>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
                I'm a passionate Computer Science student with expertise in full-stack development, 
                machine learning, and cybersecurity. My journey in tech is driven by curiosity and 
                the desire to solve complex problems through innovative solutions.
              </p>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                From hackathons to personal projects, I constantly challenge myself to learn new 
                technologies and push the boundaries of what's possible. I believe in the power 
                of technology to create positive change in the world.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-xl sm:text-2xl font-bold mb-8 text-white">
                Technical Skills
              </h3>
              <div className="grid gap-3 sm:gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="group bg-gray-900 rounded-lg p-3 sm:p-4 border border-gray-800 hover:border-gray-700 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gray-800 flex items-center justify-center text-white font-bold text-base sm:text-lg border border-gray-700">
                        {skill.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white group-hover:text-gray-300 transition-colors text-sm sm:text-base">
                          {skill.name}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-400">
                          {skill.category}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects-section" className="py-16 sm:py-20 px-4 bg-gray-900 border-b border-gray-800">
        <div className="w-full px-4">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white"
          >
            Featured Projects
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-black rounded-lg p-4 sm:p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 cursor-pointer"
                onClick={() => setActiveProject(project)}
              >
                <div className="text-3xl sm:text-4xl mb-4">{project.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 sm:px-3 py-1 bg-gray-800 text-xs rounded-full text-gray-300 border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center text-gray-300 hover:text-white transition-colors">
                  <FaEye className="mr-2" />
                  <span className="text-sm">View Details</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 sm:py-20 px-4 border-b border-gray-800">
        <div className="w-full px-4">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white"
          >
            Achievements
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid sm:grid-cols-2 gap-4 sm:gap-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-900 p-4 sm:p-6 rounded-lg border border-gray-800 hover:border-gray-700 transition-all duration-300"
              >
                <div className="flex items-center">
                  <div className="text-2xl sm:text-3xl mr-4">{achievement.icon}</div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-white">
                      {achievement.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-20 px-4 bg-gray-900">
        <div className="w-full px-4">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white"
          >
            Let's Connect
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid sm:grid-cols-3 gap-6 sm:gap-8 text-center"
          >
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-black p-4 sm:p-6 rounded-lg border border-gray-800 hover:border-gray-700 transition-all duration-300"
            >
              <FaPhone className="text-2xl sm:text-3xl text-white mx-auto mb-4" />
              <h3 className="font-semibold mb-2 text-white text-sm sm:text-base">Phone</h3>
              <p className="text-gray-400 text-sm sm:text-base">+91 7204954136</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-black p-4 sm:p-6 rounded-lg border border-gray-800 hover:border-gray-700 transition-all duration-300"
            >
              <FaEnvelope className="text-2xl sm:text-3xl text-white mx-auto mb-4" />
              <h3 className="font-semibold mb-2 text-white text-sm sm:text-base">Email</h3>
              <p className="text-gray-400 text-sm sm:text-base break-all">acharyaullas69@gmail.com</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-black p-4 sm:p-6 rounded-lg border border-gray-800 hover:border-gray-700 transition-all duration-300"
            >
              <FaMapMarkerAlt className="text-2xl sm:text-3xl text-white mx-auto mb-4" />
              <h3 className="font-semibold mb-2 text-white text-sm sm:text-base">Location</h3>
              <p className="text-gray-400 text-sm sm:text-base">India</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 bg-black border-t border-gray-800">
        <div className="w-full px-4 text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            © {new Date().getFullYear()} Ullas Acharya. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Project Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-gray-900 rounded-lg p-6 sm:p-8 max-w-2xl w-full border border-gray-800 my-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center">
                  <div className="text-3xl sm:text-4xl mr-4">{activeProject.icon}</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">{activeProject.title}</h3>
                </div>
                <button
                  onClick={() => setActiveProject(null)}
                  className="text-gray-400 hover:text-white transition-colors text-2xl ml-4"
                >
                  ×
                </button>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">{activeProject.desc}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {activeProject.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-800 text-xs sm:text-sm rounded-full text-gray-300 border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-black hover:bg-gray-100 px-4 sm:px-6 py-2 rounded-lg transition-colors flex items-center font-semibold justify-center text-sm sm:text-base">
                  <FaExternalLinkAlt className="mr-2" />
                  Live Demo
                </button>
                <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 sm:px-6 py-2 rounded-lg transition-colors flex items-center border border-gray-700 justify-center text-sm sm:text-base">
                  <FaGithub className="mr-2" />
                  Source Code
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;