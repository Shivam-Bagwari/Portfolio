function GlassBadge({
  children,
  color = "bg-emerald-400",
  className = "",
}) {
  return (
    <div
      className={`
        group
        relative
        inline-flex
        items-center
        gap-2

        overflow-hidden

        rounded-full

        border
        border-white/[0.08]

        bg-white/[0.035]

        px-3
        py-1.5

        backdrop-blur-xl

        transition-all
        duration-500

        hover:border-white/[0.14]

        ${className}
      `}
    >
      {/* Glow */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-full
          bg-gradient-to-r
          from-transparent
          via-white/[0.05]
          to-transparent
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      {/* Animated Dot */}

      <span className="relative flex h-2.5 w-2.5 items-center justify-center">

        <span
          className={`
            absolute
            h-2.5
            w-2.5
            rounded-full
            ${color}
          `}
        />

        <span
          className={`
            absolute
            h-2.5
            w-2.5
            rounded-full
            ${color}
            animate-ping
            opacity-60
          `}
        />

      </span>

      {/* Text */}

      <span
        className="
          relative
          font-mono
          text-[10px]
          font-medium
          uppercase
          tracking-[0.18em]
          text-white/75
        "
      >
        {children}
      </span>
    </div>
  );
}

export default GlassBadge;