import { useEffect, useRef } from "react";

function PointerAmbient() {

  const ambientRef = useRef(null);
  const tintRef = useRef(null);

  useEffect(() => {

    let frame;

    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 2;

    let x = tx;
    let y = ty;

    const lerp = (a, b, t) => a + (b - a) * t;

    const move = (e) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    const animate = () => {

      x = lerp(x, tx, 0.055);
      y = lerp(y, ty, 0.055);

      if (ambientRef.current) {
        ambientRef.current.style.transform = `translate3d(${x - 650}px, ${y - 500}px,0)`;
      }

      if (tintRef.current) {
        tintRef.current.style.transform = `translate3d(${x - 350}px, ${y - 260}px,0)`;
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

      {/* Large Ambient */}

      <div
        ref={ambientRef}
        className="
          absolute
          h-[1100px]
          w-[1300px]
          rounded-full
          blur-[260px]
        "
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,.035) 0%, rgba(168,85,247,.018) 50%, transparent 75%)",
        }}
      />

      {/* Soft Tint */}

      <div
        ref={tintRef}
        className="
          absolute
          h-[650px]
          w-[850px]
          rounded-full
          blur-[180px]
        "
        style={{
          background:
            "radial-gradient(circle, rgba(168,85,247,.025) 0%, transparent 72%)",
        }}
      />

    </>

  );

}

export default PointerAmbient;