import avatar from "../../../assets/images/avatar.jpg";

function HeroContent() {
  return (
    <div className="pl-12">

      <div className="flex items-start gap-6">

        {/* Avatar */}

        <img
          src={avatar}
          alt="Shivam Bagwari"
          className="h-24 w-24 rounded-3xl border border-white/10 object-cover"
        />

        {/* Name + Role */}

        <div>

          <h1 className="text-5xl font-black tracking-tight text-white">
            Shivam Bagwari
          </h1>

          <p
            className="
              mt-2
              font-mono
              text-sm
              uppercase
              tracking-[0.35em]
              text-white/45
            "
          >
            FULL-STACK DEVELOPER • INDIA
          </p>

        </div>

      </div>


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


      <ul
        className="
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

    </div>
  );
}

export default HeroContent;