function ProjectTechStack({ tech }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tech.map((item) => (
        <span
          key={item}
          className="
            rounded-full
            border
            border-white/[0.08]
            bg-white/[0.025]
            px-3
            py-1.5
            text-[10px]
            font-medium
            text-white/60
          "
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export default ProjectTechStack;