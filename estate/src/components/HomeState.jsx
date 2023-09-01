import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import LoaderTwo from "./LoaderTwo";
import AllState from "./AllState";

const HomeState = () => {
  const [estates, setEstates] = useState(null); // Change initial state to null
  const uniqueStates = ["Lagos", "Abuja"];

  useEffect(() => {
    fetchEstates();
  }, []);

  const fetchEstates = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/estates");
      const data = await response.json();

      // Filter the data to include only estates with state1 and state2
      const filteredEstates = data.filter(
        (estate) => estate.state === "Abuja" || estate.state === "Lagos"
      );

      // Add image URL for each state
      const estatesWithImages = filteredEstates.map((state) => ({
        ...state,
        imageUrl:
          state.state === "Abuja"
            ? "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80"
            : "https://images.unsplash.com/photo-1555636222-cae831e670b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=877&q=80",
      }));

      setEstates(estatesWithImages);
    } catch (error) {
      console.error("Error fetching estates:", error);
    }
  };

  if (!estates) {
    return (
      <div className="w-full flex items-center justify-around h-[20vh]">
        <LoaderTwo />
      </div>
    );
  }

  return (
    <div className="mt-12 md:mt-20 px-6 md:px-8">
      <div className="flex items-start justify-start">
        <h1 className="text-xl sm:text-3xl md:text-5xl font-semibold md:font-medium mt-5 mb-4">
          Find Properties in These Cities
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center w-full gap-2 ">
        {uniqueStates.map((state) => {
          const estate = estates.find((e) => e.state === state);
          if (estate) {
            return (
              <Link
                key={estate._id}
                to={`/state/${estate.state}`}
                className="whitespace-nowrap capitalize text-white w-full h-[50vh]"
                style={{
                  backgroundImage: `url(${estate.imageUrl})`,
                  backgroundSize: "cover",
                }}
              >
                <div className="bg-black/50 h-[50vh] flex flex-col items-center justify-center gap-4 md:gap-8">
                  <h1 className="font-serif text-sm md:text-3xl italic flex flex-col mb-2 items-center gap-2">
                    Looking for a Home in{" "}
                    <span className="font-bold bg-white/60 text-black py-2 px-3 rounded-lg">
                      {estate.state}
                    </span>
                  </h1>
                  <div className="transform -translate-y-1/2 text-lg md:text-2xl text-black hover:text-white bg-white/30 hover:bg-black/50 p-2 md:p-4 rounded-full z-10">
                    <BsArrowRight />
                  </div>
                </div>
              </Link>
            );
          }
          return null;
        })}
      </div>
      <div className="mt-4 flex items-center justify-center">
        <AllState />
      </div>
    </div>
  );
};

export default HomeState;
