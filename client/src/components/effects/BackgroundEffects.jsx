function BackgroundEffects() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">

      {/* Pure Black Base */}
      <div className="absolute inset-0 noise-bg bg-color: #000000 " />

      {/* Blueprint Grid */}
      <>
        {/* Fine Grid */}

        <div className="absolute inset-0 blueprint-grid" />

        {/* Major Grid */}

        <div className="absolute inset-0 blueprint-grid-large" />
      </>

      {/* ======================================
    Content Rails
====================================== */}

      <div className="fixed inset-0 pointer-events-none -z-30">

        <div className="relative mx-auto h-full max-w-[900px]">

          {/* Left Rail */}

          <div
            className="absolute left-0 top-0 h-full w-[2px]"
            style={{
              background:
                "repeating-linear-gradient(to bottom, rgba(255,255,255,.14) 0px, rgba(255,255,255,.14) 4px, transparent 4px, transparent 9px)"
            }}
          />

          {/* Right Rail */}

          <div
            className="absolute right-0 top-0 h-full w-[2px]"
            style={{
              background:
                "repeating-linear-gradient(to bottom, rgba(255,255,255,.14) 0px, rgba(255,255,255,.14) 4px, transparent 4px, transparent 9px)"
            }}
          />

        </div>

      </div>

      {/* Left Aurora */}
      <div
        className=" 
        absolute 
        -top-[220px] 
        -left-[280px] 
        h-[950px] 
        w-[950px] 
        rounded-full 
        bg-violet-500/[0.055] 
        blur-[220px] 
        aurora-1
        "
      />

      {/* Right Aurora */}
      <div
        className="
        absolute
        top-[35%]
        -right-[260px]
        h-[850px]
        w-[850px]
        rounded-full
        bg-fuchsia-500/[0.050]
        blur-[220px]
        aurora-2
        "
      />

      {/* Vignette */}
      <div className="absolute inset-0 vignette" />

    </div>
  );
}

export default BackgroundEffects;