import GlassBadge from "../../ui/GlassBadge";
import ProjectTechStack from "./ProjectTechStack";
import ProjectButtons from "./ProjectButtons";

function ProjectFeaturedContent({ project }) {
  const {
    title,
    description,
    tech,
    status,
    statusColor,
    year,
    live,
    github,
  } = project;

  return (
    <div className="flex flex-col justify-between px-12 py-10">
      <div>
        {/* Top Meta */}
        <div className="flex items-center justify-between">
          <span
            className="
              font-mono
              text-[11px]
              uppercase
              tracking-[0.2em]
              text-white/35
            "
          >
            FULL STACK • {year}
          </span>

          <GlassBadge color={statusColor}>
            {status}
          </GlassBadge>
        </div>

        {/* Title */}
        <h2
          className="
            mt-6
            text-[56px]
            font-black
            leading-none
            tracking-[-0.05em]
            text-white
          "
        >
          {title}
        </h2>

        {/* Description */}
        <p
          className="
            mt-6
            max-w-xl
            text-[15px]
            leading-8
            text-white/60
          "
        >
          {description}
        </p>

        {/* Tech */}
        <ProjectTechStack tech={tech} />
      </div>

      {/* Buttons */}
      <ProjectButtons
        live={live}
        github={github}
      />
    </div>
  );
}

export default ProjectFeaturedContent;