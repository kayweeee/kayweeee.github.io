import reapralogo from "../images/reapralogo.png"

function WorkExp () {

    return (
        <div className="flex flex-col items-center gap-5 rounded border-2 border-gray-400 px-10 py-5">
            <img src={reapralogo} className=" z-0 h-30 w-48 rounded-full drop-shadow-xl"/>
            <div className="z-50">
                <p className="font-bold text-xl text-center">Investment Intern</p>
                <p className=" italic text-center text-sm pb-3">Feb 2020 - Jul 2020 </p>
                <p className="text-sm">
                My initial responsibilities as an investment intern included sourcing for potential founders, being the initial contact point, and shadowing my superiors through the process of bringing a founder through the pipeline. Through this, I was able to learn how to engage with founders and gained a deep understanding about the global start-up ecosystem.
                <br/><br/>I was later entrusted with the responsibility of doing the initial screening (in the form of 1-on-1 interviews) for founders who were interested in collaborating with REAPRA. I was conducting a minimum of 5 interviews every week with founders mostly based in the SEA region. 
                <br/><br/>Although my internship was supposed to be from February to May, the company extended an offer for me to continue working part-time with them in the same role until my school semester started in August.
                </p>
            </div>
        </div>
    )
}

export default WorkExp;