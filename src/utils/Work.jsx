// company logos
import privyrlogo from "../images/work-logos/privyr_logo.png";
import pawjourrlogo from "../images/work-logos/pawjourr_logo.png";
import tastysnacklogo from "../images/work-logos/tastysnack_logo.png";
import reapralogo from "../images/work-logos/reapra_logo.png";

// skill logos
import tailwindlogo from "../images/skill-logos/tailwind_logo.png";
import nextjslogo from "../images/skill-logos/nextjs_logo.png";
import jslogo from "../images/skill-logos/js_logo.png";
import htmllogo from "../images/skill-logos/html_logo.png";
import csslogo from "../images/skill-logos/css_logo.png";
import djangologo from "../images/skill-logos/django_logo.png";
import vuelogo from "../images/skill-logos/vue_logo.png";
import pythonlogo from "../images/skill-logos/python_logo.png";
import awslogo from "../images/skill-logos/aws_logo.png";

const privyr = {
  name: "Privyr",
  logo: privyrlogo,
  // link: "https://youtu.be/YisfvX_UO3s",
  title: "FULL STACK ENGINEER INTERN",
  date: "May 2024 - Present",
  country: "Singapore",
  description: `● Independently developed new features and >10 pages using HTML, CSS, Bootstrap, Vue, and Tailwind,
including user settings, PWAs, automated event-triggered messages, webhook-enabled contact forms.    
● Eliminate queries related to payment discounts and credits by integrating products with Stripe API,
increasing sales conversions by 20%.     
● Integrated company's product with external APIs (WhatsApp, Google Forms, Intercom, Slack) to
automate workflows and increase visibility on business metrics.     
● Implemented new user settings, including API creation and S3 uploads in Django.  `,
  skills: [
    { logo: djangologo, name: "Django" },
    { logo: awslogo, name: "AWS" },
    { logo: vuelogo, name: "Vue" },
    { logo: tailwindlogo, name: "Tailwind" },
    { logo: jslogo, name: "JavaScript" },
    { logo: pythonlogo, name: "Python" },
  ],
};

const pawjourr = {
  name: "Pawjourr",
  logo: pawjourrlogo,
  link: "https://youtu.be/YisfvX_UO3s",
  title: "SOFTWARE ENGINEER INTERN",
  date: "May 2023 - Aug 2023",
  country: "United States of America",
  description: `As a tech intern, my role included independently coding pages for the company's product and website, and working closely with the CEO and CTO to generate business and product insights.    
  &nbsp;       

  On the tech side, some of my tasks include:   
  ● Coded > 8 pages for the company's products and website using Next.js, Tailwind and GraphQL. Includes features such as filtering, pagination and form submission.    
  ● Optimising the performance of websites using lazy loading, tree shaking, server-side rendering    
  ● Developed a brief generator using OpenAI API    
  ● In-charge of migrating the company website from Next.js 12 to Next.js 13    
  &nbsp;   

On top of coding, I assisted in Product Development together with the CTO and CEO. Some responsibilities include:   
● Attending client meetings for user studies, and suggesting improvements to the tech team  
● Compiling insights from the company website and presenting suggested changes to the executive team  
● Assisting in Business Development  `,
  skills: [
    { logo: nextjslogo, name: "Next.js" },
    { logo: tailwindlogo, name: "Tailwind" },
    { logo: csslogo, name: "CSS" },
    { logo: htmllogo, name: "HTML" },
    { logo: jslogo, name: "JavaScript" },
  ],
};

const tastysnack = {
  name: "Tasty Snack",
  logo: tastysnacklogo,
  link: "https://drive.google.com/drive/folders/1sHpvGZ3a_Tq_FbXfyPhN4kR9GsUNxNYq?usp=drive_link",
  title: "MARKETING INTERN",
  date: "May 2021 - Aug 2021",
  country: "Singapore",
  description: `As a marketing intern, I was in-charge of creating daily content for the company’s instagram, and sending out monthly EDMs. The company uses Adobe Photoshop for their digital designs, and over the course of 4 months, I went from knowing close to zero about Adobe Photoshop to independently generating multiple digital assets daily.\nI was also given the opportunity to plan the content calendar for the company and work with external consultants on how to better optimize the company's marketing strategy. Through the process of trial and error over the last month of my internship, I was able to help the company create a better workflow for their marketing and was put in-charge of training the new marketing interns and hires before leaving the company.`,
};

const reapra = {
  name: "Reapra",
  logo: reapralogo,
  title: "INVESTMENT INTERN",
  date: "Feb 2020 - Jul 2020",
  country: "Singapore",
  description: `My initial responsibilities as an investment intern included sourcing for potential founders, being the initial contact point, and shadowing my superiors through the process of bringing a founder through the pipeline. Through this, I was able to learn how to engage with founders and gained a deep understanding about the global start-up ecosystem. \nI was later entrusted with the responsibility of doing the initial screening (in the form of 1-on-1 interviews) for founders who were interested in collaborating with REAPRA. I was conducting a minimum of 5 interviews every week with founders mostly based in the SEA region. \nAlthough my internship was supposed to be from February to May, the company extended an offer for me to continue working part-time with them in the same role until my school semester started in August.`,
};

export { privyr, pawjourr, tastysnack, reapra };
