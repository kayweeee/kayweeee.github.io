import { Routes, Route, useLocation } from "react-router-dom";
import App from "./App";
import About from "./About";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/aboutme" element={<About />}></Route>
    </Routes>
  );
}

export default Router;
