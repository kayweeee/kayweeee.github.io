import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import github from "../images/contactgithub.svg";
import linkedin from "../images/linkedin.svg";
import mail from "../images/contactmail.svg";

import { motion } from "framer-motion";

// animation stuff
const buttonPressVariants = {
  press: {
    scale: 0.8,
  },
};

function NavBar() {
  const [toggle, setToggle] = useState(false);
  const handleLinkedin = () => {
    window.open("https://www.linkedin.com/in/kay-wee-tan/");
  };
  const handleGithub = () => {
    window.open("https://github.com/kayweeee");
  };

  return (
    <div>
      <motion.button
        className="z-40 fixed top-1 right-3 md:right-5"
        onClick={() => setToggle(!toggle)}
        variants={buttonPressVariants}
        whileTap="press"
      >
        <FontAwesomeIcon
          icon={toggle ? faChevronRight : faChevronLeft}
          style={{ color: "#F9DCC4" }}
          className="p-3"
          size="xl"
        />
      </motion.button>
      <div
        className={`top-1 right-3 md:right-5 fixed p-3 pl-5 pr-10 flex flex-row rounded z-30 ease-in-out duration-100 ${
          toggle ? "translate-x-0" : "translate-x-52"
        }`}
      >
        <div className="flex flex-row gap-4">
          <motion.button variants={buttonPressVariants} whileHover="press">
            <a href="mailto:tankaywee09@gmail.com">
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ color: "#F9DCC4" }}
                size="lg"
              />
            </a>
          </motion.button>
          <motion.button
            onClick={handleLinkedin}
            variants={buttonPressVariants}
            whileHover="press"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{ color: "#F9DCC4" }}
              size="lg"
            />
          </motion.button>
          <motion.button
            onClick={handleGithub}
            variants={buttonPressVariants}
            whileHover="press"
          >
            <FontAwesomeIcon
              icon={faGithub}
              style={{ color: "#F9DCC4" }}
              size="lg"
            />
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
