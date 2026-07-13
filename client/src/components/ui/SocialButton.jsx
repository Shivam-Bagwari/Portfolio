function SocialButton({
  href,
  icon: Icon,
  name,
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={name}
      className="
        glass
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-full
        border
        border-white/10
        text-white/70
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-accent/40
        hover:text-white
      "
    >
      <Icon size={18} />
    </a>
  );
}

export default SocialButton;