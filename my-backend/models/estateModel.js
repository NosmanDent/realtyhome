const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const estateSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    img: [
      {
        type: String,
        required: true,
      },
    ],
    desp: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    condition: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    pricemonth: {
      type: Number,
      required: true,
    },
    priceanuum: {
      type: Number,
      required: true,
    },
    bedroom: {
      type: Number,
      required: true,
    },
    bathroom: {
      type: Number,
      required: true,
    },
    toilets: {
      type: Number,
      required: true,
    },
    packingspace: {
      type: Number,
      required: true,
    },
    servicecharge: {
      type: Number,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    propertydesp: {
      type: String,
      required: true,
    },
    furnishing: {
      type: String,
      required: true,
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("Estate", estateSchema);
