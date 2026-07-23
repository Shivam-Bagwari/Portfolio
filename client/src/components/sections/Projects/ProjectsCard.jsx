import GlassCard from "../../ui/GlassCard";
import GlassBadge from "../../ui/GlassBadge";
import GlassButton from "../../ui/GlassButton";

import { ArrowUpRight } from "lucide-react";

function ProjectCard({ project }) {
  const {
    title,
    headline,
    tagline,
    description,
    tech,
    status,
    statusColor,
    accent,
    featured,
  } = project;

  const accents = {
    purple: {
      bg: "bg-gradient-to-br from-[#31214e] via-[#17151d] to-[#0f0f12]",
      glow: "bg-violet-500/35",
    },

    pink: {
      bg: "bg-gradient-to-br from-[#25161f] via-[#17151d] to-[#0f0f12]",
      glow: "bg-pink-500/35",
    },

    cyan: {
      bg: "bg-gradient-to-br from-[#13252a] via-[#17151d] to-[#0f0f12]",
      glow: "bg-cyan-400/30",
    },

    white: {
      bg: "bg-gradient-to-br from-[#202020] via-[#17151d] to-[#0f0f12]",
      glow: "bg-white/20",
    },
  };

  const current = accents[accent] || accents.purple;

  return (
    <GlassCard
      className="
        group

        overflow-hidden

        p-0

        transition-transform
        duration-500

        hover:-translate-y-1
      "
    >
      {/* ================= Preview ================= */}

      <div
        className={`
          relative

          flex
          h-[205px]

          items-center
          justify-center

          overflow-hidden

          border-b
          border-white/[0.06]

          ${current.bg}
        `}
      >
        {/* Ambient Glow */}

        <div
          className={`
            absolute

            h-72
            w-72

            rounded-full

            blur-[110px]

            opacity-70

            transition-transform
            duration-700

            group-hover:scale-110

            ${current.glow}
          `}
        />

        {/* Featured Badge */}

        {featured && (
          <div className="absolute left-5 top-5">
            <GlassBadge color="green">
              Featured
            </GlassBadge>
          </div>
        )}

        {/* Hero */}

        <div className="relative z-10 px-8 text-center">

          <h3
            className="
              font-serif-display

              text-[44px]

              italic

              leading-none

              text-white/92
            "
          >
            {headline}
          </h3>

          <p
            className="
              mt-4

              font-mono

              text-[12px]

              uppercase

              tracking-[0.16em]

              text-white/45
            "
          >
            {tagline}
          </p>

        </div>
      </div>

      {/* ================= Content ================= */}

      <div className="p-6">

        <div className="flex items-start justify-between gap-5">

          <div>

            <h4
              className="
                text-[28px]
                font-bold

                tracking-[-0.03em]

                text-white
              "
            >
              {title}
            </h4>

            <div className="mt-4">
              <GlassBadge color={statusColor}>
                {status}
              </GlassBadge>
            </div>

          </div>

        </div>

        <p
          className="
            mt-6

            text-[15px]

            leading-7

            text-white/60
          "
        >
          {description}
        </p>

        {/* Tech */}

        <div
          className="
            mt-7

            flex
            flex-wrap

            gap-2
          "
        >
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

                font-mono
                text-[11px]

                text-white/55
              "
            >
              {item}
            </span>
          ))}
        </div>

        {/* Actions */}

        <div className="mt-8">

          <GlassButton
            className="w-full justify-center"
            icon={ArrowUpRight}
          >
            View Project
          </GlassButton>

        </div>

      </div>
    </GlassCard>
  );
}

export default ProjectCard;