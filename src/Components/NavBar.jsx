import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
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
  const navigate = useNavigate();
  const handleLinkedin = () => {
    window.open("https://www.linkedin.com/in/kay-wee-tan/");
  };
  const handleGithub = () => {
    window.open("https://github.com/kayweeee");
  };

  return (
    <div>
      <motion.button
        className="z-40 fixed"
        onClick={() => setToggle(!toggle)}
        variants={buttonPressVariants}
        whileTap="press"
      >
        <FontAwesomeIcon icon={faBars} className="p-3" size="xl" />
      </motion.button>
      <div
        className={`top-0 left-0 w-40 md:w-[30vw] fixed p-5 md:px-10 pt-14 flex flex-col h-screen bg-light-orange z-30 justify-between 
                ease-in-out duration-300 ${
                  toggle ? "translate-x-0" : "-translate-x-full"
                }`}
      >
        <div className="flex flex-col space-y-7 font-bold text-xl lg:text-2xl font-body">
          <button
            onClick={() => {
              navigate("/");
              setToggle(!toggle);
            }}
            className="transition ease-in-out duration-200 hover:text-white hover:underline hover:decoration-dotted hover:underline-offset-8"
          >
            Home
          </button>
          <button
            onClick={() => {
              navigate("/aboutme");
              setToggle(!toggle);
            }}
            className="transition ease-in-out duration-200 hover:text-white hover:underline hover:decoration-dotted hover:underline-offset-8"
          >
            About
          </button>
          <button
            onClick={() => {
              navigate("/projects");
              setToggle(!toggle);
            }}
            className="transition ease-in-out duration-200 hover:text-white hover:underline hover:decoration-dotted hover:underline-offset-8"
          >
            Projects
          </button>
          {/* <button
                        onClick={ () => {
                            navigate('/contactme');
                            setToggle(!toggle);
                            }
                        }
                        className="transition ease-in-out duration-200 hover:text-white hover:underline hover:decoration-dotted hover:underline-offset-8"
                        >Contact Me</button> */}
        </div>

        <div className="flex flex-row justify-end gap-4">
          <motion.button
            className="pb-1"
            variants={buttonPressVariants}
            whileHover="press"
          >
            <img src={mail} width={60} />
          </motion.button>
          <motion.button
            onClick={handleLinkedin}
            variants={buttonPressVariants}
            whileHover="press"
          >
            <img src={linkedin} width={50} />
          </motion.button>
          <motion.button
            onClick={handleGithub}
            variants={buttonPressVariants}
            whileHover="press"
          >
            <img src={github} width={50} />
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
