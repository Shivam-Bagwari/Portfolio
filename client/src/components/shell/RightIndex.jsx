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
      <div className="relative mx-auto h-full max-w-[1500px]">

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
                 gap-2 
                 text-left 
                 cursor-pointer 
                 transition-transform 
                 duration-500 
                 ease-[cubic-bezier(.22,1,.36,1)] 
                hover:translate-x-[3px]
                "
                >
                  <div
                    className={`
                      h-px
                      transition-all
                      duration-500
                      ease-[cubic-bezier(.22,1,.36,1)]

                      ${active
                        ? "w-10 bg-white shadow-[0_0_10px_rgba(255,255,255,0.15)]"
                        : "w-3 bg-white/20 group-hover:w-5 group-hover:bg-white/40"
                      }
                    `}
                  />

<div
  className="
    flex
    items-center
    gap-2
    font-mono
    text-[13px]
  "
>
  <span
    className={`
      transition-colors
      duration-300
      ${
        active
          ? "text-white/75"
          : "text-white/25 group-hover:text-white/45"
      }
    `}
  >
    {String(index + 1).padStart(2, "0")}
  </span>

  <span
    className={`
      transition-colors
      duration-300
      ${
        active
          ? "text-white font-semibold"
          : "text-white/35 group-hover:text-white/80"
      }
    `}
  >
    {section.label}
  </span>
</div>
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