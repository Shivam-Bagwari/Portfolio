import { ArrowUpRight } from "lucide-react";
import PremiumCard from "../ui/PremiumCard";
import TiltCard from "../ui/TiltCard";

function BlogCard({ blog }) {
  const { title, readTime, tags } = blog;

  return (
    <TiltCard maxTilt={1.5}>

      <PremiumCard className="rounded-[24px]">

        <div className="relative px-6 py-5">

          {/* Arrow */}

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

          {/* Meta */}

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

            <span>Coming Soon</span>

            <span className="h-[3px] w-[3px] rounded-full bg-white/20" />

            <span>{readTime}</span>

          </div>

          {/* Title */}

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

          {/* Tags */}

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

    </TiltCard>
  );
}

export default BlogCard;