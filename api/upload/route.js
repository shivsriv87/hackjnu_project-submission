// pages/api/getImage.js
import path from 'path';
import fs from 'fs';

export default function handler(req, res) {
  const imageName = req.query.imageName; // Get the image name from the query parameters

  // Specify the path to the public folder where the images are stored
  const imagePath = path.join(process.cwd(), '/public', imageName);

  // Check if the image file exists
  if (fs.existsSync(imagePath)) {
    // Serve the image
    const imageStream = fs.createReadStream(imagePath);
    imageStream.pipe(res);
  } else {
    // If the image does not exist, return a 404 response
    res.status(404).json({ error: 'Image not found' });
  }
}