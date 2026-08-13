import SectionHeader from "../../ui/SectionHeader";
import projects from "../../../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  const featuredProject = projects.find((project) => project.featured);
  const regularProjects = projects.filter((project) => !project.featured);

  return (
    <section
      id="projects"
      className="
        relative
        py-16
        md:py-20
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[870px]
          px-5
          sm:px-8
        "
      >
        {/* HEADER */}

        <div className="relative">
          <SectionHeader
            number="02"
            title="Projects"
          />

          <span
            className="
              absolute
              right-0
              top-2

              hidden
              sm:block

              font-mono
              text-[8px]
              uppercase
              tracking-[0.24em]
              text-white/28
            "
          >
            {projects.length} Selected Works
          </span>
        </div>

        {/* FEATURED */}

        {featuredProject && (
          <div className="mt-5 md:mt-6">
            <ProjectCard project={featuredProject} />
          </div>
        )}

        {/* REGULAR PROJECTS */}

        <div
          className="
            mt-3

            grid
            grid-cols-1
            gap-3

            md:grid-cols-2
          "
        >
          {regularProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;