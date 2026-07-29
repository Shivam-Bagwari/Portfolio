function FeaturedPreview({ project }) {
  return (
  
    <div className="relative h-full overflow-hidden border-r border-white/[0.04]">


      {/* Left Ambient */}
      <div
        className="
          absolute
          -left-28
          top-[-10%]
          h-[420px]
          w-[420px]
          rounded-full
          bg-violet-400/8
          blur-[130px]
          transition-all
          duration-700
          group-hover:scale-110
        "
      />

      {/* Right Ambient */}
      <div
        className="
          absolute
          -right-24
          bottom-[-25%]
          h-[340px]
          w-[340px]
          rounded-full
          bg-fuchsia-400/6
          blur-[120px]
          transition-all
          duration-700
          group-hover:scale-110
        "
      />

      {/* Center Vignette */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,.35)_100%)]
        "
      />

      {/* Bottom Fade */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent" />

      {/* Badge */}
      <div className="absolute left-6 top-6 z-20">
        <div
          className="
            rounded-full
            border
            border-white/10
            bg-white/[0.04]
            px-4
            py-2
            text-[10px]
            uppercase
            tracking-[0.22em]
            text-zinc-300
            backdrop-blur-sm
          "
        >
          Featured
        </div>
      </div>

      {/* Content */}
{/* Content */}
<div className="relative z-10 flex h-full items-center justify-center pb-8">

  <div className="text-center">

    <h2
      className="
        font-serif-display
        text-[58px]
        italic
        leading-none
        tracking-[-0.06em]
        text-white
      "
    >
      {project.previewTitle}
    </h2>

    <div
      className="
        mx-auto
        mt-3
        h-px
        w-20
        bg-gradient-to-r
        from-transparent
        via-violet-400/40
        to-transparent
      "
    />

    <p
      className="
        mt-4
        text-[11px]
        uppercase
        tracking-[0.35em]
        text-white/40
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