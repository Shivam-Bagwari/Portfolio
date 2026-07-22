function GlassCard({
  children,
  className = "",
}) {
  return (
    <div
      className={`
        relative
        overflow-hidden
        rounded-[24px]

        border border-white/[0.07]

        bg-white/[0.025]
        backdrop-blur-md

        shadow-[0_8px_24px_rgba(0,0,0,0.18)]

        transition-all
        duration-300

        ${className}
      `}
    >
      {/* Surface */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0

          bg-gradient-to-b
          from-white/[0.05]
          via-white/[0.02]
          to-black/[0.04]
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
          via-white/30
          to-transparent
        "
      />

      {/* Corner Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -top-24
          -right-24

          h-72
          w-72

          rounded-full
          bg-violet-400/[0.06]
          blur-[90px]
        "
      />

      {/* Bottom Ambient Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -bottom-24
          -left-24

          h-64
          w-64

          rounded-full
          bg-fuchsia-500/[0.03]
          blur-[100px]
        "
      />

      {/* Very Subtle Inner Border */}
      <div
        className="
          pointer-events-none
          absolute
          inset-[1px]
          rounded-[23px]
          border
          border-white/[0.03]
        "
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

export default GlassCard;