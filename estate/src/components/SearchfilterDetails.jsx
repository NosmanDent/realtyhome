import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "./Loader";

const SearchfilterDetails = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false); // New state for loading
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setErrorMessage("Please, fill the search field");
      return;
    }

    // Show the loader
    setLoading(true);

    // Make the API request using Axios
    axios
      .get(`https://realtyhome.onrender.com/api/estates/search/${searchQuery}`)
      .then((response) => {
        // Navigate to the search results page with the fetched data
        navigate(`/search-results`, { state: { results: response.data } });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        // Hide the loader after the API request is completed
        setLoading(false);
      });
  };

  return (
    <section>
      <div className="flex flex-col md:flex-row gap-1 items-center justify-start md:justify-center w-full">
        <input
          type="text"
          placeholder="e.g. sale, jucuzzi, lagos, shortlet e.t.c"
          value={searchQuery}
          onChange={handleInputChange}
          className="w-full md:w-3/4 border py-3 focus:outline-none px-3"
        />
        <button
          className="bg-blue-700 text-white py-3 lg:px-16 w-full md:w-1/4"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      {errorMessage && (
        <p className="text-red-500 text-sm md:text-xl font-semibold">
          {errorMessage}
        </p>
      )}
      {loading && (
        <div className="text-center mt-4">
          {/* Replace this with your loader or spinner */}
          <div className="text-white">
            <Loader />
          </div>
        </div>
      )}
    </section>
  );
};

export default SearchfilterDetails;
