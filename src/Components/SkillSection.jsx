import SkillBadge from "./SkillBadge";

function SkillSection({ skill, span = "" }) {
  return (
    <div
      className={`card-base p-5 sm:p-6 ${span}`}
    >
      <h3 className="text-xs font-semibold text-orange uppercase tracking-widest mb-4">
        {skill.category}
      </h3>
      <div className="flex flex-wrap gap-1 sm:gap-2">
        {skill.skillArray.map((element, i) => (
          <SkillBadge
            logo={element.logo}
            name={element.name}
            index={i}
            key={element.name}
          />
        ))}
      </div>
    </div>
  );
}

export default SkillSection;
