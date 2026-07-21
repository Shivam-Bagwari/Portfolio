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
    gap-2.5
    h-11
    px-6
    rounded-[14px]
    border
    font-mono
    text-[13px]
    font-medium
    tracking-[-0.02em]
    transition-all
    duration-300
    ease-out
    select-none
  `;

  const variants = {
    primary: `
      bg-white
      text-black
      border-white/90
      shadow-[0_10px_30px_rgba(255,255,255,.08)]
      hover:-translate-y-[2px]
      hover:bg-white
      hover:shadow-[0_14px_40px_rgba(255,255,255,.12)]
    `,

    secondary: `
      bg-white/[0.025]
      text-white
      border-white/[0.08]
      backdrop-blur-xl

      shadow-[inset_0_1px_0_rgba(255,255,255,.05),0_10px_30px_rgba(0,0,0,.35)]

      hover:bg-white/[0.04]
      hover:border-white/[0.12]
      hover:-translate-y-[2px]
      hover:shadow-[inset_0_1px_0_rgba(255,255,255,.08),0_14px_40px_rgba(0,0,0,.45)]

      active:translate-y-0
    `,
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  const content = (
    <>
      {Icon && (
        <Icon
          size={14}
          className="shrink-0"
        />
      )}

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