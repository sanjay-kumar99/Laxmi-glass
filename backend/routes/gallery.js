import express from "express";
import Gallery from "../models/Gallery.js";
import upload from "../middlewares/upload.js";

const router = express.Router();

router.post("/upload", upload.single("image"), async (req, res) => {
  try {
    const newImage = new Gallery({
      title: req.body.title,
      category: req.body.category,
      imageUrl: `http://localhost:5000/uploads/${req.file.filename}`,
    });

    await newImage.save();

    res.json(newImage);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:category", async (req, res) => {
  try {
    const categoryParam = req.params.category;

    const images = await Gallery.find({
      category: { $regex: new RegExp("^" + categoryParam + "$", "i") },
    });

    res.json(images);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/", async (req, res) => {
  const images = await Gallery.find();

  res.json(images);
});

export default router;
