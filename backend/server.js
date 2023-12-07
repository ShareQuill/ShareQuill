const express = require('express');
const mongoose = require('mongoose');
const apiRoutes = require('./routers/apiRoutes');
const cors = require('cors');
require('dotenv').config();

const dbName = process.env.MONGO_DB_NAME;

const app = express();
app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3000', 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));
// Use user routes
app.use('/api', apiRoutes);

const connectToMongoDB = async () => {
  const connection = await mongoose.connect(process.env.MONGODB_URI + `${dbName}`);
  console.log('[MONGO DB] Connected to MongoDB - ' + dbName);
}

connectToMongoDB();

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`[SERVER] Server is running on port ${PORT}`);
});