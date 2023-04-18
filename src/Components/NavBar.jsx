import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import github from "../images/contactgithub.svg"
import linkedin from "../images/linkedin.svg"
import mail from "../images/contactmail.svg"

function NavBar () {
    const [toggle, setToggle] = useState(false);
    const navigate = useNavigate();
    const handleLinkedin =  () => {
        window.open('https://www.linkedin.com/in/kay-wee-tan/')
    };
    const handleGithub = () => {
        window.open('https://github.com/kayweeee')
    };

    return (
        <div>
            <button
            className="z-40 fixed"
            onClick={()=> setToggle(!toggle)}
            >
                <FontAwesomeIcon icon={faBars} className="p-3" size="xl"/>
            </button>
            {toggle && (
                <div className="top-0 left-0 w-40 md:w-[30vw] fixed p-5 md:px-10 pt-14 flex flex-col h-screen bg-grey z-30 justify-between">
                    <div className="flex flex-col space-y-7 font-bold text-xl lg:text-2xl font-body">
                        <button
                        onClick={ () => navigate('/')}
                        >Home</button>
                        <button
                        onClick={ () => navigate('/aboutme')}
                        >About</button>
                        <button
                        onClick={ () => navigate('/projects')}
                        >Projects</button>
                        <button
                        onClick={ () => navigate('/contactme')}
                        >Contact Me</button>
                    </div>

                    <div className="flex flex-row justify-end gap-4">
                        <button className="pb-1"
                        >
                            <img src={mail} width={60}/>
                        </button>
                        <button
                        onClick={handleLinkedin}
                        >
                            <img src={linkedin} width={50}/>
                        </button>
                        <button
                        onClick={handleGithub}
                        >
                            <img src={github} width={50}/>
                        </button>
                    </div>
                </div>
            )}

        </div>
       
    )
}

export default NavBar;