import toyland from "../assets/toylandTreasures.jpeg";
import dishDiary from "../assets/DishDiary.jpeg";
import { GiCheckMark } from "react-icons/gi";

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
  ];

  return (
    <div id="portfolio" className="py-28">
      <div className="text-center py-8">
        <h4 className="text-magenta uppercase text-xl">
          VISIT MY PORTFOLIO AND PROVIDE YOUR FEEDBACK
        </h4>
        <h2 className="text-slate-100 text-6xl font-bold">My Portfolio</h2>
      </div>
      <div className="mt-10 mx-10 lg:mx-28">
        {projects.map((project, index) => (
          <div key={project.name} className="grid grid-cols-2">
            <div
              className={`w-full h-[50vh] bg-top hover:bg-bottom cursor-pointer ${
                index % 2 === 0 ? "col-start-1" : "col-start-2"
              }`}
              style={{
                backgroundImage: `url(${project.photo})`,
                backgroundSize: "cover",
                transition: "ease-in-out 4s",
              }}></div>
            <div
              className={`bg-background hover:shadow-sm hover:shadow-magenta duration-500 h-fit shadow-sm shadow-slate-500 text-slate-300 p-5 ${
                index % 2 === 0 ? "col-start-1" : "col-start-2"
              }`}>
              <div>
                <h2 className="text-3xl font-semibold">{project.name}</h2>
                <p className="italic text-slate-500">{project.category}</p>
              </div>
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
