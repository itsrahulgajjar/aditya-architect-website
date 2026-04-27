import { Phone, MapPin, Mail } from "lucide-react";
import logo from "@/assets/logo.jpg";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10 lg:gap-16">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img src={logo} alt="Aditya Engineers" className="h-12 w-12 rounded-sm" width={48} height={48} />
              <div>
                <div className="font-display text-xl">Aditya Engineers</div>
                <div className="text-[10px] tracking-[0.25em] uppercase text-primary-foreground/60">
                  Designing with Purpose
                </div>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed max-w-sm">
              Architecture, interior design and Vastu consultation — crafted by
              Vijay Mistry to make every space a sanctuary.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg mb-5 text-gold">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {[
                ["About", "#about"],
                ["Services", "#services"],
                ["Portfolio", "#portfolio"],
                ["Why Choose Us", "#why"],
                ["Contact", "#contact"],
              ].map(([l, h]) => (
                <li key={h}>
                  <a href={h} className="text-primary-foreground/75 hover:text-gold transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-5 text-gold">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 text-gold" />
                <a href="tel:+919898406488" className="text-primary-foreground/85 hover:text-gold transition-colors">
                  +91 98984 06488
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 text-gold" />
                <a href="mailto:vijaymistry1985@gmail.com" className="text-primary-foreground/85 hover:text-gold transition-colors break-all">
                  vijaymistry1985@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-gold" />
                <span className="text-primary-foreground/75">
                  Vijay Mistry · Founder<br />Aditya Engineers Studio
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="hairline my-10" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/60">
          <div>© {new Date().getFullYear()} Aditya Engineers. All rights reserved.</div>
          <div className="tracking-[0.25em] uppercase">Architecture · Interiors · Vastu</div>
        </div>
      </div>
    </footer>
  );
}
