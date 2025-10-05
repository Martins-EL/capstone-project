import React from "react";
import logo from "../assets/logo.png";
import HomeImage from "../assets/HomeImage.png";

function HomePage() {
  return (
    <div className="bg-black h-screen md:h-screen sm:h-screen md:bg-black sm:bg-black">
      <navbar className="  h-20 flex flex-row justify-around items-center   md:flex  md:flex-row md:gap-250 md:items-center md:h-20  md:justify-around  sm:flex sm:justify-around sm:flex-row  sm:items-center sm:h-20">
        <div className=" w-[250px] ">
          <img src={logo} alt="App logo" />
        </div>
        <div>
          <button className="border-1 border-white text-white px-3 py-1 ">
            Dashboard
          </button>
        </div>
      </navbar>
      <section className="flex flex-row justify-around items-center mt-30 mr-35 gap-34">
        <div>
          <h1 className="text-[#1B3187] text-7xl font-bold text-left ml-36">
            Hello!
            <br />
            Let's make managing
            <br /> your finances simple and
            <br /> effective.
          </h1>
          <p className="text-white text-left mt-10 ml-36 text-lg w-250">
            Achieve your objectives through tailored insights, adaptablebudgets,
            and expenditure monitoring.
          </p>
          <div className="w-[700px] flex justify-between ml-45">
            <button className="border-1  border-white text-white px-10 py-1 mt-10 rounded-xl ">
              log in
            </button>
            <button className="border-1  border-white text-white px-10 py-1 mt-10 rounded-xl  ">
              sign up
            </button>
          </div>
        </div>
        <div>
          <img src={HomeImage} alt="Image of a man holding calculator" />
        </div>
      </section>
    </div>
  );
}
export default HomePage;
