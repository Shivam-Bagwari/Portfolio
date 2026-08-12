import GlassBadge from "../../ui/GlassBadge";
import ProjectTechStack from "./ProjectTechStack";
import ProjectButtons from "./ProjectButtons";

function ProjectFeaturedContent({ project }) {
  return (
    <div
      className="
        flex
        min-h-[310px]
        h-full
        flex-col

        bg-black/[0.12]

        px-5
        pt-6
        pb-6

        md:min-h-0
        md:px-7
        md:pt-7
        md:pb-6
      "
    >
      {/* TOP META */}

      <div className="flex items-center justify-between gap-4">
        <span
          className="
            font-mono
            text-[8px]
            uppercase
            tracking-[0.25em]
            text-white/30

            md:text-[9px]
            md:tracking-[0.28em]
          "
        >
          FULL-STACK • {project.year}
        </span>

        <GlassBadge color={project.statusColor}>
          {project.status}
        </GlassBadge>
      </div>

      {/* TITLE */}

      <h2
        className="
          mt-5
          max-w-full

          font-tight
          text-[24px]
          font-extrabold
          leading-[1]
          tracking-[-0.055em]

          text-white

          md:max-w-[290px]
          md:text-[27px]
        "
      >
        {project.title}
      </h2>

      {/* DESCRIPTION */}

      <p
        className="
          mt-4
          max-w-full

          text-[12px]
          leading-[1.75]

          text-white/55

          md:mt-5
          md:max-w-[285px]
          md:text-[13px]
          md:leading-[1.8]
        "
      >
        {project.description}
      </p>

      {/* TECH */}

      <div className="mt-5">
        <ProjectTechStack tech={project.tech} />
      </div>

      {/* PUSH BUTTONS DOWN */}

      <div className="flex-1" />

      {/* ACTIONS */}

      <ProjectButtons
        live={project.live}
        github={project.github}
      />
    </div>
  );
}

export default ProjectFeaturedContent;