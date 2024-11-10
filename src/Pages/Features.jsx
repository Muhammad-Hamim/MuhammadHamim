
import { motion } from "framer-motion";
import SectionHeader from "../Components/SectionHeader";
import {  FaReact, FaDatabase } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import { SiWebpack } from "react-icons/si";

const Features = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      y: 50,
      opacity: 0,
      scale: 0.9
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.6
      }
    }
  };

  const iconVariants = {
    hidden: { 
      scale: 0,
      rotate: -180 
    },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  const features = [
    {
      icon: <FaReact />,
      title: "Frontend Development",
      description: "Building modern, interactive web applications using React.js, Next.js, and other cutting-edge technologies.",
      gradient: "from-blue-500 to-cyan-400"
    },
    {
      icon: <FaDatabase />,
      title: "Backend Integration",
      description: "Creating robust backend solutions with Node.js, Express, and database management systems.",
      gradient: "from-purple-500 to-pink-400"
    },
    {
      icon: <BiCodeAlt />,
      title: "Clean Code Architecture",
      description: "Writing maintainable, scalable, and efficient code following best practices and design patterns.",
      gradient: "from-green-500 to-emerald-400"
    },
    {
      icon: <SiWebpack />,
      title: "Performance Optimization",
      description: "Implementing advanced optimization techniques for lightning-fast web applications.",
      gradient: "from-orange-500 to-yellow-400"
    }
  ];

  return (
    <div id="features" className="py-32 bg-gray-900">
      <SectionHeader title="Expertise" subTitle="What I Offer" />
      
      <motion.div 
        className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-2 gap-8 mt-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="relative overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50"
          >
            <div className="p-8">
              <motion.div 
                variants={iconVariants}
                className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center text-white text-3xl mb-6`}
              >
                {feature.icon}
              </motion.div>
              
              <h3 className="text-2xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>

              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full" />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Features;