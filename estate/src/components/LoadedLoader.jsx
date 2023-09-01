import React from "react";

const LoadedLoader = () => {
  return (
    <div className="mx-8 md:mx-12 mt-10">
      <div className="border border-gray-200 flex flex-col md:flex-row items-start w-full px-3 sm:px-6 md:px-10 py-4 gap-6 md:gap-10">
        <div className="w-full md:w-1/4 flex flex-col gap-2 bg-gray-200 py-2">
          <div className="relative inline-block w-full bg-gray-200 py-10 px-20">
            <div className="absolute bottom-2 left-2 p-2 bg-black bg-opacity-70 text-white text-sm font-bold flex flex-row items-center gap-1">
              <span></span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-3/4 mt-0 md:mt-8 flex flex-col gap-3">
          <h3 className="font-bold text-red-600 text-xs xs:text-sm sm:text-lg md:text-xl whitespace-nowrap"></h3>
          <div className="flex flex-row items-center gap-1 sm:gap-2 font-semibold text-gray-700"></div>
          <p className="text-[8px] sm:text-[10px] md:text-xs"></p>
          <div className="text-xs md:text-sm text-red-600 underline"></div>
          <div className="border border-yellow-500 " />
          <div className="flex flex-row items-start justify-between">
            <div className="flex flex-row items-center text-sm md:text-xl lg:text-3xl text-red-600 font-bold">
              <p></p>
            </div>

            <div>
              <p className="text-xs text-gray-800"></p>
              <div className="flex flex-row items-center text-xs md:text-sm font-bold text-gray-800 gap-1">
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-yellow-500 py-3 hidden sm:flex md:flex flex-row items-center justify-evenly">
        <div className="flex flex-row items-center gap-2">
          <p className="text-sm"></p>
        </div>
        <div className="flex flex-row items-center gap-2"></div>
        <div className="flex flex-row items-center gap-2"></div>
        <div className="flex flex-row items-center gap-2"></div>
      </div>
    </div>
  );
};

export default LoadedLoader;
