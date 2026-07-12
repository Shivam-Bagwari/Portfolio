import Container from "../../layout/Container";
import HeroBanner from "./HeroBanner";
import HeroStats from "./HeroStats";
import HeroActions from "./HeroActions";
import HeroSocials from "./HeroSocials";

function Hero() {
    return (
        <section id="hero" className="py-24">
            <Container>
                <HeroBanner />
                <HeroStats />
                <HeroActions />
                <HeroSocials />
            </Container>
        </section>
    );
}

export default Hero;