import { Link } from "@tanstack/react-router";
import brandBadge from "@/assets/brand-mark-badge.png";

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-14 mt-20 bg-card/30">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={brandBadge} alt="BeastRootMax" className="w-12 h-12 rounded-full" />
            <h3 className="font-display text-2xl tracking-widest">
              BEASTROOT<span className="text-blood">MAX</span>
            </h3>
          </div>
          <p className="text-sm text-muted-foreground mt-4 max-w-sm">
            Unleash the beast within. Real height growth — diet, sleep,
            RootMax stretches & growth-stack supplements.
          </p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest text-blood mb-3">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/courses" className="hover:text-blood">Packs</Link></li>
            <li><Link to="/science" className="hover:text-blood">Science</Link></li>
            <li><Link to="/results" className="hover:text-blood">Results</Link></li>
            <li><Link to="/faq" className="hover:text-blood">FAQ</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest text-blood mb-3">Support</h4>
          <p className="text-sm text-muted-foreground">DM <span className="text-blood">@beastrootmax</span> on Instagram for unlock codes & queries.</p>
          <p className="text-xs text-muted-foreground/70 mt-3">
            Results vary. Consistency, sleep & nutrition are key. Educational content only.
          </p>
        </div>
      </div>
      <p className="text-center text-xs text-muted-foreground mt-10">
        © {new Date().getFullYear()} BeastRootMax. Stay rooted. Grow beast.
      </p>
    </footer>
  );
}
