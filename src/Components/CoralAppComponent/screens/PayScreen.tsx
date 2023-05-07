import React from "react";
import { BrowserRouter as Router, Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExchange,
  faCreditCard,
  faUser,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import GlowingButton from '../../UIComponents/glowingButton'

const PayScreen = () => {
  return (
    <div className="bg-gradient-to-b from-pink-100 via-green-100 to-greenTheme h-screen">
      <div className="h-screen overflow-hidden px-4 md:px-8">
        <div className="flex justify-center items-center mt-4">
          <div className="border border-green-200 rounded-md w-full max-w-md bg-green-100 shadow-lg ">
            <div className="font-semibold text-3xl text-center mt-2 mb-2">
              <FontAwesomeIcon
                icon={faCreditCard}
                className="text-greenThemeDark mr-2"
              />
              Pay
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center h-[75%] mt-4">
          <div>
            <div className="w-full md:max-w-md h-full rounded-full shadow-2xl bg-gray-100">
              <button
                onClick={() => {
                  console.log("hello");
                }}
                className="text-white text-6xl p-24 focus:outline-none"
              >
                <FontAwesomeIcon
                  icon={faDollarSign}
                  className="text-greenThemeDark shadow-2xl bg-gray-100 transition-colors duration-200 hover:text-green-300"
                />
              </button>
            </div>
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

export default PayScreen;