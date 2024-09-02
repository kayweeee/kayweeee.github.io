import me from "../images/pictures/me.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

// animation stuff
const buttonPressVariants = {
  press: {
    scale: 1.2,
  },
};

function IntroPage() {
  const handleLinkedin = () => {
    window.open("https://www.linkedin.com/in/kay-wee-tan/");
  };
  const handleGithub = () => {
    window.open("https://github.com/kayweeee");
  };
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center w-full gap-x-8 py-3">
      <div className="sm:w-2/5 flex justify-center sm:justify-end">
        <img
          className="h-[250px] sm:h-[400px] drop-shadow-xl"
          src={me}
          alt="kay wee"
        />
      </div>
      <div className="sm:w-3/5 flex flex-col items-center sm:items-start text-center sm:text-start">
        <p className="text-4xl sm:text-7xl font-display text-orange">KAY WEE</p>
        <div className="bg-orange my-2 h-[5px] w-1/2 sm:w-full" />
        <p className="font-semibold">ASPIRING FULLSTACK DEVELOPER</p>
        <p className="px-8 sm:px-0 pr-2 sm:w-96">
          Software development calls to all my passions. It combines creativity
          with problem solving in the form of coding, giving me the best of both
          worlds. Looking to use technology to create a positive impact on our
          big earth :)
        </p>
        <div className="flex flex-row gap-4 mt-2">
          <motion.button variants={buttonPressVariants} whileHover="press">
            <a href="mailto:tankaywee09@gmail.com">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-orange"
                size="xl"
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
              className="text-orange"
              size="xl"
            />
          </motion.button>
          <motion.button
            onClick={handleGithub}
            variants={buttonPressVariants}
            whileHover="press"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="text-orange"
              size="xl"
            />
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default IntroPage;
