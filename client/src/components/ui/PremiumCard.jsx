function PremiumCard({
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
        border-white/[0.08]

        bg-white/[0.04]

        shadow-[0_10px_45px_rgba(0,0,0,.38)]

        transition-[border-color,box-shadow]
        duration-500
        ease-[cubic-bezier(.22,.61,.36,1)]

        hover:border-white/[0.13]
        hover:shadow-[0_18px_60px_rgba(0,0,0,.48)]

        ${className}
      `}
    >
      {/* =====================================================
          TOP GLASS REFLECTION
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-[45%]

          bg-gradient-to-b
          from-white/[0.035]
          via-white/[0.008]
          to-transparent
        "
      />

      {/* =====================================================
          SUBTLE INNER EDGE
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-[1px]

          rounded-[29px]

          border
          border-white/[0.025]
        "
      />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

export default PremiumCard;