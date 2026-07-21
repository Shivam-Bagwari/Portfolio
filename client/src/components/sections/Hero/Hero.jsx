import Container from "../../layout/Container";
import HeroBanner from "./HeroBanner";
import HeroContent from "./HeroContent";
import HeroStats from "./HeroStats";

function Hero() {
  return (
    <section
      id="hero"
      className="pt-14 pb-10"
    >
      <Container>

        <div className="mt-14">

          
          <HeroBanner />

          <div className="mt-14">
            <HeroContent />
        </div>

          <div className="mt-14">
            <HeroStats />
        </div>

        </div>

      </Container>
    </section>
  );
}

export default Hero;