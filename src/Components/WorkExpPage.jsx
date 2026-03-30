import WorkTimelineEntry from "./WorkTimelineEntry";
import { gxs, pawjourr, tastysnack, reapra, privyr } from "../utils/Work";
import { motion } from "framer-motion";

function WorkExpPage() {
  const companies = [gxs, privyr, pawjourr, tastysnack, reapra];

  return (
    <div className="section-container py-24 sm:py-32">
      <div className="mb-10 sm:mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="sticker-label mb-4">
            where i've been
          </span>
          <h2 className="section-heading mt-3">Work Experience</h2>
        </motion.div>
      </div>

      <div>
        {companies.map((company, index) => (
          <motion.div
            key={company.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
          >
            <WorkTimelineEntry
              company={company}
              isLast={index === companies.length - 1}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default WorkExpPage;
