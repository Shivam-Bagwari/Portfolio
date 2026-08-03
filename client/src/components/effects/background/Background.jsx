function Background() {
  return (
    <>
      {/* BLACK BASE */}

      <div className="absolute inset-0 bg-black" />

      {/* BLUEPRINT GRID */}

      <div className="absolute inset-0 blueprint-grid" />

      {/* CENTER LIFT */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,255,255,.018), transparent 68%)",
        }}
      />

      {/* PREMIUM RAILS */}

      <div className="fixed inset-0 pointer-events-none z-[2] hidden xl:block">
        <div className="relative mx-auto h-full max-w-[1500px]">

          {/* LEFT */}

          <div className="rail rail-left">

            <div className="rail-line" />

            <div className="rail-glow" />

            <div className="rail-dots" />

            <div className="rail-guides" />

          </div>

          {/* RIGHT */}

          <div className="rail rail-right">

            <div className="rail-line" />

            <div className="rail-glow" />

            <div className="rail-dots" />

            <div className="rail-guides" />

          </div>

        </div>
      </div>

      {/* LEFT AMBIENT */}

      <div
        className="
          absolute
          -left-[380px]
          top-[120px]
          h-[900px]
          w-[900px]
          rounded-full
          blur-[220px]
          bg-violet-700/[0.10]
        "
      />

      {/* CENTER AMBIENT */}

      <div
        className="
          absolute
          left-1/2
          -top-[260px]
          h-[720px]
          w-[720px]
          -translate-x-1/2
          rounded-full
          blur-[220px]
          bg-sky-500/[0.05]
        "
      />

      {/* RIGHT AMBIENT */}

      <div
        className="
          absolute
          -right-[340px]
          bottom-[40px]
          h-[880px]
          w-[880px]
          rounded-full
          blur-[220px]
          bg-fuchsia-700/[0.05]
        "
      />

      {/* CINEMATIC VIGNETTE */}

      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              ellipse at center,
              transparent 35%,
              rgba(0,0,0,.08) 60%,
              rgba(0,0,0,.22) 82%,
              rgba(0,0,0,.62) 100%
            )
          `,
        }}
      />
      <div
  className="absolute inset-0 pointer-events-none"
  style={{
    background:
      "linear-gradient(to bottom, rgba(0,0,0,.35), transparent 12%, transparent 88%, rgba(0,0,0,.35))",
  }}
/>

      {/* FILM GRAIN */}

      <div className="absolute inset-0 noise-overlay" />
    </>
  );
}

export default Background;