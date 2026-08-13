function FeaturedPreview({ project }) {
  const {
    previewTitle,
    previewSubtitle,
    year,
  } = project;

  return (
    <div
      className="
        group
        relative
        h-full
        w-full
        overflow-hidden
        bg-black/[0.18]
      "
    >
      {/* PURPLE ATMOSPHERE */}

      <div
        className="
          pointer-events-none
          absolute
          -left-[90px]
          -top-[120px]
          h-[520px]
          w-[620px]
          rounded-full
          blur-[120px]
          opacity-90
          transition-transform
          duration-700
          ease-out
          group-hover:scale-[1.05]
        "
        style={{
          background: `
            radial-gradient(
              ellipse at center,
              rgba(168, 85, 247, 0.22) 0%,
              rgba(139, 92, 246, 0.15) 28%,
              rgba(124, 58, 237, 0.08) 48%,
              transparent 72%
            )
          `,
        }}
      />

      {/* SECONDARY PURPLE DEPTH */}

      <div
        className="
          pointer-events-none
          absolute
          left-[18%]
          top-[18%]
          h-[300px]
          w-[360px]
          rounded-full
          blur-[100px]
          opacity-60
        "
        style={{
          background:
            "radial-gradient(circle, rgba(168,85,247,.10), transparent 68%)",
        }}
      />

      {/* CENTER SOFT LIGHT */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
        "
        style={{
          background: `
            radial-gradient(
              ellipse at 42% 48%,
              rgba(255,255,255,.025),
              transparent 55%
            )
          `,
        }}
      />

      {/* DARK RIGHT FADE */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
        "
        style={{
          background: `
            linear-gradient(
              90deg,
              transparent 0%,
              transparent 55%,
              rgba(0,0,0,.20) 78%,
              rgba(0,0,0,.38) 100%
            )
          `,
        }}
      />

      {/* BOTTOM VIGNETTE */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
        "
        style={{
          background: `
            linear-gradient(
              to bottom,
              transparent 45%,
              rgba(0,0,0,.18) 72%,
              rgba(0,0,0,.42) 100%
            )
          `,
        }}
      />

      {/* SUBTLE TOP REFLECTION */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-white/[0.10]
          to-transparent
        "
      />

      {/* FEATURED BADGE */}

      <div
        className="
          absolute
          left-5
          top-5
          z-20
          inline-flex
          items-center
        "
      >
        <span
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-white/[0.10]
            bg-white/[0.035]
            px-3
            py-[6px]
            font-mono
            text-[9px]
            font-semibold
            uppercase
            tracking-[0.22em]
            text-white/55
            backdrop-blur-md
          "
        >
          <span
            className="
              h-[5px]
              w-[5px]
              rounded-full
              bg-fuchsia-400/80
              shadow-[0_0_10px_rgba(217,70,239,.45)]
            "
          />

          Featured
        </span>
      </div>

      {/* YEAR */}

      <span
        className="
          absolute
          right-5
          top-5
          z-20
          font-mono
          text-[9px]
          uppercase
          tracking-[0.25em]
          text-white/25
        "
      >
        {year}
      </span>

      {/* CENTER BRAND */}

      <div
        className="
          relative
          z-10
          flex
          h-full
          w-full
          flex-col
          items-center
          justify-center
          text-center
          -translate-y-1
          transition-transform
          duration-700
          ease-out
          group-hover:-translate-y-2
        "
      >
        <h2
          className="
            font-serif-display

            text-[42px]
            italic
            leading-none

            tracking-[-0.045em]

            text-white
          "
        >
          {previewTitle}
        </h2>

        {/* Small divider */}

        <div
          className="
            mt-5
            h-px
            w-12
            bg-white/[0.12]
          "
        />

        <p
          className="
            mt-4
            font-mono
            text-[10px]
            uppercase
            tracking-[0.28em]
            text-white/35
          "
        >
          {previewSubtitle}
        </p>
      </div>

      {/* EDGE SHADOW */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          shadow-[inset_0_0_80px_rgba(0,0,0,.28)]
        "
      />
    </div>
  );
}

export default FeaturedPreview;