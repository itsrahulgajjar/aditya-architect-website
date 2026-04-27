import { useEffect, useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpg";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#why", label: "Why Us" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Aditya Engineers logo"
            className="h-11 w-11 object-contain rounded-sm"
            width={44}
            height={44}
          />
          <div className="leading-tight">
            <div className="font-display text-xl text-foreground">Aditya Engineers</div>
            <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
              Architecture · Interiors · Vastu
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm tracking-wide text-foreground/80 hover:text-accent transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href="tel:+919898406488"
          className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm hover:bg-accent transition-colors"
        >
          <Phone className="h-4 w-4" />
          +91 98984 06488
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden absolute top-full inset-x-0 bg-background border-b border-border shadow-soft">
          <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base text-foreground/85 py-2 border-b border-border/50"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:+919898406488"
              className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground text-sm"
            >
              <Phone className="h-4 w-4" />
              Call +91 98984 06488
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
