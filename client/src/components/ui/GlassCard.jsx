function GlassCard({
  children,
  className = "",
}) {
  return (
    <div
      className={`
        rounded-[24px]
        border
        border-white/10
        bg-white/[0.02]
        backdrop-blur-xl
        shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]
        transition-all
        duration-300
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default GlassCard;