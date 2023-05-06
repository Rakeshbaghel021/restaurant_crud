const mongoose = require("mongoose");

const product = new mongoose.Schema(
  {
    ProductName: {
      type: String,
    },
    Quantity: {
      type: Number,
    },
    PriceNet: {
      type: Number,
    },
    Vat: {
      type: Number,
    },
    PricGross: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", product);
