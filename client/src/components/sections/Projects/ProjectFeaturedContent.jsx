import GlassBadge from "../../ui/GlassBadge";
import ProjectTechStack from "./ProjectTechStack";
import ProjectButtons from "./ProjectButtons";

function ProjectFeaturedContent({ project }) {
  return (
    <div className="flex h-full flex-col px-8 pt-5 pb-6">

      {/* Top */}
      <div className="flex items-center justify-between">
        <span className="font-mono text-[9px] uppercase tracking-[0.28em] text-white/30">
          FULL-STACK • {project.year}
        </span>

        <GlassBadge color={project.statusColor}>
          {project.status}
        </GlassBadge>
      </div>

      {/* Title */}
      <h2
        className="
          mt-7
          max-w-[260px]
          text-[27px]
          font-extrabold
          leading-[1]
          tracking-[-0.045em]
          text-white
        "
      >
        {project.title}
      </h2>

      {/* Description */}
      <p
        className="
          mt-4
          max-w-[240px]
          text-[13px]
          leading-7
          text-white/56
        "
      >
        {project.description}
      </p>

      {/* Tech */}
      <div className="mt-5">
        <ProjectTechStack tech={project.tech} />
      </div>

      <div className="mt-auto pt-7">
        <ProjectButtons
          live={project.live}
          github={project.github}
        />
      </div>

    </div>
  );
}

export default ProjectFeaturedContent;