import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authToken, setAuthToken] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  async function handleLogin(event: any) {
    event.preventDefault();


    console.log('email = ', email);
    console.log('password = ', password);

    const response = await fetch(`http://localhost:5000/api/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const data = await response.json();

    console.log("data = ", data);

    if (data.accessToken) {
      localStorage.setItem("token", data.accessToken);
      // localStorage.setItem("username", data.username);
      // alert("Login successful");
      toast.success("Login successful!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
      });
      // window.location.href = "/todo";
    } else {
      // alert("Please check your username and password");
      toast.error("Please check your username and password", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
      });
    }
  }

  // const handleLogin = () => {
  //   // Handle login functionality
  //   toast.success('Login successful!', {
  //     position: toast.POSITION.TOP_RIGHT,
  //     autoClose: 2000,
  //     hideProgressBar: true,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //   });

  // };

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
          <h1 className="text-3xl font-bold mb-6">Log In</h1>
          <p className="my-4">Your security is our top priority.</p>
          <input
            type="email"
            className="w-full mb-4 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-greenThemeDark"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <input
            type="password"
            className="w-full mb-6 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-greenThemeDark"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <button
            className="w-full bg-greenThemeDark text-white py-2 px-4 rounded-md hover:bg-greenThemeDark transition-colors duration-200"
            onClick={handleLogin}
          >
            Log In
          </button>
          <p className="text-center mt-4">
            Don't have an account?{" "}
            <Link
              to="/CreateProfile"
              className="text-greenThemeDark hover:text-greenThemeDark"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
