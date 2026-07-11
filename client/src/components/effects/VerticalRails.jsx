function VerticalRails() {
    return (
        <div className="fixed inset-0 pointer-events-none z-0">
            <div className="mx-auto h-full max-w-5xl px-6 relative">
                {/* Left Rail */}
                <div className="absolute left-6 top-0 h-full border-l border-dashed border-white/25" />

                {/* Right Rail */}
                <div className="absolute right-6 top-0 h-full border-l border-dashed border-white/25" />
            </div>
        </div>
    );
}

export default VerticalRails;