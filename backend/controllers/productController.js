const ProductsModel = require("../models/productsModel");

exports.productsHomePage = async (req, res) => {
  try {
    const existingProducts = await ProductsModel.find();
    if (existingProducts) {
      res.status(200).json(existingProducts);
      return;
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
