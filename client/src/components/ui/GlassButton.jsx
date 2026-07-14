function GlassButton({
  children,
  variant = "secondary",
  href,
  onClick,
  className = "",
}) {
  const baseClasses = `
    inline-flex
    items-center
    justify-center
    rounded-full
    px-6
    py-3.5
    text-sm
    font-medium
    transition-all
    duration-300
    select-none
  `;

  const variants = {
    primary: `
      bg-white
      text-black
      border
      border-white
      hover:scale-[1.03]
      hover:shadow-[0_0_25px_rgba(255,255,255,0.12)]
    `,

    secondary: `
      border
      border-white/10
      bg-white/[0.02]
      text-white
      backdrop-blur-xl
      hover:bg-white/[0.05]
      hover:border-white/20
      hover:-translate-y-[2px]
    `,
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
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={classes}
    >
      {children}
    </button>
  );
}

export default GlassButton;