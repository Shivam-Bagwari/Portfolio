import PremiumButton from "../../ui/PremiumButton";
import { ArrowUpRight } from "lucide-react";
import { FiGithub } from "react-icons/fi";

function ProjectButtons({ live, github }) {
  return (
    <div className="mt-5 flex items-center gap-3">

      <PremiumButton
        href={live}
        variant="primary"
        rightIcon={<ArrowUpRight size={15} />}
      >
        Visit Site
      </PremiumButton>

      <PremiumButton
        href={github}
        variant="secondary"
        leftIcon={<FiGithub size={15} />}
      >
        Code
      </PremiumButton>

    </div>
  );
}

export default ProjectButtons;