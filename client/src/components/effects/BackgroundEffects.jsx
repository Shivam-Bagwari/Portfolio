import Background from "./background/Background";
import Atmosphere from "./background/Atmosphere";
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

      <Atmosphere />

      <PointerAmbient />
    </div>
  );
}

export default BackgroundEffects;