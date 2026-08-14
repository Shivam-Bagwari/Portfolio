import { ArrowUpRight } from "lucide-react";
import { FiGithub } from "react-icons/fi";

const glowConfig = {
  red: {
    background: `
      radial-gradient(
        ellipse 62% 82% at 72% 48%,
        rgba(236, 72, 153, 0.16) 0%,
        rgba(236, 72, 153, 0.105) 25%,
        rgba(236, 72, 153, 0.055) 45%,
        rgba(236, 72, 153, 0.018) 64%,
        transparent 78%
      )
    `,
  },

  cyan: {
    background: `
      radial-gradient(
        circle 48% at 50% 48%,
        rgba(34, 211, 238, 0.13) 0%,
        rgba(34, 211, 238, 0.075) 28%,
        rgba(34, 211, 238, 0.035) 48%,
        rgba(34, 211, 238, 0.012) 62%,
        transparent 76%
      )
    `,
  },

  white: {
    background: `
      radial-gradient(
        ellipse 68% 82% at 50% 48%,
        rgba(255, 255, 255, 0.065) 0%,
        rgba(255, 255, 255, 0.035) 30%,
        rgba(255, 255, 255, 0.015) 52%,
        transparent 74%
      )
    `,
  },

  purple: {
    background: `
      radial-gradient(
        ellipse 68% 82% at 52% 46%,
        rgba(168, 85, 247, 0.12) 0%,
        rgba(168, 85, 247, 0.065) 30%,
        rgba(168, 85, 247, 0.025) 52%,
        transparent 74%
      )
    `,
  },
};

function RegularPreview({ project }) {
  const {
    previewTitle,
    previewSubtitle,
    accent,
    year,
    category,
    github,
    live,
  } = project;

  const glow =
    glowConfig[accent] || glowConfig.purple;

  const hasGithub =
    github && github !== "#";

  const hasLive =
    live && live !== "#";

  const hasActions =
    hasGithub || hasLive;

  return (
    <div
      className="
        group
        relative
        flex
        aspect-[16/9]
        overflow-hidden

        border-b
        border-white/[0.07]

        bg-black/[0.22]
      "
    >
      {/* MAIN ATMOSPHERE */}

      <div
        className="
          pointer-events-none
          absolute
          inset-[-15%]

          opacity-100

          transition-transform
          duration-700
          ease-out

          group-hover:scale-[1.05]
        "
        style={{
          background: glow.background,
          filter: "blur(18px)",
        }}
      />

      {/* SECONDARY DEPTH */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
        "
        style={{
          background: `
            radial-gradient(
              ellipse at center,
              rgba(255,255,255,.018) 0%,
              transparent 58%
            )
          `,
        }}
      />

      {/* TOP / SIDE DARKENING */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
        "
        style={{
          background: `
            radial-gradient(
              ellipse at center,
              transparent 34%,
              rgba(0,0,0,.18) 68%,
              rgba(0,0,0,.46) 100%
            )
          `,
        }}
      />

      {/* BOTTOM DARKNESS */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-[48%]
        "
        style={{
          background: `
            linear-gradient(
              to bottom,
              transparent 0%,
              rgba(0,0,0,.10) 20%,
              rgba(0,0,0,.34) 62%,
              rgba(0,0,0,.62) 100%
            )
          `,
        }}
      />

      {/* LEFT / RIGHT EDGE VIGNETTE */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
        "
        style={{
          background: `
            linear-gradient(
              90deg,
              rgba(0,0,0,.30) 0%,
              transparent 18%,
              transparent 82%,
              rgba(0,0,0,.30) 100%
            )
          `,
        }}
      />

      {/* SUBTLE TOP EDGE */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-px

          bg-gradient-to-r
          from-transparent
          via-white/[0.10]
          to-transparent
        "
      />

      {/* YEAR */}

      <span
        className="
          absolute
          right-5
          top-5
          z-20

          font-mono
          text-[9px]
          uppercase
          tracking-[0.25em]

          text-white/30
        "
      >
        {year}
      </span>

      {/* CENTER CONTENT */}

      <div
        className="
          relative
          z-10

          flex
          flex-1
          flex-col
          items-center
          justify-center

          text-center

          -translate-y-2

          transition-transform
          duration-500
          ease-out

          group-hover:-translate-y-3
        "
      >
        <h3
          className="
            font-serif-display

            text-[34px]
            italic
            leading-none

            tracking-[-0.045em]

            text-white
          "
        >
          {previewTitle}
        </h3>

        <p
          className="
            mt-3

            text-[10px]
            uppercase
            tracking-[0.30em]

            text-white/35
          "
        >
          {previewSubtitle}
        </p>
      </div>

      {/* CATEGORY */}

      <div
        className="
          absolute
          bottom-5
          left-5
          z-20
        "
      >
        <span
          className="
            inline-flex
            items-center

            rounded-full

            border
            border-white/[0.08]

            bg-white/[0.025]

            px-3
            py-[5px]

            font-mono
            text-[9px]
            uppercase
            tracking-[0.18em]

            text-white/55

            backdrop-blur-sm
          "
        >
          {category}
        </span>
      </div>

      {/* ICON ACTIONS */}

      {hasActions && (
        <div
          className="
            absolute
            bottom-5
            right-5
            z-20

            flex
            items-center
            gap-2

            opacity-70

            transition-opacity
            duration-300

            group-hover:opacity-100
          "
        >
          {/* GitHub */}

          {hasGithub && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub`}
              className="
                flex
                h-8
                w-8

                items-center
                justify-center

                rounded-[10px]

                border
                border-white/[0.08]

                bg-white/[0.025]

                text-white/50

                transition-colors
                duration-300

                hover:border-white/[0.15]
                hover:bg-white/[0.06]
                hover:text-white
              "
            >
              <FiGithub size={14} />
            </a>
          )}

          {/* Live */}

          {hasLive && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live site`}
              className="
                flex
                h-8
                w-8

                items-center
                justify-center

                rounded-[10px]

                border
                border-white/[0.08]

                bg-white/[0.025]

                text-white/50

                transition-colors
                duration-300

                hover:border-white/[0.15]
                hover:bg-white/[0.06]
                hover:text-white
              "
            >
              <ArrowUpRight size={14} />
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export default RegularPreview;