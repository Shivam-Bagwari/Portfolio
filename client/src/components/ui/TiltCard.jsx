import { useRef, useEffect, useState } from "react";

function TiltCard({
  children,
  className = "",
  maxTilt = 5,
}) {
  const ref = useRef(null);
  const rectRef = useRef(null);
  const frame = useRef(null);

  const [disableTilt, setDisableTilt] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setDisableTilt(window.innerWidth < 1024);
    };

    checkScreen();

    window.addEventListener("resize", checkScreen);

    return () => {
      window.removeEventListener("resize", checkScreen);

      if (frame.current) {
        cancelAnimationFrame(frame.current);
      }
    };
  }, []);

  const onEnter = () => {
    rectRef.current = ref.current?.getBoundingClientRect();
  };

  const onMove = (e) => {
    const el = ref.current;
    const rect = rectRef.current;

    if (!el || !rect) return;

    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    cancelAnimationFrame(frame.current);

    frame.current = requestAnimationFrame(() => {
      const rotateY = (px - 0.5) * maxTilt * 2;
      const rotateX = (py - 0.5) * -maxTilt * 2;

      el.style.transform = `
        perspective(1800px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-6px)
        scale(1.015)
      `;

      el.style.setProperty("--mx", `${px * 100}%`);
      el.style.setProperty("--my", `${py * 100}%`);
    });
  };

  const onLeave = () => {
    const el = ref.current;

    if (!el) return;

    cancelAnimationFrame(frame.current);

    el.style.transform = `
      perspective(1800px)
      rotateX(0deg)
      rotateY(0deg)
      translateY(0px)
      scale(1)
    `;
  };

  return (
    <div
      ref={ref}
      onMouseEnter={disableTilt ? undefined : onEnter}
      onMouseMove={disableTilt ? undefined : onMove}
      onMouseLeave={disableTilt ? undefined : onLeave}
      className={`group relative overflow-hidden rounded-[28px] ${className}`}
      style={{
        transformStyle: "preserve-3d",
        willChange: "transform",
        transition:
          "transform .45s cubic-bezier(.22,.61,.36,1)",
        contain: "paint",
      }}
    >
      {/* Cursor Glow */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
        style={{
          background:
            "radial-gradient(260px circle at var(--mx,50%) var(--my,50%), rgba(255,255,255,.10), transparent 45%)",
        }}
      />

      {/* Glass Highlight */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,.08), transparent 30%, rgba(168,85,247,.10))",
        }}
      />

      {/* Border Glow */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-[28px]
          border
          border-white/10
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      />

      {children}
    </div>
  );
}

export default TiltCard;