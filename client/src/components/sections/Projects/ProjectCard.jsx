import PremiumCard from "../../ui/PremiumCard";
import ProjectPreview from "./ProjectPreview";
import ProjectContent from "./ProjectContent";
import FeaturedCard from "./FeaturedCard";
import TiltCard from "../../ui/TiltCard";

const hoverGlow = {
  purple: "rgba(168, 85, 247, 0.22)",
  red: "rgba(236, 72, 153, 0.20)",
  cyan: "rgba(34, 211, 238, 0.18)",
  white: "rgba(255, 255, 255, 0.12)",
};

function ProjectCard({ project }) {
  const glow =
    hoverGlow[project.accent] || hoverGlow.purple;

  return (
    <TiltCard className="group h-full">
      <div className="relative h-full rounded-[30px]">

        {/* =====================================================
            VERY SUBTLE OUTER ATMOSPHERE
        ===================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            -inset-[1px]

            rounded-[31px]

            opacity-0
            blur-[8px]

            transition-opacity
            duration-500
            ease-out

            group-hover:opacity-30
          "
          style={{
            background: glow,
          }}
        />

        {/* =====================================================
            PREMIUM EDGE LIGHT
        ===================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0

            rounded-[30px]

            border
            border-transparent

            opacity-0

            transition-opacity
            duration-500
            ease-out

            group-hover:opacity-100
          "
          style={{
            borderColor: glow,
          }}
        />

        {/* =====================================================
            ACTUAL CARD
        ===================================================== */}

        <PremiumCard
          className="
            relative
            z-10
            h-full
            p-0

            transition-[border-color,background,box-shadow]
            duration-500
            ease-out

            group-hover:border-white/[0.15]
            group-hover:bg-white/[0.045]
            group-hover:shadow-[0_18px_55px_rgba(0,0,0,.42)]
          "
        >
          {project.featured ? (
            <FeaturedCard project={project} />
          ) : (
            <div className="flex h-full flex-col">
              <ProjectPreview project={project} />
              <ProjectContent project={project} />
            </div>
          )}
        </PremiumCard>

      </div>
    </TiltCard>
  );
}

export default ProjectCard;