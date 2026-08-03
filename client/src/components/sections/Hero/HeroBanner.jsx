import heroBanner from "../../../assets/images/hero-banner.jpg";
import useClockSafe from "../../../hooks/useClockSafe";

function HeroBanner() {
  const time = useClockSafe();

  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-cyan-300/[0.12]
        bg-black/25
        shadow-[0_18px_60px_rgba(0,0,0,.45)]
      "
    >

      
      {/* Environment Lights */}

      {/* Moon Bloom */}
      <div
        className="
          pointer-events-none
          absolute
          left-[18%]
          top-[10%]
          h-40
          w-40
          rounded-full
          bg-white/18
          blur-[90px]
          z-[1]
        "
      />

      {/* Top Blue Atmosphere */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          -top-32
          h-[520px]
          w-[760px]
          -translate-x-1/2
          rounded-full
          bg-cyan-400/[0.08]
          blur-[170px]
          z-[1]
        "
      />

      {/* Left Purple Light */}
      <div
        className="
          pointer-events-none
          absolute
          -left-36
          bottom-0
          h-[430px]
          w-[430px]
          rounded-full
          bg-fuchsia-500/[0.08]
          blur-[130px]

          z-[1]
        "
      />

      {/* Right Cyan Fill */}
      <div
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-0
          h-[360px]
          w-[360px]
          rounded-full
          bg-cyan-400/[0.06]
          blur-[120px]

          z-[1]
        "
      />

      {/* Banner Image */}

      <img
        src={heroBanner}
        alt="Hero Banner"
        draggable={false}
        className="
          relative
          z-[2]
          md:h-[300px]
          lg:h-[340px]
          xl:h-[360px]
          w-full
          select-none
          object-cover
          brightness-[1.08]
          contrast-[1.10]
          saturate-[1.18]
          transition-all
          duration-700
          ease-out

          group-hover:scale-[1.02]
        "
      />

      {/* Atmospheric Overlay */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0

          z-[3]
        "
        style={{
          background: `
            linear-gradient(
              to bottom,
              rgba(103,232,249,.02),
              transparent 35%,
              rgba(217,70,239,.025)
            )
          `,
        }}
      />

      {/* Edge Vignette */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[3]
        "
        style={{
          background:
            "radial-gradient(circle, transparent 52%, rgba(0,0,0,.28) 100%)",
        }}
      />

      {/* Bottom Cinematic Fade */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-44

          z-[3]
        "
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,.82), rgba(0,0,0,.30), transparent)",
        }}
      />

      {/* Top Reflection */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-16
          z-[4]
          bg-gradient-to-b
          from-white/[0.06]
          via-white/[0.02]
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
          border-white/[0.035]
          z-[4]
        "
      />

      {/* Footer */}

      <div
        className="
          absolute
          bottom-6
          left-7
          right-7
          z-[5]
          flex
          items-center
          justify-between
        "
      >
        <div className="flex items-center gap-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-fuchsia-400 opacity-75 animate-ping" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-fuchsia-400" />
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

        <span
          className="
            font-mono
            text-[13px]
            tracking-[0.08em]
            text-white/75
          "
        >
          {time}
        </span>
      </div>
    </div>
  );
}

export default HeroBanner;