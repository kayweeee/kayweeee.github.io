import NavBar from "./Components/NavBar";
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
      <NavBar/> 
      <div className="flex flex-col justify-center items-center h-screen">
        <p className="text-5xl md:text-7xl font-display">KAY WEE</p>
        <p>all things design</p>
      </div>

      <div className="h-screen grid grid-rows-2 md:grid-cols-2 md:gap-10 px-8 md:px-14 bg-slate-300">
        <div className="flex items-center justify-center leading-normal text-5xl md:text-7xl font-display">
          <p>Curious,<br/>
          Ambitious,<br/>
          Passionate</p>
        </div>
        <div className="flex items-start justify-center">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
      </div>

      <div className="h-screen">
        <p className="p-5 text-5xl md:text-7xl font-display">Skills</p>
        <div className="grid grid-cols-4 md:grid-cols-6 gap-6 md:gap-14 px-5 py-3">
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
          <div className="flex flex-col justify-center items-center">
            <img src={pythonlogo}/>
            <p>Python</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={reactlogo}/>
            <p>React</p>
          </div>
          <div className="flex flex-col justify-center items-center">
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

        <div className="flex justify-end p-5">
          <p>... with more in progress</p>
        </div>
      </div>

      <div className="h-screen flex flex-col items-center justify-center">
        <p>I am always doing that which I cannot do, in order that I may learn how to do it.</p>
        <p className=" text-end">- Pablo Picasso</p>
      </div>
    </>
  )
};

export default App;