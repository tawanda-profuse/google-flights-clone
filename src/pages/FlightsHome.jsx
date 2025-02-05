import React, { useEffect } from "react";
import flightBg from "../assets/flights_nc_4.svg";
import worldMap from "../assets/map.png";
import { useNavigate } from "react-router-dom";
import SearchFlight from "../components/SearchFlight";

const FlightsHome = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Google Flights";
  });

  return (
    <main>
      <img src={flightBg} alt="" className="w-full h-[50vh]" />
      <h1 className="text-center text-[3.5rem] text-[#202124] -translate-y-[70%]">
        Flights
      </h1>
      <div className="flex flex-col justify-center items-center w-[95vw] md:w-[80vw] mx-auto">
        <div className="shadow-md shadow-[rgba(60,64,67,.3)] rounded-md pt-[8px] px-[16px] pb-[48px] relative">
          <SearchFlight flightDates={true} />
        </div>
        <h2 className="my-[4rem] self-start text-[#3c4043] text-2xl font-medium">
          Find cheap flights to anywhere
        </h2>
        <button
          className="relative cursor-pointer"
          onClick={() => navigate("/travel/explore")}
        >
          <img src={worldMap} alt="World map" className="rounded-2xl" />
          <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 bg-white text-[#1a73e8] py-[0.3rem] px-[1rem] rounded-2xl font-medium">
            Explore destinations
          </div>
        </button>
        <h2 className="my-[4rem] self-start text-[#3c4043] text-2xl font-medium">
          Useful tools to help you find the best deals
        </h2>
      </div>
    </main>
  );
};

export default FlightsHome;
