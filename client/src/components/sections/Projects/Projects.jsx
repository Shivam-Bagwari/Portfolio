import Container from "../../layout/Container";
import SectionHeader from "../../ui/SectionHeader";

import projects from "../../../data/projects";
import ProjectCard from "./ProjectsCard";

function Projects() {
  return (
    <section
      id="projects"
      className="py-20"
    >
      <Container>

        <SectionHeader
          number="02"
          title="Featured Projects"
        />

        <div
          className="
            mt-14

            grid
            grid-cols-1

            gap-6

            lg:grid-cols-2
          "
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}

export default Projects;