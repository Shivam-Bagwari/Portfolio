import Container from "../../layout/Container";
import HeroBanner from "./HeroBanner";
import HeroContent from "./HeroContent";
import HeroStats from "./HeroStats";
import HeroActions from "./HeroActions";
import HeroSocials from "./HeroSocials";

function Hero() {
  return (
    <section
      id="hero"
      className="pt-12 pb-24"
    >
      <Container>

        <div className="space-y-14">

          <HeroBanner />

          <HeroContent />

          <HeroStats />

          <HeroActions />

          <HeroSocials />

        </div>

      </Container>
    </section>
  );
}

export default Hero;