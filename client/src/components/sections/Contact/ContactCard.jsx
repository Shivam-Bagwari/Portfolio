import {
  Mail,
  Download,
} from "lucide-react";

import PremiumCard from "../../ui/PremiumCard";
import PremiumButton from "../../ui/PremiumButton";
import TiltCard from "../../ui/TiltCard";

const glow = "rgba(168, 85, 247, 0.18)";

function ContactCard() {
  return (
    <TiltCard
      maxTilt={2}
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

            rounded-[31px]

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
            rounded-[30px]

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

            transition-[border-color,background,box-shadow,transform]
            duration-500
            ease-[cubic-bezier(.22,1,.36,1)]

            group-hover:border-white/[0.17]
            group-hover:bg-white/[0.045]
            group-hover:-translate-y-[2px]
            group-hover:shadow-[0_18px_50px_rgba(0,0,0,.42)]
          "
        >

          <div className="px-10 py-12 text-center">

            {/* =================================================
                SMALL HEADING
            ================================================= */}

            <p
              className="
                font-mono
                text-[11px]
                uppercase
                tracking-[0.42em]
                text-white/28
              "
            >
              GET IN TOUCH
            </p>

            {/* =================================================
                HEADLINE
            ================================================= */}

            <h2
              className="
                mx-auto
                mt-6
                max-w-4xl

                font-serif-display
                text-[56px]
                italic
                leading-[1.05]
                tracking-tight

                text-white
              "
            >
              Let's build something worth shipping.
            </h2>

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <p
              className="
                mx-auto
                mt-8
                max-w-2xl

                font-mono
                text-[18px]
                leading-9

                text-white/60
              "
            >
              Open to select freelance work,
              collaborations, and full-time roles.
              Reach out — I reply within 24 hours.
            </p>

            {/* =================================================
                BUTTONS
            ================================================= */}

            <div
              className="
                mt-10
                flex
                flex-wrap
                justify-center
                gap-4
              "
            >

              <PremiumButton
                href="mailto:shivambagwari@gmail.com"
                variant="primary"
                icon={Mail}
                className="
                  transition-all
                  duration-300
                  ease-out
                  hover:-translate-y-[1px]
                  hover:shadow-[0_8px_25px_rgba(255,255,255,.12)]
                "
              >
                shivambagwari@gmail.com
              </PremiumButton>

              <PremiumButton
                href="/Shivam_Bagwari_resume_v1.pdf"
                variant="secondary"
                icon={Download}
              >
                Download Resume
              </PremiumButton>

            </div>

          </div>

        </PremiumCard>

      </div>
    </TiltCard>
  );
}

export default ContactCard;