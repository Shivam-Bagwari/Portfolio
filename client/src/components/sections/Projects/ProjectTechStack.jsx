function ProjectTechStack({ tech }) {
  return (
    <div className="mt-8 flex flex-wrap gap-2">
      {tech.map((item) => (
        <span
          key={item}
          className="
            rounded-full
            border border-white/[0.08]
            bg-white/[0.03]
            px-3.5
            py-1.5
            font-mono
            text-[11px]
            uppercase
            tracking-[0.08em]
            text-white/55
            transition-colors
            duration-300
            hover:border-white/15
            hover:bg-white/[0.05]
            hover:text-white/80
          "
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export default ProjectTechStack;