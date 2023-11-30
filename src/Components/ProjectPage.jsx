import ProjectCard from "./ProjectCard";
import projects from "../utils/Projects";

function ProjectPage() {
  return (
    <div className="px-14 sm:pr-0 sm:pl-24 mt-5 mb-10">
      <div className="text-4xl sm:text-6xl font-display text-orange mb-3">
        PROJECTS
      </div>
      <div className="flex gap-4 sm:gap-8 flex-wrap justify-center sm:justify-around">
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectPage;
