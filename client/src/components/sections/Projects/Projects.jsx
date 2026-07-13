import Container from "../../layout/Container";
import projects from "../../../data/projects";
import ProjectCard from "./ProjectsCard";

function Projects() {
    return (
        <section
            id="projects"
            className="py-32"
        >
            <Container>
                <div className="mb-16">

                    <p className="font-mono text-sm uppercase tracking-[0.35em] text-accent">
                        Projects
                    </p>

                    <h2 className="mt-4 text-5xl font-black text-white">
                        Featured Work
                    </h2>

                </div>

                <div className="grid gap-8">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            {...project}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
}

export default Projects;