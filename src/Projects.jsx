import ProjectCard from "./Components/ProjectCard";
import sds from "./images/sds.jpg"
import hci from "./images/hci.png"

function Projects () {
    
    return (
        <>
            <div className="flex flex-col justify-center">
                <div className="text-2xl md:text-4xl underline underline-offset-8 pl-10 md:pl-16 pb-4 md:py-8 font-display">
                     Projects
                </div>
                <div className="grid grid-col-8 gap-x-10 px-10">
                    <div className=" col-span-2 col-start-2">
                        <ProjectCard 
                        name="Dynostic"
                        desc="A module in school done in collaboration with Google. Developed a mobile application with machine learning capabilities to assist in quality checks, along with a dashboard to
                        compile the data collected from the app for our client (TSH Group)"
                        skills={["HTML", "Mantine", "React", "CSS", "JavaScript", "Machine Learning"]}
                        github="https://github.com/kayweeee/final-project-dynos-team10"
                        website="https://sites.google.com/view/group10dynostic/home?pli=1"
                        pic={sds}
                        />
                    </div>
                    <div className=" col-span-2 col-start-4">
                        <ProjectCard 
                        name="Weightlifting Buddy"
                        desc="Developed a web application with the capability to detect incorrect form
                        during physical exercises using AI. Conducted in-depth user testing and user studies to fine-tune the design of the app"
                        skills={["UI/UX", "User testing", "HTML", "Mantine", "React", "Machine Learning"]}
                        github="https://github.com/kayweeee/WeightliftBuddy"
                        website="https://youtu.be/CtGs5C-of20"
                        pic={hci}
                        />
                    </div>
                   
                </div>
            </div>
        </>
    )
}

export default Projects;