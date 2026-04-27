import { Check } from "lucide-react";

const reasons = [
  {
    title: "Customised Designs",
    desc: "Every project begins from zero — your lifestyle, your site, your story.",
  },
  {
    title: "Vastu-Compliant Planning",
    desc: "Authentic Vastu principles integrated seamlessly into modern layouts.",
  },
  {
    title: "Modern & Functional",
    desc: "Beautiful spaces that work hard for the people who live and work in them.",
  },
  {
    title: "Attention to Detail",
    desc: "From the door handle to the skyline — nothing is left to chance.",
  },
];

export function WhyUs() {
  return (
    <section id="why" className="py-28 lg:py-40 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-12 gap-14">
          <div className="lg:col-span-5 reveal">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-gold" />
              <span className="text-[11px] tracking-[0.35em] uppercase text-gold">Why Choose Us</span>
            </div>
            <h2 className="font-display text-4xl lg:text-6xl leading-[1.05] text-balance">
              Built on trust.<br />
              <em className="text-gold not-italic">Designed</em> with care.
            </h2>
            <p className="mt-6 text-primary-foreground/75 leading-relaxed max-w-md">
              Clients return to Aditya Engineers because we treat their space —
              and their budget — as our own.
            </p>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6 lg:gap-8">
            {reasons.map((r, i) => (
              <div
                key={r.title}
                className="reveal flex gap-5 p-6 border border-primary-foreground/10 rounded-sm hover:border-gold/40 hover:bg-primary-foreground/5 transition-all duration-500"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="h-10 w-10 shrink-0 rounded-full bg-gold/15 text-gold flex items-center justify-center">
                  <Check className="h-5 w-5" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-display text-2xl mb-2">{r.title}</h3>
                  <p className="text-sm text-primary-foreground/70 leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
