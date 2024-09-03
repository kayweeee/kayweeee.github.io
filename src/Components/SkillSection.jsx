import SkillBadge from "./SkillBadge";

function SkillSection({ skill }) {
  return (
    <div className="max-w-[480px] border-4 border-dashed border-light-orange rounded-lg px-4 py-6 hover:bg-orange hover:border-none transition-colors">
      <p className="font-bold mb-4 text-center text-2xl">{skill.category}</p>
      <div className="flex flex-row flex-wrap gap-y-6 justify-center md:justify-start">
        {skill.skillArray.map((element, i) => (
          <SkillBadge
            logo={element.logo}
            name={element.name}
            i={i}
            key={element.name}
          />
        ))}
      </div>
    </div>
  );
}

export default SkillSection;
