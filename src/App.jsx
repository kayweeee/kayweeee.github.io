import { useState } from "react";
import NavBar from "./Components/NavBar";

function App () {
const [showNav, setShowNav] = useState(false);

  return (
    <div>
      <NavBar/>
    </div>
  )
};

export default App;