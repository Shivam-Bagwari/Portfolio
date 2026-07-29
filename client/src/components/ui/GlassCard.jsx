import InteractiveSurface from "./InteractiveSurface";
function GlassCard({ children, className = "" }) {
  return (
    <InteractiveSurface className="rounded-[26px]">
    <div
      className={`
        group
        relative
        overflow-hidden
        rounded-[26px]
        border border-white/[0.08]
        bg-[linear-gradient(180deg,rgba(255,255,255,.045),rgba(255,255,255,.018))]
        backdrop-blur-[22px]
        shadow-[0_20px_60px_-30px_rgba(0,0,0,.85)]
        transition-all
        duration-500
        ease-[cubic-bezier(.22,.61,.36,1)]
        hover:border-violet-400/25
        hover:shadow-[0_35px_80px_-25px_rgba(0,0,0,.95)]

        ${className}
      `}
    >
      {/* Ambient Purple Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -left-20
          -top-20
          h-[260px]
          w-[260px]
          rounded-full
          bg-violet-500/10
          blur-[100px]
          opacity-0
          transition-all
          duration-700
          group-hover:opacity-100
        "
      />

      {/* Secondary Glow */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-[-120px]
          right-[-120px]
          h-[240px]
          w-[240px]
          rounded-full
          bg-fuchsia-400/8
          blur-[120px]
          opacity-0
          transition-all
          duration-700
          group-hover:opacity-100
        "
      />

      {/* Glass Reflection */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-b
          from-white/[0.08]
          via-white/[0.02]
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
          via-white/35
          to-transparent
        "
      />

      {/* Sheen */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      >
        <div
          className="
            absolute
            -left-1/2
            top-0
            h-full
            w-1/2
            rotate-[18deg]
            bg-gradient-to-r
            from-transparent
            via-white/[0.08]
            to-transparent
            transition-transform
            duration-[1200ms]
            ease-out
            group-hover:translate-x-[250%]
          "
        />
      </div>

      {/* Inner Border */}
      <div
        className="
          pointer-events-none
          absolute
          inset-[1px]
          rounded-[25px]
          border
          border-white/[0.04]
        "
      />

      {/* Bottom Shadow */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-20
          bg-gradient-to-t
          from-black/18
          to-transparent
        "
      />

      <div className="relative z-10">
        {children}
      </div>
    </div>
    </InteractiveSurface>
  );
}

export default GlassCard;