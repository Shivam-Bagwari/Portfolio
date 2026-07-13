function ExperienceItem({
  year,
  title,
  company,
  description,
}) {
  return (
    <div className="relative pl-10">

      {/* Timeline Dot */}
      <div className="absolute left-0 top-2 h-4 w-4 rounded-full bg-accent" />

      <span className="font-mono text-sm text-white/40">
        {year}
      </span>

      <h3 className="mt-2 text-2xl font-bold text-white">
        {title}
      </h3>

      <p className="text-white/60">
        {company}
      </p>

      <p className="mt-4 text-white/50 leading-7">
        {description}
      </p>

    </div>
  );
}

export default ExperienceItem;