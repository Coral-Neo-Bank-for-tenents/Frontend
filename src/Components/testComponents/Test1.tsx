import React from "react";
import { BrowserRouter as Router, Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExchange, faCreditCard, faUser } from "@fortawesome/free-solid-svg-icons";

const demoList = [
  "Transaction 1",
  "Transaction 2",
  "Transaction 3",
  "Transaction 4",
  "Transaction 5",
  "Transaction 6",
  "Transaction 7",
  "Transaction 8",
  "Transaction 9",
  "Transaction 10",
  "Transaction 6",
  "Transaction 7",
  "Transaction 8",
  "Transaction 9",
  "Transaction 10",
];

const Test1 = () => {
  return (
   <div className="bg-greenTheme">
     <div className="h-screen overflow-hidden">
      <div className="flex justify-center items-center mt-6">
        <div className="border border-green-200 rounded-md w-full max-w-md bg-green-100 shadow-lg">
          <div className="font-semibold text-3xl text-center mt-2 mb-2">
            <FontAwesomeIcon
              icon={faExchange}
              className="text-greenThemeDark mr-2"
            />
            Transactions
          </div>
          <div className="mt-2 text-center mb-2">
            <span>Total money spent: </span>
            <span>$24,000</span>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center h-[75%] mt-4">
        <div className="w-full md:max-w-md h-full border border-gray-100 rounded-lg overflow-y-scroll shadow-lg bg-gray-300">
          <ul className="w-full">
            {demoList.map((item, index) => (
              <li
                key={index}
                className="py-2 px-8 border-b border-gray-100 hover:bg-gray-100 transition-colors duration-200"
              >
                <div className="text-lg font-medium text-gray-800">{item}</div>
                <div className="text-sm font-normal text-gray-500">{`Description for ${item}`}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex justify-center items-center mt-2">
        <div className="fixed bottom-0 w-full md:max-w-md h-14 bg-green-100 border border-gray-200 rounded-t-xl flex justify-between items-center p-2 shadow-lg">
          <Link
            to="/transactions"
            className="text-gray-400 hover:text-gray-600 p-1 font-semibold"
          >
            <FontAwesomeIcon
              icon={faExchange}
              className="text-greenThemeDark mr-2"
            />
            Transactions
          </Link>
          <Link
            to="/pay"
            className="text-gray-400 hover:text-gray-600 p-1 font-semibold"
          >
            <FontAwesomeIcon
              icon={faCreditCard}
              className="text-greenThemeDark mr-2"
            />
            Pay
          </Link>
          <Link
            to="/coralprofile"
            className="text-gray-400 hover:text-gray-600 p-1 font-semibold"
          >
             <FontAwesomeIcon
              icon={faUser}
              className="text-greenThemeDark mr-2"
            />
            Profile
          </Link>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Test1;
