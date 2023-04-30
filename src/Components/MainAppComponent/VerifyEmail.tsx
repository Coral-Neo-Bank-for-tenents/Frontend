import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const VerifyEmail: React.FC = () => {
    const [otp, setOtp] = useState<string>("");
    const [isVerified, setIsVerified] = useState<boolean>(false);
    const navigate = useNavigate();
  
    const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputOtp = e.target.value;
      // Keep only numeric values and limit to 6 digits
      const formattedOtp = inputOtp.replace(/[^0-9]/g, "").slice(0, 6);
      setOtp(formattedOtp);
    };
  
    const handleVerifyClick = () => {
        // Simulate OTP verification success
        setTimeout(() => {
          setIsVerified(true);
        }, 1000);
      };
    
      useEffect(() => {
        if (isVerified) {
          // Wait for 1.5 seconds and then navigate to next screen
          setTimeout(() => {
            navigate("/addressForm");
          }, 1500);
        }
      }, [isVerified, navigate]);

  return (
    
    <div className="bg-greenTheme h-screen">
        <div className="flex items-center justify-center max-h-fit">
        <div className="max-w-md w-full bg-greenTheme p-16 rounded-lg">
        <Link to="/CreateProfile"><FontAwesomeIcon icon={faArrowLeft} className="text-greenThemeDark text-2xl mb-6 hover:cursor-pointer -mt-8" /></Link> 
        <h1 className="text-2xl font-bold mb-4">Verify your email</h1>
            {!isVerified ? (
            <>
                <p className="text-gray-600 mb-4">
                Enter the 6-digit code sent to your email address
                </p>
                <input
                type="text"
                className="w-full p-4 mb-4 text-center font-mono text-xl font-bold border-2 border-gray-300 focus:outline-none"
                value={otp}
                onChange={handleOtpChange}
                />
                <p className="text-gray-600 mb-4">
                Did not receive a code?{" "}
                <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                >
                    Resend
                </a>
                </p>
                <button
                className="w-full bg-greenThemeDark text-white font-bold py-3 px-6 rounded"
                onClick={handleVerifyClick}
                >
                Verify
                </button>
            </>
            ) : (
                <div className="text-green-500 flex items-center justify-center mt-8">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
                >
                <path
                    fillRule="evenodd"
                    d="M8.293 13.707l6-6a1 1 0 0 0-1.414-1.414L9 11.586 6.12 8.707a1 1 0 1 0-1.414 1.414l3 3z"
                />
                </svg>
                <span>Verified</span>
            </div>
            )}      
        
        
        </div>
        </div>
    </div>
    

  );
};

export default VerifyEmail;
