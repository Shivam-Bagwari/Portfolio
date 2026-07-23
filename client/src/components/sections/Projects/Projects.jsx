import Container from "../../layout/Container";
import SectionHeader from "../../ui/SectionHeader";
import projects from "../../../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="py-20">
      <Container>
        <div className="flex items-center justify-between">
          <SectionHeader number="02" title="Projects" />
          <span className="text-xs text-white/40">
            {projects.length} selected works
          </span>
        </div>

        <div className="mt-10 space-y-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {otherProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <button
            className="
              flex items-center gap-1.5 rounded-full border border-white/10
              bg-white/5 px-5 py-2 text-sm text-white/70
              transition hover:bg-white/10 hover:text-white
            "
          >
            View All ↗
          </button>
        </div>
      </Container>
    </section>
  );
}

export default Projects;