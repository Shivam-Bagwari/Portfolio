import { useRef } from "react";
import useIsMobile from "../../hooks/useIsMobile";

function TiltCard({ children, className = "" }) {
  const ref = useRef(null);
  const rectRef = useRef(null);
  const frame = useRef(null);

  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div
        className={`relative overflow-hidden rounded-[30px] ${className}`}
      >
        {children}
      </div>
    );
  }

  const onMove = (e) => {
    const el = ref.current;
    const rect = rectRef.current;

    if (!el || !rect) return;

    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    cancelAnimationFrame(frame.current);

    frame.current = requestAnimationFrame(() => {
      const rx = (py - 0.5) * -8;
      const ry = (px - 0.5) * 8;

      el.style.transform = `
        perspective(1400px)
        rotateX(${rx}deg)
        rotateY(${ry}deg)
        translateY(-4px)
        scale(1.01)
      `;

      el.style.setProperty("--mx", `${px * 100}%`);
      el.style.setProperty("--my", `${py * 100}%`);
    });
  };

  const onEnter = () => {
    rectRef.current = ref.current?.getBoundingClientRect();
  };

  const onLeave = () => {
    const el = ref.current;

    if (!el) return;

    cancelAnimationFrame(frame.current);

    el.style.transform =
      "perspective(1400px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className={`
        group
        relative
        overflow-hidden
        rounded-[30px]

        transition-transform
        duration-500
        ease-[cubic-bezier(.22,.61,.36,1)]

        ${className}
      `}
      style={{
        transformStyle: "preserve-3d",
        willChange: "transform",
        contain: "paint",
      }}
    >
      {/* Cursor Spotlight */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0

          rounded-[30px]

          border
          border-fuchsia-400/15

          opacity-0

          transition-opacity
          duration-300

          group-hover:opacity-100
        "
        style={{
          background: `
            radial-gradient(
              260px circle
              at var(--mx,50%)
              var(--my,50%),

              rgba(217,70,239,.20),

              transparent 45%
            )
          `,
        }}
      />

      {/* Premium Border */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0

          rounded-[30px]

          opacity-0

          transition-opacity
          duration-300

          group-hover:opacity-100
        "
        style={{
          background: `
            linear-gradient(
              135deg,
              rgba(217,70,239,.70),
              transparent 42%,
              rgba(168,85,247,.45)
            )
          `,
          WebkitMask:
            "linear-gradient(#000,#000) content-box, linear-gradient(#000,#000)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "1px",
        }}
      />

      {children}
    </div>
  );
}

export default TiltCard;