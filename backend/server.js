const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routers/userRoutes');
const apiRoutes = require('./routers/apiRoutes');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3000', 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));
// Use user routes
app.use('/user', userRoutes);
app.use('/api', apiRoutes);


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});