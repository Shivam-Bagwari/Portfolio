import heroBanner from "../../../assets/images/hero-banner.jpg";
import useClockSafe from "../../../hooks/useClockSafe";
import TiltCard from "../../ui/TIltCard";

function HeroBanner() {
  const time = useClockSafe();

  return (
    <TiltCard className="rounded-[28px]">
      <div
        className="
          relative
          overflow-hidden
          rounded-[28px]

          border
          border-white/[0.05]

          bg-white/[0.025]

          shadow-[0_16px_42px_rgba(0,0,0,.28)]
        "
      >
        {/* Banner Image */}

        <img
          src={heroBanner}
          alt="Hero Banner"
          draggable={false}
          className="
            h-[320px]
            w-full
            object-cover
            select-none

            transition-transform
            duration-700
            ease-out

            group-hover:scale-[1.025]
          "
        />

        {/* Global Overlay */}

        <div className="absolute inset-0 bg-black/18" />

        {/* Ambient Violet Light */}

        <div
          className="
            absolute
            -top-24
            left-1/2

            h-72
            w-72

            -translate-x-1/2

            rounded-full

            bg-violet-400/[0.07]

            blur-[110px]
          "
        />

        {/* Bottom Fade */}

        <div
          className="absolute inset-x-0 bottom-0 h-44"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,.88), rgba(0,0,0,.38), transparent)",
          }}
        />

        {/* Top Reflection */}

        <div
          className="
            pointer-events-none

            absolute
            inset-x-0
            top-0

            h-px

            bg-gradient-to-r
            from-transparent
            via-white/30
            to-transparent
          "
        />

        {/* Inner Border */}

        <div
          className="
            pointer-events-none

            absolute
            inset-[1px]

            rounded-[27px]

            border
            border-white/[0.025]
          "
        />

        {/* Footer */}

        <div
          className="
            absolute
            bottom-6
            left-7
            right-7

            flex
            items-center
            justify-between
          "
        >
          {/* Left */}

          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-violet-400" />
            </span>

            <span
              className="
                font-mono
                text-[11px]
                uppercase
                tracking-[0.24em]
                text-white/75
              "
            >
              PORTFOLIO — 2026
            </span>
          </div>

          {/* Right */}

          <span
            className="
              font-mono
              text-[13px]
              tracking-[0.08em]
              text-white/70
            "
          >
            {time}
          </span>
        </div>
      </div>
    </TiltCard>
  );
}

export default HeroBanner;