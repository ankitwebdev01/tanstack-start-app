import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import gigaImg from "@/assets/gigachad.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — BeastRootMax" },
      { name: "description", content: "About BeastRootMax — the heightmaxxing protocol built on real science, sleep & nutrition." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="min-h-screen">
      <ScrollReveal />
      <Navbar />
      <section className="pt-40 pb-20 container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="reveal in">
          <span className="text-blood text-sm uppercase tracking-widest">Our Mission</span>
          <h1 className="font-display text-6xl md:text-7xl mt-3">
            BUILT BY <span className="text-blood">BEASTS</span>, FOR FUTURE BEASTS.
          </h1>
          <p className="text-muted-foreground mt-6 leading-relaxed">
            BeastRootMax was forged from years of testing what actually works for
            young men chasing real height. No magic pills. No fake "grow 5 inches
            in a week" lies. Just discipline, the right diet, and the RootMax
            stretch system that decompresses your spine and primes your growth.
          </p>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Whether you're 14 or 24, this is your blueprint to maximize every
            inch your DNA allows — and feel like a beast doing it.
          </p>
        </div>
        <img src={gigaImg} alt="Beast portrait" loading="lazy" className="rounded-3xl shadow-blood reveal" />
      </section>
      <Footer />
    </div>
  );
}
