import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-wedding.jpg";
import floralDivider from "@/assets/floral-divider.png";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Wedding background"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-xs md:text-sm uppercase tracking-[0.5em] font-body font-light mb-6"
          style={{ color: "hsl(var(--gold-light))" }}
        >
          We're Getting Married
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-light tracking-wide"
          style={{ color: "hsl(var(--cream))" }}
        >
          Arjun
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="my-4"
        >
          <span
            className="font-display italic text-3xl md:text-4xl font-light"
            style={{ color: "hsl(var(--gold-light))" }}
          >
            &amp;
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.7 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-light tracking-wide"
          style={{ color: "hsl(var(--cream))" }}
        >
          Priya
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-8"
        >
          <img
            src={floralDivider}
            alt="Floral divider"
            className="w-40 md:w-56 opacity-60"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-6 text-sm md:text-base font-body font-light tracking-[0.3em] uppercase"
          style={{ color: "hsl(var(--champagne))" }}
        >
          December 15, 2026
        </motion.p>

        <motion.a
          href="#scratch"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="btn-wedding mt-12"
        >
          Open Invitation
        </motion.a>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="absolute bottom-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6" style={{ color: "hsl(var(--gold-light))" }} />
          </motion.div>
        </motion.div>
      </div>

      {/* Petal falling effect */}
      <PetalOverlay />
    </section>
  );
};

const PetalOverlay = () => {
  const petals = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    duration: 8 + Math.random() * 6,
    delay: Math.random() * 8,
    size: 8 + Math.random() * 8,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
      {petals.map((p) => (
        <div
          key={p.id}
          className="absolute animate-petal-fall"
          style={{
            left: `${p.left}%`,
            ["--duration" as string]: `${p.duration}s`,
            ["--delay" as string]: `${p.delay}s`,
            animationDelay: `${p.delay}s`,
          }}
        >
          <svg width={p.size} height={p.size} viewBox="0 0 10 10">
            <ellipse cx="5" cy="5" rx="4" ry="2.5" fill="hsl(340, 30%, 85%)" opacity="0.5" transform="rotate(30 5 5)" />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default HeroSection;
