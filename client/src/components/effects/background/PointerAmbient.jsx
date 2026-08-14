import { useEffect, useRef } from "react";

function PointerAmbient() {
  const ambientRef = useRef(null);
  const tintRef = useRef(null);

  const localAmbientActive = useRef(false);

  useEffect(() => {
    let frame;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;

    let x = targetX;
    let y = targetY;

    const handlePointerMove = (event) => {
      targetX = event.clientX;
      targetY = event.clientY;

      const target = event.target;

      const insideProject =
        target instanceof Element &&
        target.closest("[data-local-ambient]");

      localAmbientActive.current = Boolean(insideProject);
    };

    const animate = () => {
      x += (targetX - x) * 0.07;
      y += (targetY - y) * 0.07;

      const targetOpacity = localAmbientActive.current
        ? 0
        : 1;

      if (ambientRef.current) {
        ambientRef.current.style.transform = `
          translate3d(
            ${x - 350}px,
            ${y - 350}px,
            0
          )
        `;

        ambientRef.current.style.opacity =
          targetOpacity * 0.9;
      }

      if (tintRef.current) {
        tintRef.current.style.transform = `
          translate3d(
            ${x - 180}px,
            ${y - 180}px,
            0
          )
        `;

        tintRef.current.style.opacity =
          targetOpacity;
      }

      frame = requestAnimationFrame(animate);
    };

    window.addEventListener(
      "pointermove",
      handlePointerMove,
      { passive: true }
    );

    frame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frame);

      window.removeEventListener(
        "pointermove",
        handlePointerMove
      );
    };
  }, []);

  return (
    <>
      {/* Main Ambient */}

      <div
        ref={ambientRef}
        className="
          pointer-events-none
          absolute

          h-[700px]
          w-[700px]

          rounded-full
          blur-[180px]

          will-change-transform
        "
        style={{
          opacity: 0.9,
          background: `
            radial-gradient(
              circle,
              rgba(95,70,255,.035) 0%,
              rgba(140,80,255,.018) 38%,
              transparent 72%
            )
          `,
        }}
      />

      {/* Secondary Tint */}

      <div
        ref={tintRef}
        className="
          pointer-events-none
          absolute

          h-[360px]
          w-[360px]

          rounded-full
          blur-[120px]

          will-change-transform
        "
        style={{
          opacity: 1,
          background: `
            radial-gradient(
              circle,
              rgba(120,95,255,.045) 0%,
              rgba(168,85,247,.018) 45%,
              transparent 75%
            )
          `,
        }}
      />
    </>
  );
}

export default PointerAmbient;