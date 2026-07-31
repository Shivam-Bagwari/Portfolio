function SkillCategory({
  index,
  category,
  skills,
}) {
  return (
    <div className="flex flex-col">

      {/* Heading */}

      <div className="mb-5 flex items-center gap-3">

        <span
          className="
            font-mono
            text-[11px]
            uppercase
            tracking-[0.3em]
            text-white/25
          "
        >
          {String(index).padStart(2, "0")}
        </span>

        <h3
          className="
            text-[24px]
            font-bold
            tracking-tight
            text-white
          "
        >
          {category}
        </h3>

      </div>

      {/* Skills */}

      <div className="flex flex-wrap gap-1.5">

        {skills.map((skill) => (

          <button
            key={skill}
            className="
              group
              flex
              items-center
              gap-2
              rounded-[12px]
              border
              border-white/[0.08]
              bg-white/[0.025]
              px-2
              py-[6px]
              transition-all
              duration-300
              hover:-translate-y-px
              hover:border-fuchsia-400/30
              hover:bg-white/[0.04]
            "
          >

            <div
              className="
              flex
              h-5
              w-5
              items-center
              justify-center
              rounded-[6px]
              bg-fuchsia-500/12
              text-[10px]
              font-bold
              text-fuchsia-200
              transition-all
              duration-300
              group-hover:bg-fuchsia-500/20
              group-hover:text-fuchsia-100"
            >
              {skill[0]}
            </div>

            <span
              className="
                text-[12px]
                font-semibold
                text-white/70
                transition-colors
                group-hover:text-white
              "
            >
              {skill}
            </span>

          </button>

        ))}

      </div>

    </div>
  );
}

export default SkillCategory;