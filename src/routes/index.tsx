import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Portfolio } from "@/components/site/Portfolio";
import { WhyUs } from "@/components/site/WhyUs";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { Toaster } from "@/components/ui/sonner";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aditya Engineers — Architecture, Interior Design & Vastu Consultation" },
      {
        name: "description",
        content:
          "Aditya Engineers, led by Vijay Mistry, designs purposeful homes and workspaces blending modern architecture, elegant interiors and authentic Vastu principles.",
      },
      { property: "og:title", content: "Aditya Engineers — Architecture, Interiors & Vastu" },
      {
        property: "og:description",
        content:
          "Designing spaces with purpose and harmony. Architecture, interior design and Vastu consultation by Vijay Mistry.",
      },
      { property: "og:type", content: "website" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Aditya Engineers",
          founder: "Vijay Mistry",
          telephone: "+91 9898406488",
          email: "vijaymistry1985@gmail.com",
          areaServed: "India",
          serviceType: ["Architecture", "Interior Design", "Vastu Consultation"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <WhyUs />
      <Contact />
      <Footer />
      <Toaster richColors position="top-center" />
    </main>
  );
}
