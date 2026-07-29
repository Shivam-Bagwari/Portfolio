import { useEffect, useState } from "react";

function PointerGlow() {
  const [{ x, y }, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("pointermove", move);

    return () => window.removeEventListener("pointermove", move);
  }, []);

return (
  <div
    className="
      pointer-events-none
      fixed
      inset-0
      z-[9999]
      overflow-hidden
    "
  >
    {/* Large Ambient Glow */}

    <div
      className="
        absolute
        h-[520px]
        w-[520px]
        rounded-full
        blur-[140px]
        transition-transform
        duration-300
        ease-out
      "
      style={{
        transform: `translate(${x - 260}px, ${y - 260}px)`,
        background:
          "radial-gradient(circle, rgba(139,92,246,.14) 0%, rgba(168,85,247,.10) 45%, transparent 75%)",
      }}
    />

    {/* Main Cursor Glow */}

    <div
      className="
        absolute
        h-[220px]
        w-[220px]
        rounded-full
        blur-[70px]
        transition-transform
        duration-75
        ease-out
      "
      style={{
        transform: `translate(${x - 110}px, ${y - 110}px)`,
        background:
          "radial-gradient(circle, rgba(255,255,255,.05) 0%, rgba(168,85,247,.12) 40%, transparent 75%)",
      }}
    />

    {/* Bright Core */}

    <div
      className="
        absolute
        h-10
        w-10
        rounded-full
        blur-xl
        transition-transform
        duration-75
        ease-out
      "
      style={{
        transform: `translate(${x - 20}px, ${y - 20}px)`,
        background:
          "radial-gradient(circle, rgba(255,255,255,.12), transparent 70%)",
      }}
    />
  </div>
);
}

export default PointerGlow;