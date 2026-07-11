function RightIndex() {
  const sections = [
    "Experience",
    "Projects",
    "Open Source",
    "Skills",
    "Blog",
  ];

  return (
    <aside className="fixed right-10 top-[30vh] z-40 hidden xl:block">
      <p className="mb-6 font-mono text-xs uppercase tracking-[0.4em] text-white/30">
        INDEX.
      </p>

      <nav className="space-y-5">
        {sections.map((section, index) => (
          <div
            key={section}
            className="flex items-center gap-3"
          >
            <div
              className={`
                h-px
                ${
                  index === 0
                    ? "w-6 bg-white"
                    : "w-3 bg-white/20"
                }
              `}
            />

            <span
              className={`
                font-mono
                text-sm
                ${
                  index === 0
                    ? "text-white"
                    : "text-white/35"
                }
              `}
            >
              {String(index + 1).padStart(2, "0")} {section}
            </span>
          </div>
        ))}
      </nav>
    </aside>
  );
}

export default RightIndex;