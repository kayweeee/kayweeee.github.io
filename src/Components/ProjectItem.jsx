import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";

function ProjectItem({ project, reversed = false }) {
  return (
    <div
      className={`flex flex-col ${
        reversed ? "lg:flex-row-reverse" : "lg:flex-row"
      } gap-6 lg:gap-10 items-stretch`}
    >
      {/* Image */}
      <div className="lg:w-1/2 flex-shrink-0">
        <div className="relative overflow-hidden rounded-card aspect-[16/10] lg:aspect-[4/3]">
          <img
            src={project.pic}
            alt={project.name}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            loading="lazy"
          />
        </div>
      </div>

      {/* Details */}
      <div className="lg:w-1/2 flex flex-col justify-center">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="text-2xl sm:text-3xl font-display text-gray-900">
            {project.name}
          </h3>
          <div className="flex items-center gap-3 flex-shrink-0 pt-1">
            {project.website && (
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-border-medium flex items-center 
                           justify-center text-gray-400 hover:text-orange hover:border-orange 
                           transition-all duration-200"
                aria-label={`Visit ${project.name} website`}
              >
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-border-medium flex items-center 
                           justify-center text-gray-400 hover:text-orange hover:border-orange 
                           transition-all duration-200"
                aria-label={`View ${project.name} on GitHub`}
              >
                <FontAwesomeIcon icon={faGithubSquare} size="sm" />
              </a>
            )}
          </div>
        </div>

        <p className="text-gray-500 leading-relaxed mb-6 text-sm sm:text-base">
          {project.desc}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider 
                         rounded-full bg-surface border border-border-subtle text-gray-600"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
