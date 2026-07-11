function AvailabilityBadge() {
    return (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
            <div className="flex items-center gap-3 rounded-full border border-white/10 bg-black/70 px-4 py-2 backdrop-blur-md">
                <div className="relative h-2.5 w-2.5">
                    <span className="ping-ring"></span>

                    <span className="absolute inset-0 rounded-full bg-emerald-400"></span>
                </div>

                <span className="font-mono text-sm text-white/80">
                    available for work
                </span>

                <span className="text-white/20">|</span>

                <span className="font-mono text-sm text-white/60">
                    23:54
                </span>

            </div>
        </div>
    );
}

export default AvailabilityBadge;