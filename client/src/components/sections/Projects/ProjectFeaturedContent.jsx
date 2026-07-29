import GlassBadge from "../../ui/GlassBadge";
import ProjectTechStack from "./ProjectTechStack";
import ProjectButtons from "./ProjectButtons";

function ProjectFeaturedContent({ project }) {
  return (
    <div className="flex h-full flex-col px-8 pt-8 pb-7">

      {/* Top */}
      <div className="flex items-center justify-between">
        <span
          className="
            font-mono
            text-[9px]
            uppercase
            tracking-[0.32em]
            text-white/26
          "
        >
          FULL-STACK • {project.year}
        </span>

        <GlassBadge color={project.statusColor}>
          {project.status}
        </GlassBadge>
      </div>

      {/* Title */}
      <h2
        className="
          mt-4
          max-w-[280px]
          text-[25px]
          font-extrabold
          tracking-[-0.055em]
          leading-none
          text-white
        "
      >
        {project.title}
      </h2>

      {/* Description */}
      <p
        className="
          mt-5
          max-w-[255px]
          text-[14px]
          leading-[1.9]
          text-white/58
        "
      >
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="mt-6">
        <ProjectTechStack tech={project.tech} />
      </div>

      {/* Push Buttons Down */}
      <div className="flex-1" />

      {/* Buttons */}
      <ProjectButtons
        live={project.live}
        github={project.github}
      />
    </div>
  );
}

export default ProjectFeaturedContent;