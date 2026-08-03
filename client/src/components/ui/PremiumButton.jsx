import useMousePosition from "../../hooks/useMousePosition";

function PremiumButton({
  children,
  href,
  onClick,
  variant = "secondary",
  icon: Icon,
  className = "",
  target,
  rel,
  download,
}) {
  const ref = useMousePosition();

  const base = `
    group
    relative

    inline-flex
    items-center
    justify-center
    gap-2

    h-[42px]
    px-5

    overflow-hidden

    rounded-[14px]

    border

    text-[13px]
    font-medium
    tracking-[-0.01em]

    transition-all
    duration-300
    ease-[cubic-bezier(.22,.61,.36,1)]

    cursor-pointer
    select-none
  `;

  const variants = {
    primary: `
      border-white/15
      bg-[#F5F5F3]
      text-[#111111]

      hover:bg-white
      hover:scale-[1.02]
      hover:shadow-[0_12px_28px_rgba(255,255,255,.10)]
    `,

    secondary: `
      border-white/[0.08]
      bg-white/[0.02]

      text-white/80

      hover:bg-white/[0.045]
      hover:border-fuchsia-400/25
      hover:text-white

      hover:scale-[1.02]
      hover:shadow-[0_10px_30px_rgba(168,85,247,.08)]
    `,

    ghost: `
      border-transparent
      bg-transparent

      text-white/70

      hover:bg-white/[0.04]
      hover:text-white
    `,
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  const content = (
    <>
      {/* Base Reflection */}

      <span
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-[14px]

          bg-gradient-to-b
          from-white/[0.06]
          via-white/[0.02]
          to-transparent

          transition-all
          duration-300

          group-hover:from-white/[0.12]
          group-hover:via-white/[0.04]
        "
      />

      {/* Premium Animated Border */}

      {variant !== "primary" && (
        <span
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-[14px]

            opacity-0
            transition-opacity
            duration-300

            group-hover:opacity-100
          "
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,.22), transparent 35%, rgba(217,70,239,.22))",
            WebkitMask:
              "linear-gradient(#000,#000) content-box, linear-gradient(#000,#000)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            padding: "1px",
          }}
        />
      )}

      {/* Inner Border */}

      <span
        className="
          pointer-events-none
          absolute
          inset-[1px]

          rounded-[13px]

          border
          border-white/[0.035]
        "
      />

      {/* Cursor Light */}

      {variant !== "primary" && (
        <span
          className="
            pointer-events-none
            absolute
            inset-0

            opacity-0
            transition-opacity
            duration-300

            group-hover:opacity-100
          "
        >
          <span
            className="
              absolute

              h-44
              w-44

              -translate-x-1/2
              -translate-y-1/2

              rounded-full

              bg-fuchsia-400/12

              blur-3xl
            "
            style={{
              left: "var(--x)",
              top: "var(--y)",
            }}
          />
        </span>
      )}

      {/* Hover Reflection */}

      <span
        className="
          pointer-events-none
          absolute
          inset-0

          opacity-0
          transition-opacity
          duration-300

          group-hover:opacity-100

          bg-gradient-to-br
          from-white/[0.08]
          via-transparent
          to-white/[0.03]
        "
      />

      {/* Content */}

      <span className="relative z-10 flex items-center gap-2">

        {Icon && (
          <Icon
            size={14}
            className="
              transition-all
              duration-300

              group-hover:scale-110
              group-hover:rotate-3
            "
          />
        )}

        <span>{children}</span>

      </span>
    </>
  );

  if (href) {
    return (
      <a
        ref={ref}
        href={href}
        target={target}
        rel={rel}
        download={download}
        className={classes}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={ref}
      onClick={onClick}
      className={classes}
    >
      {content}
    </button>
  );
}

export default PremiumButton;