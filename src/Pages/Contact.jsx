import { FiFacebook } from "react-icons/fi";
import { LuGithub, LuLinkedin, LuMail, LuPhone, LuSend } from "react-icons/lu";
import SectionHeader from "../Components/SectionHeader";
import { motion } from "framer-motion";

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1
      }
    }
  };

  const inputVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  const socialVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.6,
        duration: 0.6
      }
    }
  };

  return (
    <div id="contact" className="py-24 bg-gradient-to-b from-background via-background/90 to-background">
      <SectionHeader title="Get In Touch" subTitle="CONTACT" />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="container mx-auto px-4 lg:px-8 mt-12"
      >
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Info Card */}
          <motion.div
            variants={cardVariants}
            className="lg:col-span-4 p-8 bg-neutral-900/50 backdrop-blur-sm rounded-xl border border-neutral-800 shadow-lg"
          >
            <motion.h2 variants={inputVariants} className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-magenta via-purple-500 to-blue-500">
              Muhammad Hamim
            </motion.h2>
            <motion.p variants={inputVariants} className="text-neutral-400 mt-1">
              Frontend Developer
            </motion.p>
            
            <motion.p variants={inputVariants} className="mt-6 text-neutral-300 leading-relaxed">
              I&apos;m available for freelance projects and exciting opportunities. Let&apos;s create something amazing together!
            </motion.p>

            <motion.div variants={inputVariants} className="mt-8 space-y-4">
              <a href="tel:+8801616026383" className="flex items-center gap-3 text-neutral-300 hover:text-magenta transition-colors duration-300">
                <LuPhone className="w-5 h-5" />
                <span>+880 1616 026383</span>
              </a>
              <a href="mailto:muhammadhamim.me@gmail.com" className="flex items-center gap-3 text-neutral-300 hover:text-magenta transition-colors duration-300">
                <LuMail className="w-5 h-5" />
                <span>muhammadhamim.me@gmail.com</span>
              </a>
            </motion.div>

            <motion.div variants={inputVariants} className="mt-8 pt-8 border-t border-neutral-800">
              <h3 className="text-sm font-medium text-neutral-400 uppercase tracking-wider mb-4">
                Connect With Me
              </h3>
              <div className="flex gap-4">
                {[
                  { Icon: FiFacebook, url: "https://www.facebook.com/Muhammad.Hamim.01" },
                  { Icon: LuGithub, url: "https://github.com/Muhammad-Hamim" },
                  { Icon: LuLinkedin, url: "https://www.linkedin.com/in/muhammadhamim01/" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    variants={socialVariants}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-lg bg-neutral-800 text-neutral-300 hover:text-magenta hover:bg-neutral-700 transition-all duration-300 hover:-translate-y-1"
                  >
                    <social.Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={cardVariants}
            className="lg:col-span-8 p-8 bg-neutral-900/50 backdrop-blur-sm rounded-xl border border-neutral-800 shadow-lg"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div variants={inputVariants} className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-300">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-magenta focus:ring-1 focus:ring-magenta transition-colors duration-200"
                    placeholder="Your name"
                  />
                </motion.div>
                
                <motion.div variants={inputVariants} className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-neutral-300">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-magenta focus:ring-1 focus:ring-magenta transition-colors duration-200"
                    placeholder="Your phone number"
                  />
                </motion.div>
              </div>

              <motion.div variants={inputVariants} className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-neutral-300">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-magenta focus:ring-1 focus:ring-magenta transition-colors duration-200"
                  placeholder="your.email@example.com"
                />
              </motion.div>

              <motion.div variants={inputVariants} className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium text-neutral-300">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-magenta focus:ring-1 focus:ring-magenta transition-colors duration-200"
                  placeholder="What's this about?"
                />
              </motion.div>

              <motion.div variants={inputVariants} className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-neutral-300">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-magenta focus:ring-1 focus:ring-magenta transition-colors duration-200 resize-none"
                  placeholder="Your message..."
                />
              </motion.div>

              <motion.button
                variants={inputVariants}
                type="submit"
                className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-magenta to-purple-600 text-white rounded-lg hover:from-magenta hover:to-purple-700 transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>Send Message</span>
                <LuSend className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;