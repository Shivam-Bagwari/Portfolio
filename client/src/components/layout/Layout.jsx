import Background from "../effects/Background";
import AvailabilityBadge from "../shell/AvailabilityBadge";
import RightIndex from "../shell/RightIndex";
import ScrollProgress from "../shell/ScrollProgress";
import TopControls from "../shell/TopControls";


function Layout({ children }) {
    return (
        <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">

            <Background />

            <ScrollProgress />

            <AvailabilityBadge />

            <TopControls />
            
            <RightIndex />

            {children}

        </main>
    );
}

export default Layout;