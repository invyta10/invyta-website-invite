import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";

const LocationSection = () => {
  const venueUrl = "https://maps.google.com/?q=The+Grand+Ballroom+Mumbai";

  return (
    <section className="section-padding bg-blush">
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-subtitle text-center mb-4"
        >
          Find Us
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-title text-center mb-12"
        >
          Venue Location
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="wedding-card rounded-lg overflow-hidden"
        >
          <div className="aspect-video">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.98!2d72.8777!3d19.076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzMzLjYiTiA3MsKwNTInMzkuNyJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Wedding venue location"
            />
          </div>

          <div className="p-6 md:p-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <MapPin className="w-4 h-4 text-gold" />
              <h3 className="font-display text-xl font-light text-gold-dark">
                The Grand Ballroom
              </h3>
            </div>
            <p className="font-body text-sm text-muted-foreground mb-6">
              123 Royal Avenue, Colaba, Mumbai, Maharashtra 400001
            </p>
            <a
              href={venueUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wedding-outline inline-flex items-center gap-2"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Open in Google Maps
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationSection;
