const db = require("../models");

const Product = db.products;
const Review = db.reviews;

// CREATE PRODUCT
const addProduct = async (req, res) => {

  let productInfo = {
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    published: req.body.published ? req.body.published : false,
  };

  const product = await Product.create(productInfo);
  res.status(200).send(product);
};

// GET ALL PRODUCTS
const getAllProducts = async (req, res) => {
  let products = Product.findAll({});
  res.status(200).send(products);
};

// GET PRODUCT BY ID
const getProductByID = async (req, res) => {
  let id = req.params.id;
  let product = await Product.findOne({ where: { id: id } });
  res.status(200).send(product);
};

// UPDATE PRODUCT BY ID
const updateProductByID = async (req, res) => {
  let id = req.params.id;
  let product = await Product.update(req.body, { where: { id: id } });
  res.status(200).send(product);
};

// DELETE PRODUCT BY ID
const deleteProductByID = async (req, res) => {
  let id = req.params.id;
  await Product.destroy({ where: { id: id } });
  res.status(200).send("Product deleted!");
};

// GET PUBLISHED PRODUCTS
const getPublishedProducts = async (req, res) => {
  let product = await Product.findAll({ where: { published: true } });
  res.status(200).send(product);
};

module.exports = {
  addProduct,
  getAllProducts,
  getProductByID,
  updateProductByID,
  deleteProductByID,
  getPublishedProducts,
};
