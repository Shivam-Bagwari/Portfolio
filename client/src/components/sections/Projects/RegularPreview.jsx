import { ArrowUpRight } from "lucide-react";
import { FiGithub } from "react-icons/fi";

const glowColors = {
  purple: "rgba(168, 85, 247, 0.16)",
  red: "rgba(244, 63, 94, 0.15)",
  cyan: "rgba(34, 211, 238, 0.14)",
  white: "rgba(255, 255, 255, 0.07)",
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

  const glow = glowColors[accent] || glowColors.purple;

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

        bg-black/[0.18]
      "
    >
      {/* =====================================================
          ACCENT ATMOSPHERE
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[280px]
          w-[280px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full

          opacity-70
          blur-[100px]

          transition-transform
          duration-700
          ease-out

          group-hover:scale-[1.18]
        "
        style={{
          background: glow,
        }}
      />

      {/* =====================================================
          CENTER LIGHT
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
        "
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,255,255,.035), transparent 58%)",
        }}
      />

      {/* =====================================================
          VIGNETTE
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
        "
        style={{
          background:
            "radial-gradient(circle at center, transparent 28%, rgba(0,0,0,.48) 100%)",
        }}
      />

      {/* =====================================================
          TOP EDGE REFLECTION
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-white/[0.12]
          to-transparent
        "
      />

      {/* =====================================================
          YEAR
      ===================================================== */}

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

      {/* =====================================================
          CENTER CONTENT
      ===================================================== */}

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

      {/* =====================================================
          CATEGORY
      ===================================================== */}

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
          "
        >
          {category}
        </span>
      </div>

      {/* =====================================================
          ACTIONS
      ===================================================== */}

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

        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.name} GitHub`}
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

        {/* Live */}

        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.name} live site`}
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
      </div>
    </div>
  );
}

export default RegularPreview;