// ProductDetail.js

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowLeft, BsFillTelephoneFill, BsArrowRight } from "react-icons/bs";
import { TbCurrencyNaira } from "react-icons/tb";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import { BsFillCarFrontFill } from "react-icons/bs";
import { FaBed, FaToilet, FaMailBulk } from "react-icons/fa";
import { MdOutlineBathroom } from "react-icons/md";
import LoaderTwo from "../components/LoaderTwo";

const SearchResultsDetails = () => {
  const { id } = useParams();
  const [estate, setEstate] = useState(null);

  useEffect(() => {
    // Fetch the product details using the API
    axios
      .get(`https://realtyhome.onrender.com/api/estates/${id}`)
      .then((response) => {
        setEstate(response.data);
      })
      .catch((error) => {
        console.error("Error fetching estate details:", error);
      });
  }, [id]);

  if (!estate) {
    return (
      <div className="">
        <LoaderTwo />
      </div>
    );
  }

  // Custom arrows for the slider
  const PrevArrow = ({ onClick }) => (
    <button
      className="absolute top-1/2 left-2 transform -translate-y-1/2 text-lg md:text-2xl text-black hover:text-white bg-white/30 hover:bg-black/50 p-2 md:p-4 rounded-full z-10"
      onClick={onClick}
    >
      <BsArrowLeft />
    </button>
  );

  const NextArrow = ({ onClick }) => (
    <button
      className="absolute top-1/2 right-2 transform -translate-y-1/2 text-lg md:text-2xl text-black hover:text-white bg-white/30 hover:bg-black/50 p-2 md:p-4 rounded-full z-10"
      onClick={onClick}
    >
      <BsArrowRight />
    </button>
  );

  // Settings for the slider
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: (i) => (
      <div
        className="h-full w-full bg-red-800"
        style={{
          width: "100%",
          height: "100%",
          backgroundImage: `url(${estate.img[i]})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />
    ),
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="flex flex-col gap-3 mb-20">
      <h1 className="bg-stone-300 py-3 font-bold pl-6 text-sm md:text-md pr-4 whitespace-nowrap lg:pl-12">
        {estate.subtitle}
      </h1>

      <div className="rounded-lg border border-red-700 text-red-700 items-center flex flex-row  mx-8 md:mx-12 text-xs md:text-sm lg:text-md">
        <svg
          width="44px"
          height="44px"
          viewBox="-1024 -1024 3072.00 3072.00"
          fill="#ea0b0b"
          className="icon"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier"></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M669.6 849.6c8.8 8 22.4 7.2 30.4-1.6s7.2-22.4-1.6-30.4l-309.6-280c-8-7.2-8-17.6 0-24.8l309.6-270.4c8.8-8 9.6-21.6 2.4-30.4-8-8.8-21.6-9.6-30.4-2.4L360.8 480.8c-27.2 24-28 64-0.8 88.8l309.6 280z"
              fill=""
            ></path>
          </g>
        </svg>
        <Link to="/">Back to Property List</Link>
      </div>

      <div className="mx-8 lg:mx-12 flex flex-col gap-3">
        <div className="flex flex-row items-center justify-between">
          <h3 className="text-xl md:txt-2xl font-semibold text-gray-600 hover:text-red-600">
            {estate.title}
          </h3>
          <div className="flex flex-row items-center text-sm md:text-xl lg:text-3xl text-red-600 font-bold">
            <TbCurrencyNaira />
            <p>{estate.price}</p>
          </div>
        </div>

        <div className="capitalize flex flex-col md:flex-row items-center justify-center md:justify-between gap-1 sm:gap-2 font-semibold text-gray-700">
          <div className="flex flx-col items-center gap-1">
            <span className="text-sm sm:text-lg md:text-xl">
              <CiLocationOn />
            </span>
            {estate.location}

            <span>{estate.state}</span>
          </div>
          <h1 className="text-xl md:text-2xl font-bold">
            Category: <span>For {estate.category}</span>
          </h1>
        </div>
        <div className="relative h-full w-full">
          <Slider {...sliderSettings}>
            {estate.img.map((img, index) => (
              <div key={index} className="h-[60vh] md:h-[80vh] rounded-lg">
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="object-cover h-full w-full rounded-lg"
                />
              </div>
            ))}
          </Slider>
        </div>

        <div className=" flex flex-row w-full items-center  mt-10 text-[7px] sm:text-[10px] md:text-sm">
          <div className="flex flex-col  w-1/4  border border-black  py-2 items-center ">
            <FaBed /> <p className="">{estate.bedroom} Bedrooms</p>
          </div>
          <div className="flex flex-col  w-1/4 border-r border-t border-b border-black  py-2 items-center ">
            <MdOutlineBathroom /> <p className="">{estate.bedroom} Bathrooms</p>
          </div>
          <div className="flex flex-col  w-1/4 border-r border-t border-b  py-2 border-black items-center ">
            <FaToilet /> <p className="">{estate.bedroom} Toilets</p>
          </div>
          <div className="flex flex-col w-1/4 border-r border-t border-b border-black  py-2 items-center whitespace-nowrap">
            <BsFillCarFrontFill />{" "}
            <p className="">{estate.bedroom} Parking Space</p>
          </div>
        </div>

        <div className="flex flex-col gap-2 bg-stone-400 w-full py-16 px-6 md:px-10">
          <h1 className="text-center text-xl md:text-2xl font-bold">
            Interested in the Property?
          </h1>

          <h1 className="text-center font-bold"> Contact us</h1>
          <div className="flex flex-col md:flex-row gap-2 items-center justify-between">
            <div className="flex flex-col items-center text-sm md:text-lg font-bold text-red-700 ">
              <FaMailBulk />
              {estate.email}
            </div>
            <div className="flex flex-col items-center text-sm md:text-lg font-bold text-red-700">
              <BsFillTelephoneFill />
              <p>{estate.phoneNumber}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col border border-black">
          <h1 className="border-b py-3 text-xl md:text-2xl px-4 border-black font-bold">
            Property Descriptions
          </h1>
          <div className="mx-4 my-6 flex flex-col gap-2 md:gap-3 text-xs md:text-sm lg:text-md">
            <h1 className="capitalize">
              <span className="font-bold ">Note:</span> {estate.desp}
            </h1>
            <h1>
              <span className="font-bold">Property Features:</span>{" "}
              {estate.propertydesp}
            </h1>
            <h1 className="capitalize">
              <span className="font-bold">Condition: </span> {estate.condition}
            </h1>
            <h1 className="capitalize">
              <span className="font-bold">Brand: </span> {estate.brand}
            </h1>
            <h1 className="capitalize">
              <span className="font-bold">Status: </span> {estate.status}
            </h1>
            <h1 className="capitalize">
              <span className="font-bold">Address: </span> {estate.location}
            </h1>
            <h1 className="capitalize">
              <span className="font-bold">State: </span> {estate.state}
            </h1>
            <h1 className="capitalize">
              <span className="font-bold">Service Charge: </span>{" "}
              {estate.servicecharge}
            </h1>
            <h1 className="capitalize">
              <span className="font-bold">Furnishing: </span>{" "}
              {estate.furnishing}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResultsDetails;
