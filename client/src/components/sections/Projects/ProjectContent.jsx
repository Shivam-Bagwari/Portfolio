import ProjectTechStack from "./ProjectTechStack";

function ProjectContent({ project }) {
  const { title, description, tech } = project;

  return (
    <div className="px-5 py-4">
      <h3 className="text-[30px] font-black tracking-[-0.04em] text-white">
        {title}
      </h3>

      <p className="mt-3 line-clamp-2 text-[14px] leading-6 text-white/55">
        {description}
      </p>

      <ProjectTechStack tech={tech} />
    </div>
  );
}

export default ProjectContent;