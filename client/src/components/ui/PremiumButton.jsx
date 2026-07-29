import useMousePosition from "../../hooks/useMousePosition";
function PremiumButton({
  children,
  href,
  onClick,
  variant = "primary",
  leftIcon,
  rightIcon,
  className = "",
}) {
  const ref = useMousePosition();

  const base = `
    group
    relative
    inline-flex
    h-[42px]
    items-center
    justify-center
    overflow-hidden
    rounded-[14px]
    px-5
    text-[14px]
    font-semibold
    tracking-[-0.01em]
    transition-all
    duration-300
    ease-[cubic-bezier(.22,.61,.36,1)]
    active:scale-[0.98]
    select-none
  `;

  const variants = {
    primary: `
      border border-white/15
      bg-[#F5F5F3]
      text-[#111111]
      shadow-[0_8px_24px_rgba(0,0,0,.18)]
      hover:-translate-y-[2px]
      hover:shadow-[0_14px_32px_rgba(0,0,0,.28)]
    `,

    secondary: `
      border border-white/[0.08]
      bg-white/[0.045]
      text-white/90
      backdrop-blur-xl
      hover:bg-white/[0.065]
      hover:border-white/[0.16]
      hover:-translate-y-[2px]
    `,

    ghost: `
      text-white/75
      hover:bg-white/[0.04]
    `,
  };

  const content = (
    <>
      {/* Shine */}
      <span
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
          rounded-[14px]
        "
      >
        <span
          className="
            absolute
            left-[-35%]
            top-0
            h-full
            w-[35%]
            rotate-[18deg]
            bg-gradient-to-r
            from-transparent
            via-white/40
            to-transparent
            translate-x-0
            transition-transform
            duration-700
            ease-out
            group-hover:translate-x-[330%]
          "
        />
      </span>

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {leftIcon && (
          <span
            className="
              transition-transform
              duration-300
              group-hover:-translate-x-[1px]
            "
          >
            {leftIcon}
          </span>
        )}

        <span>{children}</span>

        {rightIcon && (
          <span
            className="
              transition-transform
              duration-300
              group-hover:translate-x-[2px]
            "
          >
            {rightIcon}
          </span>
        )}
      </span>
    </>
  );

  if (href) {
    return (
      <a ref={ref}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${variants[variant]} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button ref={ref}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
      
    >
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
>
    <span
        className="
            absolute
            h-40
            w-40
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-white/10
            blur-3xl
        "
        style={{
            left: "var(--x)",
            top: "var(--y)",
        }}
    />
</span>
      {content}
    </button>
  );
}

export default PremiumButton;