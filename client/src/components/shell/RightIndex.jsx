import navigation from "../../data/navigation";
import useActiveSection from "../../hooks/useActiveSection";

function RightIndex() {
  const activeSection = useActiveSection(
    navigation.map((item) => item.id)
  );

  const handleClick = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <aside className="fixed inset-0 z-40 hidden pointer-events-none xl:block">
      {/* Layout Container */}
      <div className="relative mx-auto h-full max-w-[1400px]">

        {/* Right Navigation */}
        <div
          className="
            absolute
            right-25
            top-1/4
            -translate-y-1/2
            pointer-events-auto
          "
        >
          <p
            className="
              mb-7
              font-mono
              text-[11px]
              uppercase
              tracking-[0.35em]
              text-white/25
            "
          >
            INDEX.
          </p>

          <nav className="space-y-5">
            {navigation.map((section, index) => {
              const active = activeSection === section.id;

              return (
                <button
                  key={section.id}
                  onClick={() => handleClick(section.id)}
                  className="
                    group
                    flex
                    w-full
                    items-center
                    gap-3
                    text-left
                  "
                >
                  <div
                    className={`
                      h-px
                      transition-all
                      duration-300

                      ${
                        active
                          ? "w-8 bg-white"
                          : "w-3 bg-white/20 group-hover:w-5 group-hover:bg-white/40"
                      }
                    `}
                  />

                  <span
                    className={`
                      font-mono
                      text-[13px]
                      transition-colors
                      duration-300

                      ${
                        active
                          ? "text-white"
                          : "text-white/35 group-hover:text-white/70"
                      }
                    `}
                  >
                    {String(index + 1).padStart(2, "0")} {section.label}
                  </span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </aside>
  );
}

export default RightIndex;