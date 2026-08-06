import SectionHeader from "../../ui/SectionHeader";
import projects from "../../../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  const featuredProject = projects.find((p) => p.featured);
  const regularProjects = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="relative py-24"
    >
      <div className="mx-auto w-full max-w-[870px] px-8">

        {/* Header */}
        <div className="flex items-center justify-between">

          <SectionHeader
            number="02"
            title="Projects"
          />

          <span
            className="
              font-mono
              text-[10px]
              uppercase
              tracking-[0.24em]
              text-white/28
            "
          >
            {projects.length} Selected Works
          </span>
        </div>

        {/* Featured Card */}
        <div className="mt-8">
          <ProjectCard project={featuredProject} />
        </div>

        {/* Regular Cards */}
        <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
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