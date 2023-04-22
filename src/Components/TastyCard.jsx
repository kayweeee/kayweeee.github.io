import tastylogo from "../images/tastylogo.png"

function TastyCard () {

    return (
        <div className="flex flex-col items-center gap-5 rounded border-2 border-gray-400 px-10 py-5">
            <img src={tastylogo} className=" z-0 h-30 w-48 rounded-full drop-shadow-xl"/>
            <div className="z-50">
                <p className="font-bold text-xl text-center">Marketing Intern</p>
                <p className=" italic text-center text-sm pb-3">May 2021 - Aug 2021</p>
                <p className="text-sm">
                As a marketing intern, I was in-charge of creating daily content for the company’s instagram, and sending out monthly EDMs. The company uses Adobe Photoshop for their digital designs, and over the course of 4 months, I went from knowing close to zero about Adobe Photoshop to independently generating multiple digital assets daily.
                <br/><br/>I was also given the opportunity to plan the content calendar for the company and work with external consultants on how to better optimize the company's marketing strategy. Through the process of trial and error over the last month of my internship, I was able to help the company create a better workflow for their marketing and was put in-charge of training the new marketing interns and hires before leaving the company.
                </p>
            </div>
        </div>
    )
}

export default TastyCard;