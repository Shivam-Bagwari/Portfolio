import FeaturedPreview from "./FeaturedPreview";
import ProjectFeaturedContent from "./ProjectFeaturedContent";

function FeaturedCard({ project }) {
  return (
    <div
      className="
        grid
        grid-cols-1

        md:grid-cols-[58%_42%]

        md:min-h-[400px]
      "
    >
      {/* Preview */}

      <div
        className="
          h-[250px]
          md:h-auto
        "
      >
        <FeaturedPreview project={project} />
      </div>

      {/* Content */}

      <ProjectFeaturedContent project={project} />
    </div>
  );
}

export default FeaturedCard;