function Background() {
  return (
    <>
      {/* BLACK BASE */}

      <div className="absolute inset-0 bg-black" />

      {/* GRID */}

      <div className="absolute inset-0 blueprint-grid" />

      {/* PREMIUM CANVAS RAILS */}

      <div className="fixed inset-0 pointer-events-none z-[2]">
        <div className="relative mx-auto h-full max-w-[1500px]">

          {/* LEFT RAIL */}

          <div className="rail rail-left">

            <div className="rail-line" />

            <div className="rail-glow" />

            <div className="rail-dots" />

            <div className="rail-guides" />

          </div>

          {/* RIGHT RAIL */}

          <div className="rail rail-right">

            <div className="rail-line" />

            <div className="rail-glow" />

            <div className="rail-dots" />

            <div className="rail-guides" />

          </div>

        </div>
      </div>

      {/* NOISE */}

      <div className="absolute inset-0 noise-overlay" />

      {/* LEFT LIGHT */}

      <div
        className="
          absolute
          left-[-220px]
          top-32
          h-[700px]
          w-[700px]
          rounded-full
          bg-violet-700/15
          blur-[180px]
        "
      />

      {/* RIGHT LIGHT */}

      <div
        className="
          absolute
          right-[-220px]
          bottom-24
          h-[650px]
          w-[650px]
          rounded-full
          bg-fuchsia-700/10
          blur-[170px]
        "
      />
    </>
  );
}

export default Background;