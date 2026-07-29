import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Mail, MessageCircle, Smartphone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — BeastRootMax" },
      { name: "description", content: "Reach BeastRootMax for support and queries." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="min-h-screen">
      <ScrollReveal />
      <Navbar />
      <section className="pt-40 pb-20 container mx-auto px-6 max-w-3xl">
        <div className="text-center reveal in">
          <span className="text-blood text-sm uppercase tracking-widest">Get In Touch</span>
          <h1 className="font-display text-6xl md:text-7xl mt-3">
            TALK TO THE <span className="text-blood">PACK.</span>
          </h1>
        </div>
        <div className="grid sm:grid-cols-3 gap-6 mt-16">
          {[
            { Icon: Smartphone, t: "UPI", v: "9958510843@fam" },
            { Icon: MessageCircle, t: "Instagram", v: "@beastrootmax" },
            { Icon: Mail, t: "Email", v: "support@beastrootmax.in" },
          ].map(({ Icon, t, v }) => (
            <div key={t} className="glass rounded-2xl p-6 text-center hover-lift reveal">
              <Icon className="w-8 h-8 text-blood mx-auto" />
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-3">{t}</div>
              <div className="font-semibold mt-1 break-words">{v}</div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
