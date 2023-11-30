import americanflag from "../images/work-logos/american_flag.png";
import WorkCard from "./WorkCard";
import { pawjourr, tastysnack, reapra } from "../utils/Work";

function WorkExpPage() {
  return (
    <div className="px-14 sm:pr-0 sm:pl-24 mt-5 mb-10">
      <div className="text-4xl sm:text-6xl font-display text-orange">
        WORK EXPERIENCE
      </div>

      <div className="flex flex-col gap-5">
        {/* PAWJOURR */}
        <div className="relative">
          <WorkCard company={pawjourr} />
          <img
            className="hidden md:block w-[150px] absolute right-8 top-64"
            src={americanflag}
            alt="american flag"
          />
        </div>

        {/* TASTYSNACK */}
        <WorkCard company={tastysnack} />

        {/* REAPRA */}
        <WorkCard company={reapra} />
      </div>
    </div>
  );
}

export default WorkExpPage;
