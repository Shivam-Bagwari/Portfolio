function SectionHeader({
  number,
  title,
  description,
  className = "",
}) {
  return (
    <div className={`mb-14 ${className}`}>

      <div className="flex items-center gap-3">

        <div
          className="
            flex
            h-9
            min-w-9
            items-center
            justify-center
            rounded-full
            border
            border-fuchsia-500/20
            bg-fuchsia-500/10
            px-3
            font-mono
            text-[11px]
            font-semibold
            text-fuchsia-300
          "
        >
          {number}
        </div>

        <h2
          className="
            text-[34px]
            font-black
            tracking-[-0.03em]
            text-white
          "
        >
          {title}
        </h2>

      </div>

      {description && (
        <p
          className="
            mt-4
            max-w-2xl
            text-white/55
            leading-7
          "
        >
          {description}
        </p>
      )}

      <div className="mt-6 h-px bg-gradient-to-r from-fuchsia-500/40 via-white/10 to-transparent" />

    </div>
  );
}

export default SectionHeader;