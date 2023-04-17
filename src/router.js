import {Routes, Route, useLocation} from "react-router-dom";
import App from "./App";
import About from "./About";
import Projects from "./Projects";
import ContactMe from "./ContactMe";

function Router() {

    return (
        <Routes>
            <Route path="/" element={<App />}></Route>
            <Route path="/aboutme" element={<About />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/contactme" element={<ContactMe />}></Route>
        </Routes>
    )

}

export default Router;