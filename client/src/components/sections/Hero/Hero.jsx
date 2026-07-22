import Container from "../../layout/Container";
import HeroBanner from "./HeroBanner";
import HeroContent from "./HeroContent";

function Hero() {
  return (
    <section
      id="hero"
      className="pt-16 pb-16"
    >
      <Container>
        <div className="mt-16">

          <HeroBanner />

          <div className="mt-16">
            <HeroContent />
          </div>

        </div>
      </Container>
    </section>
  );
}

export default Hero;