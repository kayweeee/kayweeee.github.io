import NavBar from "./Components/NavBar";
import TypeIt from "typeit-react";

// logos
import csslogo from "./images/css_logo.png";
import htmllogo from "./images/html_logo.png";
import jslogo from "./images/js_logo.png";
import reactlogo from "./images/react_logo.png";
import pythonlogo from "./images/python_logo.png";
import githublogo from "./images/github_logo.png";
import bootstraplogo from "./images/bootstrap_logo.png";
import tailwindlogo from "./images/tailwind_logo.png";

function App () {

  return (
    <>
      <div className="snap-y snap-mandatory h-screen overflow-scroll">

        {/* intro screen */}
        <div className="snap-start h-screen flex flex-col justify-center items-center">
          <p className="text-5xl md:text-7xl font-display">KAY WEE</p>
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
          <div className="flex flex-col items-start justify-center gap-2">
          <p className="font-bold text-start text-xl text-gray-400">
            Aspiring Software Engineer
          </p>
          <p>
          Frontend development calls to all my passions. 
          It combines creativity with problem solving in the form of coding, giving me the best of both worlds. I love the process of not just designing something that enhances others' lives, but also the satisfaction of being able to build it from zero. 
          Looking to use technology to create a positive impact on our big earth :)
          </p>
          </div>
        </div>
        
        {/* skill screen */}
        <div className="snap-start flex flex-col justify-center md:block">
          <div className="p-5 md:p-10">
            <p className="text-5xl md:text-7xl font-display">
              Skills
            </p>
          </div>
          <div className="grid grid-cols-4 md:grid-cols-6 gap-6 md:gap-14 px-5 md:px-10 py-3 ">
            <div className="flex flex-col justify-center items-center py-0">
              <img src={htmllogo}/>
              <p>HTML</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img src={csslogo}/>
              <p>CSS</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img src={jslogo}/>
              <p>JavaScript</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-5">
              <img src={pythonlogo}/>
              <p>Python</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-6">
              <img src={reactlogo}/>
              <p>React</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-5">
              <img src={githublogo}/>
              <p>Github</p>
            </div>
            <div className="flex flex-col justify-between items-center">
              <img src={bootstraplogo}/>
              <p>Bootstrap</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img src={tailwindlogo}/>
              <p>Tailwind</p>
            </div>
          </div>

          <div className="flex justify-end p-5 md:px-10">
            <p>... with more in progress</p>
          </div>
        </div>

      </div>
    </>
  )
};

export default App;