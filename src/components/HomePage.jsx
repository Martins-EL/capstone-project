import React from "react";
import logo from "../assets/logo.png";
import HomeImage from "../assets/HomeImage.png";

function HomePage({ onNavigate }) {
  return (
    <div className="bg-[#2C2C2C] min-h-screen w-full overflow-x-hidden">
      <nav className="w-full px-4 py-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="w-40 sm:w-40 md:w-48">
            <img src={logo} alt="App logo" className="w-full h-auto" />
          </div>
          <button
            onClick={() => onNavigate("dashboard")}
            className="border border-white text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition-colors duration-200 text-sm md:text-base font-medium"
          >
            Dashboard
          </button>
        </div>
      </nav>

      <section className="w-full px-4 md:px-8 lg:px-16 py-8 md:py-12 md:mt-20 sm:mt-60 ">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-white sm:text-white md:text-white font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 md:mb-6 leading-tight">
                Hello!
                <br />
                Let's make managing your finances simple and effective.
              </h1>
              <p className="text-white text-base sm:text-lg md:text-xl max-w-2xl mx-auto lg:mx-0">
                Achieve your objectives through tailored insights, adaptable
                budgets, and expenditure monitoring.
              </p>
            </div>

            <div className="flex-1 w-full max-w-md lg:max-w-lg">
              <img
                src={HomeImage}
                alt="Image of a man holding calculator"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center lg:justify-start max-w-xl mx-auto lg:mx-0">
            <button
              onClick={() => onNavigate("login")}
              className=" px-14 py-1 sm:w-auto  bg-blue-700 hover:bg-blue-600 border border-white text-white  md:px-8 md:py-1  rounded-xl transition-colors duration-200 font-medium text-sm md:text-base"
            >
              Log In
            </button>
            <div className="text-center sm:text-left ">
              <button
                onClick={() => onNavigate("signup")}
                className=" px-14 py-1 sm:w-auto bg-blue-700 hover:bg-blue-600 border border-white text-white  md:px-8 md:py-1 md:mt-12 rounded-xl transition-colors duration-200 font-medium text-sm md:text-base mb-2"
              >
                Sign Up
              </button>
              <p className="text-white text-xs md:text-sm">
                Don't have an account yet?
                <br />
                click on the button above.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
