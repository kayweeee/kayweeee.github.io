import { motion } from "framer-motion";

const interests = [
  { label: "Climbing", emoji: "\u{1F9D7}" },
  { label: "Running", emoji: "\u{1F3C3}" },
  { label: "Hiking", emoji: "\u{26F0}\u{FE0F}" },
  { label: "Reading", emoji: "\u{1F4D6}" },
];

function InterestsSection() {
  return (
    <div className="section-container py-20 sm:py-24">
      <div className="max-w-xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="sticker-label mb-4">beyond the code</span>
          <h2 className="text-2xl sm:text-3xl font-display text-orange mt-3 mb-6">
            Things I Enjoy
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-5 sm:gap-6">
          {interests.map((item, i) => (
            <motion.div
              key={item.label}
              className="sticker flex flex-col items-center gap-2 px-6 sm:px-8 py-5 
                         hover:border-orange hover:shadow-card-hover transition-all duration-200 cursor-default"
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
            >
              <span className="text-3xl">{item.emoji}</span>
              <span className="text-sm font-semibold text-gray-700">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InterestsSection;
