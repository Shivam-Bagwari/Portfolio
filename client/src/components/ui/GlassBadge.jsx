function GlassBadge({
  children,
  color = "bg-emerald-400",
  className = "",
}) {
  return (
    <div
      className={`
        inline-flex
        items-center
        gap-2
        rounded-full
        border border-white/[0.08]
        bg-white/[0.04]
        px-3
        py-[6px]
        transition-colors
        duration-300
        hover:border-white/[0.12]

        ${className}
      `}
    >
      {/* Status Dot */}

      <span
        className={`
          h-[6px]
          w-[6px]
          rounded-full
          ${color}
        `}
      />

      {/* Text */}

      <span
        className="
          font-mono
          text-[10px]
          font-medium
          uppercase
          tracking-[0.12em]
          text-white/80
        "
      >
        {children}
      </span>
    </div>
  );
}

export default GlassBadge;