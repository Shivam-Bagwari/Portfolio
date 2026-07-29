import FeaturedPreview from "./FeaturedPreview";
import ProjectFeaturedContent from "./ProjectFeaturedContent";

function FeaturedCard({ project }) {
  return (
    <div className="grid min-h-[332px] grid-cols-[60%_42%]">
      <FeaturedPreview project={project} />
      <ProjectFeaturedContent project={project} />
    </div>
  );
}

export default FeaturedCard;