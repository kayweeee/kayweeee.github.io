import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NavBar () {
    const [toggle, setToggle] = useState(false);
    const navigate = useNavigate();

    return (
        <div>
            <button
            className="z-40 absolute"
            onClick={()=> setToggle(!toggle)}
            >
                <FontAwesomeIcon icon={faBars} className="p-4" size="xl"/>
            </button>
            {toggle && (
                <div className="top-0 left-0 w-[30vw] fixed p-5 md:px-10 pt-14 inline-flex flex-col space-y-7 h-screen 
                bg-grey text-l lg:text-xl font-body z-30">
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
            )}

        </div>
       
    )
}

export default NavBar;