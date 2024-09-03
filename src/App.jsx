import IntroPage from "./Components/IntroPage";
import WorkExpPage from "./Components/WorkExpPage";
import ProjectPage from "./Components/ProjectPage";
import SkillPage from "./Components/SkillPage";
import NavBar from "./Components/NavBar";

function App() {
  const sections = [
    { id: "intro", label: "ME" },
    { id: "workExp", label: "WORK" },
    { id: "projects", label: "PROJECTS" },
    { id: "skills", label: "SKILLS" },
  ];
  return (
    <>
      <NavBar sections={sections} />
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll overflow-x-clip scrollbar-hide scroll-smooth">
        {/* intro screen */}
        <div className="snap-start h-screen flex justify-center" id="intro">
          <IntroPage />
        </div>

        {/* work screen */}
        <div className="snap-start h-fit flex justify-center" id="workExp">
          <WorkExpPage />
        </div>

        {/* projects screen */}
        <div className="snap-start min-h-screen h-fit flex" id="projects">
          <ProjectPage />
        </div>

        {/* education screen */}

        {/* skill screen */}
        <div
          className="snap-start flex h-fit min-h-screen sm:pl-44"
          id="skills"
        >
          <SkillPage />
        </div>
      </div>
    </>
  );
}

export default App;
