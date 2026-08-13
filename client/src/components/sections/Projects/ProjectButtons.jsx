import { FiGithub } from "react-icons/fi";
function ProjectButtons({ live, github }) {
  return (
    <div className="flex items-center gap-2">
      {/* LIVE */}

      {live && (
        <a
          href={live}
          target="_blank"
          rel="noreferrer"
          className="
            inline-flex
            h-[30px]
            w-[156px]
            items-center
            justify-center
            rounded-[9px]
            bg-white
            px-4
            font-mono
            text-[11px]
            font-bold
            text-black
            transition-transform
            duration-200
            hover:scale-[1.01]
          "
        >
          Visit site ↗
        </a>
      )}

      {/* GITHUB */}

      {github && (
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          aria-label="View source code on GitHub"
          className="
            inline-flex
            h-[30px]
            min-w-[72px]
            items-center
            justify-center
            gap-1.5
            rounded-[9px]
            border
            border-white/[0.10]
            bg-white/[0.035]
            px-3
            font-mono
            text-[9px]
            font-medium
            text-white/70
            transition-colors
            duration-200
            hover:bg-white/[0.08]
            hover:text-white
          "
        >
          <FiGithub
            size={12}
            strokeWidth={1.7}
          />

          <span>Code</span>
        </a>
      )}
    </div>
  );
}

export default ProjectButtons;