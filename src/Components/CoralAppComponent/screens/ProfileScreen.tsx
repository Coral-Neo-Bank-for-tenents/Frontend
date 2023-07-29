import React from "react";
import { BrowserRouter as Router, Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExchange, faCreditCard, faUser } from "@fortawesome/free-solid-svg-icons";
import ProfilePage from "../../MainAppComponent/ProfilePage";


const ProfileScreen = () => {
  return (
   <div className="bg-greenTheme">
     <div className="h-screen overflow-hidden">
      <div className="flex justify-center items-center mt-6">
        <div className="border border-green-200 rounded-md w-full max-w-md bg-green-100 shadow-lg">
          <div className="font-semibold text-3xl text-center mt-2 mb-2">
            <FontAwesomeIcon
              icon={faUser}
              className="text-greenThemeDark mr-2"
            />
            Profile
          </div>
        </div>
      </div>

      {/* <ProfilePage/> */}

     
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

export default ProfileScreen