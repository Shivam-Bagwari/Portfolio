import { useEffect, useRef } from "react";

function PointerGlow() {
  const ambientRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    let animationFrame;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;

    let currentX = targetX;
    let currentY = targetY;

    const lerp = (start, end, factor) => {
      return start + (end - start) * factor;
    };

    const handleMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const animate = () => {
      currentX = lerp(currentX, targetX, 0.12);
      currentY = lerp(currentY, targetY, 0.12);

      if (ambientRef.current) {
        ambientRef.current.style.transform = `translate3d(${currentX - 360}px, ${
          currentY - 360
        }px, 0)`;
      }

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${currentX - 160}px, ${
          currentY - 160
        }px, 0)`;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    window.addEventListener("pointermove", handleMove);

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("pointermove", handleMove);
    };
  }, []);

return (
  <div
    className="
      pointer-events-none
      fixed
      inset-0
      z-0
      overflow-hidden
    "
  >
    {/* Ambient Color */}

    <div
      ref={ambientRef}
      className="
        absolute
        h-[780px]
        w-[780px]
        rounded-full
        blur-[220px]
      "
      style={{
        background: `
          radial-gradient(
            circle,
            rgba(124,92,255,.055) 0%,
            rgba(168,85,247,.035) 45%,
            transparent 75%
          )
        `,
      }}
    />

    {/* Inner Glow */}

    <div
      ref={glowRef}
      className="
        absolute
        h-[300px]
        w-[300px]
        rounded-full
        blur-[110px]
      "
      style={{
        background: `
          radial-gradient(
            circle,
            rgba(168,85,247,.055) 0%,
            rgba(124,92,255,.025) 50%,
            transparent 75%
          )
        `,
      }}
    />

  </div>
);
}

export default PointerGlow;