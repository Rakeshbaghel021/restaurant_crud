const Product = require("../models/Product");
require("dotenv").config();

const port = process.env.PORT;
const gellAllProducts = async (req, res) => {
  try {
    const product = await Product.find();
    res.json(product);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const createProducts = async (req, res) => {
  console.log(req.body, "rerere");
  try {
    const { ProductName, Quantity, PriceNet, Vat, PricGross } = req.body;
    const product = new Product({
      ProductName,
      Quantity,
      PriceNet,
      Vat,
      PricGross,
    });
    if (req.file) {
      product.ImageUrl = `http://localhost:${port}/` + req.file.path;
    }

    await product.save();
    res.json({ product, msg: "created a product" });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { ProductName, Quantity, PriceNet, Vat, PricGross } = req.body;
    await Product.findByIdAndUpdate(req.params.id, {
      ProductName,
      Quantity,
      PriceNet,
      Vat,
      PricGross,
    });
    const products = await Product.find();
    res.json({ msg: "updated a Product", products });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    const products = await Product.find();

    res.json({ products, msg: "Deleted a student" });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  gellAllProducts,
  createProducts,
  updateProduct,
  deleteProduct,
};
