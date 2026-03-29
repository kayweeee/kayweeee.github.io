import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

function ContactSection() {
  return (
    <div className="section-container py-24 sm:py-32">
      <div className="max-w-xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="sticker-label mb-4">let's connect</span>
          <h2 className="section-heading !mb-4 sm:!mb-6 mt-3">Get in Touch</h2>
        </motion.div>

        <motion.p
          className="text-gray-500 mb-8 text-sm sm:text-base leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          I'm always open to new opportunities, collaborations, or just a chat.
          Feel free to reach out through any of the channels below.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <a
            href="mailto:tankaywee09@gmail.com"
            className="sticker w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-4 
                       hover:border-orange hover:shadow-card-hover transition-all duration-200 group"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-orange group-hover:scale-110 transition-transform"
              size="lg"
            />
            <span className="text-sm font-medium text-gray-800 select-all">
              tankaywee09@gmail.com
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/kay-wee-tan/"
            target="_blank"
            rel="noopener noreferrer"
            className="sticker w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-4 
                       hover:border-orange hover:shadow-card-hover transition-all duration-200 group"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-orange group-hover:scale-110 transition-transform"
              size="lg"
            />
            <span className="text-sm font-semibold text-gray-800">LinkedIn</span>
          </a>

          <a
            href="https://github.com/kayweeee"
            target="_blank"
            rel="noopener noreferrer"
            className="sticker w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-4 
                       hover:border-orange hover:shadow-card-hover transition-all duration-200 group"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="text-orange group-hover:scale-110 transition-transform"
              size="lg"
            />
            <span className="text-sm font-semibold text-gray-800">GitHub</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default ContactSection;
