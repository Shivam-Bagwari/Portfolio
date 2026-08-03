function Atmosphere() {
  return (
    <>
      {/* ============================= */}
      {/* Environment Lighting */}
      {/* ============================= */}

      {/* Key Light (Top Left) */}
      <div
        className="
          absolute
          -left-[18%]
          -top-[30%]
          h-[1300px]
          w-[1300px]
          rounded-full
          blur-[220px]
        "
        style={{
          background: `
            radial-gradient(
              circle,
              rgba(124,58,237,.065) 0%,
              rgba(124,58,237,.03) 38%,
              transparent 72%
            )
          `,
        }}
      />

      {/* Fill Light (Bottom Right) */}
      <div
        className="
          absolute
          -right-[20%]
          -bottom-[45%]
          h-[1400px]
          w-[1400px]
          rounded-full
          blur-[240px]
        "
        style={{
          background: `
            radial-gradient(
              circle,
              rgba(192,132,252,.05) 0%,
              rgba(168,85,247,.025) 40%,
              transparent 74%
            )
          `,
        }}
      />

      {/* ============================= */}
      {/* Aurora System */}
      {/* ============================= */}

      {/* Left Aurora */}
      <div
        className="
          absolute
          -left-[28%]
          -top-[20%]
          h-[1200px]
          w-[1200px]
          rounded-full
          blur-[280px]
          will-change-transform
          animate-[auroraLeft_18s_cubic-bezier(.4,0,.6,1)_infinite]
        "
        style={{
          background: `
            radial-gradient(
              circle,
              rgba(124,58,237,.13) 0%,
              rgba(124,58,237,.07) 36%,
              transparent 72%
            )
          `,
        }}
      />

      {/* Right Aurora */}
      <div
        className="
          absolute
          -right-[30%]
          top-[38%]
          h-[1050px]
          w-[1050px]
          rounded-full
          blur-[260px]
          will-change-transform
          animate-[auroraRight_22s_cubic-bezier(.4,0,.6,1)_infinite]
        "
        style={{
          background: `
            radial-gradient(
              circle,
              rgba(192,132,252,.14) 0%,
              rgba(168,85,247,.07) 40%,
              transparent 72%
            )
          `,
        }}
      />

    
      {/* Noise */}
    

      {/* Vignette */}

    </>
  );
}

export default Atmosphere;