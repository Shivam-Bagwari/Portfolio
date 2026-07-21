import Container from "../../layout/Container"
import skills from "../../../data/skills";
import SkillCategory from "./SkillCategory";
import SectionHeader from "../../ui/SectionHeader";

function Skills() {
  return (
    <section id="skills" className="pt-16 pb-20">
      <Container>

        {/* Section Heading */}
        <SectionHeader
          number="03"
          title="Skills"
          description="Technologies, frameworks, and tools I use to design, build, and deploy modern applications."
        />

        <p
          className="
              font-mono
              text-sm
              uppercase
              tracking-[0.35em]
              text-accent
            "
        >
          Skills
        </p>

        <h2 className="mt-4 text-5xl font-black text-white">
          Technologies I Work With
        </h2>



        {/* Skills Grid */}

        <div className="grid gap-8 md:grid-cols-2">
          {skills.map((group) => (
            <SkillCategory
              key={group.category}
              category={group.category}
              skills={group.skills}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}

export default Skills;