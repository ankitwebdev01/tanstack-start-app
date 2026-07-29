import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Quote, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/results")({
  head: () => ({
    meta: [
      { title: "Results — BeastRootMax Transformations" },
      { name: "description", content: "Real height results from real students. 1–4 cm gains in 4–12 weeks." },
      { property: "og:title", content: "Results — BeastRootMax" },
      { property: "og:description", content: "Real transformations from the BeastRootMax protocol." },
    ],
  }),
  component: ResultsPage,
});

const TESTIMONIALS = [
  { name: "Aryan, 17 · Delhi",   gain: "+3.1 cm",  weeks: "8 weeks · Pro Pack",   quote: "I was 5'7\" stuck for two years. After 8 weeks of the diet chart + RootMax stretches I'm 5'8\"+. My posture alone gave me 2cm in week 1." },
  { name: "Vikram, 19 · Pune",   gain: "+4.0 cm",  weeks: "12 weeks · Elite",     quote: "The sleep protocol changed everything. I used to scroll till 1am. Now I'm out by 10:30 and waking up taller. No joke." },
  { name: "Rohan, 16 · Mumbai",  gain: "+2.4 cm",  weeks: "6 weeks · Pro Pack",   quote: "Diet chart is the unlock. I started eating proper protein + 2 glasses of milk daily. Bones felt heavier in 3 weeks." },
  { name: "Karthik, 21 · Blr",   gain: "+1.8 cm",  weeks: "10 weeks · Elite",     quote: "Thought I was done growing at 21. Got +1.8cm and 5cm of posture correction. Confidence is unreal now." },
  { name: "Aman, 15 · Jaipur",   gain: "+3.6 cm",  weeks: "8 weeks · Pro Pack",   quote: "Stretches are brutal in week 1 but addictive by week 3. My back doesn't slouch anymore." },
  { name: "Dev, 18 · Kolkata",   gain: "+2.0 cm",  weeks: "4 weeks · Starter+Pro", quote: "Started with Starter just to test. Upgraded to Pro in week 2. Worth every rupee." },
];

function ResultsPage() {
  return (
    <div className="min-h-screen">
      <ScrollReveal />
      <Navbar />

      <section className="pt-40 pb-12 container mx-auto px-6">
        <div className="max-w-3xl reveal in">
          <span className="text-blood text-xs uppercase tracking-widest">Results</span>
          <h1 className="font-display text-6xl md:text-8xl mt-3 leading-[0.9]">
            REAL GAINS. <span className="text-blood">REAL BEASTS.</span>
          </h1>
          <p className="text-muted-foreground mt-5 text-lg">
            We don't fake before-afters. These are real students who DM'd
            their measurements after 4–12 weeks on the BeastRootMax protocol.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {[
            { n: "10,000+", l: "Students" },
            { n: "2.6 cm",  l: "Avg 4-week gain" },
            { n: "4.9★",    l: "Rating" },
            { n: "98%",     l: "Would recommend" },
          ].map((s) => (
            <div key={s.l} className="glass rounded-xl p-5 text-center reveal">
              <div className="font-display text-3xl md:text-4xl text-blood">{s.n}</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="glass rounded-2xl p-6 hover-lift reveal">
              <Quote className="w-6 h-6 text-blood/60" />
              <p className="text-sm mt-3 leading-relaxed text-foreground/90">"{t.quote}"</p>
              <div className="mt-5 pt-5 border-t border-border/40">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-0.5">{t.weeks}</div>
                  </div>
                  <div className="flex items-center gap-1 text-blood font-display text-xl">
                    <TrendingUp className="w-4 h-4" /> {t.gain}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 pb-20">
        <div className="relative rounded-3xl overflow-hidden glass p-10 md:p-16 text-center reveal">
          <div className="absolute inset-0 bg-gradient-blood opacity-20" />
          <div className="relative">
            <h2 className="font-display text-4xl md:text-6xl">
              YOUR NAME <span className="text-blood">HERE NEXT.</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              DM us your Day-29 measurement and we'll feature you (with permission) + send you a free Pro+ plan.
            </p>
            <Link
              to="/courses"
              className="inline-block mt-8 px-10 py-4 rounded-md bg-gradient-blood font-bold uppercase tracking-widest shadow-blood hover:scale-105 transition-smooth"
            >
              Pick Your Pack
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
