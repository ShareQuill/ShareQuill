const mongoose = require("mongoose");
const collectionName = "products";

const productSchema = new mongoose.Schema({
  category: { type: String, required: true },
  sub_category: { type: String, required: true },
  type: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  condition: { type: String, required: true },
  age: { type: String, required: true },
  rates: {
    hourly_rate: { type: Number, min: 0 },
    daily_rate: { type: Number, min: 0 },
    weekly_rate: { type: Number, min: 0 },
    monthly_rate: { type: Number, min: 0 },
    sale: { type: Number, min: 0 },
  },
  location: {
    apartment_name: { type: String },
    area: { type: String },
    zip_code: { type: String, length: 5 },
    city: { type: String },
    state: { type: String },
  },
  photos_directory: {
    imageUrl: [
      {
        type: String,
        required: true,
      },
    ],
  },
  created_time: {
    type: Date,
    default: Date.now,
  },
});

const Products = mongoose.model(collectionName, productSchema);

module.exports = Products;
