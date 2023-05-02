const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;

const productController = require("./product/product.controller");
app.use("/products", productController);

app.listen(PORT, () => {
  console.log("Server running on port " + PORT + "...");
});
