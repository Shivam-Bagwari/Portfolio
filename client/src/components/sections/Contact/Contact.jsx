import Container from "../../layout/Container";
import SectionHeader from "../../ui/SectionHeader";
import ContactCard from "./ContactCard";

function Contact() {
  return (
    <section
      id="contact"
      className="pt-16 pb-24"
    >
      <Container>
        <SectionHeader
          number="04"
          title="Get In Touch"
        />

        <div className="mt-14">
          <ContactCard />
        </div>
      </Container>
    </section>
  );
}

export default Contact;