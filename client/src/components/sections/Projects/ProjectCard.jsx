import GlassCard from "../../ui/GlassCard";
import ProjectPreview from "./ProjectPreview";
import ProjectFeaturedContent from "./ProjectFeaturedContent";
import ProjectContent from "./ProjectContent";
import FeaturedCard from "./FeaturedCard";
import TiltCard from "../../ui/TiltCard";
function ProjectCard({ project }) {
  if (project.featured) {
    return (
      <TiltCard>
      <GlassCard className="overflow-hidden p-0">
          <FeaturedCard project={project} />
      </GlassCard>
      </TiltCard>
    );
  }

  return (
    <GlassCard className="group overflow-hidden p-0 transition-all duration-300 hover:-translate-y-1">
      <div className="flex h-full flex-col">
        <ProjectPreview project={project} />
        <ProjectContent project={project} />
      </div>
    </GlassCard>
  );
}

export default ProjectCard;