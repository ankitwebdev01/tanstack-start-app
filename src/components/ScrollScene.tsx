import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import brandBadge from "@/assets/brand-mark-badge.png";
import heroBeast from "@/assets/hero-beast.jpg";

/**
 * Global scroll-driven scene that lives behind all page content.
 * Mounted once at the root so it persists across route changes and
 * the parallax keeps tracking total page scroll on every page.
 */
export function ScrollScene() {
  const { scrollYProgress, scrollY } = useScroll();
  const [docHeight, setDocHeight] = useState(1);

  useEffect(() => {
    const measure = () =>
      setDocHeight(Math.max(document.documentElement.scrollHeight - window.innerHeight, 1));
    measure();
    window.addEventListener("resize", measure);
    const id = window.setInterval(measure, 800); // catches route swaps
    return () => {
      window.removeEventListener("resize", measure);
      window.clearInterval(id);
    };
  }, []);

  // Smooth, springy progress (0 → 1 over full page)
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 22, mass: 0.4 });

  // Background hero image: drifts up, zooms out, dims
  const heroY = useTransform(progress, [0, 1], ["0%", "-35%"]);
  const heroScale = useTransform(progress, [0, 1], [1.15, 0.95]);
  const heroOpacity = useTransform(progress, [0, 0.6, 1], [0.55, 0.18, 0.32]);

  // Brand badge orb — orbits down the page with rotation
  const badgeY = useTransform(scrollY, (v) => v * 0.35);
  const badgeX = useTransform(progress, [0, 0.5, 1], ["-12vw", "12vw", "-8vw"]);
  const badgeRot = useTransform(progress, [0, 1], [0, 540]);
  const badgeScale = useTransform(progress, [0, 0.5, 1], [1, 1.4, 0.9]);

  // Red glow orbs at different parallax depths
  const orb1Y = useTransform(scrollY, (v) => v * -0.25);
  const orb2Y = useTransform(scrollY, (v) => v * 0.45);
  const orb3Y = useTransform(scrollY, (v) => v * -0.6);

  // Vertical streak that crosses the page
  const streakScaleY = useTransform(progress, [0, 1], [0, 1]);

  // Floating tagline text that swaps as you scroll
  const tagOpacity = useTransform(progress, [0, 0.05, 0.5, 0.55], [1, 0, 0, 1]);
  const tag2Opacity = useTransform(progress, [0.05, 0.15, 0.5, 0.55], [0, 1, 1, 0]);

  // Scroll progress bar at top
  const barScaleX = useTransform(progress, [0, 1], [0, 1]);

  return (
    <>
      {/* Fixed background canvas — sits behind everything */}
      <div
        aria-hidden
        className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
        style={{ background: "var(--background)" }}
      >
        {/* Hero beast image, scroll-driven parallax */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroBeast})`,
            y: heroY,
            scale: heroScale,
            opacity: heroOpacity,
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />

        {/* Floating red orbs at different speeds */}
        <motion.div
          className="absolute top-[20vh] left-[10vw] w-[40vw] h-[40vw] rounded-full bg-blood/30 blur-[120px]"
          style={{ y: orb1Y }}
        />
        <motion.div
          className="absolute top-[80vh] right-[5vw] w-[35vw] h-[35vw] rounded-full bg-blood/20 blur-[140px]"
          style={{ y: orb2Y }}
        />
        <motion.div
          className="absolute top-[160vh] left-[40vw] w-[50vw] h-[50vw] rounded-full bg-blood/15 blur-[160px]"
          style={{ y: orb3Y }}
        />

        {/* Vertical blood streak that draws down as you scroll */}
        <motion.div
          className="absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-transparent via-blood to-transparent origin-top"
          style={{ scaleY: streakScaleY, opacity: 0.4 }}
        />

        {/* Grain dot pattern */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(oklch(0.55 0.27 25 / 0.08) 1px, transparent 1px)",
            backgroundSize: "5px 5px",
          }}
        />
      </div>

      {/* Floating brand badge orb — orbits the page as you scroll */}
      <motion.div
        aria-hidden
        className="fixed top-[40vh] left-1/2 -z-10 pointer-events-none hidden md:block"
        style={{
          x: badgeX,
          y: badgeY,
          rotate: badgeRot,
          scale: badgeScale,
        }}
      >
        <img
          src={brandBadge}
          alt=""
          className="w-32 h-32 md:w-44 md:h-44 opacity-25"
          style={{ filter: "drop-shadow(0 0 40px oklch(0.55 0.27 25 / 0.5))" }}
        />
      </motion.div>

      {/* Side rail tagline that swaps as you scroll */}
      <div
        aria-hidden
        className="fixed right-6 top-1/2 -translate-y-1/2 z-40 pointer-events-none hidden lg:block"
      >
        <motion.div
          style={{ opacity: tagOpacity }}
          className="absolute right-0 top-0 -rotate-90 origin-top-right whitespace-nowrap font-display text-xs tracking-[0.4em] text-blood/70"
        >
          STAY · ROOTED · GROW · BEAST
        </motion.div>
        <motion.div
          style={{ opacity: tag2Opacity }}
          className="absolute right-0 top-0 -rotate-90 origin-top-right whitespace-nowrap font-display text-xs tracking-[0.4em] text-blood/70"
        >
          STRETCH · EAT · SLEEP · GROW
        </motion.div>
      </div>

      {/* Top scroll progress bar */}
      <motion.div
        aria-hidden
        className="fixed top-0 left-0 right-0 h-[3px] bg-blood z-[60] origin-left shadow-blood pointer-events-none"
        style={{ scaleX: barScaleX }}
      />
    </>
  );
}
