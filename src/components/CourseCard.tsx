import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";

export type Pack = {
  id: "starter" | "pro" | "elite";
  name: string;
  price: number;
  tagline: string;
  features: string[];
  highlight?: boolean;
};

export function CourseCard({ pack }: { pack: Pack }) {
  return (
    <div
      className={`relative reveal hover-lift rounded-2xl p-8 glass overflow-hidden ${
        pack.highlight ? "ring-2 ring-blood shadow-blood" : ""
      }`}
    >
      {pack.highlight && (
        <span className="absolute top-4 right-4 text-[10px] uppercase tracking-widest bg-gradient-blood px-3 py-1 rounded-full font-bold">
          Most Chosen
        </span>
      )}
      <div className="absolute -top-20 -right-20 w-60 h-60 bg-blood/20 rounded-full blur-3xl pointer-events-none" />
      <h3 className="font-display text-3xl tracking-wider">{pack.name}</h3>
      <p className="text-muted-foreground text-sm mt-1">{pack.tagline}</p>
      <div className="mt-6 flex items-baseline gap-1">
        <span className="text-blood font-display text-5xl">₹{pack.price}</span>
        <span className="text-muted-foreground text-sm">/ one-time</span>
      </div>
      <ul className="mt-6 space-y-3">
        {pack.features.map((f) => (
          <li key={f} className="flex gap-2 text-sm">
            <Check className="w-4 h-4 text-blood shrink-0 mt-0.5" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <Link
        to="/checkout/$packId"
        params={{ packId: pack.id }}
        className="mt-8 block text-center py-3 rounded-md bg-gradient-blood font-bold uppercase tracking-widest text-sm shadow-blood hover:scale-[1.03] transition-smooth"
      >
        Get This Pack
      </Link>
    </div>
  );
}

export const PACKS: Pack[] = [
  {
    id: "starter",
    name: "Starter",
    price: 99,
    tagline: "Begin your growth journey",
    features: [
      "Secrets of Growth",
      "Myth Buster",
      "Basic Stretch Exercises",
      "What to Avoid",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: 499,
    tagline: "Diet + RootMax Protocol",
    highlight: true,
    features: [
      "Everything in Starter",
      "Detailed Diet Chart",
      "RootMax Exercises",
      "4-Week Diet Chart",
      "Power of Sleep",
      "Growth Kitchen",
    ],
  },
  {
    id: "elite",
    name: "Elite",
    price: 999,
    tagline: "Full beast transformation",
    features: [
      "Everything in Pro",
      "Proper Sleep Posture",
      "Necessary Supplements",
      "RootMax Secret Exercises",
      "8-Week Diet Chart Plan",
      "Personalized Instagram Support",
    ],
  },
];
