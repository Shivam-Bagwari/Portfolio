import { useEffect, useState } from "react";

function useActiveSection(ids) {
  const [activeSection, setActiveSection] = useState(ids[0]);

  useEffect(() => {
    let ticking = false;

    const updateActiveSection = () => {
      const triggerLine = window.innerHeight * 0.3;

      let current = ids[0];

      ids.forEach((id) => {
        const el = document.getElementById(id);

        if (!el) return;

        const rect = el.getBoundingClientRect();

        if (rect.top <= triggerLine) {
          current = id;
        }
      });

      setActiveSection((prev) => (prev === current ? prev : current));

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateActiveSection);
        ticking = true;
      }
    };

    updateActiveSection();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [ids]);

  return activeSection;
}

export default useActiveSection;