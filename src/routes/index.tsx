import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CourseCard, PACKS } from "@/components/CourseCard";
import heroImg from "@/assets/hero-beast.jpg";
import tallImg from "@/assets/tall-stretch.jpg";
import gigaImg from "@/assets/gigachad.jpg";
import dietImg from "@/assets/diet.jpg";
import { Flame, Dumbbell, Moon, Utensils, Zap, Target } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BeastRootMax — Heightmaxxing Courses That Work" },
      { name: "description", content: "Unlock real height growth with BeastRootMax. Diet, exercises, sleep & supplements protocols. Packs from ₹99." },
      { property: "og:title", content: "BeastRootMax — Heightmaxxing Courses" },
      { property: "og:description", content: "Real height growth protocols. From ₹99." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen">
      <ScrollReveal />
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden grain">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${heroImg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="absolute inset-0 bg-glow" />

        <div className="relative container mx-auto px-6 py-32">
          <span className="inline-block text-xs uppercase tracking-[0.4em] text-blood border border-blood/40 px-4 py-2 rounded-full reveal in">
            Heightmaxxing Protocol · India
          </span>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl mt-6 leading-[0.9] max-w-5xl reveal in">
            UNLEASH THE
            <br />
            <span className="text-stroke">BEAST</span>{" "}
            <span className="text-blood">WITHIN.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground reveal in">
            Real height growth. Backed by science, sleep, food and the
            RootMax stretch protocol. No gimmicks. No false promises.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 reveal in">
            <Link
              to="/courses"
              className="px-8 py-4 rounded-md bg-gradient-blood font-bold uppercase tracking-widest shadow-blood hover:scale-105 transition-smooth pulse-blood"
            >
              See the Packs
            </Link>
            <Link
              to="/about"
              className="px-8 py-4 rounded-md border border-border/60 font-bold uppercase tracking-widest hover:bg-card transition-smooth"
            >
              Learn More
            </Link>
          </div>

          <div className="mt-20 grid grid-cols-3 max-w-2xl gap-8 reveal">
            {[
              { n: "10K+", l: "Students" },
              { n: "4.9★", l: "Rated" },
              { n: "98%", l: "Stick Rate" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-4xl text-blood">{s.n}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="border-y border-border/40 py-6 overflow-hidden bg-card/40">
        <div className="flex animate-marquee whitespace-nowrap gap-16 font-display text-3xl tracking-widest text-blood/70">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-16 shrink-0">
              <span>STRETCH HARDER</span><span>·</span>
              <span>EAT DEEPER</span><span>·</span>
              <span>SLEEP LONGER</span><span>·</span>
              <span>GROW TALLER</span><span>·</span>
              <span>BEASTROOTMAX</span><span>·</span>
            </div>
          ))}
        </div>
      </div>

      {/* WHY */}
      <section className="container mx-auto px-6 py-24 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <span className="text-blood text-sm uppercase tracking-widest">Why BeastRootMax</span>
            <h2 className="font-display text-5xl md:text-6xl mt-3">
              BUILT FOR <span className="text-blood">REAL</span> RESULTS.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              We stripped out every myth and stitched together what actually
              moves the needle — posture, deep sleep, growth-stack nutrition,
              decompression stretches and recovery. Every pack scales with how
              far you want to push.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {[
                { Icon: Dumbbell, t: "RootMax Stretches" },
                { Icon: Utensils, t: "Growth Kitchen" },
                { Icon: Moon, t: "Sleep Protocol" },
                { Icon: Zap, t: "Supplement Stack" },
                { Icon: Target, t: "Diet Chart" },
                { Icon: Flame, t: "IG Support" },
              ].map(({ Icon, t }) => (
                <div
                  key={t}
                  className="glass rounded-xl p-4 flex items-center gap-3 hover-lift"
                >
                  <Icon className="w-5 h-5 text-blood" />
                  <span className="text-sm font-semibold uppercase tracking-wider">{t}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal grid grid-cols-2 gap-4">
            <img src={tallImg} alt="Tall stretch" loading="lazy" className="rounded-2xl object-cover h-80 w-full hover-lift" />
            <img src={gigaImg} alt="Beast mode" loading="lazy" className="rounded-2xl object-cover h-80 w-full hover-lift mt-10" />
            <img src={dietImg} alt="Growth kitchen" loading="lazy" className="rounded-2xl object-cover h-48 w-full col-span-2 hover-lift" />
          </div>
        </div>
      </section>

      {/* PACKS */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImg})` }}
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="relative container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto reveal">
            <span className="text-blood text-sm uppercase tracking-widest">Pricing</span>
            <h2 className="font-display text-5xl md:text-6xl mt-3">
              CHOOSE YOUR <span className="text-blood">WEAPON.</span>
            </h2>
            <p className="text-muted-foreground mt-4">
              Pay once. Lifetime access. Instant unlock.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {PACKS.map((p) => (
              <CourseCard key={p.id} pack={p} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-24">
        <div className="relative rounded-3xl overflow-hidden glass p-12 md:p-20 text-center reveal">
          <div className="absolute inset-0 bg-gradient-blood opacity-20" />
          <div className="relative">
            <h2 className="font-display text-5xl md:text-7xl">
              STOP <span className="text-blood">SHRINKING.</span> START GROWING.
            </h2>
            <Link
              to="/courses"
              className="inline-block mt-8 px-10 py-4 rounded-md bg-gradient-blood font-bold uppercase tracking-widest shadow-blood hover:scale-105 transition-smooth"
            >
              Begin Now →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
