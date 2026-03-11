import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";

const events = [
  {
    icon: "🌿",
    title: "Haldi Ceremony",
    date: "December 13, 2026",
    time: "10:00 AM",
    venue: "The Garden Estate, Mumbai",
    description: "A vibrant celebration of turmeric and blessings.",
  },
  {
    icon: "💒",
    title: "Wedding Ceremony",
    date: "December 15, 2026",
    time: "7:00 PM",
    venue: "The Grand Ballroom, Mumbai",
    description: "Where two souls become one in a sacred bond.",
  },
  {
    icon: "🥂",
    title: "Reception",
    date: "December 16, 2026",
    time: "8:00 PM",
    venue: "The Royal Banquet Hall, Mumbai",
    description: "An evening of celebration, dinner, and dance.",
  },
];

const EventDetails = () => {
  return (
    <section className="section-padding bg-cream">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-subtitle text-center mb-4"
        >
          Join Us
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-title text-center mb-16"
        >
          Wedding Events
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="wedding-card rounded-lg p-8 text-center hover:shadow-elegant transition-shadow duration-300"
            >
              <span className="text-4xl block mb-4">{event.icon}</span>
              <h3 className="font-display text-2xl font-light text-gold-dark mb-4">
                {event.title}
              </h3>
              <p className="font-body text-xs text-muted-foreground mb-6 leading-relaxed">
                {event.description}
              </p>

              <div className="space-y-2">
                <div className="flex items-center justify-center gap-2 text-sm font-body text-foreground">
                  <Calendar className="w-3.5 h-3.5 text-gold" />
                  <span className="font-light">{event.date}</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm font-body text-foreground">
                  <Clock className="w-3.5 h-3.5 text-gold" />
                  <span className="font-light">{event.time}</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm font-body text-muted-foreground">
                  <MapPin className="w-3.5 h-3.5 text-gold" />
                  <span className="font-light">{event.venue}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
