function EduCard (props) {
    const school = props.school;
    const major = props.major;
    const time = props.time;
    const desc = props.desc;

    return (
        <div className="flex flex-col hover:shadow-lg rounded p-2">
            <p className=" font-bold text-xl">
                {school}
            </p>
            <p className="text-sm">
                {major}
            </p>
            <p className=" italic text-sm">
                {time}
            </p>
            <div className="pt-1">
                <p>
                    {desc}
                </p>
            </div>
        </div>
    )
}

export default EduCard;