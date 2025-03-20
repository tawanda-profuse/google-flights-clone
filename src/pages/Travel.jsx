import React, { useEffect, useState } from "react";
import trips from "../assets/trips_4.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "../components/Loading";
import staticMap from "../assets/staticmap.png";

const Travel = () => {
  const navigate = useNavigate();
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: `https://${import.meta.env.RAPID_API_HOST}/api/v2/flights/searchFlightEverywhere`,
        params: {
          originEntityId: "95673320",
          cabinClass: "economy",
          journeyType: "one_way",
          currency: "USD",
        },
        headers: {
          "x-rapidapi-key": import.meta.env.RAPID_API_KEY,
          "x-rapidapi-host": import.meta.env.RAPID_API_HOST,
        },
      };
      try {
        const response = await axios.request(options);
        const randIndex = response.data.data.results.length;
        setDestinations(
          response.data.data.results
            .splice(Math.random() * randIndex, 3)
            .map((item) => {
              return {
                image: item.content.image.url,
                location: item.content.location.name,
                details: `The cheapest flight costs ${item.content.flightQuotes.cheapest?.price}. Direct flights cost ${item.content.flightQuotes.direct?.price}`,
              };
            })
        );
      } catch (error) {
        console.error("Error: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {loading && <Loading />}
      <main>
        <div className="relative">
          <img src={trips} alt="" />
          <h1 className="absolute bottom-0 left-2/4 -translate-x-2/4 text-[56px] text-[#202124]">
            Travel
          </h1>
        </div>
        <div className="grid justify-center gap-[2rem] mt-[1rem] mb-[2rem] mx-auto w-[90vw] md:w-[30vw]">
          <div className="relative text-[#70757a]">
            <i className="fas fa-search absolute top-2/4 -translate-y-2/4 left-4"></i>
            <input
              type="text"
              name=""
              placeholder="Search for flights, hotels and more"
              className="p-[0.8rem] pl-[3rem] rounded-4xl w-full outline-none border text-sm placeholder-[#70757a] shadow-md shadow-[#70757a] focus:shadow-lg"
            />
          </div>
          <div className="grid grid-cols-4">
            {[
              {
                icon: "fa-earth-americas",
                text: "Explore",
                clickFunc: () => navigate("/travel/explore"),
              },
              {
                icon: "fa-plane",
                text: "Flights",
                clickFunc: () => navigate("/travel/flights"),
              },
              {
                icon: "fa-bed",
                text: "Hotels",
                clickFunc: () => navigate("/travel/explore"),
              },
              {
                icon: "fa-home",
                text: "Vacation Rentals",
                clickFunc: () => navigate("/travel/explore"),
              },
            ].map((button, index) => (
              <button
                key={index}
                className="text-[#5f6368] cursor-pointer p-[8px] grid items-center justify-center bg-transparent rounded-md hover:bg-[#e7e7e7]"
                onClick={button.clickFunc}
              >
                <i className={`fas ${button.icon}`}></i> {button.text}
              </button>
            ))}
          </div>
        </div>
        <div className="w-[80%] mx-auto">
          <h2 className="text-[#202124] text-[24px]">Popular Destinations</h2>
          <div className="flex flex-col md:flex-row my-[1rem] gap-[0.8rem]">
            <div className="w-full md:w-2/4 order-2 md:order-1 flex flex-col justify-between">
              {loading &&
                new Array(3)
                  .fill(null)
                  .map((_, index) => (
                    <div
                      className="flex rounded-xl border border-[#ccc] hover:shadow-md hover:shadow-[#ccc] h-[25vh] bg-[#ccc] animate-pulse"
                      key={index}
                    ></div>
                  ))}
              {!loading && (
                <>
                  {destinations.length > 0 ? (
                    destinations.map((location, index) => (
                      <div
                        className="flex rounded-xl border border-[#ccc] cursor-pointer hover:shadow-md hover:shadow-[#ccc] my-[0.5rem] md:my-0"
                        key={index}
                        onClick={() => navigate("/travel/explore")}
                      >
                        <img
                          src={location.image}
                          alt={location.location}
                          className="h-[9rem] w-[12rem] rounded-l-xl bg-[gray]"
                        />
                        <div className="flex flex-col pt-[1rem] ml-[1rem] max-w-[18rem]">
                          <h4 className="text-[#202124] text-[1rem] font-medium">
                            {location.location}
                          </h4>
                          <p className="text-[#70757a] text-[0.9rem]">
                            {location.details}
                          </p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p>No destinations available.</p>
                  )}
                </>
              )}
            </div>
            {/* map */}
            <button
              className="relative w-full md:w-2/4 bg-[skyblue] order-1 md:order-2 rounded-2xl cursor-pointer"
              onClick={() => navigate("/travel/explore")}
            >
              <div className="absolute top-4 right-4 text-3xl bg-white py-[0.1rem] px-[0.6rem] cursor-pointer hover:opacity-80">
                <i className="fas fa-arrows-up-down rotate-45 text-[#70757a]"></i>
              </div>
              <img
                src={staticMap}
                alt="map"
                className="rounded-2xl bg-[center] bg-no-repeat cursor-pointer"
              />
            </button>
          </div>
        </div>
      </main>
      <footer className="flex justify-center gap-[1rem] border-t border-t-[#ccc] pt-[1rem] pb-[1.5rem] google-blue text-sm font-[400] mt-[3rem]">
        <a
          href="https://google.com"
          target="_blank"
          className="hover:underline"
        >
          About
        </a>
        <a
          href="https://google.com"
          target="_blank"
          className="hover:underline"
        >
          Privacy
        </a>
        <a
          href="https://google.com"
          target="_blank"
          className="hover:underline"
        >
          Terms
        </a>
        <a
          href="https://google.com"
          target="_blank"
          className="hover:underline"
        >
          Join user studies
        </a>
        <a
          href="https://google.com"
          target="_blank"
          className="hover:underline"
        >
          Feedback
        </a>
        <a
          href="https://google.com"
          target="_blank"
          className="hover:underline"
        >
          Help Center
        </a>
      </footer>
    </>
  );
};

export default Travel;
