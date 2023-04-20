import pic1 from "./images/me1.jpg";

function About () {

    return(
        <>
        <div className="snap-y snap-mandatory h-screen overflow-scroll">
            <div className="snap-start h-screen w-screen overflow-hidden flex flex-col justify-center items-center gap-4">
                <p className="text-3xl md:text-4xl underline underline-offset-8 font-display pb-3">About Me</p>
                <div className="flex flex-col justify-center items-center md:flex-row md:gap-5 md:px-10">
                    <div className="w-3/4 md:w-1/2">
                        <img src={pic1}
                        className="rounded"
                        />
                    </div>
                    <div className="w-3/4 md:w-1/2">
                        <p className="text-2xl text-grey font-display pt-3 pb-2">explorer and learner</p>
                        <p className="text-md">hi! welcome to my website, where i document my journey  to becoming a full-stack software engineer. </p>
                    </div>
                </div>
            </div>
            
            <div className="snap-start h-screen flex flex-col justify-center items-center bg-grey">
                <p>Education</p>
                <div className="grid grid-cols-2 gap-4">
                    <div className="w-1/2 flex justify-center items-center">
                        hi
                    </div>
                    <div className="col-span-1">
                        hi
                    </div>
                </div>
            </div>

            <div className="snap-start h-screen flex flex-col justify-center items-center">
                <p>Work Experience</p>
            </div>

            <div className="snap-start h-screen flex flex-col justify-center items-center bg-grey">
                <p>Life</p>
            </div>
        </div>
        </>
    )
}

export default About;