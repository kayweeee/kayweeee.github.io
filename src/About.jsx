import pic1 from "./images/me1.jpg";

function About () {

    return(
        <>
        <div className="snap-y snap-mandatory h-screen overflow-scroll">
            <div className="snap-start h-screen w-screen flex flex-col justify-center items-center gap-4">
                <p className="
                text-xl md:text-4xl underline underline-offset-8 font-display pb-3">About Me</p>
                <div className=" w-3/4 ">
                    <img src={pic1}
                    className="rounded"
                    />
                </div>
                <div className="w-3/4">
                    <p className="text-2xl text-grey font-display pb-2">explorer and learner</p>
                    <p className="text-md">hi! welcome to my website, where i document my journey  to becoming a full-stack software engineer. </p>
                </div>
            </div>
            
            <div className="snap-start h-screen flex flex-col justify-center items-center bg-grey">
                <p>Education</p>
            </div>
        </div>
        </>
    )
}

export default About;