function SkillCategory({ category, skills }) {
  return (
    <div
      className="
        rounded-[24px]
        border
        border-white/10
        bg-white/[0.02]
        backdrop-blur-xl
        p-6
        transition-all
        duration-300
        hover:border-white/20
        hover:-translate-y-1
      "
    >
      <h3
        className="
          mb-5
          font-mono
          text-[11px]
          uppercase
          tracking-[0.35em]
          text-white/35
        "
      >
        {category}
      </h3>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="
              rounded-full
              border
              border-white/10
              bg-white/[0.03]
              px-3
              py-1.5
              text-[13px]
              font-medium
              text-white/75
              transition-all
              duration-300
              hover:border-white/20
              hover:bg-white/[0.06]
              hover:text-white
            "
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SkillCategory;