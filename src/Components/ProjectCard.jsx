import me from "../images/me1.jpg";

function ProjectCard (props) {
    const name = props.name;
    const description = props.desc;
    const skills = props.skills;

    return (
        <>
            <div className="rounded-md overflow-hidden max-w-sm shadow-lg">
                <img src={me} className="w-auto"/>
                <div className="p-3 space-y-3">
                    <p className="block text-4xl font-display underline underline-offset-8 decoration-grey">{name}</p>
                    <p className="block text-md">{description}</p>
                    <div className=" inline-flex gap-4">
                        <p className="font-semibold">Skills: </p>
                        {skills.map((e) => (
                            <p className=" bg-slate-300 rounded-lg p-1">{e}</p>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectCard;