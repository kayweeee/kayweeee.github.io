import IntroPage from "./Components/IntroPage";
import WorkExpPage from "./Components/WorkExpPage";
import ProjectPage from "./Components/ProjectPage";
import SkillPage from "./Components/SkillPage";
import NavBar from "./Components/NavBar";

function App() {
  const sections = [
    { id: "intro", label: "Me" },
    { id: "workExp", label: "Work" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
  ];

  return (
    <>
      <NavBar sections={sections} />
      <main className="overflow-x-clip">
        <section id="intro" className="min-h-screen">
          <IntroPage />
        </section>

        <section id="workExp" className="border-t border-border-subtle">
          <WorkExpPage />
        </section>

        <section id="projects" className="border-t border-border-subtle bg-off-white/30">
          <ProjectPage />
        </section>

        <section id="skills" className="border-t border-border-subtle">
          <SkillPage />
        </section>

        <footer className="border-t border-border-subtle py-12">
          <div className="section-container text-center">
            <p className="text-sm text-gray-400">
              Designed & built by{" "}
              <span className="font-display text-orange">Kay Wee</span>
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}

export default App;
