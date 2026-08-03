import { useEffect, useState } from "react";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener("resize", update);

    return () => window.removeEventListener("resize", update);
  }, []);

  return isMobile;
}

export default useIsMobile;