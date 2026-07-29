import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — BeastRootMax" },
      { name: "description", content: "All your questions about height growth, age limits, refunds, delivery, codes — answered." },
      { property: "og:title", content: "FAQ — BeastRootMax" },
      { property: "og:description", content: "Everything you need to know about the BeastRootMax protocol." },
    ],
  }),
  component: FaqPage,
});

const FAQS = [
  { q: "Can I really grow taller with BeastRootMax?",
    a: "Yes — if your growth plates are still open (typically until 18–22 for boys, 16–18 for girls). The protocol optimizes diet, sleep, HGH timing and spine decompression. Even after plates close, you can reclaim 2–5 cm from posture correction." },
  { q: "What's the age limit?",
    a: "Best window: 13–22. Strong window: 22–25. After 25 you'll mostly gain posture height (still 2–5 cm), not new bone." },
  { q: "How do I receive my pack after paying?",
    a: "1) Scan the QR & pay via any UPI app. 2) Screenshot the success page. 3) DM the screenshot + your Payment Code to @beastrootmax. 4) We reply with a BEAST-XXXX unlock code within 12 hours. 5) Enter the code on the checkout page → instant PDF download." },
  { q: "Why don't you just send the PDF on payment automatically?",
    a: "We manually verify every UPI payment to prevent fraud. The unlock-code flow guarantees only paid buyers get the content — no chargebacks, no leaks." },
  { q: "Is the unlock code reusable?",
    a: "Yes, on your device — we store it in your browser so you can re-download anytime. Sharing the code with others is a violation of the lifetime-access license." },
  { q: "Which pack should I pick?",
    a: "Starter (₹99) — if you want to test the science. Pro (₹499) — the full 4-week protocol with diet chart, exercises, sleep & kitchen. Elite (₹999) — 8-week extended chart + supplements + personalised IG support. 80% choose Pro." },
  { q: "Are there any side effects?",
    a: "Zero. It's diet, sleep, and stretching. No pills, no injections, no devices. If you have any medical condition, consult your doctor before changing diet/exercise routines." },
  { q: "Will I see results in 30 days?",
    a: "Most students report 1–3 cm in 4 weeks (diet + sleep + stretches combined). 2 cm of that is usually posture decompression in the first 7 days. Long-term plate growth takes 2–6 months." },
  { q: "Vegetarian-friendly?",
    a: "Fully. Every diet chart has a Veg and Non-Veg column for all 4 weeks. Paneer, tofu, dal, sprouts replace eggs/chicken/fish." },
  { q: "Refund policy?",
    a: "Since it's a digital product unlocked on payment confirmation, we don't offer cash refunds. But if you genuinely follow the protocol for 30 days with zero results, DM us — we'll either coach you 1:1 or credit you toward another pack." },
  { q: "What if I lose my unlock code?",
    a: "DM @beastrootmax with your original Payment Code and we'll resend it. We log every code we issue." },
  { q: "Can I upgrade from Starter to Pro later?",
    a: "Yes. DM us your original Starter Payment Code — we'll credit ₹99 toward Pro (you pay ₹400 difference)." },
  { q: "Do you ship physical books?",
    a: "No — fully digital, instant download. Better for the planet and lets us update content for free." },
  { q: "Is BeastRootMax certified by doctors?",
    a: "The protocols are based on published peer-reviewed research on HGH, growth plates, calcium metabolism, and spinal biomechanics. It is educational content, not medical advice." },
  { q: "How fast does the IG support reply (Elite pack)?",
    a: "Within 24 hours, 7 days a week. Elite includes monthly check-ins for 3 months." },
];

function FaqPage() {
  return (
    <div className="min-h-screen">
      <ScrollReveal />
      <Navbar />
      <section className="pt-40 pb-12 container mx-auto px-6 max-w-4xl">
        <div className="reveal in">
          <span className="text-blood text-xs uppercase tracking-widest">FAQ</span>
          <h1 className="font-display text-6xl md:text-8xl mt-3 leading-[0.9]">
            ASK <span className="text-blood">ANYTHING.</span>
          </h1>
          <p className="text-muted-foreground mt-5 text-lg max-w-2xl">
            15 most-asked questions about the protocol, delivery, results & refunds.
          </p>
        </div>

        <div className="mt-12 glass rounded-2xl p-3 md:p-6 reveal">
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border/40">
                <AccordionTrigger className="text-left font-semibold text-base hover:text-blood">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center reveal">
          <p className="text-muted-foreground">Still confused?</p>
          <Link
            to="/contact"
            className="inline-block mt-4 px-8 py-3 rounded-md bg-gradient-blood font-bold uppercase tracking-widest text-sm shadow-blood hover:scale-105 transition-smooth"
          >
            DM Us
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
