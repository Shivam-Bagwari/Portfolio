function GlassBadge({
  children,
  color = "neutral",
  className = "",
}) {
  const colors = {
    green: "bg-emerald-400",
    orange: "bg-orange-400",
    red: "bg-rose-400",
    blue: "bg-sky-400",
    violet: "bg-violet-400",
    neutral: "bg-zinc-400",
  };

  return (
    <div
      className={`
        inline-flex
        items-center
        gap-2

        h-7
        px-3

        rounded-full

        border
        border-white/[0.08]

        bg-white/[0.025]

        shadow-[0_6px_20px_rgba(0,0,0,.28)]

        font-mono
        text-[11px]
        font-medium
        tracking-[0.02em]

        text-white/80

        ${className}
      `}
    >
      <span
        className={`
          h-1.5
          w-1.5
          rounded-full
          ${colors[color]}
        `}
      />

      <span>{children}</span>
    </div>
  );
}

export default GlassBadge;