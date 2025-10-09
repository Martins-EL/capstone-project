import React from "react";
import logo from "../assets/logo.png";
import HomeImage from "../assets/HomeImage.png";

function HomePage() {
  return (
    <div className="bg-black h-screen flex flex-col items-center sm:bg-black sm:h-screen sm:flex sm:flex-col sm:items-center 2xl:bg-black ">
      <navbar className="h-20 flex flex-row gap-8 justify-around items-center mt-4 sm:flex sm:flex-row sm:justify-around sm:gap-100 sm:mt-4 md:flex  md:justify-around lg:flex lg:justify-around lg:gap-150  2xl:flex 2xl:justify-around 2xl:gap-330 ">
        <div className="w-[200px]  sm:w-[200px] 2xl:w-[300px]">
          <img src={logo} alt="App logo" />
        </div>

        <div>
          <button className="border-1 border-white text-white px-3 py-1 rounded-xl sm:border-1 sm:border-white sm:text-white sm:px-3 sm:py-1 sm:rounded-xl">
            Dashboard
          </button>
        </div>
      </navbar>
      <section>
        <div className="flex  flex-col mt-20 items-center sm:flex sm:items-center sm:flex-col 2xl:gap-60 md:mt-50 2xl:flex 2xl:flex-row 2xl:text-left 2xl:mt-10  lg:mt-50 2xl:bg-black ">
          <div className=" flex flex-col items-center 2xl:flex 2xl:flex-col 2xl:h-[500px] lg:items-center lg:flex lg:flex-col ">
            <h1 className="text-blue-900 font-extrabold text-center text-0.2 mb-2 mt-1 w-90 sm:text-blue-900 sm:font-extrabold sm:text-center sm:text-3xl sm:mb-5 sm:mt-1.5 sm:w-200 sm:h-30 2xl:text-8xl 2xl:mb-60 lg:text-4xl lg:w-245 2xl:text-left 2xl:ml-25 ">
              Hello!
              <br />
              Let's make managing your finances simple and effective.
            </h1>
            <p className="text-white text-0.2 w-100 ml-15 text-center mb-2 sm:text-white sm:w-200 sm:h-10 sm:text-sm  sm:text-center  lg:text-center 2xl:text-left 2xl:text-l 2xl:mt-40 mr-15">
              Achieve your objectives through tailored insights, adaptable
              budgets, and expenditure monitoring.
            </p>
          </div>
          <img
            src={HomeImage}
            alt="Image of a man holding calculator"
            className="w-[360px] h-[230px] mt-2 flex items-center sm:w-175 sm:h-100 sm:flex sm:items-center 2xl:w-[700px] 2xl:h-[600px] lg:w-[900px] lg:h-[500px] 2xl:mr-150"
          />
        </div>

        <div className=" h-[150px] flex flex-col items-center md:flex md:flex-row md:justify-around md:items-baseline  2xl:flex 2xl:flex-row 2xl:items-baseline 2xl:bg-black 2xl:w-200 ">
          <button className="border-1 w-[200px] h-[30px]  bg-blue-700 border-white text-sm text-white px-15 py-1  mt-10 rounded-xl md:border-1 md:border-white md:text-white md:px-10 md:py-1 md:mt-10 md:rounded-xl ">
            log in
          </button>
          <div>
            <button className="border-1 w-[200px] h-[30px] bg-blue-700 border-white text-sm text-white px-15 py-1 mt-10 rounded-xl md:border-1 md:border-white md:text-white md:px-10 md:py-1 md:mt-10 md:rounded-xl">
              sign up
            </button>
            <p className="text-white ml-2 ">
              Don’t have an account yet?
              <br />
              click on the button above.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
export default HomePage;
