import { motion } from "framer-motion";

function SkillBadge({ logo, name, index = 0 }) {
  return (
    <motion.div
      className="flex flex-col items-center gap-2 py-2 px-2"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <div className="sticker-sm w-12 h-12 flex items-center justify-center p-2">
        <img
          src={logo}
          alt={name}
          className="w-8 h-8 object-contain"
          loading="lazy"
        />
      </div>
      <span className="text-xs font-medium text-gray-600 text-center">{name}</span>
    </motion.div>
  );
}

export default SkillBadge;
