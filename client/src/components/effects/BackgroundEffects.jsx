import Background from "./background/Background";
import PointerAmbient from "./background/PointerAmbient";
import CursorCat from "./CursorCat";

import useIsMobile from "../../hooks/useIsMobile";

function BackgroundEffects() {
  const isMobile = useIsMobile();

  return (
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

      {!isMobile && (
        <>
          <PointerAmbient />
          <CursorCat />
        </>
      )}
    </div>
  );
}

export default BackgroundEffects;