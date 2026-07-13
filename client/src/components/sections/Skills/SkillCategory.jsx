function SkillCategory({ category, skills }) {
    return (
        <div
            className=" rounded-3xl border border-white/10 bg-white/[0.03] p-8"
        >
            <h3
                className=" mb-6 font-mono text-sm uppercase tracking-[0.3em] text-white/50"
            >
                {category}
            </h3>

            <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                    <span
                        key={skill}
                        className=" rounded-full border border-white/10 px-4 py-2 text-sm text-white/80">

                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default SkillCategory;