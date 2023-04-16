function NavBar() {
    return (
      <div>
        <div className="top-0 left-0 w-[35vw] fixed p-5 md:p-10 inline-flex flex-col space-y-5 h-screen bg-grey text-l lg:text-xl font-body">
          <a className="">Home</a>
          <a>About</a>
          <a>Projects</a>
          <a>Contact Me</a>
        </div>
      </div>
    );
  }
  
  export default NavBar;