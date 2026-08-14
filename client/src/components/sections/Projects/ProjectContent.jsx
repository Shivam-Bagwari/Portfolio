import ProjectTechStack from "./ProjectTechStack";
import GlassBadge from "../../ui/GlassBadge";

function ProjectContent({ project }) {
  const { title, description, tech } = project;

  return (
    <div
      className="
        relative
        px-5
        pt-4
        pb-4

        bg-black/[0.12]
      "
    >
      {/* =====================================================
          TITLE + STATUS
      ===================================================== */}

      <div className="flex items-center justify-between gap-4">
        <h3
          className="
            min-w-0
            truncate

            font-tight
            text-[15px]
            font-bold
            leading-none
            tracking-[-0.025em]

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

      {/* =====================================================
          DESCRIPTION
      ===================================================== */}

      <p
        className="
          mt-3

          max-w-[95%]

          text-[11px]
          leading-[1.65]

          text-white/45
        "
      >
        {description}
      </p>

      {/* =====================================================
          TECH STACK
      ===================================================== */}

      <div
        className="
          mt-3
          flex
          items-center
          justify-between
          gap-4
        "
      >
        <div className="min-w-0">
          <ProjectTechStack tech={tech} />
        </div>
      </div>
    </div>
  );
}

export default ProjectContent;