import useIsMobile from "../../../hooks/useIsMobile";
function Background() {
    const isMobile = useIsMobile();
    return (
        <>
            {/* BLACK BASE */}

            <div className="absolute inset-0 bg-black" />

            {/* BLUEPRINT GRID */}

            <div
                className={`absolute inset-0 blueprint-grid ${isMobile ? "opacity-70" : ""
                    }`}
            />

            {/* CENTER LIFT */}

            <div
                className="absolute inset-0"
                style={{
                    background: isMobile
                        ? "radial-gradient(circle at center, rgba(255,255,255,.010), transparent 65%)"
                        : "radial-gradient(circle at center, rgba(255,255,255,.018), transparent 68%)",
                }}
            />

            {/* PREMIUM RAILS */}

            <div className="fixed inset-0 pointer-events-none z-[2] hidden xl:block">
                <div className="relative mx-auto h-full max-w-[1500px]">

                    {/* LEFT */}

                    <div className="rail rail-left">

                        <div className="rail-line" />

                        <div className="rail-glow" />

                        <div className="rail-dots" />

                        <div className="rail-guides" />

                    </div>

                    {/* RIGHT */}

                    <div className="rail rail-right">

                        <div className="rail-line" />

                        <div className="rail-glow" />

                        <div className="rail-dots" />

                        <div className="rail-guides" />

                    </div>

                </div>
            </div>

            {/* LEFT AMBIENT */}

            <div
                className={`
                    absolute
                    rounded-full
                    bg-violet-700/[0.10]

                    ${isMobile
                        ? "-left-[180px] top-[60px] h-[520px] w-[520px] blur-[120px]"
                        : "-left-[380px] top-[120px] h-[900px] w-[900px] blur-[220px]"
                    }
`}
            />

            {/* CENTER AMBIENT */}

            <div
                className={`
                    absolute
                    left-1/2
                    -translate-x-1/2
                    rounded-full
                    bg-sky-500/[0.05]
                    ${isMobile
                        ? "-top-[160px] h-[420px] w-[420px] blur-[120px]"
                        : "-top-[260px] h-[720px] w-[720px] blur-[220px]"
                    }
`}
            />

            {/* RIGHT AMBIENT */}

            {!isMobile && (
                <div
                    className="
                    absolute
                    -right-[340px]
                    bottom-[40px]
                    h-[880px]
                    w-[880px]
                    rounded-full
                    blur-[220px]
                    bg-fuchsia-700/[0.05]"
                />
            )}

            {/* CINEMATIC VIGNETTE */}

            <div
                className="absolute inset-0"
                style={{
                    background: `
            radial-gradient(
              ellipse at center,
              transparent 35%,
              rgba(0,0,0,.08) 60%,
              rgba(0,0,0,.22) 82%,
              rgba(0,0,0,.62) 100%
            )
          `,
                }}
            />
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "linear-gradient(to bottom, rgba(0,0,0,.35), transparent 12%, transparent 88%, rgba(0,0,0,.35))",
                }}
            />

            {/* FILM GRAIN */}

            <div
                className={`absolute inset-0 noise-overlay ${isMobile ? "opacity-40" : ""
                    }`}
            />
        </>
    );
}

export default Background;