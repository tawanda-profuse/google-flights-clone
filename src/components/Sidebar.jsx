import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ open, setOpen }) => {
  const navigate = useNavigate();
  useEffect(() => {
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        setOpen(false);
      }
    });
  }, []);

  return (
    <div
      id="sidebar"
      className={`fixed bg-[white] z-[100] w-1/5 transition-all duration-400 ${
        open ? "left-0" : "-left-1/5"
      } flex flex-col gap-[1rem] grey-text font-medium py-[1rem] h-[90vh] overflow-y-auto border-r border-r-[#ccc] text-[0.9rem]`}
      onClick={() => setOpen(false)}
    >
      {[
        {
          text: "Travel",
          icon: "fa-suitcase-rolling",
          clickFunc: () => navigate("/"),
        },
        {
          text: "Explore",
          icon: "fa-earth-americas",
          clickFunc: () => navigate("/travel/explore"),
        },
        {
          text: "Flights",
          icon: "fa-plane",
          clickFunc: () => navigate("/travel/flights"),
        },
        {
          text: "Hotels",
          icon: "fa-bed",
          clickFunc: () => navigate("/travel/explore"),
        },
        {
          text: "Vacation Rentals",
          icon: "fa-house",
          clickFunc: () => navigate("/travel/explore"),
        },
        {
          text: "Tracked Flight Prices",
          icon: "fa-arrow-trend-up",
          clickFunc: () => navigate("/travel/flights"),
        },
        {
          text: "Change Language",
          icon: "fa-globe",
          clickFunc: () => navigate("/change-language"),
        },
        {
          text: "Change Currency",
          icon: "fa-money-bill",
          clickFunc: () => navigate("/change-currency"),
        },
        {
          text: "Change Location",
          icon: "fa-location-pin",
          clickFunc: () => navigate("/change-currency"),
        },
        {
          text: "Flights Settings",
          icon: "fa-gear",
          clickFunc: () => navigate("/settings"),
        },
        {
          text: "Feedback",
          icon: "fa-message",
          clickFunc: () => navigate("/feedback"),
        },
        {
          text: "Help",
          icon: "fa-question",
          clickFunc: () => navigate("/help"),
        },
      ].map((button, index) => (
        <button
          key={index}
          className=" flex justify-start items-center gap-[1rem] py-[0.5rem] px-[2rem] cursor-pointer"
          onClick={button.clickFunc}
        >
          {" "}
          <i className={`fas ${button.icon}`}></i> {button.text}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
