import Container from "../../layout/Container";
import HeroBanner from "./HeroBanner";
import HeroStats from "./HeroStats";
import HeroActions from "./HeroActions";
import HeroSocials from "./HeroSocials";
import HeroContent from "./HeroContent";

function Hero() {
    return (
        <section id="hero" className="py-24">
            <Container>
                <HeroBanner />
                <HeroContent />
                <HeroStats />
                <HeroActions />
                <HeroSocials />
            </Container>
        </section>
    );
}

export default Hero;