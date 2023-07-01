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
} from "react-icons/si";

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

  return (
    <div id="skills" className="py-28">
      <div className="text-center py-8">
        <h4 className="text-magenta uppercase text-xl">Skills & Expertise</h4>
        <h2 className="text-slate-100 text-6xl font-bold">My Skills</h2>
      </div>
      <div className="grid lg:grid-cols-4 items-center gap-10 mt-10 mx-8 lg:mx-28">
        {skills.map((item) => {
          return (
            <div
              key={item.name}
              className="shadow-sm shadow-slate-400 hover:shadow-sm hover:shadow-magenta duration-500 p-6 cursor-pointer rounded-md skill-div">
              <h2 className="flex items-center gap-6 text-4xl text-slate-300">
                <span className="skill-icon">{item.icon}</span>
                <span>{item.name}</span>
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
