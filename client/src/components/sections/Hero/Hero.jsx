import Container from "../../layout/Container";
import HeroBanner from "./HeroBanner";
import HeroProfile from "./HeroProfile";
import HeroBio from "./HeroBio";
import HeroStats from "./HeroStats";
import HeroActions from "./HeroActions";
import HeroSocials from "./HeroSocials";

function Hero() {
  return (
    <section id="hero" className="py-24">
      <Container>
        <HeroBanner />
        <HeroProfile />
        <HeroBio />
        <HeroStats />
        <HeroActions />
        <HeroSocials />
      </Container>
    </section>
  );
}

export default Hero;