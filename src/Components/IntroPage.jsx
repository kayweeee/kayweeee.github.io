import me from "../images/pictures/me.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

function IntroPage() {
  return (
    <div className="section-container flex flex-col lg:flex-row items-center justify-center 
                    min-h-screen gap-12 lg:gap-20 pt-20 pb-12">
      <motion.div
        className="flex-shrink-0"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0}
      >
        <img
          className="h-[220px] sm:h-[280px] lg:h-[360px] drop-shadow-xl"
          src={me}
          alt="Kay Wee"
        />
      </motion.div>

      <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-lg">
        <motion.p
          className="text-sm font-semibold tracking-widest uppercase text-gray-400 mb-3"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          Aspiring Fullstack Developer
        </motion.p>

        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl font-display text-orange leading-tight"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          KAY WEE
        </motion.h1>

        <motion.div
          className="bg-orange h-1 w-20 mt-4 mb-6 rounded-full"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
        />

        <motion.p
          className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8 max-w-md"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
        >
          Software development calls to all my passions. It combines creativity with problem solving in the form of coding, giving me the best of both worlds. Looking to use technology to create a positive impact on our big earth :)
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center gap-4"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={5}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-orange text-white 
                       font-semibold rounded-card-sm shadow-sm hover:opacity-90 
                       transition-all duration-200"
          >
            <FontAwesomeIcon icon={faEnvelope} />
            Get in Touch
          </a>

          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border-medium 
                       text-gray-700 font-medium rounded-card-sm hover:bg-surface 
                       transition-all duration-200"
          >
            View Projects
            <FontAwesomeIcon icon={faArrowDown} className="text-xs" />
          </a>
        </motion.div>

        <motion.div
          className="flex items-center gap-5 mt-8"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={6}
        >
          <a
            href="https://www.linkedin.com/in/kay-wee-tan/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-orange transition-colors duration-200"
            aria-label="LinkedIn profile"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          <a
            href="https://github.com/kayweeee"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-orange transition-colors duration-200"
            aria-label="GitHub profile"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default IntroPage;
