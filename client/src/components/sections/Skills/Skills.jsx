import Container from "../../layout/Container";
import skills from "../../../data/skills";
import SkillCategory from "./SkillCategory";
import SectionHeader from "../../ui/SectionHeader";
import TiltCard from "../../ui/TiltCard";
import PremiumCard from "../../ui/PremiumCard";

const exploring = [
  "TypeScript",
  "Next.js",
  "PostgreSQL",
];

function Skills() {
  return (
    <section
      id="skills"
      className="py-12"
    >
      <Container>

        <SectionHeader
          number="03"
          title="Skills & Technologies"
          meta="15 Technologies • Daily Driver"
        />

        <TiltCard className="mt-12">

          <PremiumCard>

            {/* Main Content */}

            <div className="px-10 pt-10">

              <div
                className="
                  grid
                  grid-cols-1
                  gap-x-16
                  gap-y-12
                  md:grid-cols-2
                "
              >

                {skills.map((group, index) => (

                  <SkillCategory
                    key={group.category}
                    index={index + 1}
                    category={group.category}
                    skills={group.skills}
                  />

                ))}

              </div>

            </div>

            {/* Divider */}

            <div className="mx-10 mt-10 h-px bg-white/[0.05]" />

            {/* Exploring */}

            <div className="px-10 py-8">

              <div className="flex flex-wrap items-center gap-4">

                <span
                  className="
                    font-mono
                    text-[11px]
                    uppercase
                    tracking-[0.35em]
                    text-white/35
                  "
                >
                  Currently Exploring
                </span>

                {exploring.map((item) => (

                  <div
                    key={item}
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.03]
                      px-3
                      py-1.5
                    "
                  >

                    <span className="h-2 w-2 rounded-full bg-emerald-400" />

                    <span
                      className="
                        text-xs
                        font-medium
                        text-white/70
                      "
                    >
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </PremiumCard>

        </TiltCard>

      </Container>
    </section>
  );
}

export default Skills;