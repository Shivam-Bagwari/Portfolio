import { ChevronDown } from "lucide-react";

function ExperienceRow({
  item,
  open,
  onToggle,
}) {
  return (
    <div
      className="
      overflow-hidden
      rounded-2xl
      border
      border-white/10
      bg-white/[0.025]
      backdrop-blur-xl
      transition-all
      duration-300
      hover:border-white/20
      hover:bg-white/[0.035]
      hover:-translate-y-[2px]
    "
    >

      {/* HEADER */}

      <button
        onClick={onToggle}
        className="
          flex
          w-full
          items-center
          justify-between
          px-6
          py-5
          text-left
        "
      >

        {/* LEFT */}

        <div className="flex items-center gap-5">

          {/* Logo */}

          <div
            className="
            flex
            h-12
            w-12
            shrink-0
            items-center
            justify-center
            rounded-xl
            border
            border-white/10
            bg-white/[0.04]
            font-mono
            text-xs
            font-bold
            text-white/80
          "
          >
            {item.logo}
          </div>

          <div>

            <h3 className="text-lg font-semibold text-white">
              {item.role}
            </h3>

            <p className="mt-1 font-mono text-sm text-white/45">
              {item.company}
            </p>

          </div>

        </div>

        {/* RIGHT */}

        <div className="flex items-center gap-6">

          <div className="text-right">

            <p className="font-mono text-sm text-white/75">
              {item.duration}
            </p>

            <p className="mt-1 text-xs text-white/35">
              {item.location}
            </p>

          </div>

          <ChevronDown
            size={18}
            className={`
              transition-transform duration-300
              ${open ? "rotate-180" : ""}
            `}
          />

        </div>

      </button>

      {/* CONTENT */}

      <div
        className={`
          grid
          transition-all
          duration-300
          ${
            open
              ? "grid-rows-[1fr]"
              : "grid-rows-[0fr]"
          }
        `}
      >

        <div className="overflow-hidden">

          <div className="border-t border-white/10 px-6 py-6">

            <p className="leading-7 text-white/65">
              {item.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">

              {item.technologies.map((tech) => (

                <span
                  key={tech}
                  className="
                    rounded-lg
                    border
                    border-white/10
                    bg-white/[0.03]
                    px-3
                    py-1
                    font-mono
                    text-xs
                    text-white/70
                  "
                >
                  {tech}
                </span>

              ))}

            </div>

            <ul className="mt-6 space-y-2">

              {item.achievements.map((achievement) => (

                <li
                  key={achievement}
                  className="text-white/55"
                >
                  • {achievement}
                </li>

              ))}

            </ul>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ExperienceRow;