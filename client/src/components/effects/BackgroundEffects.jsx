function BackgroundEffects() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">

      {/* Pure Black Base */}
      <div className="absolute inset-0 noise-bg bg-color: #000000 " />

      {/* Blueprint Grid */}
      <div className="absolute inset-0 blueprint-grid" />

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
          -top-40
          -left-40
          h-[650px]
          w-[650px]
          rounded-full
          bg-violet-500/10
          blur-[130px]
          aurora-1
        "
      />

      {/* Right Aurora */}
      <div
        className="
          absolute
          top-1/2
          -right-40
          h-[520px]
          w-[520px]
          rounded-full
          bg-fuchsia-500/10
          blur-[130px]
          aurora-2
        "
      />

      {/* Vignette */}
      <div className="absolute inset-0 vignette" />

    </div>
  );
}

export default BackgroundEffects;