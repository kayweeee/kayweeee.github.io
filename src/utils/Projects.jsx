import sds from "../images/project-logos/sds.jpg";
import hci from "../images/project-logos/hci.png";
import cfg from "../images/project-logos/cfglogo.png";

const projects = [
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
