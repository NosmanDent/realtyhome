import React from "react";

const CategoryLoader = () => {
  return (
    <div className="flex flex-col gap-4 w-full h-screen ">
      <div className="w-1/2 py-4 md:py-6 bg-gray-200 rounded-md animate-pulse"></div>
      <div className="flex flex-col md:flex-row gap-2 w-full h-[30vh] md:h-[60vh] ">
        <div className="w-full h-full md:w-1/3 bg-gray-200 rounded-md animate-pulse flex flex-col">
          <div className="flex flex-col items-center animate-pulse h-full">
            <span className="bg-gray-300 py-6 px-20  rounded-md mt-16 text-center"></span>
            <div className="flex flex-row justify-between mx-4 mt-[200px]">
              <span className="bg-gray-300 py-4 px-[150px] rounded-md"></span>
            </div>
          </div>
        </div>
        <div className="w-full h-full md:w-1/3 bg-gray-200 rounded-md animate-pulse flex flex-col">
          <div className="flex flex-col items-center animate-pulse h-full">
            <span className="bg-gray-300 py-6 px-20  rounded-md mt-16 text-center"></span>
            <div className="flex flex-row justify-between mx-4 mt-[200px]">
              <span className="bg-gray-300 py-4 px-[150px] rounded-md"></span>
            </div>
          </div>
        </div>
        <div className="w-full h-full md:w-1/3 bg-gray-200 rounded-md animate-pulse flex flex-col">
          <div className="flex flex-col items-center animate-pulse h-full">
            <span className="bg-gray-300 py-6 px-20  rounded-md mt-16 text-center"></span>
            <div className="flex flex-row justify-between mx-4 mt-[200px]">
              <span className="bg-gray-300 py-4 px-[150px] rounded-md"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryLoader;
