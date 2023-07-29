import React,{useState} from "react";
import { BrowserRouter as Router, Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExchange,
  faCreditCard,
  faUser,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
// import GlowingButton from '../../UIComponents/glowingButton'


const openPaymentGateway = () => {
  console.log('we are in this func')
  return(
    <iframe className="min-w-[768px]" height="760"
        src="https://demo.flinks.com/v2/?closeEnable=true&accountSelectorEnable=true&accountSelectorCurrency=cad">
    </iframe>
  )
}

const PayScreen = () => {


  const [showIframe, setShowIframe] = useState(false);

  const handleButtonClick = () => {
    setShowIframe(true);
  };

  const handleIframeClose = () => {
    setShowIframe(false);
  };




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
                onClick={
                  // console.log("hello");
                  handleButtonClick
                }
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


        {showIframe && (
        <div className="fixed top-0 left-0 z-50 w-full h-full bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded">
            <button className="absolute top-2 right-2" onClick={handleIframeClose}>
              X
            </button>
            <iframe
              className="w-full h-[70vh]"
              src="https://demo.flinks.com/v2/"
            />
          </div>
        </div>
      )}




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