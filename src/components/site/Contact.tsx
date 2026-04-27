import { useState } from "react";
import { Phone, User, MessageSquare, Send, MapPin, Mail } from "lucide-react";
import { toast } from "sonner";

export function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error("Please share your name and phone number.");
      return;
    }
    setSubmitting(true);
    // Compose a wa.me / fallback: open phone dialler with prefilled details
    const body = encodeURIComponent(
      `Hello Vijay,\n\nI'd like a consultation.\n\nName: ${form.name}\nPhone: ${form.phone}\n\n${form.message}`
    );
    window.location.href = `https://wa.me/919898406488?text=${body}`;
    setTimeout(() => {
      toast.success("Thank you! Redirecting you to message Vijay.");
      setSubmitting(false);
      setForm({ name: "", phone: "", message: "" });
    }, 600);
  };

  return (
    <section id="contact" className="py-28 lg:py-40 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5 reveal">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-accent" />
              <span className="text-[11px] tracking-[0.35em] uppercase text-accent">Get in Touch</span>
            </div>
            <h2 className="font-display text-4xl lg:text-6xl text-foreground leading-[1.05] text-balance">
              Let's design something <em className="text-accent not-italic">remarkable.</em>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Share a few details and Vijay will reach out personally to discuss
              your project — usually within 24 hours.
            </p>

            <div className="mt-10 space-y-5">
              <a
                href="tel:+919898406488"
                className="flex items-center gap-4 p-5 bg-background rounded-sm border border-border hover:border-accent/40 transition-colors group"
              >
                <div className="h-12 w-12 rounded-full bg-accent/10 text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground">Call directly</div>
                  <div className="font-display text-xl text-foreground">+91 98984 06488</div>
                </div>
              </a>

              <a
                href="mailto:vijaymistry1985@gmail.com"
                className="flex items-center gap-4 p-5 bg-background rounded-sm border border-border hover:border-accent/40 transition-colors group"
              >
                <div className="h-12 w-12 rounded-full bg-accent/10 text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground">Email us</div>
                  <div className="font-display text-xl text-foreground break-all">vijaymistry1985@gmail.com</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-5 bg-background rounded-sm border border-border">
                <div className="h-12 w-12 rounded-full bg-accent/10 text-accent flex items-center justify-center">
                  <User className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground">Founder</div>
                  <div className="font-display text-xl text-foreground">Vijay Mistry</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 bg-background rounded-sm border border-border">
                <div className="h-12 w-12 rounded-full bg-accent/10 text-accent flex items-center justify-center">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground">Studio</div>
                  <div className="font-display text-xl text-foreground">Aditya Engineers</div>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="lg:col-span-7 reveal bg-background p-8 lg:p-12 rounded-sm shadow-soft border border-border"
          >
            <div className="space-y-6">
              <div>
                <label className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground mb-2 flex items-center gap-2">
                  <User className="h-3 w-3" /> Your Name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="e.g. Anjali Shah"
                  className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground mb-2 flex items-center gap-2">
                  <Phone className="h-3 w-3" /> Phone Number
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+91 ..."
                  className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground mb-2 flex items-center gap-2">
                  <MessageSquare className="h-3 w-3" /> Tell us about your project
                </label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Type of space, location, timeline..."
                  className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full bg-primary text-primary-foreground hover:bg-accent transition-all duration-300 disabled:opacity-60"
              >
                <span className="text-sm tracking-wide">
                  {submitting ? "Sending..." : "Send Enquiry"}
                </span>
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              <p className="text-xs text-muted-foreground flex items-center gap-2 pt-2">
                <Mail className="h-3 w-3" />
                We respect your privacy — your details are only used to respond to you.
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Mobile call FAB */}
      <a
        href="tel:+919898406488"
        className="lg:hidden fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-accent text-accent-foreground flex items-center justify-center shadow-elegant animate-pulse"
        aria-label="Call Aditya Engineers"
      >
        <Phone className="h-6 w-6" />
      </a>
    </section>
  );
}
