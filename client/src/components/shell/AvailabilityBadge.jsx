import useClockSafe from "../../hooks/useClockSafe";

function AvailabilityBadge() {
    const time = useClockSafe();
    return (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
            <div className="flex items-center gap-3 glass-chip rounded-full px-5 py-3">
                <div className="relative h-2.5 w-2.5">
                    <span className="ping-ring"></span>

                    <span className="absolute inset-0 rounded-full bg-emerald-400"></span>
                </div>

                <span className="font-mono text-sm text-white/80">
                    available for work
                </span>

                <span className="text-white/20">|</span>

                <span className="font-mono text-sm text-white/60">
                    {time}
                </span>

            </div>
        </div>
    );
}

export default AvailabilityBadge;