import ProjectItem from "./ProjectItem";
import projects from "../utils/Projects";
import { motion } from "framer-motion";

function ProjectPage() {
  return (
    <div className="section-container py-24 sm:py-32">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.div>

      <div className="flex flex-col gap-16 sm:gap-20 lg:gap-24">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <ProjectItem
              project={project}
              reversed={index % 2 !== 0}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ProjectPage;
