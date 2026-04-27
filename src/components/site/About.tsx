export function About() {
  return (
    <section id="about" className="py-28 lg:py-40 bg-background">
      <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-14 items-center">
        <div className="lg:col-span-5 reveal relative">
          <div className="aspect-[4/5] bg-secondary border border-border/60 rounded-sm shadow-elegant flex items-center justify-center p-10">
            <div className="text-center">
              <div className="font-display text-5xl lg:text-6xl text-foreground leading-none">Vijay</div>
              <div className="font-display text-5xl lg:text-6xl text-accent italic leading-none mt-2">Mistry</div>
              <div className="hairline mx-auto my-6 max-w-[60px] !bg-accent" />
              <div className="text-[11px] tracking-[0.35em] uppercase text-muted-foreground">Founder · Architect</div>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 bg-gold text-gold-foreground px-7 py-5 shadow-elegant hidden sm:block">
            <div className="font-display text-2xl">Vijay Mistry</div>
            <div className="text-[11px] tracking-[0.25em] uppercase mt-1">Founder · Architect</div>
          </div>
        </div>

        <div className="lg:col-span-7 reveal">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-accent" />
            <span className="text-[11px] tracking-[0.35em] uppercase text-accent">About the Studio</span>
          </div>

          <h2 className="font-display text-4xl lg:text-6xl text-foreground leading-[1.05] text-balance">
            Where modern design meets <em className="text-accent not-italic">ancient wisdom</em>.
          </h2>

          <p className="mt-7 text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Founded by <strong className="text-foreground font-medium">Vijay Mistry</strong>,
            Aditya Engineers is a design studio rooted in the belief that great
            spaces nurture the people who inhabit them. We blend architecture,
            interior craft and the time-honoured principles of Vastu Shastra to
            create homes and workplaces that feel as good as they look.
          </p>

          <p className="mt-5 text-base text-muted-foreground leading-relaxed max-w-2xl">
            Every project — from a private residence to a corporate office — is
            shaped by careful listening, meticulous detail and an unwavering
            commitment to client satisfaction.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
            {[
              { n: "200+", l: "Projects" },
              { n: "15+", l: "Years" },
              { n: "120+", l: "Happy Clients" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl text-foreground">{s.n}</div>
                <div className="hairline my-2 max-w-[40px] !bg-accent" />
                <div className="text-xs tracking-widest uppercase text-muted-foreground">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
