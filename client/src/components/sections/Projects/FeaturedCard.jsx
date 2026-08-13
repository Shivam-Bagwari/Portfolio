import FeaturedPreview from "./FeaturedPreview";
import ProjectFeaturedContent from "./ProjectFeaturedContent";

function FeaturedCard({ project }) {
  return (
    <div
      className="
        grid
        h-full
        grid-cols-1

        md:h-[310px]
        md:grid-cols-[62%_38%]
      "
    >
      {/* FEATURED PREVIEW */}

      <div
        className="
          h-[230px]
          md:h-full
        "
      >
        <FeaturedPreview project={project} />
      </div>

      {/* FEATURED CONTENT */}

      <ProjectFeaturedContent project={project} />
    </div>
  );
}

export default FeaturedCard;