function ProjectTechStack({ tech }) {
  return (
    <div className="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1">
      {tech.map((item, index) => (
        <span
          key={item}
          className="
            flex
            items-center
            font-mono
            text-[9px]
            leading-none
            text-white/35
            transition-colors
            duration-300
            group-hover:text-white/50
          "
        >
          {item}

          {index < tech.length - 1 && (
            <span className="ml-2 text-white/15">
              ·
            </span>
          )}
        </span>
      ))}
    </div>
  );
}

export default ProjectTechStack;