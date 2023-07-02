import { FiFacebook } from "react-icons/fi";
import { LuGithub, LuLinkedin } from "react-icons/lu";
import SectionHeader from "../Components/SectionHeader";

const Contact = () => {
  return (
    <div id="contact" className="py-28">
      <SectionHeader title="Contact With Me" subTitle="CONTACT" />
      <div className="mx-8 lg:mx-28 grid lg:grid-cols-8 gap-8 items-center py-10">
        <div className="lg:col-span-3 p-6 bg-background shadow-sm shadow-slate-600 rounded-md">
          <h2 className="text-3xl font-semibold text-slate-100">
            Muhammad Hamim
          </h2>
          <p className="italic text-slate-500">Front End Developer</p>
          <p className="text-slate-300 text-xl my-3">
            I am available for freelance work. Connect with me via and call in
            to my account.
          </p>
          <p className="text-slate-300 text-xl">
            Phone:{" "}
            <a
              href="tel: +8801616026383"
              className="relative one hover:text-magenta duration-150">
              <span>+8801616026383</span>
              <span className="absolute link -bottom-1 left-0 w-0 transition-all h-[2px] bg-magenta"></span>
            </a>
          </p>
          <p className="text-slate-300 text-xl">
            Email:{" "}
            <a
              href="mailto: muhammadhamim.me@gmail.com"
              className="relative one hover:text-magenta duration-150">
              <span>muhammadhamim.me</span>
              <span className="absolute link -bottom-1 left-0 w-0 transition-all h-[2px] bg-magenta"></span>
            </a>
          </p>
          <div className="mt-3">
            <h2 className="text-lg uppercase text-slate-400">find with me</h2>
            <div className="flex mt-6 gap-3">
              <a
                href="#"
                target="_blank"
                className="text-xl bg-gray-900 text-white p-3 rounded-md hover:text-magenta duration-300 hover:-translate-y-2">
                <FiFacebook />
              </a>
              <a
                href="#"
                target="_blank"
                className="text-xl bg-gray-900 text-white p-3 rounded-md hover:text-magenta duration-300 hover:-translate-y-2">
                <LuGithub />
              </a>
              <a
                href="#"
                target="_blank"
                className="text-xl bg-gray-900 text-white p-3 rounded-md hover:text-magenta duration-300 hover:-translate-y-2">
                <LuLinkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 p-6 bg-background shadow-sm shadow-slate-600 rounded-md">
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
            <button className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-sm hover:text-white group hover:bg-gray-50">
              <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease" />
              <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
              <span className="relative">send message</span>
            </button>
            {/* <button className="text-center shadow-sm hover:shadow-magenta shadow-slate-500 w-full bg-neutral-900 duration-200 rounded-sm font-semibold text-magenta uppercase py-4">
              send message
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
