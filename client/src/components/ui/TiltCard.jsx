import { useEffect, useRef, useState } from "react";

function TiltCard({
  children,
  className = "",
  maxTilt = 4,
}) {
  const ref = useRef(null);
  const rectRef = useRef(null);
  const frame = useRef(null);

  const [disableTilt, setDisableTilt] = useState(false);

  useEffect(() => {
    const resize = () => {
      setDisableTilt(window.innerWidth < 1024);
    };

    resize();

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);

      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, []);

  const onEnter = () => {
    rectRef.current = ref.current?.getBoundingClientRect();
  };

  const onMove = (e) => {
    const card = ref.current;
    const rect = rectRef.current;

    if (!card || !rect) return;

    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    cancelAnimationFrame(frame.current);

    frame.current = requestAnimationFrame(() => {
      const rotateY = (px - 0.5) * maxTilt * 2;
      const rotateX = (py - 0.5) * -maxTilt * 2;

      card.style.transform = `
        perspective(1800px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-4px)
        scale(1.008)
      `;

      card.style.setProperty("--mx", `${px * 100}%`);
      card.style.setProperty("--my", `${py * 100}%`);
    });
  };

  const onLeave = () => {
    const card = ref.current;

    if (!card) return;

    cancelAnimationFrame(frame.current);

    card.style.transform = `
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
      className={`group relative overflow-hidden rounded-[30px] ${className}`}
      style={{
        transformStyle: "preserve-3d",
        willChange: "transform",
        contain: "paint",
        transition:
          "transform .45s cubic-bezier(.22,.61,.36,1)",
      }}
    >
      {/* Cursor Light */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
        style={{
          background:
            "radial-gradient(420px circle at var(--mx,50%) var(--my,50%), rgba(255,255,255,.08), rgba(168,85,247,.04) 35%, transparent 72%)",
        }}
      />

      {/* Moving Reflection */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,.06), transparent 35%, rgba(255,255,255,.015) 70%, transparent)",
          transform:
            "translate3d(calc((var(--mx,50%) - 50%) * .08), calc((var(--my,50%) - 50%) * .08),0)",
        }}
      />

      {children}
    </div>
  );
}

export default TiltCard;