import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Heart, Check } from "lucide-react";

const RSVPSection = () => {
  const [name, setName] = useState("");
  const [attending, setAttending] = useState<"yes" | "no" | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && attending) {
      setSubmitted(true);
    }
  };

  return (
    <section className="section-padding bg-cream">
      <div className="max-w-lg mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-subtitle text-center mb-4"
        >
          Be Our Guest
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-title text-center mb-12"
        >
          RSVP
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="wedding-card rounded-lg p-8 md:p-10"
        >
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                exit={{ opacity: 0, scale: 0.95 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div>
                  <label className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground block mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    required
                    className="w-full px-4 py-3 rounded-sm bg-background border border-border text-foreground placeholder:text-muted-foreground font-body text-sm focus:outline-none focus:ring-1 focus:ring-gold transition-all"
                  />
                </div>

                <div>
                  <label className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground block mb-3">
                    Will you attend?
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setAttending("yes")}
                      className={`py-3 rounded-sm font-body text-sm uppercase tracking-[0.15em] transition-all duration-200 border ${
                        attending === "yes"
                          ? "bg-gold border-gold text-primary-foreground"
                          : "border-border text-muted-foreground hover:border-gold"
                      }`}
                    >
                      Joyfully Accept
                    </button>
                    <button
                      type="button"
                      onClick={() => setAttending("no")}
                      className={`py-3 rounded-sm font-body text-sm uppercase tracking-[0.15em] transition-all duration-200 border ${
                        attending === "no"
                          ? "bg-gold border-gold text-primary-foreground"
                          : "border-border text-muted-foreground hover:border-gold"
                      }`}
                    >
                      Regretfully Decline
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={!name.trim() || !attending}
                  className="btn-wedding w-full flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                  Send RSVP
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 space-y-4"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 rounded-full bg-gold-light flex items-center justify-center mx-auto"
                >
                  <Check className="w-8 h-8 text-gold-dark" />
                </motion.div>
                <h3 className="font-display text-2xl font-light text-gold-dark">
                  {attending === "yes" ? "We can't wait to see you!" : "We'll miss you!"}
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  Thank you, <span className="text-gold-dark font-medium">{name}</span>
                </p>
                <div className="flex items-center justify-center gap-1 text-muted-foreground">
                  <Heart className="w-3.5 h-3.5 text-gold fill-gold" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default RSVPSection;
