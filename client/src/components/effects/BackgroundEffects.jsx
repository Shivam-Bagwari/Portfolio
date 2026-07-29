function BackgroundEffects() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">

      {/* Pure Black Base */}
      <div className="absolute inset-0 noise-bg bg-[#000000] " />
      
      {/* Noise Texture */}
      <div className="absolute inset-0 noise-overlay opacity-[0.07]" />

      {/* Blueprint Grid */}
      <>
        {/* Fine Grid */}

        <div className="absolute inset-0 blueprint-grid" />

        {/* Major Grid */}

        <div className="absolute inset-0 blueprint-grid-large" />
      </>

      {/* Content Rails */}

      <div className="fixed inset-0 pointer-events-none ">

        <div className="relative mx-auto h-full max-w-[900px]">

          {/* Left Rail */}

          <div
            className="absolute left-0 top-0 h-full w-[2px]"
            style={{
              background:
                "repeating-linear-gradient(to bottom, rgba(255,255,255,0.11) 0px, rgba(255,255,255,0.11) 4px, transparent 4px, transparent 9px)"
            }}
          />

          {/* Right Rail */}

          <div
            className="absolute right-0 top-0 h-full w-[2px]"
            style={{
              background:
                "repeating-linear-gradient(to bottom, rgba(255,255,255,0.14) 0px, rgba(255,255,255,0.14) 4px, transparent 4px, transparent 9px)"
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
        h-[1200px] 
        w-[1200px] 
        rounded-full 
        bg-violet-500/[0.055] 
        blur-[280px] 
        aurora-1
        "
      />

      {/* Right Aurora */}
      <div
        className="
        absolute
        top-[35%]
        -right-[260px]
        h-[1050px]
        w-[1050px]
        rounded-full
        bg-fuchsia-500/[0.07]
        blur-[260px]
        aurora-2
        "
      />
      
      {/* Vignette */}
      <div className="absolute inset-0 vignette" />

    </div>
  );
}

export default BackgroundEffects;