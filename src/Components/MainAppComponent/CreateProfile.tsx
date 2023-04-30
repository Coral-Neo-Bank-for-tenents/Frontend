import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateProfile = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");
  const [referralCode, setReferralCode] = useState("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);

    // Check password strength
    const strength =
      passwordValue.length >= 8
        ? "Strong"
        : passwordValue.length >= 6
        ? "Good"
        : "Weak";
    setPasswordStrength(strength);
  };

  const handleReferralCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReferralCode(e.target.value);
  };

  const handleContinueClick = async () => {
    const formData = { email, password, referralCode, name };
    console.log(formData);

    try {
      // Make a POST request to API to save the form data
      // const response = await axios.post(
      //   "https://example.com/api/create-profile",
      //   formData
      // );

      if (true) {
        toast.success('Profile created successfully!', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
        });
        setTimeout(() => {
          navigate("/verifyemail");
        }, 1000);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-greenTheme h-screen">
      <div className="flex items-center justify-center max-h-fit">
        <div className="max-w-md w-full bg-greenTheme p-16 rounded-lg">
          <Link to="/">
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="text-greenThemeDark text-2xl mb-6 hover:cursor-pointer -mt-8"
            />
          </Link>
          <h1 className="text-3xl font-bold mb-6">Create Profile</h1>
          <p className="my-4">
            Start receiving rewards when you make rent payments
          </p>
          <input
            type="text"
            className="w-full mb-4 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-greenThemeDark"
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
          />
          <input
            type="email"
            className="w-full mb-4 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-greenThemeDark"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <input
            type="password"
            className="w-full mb-4 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-greenThemeDark"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <div className="flex items-center mb-2">
            <span className="mr-2">Password strength:</span>
            <span className="font-semibold">{passwordStrength}</span>
          </div>
          <div>
            <p className="text-xs my-1">
              Passwords must be a minimum of 8 characters. Include one letter,
              and one number or symbol.
            </p>
          </div>
          <input
            type="text"
            className="w-full mb-4 my-6 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-greenThemeDark"
            value={referralCode}
            placeholder="Referral Code (optional)"
            onChange={handleReferralCodeChange}
          />
          <button
            onClick={handleContinueClick}
            className="w-full bg-greenThemeDark text-white py-2 px-4 rounded-md hover:bg-greenThemeDark transition-colors duration-200"
          >
            {/* <Link to="/verifyemail">Continue</Link> */}
            Continue
          </button>
          <p className="text-center mt-4">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-greenThemeDark hover:text-greenThemeDark"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateProfile;
