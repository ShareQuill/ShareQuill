const mongoose = require("mongoose");
require('dotenv').config();

const dbName = "Listings";

mongoose.connect(process.env.MONGODB_URI + `${dbName}`);

const productSchema = new mongoose.Schema({
  category: { type: String, required: true },
  sub_category: { type: String, required: true },
  type: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  condition: { type: String, required: true },
  age: { type: String, required: true },
  rates: {
    hourly_rate: { type: String },
    daily_rate: { type: String },
    weekly_rate: { type: String },
    monthly_rate: { type: String },
    sale: { type: String },
  },
  location: {
    apartment_name: { type: String },
    area: { type: String },
    zip_code: { type: String },
    city: { type: String },
    state: { type: String },
  },
  photos_directory: { type: String },
  frequency: { type: String },
});

const Products = mongoose.model("products", productSchema);

module.exports = Products;
