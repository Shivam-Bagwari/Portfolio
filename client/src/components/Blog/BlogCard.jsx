import { ArrowUpRight } from "lucide-react";
import GlassCard from "../ui/GlassCard";

function BlogCard({ blog }) {
  const { title, date, readTime, tags } = blog;

  return (
    <GlassCard
      className="
        group
        px-5
        py-4
        hover:border-white/15
        transition-all
        duration-300
      "
    >
      {/* Meta */}
      <div className="mb-2 flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-white/40">
        <span>{date}</span>

        <span className="h-1 w-1 rounded-full bg-white/25" />

        <span>{readTime}</span>
      </div>

      {/* Title + Arrow */}
      <div className="flex items-center justify-between gap-4">
        <h3
          className="
            text-[20px]
            font-tight
            font-bold
            leading-tight
            text-white
            transition-colors
            duration-300
            group-hover:text-violet-200
          "
        >
          {title}
        </h3>

        <ArrowUpRight
          size={18}
          className="
            shrink-0
            text-white/40
            transition-all
            duration-300
            group-hover:-translate-y-1
            group-hover:translate-x-1
            group-hover:text-violet-300
          "
        />
      </div>

      {/* Tags */}
      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="
              rounded-full
              border
              border-white/8
              bg-white/[0.03]
              px-2.5
              py-0.5
              text-[11px]
              font-medium
              text-white/55
            "
          >
            {tag}
          </span>
        ))}
      </div>
    </GlassCard>
  );
}

export default BlogCard;