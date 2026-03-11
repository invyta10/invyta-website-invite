import { motion } from "framer-motion";
import storyImage1 from "@/assets/couple-story-1.jpg";
import storyImage2 from "@/assets/couple-story-2.jpg";

const timelineItems = [
  {
    date: "March 2020",
    title: "First Meeting",
    description: "A chance encounter at a friend's gathering that changed everything. One look was all it took.",
    image: storyImage1,
  },
  {
    date: "August 2022",
    title: "The Proposal",
    description: "Under a canopy of stars, he got down on one knee and asked the question that would change their lives forever.",
    image: storyImage2,
  },
  {
    date: "December 2026",
    title: "Forever Begins",
    description: "Two hearts, one journey. Join us as we celebrate our love and begin our forever together.",
    image: null,
  },
];

const CoupleStory = () => {
  return (
    <section className="section-padding bg-blush">
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-subtitle text-center mb-4"
        >
          Our Journey
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-title text-center mb-16"
        >
          Our Love Story
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gold-light hidden md:block" />

          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative flex flex-col md:flex-row items-center mb-16 last:mb-0 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div className={`flex-1 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <p className="section-subtitle text-xs mb-2">{item.date}</p>
                <h3 className="font-display text-2xl md:text-3xl font-light text-gold-dark mb-3">
                  {item.title}
                </h3>
                <p className="font-body text-sm font-light text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Center dot */}
              <div className="hidden md:flex items-center justify-center w-4 h-4 rounded-full bg-gold border-2 border-gold-light z-10 mx-4 shrink-0" />

              {/* Image */}
              <div className="flex-1 mt-6 md:mt-0">
                {item.image ? (
                  <div className="overflow-hidden rounded-lg shadow-elegant">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      src={item.image}
                      alt={item.title}
                      className="w-full h-56 md:h-64 object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-full h-56 md:h-64 rounded-lg bg-champagne flex items-center justify-center">
                    <span className="text-6xl">💍</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoupleStory;
