import sds from "../images/project-logos/sds.jpg";
import hci from "../images/project-logos/hci.png";
import cfg from "../images/project-logos/cfg.jpg";
import cpf from "../images/project-logos/CPF.jpg";
import hks from "../images/project-logos/HKS.jpg";

const projects = [
  {
    name: "Predicting Emotion with AI",
    desc: "A research project done in collaboration with HKS. Led the end-to-end development of an AI system to quantify human emotion, managing experimental setup and model training.",
    skills: ["AI/ML", "Python", "Research"],
    website: "https://www.linkedin.com/feed/update/urn:li:activity/7274858303069790208/",
    github: "https://github.com/kayweeee/waves-saliency-predictor",
    pic: hks,
  },
  {
    name: "CPF Training Simulator",
    desc: "Built in collaboration with CPF. Developed a training simulator and management dashboard to streamline the training process, using Next.js, Tailwind, MySQL, FastAPI, and OpenAI API. Reduced time required per training cycle by over 70%.",
    skills: ["Next.js", "Tailwind", "MySQL", "FastAPI", "OpenAI API"],
    website: "https://www.youtube.com/watch?v=85aeRPY_tL8",
    pic: cpf,
  },
  {
    name: "Dynostic",
    desc: "A module in school done in collaboration with Google. Developed a mobile application with machine learning capabilities to assist in quality checks, along with a dashboard to compile the data collected from the app for our client (TSH Group)",
    skills: [
      "HTML",
      "Mantine",
      "React",
      "CSS",
      "JavaScript",
      "Machine Learning",
    ],
    github: "https://github.com/kayweeee/final-project-dynos-team10",
    website: "https://sites.google.com/view/group10dynostic/home?pli=1",
    pic: sds,
  },
  {
    name: "Weightlifting Buddy",
    desc: "Developed a web application with the capability to detect incorrect form during physical exercises using AI. Conducted in-depth user testing and user studies to fine-tune the design of the app",
    skills: [
      "UI/UX",
      "User testing",
      "Prototyping",
      "React",
      "Machine Learning",
    ],
    github: "https://github.com/kayweeee/WeightliftBuddy",
    website: "https://youtu.be/CtGs5C-of20",
    pic: hci,
  },
  {
    name: "Code for Good",
    desc: "During my time in University of California, Berkeley Extension, I joined the Code for Good club. Together with my team, we were tasked with building the Code for Good website from scratch.",
    skills: ["UI/UX", "Prototyping", "HTML", "CSS", "Bootstrap"],
    github: "https://github.com/kayweeee/WeightliftBuddy",
    pic: cfg,
  },
];

export default projects;
