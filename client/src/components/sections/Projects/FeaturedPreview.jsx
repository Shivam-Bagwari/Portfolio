function FeaturedPreview({ project }) {
  return (
    <div
      className="
        group
        relative
        h-full
        overflow-hidden

        border-b
        border-white/[0.06]

        bg-black/[0.18]

        md:border-b-0
        md:border-r
        md:border-white/[0.06]
      "
    >
      {/* =====================================================
          SUBTLE ACCENT ATMOSPHERE
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2

          h-[320px]
          w-[320px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-violet-500/[0.035]
          blur-[100px]

          transition-transform
          duration-700
          ease-out

          group-hover:scale-[1.12]

          md:h-[420px]
          md:w-[420px]
          md:blur-[120px]
        "
      />

      {/* =====================================================
          CENTER LIGHT
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
        "
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,255,255,.035), transparent 58%)",
        }}
      />

      {/* =====================================================
          VIGNETTE
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
        "
        style={{
          background:
            "radial-gradient(circle at center, transparent 30%, rgba(0,0,0,.48) 100%)",
        }}
      />

      {/* =====================================================
          BOTTOM FADE
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-24
          bg-gradient-to-t
          from-black/55
          to-transparent
          md:h-32
        "
      />

      {/* =====================================================
          FEATURED BADGE
      ===================================================== */}

      <div className="absolute left-5 top-5 z-20 md:left-6 md:top-6">
        <span
          className="
            inline-flex
            items-center
            rounded-full

            border
            border-white/[0.09]

            bg-white/[0.025]

            px-3
            py-1.5

            font-mono
            text-[8px]
            uppercase
            tracking-[0.22em]

            text-white/55

            md:px-3.5
            md:text-[9px]
          "
        >
          Featured
        </span>
      </div>

      {/* =====================================================
          YEAR
      ===================================================== */}

      <span
        className="
          absolute
          right-5
          top-5
          z-20

          font-mono
          text-[8px]
          uppercase
          tracking-[0.25em]

          text-white/25

          md:right-6
          md:top-6
          md:text-[9px]
        "
      >
        {project.year}
      </span>

      {/* =====================================================
          CENTER CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10
          flex
          h-full
          items-center
          justify-center

          px-5
          pb-5

          md:px-6
          md:pb-8
        "
      >
        <div
          className="
            text-center

            transition-transform
            duration-500
            ease-out

            group-hover:-translate-y-1
          "
        >
          <h2
            className="
              max-w-full

              font-serif-display
              text-[38px]
              italic
              leading-none
              tracking-[-0.06em]

              text-white

              sm:text-[46px]
              md:text-[56px]
            "
          >
            {project.previewTitle}
          </h2>

          <div
            className="
              mx-auto
              mt-3
              h-px
              w-14
              bg-white/20

              md:mt-4
              md:w-16
            "
          />

          <p
            className="
              mt-3

              text-[8px]
              uppercase
              tracking-[0.28em]

              text-white/35

              md:mt-4
              md:text-[10px]
              md:tracking-[0.34em]
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