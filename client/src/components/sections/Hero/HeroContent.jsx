import avatar from "../../../assets/images/avatar.jpg";
import socialLinks from "../../../data/socialLinks";
import SocialButton from "../../ui/SocialButton";
import GlassButton from "../../ui/GlassButton";

function HeroContent() {
  return (
    <div className="mt-12">

      {/* Hero Header */}

      <div className="flex items-center gap-6">

        {/* Avatar */}

        <div
          className="
      flex
      h-[78px]
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
            alt="Shivam Bagwari"
            className="
        h-[68px]
        w-[68px]
        rounded-[18px]
        object-cover
      "
          />
        </div>

        {/* Identity */}

        <div className="flex flex-col justify-center">

          <h1
            className="
        font-mono
        text-[3.0rem]
        font-bold
        leading-none
        tracking-[-0.03em]
        text-white
      "
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
        text-white/45
      "
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
          max-w-[760px]
          text-4xl
          italic
          leading-[1.35]
          text-white/90
        "
      >
        I design and build considered software - from developer tools to
        interfaces that feel effortless.
      </p>
      </div>


      <ul
        className="
        mt-5
          space-y-5
          text-lg
          text-white/55
          max-w-[760px]
        "
      >
        <li>
          • Focused on AI, open source, and thoughtful developer experience.
        </li>

        <li>
          • I believe actions speak louder than words, so I let my projects do
          the talking.
        </li>

        <li>
          • Currently building{" "}
          <span className="font-semibold text-white">
            CourseUniverse
          </span>
          , experimenting with AI, and exploring scalable web applications.
        </li>
      </ul>

      <div className="mt-12 flex flex-wrap gap-4">

  <GlassButton variant="primary">
    Contact Me
  </GlassButton>

  <GlassButton variant="secondary">
    Download Resume
  </GlassButton>

</div>

      {/* Social Links */}

      <div className="mt-10 flex flex-wrap gap-3">

        {socialLinks.map((social) => (
          <SocialButton
            key={social.name}
            {...social}
          />
        ))}

      </div>
    </div>
  );
}

export default HeroContent;