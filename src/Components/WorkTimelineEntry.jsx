import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

function parseDescription(text) {
  if (!text) return [];

  const cleaned = text.replace(/&nbsp;/g, "\n").replace(/\\n/g, "\n");

  if (cleaned.includes("●")) {
    const sections = cleaned.split(/(?=●)/g);
    return sections
      .map((s) => s.replace(/^●\s*/, "").trim())
      .filter(Boolean);
  }

  return cleaned
    .split("\n")
    .map((s) => s.trim())
    .filter((s) => s.length > 0);
}

function WorkTimelineEntry({ company, isLast }) {
  const bullets = parseDescription(company.description);

  return (
    <div className="relative flex gap-5 sm:gap-6">
      {/* Timeline column */}
      <div className="flex flex-col items-center flex-shrink-0 pt-0.5">
        <div
          className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-card bg-white 
                     border-2 border-dashed border-border-medium flex items-center justify-center 
                     shadow-sm overflow-hidden p-2"
        >
          <img
            src={company.logo}
            alt={company.name}
            className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
          />
        </div>
        {!isLast && (
          <div className="w-px flex-1 border-l-2 border-dashed border-border-medium min-h-[32px]" />
        )}
      </div>

      {/* Content */}
      <div className={`flex-1 ${!isLast ? "pb-12 sm:pb-16" : ""}`}>
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-0.5 sm:gap-6 mb-4">
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                {company.name}
              </h3>
              {company.link && (
                <a
                  href={company.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-orange transition-colors flex-shrink-0"
                  aria-label={`Visit ${company.name}`}
                >
                  <FontAwesomeIcon icon={faLink} size="sm" />
                </a>
              )}
            </div>
            <p className="text-sm font-bold text-orange mt-0.5">
              {company.title}
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-500 font-medium flex-shrink-0 sm:pt-1">
            <span>{company.date}</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span>{company.country}</span>
          </div>
        </div>

        {/* Tech stack */}
        {company.skills && company.skills.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {company.skills.map((skill) => (
              <div
                key={skill.name}
                className="sticker-sm flex items-center gap-1.5"
              >
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-4 h-4 object-contain"
                />
                <span className="text-xs font-semibold text-gray-700">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Bullets */}
        <ul className="space-y-2.5">
          {bullets.map((bullet, i) => (
            <li
              key={i}
              className="flex gap-3 text-sm text-gray-600 leading-relaxed"
            >
              <span className="mt-[7px] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-orange" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default WorkTimelineEntry;
