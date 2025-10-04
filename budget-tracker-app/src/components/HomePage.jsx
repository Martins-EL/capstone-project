import React from "react";
import logo from "../assets/logo.png";

function HomePage() {
  return (
    <div className="bg-[#000000D4] h-screen">
      <navbar className="bg-[#000000D4] flex justify-around flex-row items-center gap-250 h-20">
        <div>
          <img src={logo} alt="App logo" />
        </div>
        <div>
          <button className="border-1 border-white text-white px-3 py-1 ">
            Dashboard
          </button>
        </div>
      </navbar>
    </div>
  );
}
export default HomePage;
