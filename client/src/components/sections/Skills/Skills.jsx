import Container from "../../layout/Container";
import skills from "../../../data/skills";
import SkillCategory from "./SkillCategory";
import SectionHeader from "../../ui/SectionHeader";

const marquee = [
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "Tailwind",
  "JavaScript",
  "Git",
  "GitHub",
  "VS Code",
  "Figma",
];

function Skills() {
  return (
    <section
      id="skills"
      className="pt-10 pb-10"
    >
      <Container>
        <SectionHeader
          number="03"
          title="Skills & Technologies"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {skills.map((group) => (
            <SkillCategory
              key={group.category}
              category={group.category}
              skills={group.skills}
            />
          ))}
        </div>

        {/* Bottom Tech Strip */}

        <div className="mt-16 overflow-hidden border-t border-white/10 pt-6">
          <div className="flex flex-wrap justify-center gap-8">
            {marquee.map((item) => (
              <span
                key={item}
                className="
                  font-mono
                  text-[11px]
                  uppercase
                  tracking-[0.35em]
                  text-white/28
                "
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Skills;