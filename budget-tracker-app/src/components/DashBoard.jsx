import React from "react";
import logo from "../assets/logo.png";
import Icon from "../assets/icon.png";

function DashBoard() {
  return (
    <div className="bg-black h-screen flex flex-col items-center sm:bg-black sm:h-screen sm:flex sm:flex-col sm:items-center 2xl:bg-blue-50 2xl:h-1000">
      <navbar className="h-20 flex flex-row gap-8 justify-around items-center mt-4 sm:flex sm:flex-row sm:justify-around sm:gap-100 sm:mt-4 md:flex  md:justify-around lg:flex lg:justify-around lg:gap-150  2xl:flex 2xl:justify-around 2xl:gap-310 ">
        <div className="w-[200px]  sm:w-[200px] 2xl:w-[300px]">
          <img src={logo} alt="App logo" />
        </div>

        <div>
          <button className="border-1 hover:bg-blue-600 border-white text-white px-3 py-1 rounded-xl sm:border-1 sm:border-white sm:text-white sm:px-3 sm:py-1 sm:rounded-xl 2xl:hover:bg-blue-600 sm:hover:bg-blue-600 2xl:text-black 2xl:px-3 2xl:py-1  2xl:border-1 2xl:rounded-xl 2xl:border-black 2xl:font-bold">
            Home
          </button>
        </div>
      </navbar>
      <div className="2xl:flex 2xl:flex-row 2xl:justify-around 2xl:gap-40 2xl:mt-3">
        <div>
          <p className="border-1 border-white text-white px-3 py-1 rounded-xl sm:border-1 sm:border-white sm:text-white sm:px-3 sm:py-1 sm:rounded-xl  2xl:text-black 2xl:px-20 2xl:py-1  2xl:border-1 2xl:rounded-xl 2xl:border-black 2xl:font-normal 2xl:bg-white 2xl:text-3xl 2xl:text-center">
            INCOME
            <br />
            0.00
          </p>
        </div>
        <div>
          <p className="border-1 border-white text-white px-3 py-1 rounded-xl sm:border-1 sm:border-white  2xl:text-black 2xl:px-20 2xl:py-1  2xl:border-1 2xl:rounded-xl 2xl:border-black 2xl:font-normal 2xl:bg-white 2xl:text-3xl 2xl:text-center">
            EXPENSES
            <br />
            0.00
          </p>
        </div>
        <div>
          <p className="border-1 border-white text-white px-3 py-1 rounded-xl sm:border-1 sm:border-white sm:text-white sm:px-3 sm:py-1 sm:rounded-xl 2xl:text-black 2xl:px-20 2xl:py-1  2xl:border-1 2xl:rounded-xl 2xl:border-black 2xl:font-normal 2xl:bg-white 2xl:text-3xl 2xl:text-center">
            SAVINGS
            <br />
            0.00
          </p>
        </div>
        <div>
          <p className="border-1 border-white text-white px-3 py-1 rounded-xl sm:border-1 sm:border-white sm:text-white sm:px-3 sm:py-1 sm:rounded-xl 2xl:text-black 2xl:px-20 2xl:py-1  2xl:border-1 2xl:rounded-xl 2xl:border-black 2xl:font-normal 2xl:bg-white 2xl:text-3xl 2xl:text-center">
            BALANCE
            <br />
            0.00
          </p>
        </div>
      </div>
      <div className="2xl:bg-white 2xl:w-200 2xl:h-150 2xl:flex 2xl:flex-row 2xl: 2xl:mr-211 2xl:mt-30 2xl:rounded-xl 2xl:gap-50">
        <div>
          <div className="2xl:flex 2xl:flex-row mt-10">
            <div>
              <p className="2xl:p-1 2xl:w-8 2xl:text-white 2xl:bg-black 2xl:border-1 2xl:rounded-l 2xl:ml-10 2xl:mt-4 2xl:text-center ">
                +
              </p>
            </div>
            <div className="2xl:mt-3 2xl:ml-2 2xl:text-3xl 2xl:font-bold ">
              <p>Add New Income</p>
            </div>
          </div>
          <div className="2xl:flex 2xl:flex-row 2xl:gap-70">
            <div>
              <label className="2xl:block 2xl:mb-2 2xl:ml-10 2xl:mt-5">
                Amount
              </label>
              <input
                type="text"
                placeholder="Enter amount"
                className="2xl:w-50 2xl:ml-10 2xl:p-2 2xl:mb-4 2xl:border 2xl:rounded-md"
                required
              />
            </div>
            <div>
              <label className="2xl:block 2xl:mb-2 2xl:ml-10 2xl:mt-5">
                Date
              </label>
              <input
                type="text"
                placeholder="Enter date"
                className="2xl:w-50 2xl:ml-10 2xl:p-2 2xl:mb-4 2xl:border 2xl:rounded-md"
                required
              />
            </div>
          </div>

          <div className="2xl:flex 2xl:flex-row mt-5">
            <div>
              <p className="2xl:p-1 2xl:w-8 2xl:text-white 2xl:bg-black 2xl:border-1 2xl:rounded-l 2xl:ml-10 2xl:mt-4 2xl:text-center ">
                +
              </p>
            </div>
            <div className="2xl:mt-3 2xl:ml-2 2xl:text-3xl 2xl:font-bold ">
              <p>Add New Expense</p>
            </div>
          </div>
          <div>
            <label className="2xl:block 2xl:mb-2 2xl:ml-10 2xl:mt-5">
              Description
            </label>
            <input
              type="text"
              placeholder="What was the expense for?"
              className="2xl:w-180 2xl:ml-10 2xl:p-2 2xl:mb-4 2xl:border 2xl:rounded-md"
              required
            />
          </div>
          <div className="2xl:flex 2xl:flex-row 2xl:gap-70">
            <div>
              <label className="2xl:block 2xl:mb-2 2xl:ml-10 2xl:mt-5">
                Amount
              </label>
              <input
                type="text"
                placeholder="Enter amount"
                className="2xl:w-50 2xl:ml-10 2xl:p-2 2xl:mb-4 2xl:border 2xl:rounded-md"
                required
              />
            </div>
            <div>
              <label className="2xl:block 2xl:mb-2 2xl:ml-10 2xl:mt-5">
                Date
              </label>
              <input
                type="text"
                placeholder="Enter date"
                className="2xl:w-50 2xl:ml-10 2xl:p-2 2xl:mb-4 2xl:border 2xl:rounded-md"
                required
              />
            </div>
          </div>
          <div>
            <label className="2xl:block 2xl:mb-2 2xl:ml-10 2xl:mt-5">
              Category
            </label>
            <input
              type="text"
              placeholder="Enter Category"
              className="2xl:w-180 2xl:ml-10 2xl:p-2 2xl:mb-4 2xl:border 2xl:rounded-md"
              required
            />
          </div>
        </div>
        <div className="2xl:bg-white 2xl:w-200 2xl:h-150 2xl:flex 2xl:flex-col 2xl: 2xl:mr-200  2xl:rounded-xl ">
          <h className="2xl:text-3xl 2xl:mt-10 2xl:ml-5 2xl:mb-5 2xl:font-bold 2xl:w-170 2xl:h-150">
            Recent Expenses
          </h>
        </div>
      </div>
      <div className="2xl:w-416 2xl:h-200 2xl:bg-white 2xl:ml-5 2xl:mt-20">
        <div className="">Budget Overview</div>
      </div>
    </div>
  );
}
export default DashBoard;
