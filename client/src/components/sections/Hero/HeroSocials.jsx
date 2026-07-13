import socialLinks from "../../../data/socialLinks";
import SocialButton from "../../ui/SocialButton";

function HeroSocials() {
  return (
    <section>
      <div className="flex items-center gap-4">
        {socialLinks.map((social) => (
          <SocialButton
            key={social.name}
            href={social.href}
            icon={social.icon}
            name={social.name}
          />
        ))}
      </div>
    </section>
  );
}

export default HeroSocials;