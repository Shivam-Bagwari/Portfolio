import heroBanner from "../../../assets/images/hero-banner.jpg";
import useClockSafe from "../../../hooks/useClockSafe";

function HeroBanner() {

  const time = useClockSafe();

  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-white/[0.08]
        bg-white/[0.02]
        shadow-[0_0_0_1px_rgba(255,255,255,.03),0_25px_60px_rgba(0,0,0,.45)]
      "
    >
      {/* Banner Image */}

      <img
        src={heroBanner}
        alt="Hero Banner"
        className="
          h-[310px]
          w-full
          object-cover
          select-none
        "
        draggable={false}
      />

      {/* Overall Tint */}

      <div className="absolute inset-0 bg-black/10" />

      {/* Bottom Fade */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-40
        "
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,.82), rgba(0,0,0,.15), transparent)"
        }}
      />

      {/* Soft Edge Highlight */}

      <div
        className="
          absolute
          inset-0
          rounded-[28px]
          pointer-events-none
        "
        style={{
          boxShadow:
            "inset 0 1px rgba(255,255,255,.06)"
        }}
      />

      {/* Footer */}

      <div
        className="
          absolute
          bottom-5
          left-6
          right-6
          flex
          items-end
          justify-between
        "
      >
        {/* Left */}

        <div className="flex items-center gap-2">

          <div className="h-2 w-2 rounded-full bg-fuchsia-400" />

          <span
            className="
              font-mono
              text-[11px]
              uppercase
              tracking-[0.22em]
              text-white/75
            "
          >
            Portfolio — 2026
          </span>

        </div>

        {/* Right */}

        <span
          className="
            font-mono
            text-sm
            text-white/80
          "
        >
          {time}
        </span>

      </div>

    </div>
  );
}

export default HeroBanner;