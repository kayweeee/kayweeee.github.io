import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";

function ProjectCard({ project }) {
  return (
    <>
      <div className="group h-96 w-60 md:w-72 [perspective:3000px]">
        {/* front page */}
        <div className="relative h-full w-full shadow-xl transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className="absolute inset-0 h-2/3 flex flex-col [backface-visibility:hidden]">
            <img
              className="h-[240px] rounded object-cover"
              src={project.pic}
              alt={`${project.name}`}
            />
            <p className="block text-2xl font-display pt-2 px-3">
              {project.name}
            </p>
            <div className=" inline-flex gap-x-4 gap-y-2 p-3 px-3 flex-wrap">
              <p className="font-semibold text-sm pt-2">Skills: </p>
              {project.skills.map((e) => (
                <p className=" bg-light-orange rounded-lg p-1 text-sm">{e}</p>
              ))}
            </div>
          </div>

          {/* back page */}
          <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-8 text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="flex min-h-full flex-col justify-around text-start">
              <p className="text-sm md:text-md">{project.desc}</p>
              <div>
                <div className="border-2 rounded-lg opacity-25" />
                <div className="flex gap-5 pt-5">
                  {project.website ? (
                    <button
                      onClick={() => {
                        window.open(`${project.website}`);
                      }}
                      className="hover:opacity-70 transition-all duration-200"
                    >
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        size="2xl"
                        style={{ color: "#ffffff" }}
                      />
                    </button>
                  ) : null}

                  {project.github ? (
                    <button
                      onClick={() => {
                        window.open(`${project.github}`);
                      }}
                      className="hover:opacity-70 transition-all duration-200"
                    >
                      <FontAwesomeIcon
                        icon={faGithubSquare}
                        size="2xl"
                        style={{ color: "#ffffff" }}
                      />
                    </button>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
