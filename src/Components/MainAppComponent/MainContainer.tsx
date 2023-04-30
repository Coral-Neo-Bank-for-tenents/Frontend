import React from "react";

const MainContainer = () => {
  return (
    <div className="m-2">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 md:pr-2 mb-4 md:mb-0">
          <div className="bg-white rounded shadow overflow-hidden">
            <div className="px-4 py-3">
              <h3 className="text-4xl font-medium text-gray-900">Elevate your renting experience</h3>
            </div>
            <div className="px-4 py-3">
              <h3 className="text-lg font-medium text-gray-900">Making renting efficient and rewarding</h3>
              <h3 className="text-base font-light text-gray-900">Pay with any debit or credit card and start earning rewards on your largest monthly expense.</h3>
            </div>
            <div className="px-4 py-3">
              <button className="bg-greenThemeDark rounded-md shadow-lg p-2 m-2">Get Started</button>
              {/* <h3 className="text-lg font-medium text-gray-900">Get Started</h3> */}
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 md:pl-2">
          <div className="bg-white rounded shadow overflow-hidden">
            <div className="px-4 py-3 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Fourth Row</h3>
            </div>
            <div className="px-4 py-3">
              <h3 className="text-lg font-medium text-gray-900">Fifth Row</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
