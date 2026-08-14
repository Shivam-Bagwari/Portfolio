import PremiumCard from "../../ui/PremiumCard";
import TiltCard from "../../ui/TiltCard";
import { ChevronDown } from "lucide-react";

const glow = "rgba(168, 85, 247, 0.18)";

function ExperienceRow({ item, open, onToggle }) {
  return (
    <TiltCard className="group">
      <div
        data-local-ambient
        className="
          relative
          h-full
          rounded-[30px]
        "
      >
        {/* =====================================================
            VERY SUBTLE OUTER ATMOSPHERE
        ===================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            -inset-[1px]

            rounded-[31px]

            opacity-0
            blur-[8px]

            transition-opacity
            duration-500
            ease-out

            group-hover:opacity-30
          "
          style={{
            background: glow,
          }}
        />

        {/* =====================================================
            PREMIUM EDGE LIGHT
        ===================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0

            rounded-[30px]

            border
            border-transparent

            opacity-0

            transition-opacity
            duration-500
            ease-out

            group-hover:opacity-100
          "
          style={{
            borderColor: glow,
          }}
        />

        {/* =====================================================
            GLASS LIGHT SWEEP
        ===================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-[5]

            overflow-hidden
            rounded-[30px]

            opacity-0

            transition-opacity
            duration-500

            group-hover:opacity-100
          "
        >
          <div
            className="
              absolute
              -left-[80%]
              top-0

              h-full
              w-[55%]

              rotate-[12deg]

              bg-gradient-to-r
              from-transparent
              via-white/[0.045]
              to-transparent

              blur-[10px]

              transition-transform
              duration-[1200ms]
              ease-[cubic-bezier(.22,.61,.36,1)]

              group-hover:translate-x-[330%]
            "
          />
        </div>

        {/* =====================================================
            ACTUAL CARD
        ===================================================== */}

        <PremiumCard
          className="
            relative
            z-10

            overflow-hidden
            rounded-[30px]

            transition-[border-color,background,box-shadow,transform]
            duration-500
            ease-[cubic-bezier(.22,1,.36,1)]

            group-hover:border-white/[0.15]
            group-hover:bg-white/[0.045]
            group-hover:-translate-y-1
            group-hover:shadow-[0_18px_55px_rgba(0,0,0,.42)]
          "
        >
          {/* ===================================================
              HEADER
          =================================================== */}

          <button
            onClick={onToggle}
            className="
              flex
              w-full
              items-center
              justify-between
              px-6
              py-4
              text-left
            "
          >
            {/* LEFT */}

            <div className="flex items-center gap-5">
              {/* Logo */}

              <div
                className="
                  relative
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-xl

                  border
                  border-white/10

                  bg-white/[0.03]

                  transition-all
                  duration-500

                  group-hover:border-fuchsia-400/30
                "
              >
                <div
                  className="
                    absolute
                    -left-6
                    -top-6

                    h-16
                    w-16

                    rounded-full

                    bg-fuchsia-500/20
                    blur-2xl

                    opacity-0

                    transition-opacity
                    duration-500

                    group-hover:opacity-100
                  "
                />

                <span
                  className="
                    relative

                    font-mono
                    text-[11px]
                    font-bold
                    tracking-wider

                    text-white/90
                  "
                >
                  {item.logo}
                </span>
              </div>

              <div>
                <h3
                  className="
                    text-[30px]
                    font-tight
                    font-extrabold
                    leading-none

                    tracking-[-0.04em]

                    text-white
                  "
                >
                  {item.role}
                </h3>

                <p
                  className="
                    mt-2

                    font-mono
                    text-[11px]
                    uppercase
                    tracking-[0.18em]

                    text-white/42
                  "
                >
                  {item.company}
                </p>
              </div>
            </div>

            {/* RIGHT */}

            <div className="flex items-center gap-6">
              <div className="text-right">
                <p
                  className="
                    font-mono
                    text-[13px]
                    tracking-[0.08em]
                    text-white/75
                  "
                >
                  {item.duration}
                </p>

                <p className="mt-1 text-xs text-white/35">
                  {item.location}
                </p>
              </div>

              <ChevronDown
                size={18}
                className={`
                  transition-all
                  duration-500
                  ease-[cubic-bezier(.22,1,.36,1)]

                  ${open ? "rotate-180" : ""}
                `}
              />
            </div>
          </button>

          {/* ===================================================
              CONTENT
          =================================================== */}

          <div
            className={`
              grid

              transition-all
              duration-300

              ${
                open
                  ? "grid-rows-[1fr]"
                  : "grid-rows-[0fr]"
              }
            `}
          >
            <div className="overflow-hidden">
              <div
                className={`
                  relative

                  px-6
                  pt-5
                  pb-5

                  transition-all
                  duration-500
                  ease-[cubic-bezier(.22,1,.36,1)]

                  ${
                    open
                      ? "translate-y-0 opacity-100"
                      : "-translate-y-3 opacity-0"
                  }
                `}
              >
                {/* Premium Divider */}

                <div
                  className="
                    absolute
                    left-0
                    right-0
                    top-0

                    h-px

                    bg-white/[0.05]
                  "
                />

                <div
                  className={`
                    absolute
                    left-0
                    top-0

                    h-px

                    bg-gradient-to-r
                    from-fuchsia-500/80
                    via-fuchsia-400/20
                    to-fuchsia-500/80

                    transition-all
                    duration-700
                    ease-out

                    ${
                      open
                        ? "w-full opacity-100"
                        : "w-0 opacity-0"
                    }
                  `}
                />

                {/* Description */}

                <p
                  className="
                    max-w-[780px]

                    text-[16px]
                    leading-8

                    text-white/68
                  "
                >
                  {item.description}
                </p>

                {/* Technologies */}

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.technologies.map((tech, index) => (
                    <span
                      key={tech}
                      className={`
                        rounded-full

                        border
                        border-white/[0.08]

                        bg-white/[0.025]

                        px-3.5
                        py-1.5

                        font-mono
                        text-[11px]
                        tracking-[0.04em]

                        text-white/62

                        transition-all
                        duration-500

                        ${
                          open
                            ? "translate-y-0 opacity-100"
                            : "translate-y-2 opacity-0"
                        }
                      `}
                      style={{
                        transitionDelay: `${index * 35}ms`,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Achievements */}

                <ul className="mt-6 space-y-2">
                  {item.achievements.map(
                    (achievement, index) => (
                      <li
                        key={achievement}
                        className={`
                          flex
                          items-start
                          gap-3

                          text-white/58

                          transition-all
                          duration-500

                          ${
                            open
                              ? "translate-x-0 opacity-100"
                              : "translate-x-3 opacity-0"
                          }
                        `}
                        style={{
                          transitionDelay: `${
                            150 + index * 50
                          }ms`,
                        }}
                      >
                        <span
                          className="
                            mt-[7px]
                            h-1.5
                            w-1.5
                            shrink-0
                            rounded-full
                            bg-fuchsia-400
                          "
                        />

                        <span>
                          {achievement}
                        </span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </PremiumCard>
      </div>
    </TiltCard>
  );
}

export default ExperienceRow;