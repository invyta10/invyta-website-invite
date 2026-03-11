import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-champagne text-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-md mx-auto"
      >
        <h3 className="font-display text-3xl font-light text-gold-dark mb-2">
          Arjun & Priya
        </h3>
        <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
          December 15, 2026
        </p>
        <div className="flex items-center justify-center gap-1 text-muted-foreground font-body text-xs">
          <span>Made with</span>
          <Heart className="w-3 h-3 text-gold fill-gold" />
          <span>by the couple</span>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
