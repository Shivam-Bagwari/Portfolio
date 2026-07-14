function GlassCard({
  children,
  className = "",
}) {
  return (
    <div
      className={`
        group
        relative
        overflow-hidden
        rounded-[30px]

        border
        border-white/[0.06]

        bg-[#0B0B0F]

        backdrop-blur-xl

        transition-all
        duration-300
        ease-out

        hover:-translate-y-[3px]
        hover:border-white/[0.10]

        ${className}
      `}
    >
      {/* Soft Purple Glow */}

      <div
        className="
          pointer-events-none
          absolute
          -top-24
          left-1/2
          h-52
          w-52
          -translate-x-1/2
          rounded-full
          bg-violet-500/5
          blur-[90px]
        "
      />

      {/* Bottom Blue Glow */}

      <div
        className="
          pointer-events-none
          absolute
          -bottom-24
          right-0
          h-44
          w-44
          rounded-full
          bg-cyan-400/3
          blur-[80px]
        "
      />

      {/* Very Soft Gradient */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-br
          from-white/[0.02]
          via-transparent
          to-violet-500/[0.03]
        "
      />

      {/* Hover Glow */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-300

          group-hover:opacity-100

          bg-gradient-to-tr
          from-violet-500/[0.04]
          via-transparent
          to-cyan-400/[0.03]
        "
      />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

export default GlassCard;