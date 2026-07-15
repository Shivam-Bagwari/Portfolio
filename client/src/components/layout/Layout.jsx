import BackgroundEffects from "../effects/BackgroundEffects";
import AvailabilityBadge from "../shell/AvailabilityBadge";
import RightIndex from "../shell/RightIndex";
import ScrollProgress from "../shell/ScrollProgress";
import TopControls from "../shell/TopControls";


function Layout({ children }) {
    return (
        <main className="relative min-h-screen bg-background text-foreground">

            <BackgroundEffects />

            <ScrollProgress />

            <AvailabilityBadge />

            <TopControls />
            
            <RightIndex />

            {children}

        </main>
    );
}

export default Layout;