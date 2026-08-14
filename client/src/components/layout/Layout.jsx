import { useLocation } from "react-router-dom";

import BackgroundEffects from "../effects/BackgroundEffects";
import AvailabilityBadge from "../shell/AvailabilityBadge";
import RightIndex from "../shell/RightIndex";
import ScrollProgress from "../shell/ScrollProgress";

function Layout({ children }) {
  const location = useLocation();

  const isBlogsPage =
    location.pathname === "/blogs";

  return (
    <main className="relative min-h-screen bg-black overflow-x-hidden">

      <BackgroundEffects />

      <ScrollProgress />

      {!isBlogsPage && (
        <AvailabilityBadge />
      )}

      {children}

      {!isBlogsPage && (
        <RightIndex />
      )}

    </main>
  );
}

export default Layout;