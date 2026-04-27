import hero from "@/assets/hero.jpg";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Luxurious modern interior designed by Aditya Engineers"
          className="h-full w-full object-cover animate-slow-zoom"
          width={1920}
          height={1280}
          fetchPriority="high"
        />
        <div className="absolute inset-0 gradient-overlay" />
      </div>

      <div className="relative z-10 container mx-auto px-6 min-h-screen flex flex-col justify-end pb-24 pt-40">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-gold" />
            <span className="text-[11px] tracking-[0.35em] uppercase text-gold">
              Est. Aditya Engineers
            </span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl text-background leading-[1.02] text-balance">
            Designing Spaces<br />
            with <em className="text-gold not-italic font-light">Purpose</em> &amp; Harmony
          </h1>

          <p className="mt-8 text-base sm:text-lg text-background/85 max-w-xl leading-relaxed">
            Architecture · Interior Design · Vastu Consultation — crafted by
            Vijay Mistry to balance modern living with timeless tradition.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gold text-gold-foreground hover:bg-background transition-all duration-300 shadow-elegant"
            >
              <span className="text-sm tracking-wide font-medium">Get Consultation</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 px-6 py-4 text-sm tracking-wide text-background/90 hover:text-gold transition-colors border-b border-background/30 hover:border-gold"
            >
              View Portfolio
            </a>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-px bg-background/20 border border-background/20">
          {[
            { n: "15+", l: "Years Experience" },
            { n: "200+", l: "Projects Delivered" },
            { n: "100%", l: "Vastu Aligned" },
            { n: "5★", l: "Client Trust" },
          ].map((s) => (
            <div key={s.l} className="bg-foreground/30 backdrop-blur-sm px-5 py-6">
              <div className="font-display text-3xl text-gold">{s.n}</div>
              <div className="text-[11px] tracking-[0.2em] uppercase text-background/80 mt-1">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
