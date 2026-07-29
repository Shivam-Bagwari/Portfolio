function FeaturedPreview({ project }) {
  return (
    <div className="relative h-full overflow-hidden border-r border-white/[0.05] bg-[#090909]">

      {/* Grid */}
      <div
        className="
          absolute inset-0
          opacity-[0.045]
          [background-image:
          linear-gradient(to_right,rgba(255,255,255,.08)_1px,transparent_1px),
          linear-gradient(to_bottom,rgba(255,255,255,.08)_1px,transparent_1px)]
          [background-size:48px_48px]
        "
      />

      {/* Glow */}
      <div
        className="
          absolute
          left-[23%]
          top-[12%]
          h-[360px]
          w-[360px]
          rounded-full
          bg-violet-400/20
          blur-[110px]
        "
      />

      {/* Fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />

      {/* Badge */}
      <div className="absolute left-4 top-4 z-20">
        <div
          className="
            rounded-full
            bg-[#9c6bdb]
            px-3
            py-[5px]
            font-mono
            text-[9px]
            font-semibold
            uppercase
            tracking-[0.24em]
            text-white
          "
        >
          Featured
        </div>
      </div>

      {/* Center */}
      <div className="relative z-10 flex h-full items-center justify-center pb-8">

        <div className="-mt-6 text-center">

          <h2
            className="
              font-serif-display
              text-[54px]
              italic
              leading-none
              tracking-[-0.05em]
              text-white/90
            "
          >
            {project.previewTitle}
          </h2>

          <p
            className="
              mt-3
              text-[11px]
              tracking-[0.08em]
              text-white/45
            "
          >
            {project.previewSubtitle}
          </p>

        </div>

      </div>
    </div>
  );
}

export default FeaturedPreview;