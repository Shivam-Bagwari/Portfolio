import Button from "../../ui/IconButton";

function HeroActions() {
  return (
    <div className="flex flex-wrap gap-4">

      <Button href="#contact">
        Contact Me
      </Button>

      <Button
        href="/resume.pdf"
        variant="secondary"
      >
        Download Resume
      </Button>

    </div>
  );
}

export default HeroActions;