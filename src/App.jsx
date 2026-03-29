import IntroPage from "./Components/IntroPage";
import WorkExpPage from "./Components/WorkExpPage";
import ProjectPage from "./Components/ProjectPage";
import ContactSection from "./Components/ContactSection";
import NavBar from "./Components/NavBar";

function App() {
  const sections = [
    { id: "intro", label: "Me" },
    { id: "workExp", label: "Work" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      <NavBar sections={sections} />
      <main className="overflow-x-clip relative">
        {/* Background blobs */}
        <div
          className="blob w-[500px] h-[500px] bg-light-pink"
          style={{ top: "15%", left: "-10%" }}
        />
        <div
          className="blob w-[600px] h-[600px] bg-orange"
          style={{ top: "30%", right: "-15%" }}
        />
        <div
          className="blob w-[500px] h-[500px] bg-light-orange"
          style={{ top: "55%", left: "-8%" }}
        />
        <div
          className="blob w-[400px] h-[400px] bg-pink"
          style={{ top: "75%", right: "-10%" }}
        />

        <section id="intro" className="min-h-screen">
          <IntroPage />
        </section>

        <section id="workExp" className="dotted-divider">
          <WorkExpPage />
        </section>

        <section id="projects" className="dotted-divider">
          <ProjectPage />
        </section>

        <section id="contact" className="dotted-divider bg-off-white/20">
          <ContactSection />
        </section>

        <footer className="dotted-divider py-12">
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
