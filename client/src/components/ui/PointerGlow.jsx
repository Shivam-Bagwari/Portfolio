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
      "
    >
      <div
        className="
          absolute
          h-72
          w-72
          rounded-full
          blur-3xl
          transition-transform
          duration-150
          ease-out
        "
        style={{
          transform: `translate(${x - 128}px, ${y - 128}px)`,
          background:
            "radial-gradient(circle, rgba(139,92,246,0.30) 0%, rgba(139,92,246,0.20) 35%, transparent 75%)",
        }}
      />
    </div>
  );
}

export default PointerGlow;