import NavBar from "./NavBar";
import { useState } from "react";
// import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

function App () {
const [showNav, setShowNav] = useState(false);

  return (
    <div>
      {showNav? (
          <button
          onClick={() => setShowNav(true)}
          >
          X
          </button>
      ) : (
        <NavBar/>
    )}
  </div>
  )
};

export default App;