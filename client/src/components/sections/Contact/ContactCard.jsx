import {
  Mail,
  Download,
  Keyboard,
} from "lucide-react";

import PremiumCard from "../../ui/PremiumCard";
import PremiumButton from "../../ui/PremiumButton";
import TiltCard from "../../ui/TiltCard";

function ContactCard() {
  return (
    <TiltCard maxTilt={2}>

      <PremiumCard>

        <div className="px-10 py-12 text-center">

          {/* Small Heading */}

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

          {/* Headline */}

          <h2
            className="
              mx-auto
              mt-6
              max-w-4xl
              font-serif-display
              text-[60px]
              italic
              leading-[1.05]
              tracking-tight
              text-white
            "
          >
            Let's build something worth shipping.
          </h2>

          {/* Description */}

          <p
            className="
              mx-auto
              mt-8
              max-w-2xl
              font-mono
              text-[18px]
              leading-9
              text-white/55
            "
          >
            Open to select freelance work,
            collaborations, and full-time roles.
            Reach out — I reply within 24 hours.
          </p>

          {/* Buttons */}

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

          {/* Bottom Hint */}

          <div
            className="
              mt-8
              flex
              items-center
              justify-center
              gap-2
              text-[13px]
              text-white/30
            "
          >

            <span>Press</span>

            <span
              className="
                flex
                h-6
                w-6
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/[0.03]
              "
            >
              <Keyboard size={13} />
            </span>

            <span
              className="
                flex
                h-6
                w-6
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/[0.03]
                font-mono
              "
            >
              K
            </span>

            <span>anywhere to navigate.</span>

          </div>

        </div>

      </PremiumCard>

    </TiltCard>
  );
}

export default ContactCard;