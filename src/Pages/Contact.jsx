import { FiFacebook } from "react-icons/fi";
import { LuGithub, LuLinkedin } from "react-icons/lu";
import SectionHeader from "../Components/SectionHeader";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const Contact = () => {
  const divMotion1 = {
    offscreen: { x: -100, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      rotate: [0, 10, 0],
      transition: { type: "spring", bounce: 0.4, duration: 1 },
    },
  };
  // const divMotion2 = {
  //   offscreen: { x: 100, opacity: 0 },
  //   onscreen: {
  //     x: 0,
  //     opacity: 1,
  //     rotate: [0, 10, 0],
  //     transition: { type: "spring", bounce: 0.4, duration: 1 },
  //   },
  // };

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
    <div id="contact" className="py-28">
      <SectionHeader title="Contact With Me" subTitle="CONTACT" />
      <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ staggerChildren: 0.5 }}
        className="mx-8 lg:mx-28 grid lg:grid-cols-8 gap-8 items-center py-10">
        <motion.div
          variants={divMotion1}
          className="lg:col-span-3 p-6 bg-background shadow-sm shadow-slate-600 rounded-md">
          <motion.h2
            variants={textMotion}
            className="text-3xl font-semibold text-slate-100">
            Muhammad Hamim
          </motion.h2>
          <motion.p variants={textMotion} className="italic text-slate-500">
            Front End Developer
          </motion.p>
          <motion.p
            variants={textMotion}
            className="text-slate-300 text-xl my-3">
            I am open to freelance opportunities! Feel free to connect with me
            through the contact details provided on my portfolio website. I look
            forward to discussing potential collaborations with you.
          </motion.p>
          <motion.p variants={textMotion} className="text-slate-300 text-xl">
            Phone:{" "}
            <a
              href="tel: +8801616026383"
              className="relative one hover:text-magenta duration-150">
              <span>+8801616026383</span>
              <span className="absolute link -bottom-1 left-0 w-0 transition-all h-[2px] bg-magenta"></span>
            </a>
          </motion.p>
          <motion.p variants={textMotion} className="text-slate-300 text-xl">
            Email:{" "}
            <a
              href="mailto: muhammadhamim.me@gmail.com"
              className="relative one hover:text-magenta duration-150">
              <span>muhammadhamim.me</span>
              <span className="absolute link -bottom-1 left-0 w-0 transition-all h-[2px] bg-magenta"></span>
            </a>
          </motion.p>
          <div className="mt-3">
            <h2 className="text-lg uppercase text-slate-400">find with me</h2>
            <div className="flex mt-6 gap-3">
              <a
                href="https://www.facebook.com/Muhammad.Hamim.01"
                rel="noreferrer"
                target="_blank"
                className="text-xl bg-gray-900 text-white p-3 rounded-md hover:text-magenta duration-300 hover:-translate-y-2">
                <FiFacebook />
              </a>
              <a
                href="https://github.com/Muhammad-Hamim"
                rel="noreferrer"
                target="_blank"
                className="text-xl bg-gray-900 text-white p-3 rounded-md hover:text-magenta duration-300 hover:-translate-y-2">
                <LuGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammadhamim01/"
                rel="noreferrer"
                target="_blank"
                className="text-xl bg-gray-900 text-white p-3 rounded-md hover:text-magenta duration-300 hover:-translate-y-2">
                <LuLinkedin />
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={divMotion1}
          className="lg:col-span-5 p-6 bg-background shadow-sm shadow-slate-600 rounded-md">
          <div className="w-full grid lg:grid-cols-2 gap-4 mb-6">
            <div className="flex flex-col gap-2">
              <label
                className="uppercase text-slate-500 font-normal text-sm"
                htmlFor="name">
                your name
              </label>
              <input
                id="name"
                className="w-full outline-none px-4 py-3 text-slate-300 focus:outline-2 focus:outline-magenta bg-neutral-900 shadow-sm shadow-slate-500 rounded-sm"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                className="uppercase text-slate-500 font-normal text-sm"
                htmlFor="phone">
                phone
              </label>
              <input
                id="phone"
                className="w-full outline-none px-4 py-3 text-slate-300 focus:outline-2 focus:outline-magenta bg-neutral-900 shadow-sm shadow-slate-500 rounded-sm"
                type="text"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 mb-6">
            <label
              className="uppercase text-slate-500 font-normal text-sm"
              htmlFor="email">
              email
            </label>
            <input
              id="email"
              className="w-full outline-none px-4 py-3 text-slate-300 focus:outline-2 focus:outline-magenta bg-neutral-900 shadow-sm shadow-slate-500 rounded-sm"
              type="email"
            />
          </div>
          <div className="flex flex-col gap-2 mb-6">
            <label
              className="uppercase text-slate-500 font-normal text-sm"
              htmlFor="subject">
              subject
            </label>
            <input
              id="subject"
              className="w-full outline-none px-4 py-3 text-slate-300 focus:outline-2 focus:outline-magenta bg-neutral-900 shadow-sm shadow-slate-500 rounded-sm"
              type="subject"
            />
          </div>

          <div className="flex flex-col gap-2 mb-6">
            <label
              className="uppercase text-slate-500 font-normal text-sm"
              htmlFor="message">
              your message
            </label>
            <textarea
              id="message"
              className="w-full outline-none px-4 py-3 text-slate-300 focus:outline-2 focus:outline-magenta bg-neutral-900 shadow-sm shadow-slate-500 rounded-sm resize-none h-48"></textarea>
          </div>
          <div>
            <button className="button hover:text-magenta flex items-center gap-1">
              <span>send message</span>
              <span>
                <FaArrowRight />
              </span>
            </button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
