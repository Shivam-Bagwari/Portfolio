function BackgroundEffects() {
  return (
    <>
      {/* Base */}
      <div className="fixed inset-0 bg-black -z-50" />

      {/* Aurora */}
      <div className="fixed inset-0 overflow-hidden -z-40">
        <div className="aurora-1" />
        <div className="aurora-2" />
      </div>

      {/* Grid */}
      <div className="fixed inset-0 blueprint-grid -z-30" />

      {/* Rails */}
      <div className="pointer-events-none fixed inset-0 -z-20">
        <div className="relative mx-auto h-full max-w-4xl px-6">

          <div className="absolute left-6 top-0 h-full border-l border-dashed border-white/15" />

          <div className="absolute right-6 top-0 h-full border-l border-dashed border-white/15" />

        </div>
      </div>

      {/* Noise */}
      <div className="noise fixed inset-0 -z-10" />

      {/* Vignette */}
      <div className="vignette fixed inset-0 pointer-events-none z-0" />
    </>
  );
}

export default BackgroundEffects;