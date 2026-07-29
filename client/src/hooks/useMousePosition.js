import { useEffect, useRef } from "react";

export default function useMousePosition() {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let animationFrame = null;
    let currentX = 0;
    let currentY = 0;

    let targetX = 0;
    let targetY = 0;

    const strength = 3; // max movement in px

    function animate() {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;

      element.style.setProperty("--mx", `${currentX}px`);
      element.style.setProperty("--my", `${currentY}px`);

      animationFrame = requestAnimationFrame(animate);
    }

    function handleMove(e) {
      const rect = element.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      element.style.setProperty("--x", `${x}px`);
      element.style.setProperty("--y", `${y}px`);

      const dx = (x - rect.width / 2) / (rect.width / 2);
      const dy = (y - rect.height / 2) / (rect.height / 2);

      targetX = dx * strength;
      targetY = dy * strength;
    }

    function handleLeave() {
      targetX = 0;
      targetY = 0;
    }

    animationFrame = requestAnimationFrame(animate);

    element.addEventListener("pointermove", handleMove);
    element.addEventListener("pointerleave", handleLeave);

    return () => {
      cancelAnimationFrame(animationFrame);

      element.removeEventListener("pointermove", handleMove);
      element.removeEventListener("pointerleave", handleLeave);
    };
  }, []);

  return ref;
}