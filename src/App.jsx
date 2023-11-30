import { motion } from "framer-motion";
import SkillBadge from "./Components/SkillBadge";
import skills from "./utils/Skills";
import IntroPage from "./Components/IntroPage";
import WorkExpPage from "./Components/WorkExpPage";
const floatInVariants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
    y: 200,
  },

  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 1.5, type: "spring" },
  },
};

function App() {
  return (
    <>
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll overflow-x-clip">
        {/* intro screen */}
        <div className="snap-start h-screen flex justify-center">
          <IntroPage />
        </div>

        {/* about me screen */}
        <div className="snap-start h-fit flex justify-center">
          <WorkExpPage />
        </div>

        {/* skill screen */}
        <div className="snap-start flex flex-col justify-center h-auto min-h-screen sm:pl-24 ">
          <div className="flex flex-col mt-5 pl-14 sm:pl-0">
            <div className="text-4xl sm:text-6xl font-display text-orange pr-10">
              SKILLS
            </div>
            <div className="bg-orange my-2 h-[5px] w-full" />
          </div>
          <div className="flex flex-row flex-wrap gap-x-6 gap-y-5 mt-3 justify-center sm:justify-start my-5">
            {skills.map((element, i) => (
              <SkillBadge
                logo={element.logo}
                name={element.name}
                i={i}
                key={element.name}
              />
            ))}
            <div className=" flex items-end justify-end col-span-2 col-start-3 md:col-start-5 p-5 md:px-10">
              <p>... with more in progress</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
