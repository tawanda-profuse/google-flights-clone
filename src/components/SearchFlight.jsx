import React from "react";

const SearchFlight = ({ flightDates }) => {
  return (
    <form className="font-[Roboto] text-[14px] font-[400] text-[#70757a] flex flex-col justify-center">
      <div className="flex gap-[0.5rem]">
        <select className={`py-[0.5rem] px-[1rem] outline-none focus:border-b-2 focus:border-b-[#1967d2] cursor-pointer transition-all ${flightDates ? "text-[1rem]" : "text-[0.9rem]"}`}>
          <option value="Round Trip">Round Trip</option>
          <option value="One Way"> ➡️ One Way</option>
          <option value="Multi-city">Multi-city</option>
        </select>
        <input
          type="number"
          placeholder="👤"
          className="max-w-[4rem] py-[0.5rem] px-[1rem] outline-none border-b focus:border-b-2 focus:border-b-[#1967d2] cursor-pointer transition-all text-[1rem]"
        />
        <select className={`py-[0.5rem] px-[1rem] outline-none focus:border-b-2 focus:border-b-[#1967d2] cursor-pointer transition-all ${flightDates ? "text-[1rem]" : "text-[0.9rem]"}`}>
          <option value="Economy">Economy</option>
          <option value="Premium economy">Premium economy</option>
          <option value="Business">Business</option>
          <option value="First">First</option>
        </select>
      </div>
      <div className={`${!flightDates && "w-[95vw] md:w-[60vw]"} grid grid-cols-2 md:grid-cols-4 justify-center items-center gap-[0.5rem] my-[0.5rem]`}>
        <input
          type="text"
          placeholder="Where from?"
          className={`p-[1rem] outline-none border border-[#ccc] rounded-sm focus:border-2 focus:border-[#1967d2] ${flightDates ? "text-[1.1rem]" : "text-[0.9rem]"} hover:border-[#444] placeholder-[#555]`}
        />
        <input
          type="text"
          placeholder="Where to?"
          className={`p-[1rem] outline-none border border-[#ccc] rounded-sm focus:border-2 focus:border-[#1967d2] ${flightDates ? "text-[1.1rem]" : "text-[0.9rem]"} hover:border-[#444] placeholder-[#555]`}
        />
        {flightDates && (
          <>
            <div className="flex flex-col md:flex-row items-center">
              <span className="text-[1.1rem] text-[#555]">Departure</span>
              <input
                type="date"
                className="p-[1rem] outline-none border border-[#ccc] md:border-l-0 focus:border-2 rounded-sm md:focus:border-l-0 focus:border-[#1967d2] text-[1rem] hover:border-[#444] w-full"
              />
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <span className="text-[1.1rem] text-[#555]">Return</span>
              <input
                type="date"
                className="p-[1rem] outline-none border border-[#ccc] md:border-l-0 focus:border-2 rounded-sm md:focus:border-l-0 focus:border-[#1967d2] text-[1rem] hover:border-[#444] w-full"
              />
            </div>
          </>
        )}
      </div>
      {flightDates && (
        <button className="flex gap-[0.8rem] items-center absolute -bottom-4 left-2/4 -translate-x-2/4 bg-[#1967d2] hover:bg-[#174ea6] text-white px-[1rem] py-[0.5rem] text-lg font-medium rounded-3xl cursor-pointer">
          <i className="fas fa-search"></i> Search
        </button>
      )}
    </form>
  );
};

export default SearchFlight;
