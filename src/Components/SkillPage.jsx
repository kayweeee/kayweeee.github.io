import skills from "../utils/Skills";
import SkillSection from "./SkillSection";
import { motion } from "framer-motion";

function SkillPage() {
  const spanMap = {
    LANGUAGES: "sm:col-span-2 lg:col-span-2",
    FRONTEND: "sm:col-span-2 lg:col-span-2",
    BACKEND: "sm:col-span-2 lg:col-span-1",
    "CLOUD SERVICES": "sm:col-span-1 lg:col-span-1",
    OTHERS: "sm:col-span-1 lg:col-span-1",
  };

  return (
    <div className="section-container py-24 sm:py-32">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.category}
            className={spanMap[skill.category] || ""}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
          >
            <SkillSection skill={skill} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default SkillPage;
