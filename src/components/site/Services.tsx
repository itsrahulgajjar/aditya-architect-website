import { Compass, Sofa, Sparkles } from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "Architecture",
    desc: "Bespoke residential and commercial architecture — from concept sketches and 3D visualisation to construction-ready drawings.",
    points: ["Site analysis & planning", "3D walkthroughs", "Working drawings"],
  },
  {
    icon: Sofa,
    title: "Interior Design",
    desc: "Curated interiors that balance elegance and everyday function — turnkey design for living rooms, kitchens, offices and more.",
    points: ["Space planning", "Material & finish selection", "Custom furniture"],
  },
  {
    icon: Sparkles,
    title: "Vastu Consultation",
    desc: "Ancient principles, modern living. We align orientation, layout and energy flow to bring prosperity and harmony into every space.",
    points: ["Site direction analysis", "Layout corrections", "New construction guidance"],
  },
];

export function Services() {
  return (
    <section id="services" className="py-28 lg:py-40 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl reveal">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-accent" />
            <span className="text-[11px] tracking-[0.35em] uppercase text-accent">What We Do</span>
          </div>
          <h2 className="font-display text-4xl lg:text-6xl text-foreground leading-[1.05] text-balance">
            Three disciplines.<br />
            <em className="text-accent not-italic">One vision.</em>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            A complete design service — from the first line on paper to the
            final cushion on the sofa.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="reveal group relative bg-background p-8 lg:p-10 rounded-sm border border-border hover:border-accent/40 transition-all duration-500 hover:shadow-elegant"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="absolute top-0 left-0 w-12 h-px bg-gold" />
              <div className="h-14 w-14 flex items-center justify-center rounded-full bg-accent/10 text-accent mb-7 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-500">
                <s.icon className="h-6 w-6" strokeWidth={1.4} />
              </div>
              <h3 className="font-display text-3xl text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              <ul className="mt-6 space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-sm text-foreground/80">
                    <span className="h-1 w-1 rounded-full bg-accent" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-8 text-[11px] tracking-[0.3em] uppercase text-muted-foreground">
                0{i + 1} / 03
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
