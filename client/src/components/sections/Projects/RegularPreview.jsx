import { ArrowUpRight } from "lucide-react";
import { FiGithub } from "react-icons/fi";

function RegularPreview({ project }) {
  const {
    previewTitle,
    previewSubtitle,
    accent,
    year,
    category,
    live,
    github,
  } = project;

  const accents = {
    purple: {
      background:
        "bg-[radial-gradient(circle_at_center,rgba(139,92,246,.20),transparent_65%),linear-gradient(135deg,#262038,#18161d,#101012)]",
    },

    green: {
      background:
        "bg-[radial-gradient(circle_at_center,rgba(16,185,129,.18),transparent_65%),linear-gradient(135deg,#1a2c24,#18161d,#101012)]",
    },

    cyan: {
      background:
        "bg-[radial-gradient(circle_at_center,rgba(34,211,238,.18),transparent_65%),linear-gradient(135deg,#18272d,#18161d,#101012)]",
    },

    white: {
      background:
        "bg-[radial-gradient(circle_at_center,rgba(255,255,255,.08),transparent_65%),linear-gradient(135deg,#242424,#18161d,#101012)]",
    },
  };

  const current = accents[accent] || accents.purple;

  return (
    <div
      className={`
        relative
        aspect-[16/10]
        overflow-hidden
        border-b
        border-white/[0.06]
        ${current.background}
      `}
    >
      {/* Grid */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          [background-image:linear-gradient(rgba(255,255,255,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.35)_1px,transparent_1px)]
          [background-size:28px_28px]
        "
      />

      {/* Year */}
      <span
        className="
          absolute
          right-4
          top-4
          z-20
          font-mono
          text-[10px]
          uppercase
          tracking-[0.18em]
          text-white/40
        "
      >
        {year}
      </span>

      {/* Center Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <h3
          className="
            font-serif-display
            text-[36px]
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
            font-mono
            text-[10px]
            uppercase
            tracking-[0.18em]
            text-white/45
          "
        >
          {previewSubtitle}
        </p>
      </div>

      {/* Hover Overlay */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          z-20
          flex
          items-center
          justify-between
          border-t
          border-white/10
          bg-black/35
          px-4
          py-3
          opacity-0
          translate-y-full
          transition-all
          duration-300
          group-hover:translate-y-0
          group-hover:opacity-100
        "
      >
        <span
          className="
            font-mono
            text-[10px]
            uppercase
            tracking-[0.18em]
            text-white/55
          "
        >
          {category}
        </span>

        <div className="flex items-center gap-2">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 transition hover:text-white"
          >
            <FiGithub size={16} />
          </a>

          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 transition hover:text-white"
          >
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default RegularPreview;