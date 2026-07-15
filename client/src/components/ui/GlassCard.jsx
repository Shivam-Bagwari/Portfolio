function GlassButton({
  children,
  icon: Icon,
  href,
  onClick,
  variant = "secondary",
  className = "",
}) {
  const baseClasses = `
    inline-flex
    items-center
    justify-center
    gap-2.5

    h-11
    px-5

    rounded-xl

    border
    transition-all
    duration-300
    ease-out

    font-mono
    text-[15px]
    tracking-[-0.02em]

    select-none
  `;

  const variants = {
    primary: `
      border-white
      bg-white
      text-black

      hover:scale-[1.02]
      hover:shadow-[0_10px_40px_rgba(255,255,255,0.12)]
    `,

    secondary: `
      border-white/10
      bg-white/[0.03]
      backdrop-blur-xl
      text-white

      hover:border-white/20
      hover:bg-white/[0.05]
      hover:-translate-y-[2px]
    `,
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  const content = (
    <>
      {Icon && <Icon size={16} strokeWidth={1.8} />}
      <span>{children}</span>
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