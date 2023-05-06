const express = require("express");
const {
  gellAllProducts,
  createProducts,
  updateProduct,
  deleteProduct,
} = require("../controllers/ProductCntrl");

const router = express.Router();

router.get("/products", gellAllProducts);
router.post("/product", createProducts);
router.put("/product/:id", updateProduct);
router.delete("/product/:id", deleteProduct);

module.exports = router;
