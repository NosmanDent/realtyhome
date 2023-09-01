import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import AllStateLoader from "./AllStateLoader";

const AllState = () => {
  const [estates, setEstates] = useState(null);
  const [uniqueStates, setUniqueStates] = useState([]);
  const [activeState, setActiveState] = useState(null);

  useEffect(() => {
    fetchEstates();
  }, []);

  const fetchEstates = async () => {
    try {
      const response = await fetch(
        "https://realtyhome.onrender.com/api/estates"
      );
      const data = await response.json();
      const uniqueStateSet = new Set(data.map((estate) => estate.state));
      const uniqueStateArray = Array.from(uniqueStateSet);
      setUniqueStates(uniqueStateArray);
      setEstates(data);
    } catch (error) {
      console.error("Error fetching estates:", error);
    }
  };

  const handleStateClick = (state) => {
    setActiveState(state);
  };

  if (!estates) {
    return (
      <div className="w-3/4">
        <AllStateLoader />
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        {uniqueStates.map((state) => (
          <NavLink
            key={state}
            to={`/state/${state}`}
            onClick={() => handleStateClick(state)}
            className={`whitespace-nowrap flex items-center font-bold capitalize rounded-lg py-2 px-4 text-xs md:text-sm ${
              activeState === state
                ? "bg-blue-500 text-white"
                : "bg-black/50 text-white"
            }`}
          >
            {state}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default AllState;
