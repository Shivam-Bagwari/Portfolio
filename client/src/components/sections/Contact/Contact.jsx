import Container from "../../layout/Container";
import SectionHeader from "../../ui/SectionHeader";
import ContactCard from "./ContactCard";

function Contact() {
  return (
    <section
      id="contact"
      className="pt-10 pb-20"
    >
      <Container>
        <SectionHeader
          number="04"
          title="Get In Touch"
        />

        <div className="mt-12">
          <ContactCard />
        </div>
      </Container>
    </section>
  );
}

export default Contact;