const productController = require("../controllers/productController.js");

const router = require("express").Router();

// Add Product Router
router.post("/addProduct", productController.addProduct);

// Get All Products
router.get("/allProducts", productController.getAllProducts);

// Get Published Products
router.get("/published", productController.getPublishedProducts);

// Get Product by ID
router.get("/:id", productController.getProductByID);

// Update Product by ID
router.put("/:id", productController.updateProductByID);

// Delete Product by ID
router.delete("/:id", productController.deleteProductByID);

module.exports = router;
