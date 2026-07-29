import { ArrowUpRight } from "lucide-react";
import { FiGithub } from "react-icons/fi";

const glowColors = {
  purple: "bg-fuchsia-500/20",
  red: "bg-red-500/20",
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
    <div className="group relative flex aspect-[16/9] overflow-hidden bg-black/5">

      {/* Accent Glow */}
      <div
        className={`
          absolute
          -left-24
          -top-24
          h-[320px]
          w-[320px]
          rounded-full
          blur-[80px]
          transition-all
          duration-500
          opacity-70
          ${glow}
          group-hover:scale-125
          group-hover:opacity-100
        `}
      />

      {/* Vignette */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,.32))]
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

      {/* Top Right Actions */}
<div
  className="
    absolute
    right-6
    bottom-6
    z-20
    flex
    items-center
    gap-2
    pointer-events-none
    opacity-0
    translate-y-6
    transition-all
    duration-300
    ease-[cubic-bezier(.22,.61,.36,1)]

    group-hover:pointer-events-auto
    group-hover:opacity-100
    group-hover:translate-y-0
  "
>
  <a
    href={github}
    target="_blank"
    rel="noopener noreferrer"
    className="
      flex
      h-10
      w-10
      items-center
      justify-center
      rounded-full
      border
      border-white/[0.08]
      bg-white/[0.04]
      backdrop-blur-md
      text-white/60
      transition-all
      duration-300
      delay-75
      hover:-translate-y-[2px]
      hover:border-white/[0.14]
      hover:bg-white/[0.08]
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
      flex
      h-10
      w-10
      items-center
      justify-center
      rounded-full
      border
      border-white/[0.08]
      bg-white/[0.04]
      backdrop-blur-md
      text-white/60
      transition-all
      duration-300
      delay-150
      hover:-translate-y-[2px]
      hover:border-white/[0.14]
      hover:bg-white/[0.08]
      hover:text-white
    "
  >
    <ArrowUpRight size={15} />
  </a>
</div>

      {/* Bottom Left Category */}
      <div
        className="
          absolute
          left-6
          bottom-6
          z-20
        "
      >
        <span
          className="
            rounded-full
            border
            border-white/[0.08]
            bg-white/[0.04]
            px-3
            py-[6px]
            text-[10px]
            font-mono
            uppercase
            tracking-[0.18em]
            text-white/65
            backdrop-blur-md
          "
        >
          {category}
        </span>
      </div>

      {/* Center */}
      <div
        className="
          relative
          z-10
          flex
          flex-1
          -translate-y-4
          flex-col
          items-center
          justify-center
          text-center
          transition-all
          duration-500
          group-hover:-translate-y-6
        "
      >
        <h3
          className="
            font-serif-display
            text-[34px]
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
            mt-2
            text-[11px]
            uppercase
            tracking-[0.32em]
            text-white/40
          "
        >
          {previewSubtitle}
        </p>
      </div>
    </div>
  );
}

export default RegularPreview;