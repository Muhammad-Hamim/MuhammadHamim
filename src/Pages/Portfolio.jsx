import toyland from "../assets/toylandTreasures.jpeg";
import dishDiary from "../assets/DishDiary.jpeg";

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
      clientCode: "https://github.com/Muhammad-Hamim/toyland-Treasures-client",
      serverCode: "https://github.com/Muhammad-Hamim/toyland-treasures-server",
      technology: ["React js", "JavaScript", "TailwindCSS"],
    },
  ];
  return (
    <div id="portfolio" className="py-28">
      <div className="text-center py-8">
        <h4 className="text-magenta uppercase text-xl">
          VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
        </h4>
        <h2 className="text-slate-100 text-6xl font-bold">My Portfolio</h2>
      </div>
      <div className="mt-10 mx-10 lg:mx-28 grid lg:grid-cols-2 items-center gap-10">
        {projects.map((project) => {
          return (
            <div key={project.name}>
              <div
                className="w-full h-[50vh] bg-top hover:bg-bottom cursor-pointer"
                style={{
                  backgroundImage: `url(${project.photo})`,
                  backgroundSize: "cover",
                  transition: "ease-in-out 3s",
                }}></div>

              <div className="bg-background relative shadow-sm shadow-slate-500 text-slate-300 p-5">
                <h2 className="text-3xl font-semibold">{project.name}</h2>
                <p>{project.category}</p>
                <p></p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
