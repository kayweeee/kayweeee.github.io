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
            onClick={()=> setToggle(!toggle)}
            >
                <FontAwesomeIcon icon={faBars} />
            </button>
            {toggle && (
                <div className="top-0 left-0 w-[35vw] fixed p-5 md:p-10 inline-flex flex-col space-y-5 h-screen bg-grey text-l lg:text-xl font-body">
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