import useClockSafe from "../../../hooks/useClockSafe";
function BannerFooter() {
    const time = useClockSafe(); 
  return (
    <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-6 py-5">
      {/* Left */}
      <div className="flex items-center gap-3">
        <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />

        <span className="font-mono text-xs uppercase tracking-[0.25em] text-white/80">
          Portfolio • 2026
        </span>
      </div>

      {/* Right */}
      <span className="font-mono text-xs text-white/70">
        {time}
      </span>
    </div>
  );
}

export default BannerFooter;