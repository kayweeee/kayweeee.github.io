import { motion } from "framer-motion";
import me from "./images/pictures/me.png";
import SkillBadge from "./Components/SkillBadge";
import skills from "./utils/Skills";

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
        <div className="snap-start h-screen flex flex-col sm:flex-row justify-center items-center gap-x-8 py-3">
          <div className="sm:w-2/5 flex justify-center sm:justify-end">
            <img
              className="h-[250px] sm:h-[400px] drop-shadow-xl"
              src={me}
              alt="kay wee"
            />
          </div>
          <div className="sm:w-3/5 flex flex-col items-center sm:items-start text-center sm:text-start">
            <p className="text-4xl sm:text-7xl font-display text-orange">
              KAY WEE
            </p>
            <div className="bg-orange my-2 h-[5px] w-1/2 sm:w-full" />
            <p className="font-semibold">ASPIRING FULLSTACK DEVELOPER</p>
            <p className="px-8 sm:px-0 pr-2 sm:w-96">
              Software development calls to all my passions. It combines
              creativity with problem solving in the form of coding, giving me
              the best of both worlds. Looking to use technology to create a
              positive impact on our big earth :)
            </p>
          </div>
        </div>

        {/* skill screen */}
        <div className="snap-start flex flex-col justify-center pl-14 h-screen">
          <div className="text-4xl sm:text-7xl font-display text-orange">
            SKILLS
          </div>
          <div className="flex flex-row flex-wrap gap-x-6 gap-y-5 mt-5">
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
