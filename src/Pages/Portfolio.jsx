import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import toyland from "../assets/toylandTreasures.jpeg";
import dishDiary from "../assets/DishDiary.jpeg";
import onlineVotingApplication from "../assets/online-voting-application.png";import SectionHeader from "../Components/SectionHeader";
import { FaEye, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { BiChip } from "react-icons/bi";

const Portfolio = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      name: "Online Voting Application",
      photo: onlineVotingApplication,
      description: "A secure, transparent online voting platform",
      features: [
        "Real-time voting updates",
        "Role-based access control",
        "Comprehensive voting history and results"
      ],
      technology: ["React.js", "TypeScript", "Node.js", "MongoDB",'Mongoose', "Express.js", "JWT", "Tailwind CSS",'Shadcn UI'],
      liveLink: "https://online-voting-app-client.vercel.app/",
      clientCode: "https://github.com/Muhammad-Hamim/online-voting-app-client",
    },
    {
      name: "Toyland Treasures",
      photo: toyland,
      description: "A toy sell website",
      features: [
        "User authentication and authorization",
        "Dynamic product management",
        "Responsive design across devices"
      ],
      technology: ["React.js", "Node.js", "MongoDB", "Express.js", "Firebase", "Tailwind CSS"],
      liveLink: "https://toyland-treasures.web.app/",
      clientCode: "https://github.com/Muhammad-Hamim/toyland-Treasures-client",
    },
    
    {
      name: "The Dish Diary",
      photo: dishDiary,
      description: "A recipe hunter website",
      features: [
        "Recipe search and filtering",
        "User favorites system",
        "Interactive UI components"
      ],
      technology: ["React.js", "JavaScript", "Tailwind CSS", "Firebase Auth", "REST API"],
      liveLink: "https://the-dish-diary-auth-3421e.web.app/",
      clientCode: "https://github.com/Muhammad-Hamim/the-dish-diary-client",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const projectVariants = {
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

  return (
    <div id="portfolio" className="py-32 bg-gray-900 ">
      <SectionHeader title="Featured Projects" subTitle="My Work" />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto px-4 mt-16"
      >
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              variants={projectVariants}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50"
            >
              <div className="relative aspect-video overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60 z-10"
                  initial={{ opacity: 0.6 }}
                  whileHover={{ opacity: 0.8 }}
                />
                
                <motion.img
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  src={project.photo}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
                
                <AnimatePresence>
                  {hoveredProject === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 flex items-center justify-center z-20"
                    >
                      <div className="flex gap-4">
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-white/20 transition-colors"
                        >
                          <FaEye className="text-white" />
                          <span className="text-white">Live Demo</span>
                        </a>
                        <a
                          href={project.clientCode}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-white/20 transition-colors"
                        >
                          <FaGithub className="text-white" />
                          <span className="text-white">Source Code</span>
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
                    <p className="text-gray-400">{project.description}</p>
                  </div>
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <FaExternalLinkAlt />
                  </motion.a>
                </div>

                <div className="mb-6">
                  <h4 className="text-gray-300 font-medium mb-2 flex items-center gap-2">
                    <BiChip /> Key Features
                  </h4>
                  <ul className="text-gray-400 list-disc list-inside">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="mb-1">{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technology.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-sm bg-gray-700/50 text-gray-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Portfolio;