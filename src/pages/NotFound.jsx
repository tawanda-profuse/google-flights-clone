import React from "react";
import googleLogo from "../assets/google-logo.svg";
import robot from "../assets/robot.png";

const NotFound = () => {
  return (
    <main>
      <div className="flex md:w-[50vw] justify-center mx-auto items-center my-[2rem]">
        <div className="flex flex-col gap-[1rem] items-start">
          <img src={googleLogo} alt="google logo" className="w-[12rem]" />
          <p className="grey-text">
            <strong className="text-black">404.</strong> That's an error
          </p>
          <p>
            The requested URL {window.location.pathname} was not found on this
            server. <span className="grey-text">That's all we know.</span>
          </p>
        </div>
        <img src={robot} alt="robot" className="w-[15rem] hidden md:block" />
      </div>
    </main>
  );
};

export default NotFound;
