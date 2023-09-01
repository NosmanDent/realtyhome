import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GrLinkNext } from "react-icons/gr";
import CategoryLoader from "./CategoryLoader";

const HomeCategories = () => {
  const [estates, setEstates] = useState(null);
  const [categoryCounts, setCategoryCounts] = useState({});

  useEffect(() => {
    fetchEstates();
  }, []);

  const fetchEstates = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/estates");
      const data = await response.json();
      setEstates(data);
      calculateCategoryCounts(data);
    } catch (error) {
      console.error("Error fetching estates:", error);
    }
  };

  const calculateCategoryCounts = (data) => {
    const counts = {};
    data.forEach((estate) => {
      counts[estate.category] = (counts[estate.category] || 0) + 1;
    });
    setCategoryCounts(counts);
  };

  const categoryBackgrounds = {
    sale: "url('https://images.unsplash.com/photo-1560184897-ae75f418493e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80')",
    rent: "url('https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80')",
    shortlet:
      "url('https://images.unsplash.com/photo-1558036117-15d82a90b9b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80')",
    jointventure:
      "url('https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80')",
  };

  if (!estates) {
    return (
      <div className="mt-20 mx-6 md:mx-8">
        <CategoryLoader />
      </div>
    );
  }

  return (
    <div className="px-6 md:px-8">
      <div className="flex items-start justify-start">
        <h1 className="text-xl sm:text-3xl md:text-5xl font-semibold md:font-medium  mt-5">
          Discover Real Estate Best Deal
        </h1>
      </div>
      <div className="flex flex-col md:flex-row w-full items-center gap-2  h-[80vh] md:h-[50vh] mt-3">
        {Object.keys(categoryCounts).map((category) => (
          <Link
            key={category}
            to={`/category/${category}`}
            className="whitespace-nowrap flex flex-col items-center justify-between font-bold text-xl md:text-2xl pt-10 pb-2 md:pr-4 capitalize rounded-lg w-full md:w-1/3 h-full "
            style={{
              backgroundImage: categoryBackgrounds[category],
              backgroundSize: "cover",
            }}
          >
            <span className="bg-black/50 text-white py-2 text-xs md:text-sm px-4 rounded-lg">
              For {category}
            </span>

            <div className="flex flex-col md:flex-row items-center justify-between gap-2">
              <span className="bg-white text-black py-2 px-4 rounded-lg text-xs">
                {categoryCounts[category]}{" "}
                {categoryCounts[category] === 1 ? "listing" : "listings"}
              </span>
              <span className="text-sm bg-white shadow-lg shadow-black p-3 rounded-full ">
                <GrLinkNext />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeCategories;
