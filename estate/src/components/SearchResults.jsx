import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import SearchfilterDetails from "./SearchfilterDetails";
import {
  BsImageFill,
  BsFillCarFrontFill,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { TbCurrencyNaira } from "react-icons/tb";
import { FaBed, FaToilet } from "react-icons/fa";
import { MdOutlineBathroom } from "react-icons/md";
import AllState from "./AllState";
import Swiper from "./Swiper";
import Loader from "./Loader";

const SearchResults = () => {
  const location = useLocation();
  const { results } = location.state || {};
  const [visibleResults, setVisibleResults] = useState(7);
  const [isLoading, setIsLoading] = useState(false);
  const count = results ? results.length : 0;

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.scrollHeight - 500 &&
      visibleResults < count &&
      !isLoading // Check isLoading flag
    ) {
      setIsLoading(true); // Set isLoading to true before loading more data
      setTimeout(() => {
        setVisibleResults((prevVisibleResults) => prevVisibleResults + 7);
        setIsLoading(false); // Set isLoading back to false after loading data
      }, 1500); // Simulating a delay to showcase the loading state
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col gap-3">
      <h1 className="bg-stone-300 py-3 font-bold pl-8 lg:pl-12">
        Property for Sale in Nigeria
      </h1>

      <div className="pl-8 lg:pl-12 flex flex-col items-start gap-2">
        <h1 className=" text-xl md:text-2xl font-semibold">
          You can search available Cities and State
        </h1>
        <AllState />
      </div>

      {count > 0 ? (
        <p className="bg-red-700 mt-4 text-white py-3 pl-8 lg:pl-12">
          Result: {count} {count === 1 ? "house" : "houses"} found
        </p>
      ) : (
        <div className="mt-6 mx-10">
          <p className="font-bold text-red-600">
            {count} available house, Please search again
          </p>
          <SearchfilterDetails className="" />
          <div className="flex flex-col items-center justify-center h-screen m-20 bg-stone-300 ">
            <svg
              width="256px"
              height="256px"
              viewBox="-317.44 -317.44 1658.88 1658.88"
              class="icon"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              stroke="#000000"
              stroke-width="20.48"
              transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke="#CCCCCC"
                stroke-width="57.34400000000001"
              >
                <path
                  d="M496 124.608L96 524.576V1024h832V556.576z"
                  fill="#EAEAEA"
                ></path>
                <path d="M256 672h224v352H256z" fill="#434854"></path>
                <path
                  d="M544 640h96v96h-96zM672 640h96v96h-96zM672 512h96v96h-96zM544 512h96v96h-96z"
                  fill="#469FCC"
                ></path>
                <path
                  d="M544 512h96v32h-96zM672 512h96v32h-96zM544 640h96v32h-96zM672 640h96v32h-96z"
                  fill=""
                ></path>
                <path d="M496 64L96 480v96L496 176 928 608v-96z" fill=""></path>
                <path
                  d="M1012.576 505.376L541.248 34.048l-22.624-22.624a31.968 31.968 0 0 0-45.248 0l-22.624 22.624L11.424 473.376a31.968 31.968 0 0 0 0 45.248l22.624 22.624a31.968 31.968 0 0 0 45.248 0L496 124.608l448.672 448.672a31.968 31.968 0 0 0 45.248 0l22.624-22.624a32.032 32.032 0 0 0 0.032-45.28z"
                  fill="#EF4D4D"
                ></path>
                <path
                  d="M238.24 1024A126.656 126.656 0 0 0 256 960a128 128 0 0 0-256 0c0 23.424 6.752 45.088 17.76 64h220.48zM896 832a127.744 127.744 0 0 0-116.224 75.04A94.848 94.848 0 0 0 736 896a96 96 0 0 0-96 96c0 11.296 2.304 21.952 5.888 32h360.384A126.944 126.944 0 0 0 1024 960a128 128 0 0 0-128-128z"
                  fill="#3AAD73"
                ></path>
                <path
                  d="M779.776 907.04A94.848 94.848 0 0 0 736 896a96 96 0 0 0-96 96c0 11.296 2.304 21.952 5.888 32h139.872A126.656 126.656 0 0 1 768 960c0-18.944 4.384-36.768 11.776-52.96z"
                  fill=""
                ></path>
              </g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M496 124.608L96 524.576V1024h832V556.576z"
                  fill="#EAEAEA"
                ></path>
                <path d="M256 672h224v352H256z" fill="#434854"></path>
                <path
                  d="M544 640h96v96h-96zM672 640h96v96h-96zM672 512h96v96h-96zM544 512h96v96h-96z"
                  fill="#469FCC"
                ></path>
                <path
                  d="M544 512h96v32h-96zM672 512h96v32h-96zM544 640h96v32h-96zM672 640h96v32h-96z"
                  fill=""
                ></path>
                <path d="M496 64L96 480v96L496 176 928 608v-96z" fill=""></path>
                <path
                  d="M1012.576 505.376L541.248 34.048l-22.624-22.624a31.968 31.968 0 0 0-45.248 0l-22.624 22.624L11.424 473.376a31.968 31.968 0 0 0 0 45.248l22.624 22.624a31.968 31.968 0 0 0 45.248 0L496 124.608l448.672 448.672a31.968 31.968 0 0 0 45.248 0l22.624-22.624a32.032 32.032 0 0 0 0.032-45.28z"
                  fill="#EF4D4D"
                ></path>
                <path
                  d="M238.24 1024A126.656 126.656 0 0 0 256 960a128 128 0 0 0-256 0c0 23.424 6.752 45.088 17.76 64h220.48zM896 832a127.744 127.744 0 0 0-116.224 75.04A94.848 94.848 0 0 0 736 896a96 96 0 0 0-96 96c0 11.296 2.304 21.952 5.888 32h360.384A126.944 126.944 0 0 0 1024 960a128 128 0 0 0-128-128z"
                  fill="#3AAD73"
                ></path>
                <path
                  d="M779.776 907.04A94.848 94.848 0 0 0 736 896a96 96 0 0 0-96 96c0 11.296 2.304 21.952 5.888 32h139.872A126.656 126.656 0 0 1 768 960c0-18.944 4.384-36.768 11.776-52.96z"
                  fill=""
                ></path>
              </g>
            </svg>
          </div>
        </div>
      )}
      {count > 0 &&
        results.slice(0, visibleResults).map((estate) => (
          <div key={estate._id} className="mx-8 md:mx-12 mt-10">
            <div className="border border-yellow-500 flex flex-col md:flex-row items-start w-full px-3 sm:px-6 md:px-10 py-4 gap-6 md:gap-10">
              <div className="w-full md:w-1/4 flex flex-col gap-2 ">
                <h3 className="text-xl md:txt-2xl font-semibold text-gray-600 hover:text-red-600">
                  {estate.title}
                </h3>
                <Link
                  to={`/estate/${estate._id}`}
                  className="relative inline-block w-full"
                >
                  {estate.img.length > 0 && (
                    <img
                      src={estate.img[2]} // Display the first picture from the array
                      alt={`Picture of ${estate.title}`}
                      style={{ height: "200px" }} // Add desired image size or use CSS class
                      className="object-cover w-full"
                    />
                  )}
                  <div className="absolute bottom-2 left-2 p-2 bg-black bg-opacity-70 text-white text-sm font-bold flex flex-row items-center gap-1">
                    <span>
                      <BsImageFill />
                    </span>
                    {estate.img.length}
                  </div>
                </Link>
              </div>
              <div className="w-full md:w-3/4 mt-0 md:mt-8 flex flex-col gap-3">
                <h3 className="font-bold text-red-600 text-xs sm:text-lg md:text-xl whitespace-nowrap">
                  {estate.subtitle}
                </h3>
                <div className="flex flex-row items-center gap-1 sm:gap-2 font-semibold text-gray-700">
                  <span className="text-sm sm:text-lg md:text-xl">
                    <CiLocationOn />
                  </span>
                  {estate.location}
                </div>
                <p className="text-[8px] sm:text-[10px] md:text-xs">
                  {estate.desp}
                </p>
                <Link
                  to={`/estate/${estate._id}`}
                  className="text-xs md:text-sm text-red-600 underline"
                >
                  More Details
                </Link>
                <div className="border border-yellow-500 " />
                <div className="flex flex-row items-start justify-between">
                  <div className="flex flex-row items-center text-sm md:text-xl lg:text-3xl text-red-600 font-bold">
                    <TbCurrencyNaira />
                    <p>{estate.price}</p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-800">{estate.brand}</p>
                    <div className="flex flex-row items-center text-xs md:text-sm font-bold text-gray-800 gap-1">
                      <BsFillTelephoneFill />
                      <p>{estate.phoneNumber}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-yellow-500 py-3 hidden sm:flex md:flex flex-row items-center justify-evenly">
              <div className="flex flex-row items-center gap-2">
                <FaBed /> <p className="text-sm">{estate.bedroom} Bedrooms</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <MdOutlineBathroom />{" "}
                <p className="text-sm">{estate.bedroom} Bathrooms</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <FaToilet /> <p className="text-sm">{estate.bedroom} Toilets</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <BsFillCarFrontFill />{" "}
                <p className="text-sm">{estate.bedroom} Parking Space</p>
              </div>
            </div>
          </div>
        ))}

      {isLoading && (
        <div className="text-center py-4">
          <p className="">
            <Loader />
          </p>
        </div>
      )}

      <div className="mt-20 px-4 lg:px-8">
        <Swiper />
      </div>
    </div>
  );
};

export default SearchResults;
