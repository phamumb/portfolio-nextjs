const Experiences = ({ data }) => {
  return (
    <div className="flex flex-col gap-6 dark:text-white">
      <div className="md:text-2xl text-xl font-bold">Experiences</div>
      {data.map((work) => (
        <div className="flex flex-col gap-2">
          <div className="md:text-lg text-base font-semibold">
            {work.company}
          </div>
          <div className="md:text-sm text-xs text-gray-400">{work.role}</div>
          <div className="md:text-sm text-xs text-gray-400">
            {work.from} - {work.to}
          </div>
          <div className="md:text-sm text-xs">{work.desc}</div>
          <div className="flex flex-wrap flex-row gap-2">
            {" "}
            {work.technology.split(",").map((tool) => (
              <div className="text-[10px] md:text-xs text-gray-500 rounded-xl bg-gray-200 py-1 px-2">{tool}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experiences;
