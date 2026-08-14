import GlassBadge from "../../ui/GlassBadge";
import ProjectTechStack from "./ProjectTechStack";
import ProjectButtons from "./ProjectButtons";

function ProjectFeaturedContent({ project }) {
  return (
    <div
      className="
        flex
        min-w-0
        flex-col

        bg-black/[0.08]

        px-5
        py-5

        md:px-[18px]
        md:py-[17px]
      "
    >
      {/* =====================================================
          TOP META
      ===================================================== */}

      <div className="flex items-center justify-between">
        <span
          className="
            font-mono
            text-[11px]
            uppercase
            tracking-[0.24em]
            text-white/35
          "
        >
          FULL-STACK · {project.year}
        </span>

        <GlassBadge color={project.statusColor}>
          {project.status}
        </GlassBadge>
      </div>

      {/* =====================================================
          TITLE
      ===================================================== */}

      <h2
        className="
          mt-4

          font-tight
          text-[28px]
          font-extrabold
          leading-none
          tracking-[-0.055em]

          text-white
        "
      >
        {project.title}
      </h2>

      {/* =====================================================
          DESCRIPTION
      ===================================================== */}

      <p
        className="
          mt-3

          max-w-[250px]

          font-mono
          text-[14px]
          leading-[1.55]

          text-white/55
        "
      >
        {project.description}
      </p>

      {/* =====================================================
          TECH STACK
      ===================================================== */}

      <div
        className="
          mt-5
          flex
          flex-wrap
        "
      >
        <ProjectTechStack tech={project.tech} />
      </div>

      {/* =====================================================
          BUTTONS
      ===================================================== */}

      <div className="mt-auto pt-3">
        <ProjectButtons
          live={project.live}
          github={project.github}
        />
      </div>
    </div>
  );
}

export default ProjectFeaturedContent;