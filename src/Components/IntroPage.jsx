import me from "../images/pictures/me.png";

function IntroPage() {
  return (
    <div className="flex flex-col sm:flex-row  justify-center items-center w-full gap-x-8 py-3">
      <div className="sm:w-2/5 flex justify-center sm:justify-end">
        <img
          className="h-[250px] sm:h-[400px] drop-shadow-xl"
          src={me}
          alt="kay wee"
        />
      </div>
      <div className="sm:w-3/5 flex flex-col items-center sm:items-start text-center sm:text-start">
        <p className="text-4xl sm:text-7xl font-display text-orange">KAY WEE</p>
        <div className="bg-orange my-2 h-[5px] w-1/2 sm:w-full" />
        <p className="font-semibold">ASPIRING FULLSTACK DEVELOPER</p>
        <p className="px-8 sm:px-0 pr-2 sm:w-96">
          Software development calls to all my passions. It combines creativity
          with problem solving in the form of coding, giving me the best of both
          worlds. Looking to use technology to create a positive impact on our
          big earth :)
        </p>
      </div>
    </div>
  );
}

export default IntroPage;
