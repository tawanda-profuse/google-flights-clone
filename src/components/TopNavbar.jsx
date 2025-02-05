import React from "react";
import googleLogo from "../assets/google-logo.svg";
import { useNavigate } from "react-router-dom";

const TopNavbar = ({ setSideMenu }) => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between w-full px-[1rem] py-[0.1rem] items-center shadow-sm shadow-[#ccc] relative">
      <div className="flex gap-[2rem]">
        <div className="flex items-center gap-[0.8rem]">
          <button
            onClick={() => setSideMenu((prev) => !prev)}
            className="cursor-pointer"
          >
            <i className="fas fa-bars grey-text text-xl"></i>
          </button>
          <a href="https://google.com">
            <img src={googleLogo} className="w-[6rem]" />
          </a>
        </div>
        <div
          className="hidden md:flex gap-[1rem] items-center font-[400]"
          onClick={() => setSideMenu(false)}
        >
          <button
            className={`shadow-sm shadow-[#ccc] py-[0.5rem] px-[1rem] text-sm hover:text-[#1967d2] cursor-pointer rounded-2xl hover:bg-[#eee] ${
              !window.location.pathname.includes("flights") &&
              !window.location.pathname.includes("explore") &&
              "bg-[#e5f0ff]"
            }`}
            onClick={() => navigate("/")}
          >
            {" "}
            <i className="fas fa-suitcase-rolling google-blue"></i> Travel
          </button>
          <button
            className={`shadow-sm shadow-[#ccc] py-[0.5rem] px-[1rem] text-sm hover:text-[#1967d2] cursor-pointer rounded-2xl hover:bg-[#eee] ${
              window.location.pathname.includes("explore") && "bg-[#e5f0ff]"
            }`}
            onClick={() => navigate("/travel/explore")}
          >
            {" "}
            <i className="fas fa-earth-americas google-blue"></i> Explore
          </button>
          <button
            className={`shadow-sm shadow-[#ccc] py-[0.5rem] px-[1rem] text-sm hover:text-[#1967d2] cursor-pointer rounded-2xl hover:bg-[#eee] ${
              window.location.pathname.includes("flights") && "bg-[#e5f0ff]"
            }`}
            onClick={() => navigate("/travel/flights")}
          >
            {" "}
            <i className="fas fa-plane google-blue"></i> Flights
          </button>
          <button className="shadow-sm shadow-[#ccc] py-[0.5rem] px-[1rem] text-sm hover:text-[#1967d2] cursor-pointer rounded-2xl hover:bg-[#eee]">
            <i className="fas fa-bed google-blue"></i> Hotels
          </button>
          <button className="shadow-sm shadow-[#ccc] py-[0.5rem] px-[1rem] text-sm hover:text-[#1967d2] cursor-pointer rounded-2xl hover:bg-[#eee]">
            {" "}
            <i className="fas fa-house google-blue"></i> Vacation Rentals
          </button>
        </div>
      </div>
      <div
        className="flex gap-[2rem] items-center"
        onClick={() => setSideMenu(false)}
      >
        <button className="cursor-pointer">
          <i className="fas fa-moon grey-text text-xl"></i>
        </button>
        <button className="flex flex-wrap w-[1.5rem] h-[1.5rem] cursor-pointer">
          {new Array(9).fill(null).map((_, index) => (
            <i
              key={index}
              className="fas fa-circle text-[0.3rem] grey-text w-1/3"
            ></i>
          ))}
        </button>
        <button className="rounded-full w-[2rem] h-[2rem] bg-[red] cursor-pointer"></button>
      </div>
    </div>
  );
};

export default TopNavbar;
