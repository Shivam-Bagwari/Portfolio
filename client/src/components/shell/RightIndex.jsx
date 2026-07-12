import navigation from "../../data/navigation";
function RightIndex() {
  return (
    <aside className="fixed right-10 top-[30vh] z-40 hidden xl:block">
      <p className="mb-6 font-mono text-xs uppercase tracking-[0.4em] text-white/30">
        INDEX.
      </p>

      <nav className="space-y-5">
        {navigation.map((section, index) => (
          <div
            key={section.id}
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
              {String(index + 1).padStart(2, "0")} {section.label}
            </span>
          </div>
        ))}
      </nav>
    </aside>
  );
}

export default RightIndex;