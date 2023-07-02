import toyland from "../assets/toylandTreasures.jpeg";
import dishDiary from "../assets/DishDiary.jpeg";
import { GiCheckMark } from "react-icons/gi";
import { motion } from "framer-motion";

const Portfolio = () => {
  const projects = [
    {
      name: "Toyland Treasures",
      photo: toyland,
      category: "A toy sell website",
      features: [
        "Exclusive Toy Marketplace",
        "Secure User Authentication",
        "Responsive Website Design",
        "Seamless Inventory Management",
      ],
      liveLink: "https://toyland-treasures.web.app/",
      clientCode: "https://github.com/Muhammad-Hamim/toyland-Treasures-client",
      serverCode: "https://github.com/Muhammad-Hamim/toyland-treasures-server",
      technology: ["React js", "Node js", "MongoDB"],
    },
    {
      name: "The Dish Diary",
      photo: dishDiary,
      category: "A recipe hunter website",
      features: [
        "Inspiring Recipes: Discover mouthwatering dishes",
        "User-friendly Design: Seamless browsing experience",
        "Secure Authentication: Account safety assured",
        "Interactive Guides: Step-by-step cooking instructions and tips",
      ],
      liveLink: "https://the-dish-diary-auth-3421e.web.app/",
      clientCode: "https://github.com/Muhammad-Hamim/the-dish-diary-client",
      serverCode: "https://github.com/Muhammad-Hamim/the-dish-diary-server",
      technology: ["React js", "JavaScript", "TailwindCSS"],
    },
    {
      name: "Polyglot Pioneers Academy",
      photo: toyland,
      category: "A toy sell website",
      features: [
        "Exclusive Toy Marketplace",
        "Secure User Authentication",
        "Responsive Website Design",
        "Seamless Inventory Management",
      ],
      liveLink: "https://toyland-treasures.web.app/",
      clientCode: "https://github.com/Muhammad-Hamim/toyland-Treasures-client",
      serverCode: "https://github.com/Muhammad-Hamim/toyland-treasures-server",
      technology: ["React js", "Node js", "MongoDB"],
    },
  ];
  const projectMotion = {
    offscreen: {
      x: "-500",
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };
  const textAnimation = {
    offscreen: {
      transform: "scaleX(0)",
      transformOrigin: "left",
      opacity: 0,
    },
    onscreen: {
      transform: "scaleX(1)",
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };
  const textMotion = {
    offscreen: {
      y: 100,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };
  return (
    <div id="portfolio" className="py-28">
      <div className="text-center py-8">
        <h4 className="text-magenta uppercase text-xl">
          VISIT MY PORTFOLIO AND PROVIDE YOUR FEEDBACK
        </h4>
        <h2 className="text-slate-100 text-6xl font-bold">My Portfolio</h2>
      </div>
      <div className="mt-10 mx-8 lg:mx-28">
        {projects.map((project, index) => (
          <motion.div
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ staggerChildren: 0.5 }}
            key={project.name}
            className="flex flex-col lg:flex-row lg:items-center mb-10 lg:mb-0">
            <motion.div
              variants={projectMotion}
              className={`w-full lg:w-1/2 h-[50vh] bg-top cursor-pointer ${
                index % 2 === 0 ? "lg:order-1" : "lg:order-2"
              }`}
              style={{
                backgroundImage: `url(${project.photo})`,
                backgroundSize: "cover",
              }}></motion.div>
            <motion.div
              variants={textAnimation}
              className={`"w-full lg:w-1/2 bg-background hover:shadow-sm hover:shadow-magenta duration-500 shadow-sm shadow-slate-500 text-slate-300 p-5 ${
                index % 2 === 0 ? "lg:order-2" : "lg:order-1"
              }`}>
              <motion.div variants={textMotion}>
                <h2 className="text-3xl font-semibold">{project.name}</h2>
                <p className="italic text-slate-500">{project.category}</p>
              </motion.div>
              <div className="flex items-center flex-wrap my-4 gap-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:bg-magenta duration-300 px-4 border-2 border-magenta rounded-full text-slate-300 cursor-pointer">
                  Live link
                </a>
                <a
                  href={project.clientCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:bg-magenta hover:bg-opacity-25 duration-300 px-4 border-2 border-magenta rounded-full text-slate-300 cursor-pointer">
                  Client code
                </a>
                <a
                  href={project.serverCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:bg-magenta hover:bg-opacity-25 duration-300 px-4 border-2 border-magenta rounded-full text-slate-300 cursor-pointer">
                  Server code
                </a>
              </div>
              <div className="my-4">
                {project.features.map((feature) => (
                  <p className="flex items-center gap-3 mb-2" key={feature}>
                    <span className="text-magenta bg-magenta bg-opacity-20 p-2 rounded-full">
                      <GiCheckMark />
                    </span>
                    <span>{feature}</span>
                  </p>
                ))}
              </div>
              <div className="flex items-center flex-wrap gap-4">
                {project.technology.map((item) => (
                  <p
                    key={item}
                    className="bg-magenta bg-opacity-50 px-4 rounded-full text-slate-300 cursor-pointer">
                    {item}
                  </p>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
