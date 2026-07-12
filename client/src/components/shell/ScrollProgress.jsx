import { useEffect, useState } from "react";

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;

      const scrollHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const percentage =
        (scrollTop / scrollHeight) * 100;

      setProgress(percentage);
    }

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () =>
      window.removeEventListener( 
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[100] h-[2px] w-full">
      <div
        className="h-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 transition-all"
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  );
}

export default ScrollProgress;