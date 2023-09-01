import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import LoaderTwo from "../components/LoaderTwo";
import {
  BsImageFill,
  BsFillCarFrontFill,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { TbCurrencyNaira } from "react-icons/tb";
import { FaBed, FaToilet } from "react-icons/fa";
import { MdOutlineBathroom } from "react-icons/md";
import Swiper from "../components/Swiper";
import AllState from "../components/AllState";

const StatePage = () => {
  const { state } = useParams();
  const [stateData, setStateData] = useState(null);
  const count = stateData ? stateData.length : 0;

  useEffect(() => {
    fetchStateData();
  }, [state]);

  const fetchStateData = async () => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/estates/state/${state}`
      );
      const data = await response.json();
      setStateData(data);
    } catch (error) {
      console.error("Error fetching State data:", error);
    }
  };

  if (!stateData) {
    return (
      <div>
        <LoaderTwo />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      <h1 className="bg-stone-300 py-3 font-bold pl-8 lg:pl-12 capitalize">
        Available In {state}
      </h1>

      <div className="pl-8 lg:pl-12 flex flex-col items-start gap-2">
        <h1 className=" text-xl md:text-2xl font-semibold">
          You can search available Cities and State
        </h1>
        <AllState />
      </div>

      <p className="bg-red-700 mt-4 text-white py-3 pl-8 lg:pl-12">
        Result: {count} {count === 1 ? "house" : "houses"} found
      </p>

      {/* Render the data in the way you want */}
      {stateData.map((estate) => (
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
              <h3 className="font-bold text-red-600 text-xs  sm:text-lg md:text-xl">
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

      <div className="mt-20 px-4 lg:px-8">
        <Swiper />
      </div>
    </div>
  );
};

export default StatePage;
