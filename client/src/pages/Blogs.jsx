import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

function BlogsComingSoon() {
  return (
    <main
      className="
        relative
        flex
        min-h-screen
        items-center
        justify-center
        px-6
        py-20
      "
    >
      <div
        className="
          w-full
          max-w-[720px]
          text-center
        "
      >

        {/* STATUS */}

        <div
          className="
            mx-auto
            flex
            w-fit
            items-center
            gap-3

            rounded-full
            border
            border-fuchsia-400/[0.18]
            bg-fuchsia-500/[0.05]

            px-4
            py-2

            font-mono
            text-[10px]
            uppercase
            tracking-[0.28em]

            text-fuchsia-200/65
          "
        >
          <span
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-fuchsia-400
            "
          />

          Blogs
        </div>

        {/* HEADING */}

        <h1
          className="
            mt-8

            font-serif-display
            text-[58px]
            italic
            leading-none
            tracking-[-0.045em]

            text-white

            sm:text-[76px]
          "
        >
          Coming Soon.
        </h1>

        {/* DESCRIPTION */}

        <p
          className="
            mx-auto
            mt-7
            max-w-[540px]

            font-mono
            text-[13px]
            leading-7

            text-white/40
          "
        >
          I'm currently writing about the things I'm
          building, learning, and discovering along
          the way.
        </p>

        {/* BACK BUTTON */}

        <Link
          to="/"
          className="
            mt-10
            inline-flex
            items-center
            gap-2

            rounded-full

            border
            border-white/[0.10]

            bg-white/[0.035]

            px-5
            py-2.5

            font-mono
            text-[10px]
            uppercase
            tracking-[0.18em]

            text-white/50

            transition-all
            duration-300

            hover:-translate-y-px
            hover:border-fuchsia-400/[0.28]
            hover:bg-white/[0.055]
            hover:text-white
          "
        >
          <ArrowLeft size={13} />

          Back to Portfolio
        </Link>

      </div>
    </main>
  );
}

export default BlogsComingSoon;