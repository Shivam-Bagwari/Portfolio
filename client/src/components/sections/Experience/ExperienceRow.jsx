import PremiumCard from "../../ui/PremiumCard";
import TiltCard from "../../ui/TiltCard";
import { ChevronDown } from "lucide-react";

function ExperienceRow({
  item,
  open,
  onToggle,
}) {
  return (
    <TiltCard>
<PremiumCard
  className="
    group
    overflow-hidden
    rounded-[28px]
    transition-all
    duration-500
    ease-[cubic-bezier(.22,1,.36,1)]
    hover:-translate-y-1
    hover:shadow-[0_30px_80px_rgba(168,85,247,0.12)]
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
    relative
    flex
    h-14
    w-14
    shrink-0
    items-center
    justify-center
    overflow-hidden
    rounded-2xl
    border
    border-white/10
    bg-white/[0.03]
    transition-all
    duration-500
    group-hover:border-fuchsia-400/30
  "
>

  <div
    className="
      absolute
      -left-6
      -top-6
      h-16
      w-16
      rounded-full
      bg-fuchsia-500/20
      blur-2xl
      opacity-0
      transition-opacity
      duration-500
      group-hover:opacity-100
    "
  />

  <span
    className="
      relative
      font-mono
      text-xs
      font-bold
      tracking-wider
      text-white/90
    "
  >
    {item.logo}
  </span>

</div>

            <div>

              <h3 className=" text-xl font-bold tracking-tight text-white">
                {item.role}
              </h3>

              <p className="mt-1 font-mono text-sm text-white/50 tracking-wide uppercase text-xs">
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
              transition-all
              duration-500
              ease-[cubic-bezier(.22,1,.36,1)]
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
          ${open
              ? "grid-rows-[1fr]"
              : "grid-rows-[0fr]"
            }
        `}
        >

<div className="overflow-hidden">

  <div
    className={`
      relative
      px-6
      py-6
      transition-all
      duration-500
      ease-[cubic-bezier(.22,1,.36,1)]
      ${
        open
          ? "translate-y-0 opacity-100"
          : "-translate-y-3 opacity-0"
      }
    `}
  >

    {/* Premium Divider */}

    <div className="absolute left-0 right-0 top-0 h-px bg-white/[0.05]" />

    <div
      className={`
        absolute
        left-0
        top-0
        h-px
        bg-gradient-to-r
        from-fuchsia-500/80
        via-fuchsia-400/20
        to-fuchsia-500/80
        transition-all
        duration-700
        ease-out
        ${
          open
            ? "w-full opacity-100"
            : "w-0 opacity-0"
        }
      `}
    />

    <p className="leading-7 text-white/65">
      {item.description}
    </p>

    <div className="mt-5 flex flex-wrap gap-2">

      {item.technologies.map((tech, index) => (

        <span
          key={tech}
          className={`
            rounded-xl
            border
            border-white/10
            bg-white/[0.03]
            px-3
            py-1
            font-mono
            text-xs
            text-white/70
            transition-all
            duration-500
            ${
              open
                ? "translate-y-0 opacity-100"
                : "translate-y-2 opacity-0"
            }
          `}
          style={{
            transitionDelay: `${index * 35}ms`,
          }}
        >
          {tech}
        </span>

      ))}

    </div>

    <ul className="mt-6 space-y-2">

      {item.achievements.map((achievement, index) => (

        <li
          key={achievement}
          className={`
            text-white/55
            transition-all
            duration-500
            ${
              open
                ? "translate-x-0 opacity-100"
                : "translate-x-3 opacity-0"
            }
          `}
          style={{
            transitionDelay: `${150 + index * 50}ms`,
          }}
        >
          • {achievement}
        </li>

      ))}

    </ul>

  </div>

</div>

        </div>

      </PremiumCard>
    </TiltCard>
  );
}

export default ExperienceRow;