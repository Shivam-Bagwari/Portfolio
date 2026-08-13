function ProjectTechStack({ tech = [] }) {
  return (
    <div className="flex flex-wrap items-center gap-[8px]">
      {tech.map((item) => (
        <span
          key={item}
          className="
            inline-flex
            h-[20px]
            items-center
            justify-center
            rounded-full
            border
            border-white/[0.10]
            bg-white/[0.035]
            px-[10px]
            font-mono
            text-[10px]
            font-medium
            leading-none
            text-white/55
            backdrop-blur-[10px]
            transition-colors
            duration-200
            hover:border-white/[0.15]
            hover:bg-white/[0.06]
            hover:text-white/75
          "
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export default ProjectTechStack;