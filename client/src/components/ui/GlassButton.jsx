function GlassButton({
  children,
  icon: Icon,
  variant = "secondary",
  href,
  onClick,
  className = "",
}) {
  const baseClasses = `inline-flex items-center justify-center gap-2 h-10 px-6 rounded-xl border font-mono text-[14px] font-normal tracking-[-0.02em] transition-all duration-300
  `;

  const variants = {
    primary: `
      bg-[#FAFAFA] text-black border-white hover:bg-white hover:shadow-[0_8px_30px_rgba(255,255,255,0.08)]
      border
      border-white
      hover:scale-[1.03]
      hover:shadow-[0_0_25px_rgba(255,255,255,0.12)]
    `,

    secondary: `border border-white/10 bg-white/[0.04] text-white backdrop-blur-xl hover:bg-whte/[0.06] hover:border-white/20 hover:-translate-y-[2px] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]`,
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        <>
          {Icon && <Icon size={14}
          />}
          <span>{children}</span>
        </>
      </a>
    );
  }
  return (
    <button
      onClick={onClick}
      className={classes}
    >
      <>
        {Icon && <Icon size={16} />}
        <span>{children}</span>
      </>
    </button>
  );
}

export default GlassButton;