import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import BackgroundEffects from "./components/effects/BackgroundEffects";

function App() {
    return (
        <Layout>

            <BackgroundEffects />
            <Home />
        </Layout>
    );
}

export default App;