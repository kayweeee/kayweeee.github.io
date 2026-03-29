import pic1 from "./images/me1.jpg";
import EduCard from "./Components/EduCard";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

function About() {
  const education = [
    {
      school: "Singapore University of Technology and Design (SUTD)",
      major: "Bachelor of Science in Design and Artificial Intelligence",
      time: "2020 - present",
      desc: "Studied Algorithms, Machine Learning, Human Computer Interaction and AI",
    },
    {
      school: "Singapore University of Technology and Design (SUTD)",
      major: "Master of Science in Technological Entrepreneurship (STEP Programme)",
      time: "2020 - present",
      desc: "8 months in the United States and 4 months in Finland as part of the STEP programme.",
    },
    {
      school: "University of California, Berkeley Extension",
      major: "Professional Certificate Program in Entrepreneurship",
      time: "2023",
      desc: "Modules include: Finance, Design Thinking, Market Research, Business Negotiation",
    },
    {
      school: "Victoria Junior College",
      major: "A Levels",
      time: "2018 - 2019",
    },
  ];

  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll overflow-x-clip">
      {/* About Hero */}
      <div className="snap-start min-h-screen flex items-center">
        <div className="section-container py-24">
          <motion.h2
            className="section-heading"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>

          <motion.div
            className="flex flex-col md:flex-row items-center gap-10 lg:gap-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            <div className="flex-shrink-0">
              <img
                src={pic1}
                alt="Kay Wee"
                className="w-56 md:w-72 rounded-card object-cover shadow-card-hover"
              />
            </div>

            <div className="max-w-lg text-center md:text-left">
              <p className="text-sm font-semibold tracking-widest uppercase text-gray-400 mb-3">
                Forever an explorer and learner
              </p>
              <p className="text-gray-600 leading-relaxed">
                Hi! Welcome to my website, where I document my journey to
                becoming a full-stack software engineer. I live by the philosophy
                of &ldquo;if I don&apos;t know how to do it, I&apos;ll figure it out&rdquo;.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Education - Bento Grid */}
      <div className="snap-start min-h-screen flex items-center bg-off-white/50">
        <div className="section-container py-24">
          <motion.h2
            className="section-heading"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Education
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={`${edu.school}-${edu.major}`}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                custom={index}
              >
                <EduCard {...edu} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Work Experience (placeholder) */}
      <div className="snap-start min-h-screen flex items-center">
        <div className="section-container py-24">
          <motion.h2
            className="section-heading"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Work Experience
          </motion.h2>
        </div>
      </div>
    </div>
  );
}

export default About;
