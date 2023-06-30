import { SiReact } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { AiOutlineMobile } from "react-icons/ai";

const Features = () => {
  return (
    <div id="features" className="py-28">
      <div className="text-center py-8">
        <h4 className="text-magenta uppercase text-xl">Features</h4>
        <h2 className="text-slate-100 text-6xl font-bold">What I Do</h2>
      </div>
      <div className="grid lg:grid-cols-3 items-center gap-10 mt-10 mx-10 lg:mx-28">
        <div className="px-8 py-10 space-y-8 bg-background shadow-md hover:shadow-magenta shadow-slate-500 hover:-translate-y-3 rounded-md cursor-pointer duration-500">
          <h2 className="text-6xl text-magenta">
            <SiReact />
          </h2>
          <h1 className="text-slate-300 text-2xl lg:text-4xl font-medium">
            Web Development
          </h1>
          <p className="text-slate-400">
            I throw myself down among the tall grass by the stream as I lie
            close to the earth.
          </p>
        </div>
        <div className="px-8 py-10 space-y-8 bg-background shadow-md hover:shadow-magenta shadow-slate-500 hover:-translate-y-3 rounded-md cursor-pointer duration-300">
          <h2 className="text-6xl text-magenta">
            <FaHtml5 />
          </h2>
          <h1 className="text-slate-300 text-2xl lg:text-4xl font-medium">
            Web Design
          </h1>
          <p className="text-slate-400">
            I throw myself down among the tall grass by the stream as I lie
            close to the earth.
          </p>
        </div>
        <div className="px-8 py-10 space-y-8 bg-background shadow-md hover:shadow-magenta shadow-slate-500 hover:-translate-y-3 rounded-md cursor-pointer duration-300">
          <h2 className="text-6xl text-magenta">
            <AiOutlineMobile />
          </h2>
          <h1 className="text-slate-300 text-2xl lg:text-4xl font-medium">
            App Development
          </h1>
          <p className="text-slate-400">
            I throw myself down among the tall grass by the stream as I lie
            close to the earth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
