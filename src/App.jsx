import NavBar from "./Components/NavBar";

function App () {

  return (
    <>
      <NavBar/> 
      <div className="flex flex-col justify-center items-center h-screen font-display">
        <p className="text-7xl">KAY WEE</p>
        <p>all things design</p>
      </div>

      <div className="h-screen flex justify-center items-center gap-9 px-14">
        <div className="text-7xl font-display">
          <p>Curious, Ambitious, Passionate</p>
        </div>
        <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
      </div>

      <div className="h-screen">
        <p className="text-7xl">Skills</p>
        <div className="grid grid-cols-5">
          
        </div>
      </div>

      <div className="h-screen">
        <p>I am always doing that which I cannot do, in order that I may learn how to do it.</p>
        <p>- Pablo Picasso</p>
      </div>
    </>
  )
};

export default App;