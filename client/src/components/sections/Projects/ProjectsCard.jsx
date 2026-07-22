import GlassCard from "../../ui/GlassCard";
import { ArrowUpRight } from "lucide-react";

function ProjectCard({ project }) {
  const {
    title,
    headline,
    tagline,
    description,
    tech,
    status,
    glow,
  } = project;

  const glowStyles = {
    purple: {
      bg: "bg-gradient-to-br from-[#31214e] via-[#17151d] to-[#0f0f12]",
      glow: "bg-violet-500/35",
      dot: "bg-emerald-400",
    },

    pink: {
      bg: "bg-gradient-to-br from-[#24161f] via-[#17151d] to-[#0f0f12]",
      glow: "bg-pink-500/35",
      dot: "bg-orange-400",
    },

    cyan: {
      bg: "bg-gradient-to-br from-[#13252a] via-[#17151d] to-[#0f0f12]",
      glow: "bg-cyan-400/30",
      dot: "bg-orange-400",
    },

    white: {
      bg: "bg-gradient-to-br from-[#202020] via-[#17151d] to-[#0f0f12]",
      glow: "bg-white/20",
      dot: "bg-zinc-400",
    },
  };

  const current = glowStyles[glow] || glowStyles.purple;

  return (
    <GlassCard
      className="
        group
        overflow-hidden
        rounded-[24px]
        border
        border-white/10
        p-0
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-white/20
      "
    >
      {/* ================= Preview ================= */}

      <div
        className={`
          relative
          flex
          h-[180px]
          items-center
          justify-center
          overflow-hidden
          border-b
          border-white/8
          ${current.bg}
        `}
      >
        {/* Glow */}

        <div
          className={`
            absolute
            h-72
            w-72
            rounded-full
            blur-[110px]
            opacity-70
            transition-all
            duration-500
            group-hover:scale-110
            ${current.glow}
          `}
        />

        {/* Corner Icon */}

        <div
          className="
            absolute
            right-4
            top-4
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-lg
            border
            border-white/10
            bg-black/30
            backdrop-blur-xl
          "
        >
          <ArrowUpRight
            size={14}
            className="text-white/60"
          />
        </div>

        {/* Hero Text */}

        <div className="relative text-center">
          <h3
            className="
              font-serif-display
              text-[42px]
              italic
              leading-none
              text-white/90
              lg:text-[46px]
            "
          >
            {headline}
          </h3>

          <p
            className="
              mt-4
              font-mono
              text-[13px]
              tracking-[0.08em]
              text-white/45
            "
          >
            {tagline}
          </p>
        </div>
      </div>

      {/* ================= Bottom ================= */}

      <div className="p-5">
        <div className="flex items-start justify-between gap-5">
          <h4 className="text-2xl font-bold text-white">
            {title}
          </h4>

          <div
            className="
              flex
              items-center
              gap-2
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
            <span
              className={`h-1.5 w-1.5 rounded-full ${current.dot}`}
            />

            <span>{status}</span>
          </div>
        </div>

        <p className="mt-4 text-[15px] leading-7 text-white/55">
          {description}
        </p>

        <div className="mt-6 flex items-center justify-between gap-4">
          <div className="flex flex-wrap items-center">
            {tech.map((item, index) => (
              <span
                key={item}
                className="font-mono text-[11px] text-white/45"
              >
                {item}

                {index !== tech.length - 1 && (
                  <span className="mx-2 text-white/20">
                    ·
                  </span>
                )}
              </span>
            ))}
          </div>

          <button
            className="
              group/view
              flex
              items-center
              gap-1
              text-sm
              text-white/65
              transition-colors
              hover:text-white
            "
          >
            View

            <ArrowUpRight
              size={15}
              className="
                transition-transform
                duration-300
                group-hover/view:translate-x-0.5
                group-hover/view:-translate-y-0.5
              "
            />
          </button>
        </div>
      </div>
    </GlassCard>
  );
}

export default ProjectCard;