import { useRef, useState } from "react";

function InteractiveSurface({
  children,
  className = "",
  intensity = 1,
}) {
  const ref = useRef(null);

  const [position, setPosition] = useState({
    x: 50,
    y: 50,
    active: false,
  });

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setPosition({
      x,
      y,
      active: true,
    });
  };

  const handleLeave = () => {
    setPosition((prev) => ({
      ...prev,
      active: false,
    }));
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`relative overflow-hidden ${className}`}
    >
      <div
        className="
          absolute
          inset-0
          transition-opacity
          duration-300
          pointer-events-none
        "
        style={{
          opacity: position.active ? 1 : 0,
          background: `radial-gradient(
            circle at ${position.x}% ${position.y}%,
            rgba(255,255,255,${0.08 * intensity}),
            rgba(168,85,247,${0.12 * intensity}) 25%,
            transparent 70%
          )`,
        }}
      />

      {children}
    </div>
  );
}

export default InteractiveSurface;