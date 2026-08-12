import PremiumCard from "../../ui/PremiumCard";
import ProjectPreview from "./ProjectPreview";
import ProjectContent from "./ProjectContent";
import FeaturedCard from "./FeaturedCard";
import TiltCard from "../../ui/TiltCard";

function ProjectCard({ project }) {
  return (
    <TiltCard className="h-full">
      <PremiumCard className="h-full p-0">
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