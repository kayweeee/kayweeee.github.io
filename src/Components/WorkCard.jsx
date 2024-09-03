import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactMarkdown from "react-markdown";

function WorkCard({ company }) {
  return (
    <div>
      <div className="flex flex-col sm:flex-row items-center gap-x-6 relative">
        <div className="w-[150px] flex justify-center">
          <img
            className="w-[80px] object-contain drop-shadow-xl"
            src={company.logo}
            alt={company.name}
          />
        </div>

        <div className="sm:w-full text-center sm:text-start">
          <div className="flex justify-center sm:justify-start items-center gap-3">
            <p className="text-2xl font-bold">{company.name}</p>
            {company.link ? (
              <button onClick={() => window.open(`${company.link}`)}>
                <FontAwesomeIcon icon={faLink} style={{ color: "#ffb5a7" }} />
              </button>
            ) : null}
          </div>

          <div className="bg-orange h-[3px]" />
          <p>{company.title}</p>
          <p className="italic">{company.date}</p>
          <p className="italic">{company.country}</p>
        </div>
      </div>

      <div className="mt-3 sm:px-0 px-10 w-screen sm:w-3/5 sm:ml-36 sm:pr-10">
        <ReactMarkdown>{company.description}</ReactMarkdown>
        {company.skills ? (
          <div className="hidden sm:flex flex-col mt-6">
            <p className="underline underline-offset-2">Skills</p>
            <div className="flex flex-row gap-x-5 mt-2">
              {company.skills.map((skill, index) => (
                <div className="flex flex-col justify-center items-center w-20">
                  <img
                    key={index}
                    src={skill.logo}
                    alt={skill.name}
                    className="h-[55px] object-contain"
                  />
                  <p className="text-xs">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default WorkCard;
