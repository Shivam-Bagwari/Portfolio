import FeaturedPreview from "./FeaturedPreview";
import ProjectFeaturedContent from "./ProjectFeaturedContent";

function FeaturedCard({ project }) {
  return (
    <div className="grid h-[450px] grid-cols-[60%_40%]">
      <FeaturedPreview project={project} />
      <ProjectFeaturedContent project={project} />
    </div>
  );
}

export default FeaturedCard;