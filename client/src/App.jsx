import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import BackgroundEffects from "./components/effects/BackgroundEffects";
import PointerGlow from "./components/ui/PointerGlow";

function App() {
    return (
        <Layout>

            <BackgroundEffects />
            <PointerGlow />
            <Home />

        </Layout>
    );
}

export default App;