import ProjectCard from "./Components/ProjectCard";

function Projects () {
    
    return (
        <>
            <div className="flex justify-center items-center min-h-screen">
                <p className="text-7xl font-display -rotate-90 underline underline-offset-8">Projects</p>
                <div className="inline-flex gap-5">
                    <ProjectCard 
                    name="Dynostic"
                    desc="Developed a mobile application with machine learning capabilities to assist in quality checks, along with a dashboard to
                    compile the data collected from the app for our client (TSH Group)"
                    skills={["HTML", "Mantine", "React", "CSS"]}
                    />
                    <ProjectCard 
                    name="Dynostic"
                    desc="Developed a mobile application with machine learning capabilities to assist in quality checks, along with a dashboard to
                    compile the data collected from the app for our client (TSH Group)"
                    skills={["HTML", "Mantine", "React", "CSS"]}
                    />
                </div>
            </div>
        </>
    )
}

export default Projects;