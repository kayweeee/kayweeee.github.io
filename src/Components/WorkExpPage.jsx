import WorkCard from "./WorkCard";
import { pawjourr, tastysnack, reapra, privyr } from "../utils/Work";

function WorkExpPage() {
  return (
    <div className="px-14 md:pr-0 md:pl-44 md:my-10 my-8">
      <div className="text-4xl md:text-6xl font-display text-orange mb-5 md:mb-3 text-center md:text-start">
        WORK EXPERIENCE
      </div>

      <div className="flex flex-col gap-10 sm:gap-5">
        {/* PRIVYR */}
        <WorkCard company={privyr} />

        {/* PAWJOURR */}
        <WorkCard company={pawjourr} />

        {/* TASTYSNACK */}
        <WorkCard company={tastysnack} />

        {/* REAPRA */}
        <WorkCard company={reapra} />
      </div>
    </div>
  );
}

export default WorkExpPage;
