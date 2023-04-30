import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const HomeAddressForm: React.FC = () => {
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [pincode, setPincode] = useState("");
  const [city, setCity] = useState("");

  const handleAddress1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress1(e.target.value);
  };

  const handleAddress2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress2(e.target.value);
  };

  const handlePincodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPincode(e.target.value);
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const handleSave = async () => {
    try {
      // Call API to save house address
      await axios.post("/api/save-address", {
        address1,
        address2,
        pincode,
        city,
      });
      // Navigate to '/xyz' after successful save
      window.location.href = "/xyz";
    } catch (error) {
      console.error("Failed to save house address:", error);
    }
  };

  return (
    <div className="bg-greenTheme h-screen">
      <div className="flex items-center justify-center max-h-fit">
        <div className="max-w-md w-full bg-greenTheme p-16 rounded-lg">
          <Link to="/verifyemail">
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="text-greenThemeDark text-2xl mb-6 hover:cursor-pointer -mt-8"
            />
          </Link>
          <h1 className="text-3xl font-bold mb-6">What's your home address?</h1>
          <input
            type="text"
            className="w-full p-3 border rounded mb-4"
            placeholder="Address 1"
            value={address1}
            onChange={handleAddress1Change}
          />
          <input
            type="text"
            className="w-full p-3 border rounded mb-4"
            placeholder="Address 2"
            value={address2}
            onChange={handleAddress2Change}
          />
          <input
            type="text"
            className="w-full p-3 border rounded mb-4"
            placeholder="Pincode"
            value={pincode}
            onChange={handlePincodeChange}
          />
          <input
            type="text"
            className="w-full p-3 border rounded mb-4"
            placeholder="City"
            value={city}
            onChange={handleCityChange}
          />
          <button
            className="w-full bg-greenThemeDark text-white py-3 rounded"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeAddressForm;
