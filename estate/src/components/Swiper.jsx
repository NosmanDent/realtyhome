import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Import the carousel styles
import "slick-carousel/slick/slick-theme.css"; // Import the carousel theme styles
import Oneman from "../assets/one.jpg";
import articleone from "../assets/two.jpg";
import articletwo from "../assets/three.jpg";
import articlethree from "../assets/four.jpg";
import articlefour from "../assets/five.jpg";
import articlefive from "../assets/six.jpg";
import { BsArrowRight } from "react-icons/bs";

export default () => {
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    updateSlidesToShow(); // Initial check
    window.addEventListener("resize", updateSlidesToShow);

    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);

  const NextArrow = ({ onClick }) => (
    <button
      className="hidden md:flex absolute -top-8 right-2 transform -translate-y-1/2 text-lg md:text-2xl text-white bg-black p-2 md:p-4 rounded-full z-10"
      onClick={onClick}
    >
      <BsArrowRight />
    </button>
  );

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
  };

  return (
    <section className="mt-12">
      <div className="flex flex-row items-center justify-between mt-5">
        <h1 className="text-xl sm:text-3xl md:text-5xl font-semibold md:font-medium ">
          Latest Article
        </h1>
        <h1 className="text-xs text-white font-medium bg-black py-1 px-2 flex md:hidden">
          Read More
        </h1>
      </div>

      <div className="relative mt-4 mb-10">
        <Slider {...settings}>
          <div className="carousel-item px-1 md:px-4">
            <img
              className="object-cover object-center h-48 md:h-64 w-[500px]"
              src={Oneman}
              alt="Image 1"
            />
            <div className="flex flex-col mt-2">
              <h1 className="text-[8px] text-xs tracking-wider text-stone-600 ">
                DESIGNS
              </h1>
              <h1 className="text-[10px] xs:text-xs sm:text-sm tracking-wider font-bold">
                Designing the Perfect Nursery
              </h1>
              <h1 className="hidden md:flex text-xs text-stone-600  ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                <br /> sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
              </h1>

              <div className="text-black hidden md:flex flex-col mt-3 items-end justify-end border-t-2 border-blue-700">
                <h1 className="text-[10px]  sm:text-xs md:text-sm font-bold md:p-2 cursor-pointer">
                  Read More
                </h1>
              </div>
            </div>
          </div>

          <div className="carousel-item px-1 md:px-4">
            <img
              className="object-cover object-center h-48 md:h-64 w-[500px]"
              src={articlefive}
              alt="Image 2"
            />
            <div className="flex flex-col   mt-2">
              <h1 className="text-[8px] text-xs tracking-wider text-stone-600 ">
                COLOURS
              </h1>
              <h1 className="text-[10px] xs:text-xs sm:text-sm tracking-wider font-bold">
                Radiants Colours to your Home
              </h1>
              <h1 className="hidden md:flex text-xs text-stone-600  ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                <br /> sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
              </h1>

              <div className="text-black hidden md:flex flex-col mt-3 items-end justify-end border-t-2 border-blue-700">
                <h1 className="text-[10px]  sm:text-xs md:text-sm font-bold md:p-2 cursor-pointer">
                  Read More
                </h1>
              </div>
            </div>
          </div>

          <div className="carousel-item px-1 md:px-4">
            <img
              className="object-cover object-center h-48 md:h-64 w-[500px]"
              src={articleone}
              alt="Image 1"
            />
            <div className="flex flex-col   mt-2">
              <h1 className="text-[8px] text-xs tracking-wider text-stone-600 ">
                DESIGNS
              </h1>
              <h1 className="text-[10px] xs:text-xs sm:text-sm tracking-wider font-bold">
                Designing the Perfect Nursery
              </h1>
              <h1 className="hidden md:flex text-xs text-stone-600  ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                <br /> sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
              </h1>

              <div className="text-black hidden md:flex flex-col mt-3 items-end justify-end border-t-2 border-blue-700">
                <h1 className="text-[10px]  sm:text-xs md:text-sm font-bold md:p-2 cursor-pointer">
                  Read More
                </h1>
              </div>
            </div>
          </div>

          <div className="carousel-item px-1 md:px-4">
            <img
              className="object-cover object-center h-48 md:h-64 w-[500px]"
              src={articlethree}
              alt="Image 2"
            />
            <div className="flex flex-col   mt-2">
              <h1 className="text-[8px] text-xs tracking-wider text-stone-600 ">
                BEDROOM
              </h1>
              <h1 className="text-[10px] xs:text-xs sm:text-sm tracking-wider font-bold">
                Ingredient for Ultimate Lighting Guide
              </h1>
              <h1 className="hidden md:flex text-xs text-stone-600  ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                <br /> sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
              </h1>

              <div className="text-black hidden md:flex flex-col mt-3 items-end justify-end border-t-2 border-blue-700">
                <h1 className="text-[10px]  sm:text-xs md:text-sm font-bold md:p-2 cursor-pointer">
                  Read More
                </h1>
              </div>
            </div>
          </div>

          <div className="carousel-item px-1 md:px-4">
            <img
              className="object-cover object-center h-48 md:h-64 w-[500px]"
              src={articlefour}
              alt="Image 2"
            />
            <div className="flex flex-col   mt-2">
              <h1 className="text-[8px] text-xs tracking-wider text-stone-600 ">
                PET
              </h1>
              <h1 className="text-[10px] xs:text-xs sm:text-sm tracking-wider font-bold">
                Make your home Pet friendly
              </h1>
              <h1 className="hidden md:flex text-xs text-stone-600  ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                <br /> sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
              </h1>

              <div className="text-black hidden md:flex flex-col mt-3 items-end justify-end border-t-2 border-blue-700">
                <h1 className="text-[10px]  sm:text-xs md:text-sm font-bold md:p-2 cursor-pointer">
                  Read More
                </h1>
              </div>
            </div>
          </div>

          <div className="carousel-item px-1 md:px-4">
            <img
              className="object-cover object-center h-48 md:h-64 w-[500px]"
              src={articletwo}
              alt="Image 2"
            />
            <div className="flex flex-col   mt-2">
              <h1 className="text-[8px] text-xs tracking-wider text-stone-600 ">
                HOME OWNER
              </h1>
              <h1 className="text-[10px] xs:text-xs sm:text-sm tracking-wider font-bold">
                How to choose home owner insurance
              </h1>
              <h1 className="hidden md:flex text-xs text-stone-600  ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                <br /> sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
              </h1>

              <div className="text-black hidden md:flex flex-col mt-3 items-end justify-end border-t-2 border-blue-700">
                <h1 className="text-[10px]  sm:text-xs md:text-sm font-bold md:p-2 cursor-pointer">
                  Read More
                </h1>
              </div>
            </div>
          </div>

          <div className="carousel-item px-1 md:px-4">
            <img
              className="object-cover object-center h-48 md:h-64 w-[500px]"
              src={articlefive}
              alt="Image 2"
            />
            <div className="flex flex-col   mt-2">
              <h1 className="text-[8px] text-xs tracking-wider text-stone-600 ">
                EQUITY
              </h1>
              <h1 className="text-[10px] xs:text-xs sm:text-sm tracking-wider font-bold">
                Ways to add Equity to you Home
              </h1>
              <h1 className="hidden md:flex text-xs text-stone-600  ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                <br /> sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
              </h1>

              <div className="text-black hidden md:flex flex-col mt-3 items-end justify-end border-t-2 border-blue-700">
                <h1 className="text-[10px]  sm:text-xs md:text-sm font-bold md:p-2 cursor-pointer">
                  Read More
                </h1>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};
