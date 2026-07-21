import Container from "../../layout/Container";
import projects from "../../../data/projects";
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
                    description="Products, experiments, and ideas I've brought to life through code."
                />

                <p className="font-mono text-sm uppercase tracking-[0.35em] text-accent">
                    Projects
                </p>

                <h2 className="mt-4 text-5xl font-black text-white">
                    Featured Work
                </h2>



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