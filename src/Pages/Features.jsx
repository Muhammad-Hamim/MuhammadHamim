import { SiReact } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { AiOutlineMobile } from "react-icons/ai";
import { motion } from "framer-motion";

const Features = () => {
  const imageAnimate = {
    offscreen: { x: -100, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      rotate: [0, 10, 0],
      transition: { type: "spring", bounce: 0.4, duration: 1 },
    },
  };

  const textAnimate = {
    offscreen: { y: 100, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.4, duration: 1 },
    },
  };
  return (
    <div id="features" className="py-28">
      <div className="text-center py-8">
        <h4 className="text-magenta uppercase text-xl">Features</h4>
        <h2 className="text-slate-100 text-6xl font-bold">What I Do</h2>
      </div>
      <div className="grid lg:grid-cols-3 items-center gap-10 mt-10 mx-8 lg:mx-28">
        <motion.div
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ staggerChildren: 0.5 }}
          className="px-8 py-10 space-y-8 bg-background shadow-md hover:shadow-magenta shadow-slate-500 hover:-translate-y-3 rounded-md cursor-pointer duration-500">
          <motion.h2 variants={imageAnimate} className="text-6xl text-magenta">
            <SiReact />
          </motion.h2>
          <motion.h1
            variants={textAnimate}
            className="text-slate-300 text-2xl lg:text-4xl font-medium">
            Web Development
          </motion.h1>
          <motion.p variants={textAnimate} className="text-slate-400">
            I throw myself down among the tall grass by the stream as I lie
            close to the earth.
          </motion.p>
        </motion.div>
        <motion.div
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ staggerChildren: 0.5 }}
          className="px-8 py-10 space-y-8 bg-background shadow-md hover:shadow-magenta shadow-slate-500 hover:-translate-y-3 rounded-md cursor-pointer duration-300">
          <motion.h2 variants={imageAnimate} className="text-6xl text-magenta">
            <FaHtml5 />
          </motion.h2>
          <motion.h1
            variants={textAnimate}
            className="text-slate-300 text-2xl lg:text-4xl font-medium">
            Web Design
          </motion.h1>
          <motion.p variants={textAnimate} className="text-slate-400">
            I throw myself down among the tall grass by the stream as I lie
            close to the earth.
          </motion.p>
        </motion.div>
        <motion.div
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ staggerChildren: 0.5 }}
          className="px-8 py-10 space-y-8 bg-background shadow-md hover:shadow-magenta shadow-slate-500 hover:-translate-y-3 rounded-md cursor-pointer duration-300">
          <motion.h2 variants={imageAnimate} className="text-6xl text-magenta">
            <AiOutlineMobile />
          </motion.h2>
          <motion.h1
            variants={textAnimate}
            className="text-slate-300 text-2xl lg:text-4xl font-medium">
            App Development
          </motion.h1>
          <motion.p variants={textAnimate} className="text-slate-400">
            I throw myself down among the tall grass by the stream as I lie
            close to the earth.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;
