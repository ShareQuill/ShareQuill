const mongoose = require("mongoose");
const collectionName = "products";

const handleDataChange = (change) => {
  // Extract updated data from the change event
  const updatedData = change.fullDocument;

  // Update React state using the updated data
  // ...

  // Trigger re-renders of affected UI components
  // ...
};

const startChangeStream = () => {
  const collection = mongoose.model();
  const changeStream = collection.watch();
  changeStream.on('change', handleDataChange);
};

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

const Products = mongoose.model(collectionName, productSchema);

module.exports = Products;
