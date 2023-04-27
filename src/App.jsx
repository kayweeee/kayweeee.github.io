import TypeIt from "typeit-react";
import { motion } from "framer-motion";

// logos
import csslogo from "./images/skill-logos/css_logo.png";
import htmllogo from "./images/skill-logos/html_logo.png";
import jslogo from "./images/skill-logos/js_logo.png";
import reactlogo from "./images/skill-logos/react_logo.png";
import pythonlogo from "./images/skill-logos/python_logo.png";
import githublogo from "./images/skill-logos/github_logo.png";
import bootstraplogo from "./images/skill-logos/bootstrap_logo.png";
import tailwindlogo from "./images/skill-logos/tailwind_logo.png";

const skills = [{logo: csslogo, name: "HTML"}, 
                {logo: htmllogo, name: "HTML"},
                {logo: jslogo, name: "JavaScript"},
                {logo: reactlogo, name: "React"},
                {logo: pythonlogo, name: "Python"},
                {logo: githublogo, name: "Github"},
                {logo: bootstraplogo, name: "Bootstrap"},
                {logo: tailwindlogo, name: "Tailwind"},
              ]

const floatInVariants = {
  hidden:{
    opacity: 0, 
    scale: 0.5, 
    y:200
  },

  visible: {
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: {duration: 1.5, type:"spring"},
  }
}

const logoInVariants = {
  hidden:{
    opacity: 0, 
    scale: 0.5, 
    y:200
  },

  visible: {
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: {duration: 1.5, type:"spring", delay: 1},
  }

}



function App () {
  return (
    <>
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll overflow-x-clip">

        {/* intro screen */}
        <div className="snap-start h-screen flex flex-col justify-center items-center">
          <p className="text-5xl md:text-7xl font-display" >KAY WEE</p>
          <p>all things design</p>
        </div>

        {/* about screen */}
        <div className="snap-start h-screen flex flex-col justify-center space-y-5 md:grid md:grid-cols-2 md:gap-10 px-8 md:px-14 bg-grey">
          <div className="md:relative h-full flex items-center justify-center leading-normal md:leading-relaxed text-5xl md:text-7xl font-display">
            <TypeIt
            options={{
              speed: 150, 
              lifeLike: true,
              waitUntilVisible: true,
            }}
            className=""
            >Curious,<br/>
            Ambitious,<br/>
            Passionate.
            </TypeIt>
          </div>
          <motion.div className="flex flex-col items-start justify-center gap-2"
            variants={floatInVariants}
            initial='hidden'
            whileInView='visible'          
          >
            <p className="font-bold text-start text-xl text-gray-400">
              Aspiring Software Engineer
            </p>
            <p>
            Frontend development calls to all my passions. 
            It combines creativity with problem solving in the form of coding, giving me the best of both worlds. I love the process of not just designing something that enhances others' lives, but also the satisfaction of being able to build it from zero. 
            Looking to use technology to create a positive impact on our big earth :)
            </p>
          </motion.div>
        </div>
        
        {/* skill screen */}
        <div className="snap-start flex flex-col justify-center h-screen">
          {/* <div className="p-5 md:p-8">
            <p className="text-2xl md:text-5xl font-display">
              Skills
            </p>
          </div> */}
          <div className="text-2xl md:text-4xl underline underline-offset-8 pl-10 md:pl-16 pb-4 md:pb-8 font-display">
              Skills
          </div>
          <div className="grid grid-cols-4 md:grid-cols-6 gap-6 md:gap-x-20 px-5 md:px-16 pb-10">
            {skills.map((element, i) => (
               <motion.div 
                className="flex flex-col justify-center items-center py-0"
                initial={{
                  opacity: 0, 
                  scale: 0.5, 
                  y:50
                  }}
                whileInView={{
                  opacity: 1, 
                  scale: 1, 
                  y: 0,
                }}
              transition={{duration: 0.7, type:"spring", delay: i*0.3}}
               >
                 <img src={element.logo}/>
                 <p>{element.name}</p>
               </motion.div>
            ))}

            <div className=" flex items-end justify-end col-span-2 col-start-3 md:col-start-5 p-5 md:px-10">
              <p>... with more in progress</p>
            </div>
          </div>

        </div>

      </div>
    </>
  )
};

export default App;