import BackgroundEffects from "../effects/BackgroundEffects";
import AvailabilityBadge from "../shell/AvailabilityBadge";
import RightIndex from "../shell/RightIndex";
import ScrollProgress from "../shell/ScrollProgress";
import TopControls from "../shell/TopControls";

function Layout({ children }) {
  return (
    <main className="relative min-h-screen bg-black overflow-x-hidden">

      <BackgroundEffects />

      <ScrollProgress />

      <AvailabilityBadge />

      <TopControls />

        {children}

      <RightIndex />

    </main>
  );
}

export default Layout;