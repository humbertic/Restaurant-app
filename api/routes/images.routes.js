const express = require('express');
const router = express.Router();
const multer = require('multer');
// const imagesController = require('../controllers/imagesController');

// Set up Multer to handle image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads'); // Specify the destination folder where files will be stored
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // Use the original file name as the image file name
  },
});
const upload = multer({ storage: storage });

const platesController = require('../controllers/platesController');

// Route for creating a new plate with image upload or provided URL
router.post('/api/plates', upload.single('file'), platesController.createPlate);

module.exports = router;
