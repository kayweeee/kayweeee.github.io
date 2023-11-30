import pic1 from "./images/me1.jpg";
import EduCard from "./Components/EduCard";
// import ReapraCard from "./Components/ReapraCard";
// import TastyCard from "./Components/TastyCard";
import { motion } from "framer-motion";

const slowFloatInVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 2, type: "spring", delay: 0.5 },
  },
};

const fastFloatInVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, type: "spring" },
  },
};

function About() {
  return (
    <>
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll overflow-x-clip">
        {/* first page */}
        <div className="snap-start w-screen h-screen flex flex-col justify-center">
          <motion.div
            className="text-2xl md:text-4xl underline underline-offset-8 pl-10 md:pl-16 pb-4 md:pb-8 font-display"
            variants={fastFloatInVariants}
            initial="hidden"
            whileInView="visible"
          >
            About Me
          </motion.div>
          <motion.div
            className="flex flex-col md:flex-row items-center justify-center gap-5 px-10 pb-10"
            variants={slowFloatInVariants}
            initial="hidden"
            whileInView="visible"
          >
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <img src={pic1} className=" w-2/3 md:w-1/2 rounded" />
            </div>

            <div className="md:w-1/2 text-start">
              <div className="md:w-1/2">
                <p className="text-lg md:text-2xl text-gray-400 font-display">
                  forever an explorer and learner
                </p>
                <p className="text-base md:text-lg">
                  hi! welcome to my website, where i document my journey to
                  becoming a full-stack software engineer. i live by the
                  philosopy of <br />
                  "if i don't know how to do it, i'll figure it out".
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* EDUCATION */}
        <div className="snap-start flex flex-col justify-center bg-grey py-10 relative">
          <motion.div
            className="text-2xl md:text-4xl underline underline-offset-8 pl-10 md:pl-16 pb-4 md:pb-10 font-display"
            variants={fastFloatInVariants}
            initial="hidden"
            whileInView="visible"
          >
            Education
          </motion.div>
          {/* timeline with circles */}
          {/* use js to fix height of circles */}
          <div className="h-5/6 absolute w-3 border-l-4 border-gray-400 rounded self-center"></div>
          <div className="absolute place-self-center mr-2 top-48 rounded-full w-8 h-8 bg-gray-400"></div>
          <div className="absolute place-self-center mr-2 mb-20 rounded-full w-8 h-8 bg-gray-400"></div>
          <div className="absolute place-self-center mr-2 mt-96 -mb-52 md:mt-96 md:-mb-12 rounded-full w-8 h-8 bg-gray-400"></div>
          <div className="absolute place-self-center mr-2 bottom-24 rounded-full w-8 h-8 bg-gray-400"></div>

          {/* content */}
          <div className="grid grid-cols-8 gap-y-8 gap-x-8 ">
            <motion.div
              className="col-span-3 col-start-2"
              variants={slowFloatInVariants}
              initial="hidden"
              whileInView="visible"
            >
              <EduCard
                school="Singapore University of Technology and Design (SUTD)"
                major="Bachelor of Science in Design and Artificial Intelligence"
                time="2020 - present"
                desc="Studied Algorithms, Machine Learning, Human Computer Interaction and AI"
              />
            </motion.div>
            <div className="col-span-3" />

            <motion.div
              className="col-span-3 col-start-5"
              variants={slowFloatInVariants}
              initial="hidden"
              whileInView="visible"
            >
              <EduCard
                school="Singapore University of Technology and Design (SUTD)"
                major="Master of Science in Technological Entrepreneurship (STEP Programme)"
                time="2020 - present"
                desc="As part of the STEP programme, students will spend a year overseas and be immersed in the entrepreneurial culture and environment in different countries. I will be spending 8 months in the United States and 4 months in Finland."
              />
            </motion.div>
            <div className="col-span-3" />

            <motion.div
              className="col-span-3 col-start-2"
              variants={slowFloatInVariants}
              initial="hidden"
              whileInView="visible"
            >
              <EduCard
                school="University of California, Berkeley Extension"
                major="Professional Certificate Program in Entrepreneurship"
                time="2023"
                desc="Modules include: Finance, Design Thinking, Market Reseach, Business Negotiation"
              />
            </motion.div>
            <div className="col-span-3" />

            <motion.div
              className="col-span-3 col-start-5"
              variants={slowFloatInVariants}
              initial="hidden"
              whileInView="visible"
            >
              <EduCard
                school="Victoria Junior College"
                major="A Levels"
                time="2018 - 2019"
              />
            </motion.div>
            <div className="col-span-3" />
          </div>
        </div>

        {/* experience */}
        <div className="snap-start flex flex-col justify-center pt-10 pb-20">
          <motion.div
            className="text-2xl md:text-4xl underline underline-offset-8 pl-10 md:pl-16 pb-4 md:pb-10 font-display"
            variants={fastFloatInVariants}
            initial="hidden"
            whileInView="visible"
          >
            Work Experience
          </motion.div>
          <div className="grid grid-cols-1 px-10 gap-y-8 md:gap-y-0 md:px-0 md:grid-cols-8 md:gap-x-8">
            <motion.div
              className="col-span-1 md:col-span-3 md:col-start-2"
              variants={slowFloatInVariants}
              initial="hidden"
              whileInView="visible"
            >
              {/* <ReapraCard/> */}
            </motion.div>
            <motion.div
              className="col-span-1 md:col-span-3 md:col-start-5"
              variants={slowFloatInVariants}
              initial="hidden"
              whileInView="visible"
            >
              {/* <TastyCard/> */}
            </motion.div>
          </div>
        </div>

        {/* <div className="snap-start h-screen flex flex-col justify-center items-center bg-grey">
                <p>Life</p>
            </div> */}
      </div>
    </>
  );
}

export default About;
