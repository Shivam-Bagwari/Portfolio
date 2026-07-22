import { Mail, Download, Circle } from "lucide-react";
import GlassButton from "../../ui/GlassButton";

function ContactCard() {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-white/10
        bg-gradient-to-br
        from-white/[0.04]
        via-white/[0.02]
        to-transparent
        px-8
        py-16
        text-center
        backdrop-blur-xl
      "
    >
      {/* Glow */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-80
          w-80
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-violet-500/10
          blur-[120px]
        "
      />

      <div className="relative">
        <p
          className="
            font-mono
            text-[11px]
            uppercase
            tracking-[0.45em]
            text-white/35
          "
        >
          GET IN TOUCH
        </p>

        <h2
          className="
            mt-6
            font-serif-display
            text-5xl
            italic
            leading-tight
            text-white
          "
        >
          Let's build something meaningful.
        </h2>

        <p
          className="
            mx-auto
            mt-8
            max-w-2xl
            text-lg
            leading-8
            text-white/60
          "
        >
          I'm currently looking for internship opportunities,
          freelance work, and exciting collaborations. If you
          have an idea you'd like to build together, I'd love
          to hear from you.
        </p>

        <div
          className="
            mt-10
            flex
            flex-wrap
            justify-center
            gap-4
          "
        >
          <GlassButton
            variant="primary"
            icon={Mail}
            href="mailto:shivambagwari@gmail.com"
          >
            Email Me
          </GlassButton>

          <GlassButton
            variant="secondary"
            icon={Download}
            href="/resume.pdf"
          >
            Download Resume
          </GlassButton>
        </div>

        <div
          className="
            mt-10
            flex
            items-center
            justify-center
            gap-3
            text-sm
            text-white/45
          "
        >
          <Circle
            size={10}
            fill="#22c55e"
            strokeWidth={0}
          />

          <span>
            Available for internships/full time • Usually replies within
            24 hours
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;