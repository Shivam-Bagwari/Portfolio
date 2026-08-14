import { ArrowUpRight } from "lucide-react";
import PremiumCard from "../../ui/PremiumCard";
import TiltCard from "../../ui/TiltCard";

const glow = "rgba(168, 85, 247, 0.18)";

function BlogCard({ blog }) {
  const { title, readTime, tags } = blog;

  return (
    <TiltCard
      maxTilt={1.5}
      className="group"
    >
      <div
        data-local-ambient
        className="
          relative
          h-full
          rounded-[30px]
        "
      >

        {/* =====================================================
            SUBTLE OUTER ATMOSPHERE
        ===================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            -inset-[1px]

            rounded-[25px]

            opacity-0
            blur-[7px]

            transition-opacity
            duration-500
            ease-out

            group-hover:opacity-25
          "
          style={{
            background: glow,
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
            rounded-[25px]

            opacity-0

            transition-opacity
            duration-500
            ease-out

            group-hover:opacity-100
          "
        >
          <div
            className="
              absolute
              -left-[75%]
              top-0

              h-full
              w-[45%]

              rotate-[12deg]

              bg-gradient-to-r
              from-transparent
              via-white/[0.055]
              to-transparent

              blur-[9px]

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

            rounded-[24px]

            transition-[border-color,background,box-shadow,transform]
            duration-500
            ease-[cubic-bezier(.22,1,.36,1)]

            group-hover:border-white/[0.17]
            group-hover:bg-white/[0.045]
            group-hover:-translate-y-[2px]
            group-hover:shadow-[0_18px_50px_rgba(0,0,0,.42)]
          "
        >

          <div className="relative px-6 py-5">

            {/* =================================================
                ARROW
            ================================================= */}

            <ArrowUpRight
              size={16}
              className="
                absolute
                right-6
                top-6

                text-white/28

                transition-all
                duration-300
                ease-out

                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
                group-hover:text-fuchsia-300
              "
            />

            {/* =================================================
                META
            ================================================= */}

            <div
              className="
                flex
                items-center
                gap-3

                font-mono
                text-[10px]
                uppercase
                tracking-[0.28em]

                text-white/28
              "
            >
              <span>
                Coming Soon
              </span>

              <span
                className="
                  h-[3px]
                  w-[3px]
                  rounded-full
                  bg-white/20
                "
              />

              <span>
                {readTime}
              </span>
            </div>

            {/* =================================================
                TITLE
            ================================================= */}

            <h3
              className="
                mt-3
                max-w-[640px]

                text-[18px]
                font-bold
                leading-[1.35]
                tracking-tight

                text-white

                transition-colors
                duration-300

                group-hover:text-fuchsia-100
              "
            >
              {title}
            </h3>

            {/* =================================================
                TAGS
            ================================================= */}

            <div className="mt-4 flex flex-wrap gap-2">

              {tags.map((tag) => (
                <span
                  key={tag}
                  className="
                    rounded-full

                    border
                    border-white/[0.08]

                    bg-white/[0.025]

                    px-2.5
                    py-[5px]

                    text-[11px]
                    font-medium

                    text-white/55

                    transition-all
                    duration-300

                    group-hover:border-white/15
                  "
                >
                  {tag}
                </span>
              ))}

            </div>

          </div>

        </PremiumCard>

      </div>
    </TiltCard>
  );
}

export default BlogCard;