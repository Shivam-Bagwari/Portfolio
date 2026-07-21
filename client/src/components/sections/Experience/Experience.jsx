import Container from "../../layout/Container";
import experience from "../../../data/experience";
import ExperienceAccordion from "./ExperienceAccordian";
import SectionHeader from "../../ui/SectionHeader";

function Experience() {
  return (
    <section id="experience" className="py-16">
      <Container>

        {/* Header */}

        <SectionHeader
          number="01"
          title="Experiences"
          description="Building products, learning continuously, and growing through real-world projects."
        />

        <ExperienceAccordion items={experience} />

      </Container>
    </section>
  );
}

export default Experience;