const SectionHeader = ({ title, subTitle }) => {
  return (
    <div className="text-center py-8">
      <h4 className="text-magenta uppercase text-xl">{subTitle}</h4>
      <h2 className="text-slate-100 text-6xl font-bold">{title}</h2>
    </div>
  );
};

export default SectionHeader;
