import Container from "../../layout/Container";
import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <section id="contact" className="py-32">
      <Container>

        <div className="mb-16">

          <p className="font-mono text-sm uppercase tracking-[0.35em] text-accent">
            Contact
          </p>

          <h2 className="mt-4 text-5xl font-black text-white">
            Let's Build Something Together
          </h2>

        </div>

        <div className="grid gap-8 lg:grid-cols-2">

          <ContactCard />

          <ContactForm />

        </div>

      </Container>
    </section>
  );
}

export default Contact;