function GlassButton({
  children,
  icon: Icon,
  variant = "secondary",
  href,
  onClick,
  className = "",
}) {
  const base = `
    group
    relative
    inline-flex
    h-10
    items-center
    justify-center
    gap-2

    overflow-hidden

    rounded-[12px]
    border

    px-5

    text-[12px]
    font-semibold

    transition-colors
    duration-200

    select-none
  `;

  const variants = {
    primary: `
      border-white
      bg-white
      text-black
    `,

    secondary: `
      border-white/[0.08]
      bg-white/[0.018]
      text-white/80

      hover:bg-white/[0.045]
      hover:border-white/[0.14]
      hover:text-white
    `,
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  const content = (
    <>
      {/* Fake Glass Reflection */}

      <span
        className="
          pointer-events-none
          absolute
          inset-0

          bg-gradient-to-b
          from-white/[0.06]
          via-white/[0.02]
          to-transparent
        "
      />

      <span className="relative z-10 flex items-center gap-2">
        {Icon && <Icon size={13} />}
        {children}
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={classes}
    >
      {content}
    </button>
  );
}

export default GlassButton;