import Container from "../../layout/Container";
import { MapPin } from "lucide-react";

const links = [
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

function Footer() {
  return (
    <footer className="pb-12 pt-10">
      <Container>
        <div className="border-t border-white/10 pt-10">
          {/* Top Row */}

          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-start">
            {/* Left */}

            <div>
              <h3 className="text-2xl font-bold text-white">
                Shivam Bagwari
              </h3>

              <div className="mt-3 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.35em] text-white/40">
                <MapPin size={12} />

                <span>India</span>

                <span>•</span>

                <span>Available Worldwide</span>
              </div>
            </div>

            {/* Right */}

            <nav className="flex flex-wrap gap-8">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="
                    text-sm
                    text-white/45
                    transition-colors
                    duration-300
                    hover:text-white
                  "
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Bottom */}

          <div className="mt-10 flex flex-col justify-between gap-5 border-t border-white/10 pt-6 text-sm text-white/35 lg:flex-row lg:items-center">
            <p>
              © 2026 Shivam Bagwari. All rights reserved.
            </p>

            <p className="font-mono">
              Designed &amp; built with React.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;