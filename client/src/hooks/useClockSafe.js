import { useEffect, useState } from "react";

function useClockSafe() {
  const [time, setTime] = useState("");

  useEffect(() => {
    function updateTime() {
      const currentTime = new Date().toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });

      setTime(currentTime);
    }

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return time;
}

export default useClockSafe;