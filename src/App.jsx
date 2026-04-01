import IntroPage from "./Components/IntroPage";
import WorkExpPage from "./Components/WorkExpPage";
import ProjectPage from "./Components/ProjectPage";
import InterestsSection from "./Components/InterestsSection";
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
        <section id="intro" className="min-h-screen relative overflow-hidden">
          <IntroPage />
          <div className="absolute inset-0 pointer-events-none">
            <svg className="absolute text-pink" style={{ top: "8%", left: "35%", opacity: 0.6 }} width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><polygon points="12,2 15,9 22,9 16,14 18,22 12,17 6,22 8,14 2,9 9,9" /></svg>
            <svg className="absolute text-orange" style={{ top: "12%", right: "28%", opacity: 0.55 }} width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><polygon points="12,2 15,9 22,9 16,14 18,22 12,17 6,22 8,14 2,9 9,9" /></svg>
            <div className="absolute w-4 h-4 rounded-full bg-orange" style={{ top: "20%", left: "22%", opacity: 0.5 }} />
            <div className="absolute w-5 h-5 rounded-full bg-pink" style={{ top: "25%", right: "18%", opacity: 0.45 }} />
            <div className="absolute w-10 h-10 rounded-full border-[2.5px] border-dashed border-pink" style={{ top: "10%", left: "15%", opacity: 0.4 }} />
            <svg className="absolute text-orange" style={{ top: "18%", left: "8%", opacity: 0.5, transform: "rotate(20deg)" }} width="44" height="14" viewBox="0 0 40 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="0" y1="6" x2="34" y2="6" /><polyline points="30,2 36,6 30,10" /></svg>
            <svg className="absolute text-light-pink" style={{ top: "30%", right: "12%", opacity: 0.5 }} width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="8" y1="2" x2="8" y2="14" /><line x1="2" y1="8" x2="14" y2="8" /></svg>
            <svg className="absolute text-orange" style={{ top: "50%", left: "10%", opacity: 0.5 }} width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><polygon points="12,2 15,9 22,9 16,14 18,22 12,17 6,22 8,14 2,9 9,9" /></svg>
            <div className="absolute w-3 h-3 rounded-full bg-light-pink" style={{ top: "55%", right: "25%", opacity: 0.45 }} />
            <div className="absolute w-12 h-12 rounded-full border-[2.5px] border-dashed border-orange" style={{ top: "60%", right: "8%", opacity: 0.35 }} />
            <svg className="absolute text-pink" style={{ top: "65%", left: "20%", opacity: 0.45 }} width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="8" y1="2" x2="8" y2="14" /><line x1="2" y1="8" x2="14" y2="8" /></svg>
            <svg className="absolute text-pink" style={{ top: "45%", right: "22%", opacity: 0.35 }} width="48" height="16" viewBox="0 0 50 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M2 8 Q8 2, 14 8 T26 8 T38 8 T50 8" /></svg>
            <svg className="absolute text-pink" style={{ top: "75%", left: "30%", opacity: 0.5 }} width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><polygon points="12,2 15,9 22,9 16,14 18,22 12,17 6,22 8,14 2,9 9,9" /></svg>
            <div className="absolute w-4 h-4 rounded-full bg-orange" style={{ top: "80%", right: "20%", opacity: 0.45 }} />
            <div className="absolute w-8 h-8 rounded-full border-[2.5px] border-dashed border-pink" style={{ top: "85%", left: "12%", opacity: 0.35 }} />
            <svg className="absolute text-orange" style={{ top: "90%", right: "15%", opacity: 0.5, transform: "rotate(-10deg) scaleX(-1)" }} width="40" height="14" viewBox="0 0 40 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="0" y1="6" x2="34" y2="6" /><polyline points="30,2 36,6 30,10" /></svg>
          </div>
        </section>

        <section id="workExp" className="dotted-divider relative overflow-hidden">
          <WorkExpPage />
          <div className="absolute inset-0 pointer-events-none">
            <svg className="absolute text-pink" style={{ top: "10%", right: "12%", opacity: 0.55 }} width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><polygon points="12,2 15,9 22,9 16,14 18,22 12,17 6,22 8,14 2,9 9,9" /></svg>
            <svg className="absolute text-orange" style={{ top: "30%", left: "8%", opacity: 0.5 }} width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><polygon points="12,2 15,9 22,9 16,14 18,22 12,17 6,22 8,14 2,9 9,9" /></svg>
            <div className="absolute w-4 h-4 rounded-full bg-orange" style={{ top: "20%", right: "22%", opacity: 0.5 }} />
            <div className="absolute w-3 h-3 rounded-full bg-pink" style={{ top: "55%", left: "15%", opacity: 0.45 }} />
            <div className="absolute w-8 h-8 rounded-full border-[2.5px] border-dashed border-pink" style={{ top: "40%", right: "6%", opacity: 0.35 }} />
            <svg className="absolute text-orange" style={{ top: "65%", left: "5%", opacity: 0.5, transform: "rotate(15deg)" }} width="40" height="14" viewBox="0 0 40 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="0" y1="6" x2="34" y2="6" /><polyline points="30,2 36,6 30,10" /></svg>
            <svg className="absolute text-pink" style={{ top: "50%", left: "25%", opacity: 0.35 }} width="48" height="16" viewBox="0 0 50 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M2 8 Q8 2, 14 8 T26 8 T38 8 T50 8" /></svg>
            <svg className="absolute text-light-pink" style={{ top: "75%", right: "18%", opacity: 0.5 }} width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="8" y1="2" x2="8" y2="14" /><line x1="2" y1="8" x2="14" y2="8" /></svg>
            <div className="absolute w-5 h-5 rounded-full bg-light-orange" style={{ top: "85%", left: "10%", opacity: 0.4 }} />
          </div>
        </section>

        <section id="projects" className="dotted-divider bg-light-pink/10 relative overflow-hidden">
          <ProjectPage />
          <div className="absolute inset-0 pointer-events-none">
            <svg className="absolute text-orange" style={{ top: "10%", left: "12%", opacity: 0.55 }} width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><polygon points="12,2 15,9 22,9 16,14 18,22 12,17 6,22 8,14 2,9 9,9" /></svg>
            <svg className="absolute text-pink" style={{ top: "45%", right: "10%", opacity: 0.5 }} width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><polygon points="12,2 15,9 22,9 16,14 18,22 12,17 6,22 8,14 2,9 9,9" /></svg>
            <div className="absolute w-4 h-4 rounded-full bg-orange" style={{ top: "25%", right: "18%", opacity: 0.5 }} />
            <div className="absolute w-3 h-3 rounded-full bg-pink" style={{ top: "65%", left: "8%", opacity: 0.45 }} />
            <div className="absolute w-10 h-10 rounded-full border-[2.5px] border-dashed border-orange" style={{ top: "15%", right: "5%", opacity: 0.35 }} />
            <svg className="absolute text-orange" style={{ top: "55%", left: "6%", opacity: 0.45 }} width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="8" y1="2" x2="8" y2="14" /><line x1="2" y1="8" x2="14" y2="8" /></svg>
            <svg className="absolute text-pink" style={{ top: "35%", left: "20%", opacity: 0.4, transform: "rotate(-10deg) scaleX(-1)" }} width="44" height="14" viewBox="0 0 40 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="0" y1="6" x2="34" y2="6" /><polyline points="30,2 36,6 30,10" /></svg>
            <svg className="absolute text-orange" style={{ top: "75%", right: "20%", opacity: 0.35 }} width="48" height="16" viewBox="0 0 50 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M2 8 Q8 2, 14 8 T26 8 T38 8 T50 8" /></svg>
            <div className="absolute w-5 h-5 rounded-full bg-light-pink" style={{ top: "85%", left: "18%", opacity: 0.4 }} />
          </div>
        </section>

        <section className="dotted-divider relative overflow-hidden">
          <InterestsSection />
          <div className="absolute inset-0 pointer-events-none">
            <svg className="absolute text-pink" style={{ top: "15%", left: "10%", opacity: 0.55 }} width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><polygon points="12,2 15,9 22,9 16,14 18,22 12,17 6,22 8,14 2,9 9,9" /></svg>
            <svg className="absolute text-orange" style={{ top: "40%", right: "15%", opacity: 0.5 }} width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><polygon points="12,2 15,9 22,9 16,14 18,22 12,17 6,22 8,14 2,9 9,9" /></svg>
            <div className="absolute w-4 h-4 rounded-full bg-orange" style={{ top: "30%", left: "25%", opacity: 0.5 }} />
            <div className="absolute w-3 h-3 rounded-full bg-light-pink" style={{ top: "60%", right: "10%", opacity: 0.45 }} />
            <div className="absolute w-8 h-8 rounded-full border-[2.5px] border-dashed border-pink" style={{ top: "20%", right: "8%", opacity: 0.35 }} />
            <svg className="absolute text-pink" style={{ top: "50%", right: "25%", opacity: 0.45, transform: "rotate(-15deg) scaleX(-1)" }} width="40" height="14" viewBox="0 0 40 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="0" y1="6" x2="34" y2="6" /><polyline points="30,2 36,6 30,10" /></svg>
            <svg className="absolute text-light-pink" style={{ top: "70%", left: "18%", opacity: 0.5 }} width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="8" y1="2" x2="8" y2="14" /><line x1="2" y1="8" x2="14" y2="8" /></svg>
          </div>
        </section>

        <section id="contact" className="dotted-divider bg-light-orange/10 relative overflow-hidden">
          <ContactSection />
          <div className="absolute inset-0 pointer-events-none">
            <svg className="absolute text-light-orange" style={{ top: "15%", left: "20%", opacity: 0.55 }} width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><polygon points="12,2 15,9 22,9 16,14 18,22 12,17 6,22 8,14 2,9 9,9" /></svg>
            <svg className="absolute text-pink" style={{ top: "40%", right: "12%", opacity: 0.5 }} width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><polygon points="12,2 15,9 22,9 16,14 18,22 12,17 6,22 8,14 2,9 9,9" /></svg>
            <div className="absolute w-4 h-4 rounded-full bg-orange" style={{ top: "25%", right: "25%", opacity: 0.5 }} />
            <div className="absolute w-3 h-3 rounded-full bg-pink" style={{ top: "55%", left: "10%", opacity: 0.45 }} />
            <div className="absolute w-8 h-8 rounded-full border-[2.5px] border-dashed border-orange" style={{ top: "30%", left: "8%", opacity: 0.35 }} />
            <svg className="absolute text-orange" style={{ top: "65%", right: "8%", opacity: 0.45, transform: "rotate(-10deg)" }} width="40" height="14" viewBox="0 0 40 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="0" y1="6" x2="34" y2="6" /><polyline points="30,2 36,6 30,10" /></svg>
          </div>
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
