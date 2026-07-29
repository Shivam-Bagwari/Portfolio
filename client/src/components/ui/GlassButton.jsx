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

    transition-all
    duration-500
    ease-[cubic-bezier(.22,.61,.36,1)]

    active:scale-[0.98]

    select-none
  `;

  const variants = {
    primary: `
      border-white
      bg-white
      text-black

      hover:-translate-y-[2px]
      hover:shadow-[0_15px_35px_rgba(255,255,255,.12)]
    `,

    secondary: `
      border-white/[0.08]
      bg-white/[0.03]
      text-white

      backdrop-blur-xl

      hover:-translate-y-[2px]
      hover:border-violet-400/20
      hover:bg-white/[0.05]
      hover:shadow-[0_15px_35px_rgba(0,0,0,.45)]
    `,
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  const content = (
    <>
      {/* Hover Glow */}
      <span
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
        <span
          className="
            absolute
            left-1/2
            top-1/2

            h-24
            w-24

            -translate-x-1/2
            -translate-y-1/2

            rounded-full

            bg-white/10

            blur-2xl
          "
        />
      </span>

      {/* Sheen */}
      <span
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >
        <span
          className="
            absolute
            -left-24
            top-0

            h-full
            w-16

            rotate-[20deg]

            bg-gradient-to-r
            from-transparent
            via-white/20
            to-transparent

            transition-transform
            duration-[900ms]

            group-hover:translate-x-[220px]
          "
        />
      </span>

      <span className="relative z-10">
        {children}
      </span>

      {Icon && (
        <Icon
          size={13}
          className="
            relative
            z-10
            transition-transform
            duration-300
            group-hover:translate-x-[2px]
            group-hover:-translate-y-[2px]
          "
        />
      )}
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