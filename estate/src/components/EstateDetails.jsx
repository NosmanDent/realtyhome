import { useState } from "react";

import { TbCurrencyNaira } from "react-icons/tb";

import { GrClose } from "react-icons/gr";

const EstateDetails = ({ estate }) => {
  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };
  return (
    <>
      <section
        onClick={handleModalOpen}
        className="font rounded-lg flex flex-col xs:w-[400px] w-[350px] gap-5   text-black p-4 cursor-pointer"
      >
        <div className="flex flex-col w-full h-full">
          <div className="relative flex-1 rounded-lg  w-full h-1/2">
            <div className="flex flex-wrap mt-4">
              {estate.img.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="w-48 h-48 object-cover mr-4 mb-4 rounded-lg"
                />
              ))}
            </div>
            <div className="absolute top-0 right-0 flex items-center justify-end p-4">
              <div className="bg-black text-white rounded-full flex items-center justify-center w-10 h-10">
                <TbCurrencyNaira />
              </div>
              <span className="bg-black text-white rounded-lg px-4 ml-2 py-1">
                {estate.price}
              </span>
            </div>
          </div>
          <div className="mt-2 bg p-2 rounded-lg">
            <div className="flex flex-row items-center   justify-between ">
              <h1 className="font-bold xs:text-sm md:text-md text-xs text-white">
                Brand Name:
              </h1>
              <h1 className="font-semibold xs:text-sm md:text-md text-xs text-white">
                {estate.brand}
              </h1>
            </div>
            <div className="flex flex-row items-center   justify-between ">
              <h1 className="font-bold xs:text-sm md:text-md text-xs text-white">
                Title:
              </h1>
              <h1 className="font-semibold xs:text-sm md:text-md text-xs text-white">
                {estate.title}
              </h1>
            </div>
            <p className="text-[10px] text-stone-300">
              Click for more information
            </p>
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="flex flex-col w-full sm:p-10 p-4 bg-black/10">
            <div className="flex flex-col  w-full h-full bg-white pb-20">
              <button
                className=" text-black pt-5 pb-10 ml-auto pr-3"
                onClick={handleModalClose}
              >
                <GrClose />
              </button>
              <div className="flex flex-col w-full lg:px-16 md:px-10 sm:px-8 xs:px-6 px-4">
                <div className="flex flex-row items-center my-2 md:py-3 sm:py-2 py-1 xs:px-3 px-1 justify-between border-b border-t border-l border-r border-black">
                  <h1 className="font-bold xs:text-sm md:text-md text-xs">
                    Brand Name:
                  </h1>
                  <h1 className="font-semibold xs:text-sm md:text-md text-xs">
                    {estate.brand}
                  </h1>
                </div>
                <div className="flex flex-row items-center my-2 md:py-3 sm:py-2 py-1 xs:px-3 px-1 justify-between border-b border-t border-l border-r border-black">
                  <h1 className="font-bold xs:text-sm md:text-md text-xs">
                    Title:
                  </h1>
                  <h1 className="font-semibold xs:text-sm md:text-md text-xs">
                    {estate.title}
                  </h1>
                </div>
                <div className="flex flex-row items-center my-2 md:py-3 sm:py-2 py-1 xs:px-3 px-1 justify-between border-b border-t border-l border-r border-black">
                  <h1 className="font-bold xs:text-sm md:text-md text-xs">
                    Product Name:
                  </h1>
                  <h1 className="font-semibold xs:text-sm md:text-md text-xs">
                    {estate.title}
                  </h1>
                </div>
                <div className="flex flex-row items-center my-2 md:py-3 sm:py-2 py-1 xs:px-3 px-1 justify-between border-b border-t border-l border-r border-black">
                  <h1 className="font-bold xs:text-sm md:text-md text-xs">
                    Category:
                  </h1>
                  <h1 className="font-semibold xs:text-sm md:text-md text-xs">
                    {estate.category}
                  </h1>
                </div>
                <div className="flex flex-row items-center my-2 md:py-3 sm:py-2 py-1 xs:px-3 px-1 justify-between border-b border-t border-l border-r border-black">
                  <h1 className="font-bold xs:text-sm md:text-md text-xs">
                    Condition:
                  </h1>
                  <h1 className="font-semibold xs:text-sm md:text-md text-xs">
                    {estate.condition}
                  </h1>
                </div>
                <div className="flex flex-row items-center my-2 md:py-3 sm:py-2 py-1 xs:px-3 px-1 justify-between border-b border-t border-l border-r border-black">
                  <h1 className="font-bold xs:text-sm md:text-md text-xs">
                    Email:
                  </h1>
                  <h1 className="font-semibold xs:text-sm md:text-md text-xs">
                    {estate.email}
                  </h1>
                </div>
                <div className="flex flex-row items-center my-2 md:py-3 sm:py-2 py-1 xs:px-3 px-1 justify-between border-b border-t border-l border-r border-black">
                  <h1 className="font-bold xs:text-sm md:text-md text-xs">
                    Phone No:
                  </h1>
                  <h1 className="font-semibold xs:text-sm md:text-md text-xs">
                    {estate.phoneNumber}
                  </h1>
                </div>
                <div>
                  <h1 className="font-bold xs:text-sm md:text-md text-xs">
                    Description
                  </h1>
                  <p className=" text-justify xs:text-sm md:text-md text-xs">
                    {estate.desp}
                  </p>
                </div>
                <p className="text-stone-400 text-xs">
                  Time Created: {estate.createdAt}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EstateDetails;
