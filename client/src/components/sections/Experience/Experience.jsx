import Container from "../../layout/Container";
import Timeline from "./Timeline";

function Experience() {
  return (
    <section
      id="experience"
      className="py-32"
    >
      <Container>

        <div className="mb-16">

          <p className="font-mono text-sm uppercase tracking-[0.35em] text-accent">
            Experience
          </p>

          <h2 className="mt-4 text-5xl font-black text-white">
            My Journey
          </h2>

        </div>

        <Timeline />

      </Container>
    </section>
  );
}

export default Experience;