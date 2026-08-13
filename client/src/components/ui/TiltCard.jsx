import { useRef } from "react";
import useIsMobile from "../../hooks/useIsMobile";

function TiltCard({ children, className = "" }) {
  const ref = useRef(null);
  const rectRef = useRef(null);
  const frame = useRef(null);

  const isMobile = useIsMobile();

  const reset = () => {
    const el = ref.current;

    if (!el) return;

    cancelAnimationFrame(frame.current);

    el.style.transform =
      "perspective(1400px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)";
  };

  const onEnter = () => {
    const el = ref.current;

    if (!el) return;

    rectRef.current = el.getBoundingClientRect();
  };

  const onMove = (e) => {
    const el = ref.current;
    const rect = rectRef.current;

    if (!el || !rect) return;

    if (
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
    ) {
      return;
    }

    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    cancelAnimationFrame(frame.current);

    frame.current = requestAnimationFrame(() => {
      /*
        Maximum tilt = 4 degrees.

        This keeps the interaction feeling physical
        without becoming a gimmick.
      */

      const maxTilt = 4;

      const rx = (py - 0.5) * -maxTilt;
      const ry = (px - 0.5) * maxTilt;

      el.style.transform = `
        perspective(1400px)
        rotateX(${rx}deg)
        rotateY(${ry}deg)
        translateY(-2px)
        scale(1.005)
      `;

      el.style.setProperty("--mx", `${px * 100}%`);
      el.style.setProperty("--my", `${py * 100}%`);
    });
  };

  const onLeave = () => {
    reset();
  };

  /*
    Mobile / touch devices don't need cursor tilt.
    PremiumCard still handles the visual surface.
  */

  if (isMobile) {
    return (
      <div className={`relative ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      onMouseEnter={onEnter}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`
        relative
        h-full

        transition-transform
        duration-500
        ease-[cubic-bezier(.22,.61,.36,1)]

        ${className}
      `}
      style={{
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
    >
      {/* =====================================================
          CURSOR ENVIRONMENTAL LIGHT
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          z-40

          rounded-[22px]

          opacity-0

          transition-opacity
          duration-500

          group-hover:opacity-100
        "
        style={{
          background: `
            radial-gradient(
              240px circle
              at var(--mx, 50%)
              var(--my, 50%),
              rgba(168,139,250,0.10),
              transparent 62%
            )
          `,
        }}
      />

      {children}
    </div>
  );
}

export default TiltCard;