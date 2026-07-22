function GlassCard({ children, className = "" }) {
  return (
    <div
      className={`
        relative
        overflow-hidden
        rounded-[24px]

        border border-white/[0.09]

        bg-white/[0.028]

        shadow-[0_8px_32px_rgba(0,0,0,.34)]

        transition-[transform,box-shadow,border-color]
        duration-300
        ease-out

        ${className}
      `}
    >
      {/* Glass Reflection */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0

          bg-gradient-to-b

          from-white/[0.035]
          via-transparent
          to-transparent
        "
      />

      {/* Top Highlight */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-px

          bg-gradient-to-r

          from-transparent
          via-white/25
          to-transparent
        "
      />

      {/* Inner Border */}

      <div
        className="
          pointer-events-none
          absolute
          inset-[1px]

          rounded-[23px]

          border
          border-white/[0.02]
        "
      />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

export default GlassCard;