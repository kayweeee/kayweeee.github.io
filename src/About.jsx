import pic1 from "./images/me1.jpg";

function About () {

    return(
        <>
        <div className="snap-y snap-mandatory h-screen overflow-scroll">
            <div className="snap-start w-screen h-screen flex flex-col justify-center">
                <div className="text-2xl md:text-4xl underline underline-offset-8 pl-10 md:pl-16 pb-4 md:pb-8 font-display">
                        About Me
                    </div>
                <div className="flex flex-col md:flex-row items-center justify-center gap-5 px-10 pb-10">
                    <div className="md:w-1/2 flex justify-center md:justify-end">
                        <img src={pic1} className="md:w-1/2 rounded"/>
                    </div>

                    <div className="md:w-1/2 text-start">
                        <div className="md:w-1/2">
                            <p className="text-lg md:text-2xl text-grey font-display">
                                explorer and learner
                            </p>
                            <p className="text-base md:text-lg">
                                hi! welcome to my website, where i document my journey  to becoming a full-stack software engineer. 
                            </p>
                        </div>
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