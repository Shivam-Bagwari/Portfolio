function GlassButton({
  children,
  icon: Icon,
  variant = "secondary",
  href,
  onClick,
  className = "",
}) {
  const baseClasses = `
    inline-flex
    items-center
    justify-center
    gap-2
    h-8
    px-4
    rounded-[10px]
    border
    font-mono
    text-[13px]
    font-medium
    tracking-[-0.02em]
    transition-[transform,border-color,background-color,box-shadow]
    duration-300
    ease-out
    select-none
    cursor-pointer
  `;

  const variants = {
    primary: `
      bg-white
      text-black

      border-white

      shadow-[0_8px_24px_rgba(255,255,255,.08)]

      hover:-translate-y-[2px]
      hover:shadow-[0_12px_32px_rgba(255,255,255,.12)]

      active:translate-y-0
    `,

    secondary: `
      bg-white/[0.025]

      text-white

      border-white/[0.08]

      shadow-[0_8px_24px_rgba(0,0,0,.32)]

      hover:bg-white/[0.04]
      hover:border-white/[0.12]

      hover:-translate-y-[2px]

      hover:shadow-[0_12px_32px_rgba(0,0,0,.42)]

      active:translate-y-0
    `,
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  const content = (
    <>
      {Icon && (
        <Icon
          size={14}
          className="shrink-0 opacity-90"
        />
      )}

      <span className="relative">
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