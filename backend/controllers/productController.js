const admin = require("firebase-admin");
const uuid = require('uuid');
const serviceAccount = require("../config/sharequill-t13-firebase-adminsdk-2ecq3-9d5d7d91de.json");

const ProductsModel = require("../models/productsModel");

exports.productsHomePage = async (req, res) => {
  try {
    const existingProducts = await ProductsModel.find();
    if (existingProducts) {
      res.status(200).json(existingProducts);
      return;
    }
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
};

exports.postSpecs = async (req, res) => {
  try {
    const postData = req.body;
    const productInstance = new ProductsModel(postData);
    await productInstance.save();

    console.log("Received form data:", postData);
    res.json({ message: "Form data received successfully!" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "gs://sharequill-t13.appspot.com/",
});

exports.postImages = async (req, res) => {
  // Access the uploaded file from req.file
  const images = req.files;
  const bucket = admin.storage().bucket();
  const directoryName = `${uuid.v4()}/`;

  try {
    const uploadPromises = images.map((image) => {
      const imageBuffer = image.buffer;
      const imageFileName = directoryName + image.originalname;

      const file = bucket.file(imageFileName);
      return file.save(imageBuffer, { contentType: image.mimetype });
    });

    await Promise.all(uploadPromises);

    const downloadUrlsPromises = images.map(async (image) => {
      const imageFileName = directoryName + image.originalname;
      const [url] = await bucket
        .file(imageFileName)
        .getSignedUrl({ action: "read", expires: "01-01-2030" });
      return url;
    });

    const downloadUrls = await Promise.all(downloadUrlsPromises);

    console.log("All images uploaded to Firebase Storage");
    console.log("Public Accessible URLs:", downloadUrls);

    res.json({ imageUrl: downloadUrls });
  } catch (error) {
    console.error("Error uploading images:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
