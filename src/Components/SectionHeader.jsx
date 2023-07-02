import { motion } from "framer-motion";

const SectionHeader = ({ title, subTitle }) => {
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
    <motion.div
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ staggerChildren: 0.5 }}
      className="text-center py-8">
      <motion.h4
        variants={textMotion}
        className="text-magenta uppercase text-xl">
        {subTitle}
      </motion.h4>
      <motion.h2
        variants={textMotion}
        className="text-slate-100 text-6xl font-bold">
        {title}
      </motion.h2>
    </motion.div>
  );
};

export default SectionHeader;
