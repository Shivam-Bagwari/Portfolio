import { ArrowUpRight } from "lucide-react";
import { FiGithub } from "react-icons/fi";

const glowColors = {
  purple: "bg-fuchsia-500/20",
  green: "bg-emerald-500/20",
  cyan: "bg-cyan-400/20",
  white: "bg-white/10",
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
    <div className="group relative flex aspect-[16/10] overflow-hidden bg-[#090909]">

      {/* Blueprint Grid */}
      <div
        className="
          absolute inset-0
          opacity-[0.05]
          [background-image:
            linear-gradient(to_right,rgba(255,255,255,.07)_1px,transparent_1px),
            linear-gradient(to_bottom,rgba(255,255,255,.07)_1px,transparent_1px)]
          [background-size:44px_44px]
        "
      />

      {/* Accent Glow */}
      <div
        className={`
          absolute
          -left-24
          -top-24
          h-[320px]
          w-[320px]
          rounded-full
          blur-[110px]
          transition-all
          duration-500
          ${glow}
          group-hover:scale-110
        `}
      />

      {/* Vignette */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_center,transparent_25%,rgba(0,0,0,.72))]
        "
      />

      {/* Year */}
      <span
        className="
          absolute
          right-6
          top-6
          z-20
          font-mono
          text-[10px]
          uppercase
          tracking-[0.25em]
          text-white/30
        "
      >
        {year}
      </span>

      {/* Center */}
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
          transition-all
          duration-500
          group-hover:-translate-y-2
        "
      >
        <h3
          className="
            font-serif-display
            text-[40px]
            italic
            leading-none
            tracking-[-0.04em]
            text-white
          "
        >
          {previewTitle}
        </h3>

        <p
          className="
            mt-3
            text-[11px]
            uppercase
            tracking-[0.28em]
            text-white/40
          "
        >
          {previewSubtitle}
        </p>
      </div>

      {/* Hover Overlay */}
      <div
        className="
          absolute
          inset-0
          flex
          items-end
          justify-between
          px-6
          pb-6
          opacity-0
          transition-all
          duration-500
          group-hover:opacity-100
        "
      >
        <span
          className="
            rounded-full
            border
            border-white/10
            bg-white/5
            px-3
            py-1
            text-[10px]
            uppercase
            tracking-[0.22em]
            text-white/55
            backdrop-blur-xl
          "
        >
          {category}
        </span>

        <div className="flex items-center gap-3">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              rounded-full
              border
              border-white/10
              bg-white/5
              p-2.5
              text-white/60
              backdrop-blur-xl
              transition
              hover:text-white
            "
          >
            <FiGithub size={15} />
          </a>

          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="
              rounded-full
              border
              border-white/10
              bg-white/5
              p-2.5
              text-white/60
              backdrop-blur-xl
              transition
              hover:text-white
            "
          >
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default RegularPreview;