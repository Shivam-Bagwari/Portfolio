import ProjectTechStack from "./ProjectTechStack";
import GlassBadge from "../../ui/GlassBadge";
function ProjectContent({ project }) {
  const { title, description, tech } = project;

  return (
    <div className="px-5 pt-5 pb-4">
      <div className="flex items-start justify-between gap-4 ">
      <h3
        className="
          text-[24px]
          font-black
          leading-none
          tracking-[-0.05em]
          text-white
        "
      >
        {title}
      </h3>

      <GlassBadge
        color={project.statusColor}
        className="shrink-0"
      >
        {project.status}
      </GlassBadge>
      </div>
      <p
        className="
          mt-3
          line-clamp-2
          text-[13px]
          leading-6
          text-white/58
        "
      >
        {description}
      </p>

      <div className="mt-4">
        <ProjectTechStack tech={tech} />
      </div>

    </div>
  );
}

export default ProjectContent;