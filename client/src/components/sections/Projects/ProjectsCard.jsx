function ProjectCard({
  title,
  description,
  tech,
  github,
  live,
}) {
  return (
    <div
      className="
        glass
        rounded-3xl
        border
        border-white/10
        p-8
      "
    >
      <h3 className="text-3xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-4 text-white/60">
        {description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {tech.map((item) => (
          <span
            key={item}
            className="
              rounded-full
              border
              border-white/10
              px-3
              py-1
              text-xs
              text-white/60
            "
          >
            {item}
          </span>
        ))}
      </div>
      <div className="mt-8 flex gap-4">

  {github && (
    <a
      href={github}
      target="_blank"
      rel="noopener noreferrer"
      className="
        rounded-full
        border
        border-white/10
        px-5
        py-2
        text-sm
        text-white/70
        transition
        hover:border-white/30
        hover:text-white
      "
    >
      GitHub
    </a>
  )}

  {live && (
    <a
      href={live}
      target="_blank"
      rel="noopener noreferrer"
      className="
        rounded-full
        bg-white
        px-5
        py-2
        text-sm
        font-semibold
        text-black
        transition
        hover:scale-105
      "
    >
      Live Demo →
    </a>
  )}

</div>
    </div>
  );
}

export default ProjectCard;