import GlassCard from "../../ui/GlassCard";

import ProjectPreview from "./ProjectPreview";
import ProjectFeaturedContent from "./ProjectFeaturedContent";
import ProjectContent from "./ProjectContent";

function ProjectCard({ project }) {
  if (project.featured) {
    return (
      <GlassCard className="overflow-hidden p-0">
        <div className="grid lg:grid-cols-[1.55fr_.95fr]">
          <ProjectPreview project={project} />
          <ProjectFeaturedContent project={project} />
        </div>
      </GlassCard>
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