import Aurora from "../effects/Aurora";
import BlueprintGrid from "../effects/BlueprintGrid";
import VerticalRails from "../effects/VerticalRails";


function Layout({ children }) {
    return (
        <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">

            <BlueprintGrid />

            <Aurora />

            <VerticalRails />

            {children}

        </main>
    );
}

export default Layout;