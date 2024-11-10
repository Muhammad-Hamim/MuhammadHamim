import { motion } from "framer-motion";
import { ImHtmlFive } from "react-icons/im";
import { LiaNode } from "react-icons/lia";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaBootstrap, FaGithub } from "react-icons/fa";
import {
  SiCss3,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiTypescript,
  SiMongoose,
  SiJsonwebtokens,
} from "react-icons/si";
import SectionHeader from "../Components/SectionHeader";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", icon: <ImHtmlFive />, color: "from-orange-500 to-red-500" },
        { name: "CSS3", icon: <SiCss3 />, color: "from-blue-500 to-blue-600" },
        { name: "JavaScript", icon: <IoLogoJavascript />, color: "from-yellow-400 to-yellow-600" },
        { name: "React.js", icon: <FaReact />, color: "from-cyan-400 to-blue-500" },
        { name: "TypeScript", icon: <SiTypescript />, color: "from-cyan-400 to-blue-500" },
      ]
    },
    {
      title: "Styling",
      skills: [
        { name: "TailwindCSS", icon: <SiTailwindcss />, color: "from-teal-400 to-cyan-500" },
        { name: "Bootstrap", icon: <FaBootstrap />, color: "from-purple-500 to-purple-700" },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <LiaNode />, color: "from-green-500 to-green-700" },
        { name: "Express.js", icon: <SiExpress />, color: "from-gray-600 to-gray-800" },
      ]
    },
    {
      title: "Database & Tools",
      skills: [
        { name: "MongoDB", icon: <SiMongodb />, color: "from-green-600 to-green-800" },
        { name: "Mongoose", icon: <SiMongoose />, color: "from-green-600 to-green-800" },
        { name: "JWT", icon: <SiJsonwebtokens />, color: "from-green-600 to-green-800" },
        { name: "Firebase", icon: <SiFirebase />, color: "from-yellow-500 to-orange-600" },
        { name: "GitHub", icon: <FaGithub />, color: "from-gray-700 to-gray-900" },
      ]
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const categoryVariants = {
    hidden: {
      opacity: 0,
      y: 20
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

  const skillVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <div id="skills" className="py-32 bg-gray-900">
      <SectionHeader title="Technical Skills" subTitle="Technologies I Work With" />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto px-4 mt-16"
      >
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            variants={categoryVariants}
            className="mb-12 last:mb-0"
          >
            <h3 className="text-xl font-semibold text-white mb-6 ml-4">
              {category.title}
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  variants={skillVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-xl -z-10" />
                  
                  <div className="relative bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 transition-all duration-300 group-hover:border-gray-600/50">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center text-white text-2xl mb-4`}>
                      {skill.icon}
                    </div>
                    
                    <h4 className="text-white font-medium">
                      {skill.name}
                    </h4>
                    
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;