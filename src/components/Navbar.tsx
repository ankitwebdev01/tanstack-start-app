import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import brandBadge from "@/assets/brand-mark-badge.png";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { to: "/", label: "Home" },
    { to: "/courses", label: "Packs" },
    { to: "/science", label: "Science" },
    { to: "/results", label: "Results" },
    { to: "/faq", label: "FAQ" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ] as const;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-smooth ${
        scrolled ? "glass py-2" : "py-4 bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
          <img
            src={brandBadge}
            alt="BeastRootMax"
            className="w-11 h-11 rounded-full shadow-blood group-hover:scale-110 transition-smooth"
          />
          <span className="font-display text-2xl tracking-widest">
            BEASTROOT<span className="text-blood">MAX</span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-smooth relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blood hover:after:w-full after:transition-all"
              activeProps={{ className: "text-foreground after:w-full" }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/courses"
            className="hidden sm:inline-flex px-5 py-2 rounded-md bg-gradient-blood font-semibold text-xs uppercase tracking-wider shadow-blood hover:scale-105 transition-smooth"
          >
            Unlock Growth
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden w-10 h-10 grid place-items-center rounded-md border border-border/50"
            aria-label="Menu"
          >
            <div className="space-y-1.5">
              <span className={`block w-5 h-0.5 bg-foreground transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block w-5 h-0.5 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-0.5 bg-foreground transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden mt-2 mx-4 glass rounded-xl p-4 flex flex-col gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="px-3 py-2 text-sm uppercase tracking-widest text-muted-foreground hover:text-blood hover:bg-card/60 rounded-md transition-smooth"
              activeProps={{ className: "text-blood" }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
