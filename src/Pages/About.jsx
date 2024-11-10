import { motion } from "framer-motion";
import resume from "../assets/Muhammad-Hamim.pdf";
import SectionHeader from "../Components/SectionHeader";
import profile from "../assets/profile.jpg";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiCode } from "react-icons/hi";

const About = () => {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "MuhammadHamim-resume.pdf";
    link.click();
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const stats = [
    { label: "Years Experience", value: "0+" },
    { label: "Projects Completed", value: "15+" },
    { label: "Technologies", value: "10+" },
  ];

  return (
    <div id="about" className="py-32 bg-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full filter blur-3xl" />
      </div>

      <SectionHeader title="About Me" subTitle="My Journey" />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto px-4 mt-16"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <motion.div variants={itemVariants} className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000" />
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-2xl border-2 border-gray-700/50 backdrop-blur-sm">
                <motion.img
                  src={profile}
                  alt="Muhammad Hamim"
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
              
              {/* Stats overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent p-6">
                <div className="grid grid-cols-3 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
              <HiCode className="mr-2 text-purple-400" />
              <span className="text-gray-300">Frontend Developer</span>
            </div>

            <h2 className="text-3xl font-bold text-white">
              Crafting Digital Experiences with Modern Web Technologies
            </h2>

            <div className="space-y-4 text-gray-300">
              <p>
                Hello! I&apos;m Muhammad Hamim, a passionate Frontend Developer specializing in building responsive and user-friendly web applications. With expertise in React, JavaScript, and modern CSS frameworks, I transform ideas into seamless digital experiences.
              </p>
              
              <p>
                My development philosophy centers on creating clean, maintainable code while ensuring optimal performance and user experience. I stay current with industry trends and best practices to deliver modern, scalable solutions.
              </p>

              <p>
                Beyond coding, I&apos;m dedicated to continuous learning and collaboration. I thrive in environments where I can contribute to innovative projects and solve complex challenges through creative solutions.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8 relative z-10">
              <motion.button
                onClick={handleDownloadResume}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative z-10 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg flex items-center gap-2 hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                <FaDownload />
                Download Resume
              </motion.button>

              <div className="flex gap-4">
                <motion.a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all"
                >
                  <FaGithub size={24} />
                </motion.a>
                
                <motion.a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all"
                >
                  <FaLinkedin size={24} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;