import Container from "../../layout/Container";
import projects from "../../../data/projects"
import ProjectCard from "./ProjectsCard";
import SectionHeader from "../../ui/SectionHeader";

function Projects() {
    return (
        <section
            id="projects"
            className="pt-16 pb-20"
        >
            <Container>
                <SectionHeader
                    number="02"
                    title="Projects"
                />



                <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
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