import csslogo from "../images/skill-logos/css_logo.png";
import htmllogo from "../images/skill-logos/html_logo.png";
import jslogo from "../images/skill-logos/js_logo.png";
import pythonlogo from "../images/skill-logos/python_logo.png";
import reactlogo from "../images/skill-logos/react_logo.png";
import githublogo from "../images/skill-logos/github_logo.png";
import expresslogo from "../images/skill-logos/expressjs_logo.png";
import nextjslogo from "../images/skill-logos/nextjs_logo.png";
import nodejslogo from "../images/skill-logos/nodejs_logo.png";
import bootstraplogo from "../images/skill-logos/bootstrap_logo.png";
import tailwindlogo from "../images/skill-logos/tailwind_logo.png";
import jestlogo from "../images/skill-logos/jest_logo.png";
import mongologo from "../images/skill-logos/mongo_logo.png";
import firebaselogo from "../images/skill-logos/firebase_logo.png";
import jwtlogo from "../images/skill-logos/jwt_logo.svg";
import djangologo from "../images/skill-logos/django_logo.png";
import vuelogo from "../images/skill-logos/vue_logo.png";
import graphqllogo from "../images/skill-logos/graphql_logo.png";
import s3logo from "../images/skill-logos/s3_logo.png";
import snslogo from "../images/skill-logos/sns_logo.png";
import seslogo from "../images/skill-logos/ses_logo.png";

const skills = [
  {
    category: "LANGUAGES",
    skillArray: [
      { logo: jslogo, name: "JavaScript" },
      { logo: pythonlogo, name: "Python" },
      { logo: csslogo, name: "CSS" },
      { logo: htmllogo, name: "HTML" },
    ],
  },
  {
    category: "FRONTEND",
    skillArray: [
      { logo: reactlogo, name: "React" },
      { logo: nextjslogo, name: "Next.js" },
      { logo: vuelogo, name: "Vue" },
      { logo: tailwindlogo, name: "Tailwind" },
      { logo: bootstraplogo, name: "Bootstrap" },
    ],
  },
  {
    category: "BACKEND",
    skillArray: [
      { logo: djangologo, name: "Django" },
      { logo: nodejslogo, name: "Node.js" },
      { logo: expresslogo, name: "Express.js" },
      { logo: graphqllogo, name: "GraphQL" },
    ],
  },
  {
    category: "CLOUD SERVICES",
    skillArray: [
      { logo: s3logo, name: "S3" },
      { logo: snslogo, name: "SNS" },
      { logo: seslogo, name: "SES" },
    ],
  },
  {
    category: "OTHERS",
    skillArray: [
      { logo: githublogo, name: "Github" },
      { logo: mongologo, name: "MongoDB" },
      { logo: jestlogo, name: "Jest" },
      { logo: jwtlogo, name: "JWT" },
      { logo: firebaselogo, name: "Firebase" },
    ],
  },
];

export default skills;
