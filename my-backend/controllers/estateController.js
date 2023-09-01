const Estate = require("../models/estateModel");
const mongoose = require("mongoose");

// get all estates category
const getEstatesByCategory = async (req, res) => {
  const { category } = req.params;

  try {
    const estates = await Estate.find({
      category: { $regex: category, $options: "i" },
    }).sort({ createdAt: -1 });
    res.status(200).json(estates);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// get all estates state
const getEstatesByState = async (req, res) => {
  const { state } = req.params;

  try {
    const estates = await Estate.find({
      state: { $regex: state, $options: "i" },
    }).sort({ createdAt: -1 });
    res.status(200).json(estates);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Search estates by title, description, or any relevant field
const searchEstates = async (req, res) => {
  const { query } = req.params;

  try {
    const estates = await Estate.find({
      $or: [
        { title: { $regex: query, $options: "i" } },
        { desp: { $regex: query, $options: "i" } },
        { category: { $regex: query, $options: "i" } },
        { type: { $regex: query, $options: "i" } },
        { location: { $regex: query, $options: "i" } },
        { state: { $regex: query, $options: "i" } },
        { furnishing: { $regex: query, $options: "i" } },
        // Add other relevant fields that you want to search by
      ],
    }).sort({ createdAt: -1 });

    res.status(200).json(estates);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// advancesearch a new estate
const getAdvanceEstateSearch = async (req, res) => {
  const { query, minPrice, maxPrice } = req.params;

  try {
    const queryObj = {
      $or: [
        { title: { $regex: query, $options: "i" } },
        { desp: { $regex: query, $options: "i" } },
        { category: { $regex: query, $options: "i" } },
        { type: { $regex: query, $options: "i" } },
        { location: { $regex: query, $options: "i" } },
        { state: { $regex: query, $options: "i" } },
        { furnishing: { $regex: query, $options: "i" } },
        // Add other relevant fields that you want to search by
      ],
    };

    // Adding price range filter
    if (minPrice && maxPrice) {
      queryObj.price = {
        $gte: parseFloat(minPrice),
        $lte: parseFloat(maxPrice),
      };
    } else if (minPrice) {
      queryObj.price = { $gte: parseFloat(minPrice) };
    } else if (maxPrice) {
      queryObj.price = { $lte: parseFloat(maxPrice) };
    }

    const estates = await Estate.find(queryObj).sort({ createdAt: -1 });

    res.status(200).json(estates);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// get all estates
const getEstates = async (req, res) => {
  const estates = await Estate.find({}).sort({ createdAt: -1 });

  res.status(200).json(estates);
};

// get a single estate
const getEstate = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such estate" });
  }

  const estate = await Estate.findById(id);

  if (!estate) {
    return res.status(404).json({ error: "No such estate" });
  }

  res.status(200).json(estate);
};

// create a new estate
const createEstate = async (req, res) => {
  const {
    title,
    desp,
    category,
    price,
    condition,
    brand,
    email,
    phoneNumber,
    status,
    subtitle,
    pricemonth,
    priceanuum,
    bedroom,
    bathroom,
    toilets,
    packingspace,
    servicecharge,
    state,
    location,
    type,
    propertydesp,
    furnishing,
  } = req.body;

  try {
    let images = []; // Initialize an empty array to store the image URLs

    // Retrieve the uploaded image data (if any)
    if (req.files && req.files.length > 0) {
      images = req.files.map((file) => {
        const imgData = file.buffer.toString("base64");
        const contentType = file.mimetype;
        return `data:${contentType};base64,${imgData}`;
      });
    }

    const estate = await Estate.create({
      title,
      img: images, // Use the array of image URLs
      desp,
      category,
      price,
      condition,
      brand,
      email,
      phoneNumber,
      status,
      subtitle,
      pricemonth,
      priceanuum,
      bedroom,
      bathroom,
      toilets,
      packingspace,
      servicecharge,
      state,
      location,
      type,
      propertydesp,
      furnishing,
    });

    res.status(200).json(estate);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getEstates,
  getEstate,
  createEstate,
  getEstatesByCategory,
  searchEstates,
  getEstatesByState,
  getAdvanceEstateSearch,
};
