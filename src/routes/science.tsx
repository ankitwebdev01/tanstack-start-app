import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Activity, Bone, Brain, Moon, Sparkles, Utensils } from "lucide-react";

export const Route = createFileRoute("/science")({
  head: () => ({
    meta: [
      { title: "The Science — BeastRootMax" },
      { name: "description", content: "How height growth actually works: growth plates, HGH, deep sleep and spinal decompression — the BeastRootMax breakdown." },
      { property: "og:title", content: "How Height Growth Works — BeastRootMax" },
      { property: "og:description", content: "Growth plates, HGH, sleep, posture & nutrition — the real mechanics." },
    ],
  }),
  component: SciencePage,
});

const PILLARS = [
  { Icon: Bone, title: "Growth Plates", body: "Epiphyseal cartilage at the ends of long bones is where new bone is laid down. Open from puberty until 18–25. Stimulus + nutrients = vertical gain." },
  { Icon: Moon, title: "Deep Sleep & HGH", body: "70% of daily HGH is released in the first 90 minutes of N3 deep sleep. Miss 10:30–12:00 AM and you forfeit half your nightly growth." },
  { Icon: Activity, title: "Spinal Decompression", body: "23 intervertebral discs lose 1–3% height by evening from gravity. Decompression stretches (hangs, cobra, supine twist) restore — and over weeks, expand it." },
  { Icon: Utensils, title: "Bioavailable Nutrition", body: "Calcium without K2 + magnesium is wasted. Protein floor of 1.6g/kg. Zinc as the unsung HGH co-factor." },
  { Icon: Brain, title: "Stress & Cortisol", body: "Chronic cortisol suppresses HGH and stunts growth plates. Sleep, sunlight, and lifting the phone-out-of-room habit are the cheapest interventions you have." },
  { Icon: Sparkles, title: "Consistency Compounding", body: "1 cm in 4 weeks compounds to 2–4 cm over a year if discipline holds. Most people quit on Day 9. The protocol is built to beat that." },
];

function SciencePage() {
  return (
    <div className="min-h-screen">
      <ScrollReveal />
      <Navbar />
      <section className="pt-40 pb-12 container mx-auto px-6">
        <div className="max-w-3xl reveal in">
          <span className="text-blood text-xs uppercase tracking-widest">Science</span>
          <h1 className="font-display text-6xl md:text-8xl mt-3 leading-[0.9]">
            HOW YOU <span className="text-blood">GROW.</span>
          </h1>
          <p className="text-muted-foreground mt-5 text-lg">
            No magic, no pills. Here's the actual biology — explained plainly,
            so you know exactly why every line in the BeastRootMax protocol exists.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PILLARS.map(({ Icon, title, body }) => (
            <div key={title} className="glass rounded-2xl p-6 hover-lift reveal">
              <Icon className="w-7 h-7 text-blood" />
              <h3 className="font-display text-2xl tracking-wider mt-4">{title}</h3>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 pb-20">
        <div className="glass rounded-3xl p-10 md:p-14 reveal">
          <span className="text-blood text-xs uppercase tracking-widest">The 5 Pillars Stack</span>
          <h2 className="font-display text-4xl md:text-5xl mt-3">Miss one — the stack collapses.</h2>
          <div className="grid md:grid-cols-5 gap-4 mt-8">
            {["Nutrition", "Sleep", "Stretching", "Posture", "Recovery"].map((p, i) => (
              <div key={p} className="rounded-xl border border-blood/30 p-5 text-center">
                <div className="text-blood font-display text-3xl">0{i + 1}</div>
                <div className="uppercase tracking-widest text-xs mt-2">{p}</div>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground mt-8 text-sm leading-relaxed">
            Growth is multiplicative, not additive. 80% sleep × 80% diet × 80% stretching = 51%
            of your potential, not 80%. We rebuild every pillar to 95%+ so the compound effect
            actually moves the dial.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
