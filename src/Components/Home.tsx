import React from "react";
import Navbar from "./Navbar";
import "../styles/tailwind.css";
import MainContainer from "./MainAppComponent/MainContainer";

const Home = () => {
  return (
    <div className="bg-greenTheme">
      <Navbar />
      {/* <div className='h-screen w-screen bg-greenTheme'>

        </div> */}

      <div className="h-screen w-screen bg-greenTheme flex items-center justify-center">
        <div className="max-w-6xl w-full">
          <MainContainer />
        </div>
      </div>


    </div>
  );
};

export default Home;
