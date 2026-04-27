import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

const items = [
  { src: p1, title: "Stoneview Residence", tag: "Architecture", span: "lg:col-span-2 lg:row-span-2" },
  { src: p2, title: "Warm Oak Suite", tag: "Interior" },
  { src: p3, title: "Studio Workspace", tag: "Office Design" },
  { src: p4, title: "Linen Kitchen", tag: "Vastu Layout", span: "lg:col-span-2" },
  { src: p5, title: "Travertine Bath", tag: "Interior" },
  { src: p6, title: "Plan & Compass", tag: "Architecture" },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-28 lg:py-40 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14 reveal">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-accent" />
              <span className="text-[11px] tracking-[0.35em] uppercase text-accent">Selected Work</span>
            </div>
            <h2 className="font-display text-4xl lg:text-6xl text-foreground leading-[1.05] text-balance">
              A portfolio of <em className="text-accent not-italic">considered</em> spaces.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Residences, workplaces and Vastu-aligned interiors — each shaped to
            its inhabitants and its site.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[260px] gap-3 lg:gap-4">
          {items.map((it, i) => (
            <figure
              key={it.title}
              className={`reveal group relative overflow-hidden rounded-sm bg-muted ${it.span ?? ""}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <img
                src={it.src}
                alt={it.title}
                className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
                loading="lazy"
                width={1024}
                height={1024}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="text-[10px] tracking-[0.3em] uppercase text-gold mb-1">{it.tag}</div>
                <div className="font-display text-2xl text-background">{it.title}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
