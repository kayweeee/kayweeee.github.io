import ProjectCard from "./Components/ProjectCard";
import me from "./images/me1.jpg"

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
                        desc="Developed a mobile application with machine learning capabilities to assist in quality checks, along with a dashboard to
                        compile the data collected from the app for our client (TSH Group)"
                        skills={["HTML", "Mantine", "React", "CSS", "JavaScript"]}
                        github="https://github.com/kayweeee/final-project-dynos-team10"
                        website="https://sites.google.com/view/group10dynostic/home?pli=1"
                        pic={me}
                        />
                    </div>
                   
                </div>
            </div>
        </>
    )
}

export default Projects;