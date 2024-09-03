import skills from "../utils/Skills";
import SkillSection from "./SkillSection";

function SkillPage() {
  return (
    <div className="flex flex-col justify-center px-5 md:px-0 my-5">
      <div className="flex flex-col">
        <div className="text-4xl sm:text-6xl font-display text-orange text-center md:text-start mb-5 md:mb-0">
          SKILLS
        </div>
        <div className="bg-orange my-2 h-[5px] w-screen hidden md:block" />
      </div>
      <div className="flex flex-col md:flex-row flex-wrap md:gap-x-24 gap-y-10">
        {skills.map((skill, index) => (
          <SkillSection skill={skill} key={index} />
        ))}
      </div>
    </div>
  );
}

export default SkillPage;
