import Background from "./background/Background";
import PointerAmbient from "./background/PointerAmbient";
import CursorCat from "./CursorCat";

import useIsMobile from "../../hooks/useIsMobile";

function BackgroundEffects() {
  const isMobile = useIsMobile();

  return (
    <>
      {/* Background Layer */}
      <div
        className="
          fixed
          inset-0
          overflow-hidden
          pointer-events-none
          z-0
        "
        aria-hidden="true"
      >
        <Background />

        {!isMobile && <PointerAmbient />}
      </div>

      {/* Cursor Cat — always above the UI */}
      {!isMobile && <CursorCat />}
    </>
  );
}

export default BackgroundEffects;