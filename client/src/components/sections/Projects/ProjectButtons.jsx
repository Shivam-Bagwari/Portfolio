import GlassButton from "../../ui/GlassButton";
import { ArrowUpRight } from "lucide-react";
import { FiGithub } from "react-icons/fi";

function ProjectButtons({ live, github }) {
  return (
    <div className="mt-8 flex items-center gap-3">
      <GlassButton
        href={live}
        variant="primary"
        icon={ArrowUpRight}
        className="w-[132px]"
      >
        Visit Site
      </GlassButton>

      <GlassButton
        href={github}
        variant="secondary"
        icon={FiGithub}
        className="w-[80px]"
      >
        Code
      </GlassButton>
    </div>
  );
}

export default ProjectButtons;