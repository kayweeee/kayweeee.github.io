import pic1 from "./images/me1.jpg";

function About () {

    return(
        <>
        <div className="h-screen w-screen">
            <p className="-rotate-90 absolute top-28 -left-12
            text-3xl md:text-4xl underline underline-offset-8 font-display">About Me</p>
            <div className="grid grid-cols-4">
                <div className="col-span-2 col-start-2">
                    <img src={pic1}
                    className="img-fluid rounded-lg"
                    />
                </div>
                <div className="col-start-2">
                    Hi!
                </div>
            </div>
            
        </div>

        <div className="h-screen bg-grey"></div>
      
        </>
    )
}

export default About;