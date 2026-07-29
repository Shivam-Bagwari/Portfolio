import PremiumCard from "../../ui/PremiumCard";
import ProjectPreview from "./ProjectPreview";
import ProjectContent from "./ProjectContent";
import FeaturedCard from "./FeaturedCard";
import TiltCard from "../../ui/TiltCard";

function ProjectCard({ project }) {
  return (
    <TiltCard>
      <PremiumCard
        variant={project.featured ? "featured" : "default"}
        className="overflow-hidden p-0 h-full"
      >
        {project.featured ? (
          <FeaturedCard project={project} />
        ) : (
          <div className="flex h-full flex-col">
            <ProjectPreview project={project} />
            <ProjectContent project={project} />
          </div>
        )}
      </PremiumCard>
    </TiltCard>
  );
}

export default ProjectCard;