const Plate = require('../models/Plate');

// Function to handle creating a new plate with image upload or provided URL
exports.createPlate = (req, res) => {
  const { name, description, price, category, ingredients, imageUrl } = req.body;

  // Check if a file was uploaded
  if (req.file) {
    // An image file was uploaded, use its path as the imageUrl
    const uploadedImageUrl = req.file.path;

    const plate = new Plate({
      name,
      description,
      price,
      category,
      ingredients,
      imageUrl: uploadedImageUrl,
    });

    plate.save((err) => {
      if (err) {
        return res.status(400).json({ error: err.message });
      }

      return res.status(201).json(plate);
    });
  } else if (imageUrl) {
    // No file uploaded, use the provided imageUrl
    const plate = new Plate({
      name,
      description,
      price,
      category,
      ingredients,
      imageUrl,
    });

    plate.save((err) => {
      if (err) {
        return res.status(400).json({ error: err.message });
      }

      return res.status(201).json(plate);
    });
  } else {
    return res.status(400).json({ error: 'Please provide an image or imageUrl.' });
  }
};
