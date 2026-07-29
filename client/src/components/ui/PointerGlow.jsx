import { useEffect, useRef } from "react";

function PointerGlow() {
  const ambientRef = useRef(null);
  const glowRef = useRef(null);
  const coreRef = useRef(null);

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

      if (coreRef.current) {
        coreRef.current.style.transform = `translate3d(${currentX - 40}px, ${
          currentY - 40
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
      {/* Ambient Light */}

      <div
        ref={ambientRef}
        className="
          absolute
          h-[720px]
          w-[720px]
          rounded-full
          blur-[180px]
        "
        style={{
          background: `
            radial-gradient(
              circle,
              rgba(124,92,255,.08) 0%,
              rgba(168,85,247,.05) 40%,
              transparent 75%
            )
          `,
        }}
      />

      {/* Main Glow */}

      <div
        ref={glowRef}
        className="
          absolute
          h-[320px]
          w-[320px]
          rounded-full
          blur-[90px]
        "
        style={{
          background: `
            radial-gradient(
              circle,
              rgba(255,255,255,.035) 0%,
              rgba(168,85,247,.06) 45%,
              transparent 75%
            )
          `,
        }}
      />

      {/* Core Highlight */}

      <div
        ref={coreRef}
        className="
          absolute
          h-[80px]
          w-[80px]
          rounded-full
          blur-[26px]
        "
        style={{
          background: `
            radial-gradient(
              circle,
              rgba(255,255,255,.08),
              transparent 75%
            )
          `,
        }}
      />
    </div>
  );
}

export default PointerGlow;