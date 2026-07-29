function PremiumCard({
  children,
  className = "",
  variant = "default",
}) {
  const featured = variant === "featured";

  return (
    <div
      className={`
        group
        relative
        overflow-hidden
        rounded-[30px]
        border border-white/[0.08]
        bg-white/[0.022]
        shadow-[0_8px_45px_rgba(0,0,0,.32)]
        transition-all
        duration-500
        ease-[cubic-bezier(.22,.61,.36,1)]
        hover:border-white/[0.12]
        hover:shadow-[0_14px_60px_rgba(0,0,0,.42)]

        ${className}
      `}
    >
      {/* Top Reflection */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-b
          from-white/[0.04]
          via-transparent
          to-transparent
        "
      />

      {/* Left Ambient */}

      <div
        className={`
            pointer-events-none
            absolute
            -left-40
            -top-10
            h-[420px]
            w-[420px]
            rounded-full
            bg-violet-500/6
            blur-[140px]
            animate-[floatLeft_12s_ease-in-out_infinite]
          ${
            featured
              ? "bg-violet-500/8"
              : "bg-violet-500/5"
          }

          group-hover:opacity-100
        `}
      />

      {/* Right Ambient */}

      <div
        className={`
            pointer-events-none
            absolute
            -right-36
            -bottom-16
            h-[360px]
            w-[360px]
            rounded-full
            bg-fuchsia-500/5
            blur-[140px]
 animate-[floatRight_14s_ease-in-out_infinite]
"

          ${
            featured
              ? "bg-fuchsia-500/6"
              : "bg-fuchsia-500/4"
          }
        `}
      />

      {/* Bottom Fade */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-24
          bg-gradient-to-t
          from-black/12
          to-transparent
        "
      />

      {/* Content */}

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

export default PremiumCard;