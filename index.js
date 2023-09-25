const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;
var corsOptions = {
  origin: "http://localhost:8081",
};

// MIDDLEWARES
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test endpoint
app.get("/", (req, res) => {
  res.json({ message: "Hello world" });
});

// ROUTES
const router = require("./src/routes/productRouter.js");
app.use("/api/products", router);

// SERVER
app.listen(PORT, () => {
  console.log(`Server Started on http://localhost:${PORT}`);
});
