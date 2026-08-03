import Background from "./background/Background";
import PointerAmbient from "./background/PointerAmbient";

function BackgroundEffects() {
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
      <PointerAmbient />
      
    </div>
  );
}

export default BackgroundEffects;