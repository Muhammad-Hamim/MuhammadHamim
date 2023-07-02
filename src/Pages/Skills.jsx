import { ImHtmlFive } from "react-icons/im";
import { LiaNode } from "react-icons/lia";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaBootstrap, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  SiCss3,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFirebase,
} from "react-icons/si";
import SectionHeader from "../Components/SectionHeader";

const Skills = () => {
  const skills = [
    { name: "HTML5", icon: <ImHtmlFive /> },
    { name: "CSS3", icon: <SiCss3 /> },
    { name: "TailwindCSS", icon: <SiTailwindcss /> },
    { name: "Bootstrap", icon: <FaBootstrap /> },
    { name: "JavaScript", icon: <IoLogoJavascript /> },
    { name: "React js", icon: <FaReact /> },
    { name: "Express js", icon: <SiExpress /> },
    { name: "Node js", icon: <LiaNode /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "GitHub", icon: <FaGithub /> },
  ];

  const skillAnimation = {
    offscreen: { y: 200, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.4, duration: 0.01 },
    },
  };
  return (
    <div id="skills" className="py-28">
      <SectionHeader title="My Skills" subTitle="Skills & Expertise" />
      <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ staggerChildren: 0.02 }}
        className="grid lg:grid-cols-4 items-center gap-10 mt-10 mx-8 lg:mx-28">
        {skills.map((item) => {
          return (
            <motion.div
              variants={skillAnimation}
              key={item.name}
              className="shadow-sm shadow-slate-400 hover:shadow-sm hover:shadow-magenta duration-500 p-6 cursor-pointer rounded-md skill-div">
              <h2 className="flex items-center gap-6 text-4xl text-slate-300">
                <span className="skill-icon">{item.icon}</span>
                <span>{item.name}</span>
              </h2>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Skills;
