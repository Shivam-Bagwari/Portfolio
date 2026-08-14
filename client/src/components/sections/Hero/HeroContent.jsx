import avatar from "../../../assets/images/avatar.jpg";
import socialLinks from "../../../data/socialLinks";
import SocialButton from "../../ui/SocialButton";
import GlassButton from "../../ui/GlassButton";
import PremiumButton from "../../ui/PremiumButton";
import { BiLogoGmail } from "react-icons/bi";
import { FaDownload } from "react-icons/fa6";
import { Pointer } from "lucide-react";
function HeroContent() {
  return (
    <div className="mt-12">

      {/* Hero Header */}

      <div className="flex items-center gap-6">

        {/* Avatar */}

        <div
          className="
      flex
      h-[80px]
      w-[78px]
      items-center
      justify-center
      rounded-[22px]
      border
      border-white/10
      bg-white/[0.02]
      shadow-[0_0_30px_rgba(120,90,255,0.08)]
    "
        >
          <img
            src={avatar}
            loading="eager"
            decoding="async"
            alt="Shivam Bagwari"
            className="
            h-[88px]
            w-[90px]
            rounded-[18px]
            object-cover"
          />
        </div>

        {/* Identity */}

        <div className="flex flex-col justify-center">

          <h1
            id="hero-title"
            className="
            font-tight
            text-[54px]
            font-black
            leading-none
            tracking-[-0.05em]
            text-white"
          >
            Shivam Bagwari
          </h1>

          <div
            className="
            mt-3
            flex
            items-center
            gap-4
            font-mono
            text-[15px]
            uppercase
            tracking-[0.22em]
            text-white/45"
          >
            <span>FULL-STACK DEVELOPER</span>

            <span className="text-white/20">•</span>

            <span>INDIA</span>
          </div>

        </div>

      </div>

      <div className="mt-14">
        <p
          className="
          font-serif-display
          max-w-[760px]
          text-[35px]
          italic
          leading-[1.12]
          tracking-[-0.02em]
          text-white/90"
        >
          I design and build considered software - from developer tools to interfaces that feel effortless.
        </p>
      </div>


      <ul
        className="
        [font-family:'Inter',sans-serif]
        mt-5
        max-w-[760px]
        list-disc
        space-y-5
        pl-5
        text-lg
        text-white/55
        "
      >
        <li>
          Building products that combine clean engineering with thoughtful user
          experience.
        </li>

        <li>
          Interested in AI, developer tools, scalable backend systems, and modern
          web architecture.
        </li>

        <li>
          Currently building{" "}
          <span className="font-semibold text-white">
            CourseUniverse
          </span>
          , while exploring SaaS products and full-stack applications.
        </li>
      </ul>

      <div className="mt-12 flex flex-wrap gap-3">

        <PremiumButton
          as="a"
          href="/Shivam_Bagwari_resume_v1.pdf"
          target="_blank"
          rel="noopener noreferrer"
          variant="primary"
          icon={FaDownload}
          cursor:Pointer
        >
          Download Resume
        </PremiumButton>

        <PremiumButton
          as="a"
          href="mailto:shivambagwari@gmail.com"
          variant="secondary"
          icon={BiLogoGmail}
          cursor:Pointer
        >
          Send an email
        </PremiumButton>

      </div>
      {/* Social Links */}
      <div className="mt-10">

        <p className="mb-5 font-mono text-sm text-white/45">
          Here are my <span className="font-semibold text-white">socials</span>
        </p>

        <div className="flex flex-wrap gap-3">
          {socialLinks.map((social) => (
            <GlassButton
              key={social.name}
              href={social.href}
              icon={social.icon}
            >
              {social.name}
            </GlassButton>
          ))}
        </div>

      </div>
    </div>
  );
}

export default HeroContent;