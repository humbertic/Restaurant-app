const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
// const multer = require('multer')

dotenv.config()
app.use(express.json())

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() =>{
    console.log("Connected to MongoDBase")
}).catch(err => console.log(err))

// Define routes
const plateRoutes = require('./routes/Plate.routes');
app.use('/api', plateRoutes);

app.listen("5000", () => {
    console.log("Backend is running.")
  })