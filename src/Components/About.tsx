import React from "react";
import Navbar from "./Navbar";

const About = () => {
  return (
    <>
      <Navbar />

      <div className="h-screen w-screen bg-greenTheme flex items-center justify-center">
        <div className="max-w-6xl w-full">
        <h1 className="text-6xl">About page</h1>
        </div>
      </div>

    </>
  );
};

export default About;
