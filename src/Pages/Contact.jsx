const Contact = () => {
  return (
    <div id="contact" className="py-28">
      <div className="text-center py-8">
        <h4 className="text-magenta uppercase text-xl">CONTACT</h4>
        <h2 className="text-slate-100 text-6xl font-bold">Contact With Me</h2>
      </div>
      <div className="mx-8 lg:mx-28 grid lg:grid-cols-8 gap-8 items-center py-10">
        <div className="col-span-3"></div>
        <div className="col-span-5 p-6 bg-background shadow-sm shadow-slate-600 rounded-md">
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
            <button className="text-center shadow-sm hover:shadow-magenta shadow-slate-500 w-full bg-neutral-900 duration-200 rounded-sm font-semibold text-magenta uppercase py-4">
              send message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
