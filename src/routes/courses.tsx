import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CourseCard, PACKS } from "@/components/CourseCard";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Courses — BeastRootMax Heightmaxxing Packs" },
      { name: "description", content: "Three packs to grow taller: ₹99 Starter, ₹499 Pro, ₹999 Elite." },
    ],
  }),
  component: Courses,
});

function Courses() {
  return (
    <div className="min-h-screen">
      <ScrollReveal />
      <Navbar />
      <section className="pt-40 pb-20 container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto reveal in">
          <span className="text-blood text-sm uppercase tracking-widest">All Packs</span>
          <h1 className="font-display text-6xl md:text-8xl mt-3">
            PICK YOUR <span className="text-blood">PACK.</span>
          </h1>
          <p className="text-muted-foreground mt-5">
            Lifetime access. One-time payment via UPI. Instant content delivery.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {PACKS.map((p) => (
            <CourseCard key={p.id} pack={p} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
