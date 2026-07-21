import GlassCard from "../../ui/GlassCard";
import { ArrowUpRight } from "lucide-react";

function ProjectCard({
  title,
  headline,
  tagline,
  description,
  tech,
  status,
  glow,
}) {
  return (
    <GlassCard
      className="
        overflow-hidden
        rounded-[24px]
        border
        border-white/10
        p-0
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-white/20
      "
    >
      {/* Preview */}

      <div
        className={`
          relative
          flex
          h-[220px]
          items-center
          justify-center
          overflow-hidden
          border-b
          border-white/8

          ${
            glow === "purple"
              ? "bg-gradient-to-br from-[#31214e] via-[#111] to-[#111]"
              : "bg-gradient-to-br from-[#1b1319] via-[#111] to-[#111]"
          }
        `}
      >

        {/* Glow */}

        <div
          className={`
            absolute
            h-56
            w-56
            rounded-full
            blur-[80px]
            opacity-50

            ${
              glow === "purple"
                ? "bg-violet-500/30"
                : "bg-pink-500/30"
            }
          `}
        />

        <div className="relative text-center">

          <h3
            className="
              font-serif-display
              text-[52px]
              italic
              text-white/90
            "
          >
            {headline}
          </h3>

          <p
            className="
              mt-4
              font-mono
              text-sm
              text-white/50
            "
          >
            {tagline}
          </p>

        </div>

      </div>

      {/* Bottom */}

      <div className="p-6">

        <div className="flex items-start justify-between">

          <div>

            <h4 className="text-2xl font-bold text-white">
              {title}
            </h4>

          </div>

          <div
            className="
              rounded-full
              border
              border-white/10
              bg-white/[0.04]
              px-3
              py-1
              font-mono
              text-[11px]
              text-white/65
            "
          >
            ● {status}
          </div>

        </div>

        <p className="mt-4 leading-7 text-white/55">
          {description}
        </p>

        <div className="mt-6 flex items-center justify-between">

          <div className="flex flex-wrap gap-2">

            {tech.map((item) => (
              <span
                key={item}
                className="
                  font-mono
                  text-[11px]
                  text-white/45
                "
              >
                {item}
              </span>
            ))}

          </div>

          <button
            className="
              flex
              items-center
              gap-1
              text-sm
              text-white/70
            "
          >
            View

            <ArrowUpRight size={15} />

          </button>

        </div>

      </div>

    </GlassCard>
  );
}

export default ProjectCard;