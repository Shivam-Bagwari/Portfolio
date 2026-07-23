import { useRef } from "react";
import { useEffect, useState } from "react";

   function TiltCard({ children, className = "" }) {
  const ref = useRef(null);
  const rectRef = useRef(null);
  const frame = useRef();

  const [disableTilt, setDisableTilt] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setDisableTilt(window.innerWidth < 1024);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const onMove = (e) => {
    const el = ref.current;
    const r = rectRef.current;

    if (!el || !r) return;

    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;

    cancelAnimationFrame(frame.current);

    frame.current = requestAnimationFrame(() => {
      const rx = (py - 0.5) * -4;
      const ry = (px - 0.5) * 4;

      el.style.transform =
        `perspective(1800px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-3px) scale(1.008)`;
      el.style.setProperty("--mx", `${px * 100}%`);
      el.style.setProperty("--my", `${py * 100}%`);
    });
  };
  const onEnter = () => {
    rectRef.current = ref.current?.getBoundingClientRect();
  };
  const onLeave = () => {
    const el = ref.current;
    if (!el) return;

    cancelAnimationFrame(frame.current);

    el.style.transform = "perspective(900px) rotateX(0) rotateY(0) translateY(0)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={disableTilt ? undefined : onMove}
      onMouseLeave={disableTilt ? undefined : onLeave}
      onMouseEnter={disableTilt ? undefined : onEnter}

      className={`group relative overflow-clip rounded-[30px] transition-transform duration-500 ease-out ${className}`}
      style={{
        transformStyle: "preserve-3d",
        willChange: "transform",
        contain: "paint"
      }}
    >
      <div className="pointer-events-none absolute inset-0 rounded-[32px] border border-cyan-400/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(340px circle at var(--mx,50%) var(--my,50%), rgba(255,255,255,.08), transparent 45%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 rounded-[32px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,.10), transparent 35%, rgba(168,85,247,.12))",
          WebkitMask:
            "linear-gradient(#000,#000) content-box, linear-gradient(#000,#000)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "1px",
        }}
      />
      {children}
    </div>
  );
}
export default TiltCard;