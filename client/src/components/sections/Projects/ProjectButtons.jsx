import GlassButton from "../../ui/GlassButton";
import { ArrowUpRight } from "lucide-react";
import { FiGithub } from "react-icons/fi";

function ProjectButtons({ live, github, compact = false }) {
  return (
    <div className={`flex gap-2 ${compact ? "mt-5" : "mt-10"}`}>
      <GlassButton
        href={live}
        variant="primary"
        size={compact ? "sm" : "md"}
        icon={ArrowUpRight}
      >
        Launch Project
      </GlassButton>

      <GlassButton
        href={github}
        size={compact ? "sm" : "md"}
        icon={FiGithub}
      >
        Source Code
      </GlassButton>
    </div>
  );
}

export default ProjectButtons;