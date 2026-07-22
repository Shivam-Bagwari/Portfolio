function GlassPanel({
  children,
  className = "",
  hover = true,
}) {
  return (
    <div
      className={`
        relative
        overflow-hidden

        rounded-[20px]

        border
        border-white/[0.06]

        bg-white/[0.02]

        shadow-[0_4px_18px_rgba(0,0,0,.22)]

        ${
          hover
            ? `
              transition-[transform,border-color,background-color,box-shadow]
              duration-300
              ease-out

              hover:bg-white/[0.03]
              hover:border-white/[0.10]
              hover:shadow-[0_10px_28px_rgba(0,0,0,.30)]
            `
            : ""
        }

        ${className}
      `}
    >
      {/* Reflection */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-px

          bg-gradient-to-r
          from-transparent
          via-white/20
          to-transparent
        "
      />

      {/* Inner Border */}

      <div
        className="
          pointer-events-none
          absolute
          inset-[1px]

          rounded-[19px]

          border
          border-white/[0.025]
        "
      />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

export default GlassPanel;