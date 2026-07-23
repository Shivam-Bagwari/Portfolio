import FeaturedPreview from "./FeaturedPreview";
import RegularPreview from "./RegularPreview";

function ProjectPreview({ project }) {
  return project.featured ? (
    <FeaturedPreview project={project} />
  ) : (
    <RegularPreview project={project} />
  );
}

export default ProjectPreview;