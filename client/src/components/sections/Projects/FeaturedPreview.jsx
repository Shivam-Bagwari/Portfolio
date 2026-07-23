function FeaturedPreview({ project }) {
  const { previewTitle, previewSubtitle, accent } = project;

  const accents = {
    purple: {
      background:
        "bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.22),transparent_65%),linear-gradient(135deg,#262038,#18161d,#101012)]",
    },

    green: {
      background:
        "bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.18),transparent_65%),linear-gradient(135deg,#1a2c24,#18161d,#101012)]",
    },

    cyan: {
      background:
        "bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.18),transparent_65%),linear-gradient(135deg,#18272d,#18161d,#101012)]",
    },

    white: {
      background:
        "bg-[radial-gradient(circle_at_center,rgba(255,255,255,.08),transparent_65%),linear-gradient(135deg,#242424,#18161d,#101012)]",
    },
  };

  const current = accents[accent] || accents.purple;

  return (
    <div
      className={`
        relative
        min-h-[440px]
        overflow-hidden
        border-b
        border-white/[0.06]
        lg:border-b-0
        lg:border-r
        ${current.background}
      `}
    >
      {/* Grid */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          [background-image:linear-gradient(rgba(255,255,255,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.35)_1px,transparent_1px)]
          [background-size:34px_34px]
        "
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      {/* Center */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-10 text-center">
        <h2
          className="
            font-serif-display
            text-[64px]
            italic
            leading-none
            tracking-[-0.05em]
            text-white
          "
        >
          {previewTitle}
        </h2>

        <p
          className="
            mt-5
            font-mono
            text-[11px]
            uppercase
            tracking-[0.24em]
            text-white/45
          "
        >
          {previewSubtitle}
        </p>
      </div>
    </div>
  );
}

export default FeaturedPreview;