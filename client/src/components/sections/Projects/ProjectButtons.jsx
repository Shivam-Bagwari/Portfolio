import PremiumButton from "../../ui/PremiumButton";
import { ArrowUpRight } from "lucide-react";
import { FiGithub } from "react-icons/fi";

function ProjectButtons({ live, github }) {
  return (
    <div className="mt-5 flex items-center gap-2">
      {/* Live Site */}

      {live && (
        <PremiumButton
          href={live}
          variant="primary"
          rightIcon={<ArrowUpRight size={13} />}
          className="
            h-[36px]
            rounded-[10px]
            px-4
            text-[11px]
          "
        >
          Visit Site
        </PremiumButton>
      )}

      {/* GitHub */}

      {github && (
        <PremiumButton
          href={github}
          variant="secondary"
          leftIcon={<FiGithub size={13} />}
          className="
            h-[36px]
            rounded-[10px]
            px-4
            text-[11px]
          "
        >
          Code
        </PremiumButton>
      )}
    </div>
  );
}

export default ProjectButtons;