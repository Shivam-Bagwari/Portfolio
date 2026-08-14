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

const glow = "rgba(168, 85, 247, 0.14)";

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

        <TiltCard className="group mt-12">

          <div
            data-local-ambient
            className="
              relative
              rounded-[30px]
            "
          >

            {/* =====================================================
                SUBTLE BORDER ATMOSPHERE

                This sits behind PremiumCard.
                It does NOT create another visible border.
            ===================================================== */}

            <div
              className="
                pointer-events-none
                absolute
                -inset-[1px]

                rounded-[31px]

                opacity-0
                blur-[7px]

                transition-opacity
                duration-500
                ease-out

                group-hover:opacity-25
              "
              style={{
                background: glow,
              }}
            />

            {/* =====================================================
                GLASS LIGHT SWEEP
            ===================================================== */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                z-[5]

                overflow-hidden
                rounded-[30px]

                opacity-0

                transition-opacity
                duration-500
                ease-out

                group-hover:opacity-100
              "
            >
              <div
                className="
                  absolute
                  -left-[75%]
                  top-0

                  h-full
                  w-[45%]

                  rotate-[12deg]

                  bg-gradient-to-r
                  from-transparent
                  via-white/[0.035]
                  to-transparent

                  blur-[9px]

                  transition-transform
                  duration-[1200ms]
                  ease-[cubic-bezier(.22,.61,.36,1)]

                  group-hover:translate-x-[330%]
                "
              />
            </div>

            {/* =====================================================
                PREMIUM CARD

                Keep the original PremiumCard styling.
                The existing inner highlighting remains intact.
            ===================================================== */}

            <PremiumCard
              className="
                relative
                z-10

                transition-[border-color,background,box-shadow,transform]
                duration-500
                ease-[cubic-bezier(.22,1,.36,1)]

                group-hover:border-white/[0.14]
                group-hover:bg-white/[0.042]
                group-hover:-translate-y-[2px]
                group-hover:shadow-[0_18px_55px_rgba(0,0,0,.40)]
              "
            >

              {/* =================================================
                  MAIN CONTENT
              ================================================= */}

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

              {/* =================================================
                  DIVIDER
              ================================================= */}

              <div
                className="
                  mx-10
                  mt-10
                  h-px
                  bg-white/[0.05]
                "
              />

              {/* =================================================
                  EXPLORING
              ================================================= */}

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

                        transition-all
                        duration-300

                        hover:border-white/[0.16]
                        hover:bg-white/[0.045]
                      "
                    >

                      <span
                        className="
                          h-2
                          w-2
                          rounded-full
                          bg-emerald-400
                        "
                      />

                      <span
                        className="
                          text-xs
                          font-medium
                          text-white/70

                          transition-colors
                          duration-300

                          hover:text-white
                        "
                      >
                        {item}
                      </span>

                    </div>
                  ))}

                </div>

              </div>

            </PremiumCard>

          </div>

        </TiltCard>

      </Container>
    </section>
  );
}

export default Skills;