const About = () => {
  return (
    <div id="about" className="py-28">
      <div className="text-center py-8">
        <h4 className="text-magenta uppercase text-xl">
          Unveiling My Journey and Passions
        </h4>
        <h2 className="text-slate-100 text-6xl font-bold">About me</h2>
      </div>
      <div className="mt-10 mx-10 lg:mx-28">
        <div className="grid lg:grid-cols-2 items-start gap-14">
          <div>
            <img
              className="aboutImg w-full"
              src="https://i.ibb.co/ZBWt45G/rony.jpg"
              alt=""
            />
            <div className="mt-4 text-center">
              <button className="relative px-6 py-3 font-bold text-slate-200 group">
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-2 translate-y-2 bg-magenta rounded-sm group-hover:translate-x-0 group-hover:translate-y-0" />
                <span className="absolute inset-0 w-full h-full border-4 border-slate-200 rounded-sm" />
                <span className="relative">Download resume</span>
              </button>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default About;
