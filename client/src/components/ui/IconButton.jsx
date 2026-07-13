function Button({
  children,
  href = "#",
  variant = "primary",
}) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-300";

  const variants = {
    primary:
      "glass border border-white/10 text-white hover:border-accent/40 hover:-translate-y-1",

    secondary:
      "border border-white/10 text-white/70 hover:text-white hover:border-white/20",
  };

  return (
    <a
      href={href}
      className={`${baseClasses} ${variants[variant]}`}
    >
      {children}
    </a>
  );
}

export default Button;