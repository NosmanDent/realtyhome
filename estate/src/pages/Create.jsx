import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const Create = () => {
  const [creating, setCreatting] = useState(false);
  const [created, setCreated] = useState(false);
  const [formError, setFormError] = useState("");

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [desp, setDesp] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [condition, setCondition] = useState("");
  const [brand, setBrand] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [images, setImages] = useState([]);

  const [status, setStatus] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [pricemonth, setPricemonth] = useState("");
  const [priceanuum, setPriceannum] = useState("");
  const [bedroom, setBedroom] = useState("");
  const [bathroom, setBathroom] = useState("");
  const [toilets, setToilets] = useState("");
  const [packingspace, setPackingspace] = useState("");
  const [servicecharge, setServicecharge] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [propertydesp, setPropertydesp] = useState("");
  const [furnishing, setFurnishing] = useState("");
  const [state, setState] = useState("");

  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setImages((prevImages) => [...prevImages, ...selectedFiles]);
  };

  const handleDelete = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");
    setCreatting(true);

    if (
      !title ||
      !price ||
      !desp ||
      !category ||
      !condition ||
      images.length === 0 ||
      !brand ||
      !email ||
      !phoneNumber ||
      !status ||
      !subtitle ||
      !pricemonth ||
      !priceanuum ||
      !bedroom ||
      !bathroom ||
      !toilets ||
      !packingspace ||
      !servicecharge ||
      !state ||
      !location ||
      !type ||
      !propertydesp ||
      !furnishing
    ) {
      setFormError(
        "Please fill in all the fields and select a file to upload."
      );
      setCreatting(false);
      return;
    }

    // Create a new FormData object
    const formData = new FormData();
    formData.append("title", title);
    formData.append("desp", desp);
    formData.append("category", category);
    formData.append("price", price);
    formData.append("condition", condition);
    formData.append("brand", brand);
    formData.append("email", email);
    formData.append("phoneNumber", phoneNumber);

    images.forEach((image) => {
      formData.append("img", image);
    });

    formData.append("status", status);
    formData.append("subtitle", subtitle);
    formData.append("pricemonth", pricemonth);
    formData.append("priceanuum", priceanuum);
    formData.append("bedroom", bedroom);
    formData.append("bathroom", bathroom);
    formData.append("toilets", toilets);
    formData.append("packingspace", packingspace);
    formData.append("servicecharge", servicecharge);
    formData.append("state", state);
    formData.append("location", location);
    formData.append("type", type);
    formData.append("propertydesp", propertydesp);
    formData.append("furnishing", furnishing);

    try {
      await new Promise((resolve) => setTimeout(resolve, 500));

      const response = await fetch("http://localhost:4000/api/estates", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        // Document successfully created
        console.log("Document created");
        setCreatting(false);
        setCreated(true);
        navigate("/");
      } else {
        // Handle error case
        console.error("Failed to create document");
        setCreatting(false);
      }
    } catch (error) {
      console.error("Error occurred:", error);
      setCreatting(false);
    }
  };

  return (
    <div className="flex flex-col w-full mb-16">
      <h1 className="bg-stone-300 py-3 font-bold pl-8 lg:pl-12">Add Listing</h1>
      <div className="flex flex-col bg-red-200 my-8 md:my-10 mx-8 md:mx-10 py-8 md:py-10 pl-4 md:pl-10 gap-1">
        <h1 className="font-bold ">Rules for Listing Property</h1>
        <p className="text-xs md:text-sm">
          It is important that you read and understand the rules for listing
          property on Nigeria Property Centre.{" "}
          <span className="text-red-600 underline">Click here for details</span>
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full px-8 md:px-20"
      >
        <div className="flex flex-col md:flex-row items-center w-full md:gap-4">
          <label className="block mb-4 w-full md:w-3/4">
            <span className="text-black font-semibold mr-2">Title:</span>
            <input
              placeholder="e.g, Luxury 3 Bedroom Flat"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="block text-xs md:text-sm w-full border border-gray-500 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </label>

          <label className="block mb-4 w-full md:md:w-1/4">
            <span className="text-black font-semibold mr-2">Status:</span>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="block w-full border border-gray-500 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="" className="text-xs md:text-sm w-1/2">
                Select status
              </option>
              <option value="available" className="text-xs md:text-sm w-1/2">
                Available
              </option>
              <option value="rented" className="text-xs md:text-sm w-1/2">
                Rented
              </option>
              <option value="sold" className="text-xs md:text-sm w-1/2">
                Sold
              </option>
            </select>
          </label>
        </div>

        <label className="block mb-4">
          <span className="text-black font-semibold mr-2">Subtitle:</span>
          <input
            placeholder="e.g, Excellent Facilities in a Cozy Enviroment"
            type="text"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
            className="block text-xs md:text-sm w-full border border-gray-500 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </label>

        <div className="flex flex-col md:flex-row items-center w-full md:gap-4">
          <label className="block mb-4 w-full md:w-1/2">
            <span className="text-black font-semibold mr-2">Category:</span>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border border-gray-500 rounded px-3 py-2 focus:outline-none focus:border-blue-500 text-xs md:text-sm"
            >
              <option value="">Select category</option>
              <option value="rent">Rent</option>
              <option value="sale">Sale</option>
              <option value="jointventure">Joint Venture</option>
              <option value="shortlet">Short Let</option>
            </select>
          </label>

          <label className="block mb-4 w-full md:w-1/2">
            <span className="text-black font-semibold mr-2">Type:</span>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="block w-full border border-gray-500 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select type</option>
              <option value="flatapartment">Flat/Apatment</option>
              <option value="house">House</option>
              <option value="land">Land</option>
              <option value="property">Commercial Property</option>
            </select>
          </label>
        </div>

        <div className="flex flex-col">
          <label className="block">
            <span className="text-black font-semibold mr-2">Address:</span>
            <input
              placeholder="e.g. C1/40 Benson Road, Lokanga Estate"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="block text-xs md:text-sm w-full border border-gray-500 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </label>
          <p className="text-[10px] md:text-xs text-stone-500 mb-4">
            Note: Add the name of the street/road and estate if applicable. This
            helps with the visibility of your listing when people search for
            property. DO NOT add the state, locality or area selected above
            here.
          </p>
        </div>

        <div className="flex flex-col">
          <label className="block">
            <span className="text-black font-semibold mr-2">State:</span>
            <input
              placeholder="e.g. Lagos"
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="block text-xs md:text-sm w-full border border-gray-500 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </label>
          <p className="text-[10px] md:text-xs text-stone-500 mb-4">
            Note: Add the name of the street/road and estate if applicable. This
            helps with the visibility of your listing when people search for
            property. DO NOT add the state, locality or area selected above
            here.
          </p>
        </div>

        <div className="flex flex-col md:flex-row w-full gap-4">
          <label className="block md:mb-4 w-full md:w-1/2">
            <span className="text-black font-semibold mr-2">Brand:</span>
            <input
              placeholder="company name"
              type="text"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="block text-xs md:text-sm w-full border border-gray-500 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </label>
          <div className="flex flex-row w-full md:w-1/2 gap-2">
            <label className="block md:mb-4 w-1/2">
              <span className="text-black font-semibold mr-2">Condition:</span>
              <input
                placeholder="e.g. New, Old or Renovated"
                type="text"
                value={condition}
                onChange={(e) => setCondition(e.target.value)}
                className="block text-xs md:text-sm w-full border border-gray-500 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </label>
            <label className="block mb-4 w-1/2">
              <span className="text-black font-semibold mr-2">Price:</span>
              <input
                placeholder="e.g. 1000000"
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="block text-xs md:text-sm w-full border border-gray-500 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </label>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-2 w-full">
          <div className="flex flex-row gap-2 items-center w-full md:w-1/2">
            <label className="block mb-4  w-1/2">
              <span className="text-black text-sm md:text-md font-semibold mr-2">
                Bedroom:
              </span>
              <input
                type="number"
                value={bedroom}
                onChange={(e) => setBedroom(e.target.value)}
                className="block w-full border border-gray-500 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </label>
            <label className="block mb-4 w-1/2 ">
              <span className="text-black text-sm md:text-md font-semibold mr-2">
                Bathroom:
              </span>
              <input
                type="number"
                value={bathroom}
                onChange={(e) => setBathroom(e.target.value)}
                className="block w-full border border-gray-500 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </label>
          </div>
          <div className="flex flex-row gap-2 items-center w-full md:w-1/2">
            <label className="block mb-4 w-1/2 ">
              <span className="text-black text-sm md:text-md font-semibold mr-2">
                Toilets:
              </span>
              <input
                type="number"
                value={toilets}
                onChange={(e) => setToilets(e.target.value)}
                className="block w-full border border-gray-500 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </label>
            <label className="block mb-4 w-1/2 ">
              <span className="text-black text-sm md:text-md font-semibold mr-2">
                Packing Space:
              </span>
              <input
                type="number"
                value={packingspace}
                onChange={(e) => setPackingspace(e.target.value)}
                className="block w-full border border-gray-500 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </label>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center w-full md:gap-4">
          <label className="block mb-4 w-full md:w-1/2">
            <span className="text-black font-semibold mr-2">Email:</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full border border-gray-500 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </label>
          <label className="block mb-4 w-full md:w-1/2">
            <span className="text-black font-semibold mr-2">Phone Number:</span>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="block w-full border border-gray-500 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </label>
        </div>

        <div className="flex flex-row gap-2 items-center w-full">
          <div className="w-1/2">
            <label className="block">
              <span className="text-black font-semibold mr-2">
                Price per Month:
              </span>
              <input
                type="number"
                value={pricemonth}
                onChange={(e) => setPricemonth(e.target.value)}
                className="block w-full border border-gray-500 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </label>
            <p className="text-[10px] text-stone-500 ">
              Note: If your charges are yearly, write 0
            </p>
          </div>
          <div className="w-1/2 ">
            <label className="block">
              <span className="text-black font-semibold mr-2">
                Price per Annum:
              </span>
              <input
                type="number"
                value={priceanuum}
                onChange={(e) => setPriceannum(e.target.value)}
                className="block w-full border border-gray-500 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </label>
            <p className="text-[10px] text-stone-500 ">
              Note: If your charges are monthly, write 0
            </p>
          </div>
        </div>

        <div className="flex flex-row gap-2 items-center w-full mt-4">
          <div className="w-1/2 mb-4">
            <label className="block">
              <span className="text-black font-semibold mr-2">
                Service Charge:
              </span>
              <input
                type="number"
                value={servicecharge}
                onChange={(e) => setServicecharge(e.target.value)}
                className="block w-full border border-gray-500 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </label>
          </div>

          <div className="w-1/2 mb-4">
            <label className="block">
              <span className="text-black font-semibold mr-2">Furnishing:</span>
              <select
                value={furnishing}
                onChange={(e) => setFurnishing(e.target.value)}
                className="block w-full border border-gray-500 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select furnishing</option>
                <option value="furnished">Furnished</option>
                <option value="unfurnished">Unfurnished</option>
              </select>
            </label>
          </div>
        </div>

        <label className="block mb-4">
          <span className="text-black font-semibold mr-2">Description:</span>
          <textarea
            value={desp}
            onChange={(e) => setDesp(e.target.value)}
            className="block w-full border border-gray-500 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </label>

        <label className="block mb-4">
          <span className="text-black font-semibold mr-2">
            Property Features:
          </span>
          <textarea
            value={propertydesp}
            onChange={(e) => setPropertydesp(e.target.value)}
            className="block w-full border border-gray-500 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </label>

        <label className="block mb-4">
          <span className="text-black font-semibold mr-2">Image:</span>
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            onClick={() => fileInputRef.current.click()}
          >
            Select Images
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            multiple
            className="hidden"
          />
        </label>

        {images.length > 0 && (
          <div className="mb-4">
            <p>Selected images:</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {images.map((images, index) => (
                <div key={index} className="relative">
                  <img
                    src={URL.createObjectURL(images)}
                    alt={`Selected ${index + 1}`}
                    className="max-w-sm w-1/2"
                  />
                  <button
                    type="button"
                    onClick={() => handleDelete(index)}
                    className="bg-red-500 hover:bg-red-600 text-white  p-2 m-2 rounded-full shadow-md shadow-red-800 absolute top-0 left-0"
                  >
                    <AiOutlineDelete />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {formError && <p className="text-red-500 mb-4">{formError}</p>}

        <div className="flex flex-row items-center justify-end gap-2 mt-4 md:mt-0">
          <Link
            to="/"
            className="bg-red-600 text-white py-2 text-center rounded w-full md:w-20"
          >
            Cancel
          </Link>

          <button
            type="submit"
            className={`bg-green-500 hover:bg-green-600 text-white py-2 px-10 rounded w-full md:w- ${
              creating ? "cursor-not-allowed" : ""
            }`}
            disabled={creating}
          >
            {creating ? "Creating..." : created ? "Created" : "Create"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;
