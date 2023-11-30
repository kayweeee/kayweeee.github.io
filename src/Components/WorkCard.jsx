import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function WorkCard({ company }) {
  const newDesc = company.description.split("\n").map((str) => <p>{str}</p>);

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-center gap-x-3 relative">
        <img
          className="w-[150px] object-contain drop-shadow-xl"
          src={company.logo}
          alt={company.name}
        />

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

      <div className="mt-3 sm:mt-0 sm:w-3/5 sm:ml-36 sm:pr-10">{newDesc}</div>
    </div>
  );
}

export default WorkCard;
