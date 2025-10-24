import React from "react";
import logo from "../assets/logo.png";
import Icon from "../assets/icon.png";

function DashBoard() {
  return (
    <div className="bg-blue-50 h-1000 flex flex-col items-center sm:bg-blue-50  sm:flex sm:flex-col sm:items-center sm:h-1000 2xl:bg-blue-50 2xl:h-1000 ">
      <navbar className="h-20 flex flex-row gap-8 justify-around items-center mt-4 sm:flex sm:flex-row sm:justify-around sm:gap-100 sm:mt-4 md:flex  md:justify-around lg:flex lg:justify-around lg:gap-150  2xl:flex 2xl:justify-around 2xl:gap-315 ">
        <div className="w-[200px]  sm:w-[200px] 2xl:w-[300px]">
          <img src={logo} alt="App logo" />
        </div>

        <div>
          <button className="border-1 hover:bg-blue-600 border-white text-black px-3 py-1 rounded-xl sm:border-1 sm:border-white sm:text-black sm:bg-white  sm:px-3 sm:py-1 sm:rounded-xl 2xl:hover:bg-blue-600 sm:hover:bg-blue-600 2xl:text-black 2xl:px-3 2xl:py-1  2xl:border-1 2xl:rounded-xl 2xl:border-black 2xl:font-bold ">
            Home
          </button>
        </div>
      </navbar>
      <div
        className="mr-6 sm:flex sm:flex-row  sm:mt-3 sm:ml-9
       2xl:flex 2xl:flex-row 2xl:justify-around 2xl:gap-27 2xl:mt-3 2xl:ml-15 "
      >
        <div className="flex flex-row  gap-15 ml-2 text-center sm:gap-0 2xl:gap-27">
          <div>
            <p className="border-1 border-white bg-white px-3 py-1 rounded-xl  text-l sm:text-black sm:px-5 sm:py-1 sm:mr-15 sm:border-1 sm:rounded-xl sm:border-black sm:font-normal sm:bg-white sm:text-3xl sm:text-center sm:mt-10  2xl:text-black 2xl:px-20 2xl:py-1  2xl:border-1 2xl:rounded-xl 2xl:border-black 2xl:font-normal 2xl:bg-white 2xl:text-3xl 2xl:text-center 2xl:mt-10">
              INCOME
              <br />
              0.00
            </p>
          </div>
          <div>
            <p className="border-1 border-white text-black  bg-white px-3 py-1 rounded-xl sm:text-black sm:px-5 sm:py-1 sm:mr-15  sm:border-1 sm:rounded-xl sm:border-black sm:font-normal sm:bg-white sm:text-3xl sm:text-center sm:mt-10  2xl:text-black 2xl:px-20 2xl:py-1  2xl:border-1 2xl:rounded-xl 2xl:border-black 2xl:font-normal 2xl:bg-white 2xl:text-3xl 2xl:text-center 2xl:mt-10 ">
              EXPENSES
              <br />
              0.00
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-around gap-15 ml-2 mt-10 sm:mt-0  sm:gap-0 2xl:gap-27">
          <div>
            <p className="border-1 border-white text-black bg-white px-3 py-1 rounded-xl sm:text-black sm:px-5 sm:py-1 sm:mr-15  sm:border-1 sm:rounded-xl sm:border-black sm:font-normal sm:bg-white sm:text-3xl sm:text-center sm:mt-10 2xl:text-black 2xl:px-20 2xl:py-1  2xl:border-1 2xl:rounded-xl 2xl:border-black 2xl:font-normal 2xl:bg-white 2xl:text-3xl 2xl:text-center">
              SAVINGS
              <br />
              0.00
            </p>
          </div>
          <div>
            <p className="border-1 border-white text-black bg-white px-3 py-1 rounded-xl sm:text-black sm:px-5 sm:py-1 sm:mr-15 sm:border-1 sm:rounded-xl sm:border-black sm:font-normal sm:bg-white sm:text-3xl sm:text-center sm:mt-10 2xl:text-black 2xl:px-20 2xl:py-1  2xl:border-1 2xl:rounded-xl 2xl:border-black 2xl:font-normal 2xl:bg-white 2xl:text-3xl 2xl:text-center">
              BALANCE
              <br />
              0.00
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10 flex:col justify-around sm:flex sm:flex-row sm:gap-20 sm:text-2xl sm:mb-25  2xl:bg-white 2xl:w-200 2xl:h-150  2xl:mr-211 2xl:mt-30 2xl:rounded-xl 2xl:gap-110 2xl:text-sm 2xl:mb-50">
        <div className="mb-10 bg-white sm:mb-10 sm:h-225 sm:w-100 sm:bg-white  2xl:h-150 :w-200 ">
          <div className="flex flex-row mt-6 mr-12   2xl:flex 2xl:flex-row 2xl:mt-10">
            <div>
              <p className="p-1 w-8 text-white bg-black border-1 rounded-l ml-10 mt-4 text-center  2xl:p-1 2xl:w-8 2xl:text-white 2xl:bg-black 2xl:border-1 2xl:rounded-l 2xl:ml-10 2xl:mt-4 2xl:text-center ">
                +
              </p>
            </div>

            <div className="mt-5 ml-2 text-xl font-bold sm:text-2xl 2xl:mt-3 2xl:ml-2 2xl:text-3xl 2xl:font-bold">
              <p>Add New Income</p>
            </div>
          </div>
          <div className=" 2xl:flex 2xl:flex-row 2xl:gap-70">
            <div>
              <label className="block mb-2 ml-10 mt-5  2xl:block 2xl:mb-2 2xl:ml-10 2xl:mt-5 ">
                Amount
              </label>
              <input
                type="text"
                placeholder="Enter amount"
                className="w-50 ml-9  p-2 mb-4 border rounded-md sm:w-80  2xl:w-50 2xl:ml-10 2xl:p-2 2xl:mb-4 2xl:border 2xl:rounded-md"
                required
              />
            </div>
            <div>
              <label className="block mb-2 ml-10 mt-1 sm:w-80 2xl:block 2xl:mb-2 2xl:ml-10 2xl:mt-5">
                Date
              </label>
              <input
                type="text"
                placeholder="Enter date"
                className="w-50 ml-9  p-2 mb-4 border rounded-md sm:w-80 2xl:w-50 2xl:ml-10 2xl:p-2 2xl:mb-4 2xl:border 2xl:rounded-md"
                required
              />
            </div>
          </div>

          <div className="flex flex-row mt-6 mr-12  2xl:flex 2xl:flex-row 2xl:mt-5">
            <div>
              <p className="p-1 w-8 text-white bg-black border-1 rounded-l ml-10 mt-4 text-center  2xl:p-1 2xl:w-8 2xl:text-white 2xl:bg-black 2xl:border-1 2xl:rounded-l 2xl:ml-10 2xl:mt-4 2xl:text-center ">
                +
              </p>
            </div>

            <div className="mt-5 ml-2 text-xl font-bold sm:text-2xl 2xl:mt-3 2xl:ml-2 2xl:text-3xl 2xl:font-bold ">
              <p>Add New Expense</p>
            </div>
          </div>
          <div>
            <label className="block mb-2 ml-10 mt-5  2xl:block 2xl:mb-2 2xl:ml-10 2xl:mt-5">
              Description
            </label>
            <input
              type="text"
              placeholder="What was the expense for?"
              className="w-50 ml-9  p-2 mb-4 border rounded-md sm:w-80 2xl:w-180 2xl:ml-10 2xl:p-2 2xl:mb-4 2xl:border 2xl:rounded-md"
              required
            />
          </div>
          <div className="  2xl:flex 2xl:flex-row 2xl:gap-70">
            <div>
              <label className="block mb-2 ml-10 mt-5  2xl:block 2xl:mb-2 2xl:ml-10 2xl:mt-5">
                Amount
              </label>
              <input
                type="text"
                placeholder="Enter amount"
                className="w-50 ml-9  p-2 mb-4 border rounded-md sm:w-80 2xl:w-50 2xl:ml-10 2xl:p-2 2xl:mb-4 2xl:border 2xl:rounded-md"
                required
              />
            </div>
            <div>
              <label className="block mb-2 ml-10 mt-5  2xl:block 2xl:mb-2 2xl:ml-10 2xl:mt-5">
                Date
              </label>
              <input
                type="text"
                placeholder="Enter date"
                className="w-50 ml-9  p-2 mb-4 border rounded-md sm:w-80 2xl:w-50 2xl:ml-10 2xl:p-2 2xl:mb-4 2xl:border 2xl:rounded-md"
                required
              />
            </div>
          </div>
          <div>
            <label className="block mb-2 ml-10 mt-5 sm:w-80  2xl:block 2xl:mb-2 2xl:ml-10 2xl:mt-5">
              Category
            </label>
            <input
              type="text"
              placeholder="Enter Category"
              className="w-50 ml-9  p-2 mb-4 border rounded-md sm:w-80 2xl:w-180 2xl:ml-10 2xl:p-2 2xl:mb-4 2xl:border 2xl:rounded-md"
              required
            />
          </div>
        </div>
        <div className="sm:mr-3.5">
          <div className="h-100 bg-white sm:w-100 sm:mb-26  2xl:bg-white 2xl:w-200 2xl:h-150  2xl: 2xl:mr-200  2xl:rounded-xl ">
            <h className="text-xl font-bold  ml-15  mb-5 sm:text-2xl 2xl:text-3xl 2xl:mt-10 2xl:ml-5 2xl:mb-5 2xl:font-bold 2xl:w-170 h-150 ">
              Recent Expenses
            </h>
          </div>

          <div className=" h-100 w-75 mt-10 sm:mt-0 sm:w-100 bg-white 2xl:w-216 2xl:h-100 2xl:bg-white 2xl:mt-20">
            <div className="text-xl font-bold  ml-15 sm:text-2xl 2xl:text-3xl 2xl:ml-80 2xl:mt-10 2xl:font-bold ">
              Budget Overview
            </div>
          </div>
        </div>
      </div>
      <div className=" sm:flex sm:flex-row sm:gap-23 sm:mr-3 2xl:flex 2xl:flex-row 2xl:gap-18 2xl:ml-210 2xl:mt-100">
        <div>
          <div className="bg-white mt-10 w-75 h-100 flex flex-row gap-30 sm:gap-50 sm:h-100 sm:mt-0 sm:w-100  2xl:bg-white 2xl:w-200 2xl:h-150 2xl:flex 2xl:flex-row   2xl:rounded-xl 2xl:mt-5">
            <h className="mt-5 text-xl mr-5 ml-5 sm:text-2xl 2xl:text-3xl font-bold 2xl:mt-10 2xl:ml-5 2xl:mb-5 2xl:font-bold 2xl:w-170 2xl:h-150">
              Budget
            </h>
            <div className="flex flex-col gap-70  2xl:flex 2xl:flex-col 2xl:gap-95 2xl:mr-10 ">
              <button className="border-1  hover:bg-blue-600 border-black text-black px-2 py-1 rounded-xl mt-5 mr-5 sm:border-1 sm:border-black sm:text-black sm:px-3 sm:py-1 sm:rounded-xl  2xl:hover:bg-blue-600 sm:hover:bg-blue-600 2xl:text-black 2xl:px-3 2xl:py-1  2xl:border-1 2xl:rounded-xl 2xl:border-black 2xl:font-bold 2xl:mt-11">
                Add
              </button>
              <button className="border-1 hover:bg-blue-600 border-black text-black px-2 py-1 rounded-xl mr-5 sm:border-1 sm:border-black sm:text-black sm:px-3 sm:py-1 sm:rounded-xl  2xl:hover:bg-blue-600 sm:hover:bg-blue-600 2xl:text-black 2xl:px-3 2xl:py-1  2xl:border-1 2xl:rounded-xl 2xl:border-black 2xl:font-bold 2xl:mt-11">
                Set Date
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className=" h-150 bg-white mt-10 2xl:bg-white sm:h-100 sm:w-100 sm:mt-0 2xl:w-200 2xl:h-150 2xl:flex 2xl:flex-col 2xl: 2xl:mr-200  2xl:rounded-xl 2xl:mt-5">
            <h className="text-xl font-bold  ml-25 sm:mt-10 sm:text-2xl 2xl:text-3xl 2xl:mt-10 2xl:ml-5 2xl:mb-5 2xl:font-bold 2xl:w-170 2xl:h-150">
              Calendar
            </h>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DashBoard;
