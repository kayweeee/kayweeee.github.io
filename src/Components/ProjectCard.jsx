import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";

function ProjectCard (props) {
    const name = props.name;
    const description = props.desc;
    const skills = props.skills;
    const github = props.github;
    const website = props.website;
    const pic = props.pic;

    return (
        <>
            <div class="group h-96 w-80 [perspective:1500px]">
                {/* front page */}
                <div class="relative h-full w-full shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div class="absolute inset-0 h-2/3 flex flex-col [backface-visibility:hidden]">
                        <img class="h-full w-full rounded object-cover" src={pic} />
                        <p className="block text-2xl font-display underline underline-offset-4 pt-2 px-3">{name}</p>
                        <div className=" inline-flex gap-x-4 gap-y-2 p-3 px-3 flex-wrap">
                        <p className="font-semibold text-sm pt-2">Skills: </p>
                        {skills.map((e) => (
                            <p className=" bg-slate-300 rounded-lg p-1 text-sm">{e}</p>
                        ))}
                    </div>
                    </div>
                    {/* back page */}
                    <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-8 text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div class="flex min-h-full flex-col justify-around text-start">
                        <p class="text-lg">{description}</p>
                        <div>
                            <div className="border-2 rounded-lg opacity-25"/>
                                <div className="flex gap-5 pt-5">
                                    <button
                                    onClick={() => {
                                    window.open(`${website}`)
                                    }}
                                    >
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="2xl" style={{color: "#ffffff",}} />
                                    </button>

                                    <button
                                    onClick={() => {
                                    window.open(`${github}`)
                                    }}>
                                        <FontAwesomeIcon icon={faGithubSquare} size="2xl" style={{color: "#ffffff",}} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectCard;