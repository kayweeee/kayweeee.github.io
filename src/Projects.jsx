import ProjectCard from "./Components/ProjectCard";
import sds from "./images/sds.jpg"
import hci from "./images/hci.png"
import cfg from "./images/cfglogo.png"

function Projects () {
    
    return (
        <>
            <div className="flex flex-col justify-center pb-10">
                <div className="text-2xl md:text-4xl underline underline-offset-8 pl-10 md:pl-16 pb-4 md:py-8 pt-8 font-display">
                     Projects
                </div>
                <div className="flex flex-col items-center md:grid md:grid-col-8 md:gap-x-10 md:pr-8 gap-y-10">
                    <div className=" md:col-span-2 md:col-start-2">
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
                    <div className=" md:col-span-2 md:col-start-4">
                        <ProjectCard 
                        name="Weightlifting Buddy"
                        desc="Developed a web application with the capability to detect incorrect form
                        during physical exercises using AI. Conducted in-depth user testing and user studies to fine-tune the design of the app"
                        skills={["UI/UX", "User testing", "Prototyping", "React", "Machine Learning"]}
                        github="https://github.com/kayweeee/WeightliftBuddy"
                        website="https://youtu.be/CtGs5C-of20"
                        pic={hci}
                        />
                    </div>
                    <div className=" md:col-span-2 md:col-start-6">
                        <ProjectCard 
                        name="Code for Good"
                        desc="During my time in University of California, Berkeley Extension, I joined the Code for Good club. Together with my team,
                        we were tasked with building the Code for Good website from scratch."
                        skills={["UI/UX", "Prototyping", "HTML", "CSS", "Bootstrap"]}
                        github="https://github.com/kayweeee/WeightliftBuddy"
                        website=""
                        pic={cfg}
                        />
                    </div>


                    <div className=" md:col-span-2 md:col-start-2">
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
                   
                </div>
            </div>
        </>
    )
}

export default Projects;