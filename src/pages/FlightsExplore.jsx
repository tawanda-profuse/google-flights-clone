import React, { useEffect, useRef } from "react";
import SearchFlight from "../components/SearchFlight";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoidGF3YW5kYS1tc2VuZ2V6aSIsImEiOiJjbTZ1MzhuMzQwYWNtMmpzZzdpdnJzYW4xIn0.XwaxiDYQ54jCuM2fUf2YcA";

const FlightsExplore = () => {
  const scrollRef = useRef();
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return; // Initialize only once

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [0, 20], // Longitude, Latitude
      zoom: 2,
    });

    // Add zoom and rotation controls
    map.current.addControl(new mapboxgl.NavigationControl());
  }, []);

  return (
    <main>
      <div className="flex h-[90vh] justify-between">
        <div className="w-full md:w-[34%] overflow-y-auto overflow-x-hidden scrollbar-hide relative">
          <div className="p-[1rem]">
            <SearchFlight flightDates={false} />
            <input
              type="text"
              className="p-[1rem] outline-none border border-[#ccc] rounded-sm focus:border-2 focus:border-[#1967d2] text-[0.9rem] hover:border-[#444] placeholder-[#555] w-full"
              placeholder="1-week trip in the next 6 months"
            />
          </div>
          <div className="w-full border-t border-b border-b-[#ccc] border-t-[#ccc] flex pl-[2rem] py-[0.5rem] text-sm">
            <button className="px-[1rem] min-w-[8rem] google-blue font-medium flex items-center gap-[0.5rem] cursor-pointer hover:bg-[#e6e6e6]">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                focusable="false"
                className="fill-[#1967d2]"
              >
                <path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"></path>
              </svg>
              All Filters
            </button>
            <div
              className="flex gap-[0.5rem] overflow-x-auto scrollbar-hide relative"
              ref={scrollRef}
            >
              {[
                "Stops",
                "Travel Mode",
                "Interests",
                "Price",
                "Airlines",
                "Duration",
                "Bags",
              ].map((text, index) => (
                <button
                  key={index}
                  className="border border-[#ccc] py-[0.5rem] px-[1rem] flex justify-between gap-[0.5rem] items-center rounded-lg cursor-pointer hover:bg-[#e6e6e6] min-w-[9rem] text-[#222] font-medium"
                >
                  {text} <i className="fas fa-chevron-down"></i>
                </button>
              ))}
              <button
                className="sticky top-2/4 right-0 border border-[#ccc] rounded-full py-[0.5rem] px-[0.8rem] bg-[#ddd] cursor-pointer hover:opacity-90 grey-text"
                onClick={() => {
                  if (scrollRef.current) {
                    scrollRef.current.scrollLeft + 100;
                  }
                }}
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
          <div className="h-[85vh] flex flex-col items-center justify-center gap-[1rem]">
            <p className="text-[#202124] font-[400]">
              Where are you flying from?
            </p>
            <button className="text-[#1a73e8] font-medium text-[.875rem] hover:bg-[#e8eaed] cursor-pointer p-[0.2rem] rounded-lg">
              Get started
            </button>
            <img
              src="https://www.gstatic.com/flights/app/missing_origin.svg"
              alt="travel"
              className="w-[15rem]"
            />
          </div>
          <div className="sticky flex justify-center items-center gap-[1rem] bottom-0 left-0 bg-white w-full py-[0.5rem]">
            <button className="border border-[#ccc] py-[0.4rem] px-[1rem] rounded-3xl text-sm google-blue font-medium cursor-pointer hover:bg-[#e5f0ff]">
              <i className="fas fa-globe"></i> English (United States)
            </button>
            <button className="border border-[#ccc] py-[0.4rem] px-[1rem] rounded-3xl text-sm google-blue font-medium cursor-pointer hover:bg-[#e5f0ff]">
              <i className="fas fa-money-bill"></i> USD
            </button>
          </div>
        </div>
        {/* Map */}
        <div
          className="hidden md:block bg-[skyblue] w-[66%] rounded-xl mb-[1rem] mr-[0.5rem] cursor-pointer"
          ref={mapContainer}
        ></div>
      </div>
    </main>
  );
};

export default FlightsExplore;
