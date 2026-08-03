import { useEffect, useRef } from "react";

function PointerAmbient() {
  const ambientRef = useRef(null);
  const tintRef = useRef(null);

  useEffect(() => {
    let frame;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;

    let x = targetX;
    let y = targetY;

    const lerp = (a, b, t) => a + (b - a) * t;

    const move = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const animate = () => {
      // Much slower than before
      x = lerp(x, targetX, 0.025);
      y = lerp(y, targetY, 0.025);

      if (ambientRef.current) {
        ambientRef.current.style.transform = `translate3d(${x - 1200}px, ${y - 900}px,0)`;
      }

      if (tintRef.current) {
        tintRef.current.style.transform = `translate3d(${x - 900}px, ${y - 700}px,0)`;
      }

      frame = requestAnimationFrame(animate);
    };

    window.addEventListener("pointermove", move);

    animate();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", move);
    };
  }, []);

  return (
    <>
      {/* Main Ambient */}
      <div
        ref={ambientRef}
        className="
          absolute
          h-[1900px]
          w-[2100px]
          rounded-full
          blur-[340px]
          opacity-100
          will-change-transform
        "
        style={{
          background: `
            radial-gradient(
              circle,
              rgba(95,70,255,.015) 0%,
              rgba(140,80,255,.008) 35%,
              rgba(168,85,247,.004) 55%,
              transparent 78%
            )
          `,
        }}
      />

      {/* Secondary Tint */}
      <div
        ref={tintRef}
        className="
          absolute
          h-[900px]
          w-[1100px]
          rounded-full
          blur-[240px]
          will-change-transform
        "
        style={{
          background: `
            radial-gradient(
              circle,
              rgba(120,95,255,.020) 0%,
              rgba(168,85,247,.010) 55%,
              transparent 80%
            )
          `,
        }}
      />
    </>
  );
}

export default PointerAmbient;