import { useEffect, useState } from "react";

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;

      const height =
        document.documentElement.scrollHeight - window.innerHeight;

      const value = (scrollTop / height) * 100;

      setProgress(value);
    }

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 z-[60] h-[2px] w-full">
      <div
        className="h-full bg-gradient-to-r from-violet-500 to-pink-500 transition-all"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export default ScrollProgress;